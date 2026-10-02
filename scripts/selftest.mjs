#!/usr/bin/env node
/**
 * Release self-test: the checks that can run anywhere, run together.
 *
 * Wired as `npm run selftest` and called by .github/workflows/publish.yml
 * between Build and Publish, so a broken artifact fails the release instead of
 * shipping. Each step is spawned separately (no shell chaining) and the first
 * failure stops the run — a green summary is only meaningful if nothing was
 * skipped.
 *
 * Deliberately NOT in this set: `audit:pi-ai`. It audits the *host's* pi-ai
 * catalog against ours, resolving `@deepseek-ai/dsh-llm-pi-ai` out of
 * `$DSH_HOME/profiles/<name>/node_modules`, and a package it cannot find is a
 * reported FAIL rather than a skip (that is the whole point of the script). A
 * clean CI runner has no host installed, so running it there would fail every
 * release for a reason unrelated to this package. It stays a pre-release
 * developer gate, run by hand against the host being adapted.
 *
 * The two artifact audits live here rather than in package.json scripts
 * because they were historically invoked by path; this is their only runner.
 */
import { spawnSync } from 'node:child_process'
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const projectRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..')

/** The gates, in the order a failure would matter most. */
const STEPS = [
  { name: 'audit-artifact', argv: ['scripts/audit-artifact.cjs'] },
  { name: 'audit-uifix', argv: ['scripts/audit-uifix.cjs'] },
  // Needs type stripping (the .mts extension) — an experimental flag on the
  // interpreter rather than a loader setting, so it must ride on the command.
  { name: 'audit:compat', argv: ['--experimental-strip-types', 'scripts/audit-compat-protocol.mts'] },
]

let failed = 0

for (const step of STEPS) {
  const result = spawnSync(process.execPath, step.argv, { cwd: projectRoot, stdio: 'inherit' })
  if (result.error !== undefined && result.error !== null) {
    console.error(`[selftest] ${step.name} could not start: ${result.error.message}`)
    failed++
    break
  }
  if (result.status !== 0) {
    console.error(`[selftest] ${step.name} FAILED (exit ${String(result.status)})`)
    failed++
    break
  }
  console.log(`[selftest] ${step.name} ok`)
}

console.log(failed === 0 ? '[selftest] PASS' : '[selftest] FAIL')
process.exitCode = failed === 0 ? 0 : 1
