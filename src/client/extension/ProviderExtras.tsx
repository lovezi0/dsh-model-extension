/**
 * The provider-card extension seat: one entry and its model-level editor.
 *
 * The official page has no per-model extension seat, so this plugin folds both
 * of its jobs behind a single word in the card — `Models+` — and opens a layer
 * that lists the route's models with each row's compat switches beside it.
 * Quick-load lives in that layer as a route-level action: it appends a model to
 * the route, it does not fill an existing row.
 *
 * The seat reads the stored namespace on every open (the revision fence needs
 * the revision in force now) and commits whole `models` arrays; a stale read
 * reports a conflict instead of overwriting a concurrent edit.
 */

import { useState } from 'react'
import type { ReactNode } from 'react'
import { Modal } from '@deepseek-ai/dsh-client-ui-primitives'
import type { ProviderDirectoryEntry } from '@deepseek-ai/dsh-client-ui-settings-models/client'
import type { ModelsOperations } from '../vendor/operations.ts'
import type { SettingsSchemaOperations } from '../vendor/schema-operations.ts'
import { ModelsModal } from './ModelsModal.tsx'
import type { CommitOutcome, ProviderWriter, StoredProvider } from './write.ts'
import styles from './extras.module.css'

/** Props of {@link ProviderExtras}: the seat's owner share plus the plugin face. */
export interface ProviderExtrasProps {
  /** The card's directory row (route id, display name, settings address). */
  provider: ProviderDirectoryEntry
  /** Whether any layer configures this provider. */
  configured: boolean
  /** Whether the row's referenced api-key credential is configured. */
  keyConfigured: boolean
  /** The seat's read/write surface. */
  writer: ProviderWriter
  /** Bound settings-schema callbacks. */
  schema: SettingsSchemaOperations
  /** Host operations (model discovery). */
  operations: ModelsOperations
}

/**
 * The route's stored model rows. The effective value is the base: a route that
 * inherits the catalog's list must not lose those rows when the first quick
 * load writes a custom array.
 * @param stored - the read subtree pair.
 * @returns the rows, or an empty list.
 */
function rowsOf(stored: StoredProvider | undefined): Record<string, unknown>[] {
  const source = stored?.user['models'] ?? stored?.resolved['models']
  if (!Array.isArray(source)) return []
  return source.filter((row): row is Record<string, unknown> =>
    typeof row === 'object' && row !== null && !Array.isArray(row))
}

/**
 * The protocol the route states, from the user layer or the inherited value.
 * @param stored - the read subtree pair.
 * @returns the identifier, or undefined when no layer settles one.
 */
function apiOf(stored: StoredProvider | undefined): string | undefined {
  const declared = stored?.user['api'] ?? stored?.resolved['api']
  return typeof declared === 'string' && declared.length > 0 ? declared : undefined
}

/**
 * The route's base URL, from the user layer or the inherited value.
 * @param stored - the read subtree pair.
 * @returns the URL, or undefined when no layer states one.
 */
function baseURLOf(stored: StoredProvider | undefined): string | undefined {
  const declared = stored?.user['baseURL'] ?? stored?.resolved['baseURL']
  return typeof declared === 'string' && declared.length > 0 ? declared : undefined
}

/**
 * Render the seat.
 * @param props - owner share plus the plugin's read/write face.
 * @returns the extension block.
 */
export function ProviderExtras(props: ProviderExtrasProps): ReactNode {
  const [open, setOpen] = useState(false)
  const [stored, setStored] = useState<StoredProvider | undefined>(undefined)
  const [models, setModels] = useState<Record<string, unknown>[]>([])
  const [revision, setRevision] = useState(0)

  const ns = props.provider.settingsNs
  const path = props.provider.settingsPath
  const displayName = typeof props.provider.displayName === 'string' && props.provider.displayName.length > 0
    ? props.provider.displayName
    : String(props.provider.provider)

  const openEditor = (): void => {
    const read = props.writer.read(ns, path)
    setStored(read)
    setModels(rowsOf(read))
    setRevision(read?.revision ?? 0)
    setOpen(true)
  }

  // The commit hands back the revision it wrote, so a second edit in the same
  // open editor fences on the new one instead of reporting a false conflict.
  const commit = (next: readonly Record<string, unknown>[]): Promise<CommitOutcome> =>
    props.writer.writeModels(ns, path, next, revision).then((outcome) => {
      if (outcome.kind === 'written') {
        setModels([...next])
        setRevision(outcome.revision)
      }
      return outcome
    })

  if (!props.configured) {
    return (
      <p className={styles['extrasHint']}>
        保存该提供方后可在此装入目录模型或编辑兼容开关。
      </p>
    )
  }

  return (
    <div className={styles['extrasRow']}>
      <button
        type="button"
        className={styles['extrasLink']}
        aria-expanded={open}
        onClick={() => { open ? setOpen(false) : openEditor() }}
      >
        Models+<span className={styles['extrasCaret']} aria-hidden="true">▾</span>
      </button>
      <Modal
        open={open}
        onClose={() => { setOpen(false) }}
        title={`${displayName} · 模型扩展`}
        closeLabel="关闭"
        className={styles['modelsModal']}
        contentClassName={styles['modelsModalContent']}
      >
        {open && stored !== undefined
          ? (
            <ModelsModal
              models={models}
              api={apiOf(stored)}
              writable={stored.writable}
              settingsNs={ns}
              provider={String(props.provider.provider)}
              baseURL={baseURLOf(stored)}
              operations={props.operations}
              onCommit={commit}
              onSaved={() => { setOpen(false) }}
            />
          )
          : null}
      </Modal>
    </div>
  )
}