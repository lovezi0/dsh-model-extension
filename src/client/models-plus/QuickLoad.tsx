/**
 * Quick-load: source → provider → model id, three narrowing steps.
 *
 * The single search box could not answer the question it raised. One model id
 * ships under a dozen providers (`glm-5.3-flash` exists in zai, opencode,
 * opencode-go, baseten, together, huggingface and two gateways), and each
 * provider's copy can carry different capacities and compat switches — so a
 * flat list of ten same-looking ids left the user to pick blind, or to decode
 * a suffix the plugin had appended for want of a better idea.
 *
 * Splitting the axis fixes it at the source: the user states *which catalog*
 * and *whose copy* first, and the id search then runs inside that slice.
 *
 * Both drop-downs are plugin-rendered rather than native. A `<datalist>` was
 * tried for the provider field and abandoned: the browser positions its popup
 * itself (it opened across unrelated fields) and none of it is themeable, so
 * it could not look like the list beside it. One `quickList` now serves both,
 * which also keeps only one popup on screen at a time.
 */

import { useRef, useState } from 'react'
import type { ReactNode } from 'react'
import { getPrefillIndex, providersOf, searchPrefill } from './models-index.ts'
import type { PrefillEntry, PrefillIndex, PrefillSource } from './models-index.ts'
import styles from './models-plus.module.css'

/** Props of {@link QuickLoad}. */
export interface QuickLoadProps {
  /** Apply one prefill candidate to the current model draft. */
  onPick: (entry: PrefillEntry) => void
  /** Disable while a write is in flight. */
  disabled: boolean
}

/** The two sources, in the order the picker offers them; pi-ai leads by default. */
const SOURCES: readonly { readonly id: PrefillSource; readonly label: string }[] = [
  { id: 'pi-ai', label: 'llm-pi-ai' },
  { id: 'models.dev', label: 'models.dev' },
]

/** Which drop-down is showing; at most one at a time. */
type OpenPanel = 'provider' | 'model' | null

/**
 * One line describing what the selected source currently offers, shown while
 * nothing is typed. The pi-ai version and snapshot date matter here: a DSH home
 * can hold more than one pi-ai copy, and knowing which one answered is the
 * difference between a diagnosis and a mystery.
 * @param index - the fetched index.
 * @param source - the selected source.
 * @returns the summary line.
 */
function sourceSummary(index: PrefillIndex, source: PrefillSource): string {
  if (source === 'pi-ai') {
    if (index.piAi.length === 0) {
      return index.piAiFailure === undefined
        ? 'pi-ai 目录不可用'
        : `pi-ai 目录不可用：${index.piAiFailure}`
    }
    const version = index.piAiVersion === undefined ? '' : ` v${index.piAiVersion}`
    const when = index.piAiGeneratedAt === undefined ? '' : ` · ${index.piAiGeneratedAt.slice(0, 10)}`
    return `pi-ai 目录${version}，${String(index.piAi.length)} 个模型${when}；选择提供方或输入 model id`
  }
  if (index.modelsDev.length === 0) {
    return 'models.dev 元数据未下载——点击页首「下载/更新元数据」'
  }
  return `models.dev，${String(index.modelsDev.length)} 条；选择提供方或输入 model id`
}

/**
 * Render the three-step quick-load picker and its candidate list.
 * @param props - the pick handler and disabled flag.
 * @returns the quick-load block.
 */
export function QuickLoad(props: QuickLoadProps): ReactNode {
  const [source, setSource] = useState<PrefillSource>('pi-ai')
  const [provider, setProvider] = useState('')
  const [text, setText] = useState('')
  const [panel, setPanel] = useState<OpenPanel>(null)
  const [index, setIndex] = useState<PrefillIndex | undefined>(undefined)
  const textField = useRef<HTMLInputElement>(null)

  // Re-asked on every focus: getPrefillIndex() memoizes per page load, so a
  // warm index costs nothing, while a download that just invalidated the cache
  // is picked up without a reload. (Keeping the first result forever would
  // leave the picker stuck on "未下载" right after the user clicked download.)
  const ensureIndex = (): void => {
    void getPrefillIndex().then((loaded) => { setIndex(loaded) })
  }

  const providers = providersOf(index, source)
  // The provider field doubles as the filter for its own candidate list, so a
  // half-typed name must not narrow the model list yet — only a name that
  // actually is a provider does. Typing the full name counts, which is what
  // makes the field usable both ways.
  const chosenProvider = providers.includes(provider) ? provider : ''
  const { hits, total } = searchPrefill(index, { source, provider: chosenProvider, text })

  const pick = (entry: PrefillEntry): void => {
    setPanel(null)
    // Keep the chosen id on screen rather than clearing the field: an emptied
    // box right after a pick leaves no trace of what was just loaded, and the
    // id is also the natural starting point for narrowing to a sibling model.
    setText(entry.id)
    props.onPick(entry)
  }

  const switchSource = (next: PrefillSource): void => {
    setSource(next)
    // The provider list belongs to the source, so a stale pick would filter
    // every candidate away and read as "the source is empty".
    setProvider('')
    setText('')
    setPanel(null)
  }

  /**
   * Commit one provider choice and move straight on to the id field, so the
   * flow is pick → type rather than pick → click → type.
   * @param name - the provider to select; blank means "every provider".
   */
  const chooseProvider = (name: string): void => {
    setProvider(name)
    setText('')
    textField.current?.focus()
  }

  const providerBody = (): ReactNode => {
    if (index === undefined) return <span className={styles['quickEmpty']}>正在载入预填数据…</span>
    const needle = provider.trim().toLowerCase()
    const matches = needle.length === 0
      ? providers
      : providers.filter(name => name.toLowerCase().includes(needle))
    if (providers.length === 0) {
      return <span className={styles['quickEmpty']}>该数据源没有提供方信息</span>
    }
    return (
      <>
        <button
          type="button"
          className={styles['quickItem']}
          onMouseDown={(event) => { event.preventDefault(); chooseProvider('') }}
        >
          全部（不限提供方）
        </button>
        {matches.map(name => (
          <button
            type="button"
            key={name}
            className={styles['quickItem']}
            onMouseDown={(event) => { event.preventDefault(); chooseProvider(name) }}
          >
            {name}
          </button>
        ))}
        {matches.length === 0
          ? <span className={styles['quickEmpty']}>没有匹配的提供方</span>
          : null}
      </>
    )
  }

  const modelBody = (): ReactNode => {
    if (index === undefined) return <span className={styles['quickEmpty']}>正在载入预填数据…</span>

    const nothingNarrowed = chosenProvider.length === 0 && text.trim().length === 0
    if (nothingNarrowed) {
      return (
        <>
          <span className={styles['quickEmpty']}>{sourceSummary(index, source)}</span>
          {source === 'pi-ai' && index.piAiWarnings.length > 0
            ? <span className={styles['error']}>{index.piAiWarnings.join('；')}</span>
            : null}
        </>
      )
    }

    if (hits.length === 0) {
      return <span className={styles['quickEmpty']}>没有匹配的模型</span>
    }

    return (
      <>
        {hits.map(entry => (
          <button
            type="button"
            key={entry.key}
            className={styles['quickItem']}
            onMouseDown={(event) => {
              // mousedown beats the input's blur handler.
              event.preventDefault()
              pick(entry)
            }}
          >
            {entry.id}
          </button>
        ))}
        {total > hits.length
          ? (
              <span className={styles['quickEmpty']}>
                另有 {total - hits.length} 项匹配——继续输入或选定提供方以缩小范围
              </span>
            )
          : null}
      </>
    )
  }

  return (
    <div className={styles['quickWrap']}>
      <span className={styles['extLabel']}>快速装入</span>
      <div style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
        <select
          className={`${styles['input']} ${styles['selectInput']}`}
          style={{ flex: '0 0 108px', minWidth: 0 }}
          value={source}
          disabled={props.disabled}
          aria-label="数据源"
          onChange={(event) => { switchSource(event.target.value as PrefillSource) }}
        >
          {SOURCES.map(option => <option key={option.id} value={option.id}>{option.label}</option>)}
        </select>

        <input
          className={styles['input']}
          style={{ flex: '0 0 132px', minWidth: 0 }}
          type="text"
          value={provider}
          placeholder="提供方：全部"
          aria-label="提供方"
          autoComplete="off"
          disabled={props.disabled}
          onFocus={() => { ensureIndex(); setPanel('provider') }}
          onBlur={() => { setPanel(null) }}
          onChange={(event) => { setProvider(event.target.value); setPanel('provider') }}
        />

        <input
          className={styles['input']}
          style={{ flex: '1 1 auto', minWidth: 0 }}
          type="text"
          ref={textField}
          value={text}
          placeholder="model id（如 glm）…"
          aria-label="model id"
          autoComplete="off"
          disabled={props.disabled}
          onFocus={() => { ensureIndex(); setPanel('model') }}
          onBlur={() => { setPanel(null) }}
          onChange={(event) => { setText(event.target.value); setPanel('model') }}
        />
      </div>

      {panel === 'provider' ? <div className={styles['quickList']}>{providerBody()}</div> : null}
      {panel === 'model' ? <div className={styles['quickList']}>{modelBody()}</div> : null}
    </div>
  )
}
