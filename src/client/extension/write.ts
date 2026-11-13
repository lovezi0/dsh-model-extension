/**
 * Read/write bridge for the provider-card extension seat.
 *
 * The official Models section owns the page; this plugin only adds two seats
 * inside one provider card. Writing therefore cannot borrow the page's draft
 * state — every action reads the stored namespace, composes the whole models
 * array, and commits it with the revision it read (the same fence the host
 * page uses), so a stale read reports a conflict instead of overwriting.
 */

import type { Context as ClientContext } from '@deepseek-ai/cordis'
import type { SettingsNamespaceView } from '@deepseek-ai/dsh-api-remotes/client'
import type { JsonValue } from '@deepseek-ai/dsh-util-values'
import type { ModelsOperations } from '../vendor/operations.ts'
import type { SettingsSchemaOperations } from '../vendor/schema-operations.ts'

/** The stored facts one provider card's extension seat reads. */
export interface StoredProvider {
  /** User-layer value of the provider subtree (what an edit writes over). */
  readonly user: Record<string, unknown>
  /** Effective (composed) value of the same subtree, which carries inherited fields. */
  readonly resolved: Record<string, unknown>
  /** Stored revision the next write fences against. */
  readonly revision: number
  /** Whether the settings document accepts writes in this deployment. */
  readonly writable: boolean
}

/** One commit outcome, in the shape the cards render. */
export type CommitOutcome =
  /** Committed; `revision` is the stored revision the next write must fence on. */
  | { readonly kind: 'written'; readonly revision: number }
  | { readonly kind: 'conflict' }
  | { readonly kind: 'refused'; readonly message: string }

/**
 * The extension seat's read/write surface, bound once in the plugin body.
 */
export interface ProviderWriter {
  /**
   * Read one provider's stored user subtree.
   * @param ns - settings namespace identity.
   * @param path - path of the provider subtree inside that namespace.
   * @returns the stored facts, or undefined while the namespace is not mirrored.
   */
  read(ns: string, path: readonly string[]): StoredProvider | undefined
  /**
   * Replace the provider's whole `models` array.
   * @param ns - settings namespace identity.
   * @param path - path of the provider subtree inside that namespace.
   * @param models - the array to store.
   * @param expectedRevision - revision the read returned.
   * @returns the commit outcome.
   */
  writeModels(
    ns: string,
    path: readonly string[],
    models: readonly Record<string, unknown>[],
    expectedRevision: number,
  ): Promise<CommitOutcome>
}

/**
 * Bind the writer to the plugin's describe face, schema, and Host operations.
 * @param ctx - client root context (declares `configForms`, `remote.settings`).
 * @param operations - Models Host operations.
 * @param schema - bound settings-schema callbacks.
 * @returns the read/write surface handed to the extension components.
 */
export function createProviderWriter(
  ctx: ClientContext,
  operations: ModelsOperations,
  schema: SettingsSchemaOperations,
): ProviderWriter {
  return {
    read: (ns, path) => {
      const snapshot = describeSnapshot(ctx)
      if (snapshot === undefined) return undefined
      const view = snapshot.views.find(candidate => candidate.ns === ns)
      if (view === undefined) return undefined
      const user = objectAt(view.user, path, schema)
      const resolved = objectAt(view.value, path, schema)
      return { user, resolved, revision: view.revision, writable: snapshot.writable }
    },
    writeModels: async (ns, path, models, expectedRevision) => {
      const outcome = await operations.writeSettings(
        ns,
        [{ op: 'set', path: [...path, 'models'], value: [...models] as unknown as JsonValue }],
        expectedRevision,
      )
      if (outcome.kind === 'written') return { kind: 'written', revision: outcome.view.revision }
      return outcome.kind === 'conflict' ? { kind: 'conflict' } : { kind: 'refused', message: outcome.message }
    },
  }
}

/**
 * One object-valued subtree.
 * @param root - the layer value.
 * @param path - subtree path.
 * @param schema - bound schema callbacks.
 * @returns the object, or an empty record when the path holds something else.
 */
function objectAt(root: unknown, path: readonly string[], schema: SettingsSchemaOperations): Record<string, unknown> {
  const subtree = schema.getPath(root, path)
  return typeof subtree === 'object' && subtree !== null && !Array.isArray(subtree)
    ? subtree as Record<string, unknown>
    : {}
}

/** The two facts a write needs out of the describe snapshot. */
interface DescribeSnapshot {
  /** Whether the document accepts writes in this deployment. */
  readonly writable: boolean
  /** Every mirrored namespace view. */
  readonly views: readonly SettingsNamespaceView[]
}

/**
 * Read the current describe snapshot, asking the face to load when it has none
 * yet (a card can render before the first settings push arrives).
 * @param ctx - client root context.
 * @returns the snapshot facts, or undefined while the describe is still loading.
 */
function describeSnapshot(ctx: ClientContext): DescribeSnapshot | undefined {
  const face = ctx.configForms.describe()
  const snapshot = face.getSnapshot()
  const view = snapshot.view
  if (view === undefined) {
    void face.ensure()
    return undefined
  }
  return { writable: view.writable, views: view.namespaces }
}