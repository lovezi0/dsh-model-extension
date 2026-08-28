/**
 * Per-model extension fields for the Models+ page (dsh-model-extension only).
 *
 * Edits one model draft object in place — the same record the official
 * ModelListEditor card holds — so persistence rides the card's existing
 * `applyOnce()` path-ops save with no extra wire calls. Fields written:
 *
 *   reasoningEfforts  { [level]: wire | null }   declared thinking levels
 *   input             Modality[]                  accepted input modalities
 *   compat.supportsReasoningEffort  boolean        endpoint accepts reasoning_effort
 *   compat.thinkingFormat           wire format    how reasoning is serialised
 *   compat.supportsDeveloperRole    boolean        system prompt role for reasoning models
 *                                                  (unset reads as checked = catalog/detection default)
 *
 * NOTE: there is deliberately NO "default effort" (model-level reasoningEffort)
 * control here. DSH's `modelFields` schema has no such key — the runtime derives
 * `model.reasoning.defaultEffort` from `reasoningEfforts` + the route-level
 * `reasoning` default, so a hand-written `reasoningEffort` is silently stripped
 * (or, if written without an `id`, fails `modelProfile.id:required` and rejects
 * the whole `llm-pi-ai` block). Default effort is observable, never persisted,
 * from this extension. See dsh-compatibility-check/llm-pi-ai-config-nodes_*.md.
 *
 * Linkage: `supportsReasoningEffort` gates the visibility (and presence in the
 * draft) of reasoningEfforts / thinkingFormat. Clearing it removes those nodes
 * from the draft IN ONE onChange commit, so partial updates never overwrite
 * each other.
 */
import type { ReactNode } from 'react'
import styles from './ModelsSection.ext.module.css'
import {
  MODALITIES, THINKING_FORMATS, THINKING_LEVELS, en as extensionEn, zh as extensionZh,
} from './extension-meta.ts'
import type { ThinkingFormat, ThinkingLevel } from './extension-meta.ts'

/** One models[] entry as the card holds it (structurally open). */
type ModelDraft = Record<string, unknown>

/** Row-level field writer: merge/clear keys on this row's draft object. */
type PatchModel = (next: Record<string, unknown>) => void

/** Chinese display names for the thinking levels (wire value stays in parentheses). */
const LEVEL_LABELS: Record<ThinkingLevel, { zh: string; en: string }> = {
  off: { zh: '关闭', en: 'Off' },
  minimal: { zh: '极小', en: 'Minimal' },
  low: { zh: '低', en: 'Low' },
  medium: { zh: '中', en: 'Medium' },
  high: { zh: '高', en: 'High' },
  xhigh: { zh: '超高', en: 'Extra High' },
  max: { zh: '最大', en: 'Max' },
}

/** Chinese display names for the input modalities. */
const MODALITY_LABELS: Record<string, { zh: string; en: string }> = {
  text: { zh: '文本', en: 'Text' },
  image: { zh: '图像', en: 'Image' },
}

/** Shared checkbox inline style (matches the host's checkbox look). */
const checkboxStyle: React.CSSProperties = {
  width: '15px',
  height: '15px',
  margin: 0,
  accentColor: 'var(--dsw-alias-brand-primary)',
  flex: 'none',
}

export interface ModelExtensionFieldsProps {
  /** The row's current draft object (read). */
  model: ModelDraft
  /** Merge these keys into the row; `undefined` values clear them. */
  onChange: PatchModel
  /** Disable every control (read-only deployment or pending write). */
  disabled?: boolean
}

/** The row's compat sub-object as a plain record (absent → empty). */
function compatOf(model: ModelDraft): Record<string, unknown> {
  const value = model['compat']
  return typeof value === 'object' && value !== null && !Array.isArray(value)
    ? value as Record<string, unknown>
    : {}
}

/** The row's reasoningEfforts dict (absent/false/invalid → undefined = not declared). */
function effortsOf(model: ModelDraft): Record<string, string | null> | undefined {
  const value = model['reasoningEfforts']
  if (typeof value !== 'object' || value === null || Array.isArray(value)) return undefined
  return value as Record<string, string | null>
}

/**
 * Render the extension block for one model row.
 * @param props - the row draft, its writer, and the disabled flag.
 * @returns the extension fields section.
 */
export function ModelExtensionFields(props: ModelExtensionFieldsProps): ReactNode {
  const { model, onChange, disabled = false } = props
  // Extension copy is bilingual static (not the slot `t` seat): this block
  // renders inside the official card whose translate speaks only upstream
  // keys. Language follows the host UI via document lang, read per render.
  const isZh = typeof document !== 'undefined' && document.documentElement.lang.startsWith('zh')
  const t = (key: keyof typeof extensionEn): string =>
    (isZh ? extensionZh : extensionEn)[key]
  const levelLabel = (level: ThinkingLevel): string =>
    isZh ? `${LEVEL_LABELS[level].zh} (${level})` : `${LEVEL_LABELS[level].en} (${level})`
  const modalityLabel = (modality: string): string =>
    isZh ? MODALITY_LABELS[modality]?.zh ?? modality : MODALITY_LABELS[modality]?.en ?? modality

  const compat = compatOf(model)
  const supportsReasoningEffort = compat['supportsReasoningEffort'] === true
  // Unset reads as the default (checked): the installed catalog / pi-ai's own
  // URL detection stays in charge unless the deployment writes an explicit
  // boolean. Only an explicit `false` renders the box unchecked.
  const supportsDeveloperRole = compat['supportsDeveloperRole'] !== false

  /** Write one key into `compat`, merging into the row's existing compat and
   *  clearing the whole `compat` node when it would become empty. Used for
   *  `supportsReasoningEffort`, `thinkingFormat` and `supportsDeveloperRole`
   *  ONLY — those are the only model extension fields that live under `compat`. */
  const setCompatKey = (key: string, value: unknown): void => {
    const next = { ...compat }
    if (value === undefined) delete next[key]
    else next[key] = value
    // An emptied compat object leaves no trace, like any cleared optional field.
    onChange({ compat: Object.keys(next).length === 0 ? undefined : next })
  }

  const setEfforts = (efforts: Record<string, string | null> | undefined): void => {
    onChange({ reasoningEfforts: efforts })
  }

  const setInput = (modalities: string[]): void => {
    onChange({ input: modalities.length === 0 ? undefined : modalities })
  }

  const toggleLevel = (level: ThinkingLevel, checked: boolean): void => {
    const efforts = { ...(effortsOf(model) ?? {}) }
    if (checked) {
      // off carries no wire value; every other level defaults to its own name.
      efforts[level] = level === 'off' ? null : level
    } else {
      delete efforts[level]
    }
    const next: Record<string, unknown> = {
      reasoningEfforts: Object.keys(efforts).length === 0 ? undefined : efforts,
    }
    onChange(next)
  }

  const setWireValue = (level: ThinkingLevel, text: string): void => {
    const efforts = { ...(effortsOf(model) ?? {}) }
    if (!(level in efforts)) return
    efforts[level] = text.trim().length === 0 ? null : text.trim()
    setEfforts(efforts)
  }

  const toggleModality = (modality: string, checked: boolean): void => {
    const current = Array.isArray(model['input'])
      ? (model['input'] as string[])
      : ['text']
    setInput(checked
      ? [...new Set([...current, modality])]
      : current.filter(entry => entry !== modality))
  }

  const efforts = effortsOf(model)
  const declaredLevels = efforts === undefined ? [] : THINKING_LEVELS.filter(level => level in efforts)
  const inputList = Array.isArray(model['input']) ? model['input'] as string[] : []
  const thinkingFormat = typeof compat['thinkingFormat'] === 'string'
    ? compat['thinkingFormat'] as ThinkingFormat
    : undefined
  // Validation mirrors the host's own checks: only `off` may carry an empty
  // wire value, and a declaration needs at least one non-off level.
  const hasEmptyWire = declaredLevels.some(level =>
    level !== 'off' && String(efforts?.[level] ?? '').trim().length === 0)
  const onlyOffDeclared = efforts !== undefined
    && declaredLevels.length > 0
    && !declaredLevels.some(level => level !== 'off')

  /** One declared level's wire-value row inside the levels table. */
  const wireRow = (level: ThinkingLevel): ReactNode => {
    const isOff = level === 'off'
    return isOff
      ? <span style={{ fontSize: 12, color: 'var(--color-text-tertiary, #999)' }}>—</span>
      : (
          <input
            className={styles['input']}
            type="text"
            value={String(efforts?.[level] ?? '')}
            aria-label={`${t('reasoningEffortWire')} ${level}`}
            placeholder={level}
            disabled={disabled}
            onChange={event => { setWireValue(level, event.target.value) }}
          />
        )
  }

  return (
    <fieldset style={{ border: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 14 }}>
      {/* --- compat: supportsDeveloperRole ---------------------------------- */}
      <div style={{ borderTop: '0.5px solid var(--color-border-tertiary, rgba(0,0,0,0.15))', paddingTop: 12 }}>
        <label style={{ display: 'flex', alignItems: 'flex-start', gap: 8, cursor: 'pointer' }}>
          <input
            type="checkbox"
            style={checkboxStyle}
            checked={supportsDeveloperRole}
            disabled={disabled}
            onChange={(event) => {
              // Checked is the natural default, so a check REMOVES the key:
              // the wire then follows the installed catalog / pi-ai detection
              // instead of pinning `true` over a catalog's known `false`.
              setCompatKey('supportsDeveloperRole', event.target.checked ? undefined : false)
            }}
          />
          <span style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <span className={styles['modelFieldLabel']}>{t('supportsDeveloperRole')}</span>
            <span style={{ fontSize: 12, color: 'var(--color-text-tertiary, #999)' }}>{t('supportsDeveloperRoleHint')}</span>
          </span>
        </label>
      </div>

      {/* --- compat: supportsReasoningEffort ------------------------------ */}
      <div style={{ borderTop: '0.5px solid var(--color-border-tertiary, rgba(0,0,0,0.15))', paddingTop: 12 }}>
        <label style={{ display: 'inline-flex', alignItems: 'center', gap: 8, cursor: 'pointer' }}>
          <input
            type="checkbox"
            style={checkboxStyle}
            checked={supportsReasoningEffort}
            disabled={disabled}
            onChange={(event) => {
              if (event.target.checked) {
                // Turning the gate on declares the compat flag alone; the
                // levels table below appears empty for the user to fill in.
                setCompatKey('supportsReasoningEffort', true)
              } else {
                // Turning it off clears the flag AND every gated node in ONE
                // commit — two separate onChange calls would each start from
                // the same stale draft and overwrite each other. `reasoningEfforts`
                // and `thinkingFormat` are dropped together; there is no
                // model-level default-effort key to clear (DSH derives it).
                const nextCompat = { ...compat }
                delete nextCompat['supportsReasoningEffort']
                delete nextCompat['thinkingFormat']
                onChange({
                  compat: Object.keys(nextCompat).length === 0 ? undefined : nextCompat,
                  reasoningEfforts: undefined,
                })
              }
            }}
          />
          <span className={styles['modelFieldLabel']}>{t('supportsReasoningEffort')}</span>
        </label>
      </div>

      {/* --- gated by supportsReasoningEffort ------------------------------- */}
      {!supportsReasoningEffort ? null : (
        <>
          <div>
            <div className={styles['modelFieldLabel']} style={{ marginBottom: 6 }}>{t('reasoningEfforts')}</div>
            <div style={{
              border: '0.5px solid var(--color-border-tertiary, rgba(0,0,0,0.15))',
              borderRadius: 'var(--border-radius-md, 8px)',
              overflow: 'hidden',
            }}>
              {/* table header */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: '56px 1fr 1fr',
                fontSize: 12,
                color: 'var(--color-text-secondary, #666)',
                background: 'var(--color-background-secondary, #f5f5f5)',
              }}>
                <div style={{ padding: '5px 10px' }}>{t('extDeclare')}</div>
                <div style={{ padding: '5px 10px', borderLeft: '0.5px solid var(--color-border-tertiary, rgba(0,0,0,0.15))' }}>{t('reasoningEffortLevel')}</div>
                <div style={{ padding: '5px 10px', borderLeft: '0.5px solid var(--color-border-tertiary, rgba(0,0,0,0.15))' }}>{t('reasoningEffortWire')}</div>
              </div>
              {/* one row per level, all levels always visible */}
              {THINKING_LEVELS.map((level, at) => (
                <div
                  key={level}
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '56px 1fr 1fr',
                    alignItems: 'center',
                    borderTop: at === 0 ? 'none' : '0.5px solid var(--color-border-tertiary, rgba(0,0,0,0.15))',
                  }}
                >
                  <div style={{ padding: '5px 10px', display: 'flex', justifyContent: 'center' }}>
                    <input
                      type="checkbox"
                      style={checkboxStyle}
                      checked={level in (efforts ?? {})}
                      disabled={disabled}
                      onChange={(event) => { toggleLevel(level, event.target.checked) }}
                    />
                  </div>
                  <div style={{
                    padding: '5px 10px',
                    fontSize: 13,
                    borderLeft: '0.5px solid var(--color-border-tertiary, rgba(0,0,0,0.15))',
                    opacity: level in (efforts ?? {}) ? 1 : 0.5,
                  }}>
                    {levelLabel(level)}
                  </div>
                  <div style={{
                    padding: '5px 10px',
                    borderLeft: '0.5px solid var(--color-border-tertiary, rgba(0,0,0,0.15))',
                    opacity: level in (efforts ?? {}) ? 1 : 0.4,
                  }}>
                    {level in (efforts ?? {}) ? wireRow(level) : <span style={{ fontSize: 12, color: 'var(--color-text-tertiary, #999)' }}>—</span>}
                  </div>
                </div>
              ))}
            </div>
            {(hasEmptyWire || onlyOffDeclared)
              ? (
                  <p className={styles['error']} style={{ marginTop: 6 }}>
                    {hasEmptyWire ? t('reasoningEffortEmptyWire') : t('reasoningEffortsNeedNonOff')}
                  </p>
                )
              : null}
          </div>

          <label className={styles['modelField']} style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            <span className={styles['modelFieldLabel']}>{t('thinkingFormat')}</span>
            <select
              className={styles['input']}
              value={thinkingFormat ?? ''}
              disabled={disabled}
              onChange={(event) => {
                const value = event.target.value
                setCompatKey('thinkingFormat', value === '' ? undefined : value)
              }}
            >
              <option value="">—</option>
              {THINKING_FORMATS.map(format => <option key={format} value={format}>{format}</option>)}
            </select>
          </label>
        </>
      )}

      {/* --- input modalities ------------------------------------------------ */}
      <div style={{ borderTop: '0.5px solid var(--color-border-tertiary, rgba(0,0,0,0.15))', paddingTop: 12 }}>
        <div className={styles['modelFieldLabel']} style={{ marginBottom: 6 }}>{t('inputModalities')}</div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16 }}>
          {MODALITIES.map(modality => (
            <label key={modality} style={{ display: 'inline-flex', alignItems: 'center', gap: 6, cursor: 'pointer', fontSize: 13 }}>
              <input
                type="checkbox"
                style={checkboxStyle}
                checked={inputList.includes(modality)}
                disabled={disabled}
                onChange={(event) => { toggleModality(modality, event.target.checked) }}
              />
              {modalityLabel(modality)}
            </label>
          ))}
        </div>
      </div>
    </fieldset>
  )
}
