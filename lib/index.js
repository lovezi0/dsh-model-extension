import { createRequire } from "node:module";
import { existsSync, readFileSync, readdirSync, realpathSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
//#region src/pi-ai-catalog.ts
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
/** The pi-ai package whose catalog backs a `dsh-llm-pi-ai` route. */
const PI_AI_PACKAGE = "@earendil-works/pi-ai";
/** The host adapter that owns the catalog routes; its location seeds resolution. */
const PI_AI_ADAPTER_PACKAGE = "@deepseek-ai/dsh-llm-pi-ai";
/** The declared subpath this module reads the catalog through. */
const PI_AI_ALL_SUBPATH = "dist/providers/all.js";
/** How many parent directories the hand-rolled `node_modules` walk visits. */
const RESOLUTION_DEPTH = 12;
/**
* Whether a directory holds the pi-ai package.
* @param dir - candidate package directory.
* @returns true when it carries a package manifest.
*/
function isPiAiPackage(dir) {
	return existsSync(join(dir, "package.json"));
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
function piAiPackageDirFrom(entryPath) {
	let dir = dirname(entryPath);
	for (let depth = 0; depth < RESOLUTION_DEPTH; depth += 1) {
		const candidate = join(dir, "node_modules", PI_AI_PACKAGE);
		if (isPiAiPackage(candidate)) return candidate;
		const parent = dirname(dir);
		if (parent === dir || parent.length === 0) break;
		dir = parent;
	}
}
/**
* Profile directory names under a DSH home.
* @param dshHome - the harness home.
* @returns the directory names; empty when the home is unreadable.
*/
function profileNames(dshHome) {
	try {
		return readdirSync(join(dshHome, "profiles"), { withFileTypes: true }).filter((entry) => entry.isDirectory()).map((entry) => entry.name).filter((name) => name.length > 0 && !name.startsWith("."));
	} catch {
		return [];
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
function resolutionAnchors() {
	const anchors = [];
	const dshHome = process.env.DSH_HOME;
	if (dshHome !== void 0 && dshHome.length > 0) {
		for (const profile of profileNames(dshHome)) anchors.push(join(dshHome, "profiles", profile, "node_modules", "dsh-model-extension", "lib", "index.js"));
		anchors.push(join(dshHome, "profiles", "node_modules", "dsh-model-extension", "lib", "index.js"));
		anchors.push(join(dshHome, "node_modules", "dsh-model-extension", "lib", "index.js"));
	}
	try {
		anchors.push(fileURLToPath(import.meta.url));
	} catch {}
	return anchors;
}
/**
* Direct package paths probed only when the host adapter cannot be resolved at
* all. Kept separate from {@link resolutionAnchors} because these are guesses
* about layout, not resolution — anything they find is labelled a fallback.
* @returns candidate pi-ai package directories, most-likely first.
*/
function directProbes() {
	const dshHome = process.env.DSH_HOME;
	if (dshHome === void 0 || dshHome.length === 0) return [];
	return [join(dshHome, "profiles", "node_modules", PI_AI_PACKAGE), join(dshHome, "node_modules", PI_AI_PACKAGE)];
}
/**
* Read a package's version without going through module resolution (pi-ai's
* `exports` refuses every subpath, including its own manifest).
* @param packageDir - the package directory.
* @returns the version, or undefined when unreadable.
*/
function packageVersion(packageDir) {
	try {
		const pkg = JSON.parse(readFileSync(join(packageDir, "package.json"), "utf8"));
		return typeof pkg.version === "string" ? pkg.version : void 0;
	} catch {
		return;
	}
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
function resolvePiAiPackageDir() {
	for (const anchor of resolutionAnchors()) try {
		const found = piAiPackageDirFrom(createRequire(anchor).resolve(PI_AI_ADAPTER_PACKAGE));
		if (found !== void 0) return {
			dir: found,
			via: "adapter"
		};
	} catch {}
	for (const dir of directProbes()) if (isPiAiPackage(dir)) return {
		dir,
		via: "home-fallback"
	};
}
/**
* Every pi-ai copy the anchors can see, for the diagnostics block.
*
* A second copy is not an error by itself — a DSH home legitimately carries
* one — but "which copy answered" is the first question any wrong-value report
* raises, and it is unanswerable after the fact unless it is recorded here.
* @returns the copies, each with its version where readable.
*/
function collectCopies() {
	const dirs = new Set(directProbes());
	for (const anchor of resolutionAnchors()) try {
		const found = piAiPackageDirFrom(createRequire(anchor).resolve(PI_AI_ADAPTER_PACKAGE));
		if (found !== void 0) dirs.add(found);
	} catch {}
	const copies = [];
	const seenReal = /* @__PURE__ */ new Set();
	for (const dir of dirs) {
		if (!isPiAiPackage(dir)) continue;
		let real = dir;
		try {
			real = realpathSync(dir);
		} catch {}
		if (seenReal.has(real)) continue;
		seenReal.add(real);
		const copy = { dir };
		const version = packageVersion(dir);
		if (version !== void 0) copy.version = version;
		copies.push(copy);
	}
	return copies;
}
/** Read one object-valued field off a raw model. */
function objectField(source, key) {
	const value = source[key];
	return typeof value === "object" && value !== null && !Array.isArray(value) ? value : void 0;
}
/**
* Project one catalog model onto the prefill fields, dropping anything absent
* so the served payload stays small.
* @param raw - the model object the catalog API returned.
* @param loss - accumulator for values the projection could not carry.
* @returns the projected entry.
*/
function projectModel(raw, loss) {
	const entry = {
		provider: typeof raw["provider"] === "string" ? raw["provider"] : "",
		api: typeof raw["api"] === "string" ? raw["api"] : "",
		id: typeof raw["id"] === "string" ? raw["id"] : ""
	};
	if (entry.api.length === 0) loss.missingApi += 1;
	if (typeof raw["name"] === "string" && raw["name"].length > 0) entry.name = raw["name"];
	if (typeof raw["contextWindow"] === "number") entry.contextWindow = raw["contextWindow"];
	if (typeof raw["maxTokens"] === "number") entry.maxTokens = raw["maxTokens"];
	if (typeof raw["reasoning"] === "boolean") entry.reasoning = raw["reasoning"];
	if (Array.isArray(raw["input"])) entry.input = raw["input"].filter((m) => typeof m === "string");
	const levelMap = objectField(raw, "thinkingLevelMap");
	if (levelMap !== void 0) {
		const projected = {};
		for (const [level, wire] of Object.entries(levelMap)) if (wire === null || typeof wire === "string") projected[level] = wire;
		else loss.droppedLevels += 1;
		if (Object.keys(projected).length > 0) entry.thinkingLevelMap = projected;
	}
	const compat = objectField(raw, "compat");
	if (compat !== void 0 && Object.keys(compat).length > 0) entry.compat = compat;
	return entry;
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
async function loadCatalog(resolved) {
	const entry = join(resolved.dir, PI_AI_ALL_SUBPATH);
	let module;
	try {
		module = await import(pathToFileURL(entry).href);
	} catch {
		return;
	}
	const { getBuiltinProviders, getBuiltinModels } = module;
	if (typeof getBuiltinProviders !== "function" || typeof getBuiltinModels !== "function") return;
	let providerIds;
	try {
		providerIds = getBuiltinProviders();
	} catch {
		return;
	}
	if (!Array.isArray(providerIds)) return void 0;
	const loss = {
		records: 0,
		missingApi: 0,
		droppedLevels: 0
	};
	const models = [];
	for (const providerId of providerIds) {
		if (typeof providerId !== "string" || providerId.length === 0) continue;
		let provided;
		try {
			provided = getBuiltinModels.call(module, providerId);
		} catch {
			continue;
		}
		if (!Array.isArray(provided)) continue;
		for (const raw of provided) {
			if (typeof raw !== "object" || raw === null || Array.isArray(raw)) {
				loss.records += 1;
				continue;
			}
			models.push(projectModel(raw, loss));
		}
	}
	if (models.length === 0) return void 0;
	const warnings = [];
	if (resolved.via === "home-fallback") warnings.push("the host adapter could not be resolved, so the catalog came from a guessed path; these values may not be the ones the running host uses");
	if (loss.records > 0) warnings.push(`${String(loss.records)} catalog entr(ies) were not model objects and were skipped`);
	if (loss.missingApi > 0) warnings.push(`${String(loss.missingApi)} model(s) carry no \`api\`, so their compat switches cannot be filtered by protocol and are left to the host catalog`);
	if (loss.droppedLevels > 0) warnings.push(`${String(loss.droppedLevels)} thinking-level value(s) were not \`string | null\` and were dropped`);
	if (!models.some((model) => model.compat !== void 0)) warnings.push("no model carried a `compat` block; the field may have been renamed");
	if (!models.some((model) => model.thinkingLevelMap !== void 0) && models.some((model) => model.reasoning === true)) warnings.push("no model carried a `thinkingLevelMap`; the field may have been renamed");
	let generatedAt;
	try {
		const timestamp = module.getBuiltinModelDataGeneratedAt?.();
		if (typeof timestamp === "number") generatedAt = new Date(timestamp).toISOString();
	} catch {}
	const piAiVersion = packageVersion(resolved.dir);
	return {
		models,
		diagnostics: {
			packageDir: resolved.dir,
			resolvedVia: resolved.via,
			copies: collectCopies(),
			warnings
		},
		...generatedAt !== void 0 ? { generatedAt } : {},
		...piAiVersion !== void 0 ? { piAiVersion } : {}
	};
}
/** The in-flight (or settled) load; a promise so concurrent callers share one. */
let load;
/** Why the last load produced nothing, for the refusal the route returns. */
let failure;
/**
* The installed pi-ai catalog, or undefined when the host offers none.
*
* Loaded once and memoized: the catalog is a snapshot built into the installed
* package, so it cannot change while this process runs. The API module is
* imported lazily — the host adapter imports the same module, so in a running
* host this is a module-cache hit rather than a load.
* @returns the catalog, or undefined for the models.dev-only fallback.
*/
function piAiCatalog() {
	load ??= (async () => {
		const resolved = resolvePiAiPackageDir();
		if (resolved === void 0) {
			failure = "no @earendil-works/pi-ai package could be located from the host adapter";
			return;
		}
		const catalog = await loadCatalog(resolved);
		if (catalog === void 0) failure = `the catalog API (${PI_AI_ALL_SUBPATH}) could not be called at ${resolved.dir}`;
		return catalog;
	})();
	return load;
}
/**
* Every pi-ai copy visible on this host.
*
* Exported for the failure path: when the catalog is unavailable, "which
* copies exist, where, and what version" is the only fact that turns a refusal
* into something actionable.
* @returns the copies, with versions where readable.
*/
function piAiCopies() {
	return collectCopies();
}
/**
* Why the catalog could not be served, once a load has been attempted.
* @returns the reason, or undefined when nothing has failed.
*/
function piAiUnavailableReason() {
	return failure;
}
//#endregion
//#region src/index.ts
/**
* dsh-model-extension — host-side entry (v1.0.0).
*
* Two halves:
* 1. The adapter anchor: ADVISORY at runtime — on a host-version mismatch the
*    plugin logs a warning and registers anyway. The UI is fully plugin-owned,
*    and the host's own settings schema validation plus revision fencing keep
*    a mismatched wire write from corrupting anything (worst case: a refused
*    write with a diagnostic), so a hard gate would only make compatible
*    upgrades silently drop the plugin.
* 2. The metadata service: three same-origin routes backing the Models+ page's
*    quick-load. models.dev is fetched ONLY on an explicit user click (the
*    title-row button); the raw file caches next to settings.yaml under DSH
*    home. Only the flat models.dev shape (top-level keys = full model ids)
*    is accepted; anything else is a refusal, per plan. The pi-ai catalog is
*    the other, richer source: it is read from the installed package the host
*    adapter itself loads, with no network call at all (./pi-ai-catalog.ts).
*/
const ADAPTER_VERSION = "0.1.5-rc.2";
/** Cordis service name (distinct from the npm package name). */
const name = "model-extension";
/** Required services — the route registry lives on the host web server. */
const inject = ["webServer"];
/** The one metadata source this plugin accepts (plan: fixed, never configurable). */
const METADATA_URL = "https://models.dev/models.json";
/** Download timeout in milliseconds. */
const DOWNLOAD_TIMEOUT_MS = 3e4;
/**
* Read the running host's version by resolving the installed CLI package's
* manifest.
*
* Node resolves symlinks by default, so the plugin module's real path is the
* project checkout — walking up from there never reaches the global tree.
* The resolution therefore starts at the *link* path under the profile
* node_modules (symlink not resolved), then falls back to this module's own
* real path.
* @returns the version string, or undefined when unresolvable.
*/
function readHostVersion() {
	const candidates = [];
	const dshHome = process.env.DSH_HOME;
	if (dshHome !== void 0 && dshHome.length > 0) {
		candidates.push(`${dshHome}/profiles/web/node_modules/dsh-model-extension/lib/index.js`);
		candidates.push(`${dshHome}/profiles/node/node_modules/dsh-model-extension/lib/index.js`);
	}
	try {
		candidates.push(fileURLToPath(import.meta.url));
	} catch {}
	for (const specifier of ["@deepseek-ai/dsh/package.json", "@deepseek-ai/dsh-base/package.json"]) for (const base of candidates) try {
		const manifestPath = createRequire(base).resolve(specifier);
		const manifest = JSON.parse(readFileSync(manifestPath, "utf8"));
		if (typeof manifest.version === "string") return manifest.version;
	} catch {}
}
/**
* Resolve the directory the metadata file lives in: next to the first
* settings.yaml found (plan: "DSH home, same level as settings.yaml"),
* falling back to DSH home itself and then the process cwd.
* @returns the directory path.
*/
function metadataDir() {
	const dshHome = process.env.DSH_HOME;
	const probes = [];
	if (dshHome !== void 0 && dshHome.length > 0) {
		probes.push(join(dshHome, "settings.yaml"));
		probes.push(join(dshHome, "profiles", "web", "settings.yaml"));
		probes.push(dshHome);
	}
	probes.push(process.cwd());
	for (const probe of probes) {
		if (probe.endsWith(".yaml")) {
			if (existsSync(probe)) return dirname(probe);
			continue;
		}
		return probe;
	}
	return process.cwd();
}
/** The metadata file's absolute path. */
function metadataPath() {
	return join(metadataDir(), "models.json");
}
/**
* Validate the raw models.dev payload: ONLY the flat shape (top-level keys
* are full model ids) is accepted, per plan.
* @param data - the parsed payload.
* @returns the precise index.
* @throws when the shape is not the flat models.dev format.
*/
function toIndex(data) {
	if (typeof data !== "object" || data === null || Array.isArray(data)) throw new Error("unexpected metadata shape (not an object)");
	const entries = Object.entries(data);
	if (entries.length === 0) throw new Error("metadata file is empty");
	const first = entries[0][1];
	if (typeof first !== "object" || first === null || "models" in first) throw new Error("unexpected metadata shape (provider-grouped or foreign format)");
	const index = [];
	for (const [key, value] of entries) {
		if (typeof value !== "object" || value === null) continue;
		const row = value;
		const limit = typeof row["limit"] === "object" && row["limit"] !== null ? row["limit"] : {};
		const modalities = typeof row["modalities"] === "object" && row["modalities"] !== null ? row["modalities"] : {};
		const rawInput = Array.isArray(modalities["input"]) ? modalities["input"].filter((m) => typeof m === "string") : [];
		index.push({
			id: typeof row["id"] === "string" ? row["id"] : key,
			context: typeof limit["context"] === "number" ? limit["context"] : void 0,
			output: typeof limit["output"] === "number" ? limit["output"] : void 0,
			input: rawInput.filter((m) => m === "text" || m === "image"),
			reasoning: row["reasoning"] === true
		});
	}
	return index;
}
/** Read the cached metadata file, or undefined when absent/unreadable. */
function readCachedIndex() {
	try {
		const raw = readFileSync(metadataPath(), "utf8");
		return toIndex(JSON.parse(raw));
	} catch {
		return;
	}
}
/** Whether the raw payload is accepted for caching. */
function isIndexable(data) {
	try {
		toIndex(data);
		return true;
	} catch {
		return false;
	}
}
/** Write one JSON response. */
function json(res, status, body) {
	res.writeHead(status, { "content-type": "application/json; charset=utf-8" });
	res.end(JSON.stringify(body));
}
/**
* Host plugin body: gate on the exact host version, then mount the two
* metadata routes (an explicit webServer register, mirroring the hmr plugin's
* usage of the same registry).
* @param ctx - cordis context.
*/
function apply(ctx) {
	const hostVersion = readHostVersion();
	if (hostVersion === void 0 || hostVersion !== ADAPTER_VERSION) ctx.logger?.warn(`[dsh-model-extension] host version ${hostVersion ?? "<unreadable>"} differs from the validated anchor ${ADAPTER_VERSION}; registering anyway — if settings reads or writes misbehave, please report the host version`);
	const webServer = ctx.webServer;
	if (webServer === void 0) {
		ctx.logger?.warn("[dsh-model-extension] webServer service absent; metadata routes not mounted");
		return;
	}
	ctx.effect?.(() => {
		const disposeIndex = webServer.register({
			kind: "exact",
			path: "/plugins/dsh-model-extension/models-index",
			handler: (req, res) => {
				if (req.method !== "GET" && req.method !== "HEAD") {
					res.writeHead(405);
					res.end();
					return;
				}
				const index = readCachedIndex();
				if (index === void 0) {
					json(res, 404, {
						ok: false,
						message: "元数据未就绪：请点击「下载/更新元数据」，或手动将 models.json 放入 DSH home。"
					});
					return;
				}
				json(res, 200, index);
			}
		});
		const disposeDownload = webServer.register({
			kind: "exact",
			path: "/plugins/dsh-model-extension/models-download",
			handler: (req, res) => {
				if (req.method !== "POST" && req.method !== "GET") {
					res.writeHead(405);
					res.end();
					return;
				}
				(async () => {
					try {
						const response = await fetch(METADATA_URL, { signal: AbortSignal.timeout(DOWNLOAD_TIMEOUT_MS) });
						if (!response.ok) {
							json(res, 502, {
								ok: false,
								message: `models.dev 返回 HTTP ${String(response.status)}`
							});
							return;
						}
						const data = await response.json();
						if (!isIndexable(data)) {
							json(res, 422, {
								ok: false,
								message: "models.dev 数据格式不被识别（仅支持 models.dev/models.json 的扁平格式）"
							});
							return;
						}
						writeFileSync(metadataPath(), JSON.stringify(data), "utf8");
						ctx.logger?.info(`[dsh-model-extension] metadata cached at ${metadataPath()}`);
						json(res, 200, {
							ok: true,
							index: toIndex(data)
						});
					} catch (error) {
						json(res, 502, {
							ok: false,
							message: error instanceof Error ? error.message : String(error)
						});
					}
				})();
			}
		});
		const disposeCatalog = webServer.register({
			kind: "exact",
			path: "/plugins/dsh-model-extension/pi-ai-catalog",
			handler: (req, res) => {
				if (req.method !== "GET" && req.method !== "HEAD") {
					res.writeHead(405);
					res.end();
					return;
				}
				(async () => {
					try {
						const catalog = await piAiCatalog();
						if (catalog === void 0) {
							json(res, 404, {
								ok: false,
								message: `pi-ai 内置目录不可用：${piAiUnavailableReason() ?? "原因未知"}`,
								copies: piAiCopies()
							});
							return;
						}
						json(res, 200, {
							ok: true,
							...catalog
						});
					} catch (error) {
						json(res, 500, {
							ok: false,
							message: error instanceof Error ? error.message : String(error)
						});
					}
				})();
			}
		});
		return () => {
			const a = disposeIndex;
			if (typeof a === "function") a();
			const b = disposeDownload;
			if (typeof b === "function") b();
			const c = disposeCatalog;
			if (typeof c === "function") c();
		};
	}, "dsh-model-extension: metadata routes");
}
//#endregion
export { apply, inject, name };

//# sourceMappingURL=index.js.map