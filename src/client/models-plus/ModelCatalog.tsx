/**
 * One provider profile's model catalog: rows joined from the draft's `models`
 * array, the fetch action (interrogating the endpoint the form currently
 * shows), and the candidate-picker modal. Each row's expanded panel is the
 * plugin's ModelEntryPanel — capacities and extension fields in one block.
 */

import { useRef, useState } from 'react'
import type { DragEvent, KeyboardEvent, ReactNode } from 'react'
import type { LlmDiscoveredModel } from '@deepseek-ai/dsh-api-remotes/client'
import { Modal } from '@deepseek-ai/dsh-client-ui-primitives'
import type { ModelDraft } from './compat.ts'
import { newModelDraft } from './presets.ts'
import { ModelEntryPanel } from './ModelEntryPanel.tsx'
import type { ModelsOperations } from '../vendor/operations.ts'
import styles from './models-plus.module.css'

/** Endpoint facts for the fetch action, taken from the live form. */
export interface ProbeTarget {
  readonly settingsNs: string
  readonly provider?: string
  readonly baseURL?: string
  readonly api?: string
  readonly apiKey?: string
}

/** Props of {@link ModelCatalog}. */
export interface ModelCatalogProps {
  /** The drafted rows (inherited rows until the first edit materializes an override). */
  models: readonly ModelDraft[]
  /** Whether the user layer owns the whole array. */
  overridden: boolean
  /** DeepSeek-family route-level fallbacks (undefined on the pi-ai family). */
  defaultContextWindow: number | undefined
  defaultMaxTokens: number | undefined
  /** Endpoint facts for the fetch action. */
  probe: ProbeTarget
  /**
   * The wire protocol every row of this route resolves to, when the route
   * settles one (a hand-declared route's own `api`, or the api its installed
   * catalog entries agree on). Rows seed and validate their compat against it;
   * see {@link ModelEntryPanelProps.api}.
   */
  routeApi?: string
  /** Why the fetch action is unavailable, or undefined when it is. */
  probeBlocked?: string
  /**
   * Hide the fetch action entirely. The host registers model discovery only
   * for `llm-pi-ai` (the sole `registerModelDiscovery` caller across the host
   * tree), so a deepseek-family card would otherwise offer an action that can
   * only ever fail with `NO_DISCOVERY` — mirroring the official page, whose
   * DeepSeekModelsEditor has no fetch button at all.
   */
  hideFetch?: boolean
  /** The Host operations whose interrogation answers the fetch action. */
  operations: ModelsOperations
  /** Disable every control (read-only deployment or a pending write). */
  disabled: boolean
  /** Replace the drafted rows. */
  onChange: (models: ModelDraft[]) => void
  /** Remove the user-owned array and return to inheritance. */
  onReset?: () => void
}

/** A row's text field, or the empty string when unset or not a string. */
function textOf(model: ModelDraft, key: string): string {
  const value = model[key]
  return typeof value === 'string' ? value : ''
}

/** Adopt one candidate, v1.0.0 defaults + the endpoint's disclosed capacities. */
function adopt(candidate: LlmDiscoveredModel, routeApi: string | undefined): ModelDraft {
  const row = newModelDraft(routeApi)
  row['id'] = candidate.id
  row['name'] = candidate.name ?? candidate.id
  if (candidate.contextWindow !== undefined) row['contextWindow'] = candidate.contextWindow
  if (candidate.maxTokens !== undefined) row['maxTokens'] = candidate.maxTokens
  return row
}

/**
 * Render the model catalog with its fetch action.
 * @param props - the drafted rows, probe target, wire face, and mutators.
 * @returns the catalog editor.
 */
export function ModelCatalog(props: ModelCatalogProps): ReactNode {
  const { models, onChange, probe, operations, disabled } = props

  const [busy, setBusy] = useState(false)
  const [failure, setFailure] = useState<string | undefined>(undefined)
  const [candidates, setCandidates] = useState<readonly LlmDiscoveredModel[] | undefined>(undefined)
  const [picked, setPicked] = useState<ReadonlySet<string>>(() => new Set())
  const [query, setQuery] = useState('')
  const [expanded, setExpanded] = useState<ReadonlySet<number>>(() => new Set())

  const patch = (index: number, next: Record<string, string | number | undefined>): void => {
    onChange(models.map((model, at) => {
      if (at !== index) return model
      const cleared = new Set(
        Object.entries(next).filter(([, value]) => value === undefined || value === '').map(([key]) => key),
      )
      return Object.fromEntries(
        Object.entries({ ...model, ...next }).filter(([key]) => !cleared.has(key)),
      )
    }))
  }

  const toggleExpanded = (index: number): void => {
    setExpanded((current) => {
      const next = new Set(current)
      if (!next.delete(index)) next.add(index)
      return next
    })
  }

  const removeRow = (index: number): void => {
    onChange(models.filter((_model, at) => at !== index))
    // Both stores are keyed by position; shift the rows after this one down.
    setExpanded((current) => {
      const next = new Set<number>()
      for (const at of current) {
        if (at < index) next.add(at)
        else if (at > index) next.add(at - 1)
      }
      return next
    })
  }

  // --- reordering -----------------------------------------------------------
  // A drag is a POSITION move, and three things here are keyed by position, so
  // one move has to carry all of them or they disagree: the draft array itself,
  // the expanded-row set, and the DOM (rows are keyed by index, so a keystroke
  // never remounts the field being typed into). The epoch serves the third: a
  // reorder bumps it, remounting the rows once — cheap, because a reorder is one
  // deliberate action — and dropping the per-row scratch state (the panel's
  // in-progress capacity text, which is keyed by FIELD name and would otherwise
  // follow the position and re-apply itself to whichever model moved in).
  const [dragging, setDragging] = useState<number | undefined>(undefined)
  const [dropAt, setDropAt] = useState<{ row: number, after: boolean } | undefined>(undefined)
  const [epoch, setEpoch] = useState(0)
  // Refs, not state: the drag handlers fire many times per move and must never
  // read the index the pointer has already left behind.
  const draggingRef = useRef<number | undefined>(undefined)
  const dropAtRef = useRef<{ row: number, after: boolean } | undefined>(undefined)

  /**
   * Where a drop lands once the dragged row is out of the way.
   *
   * The indicator names a GAP, not a row: `after` picks the gap above or below
   * the row under the pointer (its own midpoint, so the indicator says what a
   * release would do before the release), and the gap is counted in pre-move
   * positions. Removing the dragged row first shifts everything after it up by
   * one, so a gap beyond the drag's own slot has to come back by one to stay
   * the same slot.
   * @param from - the dragged row's position.
   * @param row - the row under the pointer.
   * @param after - whether the pointer sits past that row's midpoint.
   * @returns the insertion index for the post-removal array.
   */
  const dropIndex = (from: number, row: number, after: boolean): number => {
    const gap = after ? row + 1 : row
    return from < gap ? gap - 1 : gap
  }

  /**
   * Carry the expanded-row set through a move: the dragged row keeps its own
   * panel, and every row it passed shifts one slot.
   * @param current - the expanded positions before the move.
   * @param from - the dragged row's position.
   * @param to - its position after the move.
   * @returns the same panels, addressed by their new positions.
   */
  const moveExpanded = (current: ReadonlySet<number>, from: number, to: number): Set<number> => {
    const next = new Set<number>()
    for (const at of current) {
      if (at === from) next.add(to)
      else if (from < to ? at > from && at <= to : at >= to && at < from) next.add(at + (from < to ? -1 : 1))
      else next.add(at)
    }
    return next
  }

  /**
   * Put one row at another position in the draft.
   * @param from - the row's current position.
   * @param to - the position it should end up at.
   */
  const moveRow = (from: number, to: number): void => {
    if (from === to || from < 0 || to < 0 || from >= models.length || to >= models.length) return
    const next = [...models]
    const [moved] = next.splice(from, 1)
    if (moved === undefined) return
    next.splice(to, 0, moved)
    onChange(next)
    setExpanded((current) => moveExpanded(current, from, to))
    setEpoch((value) => value + 1)
  }

  /** @param index - the row the pointer took hold of. */
  const beginDrag = (index: number): void => {
    draggingRef.current = index
    dropAtRef.current = undefined
    setDragging(index)
    setDropAt(undefined)
  }

  /**
   * Follow the pointer: keep the drop gap live so a release is predictable.
   * @param event - the dragover on a row.
   * @param index - that row's position.
   */
  const trackDrag = (event: DragEvent<HTMLDivElement>, index: number): void => {
    if (draggingRef.current === undefined) return
    // Without preventDefault the drop is refused outright: the browser will not
    // fire `drop` on a target that never opted in.
    event.preventDefault()
    if (event.dataTransfer !== null) event.dataTransfer.dropEffect = 'move'
    const box = event.currentTarget.getBoundingClientRect()
    const at = { row: index, after: event.clientY > box.top + box.height / 2 }
    const current = dropAtRef.current
    if (current !== undefined && current.row === at.row && current.after === at.after) return
    dropAtRef.current = at
    setDropAt(at)
  }

  /** Commit the drop, or abandon it when the drag never named a gap. */
  const endDrag = (): void => {
    const from = draggingRef.current
    const at = dropAtRef.current
    draggingRef.current = undefined
    dropAtRef.current = undefined
    setDragging(undefined)
    setDropAt(undefined)
    if (from === undefined || at === undefined) return
    moveRow(from, dropIndex(from, at.row, at.after))
  }

  /**
   * Reorder from the keyboard.
   *
   * The handle is a button, so the move has to be reachable without a pointer.
   * Alt + Arrow is the conventional "move this thing" chord, and it leaves the
   * bare arrow keys to their normal page duty.
   * @param event - the key event on the handle.
   * @param index - this row's position.
   */
  const handleHandleKey = (event: KeyboardEvent<HTMLButtonElement>, index: number): void => {
    if (!event.altKey || (event.key !== 'ArrowUp' && event.key !== 'ArrowDown')) return
    event.preventDefault()
    moveRow(index, index + (event.key === 'ArrowUp' ? -1 : 1))
  }

  const fetchModels = async (): Promise<void> => {
    setBusy(true)
    setFailure(undefined)
    try {
      const answer = await operations.discoverModels(probe.settingsNs, {
        ...probe.provider === undefined ? {} : { provider: probe.provider },
        ...probe.baseURL === undefined || probe.baseURL.length === 0 ? {} : { baseURL: probe.baseURL },
        ...probe.api === undefined ? {} : { api: probe.api },
        ...probe.apiKey === undefined ? {} : { apiKey: probe.apiKey },
      })
      if (answer.kind === 'refused') {
        setFailure(answer.message)
        return
      }
      const found = answer.models
      if (found.length === 0) {
        setFailure('该提供方没有列出任何模型，请手动添加。')
        return
      }
      const known = new Set(models.map(model => textOf(model, 'id')))
      setQuery('')
      setCandidates(found)
      setPicked(new Set(found.filter(model => !known.has(model.id)).map(model => model.id)))
    } finally {
      setBusy(false)
    }
  }

  const closePicker = (): void => {
    setCandidates(undefined)
    setPicked(new Set())
    setQuery('')
  }

  const adoptPicked = (): void => {
    if (candidates === undefined) return
    const byId = new Map(models.map(model => [textOf(model, 'id'), model]))
    for (const candidate of candidates) {
      if (!picked.has(candidate.id)) continue
      // A row the user already tuned wins over the provider's own numbers.
      byId.set(candidate.id, byId.get(candidate.id) ?? adopt(candidate, props.routeApi))
    }
    onChange([...byId.values()])
    closePicker()
  }

  const toggle = (id: string): void => {
    setPicked((current) => {
      const next = new Set(current)
      if (!next.delete(id)) next.add(id)
      return next
    })
  }

  const activeCandidates = candidates ?? []
  const needle = query.trim().toLowerCase()
  const visible = needle.length === 0
    ? activeCandidates
    : activeCandidates.filter(candidate => candidate.id.toLowerCase().includes(needle))
  const allPicked = visible.length > 0 && visible.every(candidate => picked.has(candidate.id))

  // A route the adapter already describes answers without an endpoint.
  const askable = probe.provider !== undefined || (probe.baseURL !== undefined && probe.baseURL.length > 0)

  return (
    <section className={styles['modelCatalog']} aria-label="模型目录">
      <div className={styles['modelListHead']}>
        <div className={styles['modelCatalogHeading']}>
          <span className={styles['modelCatalogTitle']}>模型目录</span>
          <span className={styles['modelCatalogMeta']}>
            {props.overridden ? '已自定义模型目录' : '正在使用适配器默认模型'}
          </span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
          {props.overridden && props.onReset !== undefined
            ? (
                <button
                  type="button"
                  className={styles['linkButton']}
                  disabled={disabled}
                  onClick={props.onReset}
                >
                  恢复默认模型
                </button>
              )
            : null}
          {props.hideFetch === true
            ? null
            : (
                <button
                  type="button"
                  className={styles['linkButton']}
                  disabled={disabled || busy || !askable || props.probeBlocked !== undefined}
                  title={props.probeBlocked !== undefined
                    ? props.probeBlocked
                    : askable ? undefined : '请先填写 API 地址，再获取。'}
                  onClick={() => { void fetchModels() }}
                >
                  {busy ? '正在询问提供方…' : '获取可用模型'}
                </button>
              )}
        </div>
      </div>

      {models.length === 0
        ? <p className={styles['modelEmpty']}>模型选择器中将不显示任何模型；目录外 ID 仍可直接发送。</p>
        : (
            <div className={styles['modelList']}>
              {models.map((model, index) => (
                // Keyed by position, plus an epoch that only a reorder bumps.
                // A key derived from the row's content — the id especially —
                // changes on every keystroke, so React unmounts and remounts the
                // row and the field being typed into loses focus after each
                // character; a position key is right for editing. Reordering is
                // the one case where keeping the nodes would be wrong, because
                // the scratch state inside them is addressed by field name and
                // would follow the slot instead of the model — so the epoch
                // remounts them exactly once per move.
                <div
                  key={epoch + ':' + String(index)}
                  className={dragging === index
                    ? `${styles['modelEntry']} ${styles['modelEntryDragging']}`
                    : styles['modelEntry']}
                >
                  <div
                    className={styles['modelRow']}
                    // The whole card is a drop target, so a drop anywhere on
                    // the row — not only on the handle — lands the move.
                    onDragOver={(event) => { trackDrag(event, index) }}
                    onDrop={(event) => {
                      event.preventDefault()
                      endDrag()
                    }}
                  >
                    <input
                      className={styles['input']}
                      type="text"
                      value={textOf(model, 'id')}
                      placeholder="模型 ID"
                      aria-label={`模型 ID ${String(index + 1)}`}
                      disabled={disabled}
                      onChange={(event) => { patch(index, { id: event.target.value }) }}
                    />
                    <input
                      className={styles['input']}
                      type="text"
                      value={textOf(model, 'name')}
                      placeholder="显示名称"
                      aria-label={`显示名称 ${String(index + 1)}`}
                      disabled={disabled}
                      onChange={(event) => { patch(index, { name: event.target.value === '' ? undefined : event.target.value }) }}
                    />
                    <button
                      type="button"
                      className={styles['iconButton']}
                      aria-label={`容量 ${String(index + 1)}`}
                      aria-expanded={expanded.has(index)}
                      title="容量"
                      onClick={() => { toggleExpanded(index) }}
                    >
                      <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true" style={{ transform: expanded.has(index) ? 'rotate(90deg)' : undefined, transition: 'transform 120ms ease' }}>
                        <path d="M6 3.5L10.5 8L6 12.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>
                    <button
                      type="button"
                      className={`${styles['iconButton']} ${styles['iconButtonDanger']}`}
                      aria-label={`删除模型 ${String(index + 1)}`}
                      title="删除模型"
                      disabled={disabled}
                      onClick={() => { removeRow(index) }}
                    >
                      <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                        <path d="M2.5 4h11M6.5 4V2.5h3V4M4 4l.7 9a1 1 0 001 .9h4.6a1 1 0 001-.9L12 4M6.5 6.8v4.4M9.5 6.8v4.4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>
                    <button
                      type="button"
                      className={styles['dragHandle']}
                      aria-label={`拖动以调整模型顺序 ${String(index + 1)}`}
                      // The list is the reading order of the model selector, so
                      // where the row SITS is announced, and the handle is a
                      // button that moves it.
                      title="拖动以调整顺序（也可用 Alt + ↑/↓）"
                      disabled={disabled || models.length < 2}
                      draggable={disabled !== true}
                      onDragStart={(event) => {
                        // The row itself is not draggable, so nothing here has
                        // to stop a drag the inputs may have started.
                        event.dataTransfer.effectAllowed = 'move'
                        // Firefox refuses to start a drag with no payload.
                        event.dataTransfer.setData('text/plain', textOf(model, 'id'))
                        beginDrag(index)
                      }}
                      onDragEnd={endDrag}
                      onKeyDown={(event) => { handleHandleKey(event, index) }}
                    >
                      <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                        <path d="M5.5 4h.01M5.5 8h.01M5.5 12h.01M10.5 4h.01M10.5 8h.01M10.5 12h.01" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                      </svg>
                    </button>
                    {/* The gap a release would fill, drawn inside the row it
                        points at (the rule is absolutely positioned, so it needs
                        no extra markup at the list's top and bottom edges). */}
                    {dropAt !== undefined && dropAt.row === index
                      ? (
                          <div
                            className={styles['modelDropLine']}
                            data-edge={dropAt.after ? 'after' : 'before'}
                            aria-hidden="true"
                          />
                        )
                      : null}
                  </div>
                  {expanded.has(index)
                    ? (
                        <ModelEntryPanel
                          model={model}
                          api={props.routeApi}
                          disabled={disabled}
                          onChange={(next) => {
                            onChange(models.map((row, at) => (at === index ? next : row)))
                          }}
                        />
                      )
                    : null}
                </div>
              ))}
            </div>
          )}

      <button
        type="button"
        className={styles['addModelButton']}
        disabled={disabled}
        onClick={() => { onChange([...models, newModelDraft(props.routeApi)]) }}
      >
        <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
          <path d="M8 3.5v9M3.5 8h9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
        添加模型
      </button>

      {failure !== undefined ? <p className={styles['error']}>{failure}</p> : null}

      <Modal
        open={candidates !== undefined}
        onClose={closePicker}
        title="选择要添加的模型"
        closeLabel="关闭"
        description="以下是模型提供方的可用模型，勾选要添加的模型。"
        className={styles['fetchDialog'] as string}
        footer={(
          <>
            <button type="button" className={styles['secondaryButton']} onClick={closePicker}>取消</button>
            <button type="button" className={styles['primaryButton']} onClick={adoptPicked}>添加所选</button>
          </>
        )}
      >
        <div className={styles['candidateToolbar']}>
          <input
            className={`${styles['input']} ${styles['candidateSearch']}`}
            type="search"
            value={query}
            placeholder="搜索模型"
            aria-label="搜索模型"
            onChange={(event) => { setQuery(event.target.value) }}
          />
          <button
            type="button"
            className={styles['linkButton']}
            disabled={visible.length === 0}
            onClick={() => {
              setPicked(current => {
                if (visible.every(candidate => current.has(candidate.id))) {
                  return new Set([...current].filter(id => !visible.some(candidate => candidate.id === id)))
                }
                return new Set([...current, ...visible.map(candidate => candidate.id)])
              })
            }}
          >
            {allPicked ? '取消全选' : '全选'}
          </button>
        </div>
        {visible.length === 0
          ? <p className={styles['candidateEmpty']} role="status">没有匹配的模型。</p>
          : (
              <ul className={styles['candidateList']}>
                {visible.map(candidate => (
                  <li key={candidate.id} className={styles['candidate']}>
                    <label className={styles['candidateLabel']}>
                      <input
                        type="checkbox"
                        checked={picked.has(candidate.id)}
                        onChange={() => { toggle(candidate.id) }}
                      />
                      <span className={styles['candidateId']}>{candidate.id}</span>
                    </label>
                  </li>
                ))}
              </ul>
            )}
      </Modal>
    </section>
  )
}

