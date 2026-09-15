/**
 * Mapping pi-ai catalog values onto a Models+ row.
 *
 * The two sides describe the same thing, but two conventions differ in a way
 * that makes a straight copy wrong:
 *
 * 1. **`null` means the opposite in each.** pi-ai's `thinkingLevelMap[level]`
 *    is *unsupported* when null; our `reasoningEfforts[level]` is *supported,
 *    send nothing* when null (the adapter then drops the key entirely, and
 *    pi-ai reads an absent `off` key as "supported but send no parameter").
 *    Copying one across would invert the meaning for 338 of the catalog's
 *    models, so values are mapped rather than copied: a pi-ai `null` becomes
 *    "omit our key", and an absent pi-ai key becomes an explicit entry.
 * 2. **An absent base level has a protocol-specific default.** pi-ai resolves
 *    an absent `off`/`minimal`/`low`/`medium`/`high` by falling back to the
 *    level name — except on the Anthropic protocols, where `minimal` collapses
 *    onto `low`, and on Mistral, where every level resolves to `high`. Writing
 *    the level name there would send a spelling those providers never see.
 *
 * `xhigh` and `max` are the one pair pi-ai treats as unsupported when absent,
 * so they are only written when the catalog declares them.
 *
 * @module dsh-model-extension/prefill
 */

import { offeredCompatFields } from '../extension-meta.ts'

/** The seven levels, in pi-ai's escalation order. */
const LEVELS: readonly string[] = ['off', 'minimal', 'low', 'medium', 'high', 'xhigh', 'max']

/**
 * The wire spelling pi-ai falls back to for one absent base level, per
 * protocol. This mirrors the fallbacks inside pi-ai's own dispatch branches.
 * @param api - the model's wire protocol.
 * @param level - the level whose key was absent.
 * @returns the spelling pi-ai would send for that level.
 */
export function defaultWireSpelling(api: string | undefined, level: string): string {
  // anthropic-messages: mapThinkingLevelToEffort collapses minimal onto low and
  // passes the rest through. bedrock shares the mapper.
  if (api === 'anthropic-messages' || api === 'bedrock-converse-stream') {
    return level === 'minimal' ? 'low' : level
  }
  // mistral-conversations: mapReasoningEffort ends in `?? "high"`.
  if (api === 'mistral-conversations') return 'high'
  return level
}

/**
 * Convert a catalog `thinkingLevelMap` into our `reasoningEfforts` dict.
 *
 * A model that does not reason gets `false`. An outcome that offers nothing
 * beyond `off` also becomes `false`, because the adapter rejects a dict whose
 * only level is `off` — and the two describe the same request anyway.
 * @param levelMap - the catalog's map, when it carries one.
 * @param api - the model's wire protocol, which picks the fallback spellings.
 * @param reasoning - whether the model reasons at all.
 * @returns the dict to write into the row, or `false` for a non-reasoning model.
 */
export function reasoningEffortsFrom(
  levelMap: Readonly<Record<string, string | null>> | undefined,
  api: string | undefined,
  reasoning: boolean,
): Record<string, string | null> | false {
  if (!reasoning) return false

  const map = levelMap ?? {}
  const efforts: Record<string, string | null> = {}
  for (const level of LEVELS) {
    if (!(level in map)) {
      if (level === 'off') {
        // Absent `off` is pi-ai's "supported, send nothing"; our spelling of
        // that is an explicit null, which the adapter drops before handing the
        // map over.
        efforts[level] = null
        continue
      }
      if (level === 'xhigh' || level === 'max') continue
      efforts[level] = defaultWireSpelling(api, level)
      continue
    }
    const wire = map[level]
    // pi-ai's null means unsupported, so the key is simply left out.
    if (wire === null) continue
    efforts[level] = wire
  }

  const beyondOff = Object.keys(efforts).some(level => level !== 'off')
  return beyondOff ? efforts : false
}

/**
 * Project a catalog `compat` block onto the switches the host offers for one
 * protocol.
 *
 * The filter is load-bearing twice over. It drops pi-ai's withheld switches
 * (routing preferences, session affinity, deferred tools, grammar tools), which
 * the adapter *refuses* rather than ignores — a verbatim copy would make the
 * route fail to resolve. And it filters by the protocol the row will be JUDGED
 * by, which is not always the catalog entry's own: a hand-declared route states
 * its `api`, that value overrides the catalog for every model on the route, and
 * a block taken from another protocol's entry (`supportsStore` on a gateway
 * that speaks `anthropic-messages`) is refused at save time.
 * @param compat - the catalog's compat record, when it carries one.
 * @param api - the protocol the row resolves to, as the adapter resolves it.
 * @returns the writable subset; empty when nothing survives.
 */
export function compatFrom(
  compat: Readonly<Record<string, unknown>> | undefined,
  api: string | undefined,
): Record<string, unknown> {
  const offered = offeredCompatFields(api)
  if (offered.length === 0 || compat === undefined) return {}
  const next: Record<string, unknown> = {}
  for (const field of offered) {
    if (field in compat) next[field] = compat[field]
  }
  return next
}
