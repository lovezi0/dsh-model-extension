/**
 * Artifact audit: the built bundles must describe the extension-seat plugin,
 * not the page it replaced.
 *
 * Everything here has failed at least once in this repository's history: a host
 * UI component sneaking into the bundle, a stale section registration, a doc
 * block whose replacement landed twice, or a version gate creeping back into
 * the server half.
 */
const fs = require('fs')

let failures = 0
const check = (name, ok) => {
  console.log(`${ok ? 'PASS' : 'FAIL'}  ${name}`)
  if (!ok) failures++
}

const client = fs.readFileSync('lib/client.js', 'utf8')
const clientMap = JSON.parse(fs.readFileSync('lib/client.js.map', 'utf8'))
const server = fs.readFileSync('lib/index.js', 'utf8')
const sources = (clientMap.sources ?? []).join('\n')

console.log('== server half ==')
check('no host-version gate', !server.includes('readHostVersion') && !server.includes('validated anchor'))
check('DSH_HOME still honored (metadata dir)', server.includes('DSH_HOME'))
check('metadata routes present', server.includes('models-index') && server.includes('models-download'))
check('pi-ai catalog route present', server.includes('pi-ai-catalog'))

console.log('== client half ==')
check('extension seat registered', client.includes('settings.models.provider-card'))
check('seat keyed on the pi-ai namespace', client.includes('"llm-pi-ai"') || client.includes("'llm-pi-ai'"))
check('seat id present', client.includes('model-extension-extras'))
check('the page replacement is gone', !client.includes('"settings.section"') && !client.includes('"models-extension"'))
check('no page component survives', !sources.includes('ModelsPlusSection') && !sources.includes('ProviderEditor'))
check('quick-load bundled', sources.includes('QuickLoad'))
check('model editor bundled', sources.includes('ModelsModal') && sources.includes('ModelCatalog'))

console.log('== hygiene ==')
const suspects = ['TODO', 'FIXME', 'undefined as never', 'replaced below']
const found = suspects.filter(s => client.includes(s))
check('no leftover placeholders', found.length === 0)
check('styles inlined at factory run', client.includes('data-plugin-css') && client.includes('appendChild'))

console.log(failures === 0 ? 'AUDIT PASS' : `AUDIT FAIL (${String(failures)} failures)`)
process.exitCode = failures === 0 ? 0 : 1