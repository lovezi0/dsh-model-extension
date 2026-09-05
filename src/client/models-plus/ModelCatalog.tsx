/**
 * One provider profile's model catalog: rows joined from the draft's `models`
 * array, the fetch action (interrogating the endpoint the form currently
 * shows), and the candidate-picker modal. Each row's expanded panel is the
 * plugin's ModelEntryPanel — capacities and extension fields in one block.
 */

import { useState } from 'react'
import type { ReactNode } from 'react'
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
  /** Why the fetch action is unavailable, or undefined when it is. */
  probeBlocked?: string
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
function adopt(candidate: LlmDiscoveredModel): ModelDraft {
  const row = newModelDraft()
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
      byId.set(candidate.id, byId.get(candidate.id) ?? adopt(candidate))
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
        </div>
      </div>

      {models.length === 0
        ? <p className={styles['modelEmpty']}>模型选择器中将不显示任何模型；目录外 ID 仍可直接发送。</p>
        : (
            <div className={styles['modelList']}>
              {models.map((model, index) => (
                <div
                  key={`${String(index)}:${textOf(model, 'id')}`}
                  className={styles['modelEntry']}
                >
                  <div className={styles['modelRow']}>
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
                  </div>
                  {expanded.has(index)
                    ? (
                        <ModelEntryPanel
                          model={model}
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
        onClick={() => { onChange([...models, newModelDraft()]) }}
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

