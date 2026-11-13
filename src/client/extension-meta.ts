/**
 * Shared extension metadata: enums pinned to the host release this extension
 * was last verified against, and the extra locale keys the extension adds on
 * top of the official Models page dictionaries.
 */

/** Thinking levels offered by llm-pi-ai (THINKING_LEVEL_GATE @ 0.2.2-rc.3). Only `off` may carry an empty wire value. */
export const THINKING_LEVELS = ['off', 'minimal', 'low', 'medium', 'high', 'xhigh', 'max'] as const
export type ThinkingLevel = (typeof THINKING_LEVELS)[number]

/** Input modalities accepted by llm-pi-ai (MODALITY_GATE @ 0.2.2-rc.3). */
export const MODALITIES = ['text', 'image'] as const
export type Modality = (typeof MODALITIES)[number]

/** Reasoning wire formats understood by llm-pi-ai (SUPPORTED_THINKING_FORMATS @ 0.2.2-rc.3). */
export const THINKING_FORMATS = [
  'openai',
  'deepseek',
  'openrouter',
  'together',
  'baseten',
  'zai',
  'qwen',
  'chat-template',
  'qwen-chat-template',
  'string-thinking',
  'ant-ling',
] as const
export type ThinkingFormat = (typeof THINKING_FORMATS)[number]

/**
 * The compatibility switches llm-pi-ai *offers*, by wire protocol (the `offer`
 * set of its COMPAT_GATES @ 0.2.2-rc.3). Only these may reach a model row: the
 * adapter refuses a switch no protocol offers rather than ignoring it, so
 * copying pi-ai's catalog `compat` across verbatim would fail resolution on
 * the withheld fields it also records (routing preferences, session affinity,
 * deferred tools, grammar tools). Re-check against the host's COMPAT_GATES on
 * every host upgrade — the same drift gate the host keeps for itself.
 */
export const COMPAT_FIELDS: Readonly<Record<string, readonly string[]>> = {
  'openai-completions': [
    'supportsStore',
    'supportsDeveloperRole',
    'supportsReasoningEffort',
    'supportsUsageInStreaming',
    'supportsFinishReason',
    'maxTokensField',
    'requiresToolResultName',
    'requiresAssistantAfterToolResult',
    'requiresThinkingAsText',
    'requiresReasoningContentOnAssistantMessages',
    'thinkingFormat',
    'chatTemplateKwargs',
    'chatTemplateArgs',
    'supportsThinkingTokenBudget',
    'thinkingTokenBudgetField',
    'vllmPriority',
    'supportsStrictMode',
    'cacheControlFormat',
    'supportsLongCacheRetention',
  ],
  'openai-responses': [
    'supportsDeveloperRole',
    'supportsMaxOutputTokens',
    'supportsStrictMode',
    'supportsLongCacheRetention',
  ],
  'azure-openai-responses': [
    'supportsDeveloperRole',
    'supportsMaxOutputTokens',
    'supportsStrictMode',
    'supportsLongCacheRetention',
  ],
  'openai-codex-responses': [
    'supportsDeveloperRole',
    'supportsMaxOutputTokens',
    'supportsStrictMode',
    'supportsLongCacheRetention',
  ],
  'anthropic-messages': [
    'supportsEagerToolInputStreaming',
    'supportsLongCacheRetention',
    'supportsCacheControlOnTools',
    'supportsTemperature',
    'forceAdaptiveThinking',
    'allowEmptySignature',
    'supportsStrictTools',
  ],
  'bedrock-converse-stream': ['supportsStrictMode'],
}

/**
 * Switches the base panel already renders a dedicated control for; the
 * "other compatibility switches" block lists everything else.
 */
export const COMPAT_BASE_FIELDS: readonly string[] = [
  'supportsDeveloperRole',
  'supportsReasoningEffort',
  'thinkingFormat',
]

/**
 * The offered compat field names for one wire protocol.
 * @param api - the model's protocol, when known.
 * @returns the field names; empty for an unknown or absent protocol.
 */
export function offeredCompatFields(api: string | undefined): readonly string[] {
  if (api === undefined) return []
  const fields = COMPAT_FIELDS[api]
  return fields === undefined ? [] : fields
}

/**
 * Whether one protocol takes one compat switch.
 *
 * The adapter *refuses* a switch its protocol does not declare rather than
 * ignoring it, so this is the difference between a control that can be offered
 * and one that would fail the save. An unknown protocol takes nothing: its
 * field set cannot be read, and the adapter resolves it to the same refusal.
 * @param api - the model's wire protocol, when known.
 * @param field - the compat field name.
 * @returns true when the protocol offers the field.
 */
export function protocolOffers(api: string | undefined, field: string): boolean {
  return offeredCompatFields(api).includes(field)
}

/** Extra copy for the extension, keyed like the official dictionaries (en is authoritative). */