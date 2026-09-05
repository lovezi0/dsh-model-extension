/**
 * Client access to the models.dev metadata index. The index is served by this
 * plugin's own server route (same origin); the raw models.json lives next to
 * settings.yaml under DSH home and is fetched from models.dev ONLY when the
 * user clicks the title-row button — nothing downloads automatically.
 *
 * The search surface is deliberately minimal (per plan): match model ids with
 * a case-insensitive substring test and show ids only, at most 10 candidates.
 * The full index is never handed to a static <datalist>.
 */

/** Precise entry the metadata search returns (a subset of the raw models.dev record). */
export interface MetadataEntry {
  readonly id: string
  readonly context: number | undefined
  readonly output: number | undefined
  readonly input: readonly string[]
  readonly reasoning: boolean
}

/** Same-origin routes served by the server half. */
const INDEX_URL = '/plugins/dsh-model-extension/models-index'
const DOWNLOAD_URL = '/plugins/dsh-model-extension/models-download'

/** Module-level cache: one page load fetches the index at most once. */
let cached: readonly MetadataEntry[] | undefined

function normalize(raw: unknown): readonly MetadataEntry[] {
  if (!Array.isArray(raw)) return []
  const entries: MetadataEntry[] = []
  for (const item of raw) {
    if (typeof item !== 'object' || item === null) continue
    const row = item as Record<string, unknown>
    if (typeof row['id'] !== 'string' || row['id'].length === 0) continue
    const modalities = Array.isArray(row['input'])
      ? row['input'].filter((m): m is string => typeof m === 'string')
      : []
    entries.push({
      id: row['id'],
      context: typeof row['context'] === 'number' ? row['context'] : undefined,
      output: typeof row['output'] === 'number' ? row['output'] : undefined,
      input: modalities,
      reasoning: row['reasoning'] === true,
    })
  }
  return entries
}

/**
 * The metadata index, fetched once per page load; `undefined` while the
 * server has no metadata file (the caller shows the not-ready hint).
 */
export async function getMetadataIndex(): Promise<readonly MetadataEntry[] | undefined> {
  if (cached !== undefined) return cached
  try {
    const response = await fetch(INDEX_URL)
    if (!response.ok) return undefined
    cached = normalize(await response.json())
    return cached
  } catch {
    return undefined
  }
}

/** The outcome of an explicit user-triggered download. */
export type MetadataDownload = { readonly ok: true } | { readonly ok: false; readonly message: string }

/**
 * Download/refresh the metadata file through the server half (user-triggered
 * from the title-row button). A success also refreshes the local cache.
 */
export async function downloadMetadata(): Promise<MetadataDownload> {
  try {
    const response = await fetch(DOWNLOAD_URL, { method: 'POST' })
    const body = await response.json().catch(() => undefined) as
      | { ok?: boolean; message?: string }
      | undefined
    if (!response.ok || body?.ok !== true) {
      return { ok: false, message: body?.message ?? `HTTP ${String(response.status)}` }
    }
    cached = normalize(body['index'])
    return { ok: true }
  } catch (error) {
    return { ok: false, message: error instanceof Error ? error.message : String(error) }
  }
}

/**
 * Case-insensitive substring match over model ids, at most {@link limit}
 * candidates (plan: show ids only, never the whole list).
 * @param index - the metadata index, or undefined while unavailable.
 * @param query - the user's typed text.
 * @param limit - maximum candidates to return.
 * @returns the matching ids; empty when the index is unavailable.
 */
export function searchModelIds(
  index: readonly MetadataEntry[] | undefined,
  query: string,
  limit = 10,
): readonly string[] {
  if (index === undefined) return []
  const needle = query.trim().toLowerCase()
  if (needle.length === 0) return []
  const hits: string[] = []
  for (const entry of index) {
    if (!entry.id.toLowerCase().includes(needle)) continue
    hits.push(entry.id)
    if (hits.length >= limit) break
  }
  return hits
}
