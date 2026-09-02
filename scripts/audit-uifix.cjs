// 三处 UI 修复点产物验证（一次性）
const src = require('fs').readFileSync('lib/client.js', 'utf8')
console.log('checkbox 15px style:', src.includes('width: "15px"') && src.includes('accentColor: "var(--dsw-alias-brand-primary)"'))
// 现行契约：扩展只写 reasoningEfforts 字典（清空写 void 0），绝不落单键 reasoningEffort
// （llm-pi-ai schema 会静默剥离 model-level reasoningEffort）
console.log('no single-key reasoningEffort write:', !/(^|[^s])reasoningEffort:/.test(src))
console.log('reasoningEfforts clear writes void 0:', src.includes('reasoningEfforts: void 0'))
console.log('level labels zh (超高):', src.includes('超高'))
console.log('modality labels zh (文本):', src.includes('文本'))
console.log('3-col grid table (56px):', src.includes('56px 1fr 1fr'))
console.log('bound index onChange:', src.includes('patch(index, next)'))
