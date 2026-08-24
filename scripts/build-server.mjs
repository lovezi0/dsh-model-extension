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

await build({
  entry: { index: resolve(projectRoot, 'src/index.ts') },
  outDir: resolve(projectRoot, 'lib'),
  outputOptions: { entryFileNames: 'index.js' },
  format: 'esm',
  platform: 'node',
  dts: false,
  sourcemap: true,
  clean: false,
  // Only node builtins stay external; the host provides everything else.
  external: [/^[^./]/],
  define: {
    __DSH_ADAPTER_VERSION__: JSON.stringify(pkg.dsh.adapter),
  },
})
console.log('[build] server half → lib/index.js')
