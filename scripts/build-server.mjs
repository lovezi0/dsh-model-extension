/**
 * Server-half build: src/index.ts → lib/index.js (ESM, bundled single file).
 * The adapter anchor is injected as a build-time constant.
 */
import { resolve, dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { readFileSync } from 'node:fs'
import { build } from 'tsdown'

const projectRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const pkg = JSON.parse(readFileSync(join(projectRoot, 'package.json'), 'utf8'))

/**
 * Whether a module id names one of this project's own source files.
 *
 * The predicate must accept BOTH forms rolldown hands the `deps` callbacks:
 * the raw specifier (`./pi-ai-catalog`) and the resolved absolute path
 * (`<repo>/src/pi-ai-catalog.ts`). A leading-dot test alone silently
 * externalizes the resolved form — which is how an earlier revision of this
 * change shipped a lib/index.js still importing `./pi-ai-catalog.ts` and
 * therefore unable to load at all.
 * @param spec - the module id under consideration.
 * @returns true when the module should be inlined into the bundle.
 */
const isOwnSource = (spec) =>
  spec.startsWith('.') || spec.startsWith('/') || /^[A-Za-z]:[\\/]/.test(spec)

await build({
  entry: { index: resolve(projectRoot, 'src/index.ts') },
  outDir: resolve(projectRoot, 'lib'),
  outputOptions: { entryFileNames: 'index.js' },
  format: 'esm',
  platform: 'node',
  dts: false,
  sourcemap: true,
  clean: false,
  // Only node builtins stay a specifier; the host provides everything else.
  // Expressed through `deps` (not the regex `external`, which is deprecated and
  // tests the resolved path), so a relative import — the pi-ai catalog reader
  // is the first one this half ever had — is inlined rather than left as a
  // specifier lib/ cannot satisfy.
  deps: {
    neverBundle: (spec) => !isOwnSource(spec),
    alwaysBundle: (spec) => isOwnSource(spec),
  },
  define: {
    __DSH_ADAPTER_VERSION__: JSON.stringify(pkg.dsh.adapter),
  },
})
console.log('[build] server half → lib/index.js')
