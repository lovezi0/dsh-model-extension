#!/usr/bin/env node
/**
 * Contract audit for this plugin's *borrowed* pi-ai dependency.
 *
 * `@earendil-works/pi-ai` and `@deepseek-ai/dsh-llm-pi-ai` are deliberately
 * absent from package.json: their versions belong to the host, and the catalog
 * must describe the running host rather than the build this plugin was written
 * against. The cost of that choice is that nothing in the toolchain notices
 * when either package changes shape — so this script is the notice.
 *
 * Run it after every host upgrade:
 *
 *     npm run audit:pi-ai
 *
 * It re-derives, from the installed packages, the four things a version bump
 * can silently break:
 *
 *   1. which pi-ai copies exist on this host, and which one the host loads
 *   2. the host's *offered* compat switches vs ours — a withdrawn switch is
 *      REFUSED when a model row carrying it is saved, not ignored
 *   3. the host's thinking-format list vs ours
 *   4. the level-map mapping: catalog → our `reasoningEfforts` → back through
 *      the host's own resolution rule, compared by observable behaviour
 *
 * Checks that cannot be performed (a package missing, a structure this script
 * no longer recognizes) are reported as FAIL rather than skipped: a silently
 * skipped check is the failure mode this whole exercise is about.
 *
 * Exit code 1 when any check fails, so it can gate a release.
 */

import { createRequire } from 'node:module'
import { existsSync, readFileSync, readdirSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const projectRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..')

/** @type {{ level: 'FAIL'|'WARN'|'PASS', text: string }[]} */
const findings = []
const pass = text => findings.push({ level: 'PASS', text })
const warn = text => findings.push({ level: 'WARN', text })
const fail = text => findings.push({ level: 'FAIL', text })

// ---------------------------------------------------------------------------
// Locate the installed packages
// ---------------------------------------------------------------------------

/** Profile-scoped resolution anchors, most authoritative first. */
function resolutionAnchors() {
  const anchors = []
  const dshHome = process.env.DSH_HOME
  if (dshHome !== undefined && dshHome.length > 0) {
    try {
      for (const entry of readdirSync(join(dshHome, 'profiles'), { withFileTypes: true })) {
        if (entry.isDirectory() && !entry.name.startsWith('.')) {
          anchors.push(join(dshHome, 'profiles', entry.name, 'node_modules', 'dsh-model-extension', 'lib', 'index.js'))
        }
      }
    } catch { /* no profiles dir */ }
    anchors.push(join(dshHome, 'profiles', 'node_modules', 'dsh-model-extension', 'lib', 'index.js'))
    anchors.push(join(dshHome, 'node_modules', 'dsh-model-extension', 'lib', 'index.js'))
  }
  anchors.push(fileURLToPath(import.meta.url))
  return anchors
}

/** Resolve the host adapter package directory, or undefined. */
function adapterPackageDir() {
  for (const anchor of resolutionAnchors()) {
    try {
      const require = createRequire(anchor)
      return dirname(dirname(require.resolve('@deepseek-ai/dsh-llm-pi-ai')))
    } catch { /* next anchor */ }
  }
  return undefined
}

// ---------------------------------------------------------------------------
// Source extraction helpers (the host exports neither list, so they are read
// out of its shipped bundle)
// ---------------------------------------------------------------------------

/** Slice a balanced `{...}` starting at an opening brace. */
function sliceBalanced(source, openIndex) {
  let depth = 0
  for (let i = openIndex; i < source.length; i += 1) {
    const ch = source[i]
    if (ch === '{') depth += 1
    else if (ch === '}') {
      depth -= 1
      if (depth === 0) return source.slice(openIndex, i + 1)
    }
  }
  return undefined
}

/** Extract a `const NAME = { ... };` object literal by name. */
function extractBlock(source, name) {
  const start = source.indexOf(`const ${name} = {`)
  if (start < 0) return undefined
  return sliceBalanced(source, source.indexOf('{', start))
}

/** Extract a `key: { ... }` sub-object out of an object literal. */
function extractSubBlock(container, key) {
  if (container === undefined) return undefined
  const start = container.indexOf(`${key}: {`)
  if (start < 0) return undefined
  return sliceBalanced(container, container.indexOf('{', start))
}

/** Field names marked `"offer"` inside one gate block. */
function offersIn(block) {
  if (block === undefined) return []
  return [...block.matchAll(/(\w+):\s*"offer"/g)].map(m => m[1])
}

/** The host's `SUPPORTED_THINKING_FORMATS` list. */
function runtimeThinkingFormats(source) {
  const start = source.indexOf('const SUPPORTED_THINKING_FORMATS = Object.keys({')
  if (start < 0) return []
  const block = sliceBalanced(source, source.indexOf('{', start))
  if (block === undefined) return []
  return [...block.matchAll(/"([\w-]+)":\s*true/g)].map(m => m[1])
}

/** Compare two string lists and describe the difference. */
function diffSets(expected, actual) {
  const a = new Set(expected)
  const b = new Set(actual)
  return {
    missing: [...a].filter(x => !b.has(x)),
    extra: [...b].filter(x => !a.has(x)),
  }
}

// ---------------------------------------------------------------------------
// Checks
// ---------------------------------------------------------------------------

const catalogModule = await import(
  pathToFileURL(join(projectRoot, 'src/pi-ai-catalog.ts')).href
)
const metaModule = await import(
  pathToFileURL(join(projectRoot, 'src/client/extension-meta.ts')).href
)
const prefillModule = await import(
  pathToFileURL(join(projectRoot, 'src/client/models-plus/prefill.ts')).href
)

console.log('=== 1. pi-ai copies on this host ===')
const catalog = await catalogModule.piAiCatalog()
const copies = catalogModule.piAiCopies()
if (copies.length === 0) {
  fail('no @earendil-works/pi-ai package found at all — the plugin will fall back to models.dev only')
} else {
  for (const copy of copies) {
    console.log(`   ${copy.version ?? '(unknown version)'}  ${copy.dir}`)
  }
  if (catalog?.generatedAt !== undefined) console.log(`   catalog snapshot: ${catalog.generatedAt}`)
  if (copies.length > 1) {
    // The reader raises this itself (see the diagnostics below) — the listing
    // above is the detail behind that warning, not a second finding.
    console.log('   (more than one copy — see the reader diagnostics below)')
  } else {
    pass('exactly one copy')
  }
}

if (catalog === undefined) {
  fail(`the reader returned no catalog: ${catalogModule.piAiUnavailableReason() ?? 'no reason reported'}`)
} else {
  const { diagnostics } = catalog
  if (diagnostics.resolvedVia !== 'adapter') {
    fail(`resolution fell back to a guessed path (${diagnostics.resolvedVia}) — values may not match the running host`)
  } else {
    pass('resolved through the host adapter, so the data describes the running host')
  }
  if (diagnostics.warnings.length > 0) {
    for (const text of diagnostics.warnings) warn(text)
  } else {
    pass('the reader reported no drift warnings')
  }
  console.log(`   ${String(catalog.models.length)} models, pi-ai ${catalog.piAiVersion ?? '(unknown)'}`)
}

// ---------------------------------------------------------------------------

console.log('\n=== 2. compat switches offered by the host vs ours ===')
const adapterDir = adapterPackageDir()
let adapterSource
if (adapterDir === undefined) {
  fail('@deepseek-ai/dsh-llm-pi-ai could not be resolved; the compat gate cannot be re-derived')
} else {
  try {
    adapterSource = readFileSync(join(adapterDir, 'lib', 'index.js'), 'utf8')
  } catch (error) {
    fail(`could not read the adapter bundle: ${error.message}`)
  }
}

if (adapterSource !== undefined) {
  const gates = extractBlock(adapterSource, 'COMPAT_GATES')
  const runtimeOffers = {
    'openai-completions': offersIn(extractBlock(adapterSource, 'COMPLETIONS_COMPAT_GATE')),
    'openai-responses': offersIn(extractBlock(adapterSource, 'RESPONSES_COMPAT_GATE')),
    'azure-openai-responses': offersIn(extractBlock(adapterSource, 'RESPONSES_COMPAT_GATE')),
    'openai-codex-responses': offersIn(extractBlock(adapterSource, 'RESPONSES_COMPAT_GATE')),
    'anthropic-messages': offersIn(extractSubBlock(gates, '"anthropic-messages"')),
    'bedrock-converse-stream': offersIn(extractSubBlock(gates, '"bedrock-converse-stream"')),
  }
  const ours = metaModule.COMPAT_FIELDS

  for (const [protocol, runtime] of Object.entries(runtimeOffers)) {
    const mine = ours[protocol] ?? []
    if (runtime.length === 0) {
      fail(`${protocol}: no offer set could be re-derived from the adapter bundle (structure changed?)`)
      continue
    }
    const { missing, extra } = diffSets(mine, runtime)
    if (extra.length > 0) {
      // We would write a switch the host refuses — resolution of the route fails.
      fail(`${protocol}: we offer ${extra.join(', ')} but the host withholds them (a saved row would be REFUSED)`)
    }
    if (missing.length > 0) {
      warn(`${protocol}: the host offers ${missing.join(', ')} and we do not — prefills will leave them to inheritance`)
    }
    if (extra.length === 0 && missing.length === 0) pass(`${protocol}: ${String(runtime.length)} switches match`)
  }
}

// ---------------------------------------------------------------------------

console.log('\n=== 3. thinking formats vs ours ===')
if (adapterSource !== undefined) {
  const runtime = runtimeThinkingFormats(adapterSource)
  if (runtime.length === 0) {
    fail('the host thinking-format list could not be re-derived (structure changed?)')
  } else {
    const { missing, extra } = diffSets(metaModule.THINKING_FORMATS, runtime)
    if (extra.length > 0) fail(`we offer ${extra.join(', ')} but the host does not accept them`)
    if (missing.length > 0) warn(`the host accepts ${missing.join(', ')} and we do not offer them`)
    if (extra.length === 0 && missing.length === 0) pass(`${String(runtime.length)} formats match`)
  }
}

// ---------------------------------------------------------------------------

console.log('\n=== 4. level-map round trip (catalog -> our dict -> back) ===')
if (catalog === undefined) {
  fail('skipped: no catalog to check')
} else {
  const LEVELS = ['off', 'minimal', 'low', 'medium', 'high', 'xhigh', 'max']

  /** The host's resolveModelReasoning, level-map half. */
  const toMap = (efforts) => {
    const map = {}
    for (const level of LEVELS) {
      const wire = efforts[level]
      if (wire === undefined) map[level] = null
      else if (wire !== null) map[level] = wire
    }
    return map
  }
  /** pi-ai's getSupportedThinkingLevels. */
  const supported = (model) => {
    if (!model.reasoning) return ['off']
    return LEVELS.filter((level) => {
      const mapped = model.thinkingLevelMap?.[level]
      if (mapped === null) return false
      if (level === 'xhigh' || level === 'max') return mapped !== undefined
      return true
    })
  }
  /** The spelling the host's per-protocol fallback ends up sending. */
  const wireFor = (map, level, api) => {
    const mapped = map?.[level]
    if (mapped !== undefined && mapped !== null) return mapped
    if (api === 'anthropic-messages' || api === 'bedrock-converse-stream') {
      return level === 'minimal' ? 'low' : level
    }
    if (api === 'mistral-conversations') return 'high'
    return level
  }

  let levelMismatch = 0
  let wireMismatch = 0
  const samples = []
  for (const model of catalog.models) {
    const before = { reasoning: model.reasoning === true, thinkingLevelMap: model.thinkingLevelMap }
    const efforts = prefillModule.reasoningEffortsFrom(model.thinkingLevelMap, model.api, model.reasoning === true)
    const after = {
      reasoning: efforts !== false,
      thinkingLevelMap: efforts === false ? undefined : toMap(efforts),
    }
    const sBefore = supported(before)
    const sAfter = supported(after)
    if (sBefore.join(',') !== sAfter.join(',')) {
      levelMismatch += 1
      if (samples.length < 5) {
        samples.push(`LEVEL ${model.provider}/${model.id} (${model.api}) [${sBefore.join(',')}] -> [${sAfter.join(',')}]`)
      }
      continue
    }
    for (const level of sBefore) {
      const wb = wireFor(before.thinkingLevelMap, level, model.api)
      const wa = wireFor(after.thinkingLevelMap, level, model.api)
      if (wb !== wa) {
        wireMismatch += 1
        if (samples.length < 5) {
          samples.push(`WIRE  ${model.provider}/${model.id} level=${level}: ${JSON.stringify(wb)} -> ${JSON.stringify(wa)}`)
        }
        break
      }
    }
  }
  if (levelMismatch === 0 && wireMismatch === 0) {
    pass(`all ${String(catalog.models.length)} catalog models map losslessly`)
  } else {
    fail(`${String(levelMismatch)} level-set and ${String(wireMismatch)} spelling mismatches`)
    samples.forEach(s => console.log(`   ${s}`))
  }
}

// ---------------------------------------------------------------------------

console.log('\n=== findings ===')
for (const { level, text } of findings) {
  const mark = level === 'PASS' ? '  ok ' : level === 'WARN' ? '  !! ' : ' FAIL'
  console.log(`${mark} ${text}`)
}
const failures = findings.filter(f => f.level === 'FAIL').length
const warnings = findings.filter(f => f.level === 'WARN').length
console.log(`\n${String(failures)} failure(s), ${String(warnings)} warning(s)`)
process.exit(failures > 0 ? 1 : 0)
