/**
 * Client access to the prefill index.
 *
 * Two sources, one search surface:
 *
 * - **pi-ai** — the installed `@earendil-works/pi-ai` catalog, served by this
 *   plugin's own route straight from the package the host adapter loads. It is
 *   the source carrying the reasoning and compat surface models.dev has no
 *   concept of, and it costs no network call.
 * - **models.dev** — a flat metadata file, fetched ONLY when the user clicks
 *   the title-row button and cached next to settings.yaml under DSH home.
 *
 * pi-ai candidates lead (richer, and faithful to what the host will actually
 * do); models.dev follows as the fallback for routes pi-ai ships nothing
 * about. An unavailable pi-ai source is not an error — the index simply
 * carries an empty pi-ai list and the search degrades to models.dev alone.
 */

/** Which source a prefill candidate came from. */
export type PrefillSource = 'pi-ai' | 'models.dev'

/** One prefill candidate, normalized across both sources. */
export interface PrefillEntry {
  readonly source: PrefillSource
  /** Unique within the fetched index (source, provider and id combined). */
  readonly key: string
  /** The source's own model id — also what the candidate list renders. */
  readonly id: string
  /**
   * Owning provider: pi-ai's provider id (the route key a catalog route is
   * named after), or the leading segment of a models.dev directory path.
   * Absent when the source does not name one.
   */
  readonly provider?: string
  /** Display name, when the source carries one. */
  readonly name?: string
  /** Maximum combined request and response context in tokens. */
  readonly context: number | undefined
  /** Maximum output tokens. */
  readonly output: number | undefined
  /** Accepted request modalities, already narrowed to what this UI offers. */
  readonly input: readonly string[]
  /** Whether the model reasons at all. */
  readonly reasoning: boolean
  /**
   * pi-ai only: its own level→wire-spelling map. Semantically our
   * `reasoningEfforts`, except that `null` means *unsupported* here while our
   * dict reads it as *supported, send nothing* — the panel maps it, never
   * copies it across.
   */
  readonly thinkingLevelMap?: Readonly<Record<string, string | null>>
  /** pi-ai only: the wire protocol the model speaks, which picks its compat set. */
  readonly api?: string
  /** pi-ai only: the wire-compatibility switches the catalog records. */
  readonly compat?: Readonly<Record<string, unknown>>
}

/** The fetched prefill index: pi-ai leads, models.dev follows. */
export interface PrefillIndex {
  /** Candidates from the installed pi-ai catalog; empty when unavailable. */
  readonly piAi: readonly PrefillEntry[]
  /** Candidates from the cached models.dev file; empty when not downloaded. */
  readonly modelsDev: readonly PrefillEntry[]
  /** Installed pi-ai version, for the source note in the UI. */
  readonly piAiVersion?: string
  /** Generation timestamp of the pi-ai catalog snapshot. */
  readonly piAiGeneratedAt?: string
  /**
   * Drift findings reported alongside the catalog: a pi-ai version outside the
   * verified set, a resolution path that had to be guessed, several pi-ai
   * copies on the host, or records that did not project cleanly.
   *
   * Surfaced verbatim and unconditionally — a warning nobody sees is a silent
   * failure with extra steps, which is exactly the state this field exists to
   * rule out.
   */
  readonly piAiWarnings: readonly string[]
  /**
   * Why the pi-ai source is empty, when it was *refused* rather than simply
   * absent. The server names the concrete cause (no package found, the catalog
   * API unreachable), which is the difference between a diagnosis and a shrug.
   */
  readonly piAiFailure?: string
}

/** Same-origin routes served by the server half. */
const INDEX_URL = '/plugins/dsh-model-extension/models-index'
const DOWNLOAD_URL = '/plugins/dsh-model-extension/models-download'
const PI_AI_URL = '/plugins/dsh-model-extension/pi-ai-catalog'

/** Precise entry the models.dev route returns (a subset of the raw record). */
export interface MetadataEntry {
  readonly id: string
  readonly context: number | undefined
  readonly output: number | undefined
  readonly input: readonly string[]
  readonly reasoning: boolean
}

/** Module-level cache: one page load fetches each source at most once. */
let cachedIndex: PrefillIndex | undefined

/** Normalize the models.dev route payload. */
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

/** Narrow a modality list to what this UI offers. */
function supportedInput(value: unknown): string[] {
  if (!Array.isArray(value)) return []
  return value.filter((m): m is string => typeof m === 'string' && (m === 'text' || m === 'image'))
}

/** Read one object-valued field off a raw record. */
function objectField(source: Record<string, unknown>, key: string): Record<string, unknown> | undefined {
  const value = source[key]
  return typeof value === 'object' && value !== null && !Array.isArray(value)
    ? value as Record<string, unknown>
    : undefined
}

/**
 * The provider a models.dev id belongs to.
 *
 * models.dev ids are directory paths (`zhipuai/glm-5.3-flash`), so the leading
 * segment names the provider. Reading it here gives the picker the same
 * provider-first navigation that pi-ai's per-provider catalog has for free —
 * and it is what lets a user narrow by vendor instead of guessing between
 * same-named ids.
 * @param id - the models.dev directory id.
 * @returns the provider segment, or undefined when the id carries none.
 */
function modelsDevProvider(id: string): string | undefined {
  const slash = id.indexOf('/')
  return slash > 0 ? id.slice(0, slash) : undefined
}

/** Turn models.dev rows into prefill candidates. */
function toModelsDevEntries(rows: readonly MetadataEntry[]): readonly PrefillEntry[] {
  return rows.map((row): PrefillEntry => ({
    source: 'models.dev',
    key: `models.dev\u0000${row.id}`,
    id: row.id,
    provider: modelsDevProvider(row.id),
    context: row.context,
    output: row.output,
    input: row.input,
    reasoning: row.reasoning,
  }))
}

/** Read the diagnostics warnings the server attaches to a catalog payload. */
function diagnosticsWarnings(payload: unknown): readonly string[] {
  if (typeof payload !== 'object' || payload === null) return []
  const diagnostics = (payload as Record<string, unknown>)['diagnostics']
  if (typeof diagnostics !== 'object' || diagnostics === null) return []
  const warnings = (diagnostics as Record<string, unknown>)['warnings']
  if (!Array.isArray(warnings)) return []
  return warnings.filter((warning): warning is string => typeof warning === 'string')
}

/** Turn a pi-ai route payload into prefill candidates, keeping both ids' provenance. */
function toPiAiEntries(payload: unknown): {
  entries: readonly PrefillEntry[]
  version?: string
  generatedAt?: string
  warnings: readonly string[]
} {
  const warnings = diagnosticsWarnings(payload)
  if (typeof payload !== 'object' || payload === null) return { entries: [], warnings }
  const body = payload as Record<string, unknown>
  if (!Array.isArray(body['models'])) return { entries: [], warnings }

  // One id can live in several providers (zai, opencode and two gateways all
  // ship `glm-5.3-flash`), so ownership travels per entry instead of being
  // disambiguated inside a display string — the picker filters by provider
  // rather than asking the user to decode a suffix.
  const entries: PrefillEntry[] = []
  for (const item of body['models']) {
    if (typeof item !== 'object' || item === null) continue
    const row = item as Record<string, unknown>
    const id = row['id']
    const provider = row['provider']
    if (typeof id !== 'string' || id.length === 0) continue
    if (typeof provider !== 'string' || provider.length === 0) continue
    entries.push({
      source: 'pi-ai',
      key: `pi-ai\u0000${provider}\u0000${id}`,
      id,
      provider,
      name: typeof row['name'] === 'string' && row['name'].length > 0 ? row['name'] : undefined,
      context: typeof row['contextWindow'] === 'number' ? row['contextWindow'] : undefined,
      output: typeof row['maxTokens'] === 'number' ? row['maxTokens'] : undefined,
      input: supportedInput(row['input']),
      reasoning: row['reasoning'] === true,
      api: typeof row['api'] === 'string' ? row['api'] : undefined,
      thinkingLevelMap: objectField(row, 'thinkingLevelMap') as Record<string, string | null> | undefined,
      compat: objectField(row, 'compat'),
    })
  }

  return {
    entries,
    warnings,
    version: typeof body['piAiVersion'] === 'string' ? body['piAiVersion'] : undefined,
    generatedAt: typeof body['generatedAt'] === 'string' ? body['generatedAt'] : undefined,
  }
}

/**
 * Fetch one JSON route, keeping a refusal distinguishable from an empty source.
 *
 * The distinction matters for the pi-ai half: "the host ships no catalog" and
 * "the host's catalog could not be called" both leave the list empty, but only
 * the second one has a fix, and the server names it in the refusal body.
 * @param url - the same-origin route.
 * @returns the parsed payload, or the reason it is missing.
 */
async function fetchJson(url: string): Promise<{ payload?: unknown; failure?: string }> {
  try {
    const response = await fetch(url)
    const payload: unknown = await response.json().catch(() => undefined)
    if (response.ok) return { payload }
    const message = typeof payload === 'object' && payload !== null
      ? (payload as Record<string, unknown>)['message']
      : undefined
    return { failure: typeof message === 'string' ? message : `HTTP ${String(response.status)}` }
  } catch (error) {
    return { failure: error instanceof Error ? error.message : String(error) }
  }
}

/**
 * The prefill index, fetched once per page load. Both sources are requested
 * together and either may come back empty; an entirely empty index is a
 * legitimate answer the caller renders as "nothing to load yet".
 * @returns the merged index.
 */
export async function getPrefillIndex(): Promise<PrefillIndex> {
  if (cachedIndex !== undefined) return cachedIndex

  const [piAiResult, modelsDevResult] = await Promise.all([fetchJson(PI_AI_URL), fetchJson(INDEX_URL)])
  const piAi = toPiAiEntries(piAiResult.payload)

  cachedIndex = {
    piAi: piAi.entries,
    modelsDev: toModelsDevEntries(normalize(modelsDevResult.payload)),
    piAiVersion: piAi.version,
    piAiGeneratedAt: piAi.generatedAt,
    piAiWarnings: piAi.warnings,
    ...(piAiResult.failure !== undefined ? { piAiFailure: piAiResult.failure } : {}),
  }
  return cachedIndex
}

/** The outcome of an explicit user-triggered download. */
export type MetadataDownload = { readonly ok: true } | { readonly ok: false; readonly message: string }

/**
 * Download/refresh the models.dev file through the server half (user-triggered
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
    cachedIndex = undefined
    return { ok: true }
  } catch (error) {
    return { ok: false, message: error instanceof Error ? error.message : String(error) }
  }
}

/**
 * How many candidates the picker renders before it stops and reports the rest.
 *
 * Ten was too few once one id could arrive from a dozen providers; fifty shows
 * a vendor's catalog without pouring a 1354-row index into the DOM.
 */
const DEFAULT_PREFILL_LIMIT = 50

/** How one prefill lookup is narrowed. */
export interface PrefillQuery {
  /** Which source to search; the picker always names exactly one. */
  readonly source: PrefillSource
  /** Restrict to one provider; blank means every provider in the source. */
  readonly provider?: string
  /** Model-id substring, case-insensitive; blank means every model. */
  readonly text?: string
  /** Maximum candidates to return; the caller reports the remainder. */
  readonly limit?: number
}

/** The candidates a lookup produced, plus how many matched in total. */
export interface PrefillHits {
  /** The candidates to render, capped at the query's limit. */
  readonly hits: readonly PrefillEntry[]
  /** Every match, so a capped list can say what it is hiding. */
  readonly total: number
}

/**
 * The providers a source offers, alphabetically.
 *
 * This is what turns "which `glm-5.3-flash` did you mean?" into a choice the
 * user can actually make: the same id ships under several providers, and each
 * provider's copy can carry different capacities and compat switches.
 * @param index - the fetched index, or undefined while the page still loads.
 * @param source - the source to enumerate.
 * @returns the provider names; empty when the source has none.
 */
export function providersOf(index: PrefillIndex | undefined, source: PrefillSource): readonly string[] {
  if (index === undefined) return []
  const entries = source === 'pi-ai' ? index.piAi : index.modelsDev
  const providers = new Set<string>()
  for (const entry of entries) {
    if (entry.provider !== undefined && entry.provider.length > 0) providers.add(entry.provider)
  }
  return [...providers].sort((a, b) => a.localeCompare(b))
}

/**
 * Candidates matching one source, one provider and one id substring.
 *
 * Either filter may be blank, and a blank one *widens* rather than matching
 * nothing: a provider with no id typed lists that provider's whole catalog,
 * which is how a user browses a vendor whose model names they have not
 * memorized. Both blank lists the source's first page.
 * @param index - the fetched index, or undefined while the page still loads.
 * @param query - the source, provider, id substring and cap.
 * @returns the capped candidates and the total match count.
 */
export function searchPrefill(
  index: PrefillIndex | undefined,
  query: PrefillQuery,
): PrefillHits {
  if (index === undefined) return { hits: [], total: 0 }
  const entries = query.source === 'pi-ai' ? index.piAi : index.modelsDev
  const provider = query.provider?.trim() ?? ''
  const needle = query.text?.trim().toLowerCase() ?? ''
  const limit = query.limit ?? DEFAULT_PREFILL_LIMIT

  const hits: PrefillEntry[] = []
  let total = 0
  for (const entry of entries) {
    if (provider.length > 0 && entry.provider !== provider) continue
    if (needle.length > 0 && !entry.id.toLowerCase().includes(needle)) continue
    total += 1
    if (hits.length < limit) hits.push(entry)
  }
  return { hits, total }
}
