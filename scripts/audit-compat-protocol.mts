/**
 * Regression probe for the PROTOCOL-AWARE compat surface.
 *
 * The bug this exists to prevent: the adapter resolves each model's wire
 * protocol as `route.api ?? catalogEntry.api ?? routeSharedApi`, and refuses a
 * compat switch that protocol does not declare. Filtering or seeding compat by
 * the CATALOG ENTRY's protocol instead wrote `supportsStore` onto an
 * `anthropic-messages` route that rejects it — the save failed with a host
 * diagnostic about a switch the user never typed.
 *
 * Also guards the Gemini protocol rules the seat inherits from the host: the
 * protocol offers no compat switches at all, and its reasoning levels narrow to
 * four fixed spellings with no Off.
 *
 * Run: node --experimental-strip-types scripts/audit-compat-protocol.mts
 * (wired as `npm run audit:compat`)
 */
import assert from 'node:assert/strict'
import { offeredCompatFields, protocolOffers } from '../src/client/extension-meta.ts'
import { compatFrom, narrowEfforts, reasoningEffortsFrom } from '../src/client/models-plus/prefill.ts'
import { compatFailureMessage, validateModelRows } from '../src/client/models-plus/compat.ts'
import { sharedCatalogApi } from '../src/client/models-plus/models-index.ts'
import type { PrefillEntry, PrefillIndex } from '../src/client/models-plus/models-index.ts'

const ANTHROPIC = 'anthropic-messages'
const COMPLETIONS = 'openai-completions'
const GEMINI = 'google-generative-ai'

// --- 1. prefill filters by the protocol the row is judged by -------------
const catalogCompat = { supportsStore: false, maxTokensField: 'max_tokens', supportsTemperature: true }
assert.deepEqual(compatFrom(catalogCompat, ANTHROPIC), { supportsTemperature: true },
  'the anthropic subset survives the filter')
assert.deepEqual(compatFrom(catalogCompat, COMPLETIONS), { supportsStore: false, maxTokensField: 'max_tokens' })
assert.deepEqual(compatFrom(catalogCompat, undefined), {}, 'no protocol settles nothing')
assert.deepEqual(compatFrom(catalogCompat, GEMINI), {}, 'gemini offers no compat switch')

const efforts = reasoningEffortsFrom({ high: 'high' }, ANTHROPIC, true) as Record<string, string | null>
assert.equal(efforts['minimal'], 'low', 'anthropic collapses minimal onto low')

// --- 2. Gemini narrows levels to four fixed spellings --------------------
const wide = { off: null, minimal: 'minimal', low: 'low', medium: 'medium', high: 'high', xhigh: 'xhigh', max: 'max' }
assert.deepEqual(narrowEfforts(wide, GEMINI),
  { minimal: 'minimal', low: 'low', medium: 'medium', high: 'high' },
  'gemini keeps four levels, each sent under its own name, and drops Off')
assert.deepEqual(narrowEfforts({ off: null, high: 'high' }, GEMINI), { high: 'high' })
assert.equal(narrowEfforts({ off: null }, GEMINI), false, 'nothing beyond the narrowed set degrades to false')
assert.equal(narrowEfforts(false, GEMINI), false, 'a non-reasoning model stays false')
assert.deepEqual(narrowEfforts(wide, COMPLETIONS), wide, 'other protocols keep every level')

// --- 3. validation refuses, names and localises --------------------------
const offending = [{ id: 'deepseek-flash', compat: { supportsStore: false } }]
assert.equal(validateModelRows(offending, COMPLETIONS), undefined)
const failure = validateModelRows(offending, ANTHROPIC)
assert.equal(failure?.key, 'modelCompatNotOffered')
assert.equal(failure?.field, 'supportsStore')
assert.equal(failure?.api, ANTHROPIC)
assert.deepEqual(failure?.offered, offeredCompatFields(ANTHROPIC))
assert.ok(compatFailureMessage(failure!).includes('supportsStore'), 'the message names the offending switch')

assert.equal(validateModelRows(offending, undefined), undefined,
  'an unresolved protocol refuses nothing: a guess would block a valid config')
assert.equal(validateModelRows([{ id: 'claude', compat: { supportsTemperature: false } }], ANTHROPIC), undefined)

// --- 4. the gate table itself -------------------------------------------
assert.equal(protocolOffers(COMPLETIONS, 'supportsStore'), true)
assert.equal(protocolOffers(ANTHROPIC, 'supportsStore'), false)
assert.equal(protocolOffers(undefined, 'supportsStore'), false, 'no protocol takes anything')
assert.equal(protocolOffers(GEMINI, 'supportsStore'), false, 'gemini has no compat type')
assert.equal(protocolOffers('acme-chat', 'supportsStore'), false, 'a protocol with no compat type takes nothing')

// --- 5. route protocol resolution mirrors the host -----------------------
const entry = (over: Partial<PrefillEntry>): PrefillEntry => ({
  source: 'pi-ai', key: 'k', id: 'm', provider: 'gw', input: [], reasoning: false,
  context: undefined, output: undefined, ...over,
})
const index = (piAi: readonly PrefillEntry[]): PrefillIndex => ({ piAi, modelsDev: [], piAiWarnings: [] })
assert.equal(sharedCatalogApi(index([entry({ api: COMPLETIONS }), entry({ id: 'n', api: COMPLETIONS })]), 'gw'),
  COMPLETIONS, 'a catalog whose entries agree settles the route protocol')
assert.equal(sharedCatalogApi(index([entry({ api: COMPLETIONS }), entry({ id: 'n', api: ANTHROPIC })]), 'gw'),
  undefined, 'a catalog that disagrees settles nothing, exactly like the host')
assert.equal(sharedCatalogApi(index([entry({ api: COMPLETIONS })]), 'other'), undefined,
  'another provider answers nothing')
assert.equal(sharedCatalogApi(undefined, 'gw'), undefined, 'an unloaded index answers nothing')

console.log('audit-compat-protocol: PASS')
