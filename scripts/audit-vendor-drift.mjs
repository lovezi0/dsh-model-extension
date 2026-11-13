#!/usr/bin/env node
/**
 * Vendor drift audit: the inlined host logic modules must stay verbatim.
 *
 * src/client/vendor/ holds copies of the host's operations / schema-operations,
 * each behind a header naming the release it came from, so
 * the build needs no host checkout. A host upgrade that changes any of them
 * silently diverges from the contract this plugin was written against, so this
 * script re-diffs them, header aside, byte for byte.
 *
 * It needs a host checkout, which a clean CI runner does not have. That is why
 * it is NOT part of `npm run selftest` and stays a pre-release developer gate,
 * like `audit:pi-ai`:
 *
 *   npm run audit:vendor -- --host <path to a deepseek-harness checkout>
 *   DSH_HOST_SRC=<path> npm run audit:vendor
 *
 * A missing file is a reported FAIL, never a skip: a green run has to mean the
 * copies really were compared.
 */
import { existsSync, readFileSync } from 'node:fs'
import { join } from 'node:path'

/** Where the copied modules live inside the host tree. */
const HOST_SUBDIR = 'packages/client/ui-settings-models/src/client'
/** The copied modules, in the order the build consumes them. */
const FILES = ['operations.ts', 'schema-operations.ts']
/** Lines the local vendor header occupies, so the verbatim body starts after it. */
const HEADER_LINES = 7

const argv = process.argv.slice(2)
const flagIndex = argv.indexOf('--host')
const hostRoot = flagIndex === -1 ? process.env.DSH_HOST_SRC : argv[flagIndex + 1]

if (hostRoot === undefined || hostRoot.length === 0) {
  console.error('[audit:vendor] no host checkout given — pass --host <path> or set DSH_HOST_SRC')
  process.exit(2)
}

let failures = 0
const check = (name, ok, detail) => {
  console.log(`${ok ? 'PASS' : 'FAIL'}  ${name}${ok || detail === undefined ? '' : ` — ${detail}`}`)
  if (!ok) failures++
}

const hostManifest = join(hostRoot, 'package.json')
if (!existsSync(hostManifest)) {
  console.error(`[audit:vendor] not a host checkout: ${hostManifest} does not exist`)
  process.exit(2)
}
const hostVersion = JSON.parse(readFileSync(hostManifest, 'utf8')).version

for (const file of FILES) {
  const localPath = join('src/client/vendor', file)
  const hostPath = join(hostRoot, HOST_SUBDIR, file)
  if (!existsSync(localPath)) { check(`${file}: local copy present`, false, localPath); continue }
  if (!existsSync(hostPath)) { check(`${file}: host source present`, false, hostPath); continue }
  const local = readFileSync(localPath, 'utf8').replaceAll('\r\n', '\n')
  const host = readFileSync(hostPath, 'utf8').replaceAll('\r\n', '\n')
  const body = local.split('\n').slice(HEADER_LINES).join('\n')
  check(`${file}: body byte-identical to host`, body === host,
    body === host ? undefined : `${body.length} vs ${host.length} chars`)
  check(`${file}: header names host ${hostVersion}`, local.includes(hostVersion))
}

console.log(failures === 0 ? 'AUDIT PASS' : `AUDIT FAIL (${String(failures)} failures)`)
process.exitCode = failures === 0 ? 0 : 1