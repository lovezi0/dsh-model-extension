/**
 * The model catalog behind the card's `Models+` entry.
 *
 * This is the page-era editor restored inside a layer: fetch the endpoint's
 * model list, add or delete rows, drag to reorder, collapse a row and click to
 * expand it, and — in every row's expanded block — quick-load that row from the
 * pi-ai / models.dev catalogs, plus the capacity, modality, reasoning, and
 * compat fields the official page does not all edit.
 *
 * Edits stay in a local draft until Save, so one visit is one write and the
 * revision fence covers the whole edit.
 */

import { useState } from 'react'
import type { ReactNode } from 'react'
import { downloadMetadata } from '../models-plus/models-index.ts'
import { ModelCatalog } from '../models-plus/ModelCatalog.tsx'
import type { ModelDraft } from '../models-plus/compat.ts'
import type { ModelsOperations } from '../vendor/operations.ts'
import type { CommitOutcome } from './write.ts'
import styles from './extras.module.css'

/** Props of {@link ModelsModal}. */
export interface ModelsModalProps {
  /** The route's model rows, as the editor opens. */
  models: readonly Record<string, unknown>[]
  /** The wire protocol every row resolves to, when the route states one. */
  api: string | undefined
  /** Whether the settings document accepts writes. */
  writable: boolean
  /** The route's settings namespace (model discovery asks it). */
  settingsNs: string
  /** The route id, for the discovery request. */
  provider: string
  /** The route's base URL, when a layer states one. */
  baseURL: string | undefined
  /** Host operations: model discovery. */
  operations: ModelsOperations
  /** Commit the whole replacement array. */
  onCommit: (models: readonly Record<string, unknown>[]) => Promise<CommitOutcome>
  /** Called once the draft is committed. */
  onSaved: () => void
}

/**
 * Render the catalog editor and its save bar.
 * @param props - the route facts, operations, and commit callback.
 * @returns the editor body.
 */
export function ModelsModal(props: ModelsModalProps): ReactNode {
  const [draft, setDraft] = useState<Record<string, unknown>[]>(() => props.models.map(row => ({ ...row })))
  const [busy, setBusy] = useState(false)
  const [status, setStatus] = useState<string | undefined>(undefined)
  const [dirty, setDirty] = useState(false)
  const [downloading, setDownloading] = useState(false)

  const save = (): void => {
    setBusy(true)
    void props.onCommit(draft).then((outcome) => {
      setBusy(false)
      if (outcome.kind === 'written') {
        setDirty(false)
        props.onSaved()
        return
      }
      setStatus(outcome.kind === 'conflict'
        ? '设置已被其他改动刷新，关闭后重新打开再试'
        : '保存失败：' + outcome.message)
    })
  }

  // The models.dev file is a cache the user fetches once; quick-load reads it,
  // so the editor owns the one button that fills it.
  const download = (): void => {
    setDownloading(true)
    void downloadMetadata().then((result) => {
      setDownloading(false)
      setStatus(result.ok ? 'models.dev 元数据已更新' : '下载失败：' + result.message)
    })
  }

  return (
    <div className={styles['modalBody']}>
      <button
        type="button"
        className={styles['headerAction']}
        disabled={downloading}
        onClick={download}
      >
        {downloading ? '下载中…' : '更新 models.dev 元数据'}
      </button>
      <div className={styles['catalogBody']}>
        <ModelCatalog
        models={draft as unknown as ModelDraft[]}
        overridden
        defaultContextWindow={undefined}
        defaultMaxTokens={undefined}
        probe={{
          settingsNs: props.settingsNs,
          provider: props.provider,
          ...props.baseURL === undefined ? {} : { baseURL: props.baseURL },
          ...props.api === undefined ? {} : { api: props.api },
        }}
        {...props.api === undefined ? {} : { routeApi: props.api }}
        operations={props.operations}
        disabled={busy || !props.writable}
          onChange={(next) => {
            setDraft(next as unknown as Record<string, unknown>[])
            setDirty(true)
            setStatus(undefined)
          }}
        />
      </div>

      {status === undefined ? null : <p className={styles['error']}>{status}</p>}
      {props.writable ? null : <p className={styles['notice']}>设置文档只读，无法写入。</p>}

      <div className={styles['modalFoot']}>
        {dirty ? <span className={styles['dirtyHint']}>有未保存的改动</span> : null}
        <button
          type="button"
          className={styles['primaryButton']}
          disabled={busy || !props.writable || !dirty}
          onClick={save}
        >
          {busy ? '保存中…' : '保存'}
        </button>
      </div>
    </div>
  )
}