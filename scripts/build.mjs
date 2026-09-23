/**
 * Build script for dsh-model-extension.
 *
 * v1.0.0: self-contained — the official logic modules are vendored under
 * src/client/vendor/ (verbatim copies, see their headers), so no host
 * checkout is needed to build. No host version is injected here and none is
 * gated on at runtime: the host admits or denies this package from its own
 * `@deepseek-ai/dsh*` peerDependencies in package.json, which is the single
 * source of truth for the compatible host range.
 */
import { mkdirSync, rmSync } from 'node:fs'
import { resolve, dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const projectRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..')

// ---------------------------------------------------------------------------
// Output hygiene
// ---------------------------------------------------------------------------

const libDir = join(projectRoot, 'lib')
// rmSync only; lib/ is a plain build artifact dir (never user data).
try {
  rmSync(libDir, { recursive: true, force: true })
} catch {
  // A trash-shimmed fs may fail under some environments; tolerate and let
  // mkdir + overwrite proceed.
}
mkdirSync(libDir, { recursive: true })

// ---------------------------------------------------------------------------
// Server half + client half
// ---------------------------------------------------------------------------

await import('./build-server.mjs')
await import('./build-client.mjs')

console.log('[build] done.')
