// 三处 UI 修复点产物验证（一次性）
const src = require('fs').readFileSync('lib/client.js', 'utf8')
console.log('checkbox 15px style:', src.includes('width: "15px"') && src.includes('accentColor: "var(--dsw-alias-brand-primary)"'))
console.log('single-commit gate off:', /reasoningEfforts: void 0,\s*reasoningEffort: void 0/.test(src.replace(/\s+/g, ' ')))
console.log('level labels zh (超高):', src.includes('超高'))
console.log('modality labels zh (文本):', src.includes('文本'))
console.log('3-col grid table (56px):', src.includes('56px 1fr 1fr'))
console.log('bound index onChange:', src.includes('patch(index, next)'))
