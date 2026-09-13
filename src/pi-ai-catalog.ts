/**
 * pi-ai catalog reader.
 *
 * The values a Models+ row can meaningfully carry are exactly the fields of
 * pi-ai's `Model` — `thinkingLevelMap` (our `reasoningEfforts`), `compat`,
 * capacities and modalities — so this module reads the installed catalog and
 * projects it into the prefill index. models.dev knows none of the reasoning
 * or compat surface.
 *
 * ## Why the catalog is read through pi-ai's own API
 *
 * `@earendil-works/pi-ai/providers/all` is a *declared* subpath export of the
 * installed package, and the host's own adapter reads the catalog through it
 * (`dsh-llm-pi-ai` calls `getBuiltinProviders()` / `getBuiltinModels()`). Doing
 * the same buys three things:
 *
 * - **The data-format responsibility stays with pi-ai.** The `data/*.json`
 *   layout, its `schemaVersion`, and how groups flatten into models are pi-ai's
 *   business. Calling its API means a future layout change is absorbed by the
 *   package that made it, instead of by this plugin.
 * - **The data is the host's own.** Same package, same module instance, same
 *   values the adapter resolves — there is no second opinion to drift from.
 * - **No version gate is needed, or wanted.** A host upgrade that changes the
 *   catalog simply yields the new catalog. Gating on a version we recognize
 *   would turn every host upgrade into a silent feature outage; what this
 *   module guards instead is the *shape of what it received*.
 *
 * ## What is actually guarded
 *
 * The failure modes are answered as concrete findings, never as a version
 * guess:
 *
 * | Drift | Answer |
 * |---|---|
 * | pi-ai renamed or dropped from the adapter's deps | resolution fails, and the refusal carries every copy that was visible |
 * | a second, stale copy wins resolution | resolution starts at the adapter the host loads, and every visible copy is reported |
 * | the catalog API stops exporting what we call | the source is disabled, naming the missing export |
 * | a projected field stops arriving | a finding is reported, and the affected rows simply inherit from the host catalog |
 *
 * Resolution is hand-rolled for one reason: pi-ai is ESM-only with no
 * `require`/`default` export condition, so `createRequire().resolve()` refuses
 * every subpath. Anchors start inside the profile because Node resolves a
 * symlink to its real path before resolving imports, and the home root is a
 * last resort — a DSH home can hold a stale copy there.
 *
 * The one thing this module cannot detect by itself is a change to the *host's*
 * acceptance rules: its `COMPAT_GATES` offer/withhold split is not exported,
 * and a switch it withdrew would be refused at save time. That is covered by
 * `scripts/audit-pi-ai-contract.mjs`.
 *
 * Nothing here touches the network.
 *
 * @module dsh-model-extension/pi-ai-catalog
 */

import { existsSync, readFileSync, readdirSync, realpathSync } from 'node:fs'
import { createRequire } from 'node:module'
import { dirname, join } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

/** The pi-ai package whose catalog backs a `dsh-llm-pi-ai` route. */
const PI_AI_PACKAGE = '@earendil-works/pi-ai'

/** The host adapter that owns the catalog routes; its location seeds resolution. */
const PI_AI_ADAPTER_PACKAGE = '@deepseek-ai/dsh-llm-pi-ai'

/** The declared subpath this module reads the catalog through. */
const PI_AI_ALL_SUBPATH = 'dist/providers/all.js'

/** How many parent directories the hand-rolled `node_modules` walk visits. */
const RESOLUTION_DEPTH = 12

/** One catalog model projected to the fields the prefill consumes. */
export interface PiAiModelEntry {
  /** pi-ai provider id — the route key a catalog route is named after. */
  readonly provider: string
  /** Wire protocol this model speaks, which picks its `compat` field set. */
  readonly api: string
  /** Model id passed to the provider. */
  readonly id: string
  /** Display name, when the catalog carries one. */
  readonly name?: string
  /** Maximum combined request and response context in tokens. */
  readonly contextWindow?: number
  /** Maximum output tokens. */
  readonly maxTokens?: number
  /** Accepted request modalities. */
  readonly input?: readonly string[]
  /** Whether the model reasons at all; `false` makes every effort moot. */
  readonly reasoning?: boolean
  /**
   * pi-ai's own level→wire-spelling map. Semantically our `reasoningEfforts`,
   * except that `null` means *unsupported* here while our dict reads it as
   * *supported, send nothing* — see the client-side mapping before copying.
   */
  readonly thinkingLevelMap?: Readonly<Record<string, string | null>>
  /** pi-ai's wire-compatibility switches for this model. */
  readonly compat?: Readonly<Record<string, unknown>>
}

/** One pi-ai copy the resolution anchors could see. */
export interface PiAiCopy {
  /** Package directory. */
  readonly dir: string
  /** Its version, when readable. */
  readonly version?: string
}

/**
 * Provenance and drift findings attached to every served catalog.
 *
 * These exist so that no failure stays silent. A catalog that is empty, stale,
 * or read from a build the host does not actually load all look identical from
 * the outside — the difference surfaces much later, as wrong values written
 * into settings, which is the outcome this structure is meant to prevent.
 */
export interface PiAiCatalogDiagnostics {
  /** Directory the served data was read from. */
  readonly packageDir: string
  /**
   * How the package was found. `adapter` means the resolution followed the
   * same path the host's own import does, so the data describes the running
   * host; `home-fallback` means it did not, and callers should treat the
   * values as advisory.
   */
  readonly resolvedVia: 'adapter' | 'home-fallback'
  /** Every copy the anchors could see — more than one is itself a finding. */
  readonly copies: readonly PiAiCopy[]
  /** Non-fatal findings worth surfacing: missing fields, odd shapes, etc. */
  readonly warnings: readonly string[]
}

/** The projected catalog, plus the provenance a UI can show. */
export interface PiAiCatalog {
  /** Installed pi-ai version, when its manifest is readable. */
  readonly piAiVersion?: string
  /** Generation timestamp of the shipped catalog snapshot. */
  readonly generatedAt?: string
  /** Every catalog model, across every provider. */
  readonly models: readonly PiAiModelEntry[]
  /** Provenance and drift findings, so a silent failure is impossible. */
  readonly diagnostics: PiAiCatalogDiagnostics
}

/**
 * Counters for what a projection could not carry over.
 *
 * A nonzero count is how a structural change announces itself. Without these
 * it would be invisible: dropping a field looks exactly like a field that was
 * never there, and the row just ends up prefilled with less than it should
 * have been.
 */
interface ProjectionLoss {
  /** Models the catalog returned that were not objects. */
  records: number
  /** Entries whose `api` was missing — without it, compat cannot be filtered. */
  missingApi: number
  /** Level-map values dropped for not being `string | null`. */
  droppedLevels: number
}

/** The shape we require of the catalog module, checked before it is trusted. */
interface PiAiCatalogModule {
  getBuiltinProviders?: () => unknown
  getBuiltinModels?: (provider: string) => unknown
  getBuiltinModelDataGeneratedAt?: () => unknown
}

/**
 * Whether a directory holds the pi-ai package.
 * @param dir - candidate package directory.
 * @returns true when it carries a package manifest.
 */
function isPiAiPackage(dir: string): boolean {
  return existsSync(join(dir, 'package.json'))
}

/**
 * Walk up from a resolved module entry looking for pi-ai's package directory,
 * mirroring the ancestor `node_modules` lookup Node itself performs.
 *
 * The walk exists because pi-ai cannot be resolved by specifier: its `exports`
 * has no `require`/`default` condition, so a CJS resolution reports the
 * subpath as not exported rather than following it.
 * @param entryPath - a resolved file inside the host adapter package.
 * @returns the pi-ai package directory, or undefined when the chain misses it.
 */
function piAiPackageDirFrom(entryPath: string): string | undefined {
  let dir = dirname(entryPath)
  for (let depth = 0; depth < RESOLUTION_DEPTH; depth += 1) {
    const candidate = join(dir, 'node_modules', PI_AI_PACKAGE)
    if (isPiAiPackage(candidate)) return candidate
    const parent = dirname(dir)
    if (parent === dir || parent.length === 0) break
    dir = parent
  }
  return undefined
}

/**
 * Profile directory names under a DSH home.
 * @param dshHome - the harness home.
 * @returns the directory names; empty when the home is unreadable.
 */
function profileNames(dshHome: string): string[] {
  try {
    return readdirSync(join(dshHome, 'profiles'), { withFileTypes: true })
      .filter(entry => entry.isDirectory())
      .map(entry => entry.name)
      .filter(name => name.length > 0 && !name.startsWith('.'))
  } catch {
    return []
  }
}

/**
 * Module-resolution anchors, most authoritative first.
 *
 * The profile-scoped link paths lead because Node resolves a symlink to its
 * real path before resolving imports: a plugin installed as a link would
 * otherwise search its own checkout and never reach the host's tree. Each
 * anchor is a *path*, not a loaded module — `createRequire` resolves from the
 * string given to it without following the link itself.
 * @returns candidate paths to resolve the host adapter from.
 */
function resolutionAnchors(): string[] {
  const anchors: string[] = []
  const dshHome = process.env.DSH_HOME
  if (dshHome !== undefined && dshHome.length > 0) {
    for (const profile of profileNames(dshHome)) {
      anchors.push(join(dshHome, 'profiles', profile, 'node_modules', 'dsh-model-extension', 'lib', 'index.js'))
    }
    // The shared layer, then the home root — the latter can hold a stale copy,
    // so it only ever answers when nothing closer did.
    anchors.push(join(dshHome, 'profiles', 'node_modules', 'dsh-model-extension', 'lib', 'index.js'))
    anchors.push(join(dshHome, 'node_modules', 'dsh-model-extension', 'lib', 'index.js'))
  }
  try {
    anchors.push(fileURLToPath(import.meta.url))
  } catch { /* a non-file URL anchor would only break resolution anyway */ }
  return anchors
}

/**
 * Direct package paths probed only when the host adapter cannot be resolved at
 * all. Kept separate from {@link resolutionAnchors} because these are guesses
 * about layout, not resolution — anything they find is labelled a fallback.
 * @returns candidate pi-ai package directories, most-likely first.
 */
function directProbes(): string[] {
  const dshHome = process.env.DSH_HOME
  if (dshHome === undefined || dshHome.length === 0) return []
  return [
    join(dshHome, 'profiles', 'node_modules', PI_AI_PACKAGE),
    join(dshHome, 'node_modules', PI_AI_PACKAGE),
  ]
}

/**
 * Read a package's version without going through module resolution (pi-ai's
 * `exports` refuses every subpath, including its own manifest).
 * @param packageDir - the package directory.
 * @returns the version, or undefined when unreadable.
 */
function packageVersion(packageDir: string): string | undefined {
  try {
    const pkg = JSON.parse(readFileSync(join(packageDir, 'package.json'), 'utf8')) as { version?: unknown }
    return typeof pkg.version === 'string' ? pkg.version : undefined
  } catch {
    return undefined
  }
}

/** A located package, with how it was found. */
interface ResolvedPackage {
  readonly dir: string
  readonly via: 'adapter' | 'home-fallback'
}

/**
 * Locate the pi-ai package the running host loads.
 *
 * Resolution follows the host adapter on purpose: that is the copy the host's
 * own `import` reaches, so its data describes the running host. Only when no
 * anchor reaches the adapter does the search fall back to guessing at layouts —
 * and that result is labelled, because it may be a copy the host never loads.
 * @returns the package directory with its provenance, or undefined.
 */
function resolvePiAiPackageDir(): ResolvedPackage | undefined {
  for (const anchor of resolutionAnchors()) {
    try {
      const require = createRequire(anchor)
      const adapterEntry = require.resolve(PI_AI_ADAPTER_PACKAGE)
      const found = piAiPackageDirFrom(adapterEntry)
      if (found !== undefined) return { dir: found, via: 'adapter' }
    } catch { /* this anchor cannot see the adapter; try the next */ }
  }
  for (const dir of directProbes()) {
    if (isPiAiPackage(dir)) return { dir, via: 'home-fallback' }
  }
  return undefined
}

/**
 * Every pi-ai copy the anchors can see, for the diagnostics block.
 *
 * A second copy is not an error by itself — a DSH home legitimately carries
 * one — but "which copy answered" is the first question any wrong-value report
 * raises, and it is unanswerable after the fact unless it is recorded here.
 * @returns the copies, each with its version where readable.
 */
function collectCopies(): PiAiCopy[] {
  const dirs = new Set<string>(directProbes())
  for (const anchor of resolutionAnchors()) {
    try {
      const require = createRequire(anchor)
      const found = piAiPackageDirFrom(require.resolve(PI_AI_ADAPTER_PACKAGE))
      if (found !== undefined) dirs.add(found)
    } catch { /* this anchor cannot see the adapter */ }
  }
  const copies: PiAiCopy[] = []
  const seenReal = new Set<string>()
  for (const dir of dirs) {
    if (!isPiAiPackage(dir)) continue
    // A symlinked copy shows up under both its link path and its real path,
    // and both describe the same files — counting them separately would report
    // a phantom extra copy on every linked install.
    let real = dir
    try {
      real = realpathSync(dir)
    } catch { /* keep the link path if it cannot be resolved */ }
    if (seenReal.has(real)) continue
    seenReal.add(real)
    const copy: { dir: string; version?: string } = { dir }
    const version = packageVersion(dir)
    if (version !== undefined) copy.version = version
    copies.push(copy)
  }
  return copies
}

/** Read one object-valued field off a raw model. */
function objectField(source: Record<string, unknown>, key: string): Record<string, unknown> | undefined {
  const value = source[key]
  return typeof value === 'object' && value !== null && !Array.isArray(value)
    ? value as Record<string, unknown>
    : undefined
}

/**
 * Project one catalog model onto the prefill fields, dropping anything absent
 * so the served payload stays small.
 * @param raw - the model object the catalog API returned.
 * @param loss - accumulator for values the projection could not carry.
 * @returns the projected entry.
 */
function projectModel(raw: Record<string, unknown>, loss: ProjectionLoss): PiAiModelEntry {
  const entry: {
    provider: string
    api: string
    id: string
    name?: string
    contextWindow?: number
    maxTokens?: number
    input?: string[]
    reasoning?: boolean
    thinkingLevelMap?: Record<string, string | null>
    compat?: Record<string, unknown>
  } = {
    provider: typeof raw['provider'] === 'string' ? raw['provider'] : '',
    api: typeof raw['api'] === 'string' ? raw['api'] : '',
    id: typeof raw['id'] === 'string' ? raw['id'] : '',
  }
  if (entry.api.length === 0) loss.missingApi += 1

  if (typeof raw['name'] === 'string' && raw['name'].length > 0) entry.name = raw['name']
  if (typeof raw['contextWindow'] === 'number') entry.contextWindow = raw['contextWindow']
  if (typeof raw['maxTokens'] === 'number') entry.maxTokens = raw['maxTokens']
  if (typeof raw['reasoning'] === 'boolean') entry.reasoning = raw['reasoning']
  if (Array.isArray(raw['input'])) {
    entry.input = raw['input'].filter((m): m is string => typeof m === 'string')
  }

  const levelMap = objectField(raw, 'thinkingLevelMap')
  if (levelMap !== undefined) {
    const projected: Record<string, string | null> = {}
    for (const [level, wire] of Object.entries(levelMap)) {
      if (wire === null || typeof wire === 'string') projected[level] = wire
      else loss.droppedLevels += 1
    }
    if (Object.keys(projected).length > 0) entry.thinkingLevelMap = projected
  }

  const compat = objectField(raw, 'compat')
  if (compat !== undefined && Object.keys(compat).length > 0) entry.compat = compat

  return entry
}

/**
 * Load the catalog through pi-ai's own API.
 *
 * The API's presence is what is checked, not a version: a package that still
 * exports `getBuiltinProviders`/`getBuiltinModels` is usable no matter what
 * version it calls itself, and one that stopped exporting them is unusable no
 * matter how familiar its version looks.
 * @param resolved - the located package, and how it was found.
 * @returns the catalog, or undefined when the API is not there to call.
 */
async function loadCatalog(resolved: ResolvedPackage): Promise<PiAiCatalog | undefined> {
  const entry = join(resolved.dir, PI_AI_ALL_SUBPATH)
  let module: PiAiCatalogModule
  try {
    module = await import(pathToFileURL(entry).href) as PiAiCatalogModule
  } catch {
    return undefined
  }
  const { getBuiltinProviders, getBuiltinModels } = module
  if (typeof getBuiltinProviders !== 'function' || typeof getBuiltinModels !== 'function') {
    return undefined
  }

  let providerIds: unknown
  try {
    providerIds = getBuiltinProviders()
  } catch {
    return undefined
  }
  if (!Array.isArray(providerIds)) return undefined

  const loss: ProjectionLoss = { records: 0, missingApi: 0, droppedLevels: 0 }
  const models: PiAiModelEntry[] = []
  for (const providerId of providerIds) {
    if (typeof providerId !== 'string' || providerId.length === 0) continue
    let provided: unknown
    try {
      provided = getBuiltinModels.call(module, providerId)
    } catch {
      continue
    }
    if (!Array.isArray(provided)) continue
    for (const raw of provided) {
      if (typeof raw !== 'object' || raw === null || Array.isArray(raw)) {
        loss.records += 1
        continue
      }
      models.push(projectModel(raw as Record<string, unknown>, loss))
    }
  }
  if (models.length === 0) return undefined

  const warnings: string[] = []
  if (resolved.via === 'home-fallback') {
    warnings.push(
      'the host adapter could not be resolved, so the catalog came from a guessed path; '
      + 'these values may not be the ones the running host uses',
    )
  }
  if (loss.records > 0) {
    warnings.push(`${String(loss.records)} catalog entr(ies) were not model objects and were skipped`)
  }
  if (loss.missingApi > 0) {
    warnings.push(
      `${String(loss.missingApi)} model(s) carry no \`api\`, so their compat switches cannot be filtered `
      + 'by protocol and are left to the host catalog',
    )
  }
  if (loss.droppedLevels > 0) {
    warnings.push(
      `${String(loss.droppedLevels)} thinking-level value(s) were not \`string | null\` and were dropped`,
    )
  }
  // A field that silently stops arriving would otherwise look exactly like a
  // catalog that never had it. These fire only on total absence, which is the
  // signature of a rename rather than of ordinary data churn.
  if (!models.some(model => model.compat !== undefined)) {
    warnings.push('no model carried a `compat` block; the field may have been renamed')
  }
  if (!models.some(model => model.thinkingLevelMap !== undefined)
    && models.some(model => model.reasoning === true)) {
    warnings.push('no model carried a `thinkingLevelMap`; the field may have been renamed')
  }

  let generatedAt: string | undefined
  try {
    const timestamp = module.getBuiltinModelDataGeneratedAt?.()
    if (typeof timestamp === 'number') generatedAt = new Date(timestamp).toISOString()
  } catch { /* the timestamp is a nicety, never a gate */ }

  const piAiVersion = packageVersion(resolved.dir)
  return {
    models,
    diagnostics: {
      packageDir: resolved.dir,
      resolvedVia: resolved.via,
      copies: collectCopies(),
      warnings,
    },
    ...(generatedAt !== undefined ? { generatedAt } : {}),
    ...(piAiVersion !== undefined ? { piAiVersion } : {}),
  }
}

/** The in-flight (or settled) load; a promise so concurrent callers share one. */
let load: Promise<PiAiCatalog | undefined> | undefined

/** Why the last load produced nothing, for the refusal the route returns. */
let failure: string | undefined

/**
 * The installed pi-ai catalog, or undefined when the host offers none.
 *
 * Loaded once and memoized: the catalog is a snapshot built into the installed
 * package, so it cannot change while this process runs. The API module is
 * imported lazily — the host adapter imports the same module, so in a running
 * host this is a module-cache hit rather than a load.
 * @returns the catalog, or undefined for the models.dev-only fallback.
 */
export function piAiCatalog(): Promise<PiAiCatalog | undefined> {
  load ??= (async (): Promise<PiAiCatalog | undefined> => {
    const resolved = resolvePiAiPackageDir()
    if (resolved === undefined) {
      failure = 'no @earendil-works/pi-ai package could be located from the host adapter'
      return undefined
    }
    const catalog = await loadCatalog(resolved)
    if (catalog === undefined) {
      failure = `the catalog API (${PI_AI_ALL_SUBPATH}) could not be called at ${resolved.dir}`
    }
    return catalog
  })()
  return load
}

/**
 * Every pi-ai copy visible on this host.
 *
 * Exported for the failure path: when the catalog is unavailable, "which
 * copies exist, where, and what version" is the only fact that turns a refusal
 * into something actionable.
 * @returns the copies, with versions where readable.
 */
export function piAiCopies(): readonly PiAiCopy[] {
  return collectCopies()
}

/**
 * Why the catalog could not be served, once a load has been attempted.
 * @returns the reason, or undefined when nothing has failed.
 */
export function piAiUnavailableReason(): string | undefined {
  return failure
}
