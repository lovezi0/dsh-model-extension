// 产物完整性复查脚本（一次性，不入构建链）
const src = require('fs').readFileSync('lib/client.js', 'utf8')
const srv = require('fs').readFileSync('lib/index.js', 'utf8')

console.log('== server half ==')
console.log('DSH_HOME candidate path logic:', srv.includes('profiles/web/node_modules'))
console.log('dsh-base fallback:', srv.includes('dsh-base/package.json'))
console.log('anchor constant:', srv.includes(`"${require('../package.json').dsh.adapter}"`))

console.log('== client half ==')
// 字典 key 抽样：fork 组件实际用到的
const dictKeys = ['nav:', 'title:', 'intro:', 'adapterVersion:', 'modelContextWindow:', 'modelMaxTokens:', 'fetchModels:', 'customized:', 'baseUrl:', 'apply:', 'fetchAdopt:', 'customRouteHint:']
let missing = dictKeys.filter(k => !src.includes(k))
console.log(missing.length === 0 ? '✓ all sampled dict keys present' : '✗ missing keys: ' + missing.join(', '))

// 组件挂载链
console.log('ModelsSection registered:', src.includes('"settings.section"') && src.includes('"models-extension"'))
console.log('ModelExtensionFields mounted with bound index:', src.includes('onChange: (next) => {') && src.includes('patch(index, next)'))
console.log('locale-aware t in ext fields:', src.includes('documentElement.lang.startsWith'))

// 残留占位扫描
const suspects = ['TODO', 'FIXME', 'undefined as never', 'replaced below']
const found = suspects.filter(s => src.includes(s))
console.log(found.length === 0 ? '✓ no leftover placeholders' : '✗ found: ' + found.join(', '))
