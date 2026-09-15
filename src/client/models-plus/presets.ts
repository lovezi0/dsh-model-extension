/**
 * Draft defaults for a NEW model row (added by hand or adopted from a fetch),
 * per the v1.0.0 plan: reasoning effort ON with every level declared, thinking
 * format `openai`, both input modalities checked. These are draft seeds that
 * land in settings.yaml when the row is saved — they are not inherited-state
 * sentinels, except `supportsDeveloperRole`, which stays UNWRITTEN (its
 * tri-state reads an absent key as checked, so only an explicit user uncheck
 * ever writes `false`).
 *
 * The compat half of the seed is PROTOCOL-DEPENDENT, and that is load-bearing:
 * `supportsReasoningEffort` and `thinkingFormat` belong to `openai-completions`
 * alone, and the adapter refuses a switch its protocol does not declare rather
 * than ignoring it. Seeding them onto an `anthropic-messages` route — which is
 * what a fixed vocabulary here did — made every hand-added model on such a
 * route fail the save over a switch the user never wrote. So the seed asks
 * {@link protocolOffers} first and writes nothing its protocol would refuse.
 * `reasoningEfforts` is unaffected: the levels travel through each protocol's
 * own thinking parameter, so every protocol takes them.
 */

import { protocolOffers } from '../extension-meta.ts'
import type { ModelDraft } from './compat.ts'

/** The tri-state `compat.supportsDeveloperRole` seed: absent (reads checked). */
const DEVELOPER_ROLE_SEED: Record<string, unknown> = {}

/**
 * Draft seed for one new model row.
 *
 * An UNKNOWN protocol (no route-level `api`, and the installed catalog does not
 * describe the route) seeds no compat at all: nothing can say which switches
 * its endpoint would take, and a guessed `supportsReasoningEffort` on an
 * Anthropic-shaped route is refused rather than dropped. The levels stay seeded
 * — they are protocol-independent — so the row still opens with its effort
 * table populated.
 * @param api - the wire protocol this row will resolve to, when known.
 * @returns the draft row.
 */
export function newModelDraft(api?: string): ModelDraft {
  const compat: Record<string, unknown> = { ...DEVELOPER_ROLE_SEED }
  if (protocolOffers(api, 'supportsReasoningEffort')) compat['supportsReasoningEffort'] = true
  if (protocolOffers(api, 'thinkingFormat')) compat['thinkingFormat'] = 'openai'
  return {
    id: '',
    input: ['text', 'image'],
    reasoningEfforts: {
      off: null,
      minimal: 'minimal',
      low: 'low',
      medium: 'medium',
      high: 'high',
      xhigh: 'xhigh',
      max: 'max',
    },
    ...Object.keys(compat).length === 0 ? {} : { compat },
  }
}
