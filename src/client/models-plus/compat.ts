/**
 * Pure helpers copied from the host's ui-settings-models UI component files
 * (they live inside components there, so they cannot be inlined as standalone
 * modules like operations/store/schema-operations are).
 *
 * ⚠️ Fork-copy risk: these must be re-checked against the pinned host sources
 * (packages/client/ui-settings-models/src/client/{ProviderEditor,DeepSeekModelsEditor}.tsx
 * — last verified unchanged @ 0.1.7-rc.2) on every host upgrade.
 */

/** One model entry kept structurally open so hidden or future fields survive an edit. */
export type ModelDraft = Record<string, unknown>

// ---------------------------------------------------------------------------
// pathOps — copied from ProviderEditor.tsx @ 0.1.5-rc.1
// ---------------------------------------------------------------------------

import type { JsonValue } from '@deepseek-ai/dsh-util-values'
import type { SettingsPathOpView } from '@deepseek-ai/dsh-api-remotes/client'
import { offeredCompatFields, protocolOffers } from '../extension-meta.ts'

/**
 * The minimal path ops carrying `after` over `before`, both as the card sees
 * them. Only keys the card observed are named; fields absent from both sides
 * produce no op, which is why edits are path-addressed rather than a rebuilt
 * section.
 * @param base - path of the edited subtree inside the user section.
 * @param before - the subtree as loaded, or undefined when it is new.
 * @param after - the subtree as edited.
 * @returns ordered set/unset ops; empty when nothing changed.
 */
export function pathOps(
  base: readonly string[],
  before: unknown,
  after: Record<string, unknown>,
): SettingsPathOpView[] {
  const previous = typeof before === 'object' && before !== null && !Array.isArray(before)
    ? before as Record<string, unknown>
    : {}
  const ops: SettingsPathOpView[] = []
  for (const [key, value] of Object.entries(after)) {
    if (JSON.stringify(previous[key]) === JSON.stringify(value)) continue
    ops.push({ op: 'set', path: [...base, key], value: value as JsonValue })
  }
  for (const key of Object.keys(previous)) {
    if (!(key in after)) ops.push({ op: 'unset', path: [...base, key] })
  }
  return ops
}

// ---------------------------------------------------------------------------
// capacity parsing/formatting — copied from DeepSeekModelsEditor.tsx @ 0.1.5-rc.1
// ---------------------------------------------------------------------------

/** Accepted capacity spellings: a decimal count with an optional K/M suffix. */
const CAPACITY_PATTERN = /^(\d+(?:\.\d+)?)([km])?$/i

/** Decimal suffix scales — `1M` is 1000K, matching how model capacities are quoted. */
const CAPACITY_SCALE = { k: 1_000, m: 1_000_000 } as const

/**
 * Read a typed capacity, so a user can write `256K` or `1M` instead of counting
 * zeroes. The stored value stays a plain token count.
 * @param text - raw field text.
 * @returns the count; `undefined` when blank (inherit), `NaN` when unreadable
 * (rejected by {@link validateModelRows} before any write).
 */
export function parseCapacity(text: string): number | undefined {
  const trimmed = text.trim()
  if (trimmed.length === 0) return undefined
  const match = CAPACITY_PATTERN.exec(trimmed)
  if (match === null) return Number.NaN
  const suffix = match[2]?.toLowerCase()
  const scale = suffix === 'k' || suffix === 'm' ? CAPACITY_SCALE[suffix] : 1
  const scaled = Number(match[1]) * scale
  // A decimal multiple is exact in intent but not in binary floating point
  // (2.3 * 1e6 lands a few ULPs high), so an integral intent snaps back.
  const rounded = Math.round(scaled)
  return Math.abs(scaled - rounded) < 1e-6 ? rounded : scaled
}

/**
 * Spell a stored count back in the shortest form that survives a round trip
 * through {@link parseCapacity}; a count that is not a whole number of
 * thousands stays written out.
 * @param value - stored capacity.
 * @returns the field text.
 */
export function formatCapacity(value: number): string {
  if (!Number.isInteger(value) || value <= 0) return String(value)
  if (value % CAPACITY_SCALE.m === 0) return `${String(value / CAPACITY_SCALE.m)}M`
  if (value % CAPACITY_SCALE.k === 0) return `${String(value / CAPACITY_SCALE.k)}K`
  return String(value)
}

// ---------------------------------------------------------------------------
// model-row validation — copied from DeepSeekModelsEditor.tsx @ 0.1.5-rc.1
// ---------------------------------------------------------------------------

/** A localized validation failure for one user-owned model array. */
export interface ModelRowsValidationFailure {
  /** Zero-based model position. */
  index: number
  /** Message key owned by the Models+ dictionary. */
  key: 'modelIdRequired' | 'modelIdDuplicate' | 'modelNameInvalid' | 'modelContextInvalid'
  | 'modelMaxTokensInvalid' | 'modelCompatNotOffered'
  /** For `modelCompatNotOffered`: the switch the protocol refuses. */
  field?: string
  /** For `modelCompatNotOffered`: the protocol the row resolves to. */
  api?: string
  /** For `modelCompatNotOffered`: the switches that protocol does take. */
  offered?: readonly string[]
}

/** Convert a schema-validated catalog value into records without dropping hidden fields. */
export function modelDrafts(value: unknown): ModelDraft[] {
  if (!Array.isArray(value)) return []
  return value.map(entry =>
    typeof entry === 'object' && entry !== null && !Array.isArray(entry)
      ? entry as ModelDraft
      : {})
}

// ---------------------------------------------------------------------------
// row key-order normalization (plugin addition, v1.0.0: stable YAML key order)
// ---------------------------------------------------------------------------

/** Canonical key order for one models[] row (plugin-known fields first). */
const ROW_KEY_ORDER = ['id', 'name', 'contextWindow', 'maxTokens', 'input', 'reasoningEfforts', 'compat']

/** Canonical key order for the row's compat sub-object. */
const COMPAT_KEY_ORDER = ['supportsDeveloperRole', 'supportsReasoningEffort', 'thinkingFormat']

/**
 * Re-key one model row into the canonical order (plugin-known fields in
 * order, unknown/future fields kept at the tail so nothing is dropped).
 * YAML emits keys in object insertion order, and interactive edits append
 * keys at the tail — without this, rows saved after quick-load or gated-key
 * removals come out with scrambled key orders (purely cosmetic, but noisy
 * in settings.yaml diffs).
 * @param row - the drafted row.
 * @returns the re-keyed row (shallow copy).
 */
export function normalizeModelRow(row: ModelDraft): ModelDraft {
  const next: ModelDraft = {}
  for (const key of ROW_KEY_ORDER) {
    if (key in row) next[key] = row[key]
  }
  for (const key of Object.keys(row)) {
    if (!ROW_KEY_ORDER.includes(key)) next[key] = row[key]
  }
  const compat = next['compat']
  if (typeof compat === 'object' && compat !== null && !Array.isArray(compat)) {
    const source = compat as Record<string, unknown>
    const normalized: Record<string, unknown> = {}
    for (const key of COMPAT_KEY_ORDER) {
      if (key in source) normalized[key] = source[key]
    }
    for (const key of Object.keys(source)) {
      if (!COMPAT_KEY_ORDER.includes(key)) normalized[key] = source[key]
    }
    next['compat'] = normalized
  }
  return next
}

/**
 * The message for a refused compat switch, shared by both provider cards so the
 * same failure reads the same way wherever it is hit.
 * @param failure - a `modelCompatNotOffered` failure from {@link validateModelRows}.
 * @returns the localised sentence.
 */
export function compatFailureMessage(failure: ModelRowsValidationFailure): string {
  const offered = failure.offered ?? []
  const available = offered.length === 0
    ? '，该协议不接受任何可配置开关'
    : `，该协议可用：${offered.join('、')}`
  return `模型 ${String(failure.index + 1)}：compat 开关 ${String(failure.field)} 不适用于当前协议`
    + `（${String(failure.api)}）${available}。请在展开的「其他兼容开关」中清空该项以移除，`
    + '或回到供应商页把协议改成端点真正使用的协议。'
}

/**
 * Validate adapter constraints that the serialized schema cannot express.
 *
 * The compat half of the check exists because the adapter *refuses* a switch a
 * model's protocol does not declare rather than ignoring it — and the protocol
 * a row resolves to is `route.api` first, the installed catalog entry second.
 * A row can therefore hold switches that were legal when it was written (a
 * protocol change on the route, or a prefill taken from another protocol's
 * catalog entry) and only fail at save time, in English, from the host. This
 * turns that into a positioned, named, localised refusal.
 *
 * An unknown protocol is skipped on purpose: the route's protocol could not be
 * resolved, so the row's real one is unknowable here, and a guess would refuse
 * a configuration the host accepts. The host's own diagnostic still covers it.
 * @param value - user-owned `models` value, or undefined while inherited.
 * @param api - the protocol every row resolves to, when the route settles one.
 * @returns the first invalid row, or undefined when the adapter will accept it.
 */
export function validateModelRows(value: unknown, api?: string): ModelRowsValidationFailure | undefined {
  if (value === undefined) return undefined
  const models = modelDrafts(value)
  const seen = new Set<string>()
  for (const [index, model] of models.entries()) {
    // Compared trimmed: surrounding whitespace is a paste artifact the adapter
    // would never match, and an untrimmed compare lets `model ` slip past the
    // duplicate check against its own twin.
    const id = model['id']
    const trimmed = typeof id === 'string' ? id.trim() : undefined
    if (trimmed === undefined || trimmed.length === 0) return { index, key: 'modelIdRequired' }
    if (seen.has(trimmed)) return { index, key: 'modelIdDuplicate' }
    seen.add(trimmed)
    const name = model['name']
    if (name !== undefined && (typeof name !== 'string' || name.length === 0)) {
      return { index, key: 'modelNameInvalid' }
    }
    const contextWindow = model['contextWindow']
    if (contextWindow !== undefined
      && (typeof contextWindow !== 'number' || !Number.isInteger(contextWindow) || contextWindow <= 0)) {
      return { index, key: 'modelContextInvalid' }
    }
    const maxTokens = model['maxTokens']
    if (maxTokens !== undefined
      && (typeof maxTokens !== 'number' || !Number.isInteger(maxTokens) || maxTokens <= 0)) {
      return { index, key: 'modelMaxTokensInvalid' }
    }
    const compat = model['compat']
    if (api !== undefined && typeof compat === 'object' && compat !== null && !Array.isArray(compat)) {
      for (const field of Object.keys(compat)) {
        if (protocolOffers(api, field)) continue
        return { index, key: 'modelCompatNotOffered', field, api, offered: offeredCompatFields(api) }
      }
    }
  }
  return undefined
}
