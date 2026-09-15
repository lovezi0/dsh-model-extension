/**
 * Regression probe for the PROTOCOL-AWARE compat surface.
 *
 * The bug this exists to prevent: the adapter resolves each model's wire
 * protocol as `route.api ?? catalogEntry.api ?? routeSharedApi`, and refuses a
 * compat switch that protocol does not declare. The panel used to filter and
 * seed compat by the CATALOG ENTRY's protocol, so loading a model from an
 * OpenAI-shaped catalog entry onto an `anthropic-messages` route wrote
 * `supportsStore` onto a route that rejects it — the save failed with a host
 * diagnostic about a switch the user never typed.
 *
 * Run: node --experimental-strip-types scripts/audit-compat-protocol.mts
 * (wired as `npm run audit:compat`)
 */
import assert from 'node:assert/strict'
import { offeredCompatFields, protocolOffers } from '../src/client/extension-meta.ts'
import { newModelDraft } from '../src/client/models-plus/presets.ts'
import { compatFrom, reasoningEffortsFrom } from '../src/client/models-plus/prefill.ts'
import { compatFailureMessage, validateModelRows } from '../src/client/models-plus/compat.ts'
import { sharedCatalogApi } from '../src/client/models-plus/models-index.ts'
import type { PrefillEntry, PrefillIndex } from '../src/client/models-plus/models-index.ts'

const ANTHROPIC = 'anthropic-messages'
const COMPLETIONS = 'openai-completions'

// --- 1. seeds ask the protocol before writing ----------------------------
const anthropicSeed = newModelDraft(ANTHROPIC)
assert.equal('compat' in anthropicSeed, false, 'an anthropic route seeds no compat at all')
assert.deepEqual(anthropicSeed['reasoningEfforts'], {
  off: null, minimal: 'minimal', low: 'low', medium: 'medium', high: 'high', xhigh: 'xhigh', max: 'max',
}, 'levels stay seeded: they are protocol-independent')

const completionsSeed = newModelDraft(COMPLETIONS)['compat'] as Record<string, unknown>
assert.equal(completionsSeed['supportsReasoningEffort'], true)
assert.equal(completionsSeed['thinkingFormat'], 'openai')

assert.equal('compat' in newModelDraft(), false, 'an unresolvable protocol seeds no compat')
assert.equal('compat' in newModelDraft('openai-responses'), false, 'responses takes neither switch')

// --- 2. prefill filters by the protocol the row is judged by -------------
const catalogCompat = { supportsStore: false, maxTokensField: 'max_tokens', supportsTemperature: true }
assert.deepEqual(compatFrom(catalogCompat, ANTHROPIC), { supportsTemperature: true },
  'the anthropic subset survives the filter')
assert.deepEqual(compatFrom(catalogCompat, COMPLETIONS), { supportsStore: false, maxTokensField: 'max_tokens' })
assert.deepEqual(compatFrom(catalogCompat, undefined), {}, 'no protocol settles nothing')

const efforts = reasoningEffortsFrom({ high: 'high' }, ANTHROPIC, true) as Record<string, string | null>
assert.equal(efforts['minimal'], 'low', 'anthropic collapses minimal onto low')

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
assert.equal(protocolOffers('acme-chat', 'supportsStore'), false, 'a protocol with no compat type takes nothing')

// --- 5. route protocol resolution mirrors the host -----------------------
const entry = (over: Partial<PrefillEntry>): PrefillEntry => ({
  source: 'pi-ai', key: 'k', id: 'm', provider: 'gw', input: [], reasoning: false,
  context: undefined, output: undefined, ...over,
})
const index = (piAi: readonly PrefillEntry[]): PrefillIndex => ({
  piAi, modelsDev: [], piAiWarnings: [],
})
assert.equal(sharedCatalogApi(index([entry({ api: COMPLETIONS }), entry({ id: 'n', api: COMPLETIONS })]), 'gw'),
  COMPLETIONS, 'a catalog whose entries agree settles the route protocol')
assert.equal(sharedCatalogApi(index([entry({ api: COMPLETIONS }), entry({ id: 'n', api: ANTHROPIC })]), 'gw'),
  undefined, 'a catalog that disagrees settles nothing, exactly like the host')
assert.equal(sharedCatalogApi(index([entry({ api: COMPLETIONS })]), 'other'), undefined,
  'another provider answers nothing')
assert.equal(sharedCatalogApi(undefined, 'gw'), undefined, 'an unloaded index answers nothing')

console.log('audit-compat-protocol: PASS')
