import { createRequire } from "node:module";
import { existsSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
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
* 2. The metadata service: two same-origin routes backing the Models+ page's
*    quick-load. models.dev is fetched ONLY on an explicit user click (the
*    title-row button); the raw file caches next to settings.yaml under DSH
*    home. Only the flat models.dev shape (top-level keys = full model ids)
*    is accepted; anything else is a refusal, per plan.
*/
const ADAPTER_VERSION = "0.1.2-rc.1";
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
		return () => {
			const a = disposeIndex;
			if (typeof a === "function") a();
			const b = disposeDownload;
			if (typeof b === "function") b();
		};
	}, "dsh-model-extension: metadata routes");
}
//#endregion
export { apply, inject, name };

//# sourceMappingURL=index.js.map