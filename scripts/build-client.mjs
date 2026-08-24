/**
 * Client-half build: src/client/index-extension.ts → lib/client.js
 *
 * Emits the DSH closure-factory bundle contract:
 *   banner: window.__ModuleLoader__.load({ id, factory: (require) => {
 *   intro:  var module = { exports: {} }; var exports = module.exports;
 *   footer: return module.exports; } });
 *
 * Official ui-settings-models sources (host tree) are inlined; our two .ext
 * touch-point files replace them via resolveId redirection so every importer —
 * official or ours — gets the ext version. Shared @deepseek-ai/* runtime faces
 * stay external per dsh.client.external + the platform baseline.
 */
import { resolve, dirname, basename, join, sep } from 'node:path'
import { existsSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { readFileSync } from 'node:fs'
import { build } from 'tsdown'

const projectRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const OFFICIAL_SRC_DIR = globalThis.OFFICIAL_SRC_DIR

const PLUGIN_ID = 'dsh-model-extension'

/** Touch-point files replaced by our .ext versions (paths relative to official src). */
const EXT_REDIRECTS = new Map([
  ['client/ModelListEditor.tsx', resolve(projectRoot, 'src/client/ModelListEditor.ext.tsx')],
  ['client/ModelsSection.tsx', resolve(projectRoot, 'src/client/ModelsSection.ext.tsx')],
])

/** Platform module-table baseline (mirrors host packages/client/web/src/platform.ts). */
const PLATFORM_EXTERNALS = [
  'react',
  'react/jsx-runtime',
  'react-dom',
  'react-dom/client',
  '@deepseek-ai/cordis',
  '@deepseek-ai/dsh-client-ui-slots',
  '@deepseek-ai/dsh-client-ui-primitives',
  '@deepseek-ai/dsh-client-runtime/client',
]

const pkg = JSON.parse(readFileSync(join(projectRoot, 'package.json'), 'utf8'))
/** eslint-disable-next-line no-unused-vars */
const DECLARED_EXTERNALS = [
  ...PLATFORM_EXTERNALS,
  ...(pkg.dsh?.client?.external ?? []),
]
const isExternal = (spec) => DECLARED_EXTERNALS.includes(spec)

/** Emit one plugin-owned style injector and an optional CSS Modules export. */
function styleInjectionModule(fileId, css, classMap) {
  const source = [
    `const css = ${JSON.stringify(css)};`,
    `const tagId = ${JSON.stringify(`${PLUGIN_ID}/${basename(fileId)}`)};`,
    'if (typeof document !== \'undefined\' && document.querySelector(\'style[data-plugin-css=\' + JSON.stringify(tagId) + \']\') === null) {',
    '  const tag = document.createElement(\'style\');',
    `  tag.dataset.plugin = ${JSON.stringify(PLUGIN_ID)};`,
    '  tag.dataset.pluginCss = tagId;',
    '  tag.textContent = css;',
    '  document.head.appendChild(tag);',
    '}',
  ]
  source.push(classMap === undefined ? 'export {};' : `export default ${JSON.stringify(classMap)};`)
  return source.join('\n')
}

await build({
  entry: { client: resolve(projectRoot, 'src/client/index-extension.ts') },
  outDir: resolve(projectRoot, 'lib'),
  format: 'cjs',
  platform: 'browser',
  dts: false,
  sourcemap: true,
  clean: false,
  bundle: true,
  deps: {
    neverBundle: isExternal,
    alwaysBundle: (spec) => !isExternal(spec),
  },
  define: {
    __DSH_ADAPTER_VERSION__: JSON.stringify(pkg.dsh.adapter),
    'process.env.NODE_ENV': JSON.stringify('production'),
  },
  // @tsdown/css pipeline: CSS Modules with the host's hashed pattern. The
  // emitted lib/style.css asset is deleted afterwards — the DSH client bundle
  // contract requires a single self-contained client.js with styles inlined
  // at factory run, so the CSS is re-inlined into the banner below.
  css: {
    minify: true,
    modules: {
      generateScopedName: '[hash]_[local]',
    },
  },
  plugins: [
    {
      // Bridge relative imports inside our ext/entry files to the official
      // sources: our files live in src/client, the official ones in the host
      // tree. Any relative specifier our files request that does not exist
      // locally resolves against the official client dir (with .ext files
      // already redirected below).
      name: 'dsh-official-bridge',
      resolveId(source, importer) {
        if (!source.startsWith('.') || typeof importer !== 'string') return null
        const resolved = resolve(dirname(importer), source)
        if (!existsSync(resolved) && importer.startsWith(projectRoot + sep + 'src')) {
          return join(OFFICIAL_SRC_DIR, 'client', basename(source))
        }
        return null
      },
    },
    {
      // Redirect the two official touch-point files to our .ext replacements.
      name: 'dsh-ext-redirect',
      resolveId(source, importer) {
        if (!source.startsWith('.')) return null
        const resolved = resolve(dirname(importer), source)
        // Normalize to "client/<file>.tsx" relative to the official src dir.
        if (!resolved.startsWith(OFFICIAL_SRC_DIR)) return null
        const rel = resolved.slice(OFFICIAL_SRC_DIR.length + 1).replaceAll('\\', '/')
        return EXT_REDIRECTS.get(rel) ?? null
      },
    },
  ],
  outputOptions: {
    entryFileNames: 'client.js',
    banner: `window.__ModuleLoader__.load({ id: ${JSON.stringify(PLUGIN_ID)}, factory: (require) => {`,
    footer: 'return module.exports; } });',
    intro: 'var module = { exports: {} }; var exports = module.exports;',
  },
})
console.log('[build] client half → lib/client.js')

// ---------------------------------------------------------------------------
// Post-process: inline the emitted CSS into client.js per the DSH plugin-style
// contract (tagged <style> at factory execution), then drop the css asset.
// The banner's factory body runs the injection before any component render.
// ---------------------------------------------------------------------------

import { readFileSync as rf, writeFileSync as wf, rmSync } from 'node:fs'

const cssAsset = join(projectRoot, 'lib', 'style.css')
const jsFile = join(projectRoot, 'lib', 'client.js')
const css = rf(cssAsset, 'utf8')
let js = rf(jsFile, 'utf8')

// Remove the leading `import './style.css';` line that @tsdown/css injects.
js = js.replace(/^import\s+'\.[/\\]style\.css';\s*\n/, '')

const injection = [
  `var __extCss = ${JSON.stringify(css)};`,
  `if (typeof document !== 'undefined' && document.querySelector('style[data-plugin-css="${PLUGIN_ID}"]') === null) {`,
  `  var __tag = document.createElement('style');`,
  `  __tag.dataset.plugin = ${JSON.stringify(PLUGIN_ID)};`,
  `  __tag.dataset.pluginCss = ${JSON.stringify(`${PLUGIN_ID}/ModelsSection.ext.module.css`)};`,
  `  __tag.textContent = __extCss;`,
  `  document.head.appendChild(__tag);`,
  `}`,
].join('\n')

// Insert right after the intro line (`var module = ...; var exports = ...;`)
js = js.replace(
  /^(window\.__ModuleLoader__\.load\(\{[^]*?var exports = module\.exports;\n)/,
  `$1${injection}\n`,
)
wf(jsFile, js)

// Privacy scrub: the bundle carries `//#region` comments with absolute host
// tree paths, and the sourcemap embeds them too. Strip both before commit.
js = js.replaceAll(/\/\/#region [^\n]*deepseek-harness[^\n]*/g, '//#region')
js = js.replaceAll(/\/\/#endregion[^\n]*/g, '//#endregion')
wf(jsFile, js)

const mapFile = `${jsFile}.map`
if (existsSync(mapFile)) {
  const map = JSON.parse(rf(mapFile, 'utf8'))
  map.sources = (map.sources ?? []).map((source) => {
    // Keep only our own relative sources; official-tree paths become opaque.
    return source.includes('deepseek-harness') || source.startsWith('..')
      ? source.replace(/^.*deepseek-harness[\\/]/, '').replace(/^[./\\]+/, 'official/')
      : source
  })
  wf(mapFile, JSON.stringify(map))
}

try {
  // Plain build artifact; a failing trash shim must not break the build.
  rmSync(cssAsset, { force: true })
} catch {
  console.warn(`[build] could not remove ${cssAsset}; delete it manually before commit`)
}
console.log(`[build] styles inlined into client.js (${css.length} bytes css)`)
