/**
 * dsh-model-extension — host-side entry.
 *
 * The plugin registers a companion "Models+" settings page whose client half is
 * built against the DeepSeek Harness `ui-settings-models` sources pinned by the
 * adapter anchor below. Registration is all-or-nothing: when the running host
 * version does not exactly match the anchor (or cannot be determined), the
 * plugin logs and skips registration — the client bundle never loads because
 * no slot is ever injected.
 */
import { createRequire } from 'node:module'
import { readFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'

/** Adapter anchor, injected at build time from package.json `dsh.adapter`. */
declare const __DSH_ADAPTER_VERSION__: string
const ADAPTER_VERSION: string = typeof __DSH_ADAPTER_VERSION__ === 'string'
  ? __DSH_ADAPTER_VERSION__
  : '0.0.0-unknown'

/** Cordis service name (distinct from the npm package name). */
export const name = 'model-extension'

/**
 * Read the running host's version by resolving the installed CLI package's
 * manifest.
 *
 * Node resolves symlinks by default, so the plugin module's real path is the
 * project checkout — walking up from there never reaches the global tree.
 * The resolution therefore starts at the *link* path under the profile
 * node_modules (symlink not resolved), then falls back to this module's own
 * real path. Both the global CLI package and its nested dsh-base are tried.
 * @returns the version string, or undefined when unresolvable.
 */
function readHostVersion(): string | undefined {
  const candidates: string[] = []
  // Link path under the active profile's node_modules (symlink not resolved).
  const dshHome = process.env.DSH_HOME
  if (dshHome !== undefined && dshHome.length > 0) {
    candidates.push(`${dshHome}/profiles/web/node_modules/dsh-model-extension/lib/index.js`)
    candidates.push(`${dshHome}/profiles/node/node_modules/dsh-model-extension/lib/index.js`)
  }
  // Real path of this module (last resort).
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
 * Host plugin body: register only on an exact version match.
 * @param ctx - cordis context (logger available).
 */
export function apply(ctx: { logger?: { warn(msg: string): void } }): void {
  const hostVersion = readHostVersion()
  if (hostVersion === undefined || hostVersion !== ADAPTER_VERSION) {
    ctx.logger?.warn(
      `[dsh-model-extension] host version ${hostVersion ?? '<unreadable>'} !== adapter anchor ${ADAPTER_VERSION}; plugin not registered`,
    )
    return
  }
  // Host-side behavior lives entirely in the client bundle; nothing to mount here.
}
