/**
 * Build script for dsh-model-extension.
 *
 * Pipeline:
 *  1. Read build.local.yaml (project root, gitignored) for the host source tree path.
 *  2. Verify the host tree's package.json version matches this package's
 *     `dsh.adapter` anchor; refuse to build on mismatch.
 *  3. Compile the server half (src/index.ts → lib/index.js).
 *  4. Bundle the client half (src/client/index-extension.ts → lib/client.js),
 *     inlining the official ui-settings-models sources from the host tree and
 *     redirecting the two touch-point files to our .ext replacements.
 */
import { readFileSync, existsSync, mkdirSync, rmSync } from 'node:fs'
import { resolve, dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { parse } from 'yaml'

const projectRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..')

// ---------------------------------------------------------------------------
// 1-2. Config + version gate
// ---------------------------------------------------------------------------

const configPath = join(projectRoot, 'build.local.yaml')
if (!existsSync(configPath)) {
  console.error(`[build] build.local.yaml not found at project root.

Create it with the absolute path of your DeepSeek Harness source checkout:

  # build.local.yaml (gitignored)
  deepseekHarness: <absolute path to deepseek-harness checkout>
`)
  process.exit(1)
}

const config = parse(readFileSync(configPath, 'utf8'))
if (typeof config?.deepseekHarness !== 'string' || config.deepseekHarness.length === 0) {
  console.error('[build] build.local.yaml must contain: deepseekHarness: <absolute path>')
  process.exit(1)
}

const hostRoot = resolve(projectRoot, config.deepseekHarness.replace(/^~(?=$|[\\/])/, process.env.HOME ?? process.env.USERPROFILE ?? ''))
const hostPkgPath = join(hostRoot, 'package.json')
if (!existsSync(hostPkgPath)) {
  console.error(`[build] no package.json under host tree: ${hostRoot}`)
  process.exit(1)
}

const pkg = JSON.parse(readFileSync(join(projectRoot, 'package.json'), 'utf8'))
const anchor = pkg.dsh?.adapter
if (typeof anchor !== 'string' || anchor.length === 0) {
  console.error('[build] package.json is missing dsh.adapter (the pinned DSH version)')
  process.exit(1)
}

const hostVersion = JSON.parse(readFileSync(hostPkgPath, 'utf8')).version
if (hostVersion !== anchor) {
  console.error(`[build] version mismatch:
  adapter anchor (package.json dsh.adapter): ${anchor}
  host tree version (${hostRoot}):          ${hostVersion}

Update the host checkout or bump dsh.adapter, then rebuild.`)
  process.exit(1)
}
console.log(`[build] host source: ${hostRoot} @ ${hostVersion}`)

/** Absolute dir of the official ui-settings-models sources in the host tree. */
const OFFICIAL_SRC_DIR = join(
  hostRoot,
  'packages',
  'client',
  'ui-settings-models',
  'src',
)
if (!existsSync(OFFICIAL_SRC_DIR)) {
  console.error(`[build] ui-settings-models sources not found under host tree: ${OFFICIAL_SRC_DIR}`)
  process.exit(1)
}
// Expose to the sub-build scripts (imported below) via the shared global.
globalThis.OFFICIAL_SRC_DIR = OFFICIAL_SRC_DIR

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
// 3. Server half
// ---------------------------------------------------------------------------

await import('./build-server.mjs')

// ---------------------------------------------------------------------------
// 4. Client half
// ---------------------------------------------------------------------------

await import('./build-client.mjs')

console.log('[build] done.')
