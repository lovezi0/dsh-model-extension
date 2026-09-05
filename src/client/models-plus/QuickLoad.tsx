/**
 * Quick-load: a searchable dropdown over the models.dev metadata index.
 * Plan constraints: ids only, case-insensitive substring match, at most 10
 * candidates rendered — the index is filtered on every keystroke and the
 * candidate list is only mounted while open, so a 370-row index never lands
 * in the DOM wholesale.
 */

import { useState } from 'react'
import type { ReactNode } from 'react'
import { getMetadataIndex, searchModelIds } from './models-index.ts'
import type { MetadataEntry } from './models-index.ts'
import styles from './models-plus.module.css'

/** Props of {@link QuickLoad}. */
export interface QuickLoadProps {
  /** Apply one metadata entry to the current model draft. */
  onPick: (entry: MetadataEntry) => void
  /** Disable while a write is in flight. */
  disabled: boolean
}

/**
 * Render the quick-load input with its filtered candidate dropdown.
 * @param props - the pick handler and disabled flag.
 * @returns the quick-load field.
 */
export function QuickLoad(props: QuickLoadProps): ReactNode {
  const [query, setQuery] = useState('')
  const [open, setOpen] = useState(false)
  const [index, setIndex] = useState<readonly MetadataEntry[] | undefined>(undefined)

  const ensureIndex = (): void => {
    if (index !== undefined) return
    void getMetadataIndex().then((loaded) => { setIndex(loaded) })
  }

  const hits = searchModelIds(index, query, 10)

  const pick = (id: string): void => {
    const entry = index?.find(candidate => candidate.id === id)
    setOpen(false)
    setQuery('')
    if (entry !== undefined) props.onPick(entry)
  }

  return (
    <div className={styles['quickWrap']}>
      <span className={styles['extLabel']}>快速装入</span>
      <input
        className={styles['input']}
        type="text"
        value={query}
        placeholder="搜索模型 id（如 aper）…"
        aria-label="快速装入"
        disabled={props.disabled}
        onFocus={() => { ensureIndex(); setOpen(true) }}
        onBlur={() => { setOpen(false) }}
        onChange={(event) => { setQuery(event.target.value); setOpen(true) }}
      />
      {open
        ? (
            <div className={styles['quickList']}>
              {index === undefined
                ? <span className={styles['quickEmpty']}>元数据预填不可用——点击页首「下载/更新元数据」</span>
                : hits.length === 0
                  ? <span className={styles['quickEmpty']}>{query.trim().length === 0 ? '输入关键字搜索模型 id' : '没有匹配的模型'}</span>
                  : hits.map(id => (
                    <button
                      type="button"
                      key={id}
                      className={styles['quickItem']}
                      onMouseDown={(event) => {
                        // mousedown beats the input's blur handler.
                        event.preventDefault()
                        pick(id)
                      }}
                    >
                      {id}
                    </button>
                  ))}
            </div>
          )
        : null}
    </div>
  )
}
