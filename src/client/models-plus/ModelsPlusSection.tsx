/**
 * The Models+ settings section (v1.0.0, fully plugin-owned UI): provider rows
 * joined from the configurable directory, settings namespaces, and credential
 * states, one editor card at a time. The title row carries the adapter badge
 * and the metadata download button — the only place models.dev data is ever
 * fetched, on an explicit user click.
 */

import { useState } from 'react'
import type { ReactNode } from 'react'
import { Modal } from '@deepseek-ai/dsh-client-ui-primitives'
import type { ModelsSettingsStore, ProviderRow } from '../vendor/store.ts'
import { deriveKeyRef, protocolChoices, providerUsable } from '../vendor/store.ts'
import type { ModelsOperations } from './operations.ts'
import type { SettingsSchemaOperations } from './schema-operations.ts'
import { downloadMetadata } from './models-index.ts'
import { ProviderEditor } from './ProviderEditor.tsx'
import { CreateProviderCard } from './CreateProviderCard.tsx'
import styles from './models-plus.module.css'

/** One existing row or dormant directory entry addressed by an editor action. */
export interface EditorTarget {
  readonly provider: string
  readonly displayName: string
  readonly settingsNs: string
  readonly settingsPath: readonly string[]
  /** Writable credential identified under this page's conventional reference. */
  credentialRef?: string
  readonly declared?: boolean
}

/** Injected dependencies of {@link ModelsPlusSection} (slot `inject`). */
export interface ModelsPlusInjected {
  controller: ModelsSettingsStore
  hooks: {
    snapshot: ModelsSettingsStore['store']
  }
  operations: ModelsOperations
  schema: SettingsSchemaOperations
  t: (key: string) => string
}

/** One fact decides the first-run posture: whether any provider is usable. */
function needsSetup(row: ProviderRow, anyUsable: boolean): boolean {
  if (anyUsable) return false
  if (row.entry.settingsPath.length > 0) return false
  return row.credential?.configured !== true
}

/** The credential reference a row resolves keys through, confirmed configured. */
function keyConfiguredOf(row: ProviderRow): boolean {
  return row.apiKeyEnv !== undefined
    ? row.credential?.configured === true
    : row.derivedCredential?.configured === true
}

function targetOf(row: ProviderRow): EditorTarget {
  const managedRef = deriveKeyRef(row.entry.provider)
  const credentialRef = row.apiKeyEnv === managedRef
    && row.credential?.configured === true
    && row.credential.writable
    ? managedRef
    : undefined
  return {
    provider: row.entry.provider,
    displayName: row.entry.displayName,
    settingsNs: row.entry.settingsNs,
    settingsPath: row.entry.settingsPath,
    ...credentialRef === undefined ? {} : { credentialRef },
    ...row.entry.declared === true ? { declared: true } : {},
  }
}

/**
 * Remove one user-added provider and its page-managed credential. Credential
 * removal comes first so a second-step failure leaves the row retryable.
 */
async function removeProviderProfile(
  operations: ModelsOperations,
  controller: ModelsSettingsStore,
  target: { settingsNs: string; settingsPath: readonly string[]; credentialRef?: string },
): Promise<string | undefined> {
  if (target.credentialRef !== undefined) {
    const credential = await operations.removeCredential(target.credentialRef)
    if (credential !== undefined) return credential
  }
  const written = await operations.writeSettings(
    target.settingsNs,
    [{ op: 'unset', path: [...target.settingsPath] }],
    undefined,
  )
  if (written.kind !== 'written') return written.message
  await controller.load()
  return undefined
}

/** Replace the one provider placeholder in localized destructive copy. */
function providerCopy(template: string, target: { displayName: string; provider: string }): string {
  const label = target.provider === target.displayName
    ? target.provider
    : `${target.displayName} (${target.provider})`
  return template.replace('{provider}', () => label)
}

/**
 * Render the Models+ section content column.
 * @param props - slot-delivered injected dependencies.
 * @returns the section, or null while the shell has not injected yet.
 */
export function ModelsPlusSection(props: {
  controller?: ModelsPlusInjected['controller']
  useSnapshot?: ModelsPlusInjected['hooks']['snapshot']
  operations?: ModelsPlusInjected['operations']
  schema?: ModelsPlusInjected['schema']
  t?: ModelsPlusInjected['t']
}): ReactNode {
  const { controller, useSnapshot, operations, schema, t } = props
  if (
    controller === undefined || useSnapshot === undefined || operations === undefined
    || schema === undefined || t === undefined
  ) return null
  // Hooks live in the Loaded child (mirrors the host section): the null check
  // above must not change this component's hook count between renders.
  return <Loaded injected={{ controller, useSnapshot, operations, schema, t }} />
}

function Loaded({ injected }: { injected: ModelsPlusInjected }): ReactNode {
  const { controller, operations, schema, t } = injected
  const useSnapshot = injected.useSnapshot

  const state = useSnapshot(snapshot => snapshot)
  const [editing, setEditing] = useState<EditorTarget | undefined>(undefined)
  const [adding, setAdding] = useState(false)
  const [declaring, setDeclaring] = useState(false)
  const [deleteTarget, setDeleteTarget] = useState<EditorTarget | undefined>(undefined)
  const [deleting, setDeleting] = useState(false)
  const [deleteFailure, setDeleteFailure] = useState<string | undefined>(undefined)
  const [savedTarget, setSavedTarget] = useState<{ displayName: string; provider: string } | undefined>(undefined)
  const [dismissedSetup, setDismissedSetup] = useState<ReadonlySet<string>>(() => new Set())
  const [metaBusy, setMetaBusy] = useState(false)
  const [metaMessage, setMetaMessage] = useState<{ ok: boolean; text: string } | undefined>(undefined)

  const announceSaved = (target: { displayName: string; provider: string }): void => {
    void controller.load().then(() => { setSavedTarget(target) })
  }

  const closeEditor = (changed: boolean, target: { displayName: string; provider: string }): void => {
    setEditing(undefined)
    setAdding(false)
    setDeclaring(false)
    if (changed) announceSaved(target)
  }

  const closeSetup = (changed: boolean, target: { displayName: string; provider: string }): void => {
    setDismissedSetup(previous => new Set([...previous, target.provider]))
    if (changed) announceSaved(target)
  }

  const downloadMeta = async (): Promise<void> => {
    setMetaBusy(true)
    setMetaMessage(undefined)
    try {
      const outcome = await downloadMetadata()
      setMetaMessage(outcome.ok
        ? { ok: true, text: 'models.dev 元数据已下载并就绪。' }
        : { ok: false, text: `元数据下载失败：${outcome.message}` })
    } finally {
      setMetaBusy(false)
    }
  }

  if (state.status === 'idle') void controller.load()
  if (state.status === 'error') {
    const errorText = state.error ?? ''
    return (
      <div className={styles['section']}>
        <p className={styles['error']}>{`加载提供方目录失败: ${errorText}`}</p>
        <button type="button" className={styles['secondaryButton']} onClick={() => { void controller.load() }}>
          重试
        </button>
      </div>
    )
  }

  const savedRow = savedTarget === undefined
    ? undefined
    : state.rows.find(row => row.entry.provider === savedTarget.provider)
  const savedIdentity = savedRow === undefined
    ? savedTarget
    : { displayName: savedRow.entry.displayName, provider: savedRow.entry.provider }

  const anyUsable = state.rows.some(providerUsable)
  const configured = state.rows.filter(row => row.configured)
  const addable = state.rows.filter(row => !row.configured && row.entry.settingsNs !== '')
  const addTarget = adding ? editing : undefined
  const addNamespace = addTarget === undefined ? undefined : state.namespaces.get(addTarget.settingsNs)
  const protocols = (() => {
    // The protocol choices a hand-declared route may name (schema read).
    return protocolChoices(state.namespaces.get('llm-pi-ai'), schema)
  })()

  const renderEditor = (
    target: EditorTarget,
    namespace: Parameters<typeof ProviderEditor>[0]['namespace'] | undefined,
    onClose: (changed: boolean) => void,
  ): ReactNode => {
    if (namespace === undefined) return null
    return (
      <ProviderEditor
        provider={target.provider}
        displayName={target.displayName}
        settingsPath={target.settingsPath}
        {...target.declared === true ? { declared: true } : {}}
        namespace={namespace}
        schema={schema}
        operations={operations}
        readOnly={!state.writable}
        onClose={onClose}
      />
    )
  }

  return (
    <div className={styles['section']}>
      {/* Title row: heading + metadata download button */}
      <div className={styles['titleRow']}>
        <h2 className={styles['title']}>{t('nav')}</h2>
        <span className={styles['rowActions']}>
          <button
            type="button"
            className={styles['linkButton']}
            disabled={metaBusy}
            title="下载/更新 models.dev 元数据（供快速装入预填）"
            onClick={() => { void downloadMeta() }}
          >
            {metaBusy ? '正在下载元数据…' : '下载/更新元数据'}
          </button>
        </span>
      </div>
      {metaMessage === undefined
        ? null
        : <p className={metaMessage.ok ? styles['savedNotice'] : styles['error']}>{metaMessage.text}</p>}

      <p className={styles['intro']}>{t('intro')}</p>

      {savedIdentity === undefined
        ? null
        : (
            <p className={styles['savedNotice']} role="status" aria-live="polite">
              {providerCopy('已保存 {provider}。', savedIdentity)}
            </p>
          )}

      <ul className={styles['rows']}>
        {configured.map((row) => {
          const target = targetOf(row)
          const namespace = state.namespaces.get(target.settingsNs)
          if (namespace === undefined) return null
          if (needsSetup(row, anyUsable) && !dismissedSetup.has(row.entry.provider)) {
            return (
              <li key={row.entry.provider} className={styles['rowCard']}>
                {renderEditor(target, namespace, (changed) => { closeSetup(changed, target) })}
              </li>
            )
          }
          const open = !adding && !declaring && editing?.provider === row.entry.provider
          const credentialConfigured = row.credential?.configured === true
          const credentialMissing = !credentialConfigured
            && row.apiKeyEnv !== undefined
            && row.credential?.configured === false
          return (
            <li key={row.entry.provider} className={styles['rowCard']}>
              <div className={styles['rowHead']}>
                <span className={styles['rowIdentity']}>
                  <span className={styles['rowName']}>{row.entry.displayName}</span>
                  {row.entry.declared === true
                    ? <span className={styles['rowTag']}>自定义</span>
                    : null}
                  {credentialConfigured
                    ? (
                        <span
                          className={`${styles['credentialDot']} ${styles['credentialDotConfigured']}`}
                          role="img"
                          aria-label="API 密钥已配置"
                          title="API 密钥已配置"
                        />
                      )
                    : credentialMissing
                      ? (
                          <span
                            className={`${styles['credentialDot']} ${styles['credentialDotMissing']}`}
                            role="img"
                            aria-label="API 密钥缺失"
                            title="API 密钥缺失"
                          />
                        )
                      : null}
                </span>
                <span className={styles['rowActions']}>
                  <button
                    type="button"
                    className={styles['secondaryButton']}
                    aria-label={providerCopy('编辑 {provider}', target)}
                    onClick={() => {
                      setSavedTarget(undefined)
                      setDeclaring(false)
                      setAdding(false)
                      setEditing(open ? undefined : target)
                    }}
                  >
                    编辑
                  </button>
                  {row.removable
                    ? (
                        <button
                          type="button"
                          className={styles['dangerButton']}
                          aria-label={providerCopy('删除 {provider}', target)}
                          disabled={!state.writable}
                          onClick={() => {
                            setSavedTarget(undefined)
                            setDeleteFailure(undefined)
                            setDeleteTarget(target)
                          }}
                        >
                          删除
                        </button>
                      )
                    : null}
                </span>
              </div>
              {open
                ? renderEditor(target, namespace, (changed) => { closeEditor(changed, target) })
                : null}
            </li>
          )
        })}
      </ul>

      <div className={styles['addBlock']}>
        {addTarget !== undefined && addNamespace !== undefined
          ? (
              <div className={styles['addCard']}>
                <div className={styles['field']}>
                  <label className={styles['fieldLabel']}>提供方</label>
                  <select
                    className={`${styles['input']} ${styles['selectInput']}`}
                    value={addTarget.provider}
                    aria-label="提供方"
                    onChange={(event) => {
                      const row = addable.find(candidate => candidate.entry.provider === event.target.value)
                      if (row === undefined) return
                      setEditing(targetOf(row))
                    }}
                  >
                    {addable.map(row => (
                      <option key={row.entry.provider} value={row.entry.provider}>
                        {row.entry.displayName}
                      </option>
                    ))}
                  </select>
                </div>
                <ProviderEditor
                  key={addTarget.provider}
                  provider={addTarget.provider}
                  displayName={addTarget.displayName}
                  namespace={addNamespace}
                  schema={schema}
                  settingsPath={addTarget.settingsPath}
                  operations={operations}
                  readOnly={!state.writable}
                  onClose={(changed) => { closeEditor(changed, addTarget) }}
                />
              </div>
            )
          : declaring
            ? (
                <div className={styles['addCard']}>
                  <CreateProviderCard
                    taken={state.rows.map(row => row.entry.provider)}
                    protocols={protocols}
                    revision={state.namespaces.get('llm-pi-ai')?.revision ?? 0}
                    operations={operations}
                    readOnly={!state.writable}
                    onClose={(changed) => {
                      setDeclaring(false)
                      if (changed) void controller.load()
                    }}
                  />
                </div>
              )
            : (
                <div className={styles['addActions']}>
                  <button
                    type="button"
                    className={styles['addButton']}
                    disabled={addable.length === 0 || !state.writable}
                    onClick={() => {
                      const first = addable[0]
                      if (first === undefined) return
                      setSavedTarget(undefined)
                      setDeclaring(false)
                      setAdding(true)
                      setEditing(targetOf(first))
                    }}
                  >
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                      <path d="M8 3.5v9M3.5 8h9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                    添加提供方
                  </button>
                  <button
                    type="button"
                    className={styles['addButton']}
                    disabled={protocols.length === 0 || !state.writable}
                    onClick={() => {
                      setSavedTarget(undefined)
                      setAdding(false)
                      setEditing(undefined)
                      setDeclaring(true)
                    }}
                  >
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                      <path d="M8 3.5v9M3.5 8h9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                    添加自定义提供方
                  </button>
                </div>
              )}
      </div>

      <Modal
        open={deleteTarget !== undefined}
        onClose={() => {
          if (deleting) return
          setDeleteTarget(undefined)
          setDeleteFailure(undefined)
        }}
        title={deleteTarget === undefined ? '' : providerCopy('删除 {provider}？', deleteTarget)}
        closeLabel="关闭"
        description={deleteTarget === undefined
          ? ''
          : providerCopy(
            deleteTarget.credentialRef === undefined
              ? '删除 {provider} 会移除其配置；其使用的凭证（如有）由其他位置管理，将会保留。'
              : '删除 {provider} 会移除其配置和存储的 API 密钥。',
            deleteTarget,
          )}
        className={styles['deleteDialog'] as string}
        footer={(
          <>
            <button
              type="button"
              className={styles['secondaryButton']}
              disabled={deleting}
              onClick={() => {
                setDeleteTarget(undefined)
                setDeleteFailure(undefined)
              }}
            >
              取消
            </button>
            <button
              type="button"
              className={`${styles['secondaryButton']} ${styles['deleteConfirm']}`}
              disabled={deleting}
              onClick={() => {
                if (deleteTarget === undefined || deleting) return
                setDeleting(true)
                setDeleteFailure(undefined)
                void removeProviderProfile(operations, controller, deleteTarget)
                  .then((removeFailure) => {
                    if (removeFailure !== undefined) {
                      setDeleteFailure(removeFailure)
                      return
                    }
                    setDeleteTarget(undefined)
                  })
                  .finally(() => { setDeleting(false) })
              }}
            >
              {deleteTarget === undefined ? '' : providerCopy(deleting ? '正在删除 {provider}…' : '删除 {provider}', deleteTarget)}
            </button>
          </>
        )}
      >
        {deleteFailure === undefined ? null : <p className={styles['error']}>{deleteFailure}</p>}
      </Modal>
    </div>
  )
}

