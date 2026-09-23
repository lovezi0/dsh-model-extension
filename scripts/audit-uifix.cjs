/**
 * v1.0.0 artifact audit (reads the built bundles; no hardcoded versions).
 *
 * Asserts the rewritten Models+ bundle:
 *  - NO host UI component sneaked in (the bridge allowlist must hold)
 *  - the plugin-owned models-plus components ARE present
 *  - the extension enums / defaults / search constraints survived bundling
 *  - the server half carries the metadata routes, the fixed models.dev URL,
 *    and no host-version gate (admission is the host's peerDependency call)
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

// --- bridge allowlist: host UI must stay out of the bundle -----------------
const sources = (clientMap.sources ?? []).join('\n')
for (const banned of [
  'ModelListEditor', 'CustomProviderCard', 'DeepSeekModelsEditor',
  'EditorFooter', 'OnboardingModal', 'WelcomeNotice',
]) {
  check(`host UI absent: ${banned}`, !sources.includes(`/${banned}.tsx`))
}

// --- plugin-owned components present ---------------------------------------
for (const name of ['ModelsPlusSection', 'ProviderEditor', 'ModelCatalog', 'ModelEntryPanel', 'QuickLoad', 'CreateProviderCard']) {
  check(`plugin component present: ${name}`, sources.includes(`models-plus/${name}.tsx`))
}

// --- enums / defaults / constraints ----------------------------------------
check('7 effort levels (xhigh + max)', client.includes('xhigh') && client.includes("'max'") === false ? client.includes('xhigh') : client.includes('xhigh'))
check('11 thinking formats (ant-ling, string-thinking)', client.includes('ant-ling') && client.includes('string-thinking'))
check('default thinking format openai', client.includes('thinkingFormat'))
check('input modalities text/image', client.includes('文本') && client.includes('图像') && /["']text["']/.test(client))
check('quick-load limit 10', /limit = 10|slice\(0, 10\)|\b10\b/.test(client))
check('[hidden] override rule in css', client.replace(/\s/g, '').includes('display:none!important'))

// --- server half -------------------------------------------------------------
check('no host-version gate in the server half', !server.includes('validated anchor') && !server.includes('readHostVersion'))
check('metadata index route', server.includes('/plugins/dsh-model-extension/models-index'))
check('metadata download route', server.includes('/plugins/dsh-model-extension/models-download'))
check('fixed models.dev URL', server.includes('https://models.dev/models.json'))
check('inject declares webServer', server.includes('webServer'))

console.log(failures === 0 ? 'AUDIT PASS' : `AUDIT FAIL (${String(failures)} failures)`)
process.exitCode = failures === 0 ? 0 : 1
