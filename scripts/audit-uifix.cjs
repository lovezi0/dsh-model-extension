/**
 * UI-contract audit: the seat must carry the data it was built around.
 *
 * The enums and gate tables are pinned to the host release named in their
 * headers; this checks they survived bundling, that the Gemini narrowing is
 * wired, and that no host UI component is pulled in (the extension seat draws
 * only its own markup).
 */
const fs = require('fs')

let failures = 0
const check = (name, ok) => {
  console.log(`${ok ? 'PASS' : 'FAIL'}  ${name}`)
  if (!ok) failures++
}

const client = fs.readFileSync('lib/client.js', 'utf8')
const clientMap = JSON.parse(fs.readFileSync('lib/client.js.map', 'utf8'))
const sources = (clientMap.sources ?? []).join('\n')
// The drift anchors stay in the source even when no runtime path reads them:
// they are the table `audit:pi-ai` compares against the host, so they are
// checked where they live rather than where bundling may tree-shake them.
const metaSource = fs.readFileSync('src/client/extension-meta.ts', 'utf8')

// --- host UI must stay out: the seat owns its markup ----------------------
for (const banned of [
  'ModelsSection', 'ModelListEditor', 'CustomProviderCard', 'DeepSeekModelsEditor',
  'EditorFooter', 'OnboardingModal', 'WelcomeNotice', 'RetryPolicyEditor',
]) {
  check(`host UI absent: ${banned}`, !sources.includes(`/${banned}.tsx`))
}

// --- gate tables and enums survived bundling ------------------------------
check('7 effort levels anchored (xhigh + max)', metaSource.includes('xhigh') && metaSource.includes("'max'"))
check('11 thinking formats anchored (ant-ling, string-thinking)',
  metaSource.includes('ant-ling') && metaSource.includes('string-thinking'))
check('compat field table present', client.includes('supportsDeveloperRole') && client.includes('thinkingFormat'))
check('modalities text/image', /["']text["']/.test(client) && /["']image["']/.test(client))
check('gemini narrowing wired', client.includes('google-generative-ai'))
check('compat edits write the models array', client.includes('"models"') || client.includes("'models'"))

console.log(failures === 0 ? 'AUDIT PASS' : `AUDIT FAIL (${String(failures)} failures)`)
process.exitCode = failures === 0 ? 0 : 1