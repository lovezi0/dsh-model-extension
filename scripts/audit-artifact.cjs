// 产物完整性复查脚本（一次性，不入构建链）
const src = require('fs').readFileSync('lib/client.js', 'utf8')
const srv = require('fs').readFileSync('lib/index.js', 'utf8')

console.log('== server half ==')
// The runtime version gate is gone by design — the host admits or denies this
// package from its own `@deepseek-ai/dsh*` peerDependencies — so guard against
// it (and its build-time anchor constant) sneaking back in.
console.log('no host-version gate:', !srv.includes('readHostVersion') && !srv.includes('validated anchor'))
console.log('DSH_HOME still honored (metadata dir):', srv.includes('DSH_HOME'))

console.log('== client half ==')
// 字典 key 抽样：fork 组件实际用到的
const dictKeys = ['nav:', 'title:', 'intro:', 'customBaseUrlInvalid:', 'modelContextWindow:', 'modelMaxTokens:', 'fetchModels:', 'customized:', 'baseUrl:', 'apply:', 'fetchAdopt:', 'customRouteHint:']
let missing = dictKeys.filter(k => !src.includes(k))
console.log(missing.length === 0 ? '✓ all sampled dict keys present' : '✗ missing keys: ' + missing.join(', '))

// 组件挂载链（v1.x：自建 Models+ 组件树，扩展字段在 ModelCatalog 的模型行里 patch）
console.log('Models+ section registered:', src.includes('"settings.section"') && src.includes('"models-extension"'))
console.log('model row patch wired with bound index:', src.includes('patch(index'))
console.log('extension-field dictionary keys present:', src.includes('supportsDeveloperRole:') && src.includes('reasoningEfforts:'))

// 残留占位扫描
const suspects = ['TODO', 'FIXME', 'undefined as never', 'replaced below']
const found = suspects.filter(s => src.includes(s))
console.log(found.length === 0 ? '✓ no leftover placeholders' : '✗ found: ' + found.join(', '))
