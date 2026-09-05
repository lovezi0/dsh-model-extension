/**
 * One model entry's expanded panel: quick-load, capacities (the official
 * modelAdvanced fields, merged into this block per the v1.0.0 design), input
 * modalities, the developer-role tri-state, the reasoning-effort gate and its
 * gated area (thinking format, then the seven-level effort table).
 *
 * Every edit patches the row's draft object through `onChange` — persistence
 * rides the card's existing path-ops save with no extra wire calls. Clearing
 * the effort gate drops `reasoningEfforts` AND `compat.thinkingFormat` in ONE
 * commit so partial updates never overwrite each other (no orphan settings).
 */

import { useState } from 'react'
import type { ReactNode } from 'react'
import { THINKING_FORMATS, THINKING_LEVELS } from '../extension-meta.ts'
import type { ModelDraft } from './compat.ts'
import { formatCapacity, parseCapacity } from './compat.ts'
import { QuickLoad } from './QuickLoad.tsx'
import type { MetadataEntry } from './models-index.ts'
import styles from './models-plus.module.css'

/** The row's compat sub-object as a plain record (absent → empty). */
function compatOf(model: ModelDraft): Record<string, unknown> {
  const value = model['compat']
  return typeof value === 'object' && value !== null && !Array.isArray(value)
    ? value as Record<string, unknown>
    : {}
}

/** The row's reasoningEfforts dict (absent/invalid → undefined = not declared). */
function effortsOf(model: ModelDraft): Record<string, string | null> | undefined {
  const value = model['reasoningEfforts']
  if (typeof value !== 'object' || value === null || Array.isArray(value)) return undefined
  return value as Record<string, string | null>
}

/** The row's input modality list (absent → empty, matching the host reader). */
function inputsOf(model: ModelDraft): readonly string[] {
  const value = model['input']
  return Array.isArray(value) ? value.filter((m): m is string => typeof m === 'string') : []
}

/** Props of {@link ModelEntryPanel}. */
export interface ModelEntryPanelProps {
  /** The row's current draft (read). */
  model: ModelDraft
  /** Replace the row with this next draft; `undefined`-valued keys clear them. */
  onChange: (next: ModelDraft) => void
  /** Disable every control (read-only deployment or a pending write). */
  disabled: boolean
}

/**
 * Render one model entry's expanded panel.
 * @param props - the row draft, its writer, and the disabled flag.
 * @returns the expanded panel.
 */
export function ModelEntryPanel(props: ModelEntryPanelProps): ReactNode {
  const { model, onChange, disabled } = props

  // Capacities are text-edited, so keystrokes live in this buffer rather than
  // being re-derived from the parsed count (which would rewrite `1000` to
  // `1K` mid-word). Unreadable text stays on screen for the save-time check.
  const [capacityText, setCapacityText] = useState<ReadonlyMap<string, string>>(() => new Map())

  /** Patch one key onto the row; `undefined` clears it. */
  const setKey = (key: string, value: unknown): void => {
    const next = { ...model }
    if (value === undefined) Reflect.deleteProperty(next, key)
    else next[key] = value
    onChange(next)
  }

  /** Patch one key inside `compat`; an emptied compat leaves no trace. */
  const setCompatKey = (key: string, value: unknown): void => {
    const compat = { ...compatOf(model) }
    if (value === undefined) Reflect.deleteProperty(compat, key)
    else compat[key] = value
    setKey('compat', Object.keys(compat).length === 0 ? undefined : compat)
  }

  const setEfforts = (efforts: Record<string, string | null> | undefined): void => {
    setKey('reasoningEfforts', efforts)
  }

  const setInput = (modalities: readonly string[]): void => {
    setKey('input', modalities.length === 0 ? undefined : [...modalities])
  }

  // --- quick load ----------------------------------------------------------
  const applyMetadata = (entry: MetadataEntry): void => {
    // Only the four metadata fields are overwritten; everything else keeps
    // its draft value (a fresh row already carries the v1.0.0 defaults).
    const next = { ...model }
    if (entry.context === undefined) Reflect.deleteProperty(next, 'contextWindow')
    else next['contextWindow'] = entry.context
    if (entry.output === undefined) Reflect.deleteProperty(next, 'maxTokens')
    else next['maxTokens'] = entry.output
    const compat = { ...compatOf(model) }
    compat['supportsReasoningEffort'] = entry.reasoning
    if (!entry.reasoning) {
      // A non-reasoning model: keep the draft free of orphan gated values.
      Reflect.deleteProperty(compat, 'thinkingFormat')
      Reflect.deleteProperty(next, 'reasoningEfforts')
    }
    setKey('compat', Object.keys(compat).length === 0 ? undefined : compat)
    const supported = entry.input.filter(m => m === 'text' || m === 'image')
    if (supported.length > 0) next['input'] = supported
    onChange(next)
    setCapacityText(new Map())
  }

  // --- capacities ----------------------------------------------------------
  const capacityField = (field: 'contextWindow' | 'maxTokens', label: string): ReactNode => {
    const stored = model[field]
    const typed = capacityText.get(field)
    const text = typed ?? (typeof stored === 'number' ? formatCapacity(stored) : '')
    return (
      <label className={styles['modelField']}>
        <span className={styles['modelFieldLabel']}>{label}</span>
        <input
          className={styles['input']}
          type="text"
          inputMode="numeric"
          value={text}
          placeholder="使用提供方默认值"
          aria-label={label}
          disabled={disabled}
          onChange={(event) => {
            setCapacityText(current => new Map(current).set(field, event.target.value))
            setKey(field, parseCapacity(event.target.value))
          }}
          onBlur={() => {
            const raw = capacityText.get(field)
            if (raw === undefined) return
            const parsed = parseCapacity(raw)
            // Unreadable text stays on screen; the save-time check names it.
            if (parsed !== undefined && Number.isNaN(parsed)) return
            setCapacityText(current => {
              const next = new Map(current)
              next.delete(field)
              return next
            })
          }}
        />
      </label>
    )
  }

  // --- developer role (tri-state, NOT gated) -------------------------------
  const compat = compatOf(model)
  const developerRole = compat['supportsDeveloperRole'] !== false

  // --- effort gate ----------------------------------------------------------
  const supportsReasoningEffort = compat['supportsReasoningEffort'] === true
  const efforts = effortsOf(model)

  const toggleGate = (checked: boolean): void => {
    if (checked) {
      setCompatKey('supportsReasoningEffort', true)
      return
    }
    // One commit clears the flag AND every gated node — no orphan settings.
    const nextCompat = { ...compat }
    Reflect.deleteProperty(nextCompat, 'supportsReasoningEffort')
    Reflect.deleteProperty(nextCompat, 'thinkingFormat')
    const next = { ...model, compat: Object.keys(nextCompat).length === 0 ? undefined : nextCompat }
    Reflect.deleteProperty(next, 'reasoningEfforts')
    onChange(next)
  }

  const toggleLevel = (level: string, checked: boolean): void => {
    const current = { ...(efforts ?? {}) }
    if (checked) current[level] = level === 'off' ? null : level
    else Reflect.deleteProperty(current, level)
    setEfforts(Object.keys(current).length === 0 ? undefined : current)
  }

  const setWireValue = (level: string, text: string): void => {
    if (efforts === undefined || !(level in efforts)) return
    const current = { ...efforts }
    current[level] = text.trim().length === 0 ? null : text.trim()
    setEfforts(current)
  }

  // --- validation (mirrors the host checks) --------------------------------
  const declaredLevels = efforts === undefined ? [] : THINKING_LEVELS.filter(level => level in efforts)
  const hasEmptyWire = declaredLevels.some(level =>
    level !== 'off' && String(efforts?.[level] ?? '').trim().length === 0)
  const onlyOffDeclared = efforts !== undefined
    && declaredLevels.length > 0
    && !declaredLevels.some(level => level !== 'off')

  // --- input modalities ------------------------------------------------------
  const inputList = inputsOf(model)
  const toggleModality = (modality: string, checked: boolean): void => {
    // Reading defaults to text-bearing rows; an explicit list wins.
    const base = inputList.length === 0 && model['input'] === undefined ? ['text'] : [...inputList]
    setInput(checked ? [...new Set([...base, modality])] : base.filter(m => m !== modality))
  }

  return (
    <div className={styles['extBlock']}>
      <div className={`${styles['extGroup']} ${styles['extGroupFirst']}`}>
        <QuickLoad onPick={applyMetadata} disabled={disabled} />
      </div>

      <div className={styles['extGroup']}>
        <div className={styles['modelField']} style={{ padding: '0 4px' }}>
          {capacityField('contextWindow', '上下文窗口')}
          {capacityField('maxTokens', '最大输出 token')}
        </div>
      </div>

      <div className={styles['extGroup']}>
        <span className={styles['extLabel']} style={{ marginBottom: 6 }}>输入模态</span>
        <div style={{ display: 'flex', gap: 18 }}>
          {['text', 'image'].map(modality => (
            <label key={modality} className={styles['switchRow']}>
              <input
                type="checkbox"
                className={styles['extCheckbox']}
                checked={inputList.includes(modality)}
                disabled={disabled}
                onChange={(event) => { toggleModality(modality, event.target.checked) }}
              />
              {modality === 'text' ? '文本' : '图像'}
            </label>
          ))}
        </div>
      </div>

      <div className={styles['extGroup']}>
        <label className={styles['extCheck']}>
          <input
            type="checkbox"
            className={styles['extCheckbox']}
            style={{ marginTop: 3 }}
            checked={developerRole}
            disabled={disabled}
            onChange={(event) => {
              // Checked is the natural default, so a check REMOVES the key;
              // only an explicit uncheck writes `false`.
              setCompatKey('supportsDeveloperRole', event.target.checked ? undefined : false)
            }}
          />
          <span style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <span className={styles['extCheckLabel']}>允许以 developer 角色发送系统提示</span>
            <span className={styles['extHint']}>
              推理模型的系统提示将以 developer 角色发出；网关拒绝该角色时取消勾选，改用 system。
            </span>
          </span>
        </label>
      </div>

      <div className={styles['extGroup']}>
        <label className={styles['switchRow']}>
          <input
            type="checkbox"
            className={styles['extCheckbox']}
            checked={supportsReasoningEffort}
            disabled={disabled}
            onChange={(event) => { toggleGate(event.target.checked) }}
          />
          端点接受推理挡位参数（reasoning_effort）
        </label>
      </div>

      {/* Gated area: HIDDEN (not dimmed) while the gate is off. */}
      <div className={styles['extGated']} hidden={!supportsReasoningEffort}>
        <div className={styles['extField']}>
          <span className={styles['extLabel']}>思考格式</span>
          <select
            className={`${styles['input']} ${styles['selectInput']}`}
            value={typeof compat['thinkingFormat'] === 'string' ? compat['thinkingFormat'] : ''}
            disabled={disabled}
            onChange={(event) => { setCompatKey('thinkingFormat', event.target.value === '' ? undefined : event.target.value) }}
          >
            <option value="">—</option>
            {THINKING_FORMATS.map(format => <option key={format} value={format}>{format}</option>)}
          </select>
        </div>

        <div className={styles['extField']}>
          <span className={styles['extLabel']}>推理挡位</span>
          <div className={styles['extTable']}>
            <div className={styles['extTHead']}>
              <div>声明</div><div>挡位</div><div>线上取值</div>
            </div>
            {THINKING_LEVELS.map((level) => {
              const declared = efforts !== undefined && level in efforts
              const isOff = level === 'off'
              const wire = declared ? String(efforts?.[level] ?? '') : ''
              return (
                <div key={level} className={styles['extTRow']}>
                  <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <input
                      type="checkbox"
                      className={styles['extCheckbox']}
                      checked={declared}
                      disabled={disabled}
                      aria-label={`声明 ${level}`}
                      onChange={(event) => { toggleLevel(level, event.target.checked) }}
                    />
                  </div>
                  <div style={{ opacity: declared ? 1 : 0.5 }}>{level}</div>
                  <div style={{ opacity: declared ? 1 : 0.4 }}>
                    {declared && !isOff
                      ? (
                          <input
                            type="text"
                            value={wire}
                            placeholder={level}
                            aria-label={`${level} 线上取值`}
                            disabled={disabled}
                            onChange={(event) => { setWireValue(level, event.target.value) }}
                          />
                        )
                      : <span style={{ fontSize: 12, color: 'var(--dsw-alias-label-tertiary)' }}>—</span>}
                  </div>
                </div>
              )
            })}
          </div>
          {hasEmptyWire || onlyOffDeclared
            ? (
                <p className={styles['error']} style={{ marginTop: 6 }}>
                  {hasEmptyWire ? '除 off 外勾选的挡位必须填写线上取值。' : '至少声明一个 off 以外的挡位。'}
                </p>
              )
            : null}
        </div>
      </div>
    </div>
  )
}

