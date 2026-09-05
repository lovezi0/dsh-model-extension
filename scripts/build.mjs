/**
 * Build script for dsh-model-extension.
 *
 * v1.0.0: self-contained — the official logic modules are vendored under
 * src/client/vendor/ (verbatim copies, see their headers), so no host
 * checkout is needed to build. The adapter anchor is still injected from
 * package.json `dsh.adapter` and enforced at runtime by src/index.ts.
 */
import { readFileSync, mkdirSync, rmSync } from 'node:fs'
import { resolve, dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const projectRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const pkg = JSON.parse(readFileSync(join(projectRoot, 'package.json'), 'utf8'))
if (typeof pkg.dsh?.adapter !== 'string' || pkg.dsh.adapter.length === 0) {
  console.error('[build] package.json is missing dsh.adapter (the pinned DSH version)')
  process.exit(1)
}

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
