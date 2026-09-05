/**
 * Draft defaults for a NEW model row (added by hand or adopted from a fetch),
 * per the v1.0.0 plan: reasoning effort ON with every level declared, thinking
 * format `openai`, both input modalities checked. These are draft seeds that
 * land in settings.yaml when the row is saved — they are not inherited-state
 * sentinels, except `supportsDeveloperRole`, which stays UNWRITTEN (its
 * tri-state reads an absent key as checked, so only an explicit user uncheck
 * ever writes `false`).
 */

import type { ModelDraft } from './compat.ts'

/** The tri-state `compat.supportsDeveloperRole` seed: absent (reads checked). */
const DEVELOPER_ROLE_SEED: Record<string, unknown> = {}

/** Draft seed for one new model row. */
export function newModelDraft(): ModelDraft {
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
    compat: {
      ...DEVELOPER_ROLE_SEED,
      supportsReasoningEffort: true,
      thinkingFormat: 'openai',
    },
  }
}
