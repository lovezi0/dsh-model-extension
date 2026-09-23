/**
 * dsh-model-extension — host-side entry (v1.0.0).
 *
 * The host half is the metadata service: same-origin routes backing the
 * Models+ page's quick-load. models.dev is fetched ONLY on an explicit user
 * click (the title-row button); the raw file caches next to settings.yaml
 * under DSH home. Only the flat models.dev shape (top-level keys = full model
 * ids) is accepted; anything else is a refusal, per plan. The pi-ai catalog is
 * the other, richer source: it is read from the installed package the host
 * adapter itself loads, with no network call at all (./pi-ai-catalog.ts).
 *
 * No version gate lives here. The `dsh.adapter` anchor is gone: the host (as
 * of 0.1.7-rc.1) admits or denies this package from its own
 * `@deepseek-ai/dsh*` peerDependencies, so a second, softer copy of that
 * decision inside the plugin body would only emit a warning nobody can act
 * on. The UI is fully plugin-owned, and the host's settings schema validation
 * plus revision fencing reject — never corrupt — anything a mismatched wire
 * contract might produce.
 */
import { existsSync, readFileSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import type { IncomingMessage, ServerResponse } from 'node:http'
import { piAiCatalog, piAiCopies, piAiUnavailableReason } from './pi-ai-catalog'

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
 * Host plugin body: mount the metadata routes (an explicit webServer register,
 * mirroring the hmr plugin's usage of the same registry).
 * @param ctx - cordis context.
 */
export function apply(ctx: PluginContext): void {
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

    // GET: the installed pi-ai catalog. Served straight from the package the
    // host adapter loads — no network, no cache file. A refusal (404) is the
    // client's signal to fall back to the models.dev index alone.
    const disposeCatalog = webServer.register({
      kind: 'exact',
      path: '/plugins/dsh-model-extension/pi-ai-catalog',
      handler: (req, res) => {
        if (req.method !== 'GET' && req.method !== 'HEAD') {
          res.writeHead(405)
          res.end()
          return
        }
        void (async () => {
          try {
            const catalog = await piAiCatalog()
            if (catalog === undefined) {
              // The refusal carries the reason AND the copies that are visible:
              // "the host ships no pi-ai" and "it ships one this reader cannot
              // call" are otherwise indistinguishable, and only the second is
              // worth acting on.
              json(res, 404, {
                ok: false,
                message: `pi-ai 内置目录不可用：${piAiUnavailableReason() ?? '原因未知'}`,
                copies: piAiCopies(),
              })
              return
            }
            json(res, 200, { ok: true, ...catalog })
          } catch (error) {
            const message = error instanceof Error ? error.message : String(error)
            json(res, 500, { ok: false, message })
          }
        })()
      },
    })

    return () => {
      const a = disposeIndex
      if (typeof a === 'function') a()
      const b = disposeDownload
      if (typeof b === 'function') b()
      const c = disposeCatalog
      if (typeof c === 'function') c()
    }
  }, 'dsh-model-extension: metadata routes')
}
