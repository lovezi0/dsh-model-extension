/**
 * One existing provider's editor card, fully plugin-owned (v1.0.0 rewrite).
 * Primary field: a single write-only API key input; the collapsed
 * 「供应商」 section carries baseURL (plus displayName/protocol for a
 * hand-declared route), the 「模型」 section the model catalog with the
 * extension panel. Save semantics mirror the host card: minimal path ops
 * against the stored section with a revision fence, then the credential
 * write — the draft comes from the user layer, so a wholesale replace can
 * never delete fields outside the card.
 */

import { useEffect, useMemo, useState } from 'react'
import type { ReactNode } from 'react'
import type { CredentialInfo, SettingsNamespaceView } from '@deepseek-ai/dsh-api-remotes/client'
import { deriveKeyRef, protocolChoices } from '../vendor/store.ts'
import type { ModelsOperations } from '../vendor/operations.ts'
import type { SettingsSchemaOperations } from '../vendor/schema-operations.ts'
import type { ModelDraft } from './compat.ts'
import { modelDrafts, normalizeModelRow, pathOps, validateModelRows } from './compat.ts'
import { ModelCatalog } from './ModelCatalog.tsx'
import styles from './models-plus.module.css'

/** The public DeepSeek endpoint shown as the deepseek base-URL placeholder. */
const DEEPSEEK_PUBLIC_BASE_URL = 'https://api.deepseek.com'

/** Per-adapter-family curated field sets (unknown namespaces get the hint alone). */
export type EditorLayout = 'deepseek' | 'pi-ai' | 'unknown'

/** The editor layout the owning namespace selects. */
export function layoutOf(ns: string): EditorLayout {
  if (ns === 'llm-deepseek') return 'deepseek'
  if (ns === 'llm-pi-ai') return 'pi-ai'
  return 'unknown'
}

/** A user-section subtree as a plain draft object (absent → empty). */
export function draftAt(
  schema: SettingsSchemaOperations,
  namespace: SettingsNamespaceView,
  path: readonly string[],
): Record<string, unknown> {
  const subtree = schema.getPath(namespace.user, path)
  if (typeof subtree !== 'object' || subtree === null || Array.isArray(subtree)) return {}
  return structuredClone(subtree) as Record<string, unknown>
}

/** The credential reference this profile resolves keys through. */
function refFor(
  schema: SettingsSchemaOperations,
  namespace: SettingsNamespaceView,
  path: readonly string[],
  provider: string,
): string {
  const profile = schema.getPath(namespace.value, path)
  const named = typeof profile === 'object' && profile !== null
    ? (profile as { apiKeyEnv?: unknown }).apiKeyEnv
    : undefined
  return typeof named === 'string' && named.length > 0 ? named : deriveKeyRef(provider)
}

/** Props of {@link ProviderEditor}. */
export interface ProviderEditorProps {
  /** Provider route id. */
  provider: string
  /** Display name for the card title. */
  displayName: string
  /** Whether the adapter reports this route as hand-declared. */
  declared?: boolean
  /** The owning namespace view (schema, layers, secrets). */
  namespace: SettingsNamespaceView
  /** Settings-owned synchronous schema and immutable path operations. */
  schema: SettingsSchemaOperations
  /** Path from the section root to this provider's profile. */
  settingsPath: readonly string[]
  /** The Host operations this card writes and interrogates through. */
  operations: ModelsOperations
  /** Disable writes (read-only settings provider). */
  readOnly: boolean
  /** Close the editor; `changed` reports whether an Apply committed. */
  onClose: (changed: boolean) => void
}

/**
 * Render one existing provider's editing card.
 * @param props - the addressed profile plus wire faces.
 * @returns the editor card.
 */
export function ProviderEditor(props: ProviderEditorProps): ReactNode {
  const { namespace, schema, settingsPath, operations } = props
  const [draft, setDraft] = useState<Record<string, unknown>>(() => draftAt(schema, namespace, settingsPath))
  const [tab, setTab] = useState<'provider' | 'models'>('provider')
  const [keyDraft, setKeyDraft] = useState('')
  const [keyState, setKeyState] = useState<CredentialInfo | undefined>(undefined)
  const [busy, setBusy] = useState(false)
  const [failure, setFailure] = useState<string | undefined>(undefined)
  const [committedOriginal, setCommittedOriginal] = useState<unknown>(
    () => schema.getPath(namespace.user, settingsPath),
  )
  const [expectedRevision, setExpectedRevision] = useState(() => namespace.revision)
  const root = useMemo(() => schema.rehydrate(namespace.schema), [namespace.schema, schema])
  const node = useMemo(() => schema.nodeAtPath(root, settingsPath), [root, schema, settingsPath])
  const fallback = schema.getPath(namespace.value, settingsPath)
  const disabled = props.readOnly || busy
  const layout = layoutOf(namespace.ns)
  const keyRef = refFor(schema, namespace, settingsPath, props.provider)
  const protocols = useMemo(
    () => layout === 'pi-ai' ? protocolChoices(namespace, schema) : [],
    [layout, namespace, schema],
  )

  useEffect(() => {
    let stale = false
    setKeyState(undefined)
    void operations.describeCredential(keyRef).then((described) => {
      if (stale) return
      setKeyState(described)
    })
    return () => { stale = true }
  }, [operations, keyRef])

  const stringAt = (source: unknown, key: string): string | undefined => {
    const value = schema.getPath(source, [key])
    return typeof value === 'string' && value.trim().length > 0 ? value : undefined
  }
  const setField = (key: string, next: string | undefined): void => {
    const value = next === undefined || next.trim().length === 0 ? undefined : next
    setDraft((current) => value === undefined
      ? schema.deletePath(current, [key])
      : schema.setPath(current, [key], value))
  }

  const modelFailure = validateModelRows(schema.getPath(draft, ['models']))
  const keyFailure = ((): 'keyBlank' | 'keyIllegalCharacters' | undefined => {
    if (keyDraft.length === 0) return undefined
    const value = keyDraft.trim()
    if (value.length === 0) return 'keyBlank'
    // Mirrors the host's apiKeyFailure heuristics (env line / quoted / charset).
    if (/^[A-Z][A-Z0-9_]*=[^=]/.test(value)) return 'keyIllegalCharacters'
    const first = value[0]
    if ((first === '"' || first === '\'' || first === '`') && value.length > 1 && value.endsWith(first)) {
      return 'keyIllegalCharacters'
    }
    return /^[\x21-\x7E]+$/.test(value) ? undefined : 'keyIllegalCharacters'
  })()
  const keyValue = keyDraft.trim()

  const probe = {
    settingsNs: namespace.ns,
    provider: props.provider,
    ...(() => {
      const baseURL = stringAt(draft, 'baseURL') ?? stringAt(fallback, 'baseURL')
      return baseURL === undefined ? {} : { baseURL }
    })(),
    ...(() => {
      const api = layout === 'pi-ai' && props.declared === true
        ? stringAt(draft, 'api') ?? stringAt(fallback, 'api')
        : undefined
      return api === undefined ? {} : { api }
    })(),
    ...keyValue.length === 0 ? {} : { apiKey: keyValue },
  }

  /** The write for this card, or a failure message. */
  const applyOnce = async (): Promise<string | undefined> => {
    const ns = namespace.ns
    let next = layout === 'pi-ai' && stringAt(draft, 'apiKeyEnv') === undefined
      && stringAt(fallback, 'apiKeyEnv') === undefined && keyValue.length > 0
      ? schema.setPath(draft, ['apiKeyEnv'], keyRef)
      : draft
    const rowFailure = validateModelRows(schema.getPath(next, ['models']))
    if (rowFailure !== undefined) {
      return `模型 ${String(rowFailure.index + 1)}：${{
        modelIdRequired: '模型 ID 不能为空。',
        modelIdDuplicate: '模型 ID 不能重复。',
        modelNameInvalid: '显示名称不能为空。',
        modelContextInvalid: '上下文窗口须为正数，如 131072、256K、1M。',
        modelMaxTokensInvalid: '最大输出 token 数须为正数，如 8192、64K、1M。',
      }[rowFailure.key]}`
    }
    if (node !== undefined && settingsPath.length === 0) {
      const sectionError = schema.validate(node, next)
      if (sectionError !== undefined) return sectionError
    }
    // Stable YAML key order: normalize every drafted row before diffing.
    if (schema.hasPath(next, ['models'])) {
      next = schema.setPath(
        next,
        ['models'],
        modelDrafts(schema.getPath(next, ['models'])).map(normalizeModelRow),
      )
    }
    // Official semantic: a pi-ai route whose only act is activating the route
    // (no fields the card can see, no key yet) still writes an empty profile
    // so the route exists in the directory at all.
    const materializesNativeProfile = layout === 'pi-ai'
      && fallback === undefined
      && committedOriginal === undefined
      && Object.keys(next).length === 0
    const ops = materializesNativeProfile
      ? [{ op: 'set', path: [...settingsPath], value: {} }]
      : pathOps(settingsPath, committedOriginal, next)
    if (ops.length > 0) {
      const written = await operations.writeSettings(ns, ops, expectedRevision)
      if (written.kind !== 'written') return written.kind === 'conflict'
        ? '这张卡片打开期间，这些设置已被其他地方改动。请关闭后重新打开，在当前值上编辑。'
        : written.message
      setCommittedOriginal(schema.getPath(written.view.user, settingsPath))
      setExpectedRevision(written.view.revision)
      setDraft(next)
    }
    if (keyValue.length > 0) {
      const stored = await operations.storeCredential(keyRef, keyValue)
      if (stored !== undefined) return stored
    }
    setKeyDraft('')
    return undefined
  }

  const apply = async (): Promise<void> => {
    setBusy(true)
    setFailure(undefined)
    try {
      const applyFailure = await applyOnce()
      if (applyFailure !== undefined) {
        setFailure(applyFailure)
        return
      }
      props.onClose(true)
    } finally {
      setBusy(false)
    }
  }

  if (node === undefined) {
    return <p className={styles['error']}>{props.provider}: 无法解析设置路径</p>
  }

  /**
   * The catalog beneath the user layer: the composition entry's pin, or the
   * schema default — reading the effective value would echo the stored
   * override back the moment reset drops it.
   */
  const inheritedModels = (): unknown => {
    const pinned = schema.getPath(namespace.base, [...settingsPath, 'models'])
    return pinned ?? schema.nodeAtPath(root, [...settingsPath, 'models'])?.meta.default
  }
  const customModels = schema.getPath(draft, ['models'])
  const modelsOverridden = schema.hasPath(draft, ['models'])
  const models = modelDrafts(modelsOverridden ? customModels : inheritedModels())
  const defaultContextWindow = schema.getPath(fallback, ['defaultContextWindow'])
  const defaultMaxTokens = schema.getPath(fallback, ['maxTokens'])

  const keyPlaceholder = keyState?.writable === false
    ? '由启动环境提供（只读）'
    : keyState?.configured === true
      ? '已配置——输入新值可替换'
      : layout === 'pi-ai' && props.declared === true
        ? '输入 API 密钥，或留空使用环境认证'
        : '输入 API 密钥'
  const keyLocked = keyState?.writable === false

  return (
    <div className={styles['editor']}>
      {layout === 'unknown'
        ? <p className={styles['advancedHint']}>其余字段存于 settings.yaml；请直接编辑对应段。（{namespace.ns}）</p>
        : (
            <>
              <div className={styles['tabs']}>
                <div className={styles['tabBar']} role="tablist">
                  <button type="button" role="tab" aria-selected={tab === 'provider'} className={tab === 'provider' ? `${styles['tabButton']} ${styles['tabButtonActive']}` : styles['tabButton']} onClick={() => { setTab('provider') }}>供应商</button>
                  <button type="button" role="tab" aria-selected={tab === 'models'} className={tab === 'models' ? `${styles['tabButton']} ${styles['tabButtonActive']}` : styles['tabButton']} onClick={() => { setTab('models') }}>模型</button>
                </div>                <div className={styles['tabPanel']} role="tabpanel" hidden={tab !== 'provider'}>
                  {layout === 'pi-ai' && props.declared === true
                    ? (
                        <div className={styles['field']}>
                          <label className={styles['fieldLabel']}>显示名称</label>
                          <input
                            className={styles['input']}
                            type="text"
                            value={stringAt(draft, 'displayName') ?? ''}
                            placeholder={stringAt(schema.getPath(namespace.base, settingsPath), 'displayName')
                              ?? props.provider}
                            aria-label="显示名称"
                            disabled={disabled}
                            onChange={(event) => { setField('displayName', event.target.value) }}
                          />
                        </div>
                      )
                    : null}
                  <div className={styles['field']}>
                    <label className={styles['fieldLabel']}>API 密钥</label>
                    <input
                      className={styles['input']}
                      type="password"
                      autoComplete="off"
                      value={keyDraft}
                      placeholder={keyPlaceholder}
                      aria-label="API 密钥"
                      disabled={disabled || keyLocked}
                      onChange={(event) => { setKeyDraft(event.target.value) }}
                    />
                    {keyFailure === undefined
                      ? null
                      : <p className={styles['error']}>{keyFailure === 'keyBlank' ? '请输入 API 密钥；留空则保持已存储的密钥。' : '此 API 密钥格式无效，请检查。'}</p>}
                  </div>
                  <div className={styles['field']}>
                    <label className={styles['fieldLabel']}>API 地址</label>
                    <input
                      className={styles['input']}
                      type="text"
                      value={stringAt(draft, 'baseURL') ?? ''}
                      placeholder={layout === 'deepseek'
                        ? DEEPSEEK_PUBLIC_BASE_URL
                        : stringAt(fallback, 'baseURL') ?? '提供方默认'}
                      aria-label="API 地址"
                      disabled={disabled}
                      onChange={(event) => { setField('baseURL', event.target.value === '' ? undefined : event.target.value) }}
                    />
                  </div>
                  {layout === 'pi-ai' && props.declared === true
                    ? (
                        <div className={styles['field']}>
                          <label className={styles['fieldLabel']}>API 协议</label>
                          <select
                            className={`${styles['input']} ${styles['selectInput']}`}
                            value={stringAt(draft, 'api') ?? stringAt(fallback, 'api') ?? ''}
                            aria-label="API 协议"
                            disabled={disabled}
                            onChange={(event) => { setField('api', event.target.value) }}
                          >
                            {(stringAt(draft, 'api') ?? stringAt(fallback, 'api')) === undefined
                              ? <option value="">未选择</option>
                              : null}
                            {protocols.map(choice => <option key={choice} value={choice}>{choice}</option>)}
                          </select>
                        </div>
                      )
                    : null}
                </div>
                <div className={styles['tabPanel']} role="tabpanel" hidden={tab !== 'models'}>
                  <ModelCatalog
                    models={models}
                    overridden={modelsOverridden}
                    defaultContextWindow={typeof defaultContextWindow === 'number' ? defaultContextWindow : undefined}
                    defaultMaxTokens={typeof defaultMaxTokens === 'number' ? defaultMaxTokens : undefined}
                    probe={probe}
                    probeBlocked={keyFailure}
                    operations={operations}
                    disabled={disabled}
                    onChange={(rows: ModelDraft[]) => {
                      setDraft(current => schema.setPath(current, ['models'], rows))
                    }}
                    onReset={() => { setDraft(current => schema.deletePath(current, ['models'])) }}
                  />
                </div>
              </div>
            </>
          )}

      {failure !== undefined ? <p className={styles['error']}>{failure}</p> : null}
      {modelFailure === undefined
        ? null
        : (
            <p className={styles['advancedHint']}>
              {`模型 ${String(modelFailure.index + 1)}：${modelFailure.key}`}
            </p>
          )}

      <div className={styles['editorActions']}>
        <button
          type="button"
          className={styles['secondaryButton']}
          disabled={busy}
          onClick={() => { props.onClose(false) }}
        >
          取消
        </button>
        <button
          type="button"
          className={styles['primaryButton']}
          disabled={disabled || layout === 'unknown' || modelFailure !== undefined
            || keyFailure !== undefined}
          onClick={() => { void apply() }}
        >
          {busy ? '保存中…' : '保存'}
        </button>
      </div>
    </div>
  )
}
