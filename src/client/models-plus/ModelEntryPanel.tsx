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
import { COMPAT_BASE_FIELDS, THINKING_FORMATS, THINKING_LEVELS } from '../extension-meta.ts'
import type { ModelDraft } from './compat.ts'
import { formatCapacity, parseCapacity } from './compat.ts'
import { compatFrom, reasoningEffortsFrom } from './prefill.ts'
import { QuickLoad } from './QuickLoad.tsx'
import type { PrefillEntry } from './models-index.ts'
import styles from './models-plus.module.css'

/**
 * Whether a draft field is absent or whitespace-only.
 * @param value - the field's current value.
 * @returns true when the field carries nothing worth keeping.
 */
function isBlank(value: unknown): boolean {
  if (value === undefined || value === null) return true
  return typeof value === 'string' && value.trim().length === 0
}

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
  /**
   * Apply one prefill candidate.
   *
   * Every value is *restated* from the picked source rather than merged into
   * whatever was already there: capacities, modalities, reasoning levels and
   * compat are replaced wholesale. A prefill answers "what does this catalog
   * say about the model", so an absent field clears — leaving another source's
   * value behind would describe a model neither catalog claims, and switching
   * sources then re-picking is meant to be a clean rewrite.
   *
   * Two things do not follow that rule. `id` and `name` are filled only into a
   * blank row, because a catalog id is the request id for the vendor's *own*
   * endpoint while behind a gateway the string on the wire is often different.
   * And pi-ai's level map is *mapped* rather than copied, because `null` means
   * the opposite on each side.
   * @param entry - the picked candidate.
   */
  const applyMetadata = (entry: PrefillEntry): void => {
    const next = { ...model }
    if (entry.context === undefined) Reflect.deleteProperty(next, 'contextWindow')
    else next['contextWindow'] = entry.context
    if (entry.output === undefined) Reflect.deleteProperty(next, 'maxTokens')
    else next['maxTokens'] = entry.output
    // A prefill states what *this* source knows, so an absent value clears
    // rather than merges — leaving the other catalog's modality list behind
    // would describe a model neither source claims.
    const modality = entry.input.filter(m => m === 'text' || m === 'image')
    if (modality.length > 0) next['input'] = modality
    else Reflect.deleteProperty(next, 'input')

    if (entry.source === 'pi-ai') {
      // The id and name are filled into an *empty* row and never written over a
      // typed one. A catalog id is the request id for the vendor's own
      // endpoint; behind a gateway the string that actually reaches the wire is
      // often different (`v2.5-pro` vs `mimo-v2.5-pro`), so overwriting a typed
      // id would silently repoint the row at a model the endpoint does not
      // serve — the failure would surface later, as a 404 from the provider.
      if (isBlank(next['id'])) next['id'] = entry.id
      if (isBlank(next['name']) && entry.name !== undefined) next['name'] = entry.name

      next['reasoningEfforts'] = reasoningEffortsFrom(entry.thinkingLevelMap, entry.api, entry.reasoning)

      // Catalog values only. `supportsReasoningEffort` is deliberately NOT
      // inferred from `reasoning`: the two answer different questions (does
      // the endpoint accept the field, vs. does the model think), and an
      // absent key is pi-ai's way of saying "auto-detect from the endpoint".
      // Writing our guess there would replace a detection with a claim we
      // cannot check, and a wrong `true` makes the adapter send a parameter
      // the endpoint may refuse.
      const compat = compatFrom(entry.compat, entry.api)
      if (Object.keys(compat).length === 0) Reflect.deleteProperty(next, 'compat')
      else next['compat'] = compat
    } else {
      // models.dev: its ids are directory paths (`zhipuai/glm-5.3-flash`) and
      // the file carries no reasoning or compat surface at all — so the whole
      // block is REPLACED by the one fact this source can support.
      //
      // Merging here (as an earlier revision did) leaves a previous pi-ai
      // prefill's switches in place, and the row goes on claiming a thinking
      // format — or a reasoning-content requirement — that the source you just
      // switched to says nothing about. Switching sources is asking for the
      // other catalog's answer, not for a blend of the two.
      Reflect.deleteProperty(next, 'reasoningEfforts')
      if (entry.reasoning) next['compat'] = { supportsReasoningEffort: true }
      else Reflect.deleteProperty(next, 'compat')
    }

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

  // --- compat switches with no dedicated control ---------------------------
  /**
   * Switches a prefill wrote that the block above has no control for. Listing
   * them keeps a prefilled value from becoming invisible state: the pi-ai
   * catalog records far more of the compat surface than this panel models
   * explicitly, and that API refuses an unknown switch rather than ignoring
   * it — so a value the user cannot see is a value the user cannot fix.
   */
  const extraCompat = Object.entries(compat)
    .filter(([key]) => !COMPAT_BASE_FIELDS.includes(key))
    .sort(([a], [b]) => a.localeCompare(b))

  /**
   * Read an edited switch back as the type it already had.
   * @param previous - the value the switch carried when rendered.
   * @param raw - the field text.
   * @returns the coerced value, or the previous one when the text is unreadable.
   */
  const readCompatValue = (previous: unknown, raw: string): unknown => {
    if (typeof previous === 'boolean') return raw === 'true'
    if (typeof previous === 'number') {
      const parsed = Number(raw)
      return Number.isNaN(parsed) ? previous : parsed
    }
    if (typeof previous === 'string') return raw
    try {
      return JSON.parse(raw) as unknown
    } catch {
      return previous
    }
  }

  // --- effort gate ----------------------------------------------------------
  /** The switch as a wire field: whether the endpoint takes `reasoning_effort`. */
  const gateOn = compat['supportsReasoningEffort'] === true
  const efforts = effortsOf(model)
  /**
   * Whether the reasoning area is worth showing.
   *
   * The switch and the area answer different questions: the switch tells the
   * adapter the endpoint accepts `reasoning_effort`, while the area edits what
   * *this model* offers. A pi-ai prefill can leave the switch unset on purpose
   * — an absent key lets the adapter auto-detect from the endpoint — while
   * still carrying levels worth editing, and those levels reach the provider
   * through the protocol's own thinking parameter either way. So the area keys
   * off either signal, not the switch alone.
   */
  const reasoningAreaShown = gateOn || efforts !== undefined || compat['thinkingFormat'] !== undefined

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
            checked={gateOn}
            disabled={disabled}
            onChange={(event) => { toggleGate(event.target.checked) }}
          />
          端点接受推理挡位参数（reasoning_effort）
        </label>
        {!gateOn && reasoningAreaShown
          ? (
              <p className={styles['extHint']} style={{ marginTop: 6 }}>
                此项未设置：由 llm-pi-ai 按其 baseURL 检测结果决定是否发送 reasoning_effort；
                下面的挡位不受影响，仍通过各协议自己的 thinking 参数生效。
              </p>
            )
          : null}
      </div>

      {/* Gated area: HIDDEN (not dimmed) while the gate is off. */}
      <div className={styles['extGated']} hidden={!reasoningAreaShown}>
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

      {extraCompat.length > 0
        ? (
            <div className={styles['extGroup']}>
              <span className={styles['extLabel']} style={{ marginBottom: 6 }}>其他兼容开关</span>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                {extraCompat.map(([key, value]) => (
                  <label key={key} style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                    <span className={styles['extHint']}>{key}</span>
                    <input
                      className={styles['input']}
                      type="text"
                      defaultValue={typeof value === 'string' ? value : JSON.stringify(value) ?? ''}
                      aria-label={key}
                      disabled={disabled}
                      onBlur={(event) => {
                        const raw = event.target.value.trim()
                        // An emptied field drops the switch, handing the
                        // decision back to the installed catalog.
                        setCompatKey(key, raw.length === 0 ? undefined : readCompatValue(value, raw))
                      }}
                    />
                  </label>
                ))}
              </div>
              <p className={styles['extHint']} style={{ marginTop: 6 }}>
                这些开关由 pi-ai 目录预填；清空输入框即移除该开关，回到目录默认。
              </p>
            </div>
          )
        : null}
    </div>
  )
}

