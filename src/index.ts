/**
 * dsh-model-extension — host-side entry (v1.0.0).
 *
 * Two halves:
 * 1. The adapter anchor: ADVISORY at runtime — on a host-version mismatch the
 *    plugin logs a warning and registers anyway. The UI is fully plugin-owned,
 *    and the host's own settings schema validation plus revision fencing keep
 *    a mismatched wire write from corrupting anything (worst case: a refused
 *    write with a diagnostic), so a hard gate would only make compatible
 *    upgrades silently drop the plugin.
 * 2. The metadata service: two same-origin routes backing the Models+ page's
 *    quick-load. models.dev is fetched ONLY on an explicit user click (the
 *    title-row button); the raw file caches next to settings.yaml under DSH
 *    home. Only the flat models.dev shape (top-level keys = full model ids)
 *    is accepted; anything else is a refusal, per plan.
 */
import { createRequire } from 'node:module'
import { existsSync, readFileSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import type { IncomingMessage, ServerResponse } from 'node:http'

/** Adapter anchor, injected at build time from package.json `dsh.adapter`. */
declare const __DSH_ADAPTER_VERSION__: string
const ADAPTER_VERSION: string = typeof __DSH_ADAPTER_VERSION__ === 'string'
  ? __DSH_ADAPTER_VERSION__
  : '0.0.0-unknown'

/** Cordis service name (distinct from the npm package name). */
export const name = 'model-extension'

/** Required services — the route registry lives on the host web server. */
export const inject = ['webServer']

/** The one metadata source this plugin accepts (plan: fixed, never configurable). */
const METADATA_URL = 'https://models.dev/models.json'

/** Download timeout in milliseconds. */
const DOWNLOAD_TIMEOUT_MS = 30_000

/** Structured face of the host web server this plugin needs. */
interface WebServerLike {
  register(route: {
    kind: 'exact'
    path: string
    handler: (req: IncomingMessage, res: ServerResponse) => void
  }): (() => void) | Promise<() => void>
}

/** Minimal cordis context face this plugin uses. */
interface PluginContext {
  logger?: {
    warn(msg: string): void
    info(msg: string): void
  }
  effect?: (fn: () => (() => void) | void, name?: string) => void
  webServer?: WebServerLike
}

/** One precise model entry in the served index. */
interface MetadataEntry {
  id: string
  context?: number
  output?: number
  input: string[]
  reasoning: boolean
}

/**
 * Read the running host's version by resolving the installed CLI package's
 * manifest.
 *
 * Node resolves symlinks by default, so the plugin module's real path is the
 * project checkout — walking up from there never reaches the global tree.
 * The resolution therefore starts at the *link* path under the profile
 * node_modules (symlink not resolved), then falls back to this module's own
 * real path.
 * @returns the version string, or undefined when unresolvable.
 */
function readHostVersion(): string | undefined {
  const candidates: string[] = []
  const dshHome = process.env.DSH_HOME
  if (dshHome !== undefined && dshHome.length > 0) {
    candidates.push(`${dshHome}/profiles/web/node_modules/dsh-model-extension/lib/index.js`)
    candidates.push(`${dshHome}/profiles/node/node_modules/dsh-model-extension/lib/index.js`)
  }
  try {
    candidates.push(fileURLToPath(import.meta.url))
  } catch { /* ignore */ }

  for (const specifier of ['@deepseek-ai/dsh/package.json', '@deepseek-ai/dsh-base/package.json']) {
    for (const base of candidates) {
      try {
        const require = createRequire(base)
        const manifestPath = require.resolve(specifier)
        const manifest = JSON.parse(readFileSync(manifestPath, 'utf8')) as { version?: unknown }
        if (typeof manifest.version === 'string') return manifest.version
      } catch { /* next candidate */ }
    }
  }
  return undefined
}

/**
 * Resolve the directory the metadata file lives in: next to the first
 * settings.yaml found (plan: "DSH home, same level as settings.yaml"),
 * falling back to DSH home itself and then the process cwd.
 * @returns the directory path.
 */
function metadataDir(): string {
  const dshHome = process.env.DSH_HOME
  const probes: string[] = []
  if (dshHome !== undefined && dshHome.length > 0) {
    probes.push(join(dshHome, 'settings.yaml'))
    probes.push(join(dshHome, 'profiles', 'web', 'settings.yaml'))
    probes.push(dshHome)
  }
  probes.push(process.cwd())
  for (const probe of probes) {
    if (probe.endsWith('.yaml')) {
      if (existsSync(probe)) return dirname(probe)
      continue
    }
    return probe
  }
  return process.cwd()
}

/** The metadata file's absolute path. */
function metadataPath(): string {
  return join(metadataDir(), 'models.json')
}

/**
 * Validate the raw models.dev payload: ONLY the flat shape (top-level keys
 * are full model ids) is accepted, per plan.
 * @param data - the parsed payload.
 * @returns the precise index.
 * @throws when the shape is not the flat models.dev format.
 */
function toIndex(data: unknown): MetadataEntry[] {
  if (typeof data !== 'object' || data === null || Array.isArray(data)) {
    throw new Error('unexpected metadata shape (not an object)')
  }
  const entries = Object.entries(data as Record<string, unknown>)
  if (entries.length === 0) throw new Error('metadata file is empty')
  const first = entries[0]![1]
  if (typeof first !== 'object' || first === null || 'models' in (first as object)) {
    throw new Error('unexpected metadata shape (provider-grouped or foreign format)')
  }
  const index: MetadataEntry[] = []
  for (const [key, value] of entries) {
    if (typeof value !== 'object' || value === null) continue
    const row = value as Record<string, unknown>
    const limit = typeof row['limit'] === 'object' && row['limit'] !== null
      ? row['limit'] as Record<string, unknown>
      : {}
    const modalities = typeof row['modalities'] === 'object' && row['modalities'] !== null
      ? row['modalities'] as Record<string, unknown>
      : {}
    const rawInput = Array.isArray(modalities['input'])
      ? modalities['input'].filter((m): m is string => typeof m === 'string')
      : []
    index.push({
      id: typeof row['id'] === 'string' ? row['id'] : key,
      context: typeof limit['context'] === 'number' ? limit['context'] : undefined,
      output: typeof limit['output'] === 'number' ? limit['output'] : undefined,
      // Only the modalities this UI offers; anything else is dropped.
      input: rawInput.filter(m => m === 'text' || m === 'image'),
      reasoning: row['reasoning'] === true,
    })
  }
  return index
}

/** Read the cached metadata file, or undefined when absent/unreadable. */
function readCachedIndex(): MetadataEntry[] | undefined {
  try {
    const raw = readFileSync(metadataPath(), 'utf8')
    return toIndex(JSON.parse(raw) as unknown)
  } catch {
    return undefined
  }
}

/** Whether the raw payload is accepted for caching. */
function isIndexable(data: unknown): boolean {
  try {
    toIndex(data)
    return true
  } catch {
    return false
  }
}

/** Write one JSON response. */
function json(res: ServerResponse, status: number, body: unknown): void {
  res.writeHead(status, { 'content-type': 'application/json; charset=utf-8' })
  res.end(JSON.stringify(body))
}

/**
 * Host plugin body: gate on the exact host version, then mount the two
 * metadata routes (an explicit webServer register, mirroring the hmr plugin's
 * usage of the same registry).
 * @param ctx - cordis context.
 */
export function apply(ctx: PluginContext): void {
  const hostVersion = readHostVersion()
  if (hostVersion === undefined || hostVersion !== ADAPTER_VERSION) {
    // Advisory only: the plugin-owned UI does not fork host components, and
    // the host's settings schema validation + revision fence reject (never
    // corrupt) anything a mismatched wire contract might produce.
    ctx.logger?.warn(
      `[dsh-model-extension] host version ${hostVersion ?? '<unreadable>'} differs from the validated anchor ${ADAPTER_VERSION}; registering anyway — if settings reads or writes misbehave, please report the host version`,
    )
  }

  const webServer = ctx.webServer
  if (webServer === undefined) {
    ctx.logger?.warn('[dsh-model-extension] webServer service absent; metadata routes not mounted')
    return
  }

  ctx.effect?.(() => {
    // GET: serve the cached index; 404 (with guidance) when not ready yet.
    const disposeIndex = webServer.register({
      kind: 'exact',
      path: '/plugins/dsh-model-extension/models-index',
      handler: (req, res) => {
        if (req.method !== 'GET' && req.method !== 'HEAD') {
          res.writeHead(405)
          res.end()
          return
        }
        const index = readCachedIndex()
        if (index === undefined) {
          json(res, 404, { ok: false, message: '元数据未就绪：请点击「下载/更新元数据」，或手动将 models.json 放入 DSH home。' })
          return
        }
        json(res, 200, index)
      },
    })

    // POST: the explicit download/update. Fetches models.dev, validates the
    // flat shape, caches next to settings.yaml, and answers with the index.
    const disposeDownload = webServer.register({
      kind: 'exact',
      path: '/plugins/dsh-model-extension/models-download',
      handler: (req, res) => {
        if (req.method !== 'POST' && req.method !== 'GET') {
          res.writeHead(405)
          res.end()
          return
        }
        void (async () => {
          try {
            const response = await fetch(METADATA_URL, { signal: AbortSignal.timeout(DOWNLOAD_TIMEOUT_MS) })
            if (!response.ok) {
              json(res, 502, { ok: false, message: `models.dev 返回 HTTP ${String(response.status)}` })
              return
            }
            const data: unknown = await response.json()
            if (!isIndexable(data)) {
              json(res, 422, { ok: false, message: 'models.dev 数据格式不被识别（仅支持 models.dev/models.json 的扁平格式）' })
              return
            }
            writeFileSync(metadataPath(), JSON.stringify(data), 'utf8')
            ctx.logger?.info(`[dsh-model-extension] metadata cached at ${metadataPath()}`)
            json(res, 200, { ok: true, index: toIndex(data) })
          } catch (error) {
            const message = error instanceof Error ? error.message : String(error)
            json(res, 502, { ok: false, message })
          }
        })()
      },
    })

    return () => {
      const a = disposeIndex
      if (typeof a === 'function') a()
      const b = disposeDownload
      if (typeof b === 'function') b()
    }
  }, 'dsh-model-extension: metadata routes')
}
