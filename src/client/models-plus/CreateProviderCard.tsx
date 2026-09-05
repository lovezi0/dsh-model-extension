/**
 * The card that declares a provider pi-ai does not ship — an OpenAI-compatible
 * gateway, a self-hosted server, or a provider newer than the installed
 * catalog. One `settings.mutate` sets the whole profile at `providers.<route>`;
 * the key travels separately through `credentials/set` under the reference
 * the profile records. The three fields a hand-declared route cannot default
 * (endpoint, protocol, at least one model) are required here.
 */

import { useState } from 'react'
import type { ReactNode } from 'react'
import type { JsonValue } from '@deepseek-ai/dsh-util-values'
import { deriveKeyRef } from '../vendor/store.ts'
import type { ModelsOperations } from '../vendor/operations.ts'
import type { ModelDraft } from './compat.ts'
import { normalizeModelRow, validateModelRows } from './compat.ts'
import { ModelCatalog } from './ModelCatalog.tsx'
import styles from './models-plus.module.css'

/** The settings namespace a hand-declared provider is written into. */
const NS = 'llm-pi-ai'

/**
 * A route id usable as a settings key AND as the stem of a credential name.
 */
const ROUTE_PATTERN = /^[a-z][a-z0-9]*(?:-[a-z0-9]+)*$/

/** Props of {@link CreateProviderCard}. */
export interface CreateProviderCardProps {
  /** Route ids already declared, so the card refuses to shadow one. */
  taken: readonly string[]
  /** Wire protocols the adapter can serve, in the order it reports them. */
  protocols: readonly string[]
  /** Revision of the `llm-pi-ai` user section this card opened at. */
  revision: number
  /** The Host operations this card writes and interrogates through. */
  operations: ModelsOperations
  /** Disable writes (read-only settings provider). */
  readOnly: boolean
  /** Close the card; `changed` reports whether a provider was created. */
  onClose: (changed: boolean) => void
}

/**
 * Render the custom-provider creation card.
 * @param props - existing routes, protocol choices, wire faces.
 * @returns the creation card.
 */
export function CreateProviderCard(props: CreateProviderCardProps): ReactNode {
  const { taken, protocols, operations } = props
  const [openedAt] = useState(() => props.revision)
  const [route, setRoute] = useState('')
  const [displayName, setDisplayName] = useState('')
  const [baseURL, setBaseURL] = useState('')
  const [protocol, setProtocol] = useState(protocols[0] ?? '')
  const [tab, setTab] = useState<'provider' | 'models'>('provider')
  const [keyDraft, setKeyDraft] = useState('')
  const [models, setModels] = useState<readonly ModelDraft[]>([])
  const [busy, setBusy] = useState(false)
  const [failure, setFailure] = useState<string | undefined>(undefined)
  /** The profile write landed; only the key write can still be outstanding. */
  const [committed, setCommitted] = useState(false)
  const disabled = props.readOnly || busy
  const profileDisabled = disabled || committed

  const routeInvalid = route.length > 0 && !ROUTE_PATTERN.test(route)
  const routeTaken = taken.includes(route)
  const modelFailure = validateModelRows(models)
  const keyFailure = ((): 'keyBlank' | 'keyIllegalCharacters' | undefined => {
    if (keyDraft.length === 0) return undefined
    const value = keyDraft.trim()
    if (value.length === 0) return 'keyBlank'
    if (/^[A-Z][A-Z0-9_]*=[^=]/.test(value)) return 'keyIllegalCharacters'
    const first = value[0]
    if ((first === '"' || first === '\'' || first === '`') && value.length > 1 && value.endsWith(first)) {
      return 'keyIllegalCharacters'
    }
    return /^[\x21-\x7E]+$/.test(value) ? undefined : 'keyIllegalCharacters'
  })()
  const keyValue = keyDraft.trim()
  const ready = route.length > 0 && !routeInvalid && !routeTaken
    && baseURL.length > 0 && models.length > 0 && modelFailure === undefined
    && keyFailure === undefined
  const hint = failure !== undefined || ready || keyFailure !== undefined
    || route.length === 0 || routeInvalid || routeTaken
    ? undefined
    : baseURL.length === 0
      ? '自定义提供方需要填写 API 地址。'
      : modelFailure !== undefined
        ? `模型 ${String(modelFailure.index + 1)}：${modelFailure.key}`
        : '自定义提供方至少需要一个模型。'

  /** Perform the create, returning a failure message or undefined. */
  const createOnce = async (): Promise<string | undefined> => {
    const keyRef = deriveKeyRef(route)
    const storesKey = keyValue.length > 0
    if (!committed) {
      const profile = {
        ...displayName.length === 0 ? {} : { displayName },
        ...storesKey ? { apiKeyEnv: keyRef } : {},
        api: protocol,
        baseURL,
        models: models.map(normalizeModelRow),
      }
      const written = await operations.writeSettings(
        NS,
        [{ op: 'set', path: ['providers', route], value: profile as JsonValue }],
        openedAt,
      )
      if (written.kind !== 'written') {
        return written.kind === 'conflict'
          ? '这张卡片打开期间，这些设置已被其他地方改动。请关闭后重新打开，在当前值上编辑。'
          : written.message
      }
      // A retry after a failed key write must not re-run this mutate.
      setCommitted(true)
    }
    if (storesKey) {
      const stored = await operations.storeCredential(keyRef, keyValue)
      if (stored !== undefined) return stored
    }
    return undefined
  }

  const create = async (): Promise<void> => {
    setBusy(true)
    setFailure(undefined)
    try {
      const outcome = await createOnce()
      if (outcome !== undefined) {
        setFailure(outcome)
        return
      }
      props.onClose(true)
    } finally {
      setBusy(false)
    }
  }

  return (
    <div className={styles['editor']}>
      <div className={styles['field']} style={{ paddingTop: 12, borderTop: '0.5px solid var(--dsw-alias-border-l2)' }}>
        <label className={styles['fieldLabel']}>Provider ID</label>
        <input
          className={styles['input']}
          type="text"
          value={route}
          placeholder="acme-gateway"
          aria-label="Provider ID"
          disabled={profileDisabled}
          onChange={(event) => { setRoute(event.target.value) }}
        />
        {routeInvalid || routeTaken
          ? <p className={styles['error']}>{routeInvalid ? '需以小写字母开头，之后可用小写字母、数字和短横线。' : '已有提供方使用了这个 ID。'}</p>
          : <p className={styles['advancedHint']}>以小写字母开头的标识，在请求中唯一标识该提供方，并用于派生凭据名。</p>}
      </div>

      <div className={styles['tabs']}>
      <div className={styles['tabBar']} role="tablist">
        <button type="button" role="tab" aria-selected={tab === 'provider'} className={tab === 'provider' ? `${styles['tabButton']} ${styles['tabButtonActive']}` : styles['tabButton']} onClick={() => { setTab('provider') }}>供应商</button>
        <button type="button" role="tab" aria-selected={tab === 'models'} className={tab === 'models' ? `${styles['tabButton']} ${styles['tabButtonActive']}` : styles['tabButton']} onClick={() => { setTab('models') }}>模型</button>
      </div>
        <div className={styles['tabPanel']} role="tabpanel" hidden={tab !== 'provider'}>
          <div className={styles['field']}>
            <label className={styles['fieldLabel']}>显示名称</label>
            <input
              className={styles['input']}
              type="text"
              value={displayName}
              placeholder={route.length === 0 ? '显示名称' : route}
              aria-label="显示名称"
              disabled={profileDisabled}
              onChange={(event) => { setDisplayName(event.target.value) }}
            />
          </div>
          <div className={styles['field']}>
            <label className={styles['fieldLabel']}>API 地址</label>
            <input
              className={styles['input']}
              type="text"
              value={baseURL}
              placeholder="https://gateway.example/v1"
              aria-label="API 地址"
              disabled={profileDisabled}
              onChange={(event) => { setBaseURL(event.target.value) }}
            />
          </div>
          <div className={styles['field']}>
            <label className={styles['fieldLabel']}>API 协议</label>
            <select
              className={`${styles['input']} ${styles['selectInput']}`}
              value={protocol}
              aria-label="API 协议"
              disabled={profileDisabled}
              onChange={(event) => { setProtocol(event.target.value) }}
            >
              {protocols.map(choice => <option key={choice} value={choice}>{choice}</option>)}
            </select>
          </div>
          <div className={styles['field']}>
            <label className={styles['fieldLabel']}>API 密钥</label>
            <input
              className={styles['input']}
              type="password"
              autoComplete="off"
              value={keyDraft}
              placeholder="输入 API 密钥，或留空使用环境认证"
              aria-label="API 密钥"
              disabled={disabled}
              onChange={(event) => { setKeyDraft(event.target.value) }}
            />
            {keyFailure === undefined
              ? null
              : <p className={styles['error']}>{keyFailure === 'keyBlank' ? '请输入 API 密钥；若该提供方以其他方式鉴权，可以留空。' : '此 API 密钥格式无效，请检查。'}</p>}
          </div>
        </div>
        <div className={styles['tabPanel']} role="tabpanel" hidden={tab !== 'models'}>
          <ModelCatalog
            models={models}
            overridden={true}
            defaultContextWindow={undefined}
            defaultMaxTokens={undefined}
            probe={{
              settingsNs: NS,
              baseURL,
              api: protocol,
              ...keyValue.length === 0 ? {} : { apiKey: keyValue },
            }}
            probeBlocked={keyFailure === 'keyBlank' ? '请输入 API 密钥；若该提供方以其他方式鉴权，可以留空。' : keyFailure}
            operations={operations}
            disabled={profileDisabled}
            onChange={setModels}
          />
        </div>
      </div>

      {failure !== undefined ? <p className={styles['error']}>{failure}</p> : null}
      {hint === undefined ? null : <p className={styles['advancedHint']}>{hint}</p>}

      <div className={styles['editorActions']}>
        <button
          type="button"
          className={styles['secondaryButton']}
          disabled={busy}
          onClick={() => { props.onClose(committed) }}
        >
          取消
        </button>
        <button
          type="button"
          className={styles['primaryButton']}
          disabled={disabled || !ready}
          onClick={() => { void create() }}
        >
          {busy ? '创建中…' : '创建提供方'}
        </button>
      </div>
    </div>
  )
}

