window.__ModuleLoader__.load({
	id: "dsh-model-extension",
	factory: (require) => {
		var module = { exports: {} };
		var exports = module.exports;
var __extCss = ".J84-9a_section{max-width:720px;color:var(--dsw-alias-label-primary);flex-direction:column;gap:12px;display:flex}.J84-9a_titleRow{align-items:center;gap:10px;display:flex}.J84-9a_title{color:var(--dsw-alias-label-primary);margin:0;font-size:16px;font-weight:500;line-height:24px}.J84-9a_intro{color:var(--dsw-alias-label-tertiary);margin:0;font-size:14px;line-height:22px}.J84-9a_savedNotice{color:var(--dsw-alias-state-success-primary);margin:0;font-size:12px;line-height:18px}.J84-9a_error{color:var(--dsw-alias-state-error-primary);margin:0;font-size:12px;line-height:18px}.J84-9a_rows{flex-direction:column;gap:8px;margin:12px 0 0;padding:0;list-style:none;display:flex}.J84-9a_rowCard{border:.5px solid var(--dsw-alias-border-l4);border-radius:16px;flex-direction:column;gap:12px;padding:12px 14px;display:flex}.J84-9a_rowHead{align-items:center;gap:10px;display:flex}.J84-9a_rowIdentity{align-items:center;gap:6px;min-width:0;display:inline-flex}.J84-9a_rowName{color:var(--dsw-alias-label-primary);font-size:14px;font-weight:500;line-height:22px}.J84-9a_rowTag{border:.5px solid var(--dsw-alias-border-l3);color:var(--dsw-alias-label-secondary);border-radius:4px;flex:none;padding:1px 6px;font-size:11px;line-height:16px}.J84-9a_credentialDot{box-sizing:border-box;border-radius:50%;flex:none;width:8px;height:8px;display:inline-block}.J84-9a_credentialDotConfigured{background:var(--dsw-alias-state-success-primary)}.J84-9a_credentialDotMissing{background:var(--dsw-alias-state-error-primary)}.J84-9a_rowActions{align-items:center;gap:4px;margin-left:auto;display:inline-flex}.J84-9a_primaryButton,.J84-9a_secondaryButton,.J84-9a_addButton{box-sizing:border-box;height:36px;font:inherit;cursor:pointer;border:none;border-radius:18px;justify-content:center;align-items:center;gap:4px;padding:0 14px;font-size:14px;line-height:22px;display:inline-flex}.J84-9a_primaryButton{background:var(--dsw-alias-button-primary-fill);color:var(--dsw-alias-label-primary-foreground)}.J84-9a_primaryButton:hover:not(:disabled){background:var(--dsw-alias-button-primary-hover)}.J84-9a_secondaryButton,.J84-9a_addButton{border:.5px solid var(--dsw-alias-border-l3);color:var(--dsw-alias-label-primary);background:0 0}.J84-9a_secondaryButton:hover:not(:disabled),.J84-9a_addButton:hover:not(:disabled){background:var(--dsw-alias-interactive-bg-hover)}.J84-9a_secondaryButton:hover:not(:disabled){background:var(--dsw-alias-interactive-bg-hover-solid)}.J84-9a_dangerButton{box-sizing:border-box;height:36px;color:var(--dsw-alias-state-error-primary);font:inherit;cursor:pointer;background:0 0;border:none;border-radius:18px;justify-content:center;align-items:center;padding:0 14px;font-size:14px;line-height:22px;display:inline-flex}.J84-9a_dangerButton:hover:not(:disabled){background:var(--dsw-alias-interactive-bg-hover-danger)}.J84-9a_rowActions .J84-9a_secondaryButton,.J84-9a_rowActions .J84-9a_dangerButton{border-radius:14px;height:28px;padding:0 10px;font-size:12px;line-height:18px}.J84-9a_primaryButton:disabled,.J84-9a_secondaryButton:disabled,.J84-9a_dangerButton:disabled,.J84-9a_addButton:disabled,.J84-9a_linkButton:disabled,.J84-9a_addModelButton:disabled{opacity:.4;cursor:default}.J84-9a_primaryButton:focus-visible,.J84-9a_secondaryButton:focus-visible,.J84-9a_dangerButton:focus-visible,.J84-9a_addButton:focus-visible,.J84-9a_linkButton:focus-visible,.J84-9a_addModelButton:focus-visible,.J84-9a_iconButton:focus-visible,.J84-9a_customizedSummary:focus-visible{box-shadow:0 0 0 2px var(--dsw-alias-border-l3);outline:none}.J84-9a_editor{background:var(--dsw-alias-bg-module-platform);border-radius:12px;flex-direction:column;gap:14px;padding:14px 16px;display:flex}.J84-9a_field{flex-direction:column;gap:6px;display:flex}.J84-9a_fieldLabel{color:var(--dsw-alias-label-secondary);align-items:center;gap:10px;font-size:12px;font-weight:500;line-height:18px;display:inline-flex}.J84-9a_linkButton{box-sizing:border-box;height:28px;color:var(--dsw-alias-label-tertiary);font:inherit;cursor:pointer;background:0 0;border:none;border-radius:14px;align-items:center;padding:0 10px;font-size:12px;line-height:18px;display:inline-flex}.J84-9a_linkButton:hover:not(:disabled){background:var(--dsw-alias-interactive-bg-hover);color:var(--dsw-alias-label-secondary)}.J84-9a_advancedHint{color:var(--dsw-alias-label-tertiary);margin:0;font-size:12px;line-height:18px}.J84-9a_editorActions{justify-content:flex-end;gap:8px;display:flex}.J84-9a_addBlock{flex-direction:column;gap:12px;display:flex}.J84-9a_addActions{flex-wrap:wrap;gap:10px;display:flex}.J84-9a_addButton{border:1px dashed var(--dsw-alias-border-l3);border-radius:16px;flex:1 1 0;gap:6px;min-width:180px;height:44px}.J84-9a_addCard{background:var(--dsw-alias-bg-module-platform);border-radius:12px;flex-direction:column;gap:14px;padding:14px 16px;list-style:none;display:flex}.J84-9a_addCard .J84-9a_editor,.J84-9a_setupCard .J84-9a_editor{background:0 0;padding:0}.J84-9a_tabs{flex-direction:column;gap:12px;display:flex}.J84-9a_tabBar{border-bottom:.5px solid var(--dsw-alias-border-l2);gap:4px;display:flex}.J84-9a_tabButton{appearance:none;font:inherit;color:var(--dsw-alias-label-tertiary);cursor:pointer;background:0 0;border:none;padding:6px 12px 8px;font-size:13px;line-height:20px;position:relative}.J84-9a_tabButton:hover{color:var(--dsw-alias-label-primary)}.J84-9a_tabButton:disabled{opacity:.4;cursor:default}.J84-9a_tabButtonActive{color:var(--dsw-alias-label-primary);font-weight:500}.J84-9a_tabButtonActive:after{content:\"\";background:var(--dsw-alias-brand-primary);border-radius:2px;height:2px;position:absolute;bottom:-1px;left:10px;right:10px}.J84-9a_tabPanel{flex-direction:column;gap:12px;display:flex}.J84-9a_modelCatalog{flex-direction:column;gap:10px;display:flex}.J84-9a_modelCatalogHeading{flex-direction:column;gap:2px;display:flex}.J84-9a_modelCatalogTitle{color:var(--dsw-alias-label-secondary);font-size:12px;font-weight:500;line-height:18px}.J84-9a_modelCatalogMeta,.J84-9a_modelEmpty{color:var(--dsw-alias-label-tertiary);margin:0;font-size:12px;line-height:18px}.J84-9a_modelList{flex-direction:column;gap:8px;display:flex}.J84-9a_modelListHead{justify-content:space-between;align-items:flex-start;gap:12px;display:flex}.J84-9a_modelEntry{border:.5px solid var(--dsw-alias-border-l4);border-radius:10px;padding:6px}.J84-9a_modelRow{grid-template-columns:minmax(0,1.4fr) minmax(0,1fr) auto auto;align-items:center;gap:6px;display:grid}.J84-9a_iconButton{box-sizing:border-box;width:28px;height:28px;color:var(--dsw-alias-label-tertiary);cursor:pointer;background:0 0;border:none;border-radius:6px;justify-content:center;align-items:center;display:inline-flex}.J84-9a_iconButton:hover:not(:disabled){background:var(--dsw-alias-interactive-bg-hover);color:var(--dsw-alias-label-primary)}.J84-9a_iconButton:disabled{cursor:default;opacity:.4}.J84-9a_iconButtonDanger:hover:not(:disabled){background:var(--dsw-alias-interactive-bg-hover-danger);color:var(--dsw-alias-state-error-primary)}.J84-9a_modelAdvanced{grid-template-columns:repeat(auto-fit,minmax(160px,1fr));gap:8px;padding:8px 4px 2px;display:grid}.J84-9a_modelField{flex-direction:column;gap:4px;display:flex}.J84-9a_modelFieldLabel{color:var(--dsw-alias-label-tertiary);font-size:12px;line-height:18px}.J84-9a_modelEmpty{border:1px dashed var(--dsw-alias-border-l3);text-align:center;border-radius:8px;padding:12px}.J84-9a_addModelButton{box-sizing:border-box;border:.5px solid var(--dsw-alias-border-l3);height:28px;color:var(--dsw-alias-label-primary);font:inherit;cursor:pointer;background:0 0;border-radius:14px;align-self:flex-start;align-items:center;gap:4px;padding:0 10px;font-size:12px;line-height:18px;display:inline-flex}.J84-9a_addModelButton:hover:not(:disabled){background:var(--dsw-alias-interactive-bg-hover)}.J84-9a_input{box-sizing:border-box;border:.5px solid var(--dsw-alias-border-l4);width:100%;height:32px;font:inherit;background:var(--dsw-alias-bg-layer-1);color:var(--dsw-alias-label-primary);border-radius:8px;padding:0 10px;font-size:14px;line-height:22px}select.J84-9a_input{cursor:pointer;max-width:240px}.J84-9a_input:focus{border-color:var(--dsw-alias-brand-primary);outline:none}.J84-9a_input::placeholder{color:var(--dsw-alias-label-dimmed)}.J84-9a_input:disabled{opacity:.6;cursor:default}.J84-9a_selectInput{appearance:none;background-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12' fill='none'%3E%3Cpath d='M3 4.5L6 7.5L9 4.5' stroke='%2381858C' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E\");background-position:right 12px center;background-repeat:no-repeat;background-size:12px 12px;padding-right:32px}.J84-9a_deleteDialog{width:min(480px,100%)}.J84-9a_deleteConfirm:not(:disabled){border-color:var(--dsw-alias-state-error-primary);color:var(--dsw-alias-state-error-primary)}.J84-9a_deleteConfirm:hover:not(:disabled){background:var(--dsw-alias-interactive-bg-hover-danger)}.J84-9a_fetchDialog{max-width:520px}.J84-9a_candidateToolbar{align-items:center;gap:8px;margin-bottom:6px;display:flex}.J84-9a_candidateSearch{flex:240px;min-width:0}.J84-9a_candidateList{flex-direction:column;gap:2px;max-height:320px;margin:0;padding:0;list-style:none;display:flex;overflow-y:auto}.J84-9a_candidate{border-radius:6px}.J84-9a_candidateLabel{cursor:pointer;align-items:center;gap:8px;padding:6px 8px;display:flex}.J84-9a_candidateId{overflow-wrap:anywhere;flex:auto;font-family:ui-monospace,SFMono-Regular,Menlo,monospace;font-size:13px}.J84-9a_candidateEmpty{color:var(--dsw-alias-label-secondary);text-align:center;margin:24px 0;font-size:13px;line-height:20px}[hidden]{display:none!important}.J84-9a_extBlock{border:.5px solid var(--dsw-alias-border-l3);background:var(--dsw-alias-bg-layer-1);border-radius:10px;flex-direction:column;gap:10px;margin:8px 4px 2px;padding:10px;display:flex}.J84-9a_extGroup{border-top:.5px solid var(--dsw-alias-border-l2);padding-top:12px}.J84-9a_extGroupFirst{border-top:none;padding-top:0}.J84-9a_extCheck{cursor:pointer;align-items:flex-start;gap:8px;display:flex}.J84-9a_extCheckLabel{color:var(--dsw-alias-label-primary);font-size:14px;line-height:22px}.J84-9a_extHint{color:var(--dsw-alias-label-tertiary);font-size:12px;line-height:18px}.J84-9a_extGated{flex-direction:column;gap:12px;padding-left:2px;display:flex}.J84-9a_extField{flex-direction:column;gap:6px;display:flex}.J84-9a_extLabel{color:var(--dsw-alias-label-tertiary);font-size:12px;line-height:18px}.J84-9a_extTable{border:.5px solid var(--dsw-alias-border-l4);border-radius:8px;overflow:hidden}.J84-9a_extTHead{color:var(--dsw-alias-label-tertiary);background:var(--dsw-alias-bg-module-platform);grid-template-columns:64px minmax(0,1fr) minmax(0,1.2fr);font-size:12px;line-height:18px;display:grid}.J84-9a_extTHead>div{padding:6px 10px}.J84-9a_extTHead>div+div{border-left:.5px solid var(--dsw-alias-border-l2)}.J84-9a_extTRow{border-top:.5px solid var(--dsw-alias-border-l2);grid-template-columns:64px minmax(0,1fr) minmax(0,1.2fr);align-items:center;display:grid}.J84-9a_extTRow>div{padding:6px 10px;font-size:14px}.J84-9a_extTRow>div+div{border-left:.5px solid var(--dsw-alias-border-l2)}.J84-9a_extTRow input[type=text]{box-sizing:border-box;border:.5px solid var(--dsw-alias-border-l4);width:100%;height:32px;font:inherit;background:var(--dsw-alias-bg-layer-1);color:var(--dsw-alias-label-primary);border-radius:8px;padding:0 10px;font-size:14px}.J84-9a_extTRow input[type=text]:disabled{opacity:.6;cursor:default}.J84-9a_extCheckbox{accent-color:var(--dsw-alias-brand-primary);flex:none;width:15px;height:15px}.J84-9a_switchRow{cursor:pointer;align-items:center;gap:8px;font-size:14px;line-height:22px;display:flex}.J84-9a_extTag{background:var(--dsw-static-deepseek-100);color:var(--dsw-static-deepseek-600);border:.5px solid #4176e659;border-radius:4px;flex:none;padding:1px 6px;font-size:11px;font-weight:500;line-height:16px}.J84-9a_modalMask{background:var(--dsw-alias-bg-mask-1);z-index:100;justify-content:center;align-items:center;padding:24px;display:flex;position:fixed;inset:0}.J84-9a_modal{background:var(--dsw-specific-menu);border-radius:16px;width:100%;padding:20px;box-shadow:0 12px 40px #0000002e}.J84-9a_modalTitle{color:var(--dsw-alias-label-primary);margin-bottom:8px;font-size:16px;font-weight:500;line-height:24px}.J84-9a_modalDesc{color:var(--dsw-alias-label-secondary);margin-bottom:16px;font-size:14px;line-height:22px}.J84-9a_modalFoot{justify-content:flex-end;gap:8px;display:flex}.J84-9a_quickWrap{flex-direction:column;gap:6px;display:flex;position:relative}.J84-9a_quickList{z-index:20;border:.5px solid var(--dsw-alias-border-l3);background:var(--dsw-specific-menu);border-radius:8px;max-height:264px;margin-top:2px;padding:4px;position:absolute;top:100%;left:0;right:0;overflow-y:auto;box-shadow:0 8px 24px #0000001f}.J84-9a_quickItem{width:100%;color:var(--dsw-alias-label-primary);text-align:left;cursor:pointer;background:0 0;border:none;border-radius:6px;flex-direction:column;gap:1px;padding:6px 8px;font-family:ui-monospace,SFMono-Regular,Menlo,monospace;font-size:13px;display:flex}.J84-9a_quickItemId{overflow-wrap:anywhere}.J84-9a_quickItemApi{color:var(--dsw-alias-label-tertiary);letter-spacing:.2px;font-size:11px;line-height:14px}.J84-9a_quickItem:hover{background:var(--dsw-alias-interactive-bg-hover)}.J84-9a_quickEmpty{color:var(--dsw-alias-label-tertiary);padding:6px 8px;font-size:12px;line-height:18px}@media (prefers-reduced-motion:reduce){.J84-9a_customizedSummary:before{transition:none}}\n";
if (typeof document !== 'undefined' && document.querySelector('style[data-plugin-css="dsh-model-extension"]') === null) {
  var __tag = document.createElement('style');
  __tag.dataset.plugin = "dsh-model-extension";
  __tag.dataset.pluginCss = "dsh-model-extension/models-plus.module.css";
  __tag.textContent = __extCss;
  document.head.appendChild(__tag);
}
		Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
		let react = require("react");
		let _deepseek_ai_dsh_client_ui_primitives = require("@deepseek-ai/dsh-client-ui-primitives");
		let _deepseek_ai_dsh_client_store = require("@deepseek-ai/dsh-client-store");
		let react_jsx_runtime = require("react/jsx-runtime");
		//#region src/client/vendor/store.ts
		/**
		* Any route key walks a dict schema to the same profile node, so the lookup
		* names one that cannot collide with a configured route.
		*/
		const PROBE_ROUTE = "\0probe";
		/**
		* Join declared configurable providers with the currently registered routes.
		* @param registered - live provider routes in registration order.
		* @param directory - declared configurable providers in declaration order.
		* @returns declared rows followed by live routes with no declaration.
		*/
		function joinProviderDirectory(registered, directory) {
			const active = new Set(registered.map((provider) => provider.id));
			const declared = new Set(directory.map((entry) => entry.provider));
			const rows = directory.map((entry) => ({
				provider: entry.provider,
				displayName: entry.displayName,
				settingsNs: entry.settingsNs,
				settingsPath: [...entry.settingsPath],
				active: active.has(entry.provider),
				...entry.declared === void 0 ? {} : { declared: entry.declared },
				...entry.error === void 0 ? {} : { error: entry.error }
			}));
			for (const provider of registered) {
				if (declared.has(provider.id)) continue;
				rows.push({
					provider: provider.id,
					displayName: provider.name,
					settingsNs: "",
					settingsPath: [],
					active: true
				});
			}
			return rows;
		}
		/**
		* Derive the conventional credential reference for a provider route: the v1
		* page never asks for an environment-variable name, so a typed key stores
		* under this derived reference and the profile records it as `apiKeyEnv`.
		* @param provider - provider route id (e.g. `anthropic`, `minimax-cn`).
		* @returns the derived reference name (e.g. `MINIMAX_CN_API_KEY`).
		*/
		function deriveKeyRef(provider) {
			return `${provider.toUpperCase().replace(/[^A-Z0-9]+/g, "_")}_API_KEY`;
		}
		/**
		* The wire protocols a hand-declared route may name, read out of the owning
		* namespace's own schema. This stays a schema read rather than a wire field so
		* the choices the page offers cannot drift from the ones the adapter accepts:
		* both come from the same `Config`.
		* @param namespace - the namespace view whose schema declares the profile shape.
		* @param schema - settings schema operations.
		* @returns the protocol identifiers, or an empty list when the schema has none.
		*/
		function protocolChoices(namespace, schema) {
			if (namespace === void 0) return [];
			const list = schema.nodeAtPath(schema.rehydrate(namespace.schema), [
				"providers",
				PROBE_ROUTE,
				"api"
			]);
			if (list?.type !== "union" || list.list === void 0) return [];
			return list.list.map((entry) => entry.value).filter((value) => typeof value === "string");
		}
		/** The credential reference a resolved profile names (its `apiKeyEnv` field). */
		function apiKeyEnvOf(namespace, path, schema) {
			if (namespace === void 0) return void 0;
			const profile = schema.getPath(namespace.value, path);
			if (typeof profile !== "object" || profile === null) return void 0;
			const ref = profile.apiKeyEnv;
			return typeof ref === "string" && ref.length > 0 ? ref : void 0;
		}
		/** The models settings page controller (one per settings surface). */
		var ModelsSettingsStore = class {
			ctx;
			schema;
			describeFace;
			/** The snapshot the section renders from (uSES-safe store). */
			store = (0, _deepseek_ai_dsh_client_store.createSnapshotStore)({
				status: "idle",
				error: null,
				credentialError: null,
				writable: false,
				rows: [],
				namespaces: /* @__PURE__ */ new Map()
			});
			/** Latest load wins; an older response never overwrites a newer one. */
			generation = 0;
			/**
			* @param ctx - the page plugin's context, whose `remote.llm` and
			* `remote.credentials` namespaces carry the directory and credential reads.
			* @param schema - settings-owned schema and immutable path operations.
			* @param describeFace - the shared mirror's describe face (namespace views and writability).
			*/
			constructor(ctx, schema, describeFace) {
				this.ctx = ctx;
				this.schema = schema;
				this.describeFace = describeFace;
			}
			/**
			* Refresh the whole page snapshot: the provider directory and the mirror's
			* settings answer in parallel, then one batched credential describe over
			* every referenced ref. Provider failure or absence of an initial settings
			* answer keeps the last good rows and surfaces an error; a failed settings
			* refresh reuses the mirror's held view.
			* @returns nothing; the snapshot carries the outcome.
			*/
			async load() {
				const generation = ++this.generation;
				this.store.update((s) => {
					s.status = "loading";
					s.error = null;
				});
				const [registered, declared] = await Promise.all([
					this.ctx.remote.llm.listProviders(),
					this.ctx.remote.llm.listConfigurableProviders(),
					this.describeFace.ensure()
				]);
				if (!registered.ok) {
					this.failLoad(generation, registered.error.message);
					return;
				}
				if (!declared.ok) {
					this.failLoad(generation, declared.error.message);
					return;
				}
				const mirrored = this.describeFace.getSnapshot();
				if (mirrored.view === void 0) {
					this.failLoad(generation, mirrored.error ?? "settings are unavailable in this browser");
					return;
				}
				const providers = joinProviderDirectory(registered.value, declared.value);
				const writable = mirrored.view.writable;
				const views = mirrored.view.namespaces;
				const namespaces = new Map(views.map((view) => [view.ns, view]));
				const rows = providers.map((entry) => {
					const namespace = namespaces.get(entry.settingsNs);
					return {
						entry,
						configured: namespace !== void 0 && (entry.settingsPath.length === 0 || this.schema.getPath(namespace.value, entry.settingsPath) !== void 0),
						removable: namespace !== void 0 && entry.settingsPath.length > 0 && this.schema.hasPath(namespace.user, entry.settingsPath) && !this.schema.hasPath(namespace.base, entry.settingsPath),
						apiKeyEnv: apiKeyEnvOf(namespace, entry.settingsPath, this.schema),
						credential: void 0
					};
				});
				const refs = [...new Set(rows.map((row) => row.apiKeyEnv ?? deriveKeyRef(row.entry.provider)))];
				let credentials = {};
				let credentialError = null;
				if (refs.length > 0) {
					const response = await this.ctx.remote.credentials.describe(refs);
					if (response.ok) credentials = response.value;
					else credentialError = response.error.message;
				}
				if (generation !== this.generation) return;
				this.store.update((s) => {
					s.status = "ready";
					s.error = null;
					s.credentialError = credentialError;
					s.writable = writable;
					s.rows = rows.map((row) => {
						const named = row.apiKeyEnv === void 0 ? void 0 : credentials[row.apiKeyEnv];
						const derived = row.apiKeyEnv !== void 0 ? void 0 : credentials[deriveKeyRef(row.entry.provider)];
						return {
							...row,
							...named === void 0 ? {} : { credential: named },
							...derived === void 0 ? {} : { derivedCredential: derived }
						};
					});
					s.namespaces = namespaces;
				});
			}
			/** Publish one load's failure text, unless a newer load already took over. */
			failLoad(generation, message) {
				if (generation !== this.generation) return;
				this.store.update((s) => {
					s.status = "error";
					s.error = message;
				});
			}
		};
		/**
		* Whether a joined row can serve model requests as it stands: the route is
		* registered with the adapter registry, and whatever credential its resolved
		* profile names is stored. A profile naming no reference authenticates through
		* the provider's own path (the Bedrock chain, Vertex ADC, a gateway that needs
		* nothing), as does a live route with no settings address at all, so neither
		* owes this page a key.
		* @param row - one joined provider row.
		* @returns whether the user already has this provider to talk to.
		*/
		function providerUsable(row) {
			if (!row.entry.active) return false;
			if (row.apiKeyEnv === void 0) return true;
			return row.credential?.configured === true;
		}
		//#endregion
		//#region src/client/models-plus/models-index.ts
		/** Same-origin routes served by the server half. */
		const INDEX_URL = "/plugins/dsh-model-extension/models-index";
		const DOWNLOAD_URL = "/plugins/dsh-model-extension/models-download";
		const PI_AI_URL = "/plugins/dsh-model-extension/pi-ai-catalog";
		/** Module-level cache: one page load fetches each source at most once. */
		let cachedIndex;
		/** Normalize the models.dev route payload. */
		function normalize(raw) {
			if (!Array.isArray(raw)) return [];
			const entries = [];
			for (const item of raw) {
				if (typeof item !== "object" || item === null) continue;
				const row = item;
				if (typeof row["id"] !== "string" || row["id"].length === 0) continue;
				const modalities = Array.isArray(row["input"]) ? row["input"].filter((m) => typeof m === "string") : [];
				entries.push({
					id: row["id"],
					context: typeof row["context"] === "number" ? row["context"] : void 0,
					output: typeof row["output"] === "number" ? row["output"] : void 0,
					input: modalities,
					reasoning: row["reasoning"] === true
				});
			}
			return entries;
		}
		/** Narrow a modality list to what this UI offers. */
		function supportedInput(value) {
			if (!Array.isArray(value)) return [];
			return value.filter((m) => typeof m === "string" && (m === "text" || m === "image"));
		}
		/** Read one object-valued field off a raw record. */
		function objectField(source, key) {
			const value = source[key];
			return typeof value === "object" && value !== null && !Array.isArray(value) ? value : void 0;
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
		function modelsDevProvider(id) {
			const slash = id.indexOf("/");
			return slash > 0 ? id.slice(0, slash) : void 0;
		}
		/** Turn models.dev rows into prefill candidates. */
		function toModelsDevEntries(rows) {
			return rows.map((row) => ({
				source: "models.dev",
				key: `models.dev\u0000${row.id}`,
				id: row.id,
				provider: modelsDevProvider(row.id),
				context: row.context,
				output: row.output,
				input: row.input,
				reasoning: row.reasoning
			}));
		}
		/** Read the diagnostics warnings the server attaches to a catalog payload. */
		function diagnosticsWarnings(payload) {
			if (typeof payload !== "object" || payload === null) return [];
			const diagnostics = payload["diagnostics"];
			if (typeof diagnostics !== "object" || diagnostics === null) return [];
			const warnings = diagnostics["warnings"];
			if (!Array.isArray(warnings)) return [];
			return warnings.filter((warning) => typeof warning === "string");
		}
		/** Turn a pi-ai route payload into prefill candidates, keeping both ids' provenance. */
		function toPiAiEntries(payload) {
			const warnings = diagnosticsWarnings(payload);
			if (typeof payload !== "object" || payload === null) return {
				entries: [],
				warnings
			};
			const body = payload;
			if (!Array.isArray(body["models"])) return {
				entries: [],
				warnings
			};
			const entries = [];
			for (const item of body["models"]) {
				if (typeof item !== "object" || item === null) continue;
				const row = item;
				const id = row["id"];
				const provider = row["provider"];
				if (typeof id !== "string" || id.length === 0) continue;
				if (typeof provider !== "string" || provider.length === 0) continue;
				entries.push({
					source: "pi-ai",
					key: `pi-ai\u0000${provider}\u0000${id}`,
					id,
					provider,
					name: typeof row["name"] === "string" && row["name"].length > 0 ? row["name"] : void 0,
					context: typeof row["contextWindow"] === "number" ? row["contextWindow"] : void 0,
					output: typeof row["maxTokens"] === "number" ? row["maxTokens"] : void 0,
					input: supportedInput(row["input"]),
					reasoning: row["reasoning"] === true,
					api: typeof row["api"] === "string" ? row["api"] : void 0,
					thinkingLevelMap: objectField(row, "thinkingLevelMap"),
					compat: objectField(row, "compat")
				});
			}
			return {
				entries,
				warnings,
				version: typeof body["piAiVersion"] === "string" ? body["piAiVersion"] : void 0,
				generatedAt: typeof body["generatedAt"] === "string" ? body["generatedAt"] : void 0
			};
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
		async function fetchJson(url) {
			try {
				const response = await fetch(url);
				const payload = await response.json().catch(() => void 0);
				if (response.ok) return { payload };
				const message = typeof payload === "object" && payload !== null ? payload["message"] : void 0;
				return { failure: typeof message === "string" ? message : `HTTP ${String(response.status)}` };
			} catch (error) {
				return { failure: error instanceof Error ? error.message : String(error) };
			}
		}
		/**
		* The prefill index, fetched once per page load. Both sources are requested
		* together and either may come back empty; an entirely empty index is a
		* legitimate answer the caller renders as "nothing to load yet".
		* @returns the merged index.
		*/
		async function getPrefillIndex() {
			if (cachedIndex !== void 0) return cachedIndex;
			const [piAiResult, modelsDevResult] = await Promise.all([fetchJson(PI_AI_URL), fetchJson(INDEX_URL)]);
			const piAi = toPiAiEntries(piAiResult.payload);
			cachedIndex = {
				piAi: piAi.entries,
				modelsDev: toModelsDevEntries(normalize(modelsDevResult.payload)),
				piAiVersion: piAi.version,
				piAiGeneratedAt: piAi.generatedAt,
				piAiWarnings: piAi.warnings,
				...piAiResult.failure !== void 0 ? { piAiFailure: piAiResult.failure } : {}
			};
			return cachedIndex;
		}
		/**
		* The one wire protocol one catalog provider's entries agree on.
		*
		* This mirrors the host's own `sharedCatalogApi`: a route whose installed
		* entries all speak the same protocol needs no `api` in configuration, because
		* the host resolves every model — including ones the catalog does not describe
		* — to that shared protocol. Reading it here is what lets the panel judge a
		* row's compat switches the way the adapter will. A provider whose entries
		* disagree (an OpenAI-style catalog spanning Responses and Chat Completions)
		* has no such answer, and neither does an index that has not loaded yet.
		* @param index - the fetched index, or undefined while the page still loads.
		* @param provider - the route key to inspect.
		* @returns the shared protocol, or undefined when none settles it.
		*/
		function sharedCatalogApi(index, provider) {
			if (index === void 0 || provider === void 0 || provider.length === 0) return void 0;
			const apis = /* @__PURE__ */ new Set();
			for (const entry of index.piAi) {
				if (entry.provider !== provider || entry.api === void 0) continue;
				apis.add(entry.api);
			}
			return apis.size === 1 ? [...apis][0] : void 0;
		}
		/**
		* Download/refresh the models.dev file through the server half (user-triggered
		* from the title-row button). A success also refreshes the local cache.
		*/
		async function downloadMetadata() {
			try {
				const response = await fetch(DOWNLOAD_URL, { method: "POST" });
				const body = await response.json().catch(() => void 0);
				if (!response.ok || body?.ok !== true) return {
					ok: false,
					message: body?.message ?? `HTTP ${String(response.status)}`
				};
				cachedIndex = void 0;
				return { ok: true };
			} catch (error) {
				return {
					ok: false,
					message: error instanceof Error ? error.message : String(error)
				};
			}
		}
		/**
		* How many candidates the picker renders before it stops and reports the rest.
		*
		* Ten was too few once one id could arrive from a dozen providers; fifty shows
		* a vendor's catalog without pouring a 1354-row index into the DOM.
		*/
		const DEFAULT_PREFILL_LIMIT = 50;
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
		function providersOf(index, source) {
			if (index === void 0) return [];
			const entries = source === "pi-ai" ? index.piAi : index.modelsDev;
			const providers = /* @__PURE__ */ new Set();
			for (const entry of entries) if (entry.provider !== void 0 && entry.provider.length > 0) providers.add(entry.provider);
			return [...providers].sort((a, b) => a.localeCompare(b));
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
		function searchPrefill(index, query) {
			if (index === void 0) return {
				hits: [],
				total: 0
			};
			const entries = query.source === "pi-ai" ? index.piAi : index.modelsDev;
			const provider = query.provider?.trim() ?? "";
			const needle = query.text?.trim().toLowerCase() ?? "";
			const limit = query.limit ?? DEFAULT_PREFILL_LIMIT;
			const hits = [];
			let total = 0;
			for (const entry of entries) {
				if (provider.length > 0 && entry.provider !== provider) continue;
				if (needle.length > 0 && !entry.id.toLowerCase().includes(needle)) continue;
				total += 1;
				if (hits.length < limit) hits.push(entry);
			}
			return {
				hits,
				total
			};
		}
		//#endregion
		//#region src/client/extension-meta.ts
		/**
		* Shared extension metadata: enums pinned to the host release this extension
		* was last verified against, and the extra locale keys the extension adds on
		* top of the official Models page dictionaries.
		*/
		/** Thinking levels offered by llm-pi-ai (THINKING_LEVEL_GATE @ 0.1.2-alpha.4). Only `off` may carry an empty wire value. */
		const THINKING_LEVELS = [
			"off",
			"minimal",
			"low",
			"medium",
			"high",
			"xhigh",
			"max"
		];
		/** Reasoning wire formats understood by llm-pi-ai (SUPPORTED_THINKING_FORMATS @ 0.1.2-alpha.4). */
		const THINKING_FORMATS = [
			"openai",
			"deepseek",
			"openrouter",
			"together",
			"baseten",
			"zai",
			"qwen",
			"chat-template",
			"qwen-chat-template",
			"string-thinking",
			"ant-ling"
		];
		/**
		* The compatibility switches llm-pi-ai *offers*, by wire protocol (the `offer`
		* set of its COMPAT_GATES @ 0.1.5-rc.2). Only these may reach a model row: the
		* adapter refuses a switch no protocol offers rather than ignoring it, so
		* copying pi-ai's catalog `compat` across verbatim would fail resolution on
		* the withheld fields it also records (routing preferences, session affinity,
		* deferred tools, grammar tools). Re-check against the host's COMPAT_GATES on
		* every host upgrade — the same drift gate the host keeps for itself.
		*/
		const COMPAT_FIELDS = {
			"openai-completions": [
				"supportsStore",
				"supportsDeveloperRole",
				"supportsReasoningEffort",
				"supportsUsageInStreaming",
				"supportsFinishReason",
				"maxTokensField",
				"requiresToolResultName",
				"requiresAssistantAfterToolResult",
				"requiresThinkingAsText",
				"requiresReasoningContentOnAssistantMessages",
				"thinkingFormat",
				"chatTemplateKwargs",
				"chatTemplateArgs",
				"supportsThinkingTokenBudget",
				"thinkingTokenBudgetField",
				"vllmPriority",
				"supportsStrictMode",
				"cacheControlFormat",
				"supportsLongCacheRetention"
			],
			"openai-responses": [
				"supportsDeveloperRole",
				"supportsMaxOutputTokens",
				"supportsStrictMode",
				"supportsLongCacheRetention"
			],
			"azure-openai-responses": [
				"supportsDeveloperRole",
				"supportsMaxOutputTokens",
				"supportsStrictMode",
				"supportsLongCacheRetention"
			],
			"openai-codex-responses": [
				"supportsDeveloperRole",
				"supportsMaxOutputTokens",
				"supportsStrictMode",
				"supportsLongCacheRetention"
			],
			"anthropic-messages": [
				"supportsEagerToolInputStreaming",
				"supportsLongCacheRetention",
				"supportsCacheControlOnTools",
				"supportsTemperature",
				"forceAdaptiveThinking",
				"allowEmptySignature",
				"supportsStrictTools"
			],
			"bedrock-converse-stream": ["supportsStrictMode"]
		};
		/**
		* Switches the base panel already renders a dedicated control for; the
		* "other compatibility switches" block lists everything else.
		*/
		const COMPAT_BASE_FIELDS = [
			"supportsDeveloperRole",
			"supportsReasoningEffort",
			"thinkingFormat"
		];
		/**
		* The offered compat field names for one wire protocol.
		* @param api - the model's protocol, when known.
		* @returns the field names; empty for an unknown or absent protocol.
		*/
		function offeredCompatFields(api) {
			if (api === void 0) return [];
			const fields = COMPAT_FIELDS[api];
			return fields === void 0 ? [] : fields;
		}
		/**
		* Whether one protocol takes one compat switch.
		*
		* The adapter *refuses* a switch its protocol does not declare rather than
		* ignoring it, so this is the difference between a control that can be offered
		* and one that would fail the save. An unknown protocol takes nothing: its
		* field set cannot be read, and the adapter resolves it to the same refusal.
		* @param api - the model's wire protocol, when known.
		* @param field - the compat field name.
		* @returns true when the protocol offers the field.
		*/
		function protocolOffers(api, field) {
			return offeredCompatFields(api).includes(field);
		}
		/** Extra copy for the extension, keyed like the official dictionaries (en is authoritative). */
		const en = {
			nav: "Models+",
			title: "Models+",
			intro: "Enter your API keys to use models from the following providers.",
			edit: "Edit",
			editProvider: "Edit {provider}",
			remove: "Delete",
			removeProvider: "Delete {provider}",
			deleteTitle: "Delete {provider}?",
			deleteDescription: "Deleting {provider} removes its configuration. Any credential it uses is managed elsewhere and will be kept.",
			deleteDescriptionWithCredential: "Deleting {provider} removes its configuration and stored API key.",
			deleteConfirm: "Delete {provider}",
			deleting: "Deleting {provider}…",
			add: "Add provider",
			provider: "Provider",
			close: "Close",
			cancel: "Cancel",
			apply: "Apply",
			applying: "Applying…",
			savedProvider: "Saved {provider}.",
			credentialConfigured: "API key configured",
			credentialMissing: "API key missing",
			readOnly: "The settings document is read-only in this deployment.",
			loadFailed: "Loading the provider directory failed",
			conflict: "Someone else changed these settings while this card was open. Close it and reopen to edit the current values.",
			retry: "Retry",
			keyInput: "API key",
			keyPlaceholder: "Enter your API key",
			keyPlaceholderNative: "Enter an API key, or leave blank to use environment authentication",
			keyStored: "Configured — enter a new value to replace",
			keyEnvLocked: "Provided by the launch environment (read-only)",
			customized: "Customized settings",
			baseUrl: "Base URL",
			baseUrlDefault: "Provider default",
			models: "Models",
			modelsInherited: "Using the adapter defaults",
			modelsCustomized: "Customized model catalog",
			resetModels: "Restore defaults",
			model: "Model",
			modelId: "Model ID",
			modelName: "Display name",
			modelNamePlaceholder: "Uses the model ID when empty",
			contextWindow: "Context window",
			contextWindowPlaceholder: "Uses the provider default",
			maxTokens: "Max output tokens",
			maxTokensPlaceholder: "Uses the provider default",
			modelAdvanced: "Capacities",
			addModel: "Add model",
			removeModel: "Delete model",
			modelsEmpty: "No models will be shown in the selector. Unlisted IDs can still be sent directly.",
			keyBlank: "Enter the API key, or leave the field empty to keep the stored one.",
			keyBlankNew: "Enter the API key, or leave the field empty if this provider authenticates another way.",
			keyIllegalCharacters: "This API key is not in a valid format. Please check it.",
			modelIdRequired: "Model ID is required.",
			modelIdDuplicate: "Model ID must be unique.",
			modelNameInvalid: "Display name cannot be empty.",
			modelContextInvalid: "Context window must be a positive count, like 131072, 256K, or 1M.",
			modelMaxTokensInvalid: "Max output tokens must be a positive count, like 8192, 64K, or 1M.",
			advancedHint: "Other fields live in settings.yaml; edit that section directly.",
			modelCapacityInvalid: "A capacity must be a number, optionally suffixed K or M.",
			modelDuplicate: "Each model ID may appear once.",
			modelContextWindow: "Context window",
			modelMaxTokens: "Max output tokens",
			fetchModels: "Fetch available models",
			fetching: "Asking the provider…",
			fetchNeedsBaseUrl: "Enter the base URL first, then fetch.",
			fetchEmpty: "The provider listed no models. Add them by hand.",
			fetchTitle: "Choose models to add",
			fetchDescription: "These are the models this provider has available. Choose the ones to add.",
			fetchSelectAll: "Select all",
			fetchDeselectAll: "Deselect all",
			fetchAdopt: "Add selected",
			customAdd: "Add a custom provider",
			customTitle: "Custom provider",
			customTag: "Custom",
			customRoute: "Provider ID",
			customRouteHint: "Lowercase identifier, starting with a letter, that uniquely names this provider in requests and as its credential name.",
			customRouteInvalid: "Start with a lowercase letter; then lowercase letters, digits, and dashes.",
			customRouteTaken: "A provider already uses this ID.",
			customDisplayName: "Display name",
			customApi: "API protocol",
			customApiUnset: "Not selected",
			customNeedsBaseUrl: "A custom provider needs a base URL.",
			customBaseUrlInvalid: "Enter a valid HTTP or HTTPS URL.",
			customNeedsModels: "A custom provider needs at least one model.",
			customBaseUrlPlaceholder: "https://gateway.example/v1",
			settingsPathUnresolvable: "unresolvable settings path",
			create: "Create provider",
			creating: "Creating…",
			onboardingTitle: "Add an API key to get started",
			onboardingDescription: "Configure the official DeepSeek provider to start building.",
			onboardingLater: "Configure later",
			onboardingSave: "Save and continue",
			onboardingSaving: "Saving…",
			keyRequired: "Enter an API key to continue.",
			extDeclare: "Declared",
			extSection: "Model extensions",
			extSectionHint: "Extra per-model fields that live in settings.yaml.",
			supportsReasoningEffort: "Endpoint accepts reasoning effort",
			supportsDeveloperRole: "System prompt may use the developer role",
			supportsDeveloperRoleHint: "Reasoning-model system prompts go out as \"developer\"; uncheck to keep \"system\" for gateways that reject it.",
			reasoningEfforts: "Reasoning efforts",
			reasoningEffortLevel: "Level",
			reasoningEffortWire: "Wire value",
			reasoningEffortOffHint: "\"off\" takes no wire value.",
			reasoningEffortEmptyWire: "A checked level other than \"off\" needs a wire value.",
			reasoningEffortsNeedNonOff: "Declare at least one level beyond \"off\".",
			inputModalities: "Input modalities",
			inputNeedOne: "Keep at least one modality checked.",
			thinkingFormat: "Thinking format"
		};
		/** Chinese strings — same key set as {@link en}. */
		const zh = {
			nav: "模型+",
			title: "模型+",
			intro: "填入各提供方的 API 密钥即可使用其模型。",
			edit: "编辑",
			editProvider: "编辑 {provider}",
			remove: "删除",
			removeProvider: "删除 {provider}",
			deleteTitle: "删除 {provider}？",
			deleteDescription: "删除 {provider} 会移除其配置；其使用的凭证（如有）由其他位置管理，将会保留。",
			deleteDescriptionWithCredential: "删除 {provider} 会移除其配置和存储的 API 密钥。",
			deleteConfirm: "删除 {provider}",
			deleting: "正在删除 {provider}…",
			add: "添加提供方",
			provider: "提供方",
			close: "关闭",
			cancel: "取消",
			apply: "保存",
			applying: "保存中…",
			savedProvider: "已保存 {provider}。",
			credentialConfigured: "API 密钥已配置",
			credentialMissing: "API 密钥缺失",
			readOnly: "当前部署的设置文档为只读。",
			loadFailed: "加载提供方目录失败",
			conflict: "这张卡片打开期间，这些设置已被其他地方改动。请关闭后重新打开，在当前值上编辑。",
			retry: "重试",
			keyInput: "API 密钥",
			keyPlaceholder: "输入 API 密钥",
			keyPlaceholderNative: "输入 API 密钥，或留空使用环境认证",
			keyStored: "已配置——输入新值可替换",
			keyEnvLocked: "由启动环境提供（只读）",
			customized: "自定义设置",
			baseUrl: "API 地址",
			baseUrlDefault: "提供方默认",
			models: "模型目录",
			modelsInherited: "正在使用适配器默认模型",
			modelsCustomized: "已自定义模型目录",
			resetModels: "恢复默认模型",
			model: "模型",
			modelId: "模型 ID",
			modelName: "显示名称",
			modelNamePlaceholder: "留空时使用模型 ID",
			contextWindow: "上下文窗口",
			contextWindowPlaceholder: "使用提供方默认值",
			maxTokens: "最大输出 token 数",
			maxTokensPlaceholder: "使用提供方默认值",
			modelAdvanced: "容量",
			addModel: "添加模型",
			removeModel: "删除模型",
			modelsEmpty: "模型选择器中将不显示任何模型；目录外 ID 仍可直接发送。",
			keyBlank: "请输入 API 密钥；留空则保持已存储的密钥。",
			keyBlankNew: "请输入 API 密钥；若该提供方以其他方式鉴权，可以留空。",
			keyIllegalCharacters: "此 API 密钥格式无效，请检查。",
			modelIdRequired: "模型 ID 必填。",
			modelIdDuplicate: "模型 ID 不能重复。",
			modelNameInvalid: "显示名称不能为空。",
			modelContextInvalid: "上下文窗口须为正数，如 131072、256K、1M。",
			modelMaxTokensInvalid: "最大输出 token 数须为正数，如 8192、64K、1M。",
			advancedHint: "其余字段存于 settings.yaml；请直接编辑该节。",
			modelCapacityInvalid: "容量须为数字，可带 K 或 M 后缀。",
			modelDuplicate: "每个模型 ID 只能出现一次。",
			modelContextWindow: "上下文窗口",
			modelMaxTokens: "最大输出 token 数",
			fetchModels: "获取可用模型",
			fetching: "正在询问提供方…",
			fetchNeedsBaseUrl: "请先填写 API 地址再获取。",
			fetchEmpty: "该提供方未列出任何模型，请手动添加。",
			fetchTitle: "选择要添加的模型",
			fetchDescription: "这些是该提供方可用的模型，选择要添加的项。",
			fetchSelectAll: "全选",
			fetchDeselectAll: "取消全选",
			fetchAdopt: "添加所选",
			customAdd: "添加自定义提供方",
			customTitle: "自定义提供方",
			customTag: "自定义",
			customRoute: "提供方 ID",
			customRouteHint: "小写字母开头的唯一标识符，用于请求与凭证命名。",
			customRouteInvalid: "以小写字母开头；其后为小写字母、数字和短横线。",
			customRouteTaken: "已有提供方使用此 ID。",
			customDisplayName: "显示名称",
			customApi: "API 协议",
			customApiUnset: "未选择",
			customNeedsBaseUrl: "自定义提供方需要 API 地址。",
			customBaseUrlInvalid: "请输入有效的 HTTP 或 HTTPS 地址。",
			customNeedsModels: "自定义提供方至少需要一个模型。",
			customBaseUrlPlaceholder: "https://gateway.example/v1",
			settingsPathUnresolvable: "无法解析设置路径",
			create: "创建提供方",
			creating: "创建中…",
			onboardingTitle: "先添加一个 API 密钥即可开始",
			onboardingDescription: "配置官方 DeepSeek 提供方以开始构建。",
			onboardingLater: "稍后配置",
			onboardingSave: "保存并继续",
			onboardingSaving: "保存中…",
			keyRequired: "请输入 API 密钥以继续。",
			extDeclare: "声明",
			extSection: "模型扩展",
			extSectionHint: "settings.yaml 中按模型生效的扩展字段。",
			supportsReasoningEffort: "端点接受推理挡位参数（reasoning_effort）",
			supportsDeveloperRole: "允许以 developer 角色发送系统提示",
			supportsDeveloperRoleHint: "推理模型的系统提示将以 developer 角色发出；网关拒绝该角色时取消勾选，改用 system。",
			reasoningEfforts: "推理挡位",
			reasoningEffortLevel: "挡位",
			reasoningEffortWire: "线上取值",
			reasoningEffortOffHint: "“off”不需要线上取值。",
			reasoningEffortEmptyWire: "除 off 外勾选的挡位必须填写线上取值。",
			reasoningEffortsNeedNonOff: "至少声明一个 off 以外的挡位。",
			inputModalities: "输入模态",
			inputNeedOne: "至少保留一个模态。",
			thinkingFormat: "思考格式"
		};
		//#endregion
		//#region src/client/models-plus/compat.ts
		/**
		* The minimal path ops carrying `after` over `before`, both as the card sees
		* them. Only keys the card observed are named; fields absent from both sides
		* produce no op, which is why edits are path-addressed rather than a rebuilt
		* section.
		* @param base - path of the edited subtree inside the user section.
		* @param before - the subtree as loaded, or undefined when it is new.
		* @param after - the subtree as edited.
		* @returns ordered set/unset ops; empty when nothing changed.
		*/
		function pathOps(base, before, after) {
			const previous = typeof before === "object" && before !== null && !Array.isArray(before) ? before : {};
			const ops = [];
			for (const [key, value] of Object.entries(after)) {
				if (JSON.stringify(previous[key]) === JSON.stringify(value)) continue;
				ops.push({
					op: "set",
					path: [...base, key],
					value
				});
			}
			for (const key of Object.keys(previous)) if (!(key in after)) ops.push({
				op: "unset",
				path: [...base, key]
			});
			return ops;
		}
		/** Accepted capacity spellings: a decimal count with an optional K/M suffix. */
		const CAPACITY_PATTERN = /^(\d+(?:\.\d+)?)([km])?$/i;
		/** Decimal suffix scales — `1M` is 1000K, matching how model capacities are quoted. */
		const CAPACITY_SCALE = {
			k: 1e3,
			m: 1e6
		};
		/**
		* Read a typed capacity, so a user can write `256K` or `1M` instead of counting
		* zeroes. The stored value stays a plain token count.
		* @param text - raw field text.
		* @returns the count; `undefined` when blank (inherit), `NaN` when unreadable
		* (rejected by {@link validateModelRows} before any write).
		*/
		function parseCapacity(text) {
			const trimmed = text.trim();
			if (trimmed.length === 0) return void 0;
			const match = CAPACITY_PATTERN.exec(trimmed);
			if (match === null) return NaN;
			const suffix = match[2]?.toLowerCase();
			const scale = suffix === "k" || suffix === "m" ? CAPACITY_SCALE[suffix] : 1;
			const scaled = Number(match[1]) * scale;
			const rounded = Math.round(scaled);
			return Math.abs(scaled - rounded) < 1e-6 ? rounded : scaled;
		}
		/**
		* Spell a stored count back in the shortest form that survives a round trip
		* through {@link parseCapacity}; a count that is not a whole number of
		* thousands stays written out.
		* @param value - stored capacity.
		* @returns the field text.
		*/
		function formatCapacity(value) {
			if (!Number.isInteger(value) || value <= 0) return String(value);
			if (value % CAPACITY_SCALE.m === 0) return `${String(value / CAPACITY_SCALE.m)}M`;
			if (value % CAPACITY_SCALE.k === 0) return `${String(value / CAPACITY_SCALE.k)}K`;
			return String(value);
		}
		/** Convert a schema-validated catalog value into records without dropping hidden fields. */
		function modelDrafts(value) {
			if (!Array.isArray(value)) return [];
			return value.map((entry) => typeof entry === "object" && entry !== null && !Array.isArray(entry) ? entry : {});
		}
		/** Canonical key order for one models[] row (plugin-known fields first). */
		const ROW_KEY_ORDER = [
			"id",
			"name",
			"contextWindow",
			"maxTokens",
			"input",
			"reasoningEfforts",
			"compat"
		];
		/** Canonical key order for the row's compat sub-object. */
		const COMPAT_KEY_ORDER = [
			"supportsDeveloperRole",
			"supportsReasoningEffort",
			"thinkingFormat"
		];
		/**
		* Re-key one model row into the canonical order (plugin-known fields in
		* order, unknown/future fields kept at the tail so nothing is dropped).
		* YAML emits keys in object insertion order, and interactive edits append
		* keys at the tail — without this, rows saved after quick-load or gated-key
		* removals come out with scrambled key orders (purely cosmetic, but noisy
		* in settings.yaml diffs).
		* @param row - the drafted row.
		* @returns the re-keyed row (shallow copy).
		*/
		function normalizeModelRow(row) {
			const next = {};
			for (const key of ROW_KEY_ORDER) if (key in row) next[key] = row[key];
			for (const key of Object.keys(row)) if (!ROW_KEY_ORDER.includes(key)) next[key] = row[key];
			const compat = next["compat"];
			if (typeof compat === "object" && compat !== null && !Array.isArray(compat)) {
				const source = compat;
				const normalized = {};
				for (const key of COMPAT_KEY_ORDER) if (key in source) normalized[key] = source[key];
				for (const key of Object.keys(source)) if (!COMPAT_KEY_ORDER.includes(key)) normalized[key] = source[key];
				next["compat"] = normalized;
			}
			return next;
		}
		/**
		* The message for a refused compat switch, shared by both provider cards so the
		* same failure reads the same way wherever it is hit.
		* @param failure - a `modelCompatNotOffered` failure from {@link validateModelRows}.
		* @returns the localised sentence.
		*/
		function compatFailureMessage(failure) {
			const offered = failure.offered ?? [];
			const available = offered.length === 0 ? "，该协议不接受任何可配置开关" : `，该协议可用：${offered.join("、")}`;
			return `模型 ${String(failure.index + 1)}：compat 开关 ${String(failure.field)} 不适用于当前协议（${String(failure.api)}）${available}。请在展开的「其他兼容开关」中清空该项以移除，或回到供应商页把协议改成端点真正使用的协议。`;
		}
		/**
		* Validate adapter constraints that the serialized schema cannot express.
		*
		* The compat half of the check exists because the adapter *refuses* a switch a
		* model's protocol does not declare rather than ignoring it — and the protocol
		* a row resolves to is `route.api` first, the installed catalog entry second.
		* A row can therefore hold switches that were legal when it was written (a
		* protocol change on the route, or a prefill taken from another protocol's
		* catalog entry) and only fail at save time, in English, from the host. This
		* turns that into a positioned, named, localised refusal.
		*
		* An unknown protocol is skipped on purpose: the route's protocol could not be
		* resolved, so the row's real one is unknowable here, and a guess would refuse
		* a configuration the host accepts. The host's own diagnostic still covers it.
		* @param value - user-owned `models` value, or undefined while inherited.
		* @param api - the protocol every row resolves to, when the route settles one.
		* @returns the first invalid row, or undefined when the adapter will accept it.
		*/
		function validateModelRows(value, api) {
			if (value === void 0) return void 0;
			const models = modelDrafts(value);
			const seen = /* @__PURE__ */ new Set();
			for (const [index, model] of models.entries()) {
				const id = model["id"];
				const trimmed = typeof id === "string" ? id.trim() : void 0;
				if (trimmed === void 0 || trimmed.length === 0) return {
					index,
					key: "modelIdRequired"
				};
				if (seen.has(trimmed)) return {
					index,
					key: "modelIdDuplicate"
				};
				seen.add(trimmed);
				const name = model["name"];
				if (name !== void 0 && (typeof name !== "string" || name.length === 0)) return {
					index,
					key: "modelNameInvalid"
				};
				const contextWindow = model["contextWindow"];
				if (contextWindow !== void 0 && (typeof contextWindow !== "number" || !Number.isInteger(contextWindow) || contextWindow <= 0)) return {
					index,
					key: "modelContextInvalid"
				};
				const maxTokens = model["maxTokens"];
				if (maxTokens !== void 0 && (typeof maxTokens !== "number" || !Number.isInteger(maxTokens) || maxTokens <= 0)) return {
					index,
					key: "modelMaxTokensInvalid"
				};
				const compat = model["compat"];
				if (api !== void 0 && typeof compat === "object" && compat !== null && !Array.isArray(compat)) for (const field of Object.keys(compat)) {
					if (protocolOffers(api, field)) continue;
					return {
						index,
						key: "modelCompatNotOffered",
						field,
						api,
						offered: offeredCompatFields(api)
					};
				}
			}
		}
		//#endregion
		//#region src/client/models-plus/presets.ts
		/**
		* Draft defaults for a NEW model row (added by hand or adopted from a fetch),
		* per the v1.0.0 plan: reasoning effort ON with every level declared, thinking
		* format `openai`, both input modalities checked. These are draft seeds that
		* land in settings.yaml when the row is saved — they are not inherited-state
		* sentinels, except `supportsDeveloperRole`, which stays UNWRITTEN (its
		* tri-state reads an absent key as checked, so only an explicit user uncheck
		* ever writes `false`).
		*
		* The compat half of the seed is PROTOCOL-DEPENDENT, and that is load-bearing:
		* `supportsReasoningEffort` and `thinkingFormat` belong to `openai-completions`
		* alone, and the adapter refuses a switch its protocol does not declare rather
		* than ignoring it. Seeding them onto an `anthropic-messages` route — which is
		* what a fixed vocabulary here did — made every hand-added model on such a
		* route fail the save over a switch the user never wrote. So the seed asks
		* {@link protocolOffers} first and writes nothing its protocol would refuse.
		* `reasoningEfforts` is unaffected: the levels travel through each protocol's
		* own thinking parameter, so every protocol takes them.
		*/
		/** The tri-state `compat.supportsDeveloperRole` seed: absent (reads checked). */
		const DEVELOPER_ROLE_SEED = {};
		/**
		* Draft seed for one new model row.
		*
		* An UNKNOWN protocol (no route-level `api`, and the installed catalog does not
		* describe the route) seeds no compat at all: nothing can say which switches
		* its endpoint would take, and a guessed `supportsReasoningEffort` on an
		* Anthropic-shaped route is refused rather than dropped. The levels stay seeded
		* — they are protocol-independent — so the row still opens with its effort
		* table populated.
		* @param api - the wire protocol this row will resolve to, when known.
		* @returns the draft row.
		*/
		function newModelDraft(api) {
			const compat = { ...DEVELOPER_ROLE_SEED };
			if (protocolOffers(api, "supportsReasoningEffort")) compat["supportsReasoningEffort"] = true;
			if (protocolOffers(api, "thinkingFormat")) compat["thinkingFormat"] = "openai";
			return {
				id: "",
				input: ["text", "image"],
				reasoningEfforts: {
					off: null,
					minimal: "minimal",
					low: "low",
					medium: "medium",
					high: "high",
					xhigh: "xhigh",
					max: "max"
				},
				...Object.keys(compat).length === 0 ? {} : { compat }
			};
		}
		//#endregion
		//#region src/client/models-plus/prefill.ts
		/**
		* Mapping pi-ai catalog values onto a Models+ row.
		*
		* The two sides describe the same thing, but two conventions differ in a way
		* that makes a straight copy wrong:
		*
		* 1. **`null` means the opposite in each.** pi-ai's `thinkingLevelMap[level]`
		*    is *unsupported* when null; our `reasoningEfforts[level]` is *supported,
		*    send nothing* when null (the adapter then drops the key entirely, and
		*    pi-ai reads an absent `off` key as "supported but send no parameter").
		*    Copying one across would invert the meaning for 338 of the catalog's
		*    models, so values are mapped rather than copied: a pi-ai `null` becomes
		*    "omit our key", and an absent pi-ai key becomes an explicit entry.
		* 2. **An absent base level has a protocol-specific default.** pi-ai resolves
		*    an absent `off`/`minimal`/`low`/`medium`/`high` by falling back to the
		*    level name — except on the Anthropic protocols, where `minimal` collapses
		*    onto `low`, and on Mistral, where every level resolves to `high`. Writing
		*    the level name there would send a spelling those providers never see.
		*
		* `xhigh` and `max` are the one pair pi-ai treats as unsupported when absent,
		* so they are only written when the catalog declares them.
		*
		* @module dsh-model-extension/prefill
		*/
		/** The seven levels, in pi-ai's escalation order. */
		const LEVELS = [
			"off",
			"minimal",
			"low",
			"medium",
			"high",
			"xhigh",
			"max"
		];
		/**
		* The wire spelling pi-ai falls back to for one absent base level, per
		* protocol. This mirrors the fallbacks inside pi-ai's own dispatch branches.
		* @param api - the model's wire protocol.
		* @param level - the level whose key was absent.
		* @returns the spelling pi-ai would send for that level.
		*/
		function defaultWireSpelling(api, level) {
			if (api === "anthropic-messages" || api === "bedrock-converse-stream") return level === "minimal" ? "low" : level;
			if (api === "mistral-conversations") return "high";
			return level;
		}
		/**
		* Convert a catalog `thinkingLevelMap` into our `reasoningEfforts` dict.
		*
		* A model that does not reason gets `false`. An outcome that offers nothing
		* beyond `off` also becomes `false`, because the adapter rejects a dict whose
		* only level is `off` — and the two describe the same request anyway.
		* @param levelMap - the catalog's map, when it carries one.
		* @param api - the model's wire protocol, which picks the fallback spellings.
		* @param reasoning - whether the model reasons at all.
		* @returns the dict to write into the row, or `false` for a non-reasoning model.
		*/
		function reasoningEffortsFrom(levelMap, api, reasoning) {
			if (!reasoning) return false;
			const map = levelMap ?? {};
			const efforts = {};
			for (const level of LEVELS) {
				if (!(level in map)) {
					if (level === "off") {
						efforts[level] = null;
						continue;
					}
					if (level === "xhigh" || level === "max") continue;
					efforts[level] = defaultWireSpelling(api, level);
					continue;
				}
				const wire = map[level];
				if (wire === null) continue;
				efforts[level] = wire;
			}
			return Object.keys(efforts).some((level) => level !== "off") ? efforts : false;
		}
		/**
		* Project a catalog `compat` block onto the switches the host offers for one
		* protocol.
		*
		* The filter is load-bearing twice over. It drops pi-ai's withheld switches
		* (routing preferences, session affinity, deferred tools, grammar tools), which
		* the adapter *refuses* rather than ignores — a verbatim copy would make the
		* route fail to resolve. And it filters by the protocol the row will be JUDGED
		* by, which is not always the catalog entry's own: a hand-declared route states
		* its `api`, that value overrides the catalog for every model on the route, and
		* a block taken from another protocol's entry (`supportsStore` on a gateway
		* that speaks `anthropic-messages`) is refused at save time.
		* @param compat - the catalog's compat record, when it carries one.
		* @param api - the protocol the row resolves to, as the adapter resolves it.
		* @returns the writable subset; empty when nothing survives.
		*/
		function compatFrom(compat, api) {
			const offered = offeredCompatFields(api);
			if (offered.length === 0 || compat === void 0) return {};
			const next = {};
			for (const field of offered) if (field in compat) next[field] = compat[field];
			return next;
		}
		//#endregion
		//#region src/client/models-plus/models-plus.module.css
		var models_plus_module_default = {
			"addActions": "J84-9a_addActions",
			"addBlock": "J84-9a_addBlock",
			"addButton": "J84-9a_addButton",
			"addCard": "J84-9a_addCard",
			"addModelButton": "J84-9a_addModelButton",
			"advancedHint": "J84-9a_advancedHint",
			"candidate": "J84-9a_candidate",
			"candidateEmpty": "J84-9a_candidateEmpty",
			"candidateId": "J84-9a_candidateId",
			"candidateLabel": "J84-9a_candidateLabel",
			"candidateList": "J84-9a_candidateList",
			"candidateSearch": "J84-9a_candidateSearch",
			"candidateToolbar": "J84-9a_candidateToolbar",
			"credentialDot": "J84-9a_credentialDot",
			"credentialDotConfigured": "J84-9a_credentialDotConfigured",
			"credentialDotMissing": "J84-9a_credentialDotMissing",
			"customizedSummary": "J84-9a_customizedSummary",
			"dangerButton": "J84-9a_dangerButton",
			"deleteConfirm": "J84-9a_deleteConfirm",
			"deleteDialog": "J84-9a_deleteDialog",
			"editor": "J84-9a_editor",
			"editorActions": "J84-9a_editorActions",
			"error": "J84-9a_error",
			"extBlock": "J84-9a_extBlock",
			"extCheck": "J84-9a_extCheck",
			"extCheckbox": "J84-9a_extCheckbox",
			"extCheckLabel": "J84-9a_extCheckLabel",
			"extField": "J84-9a_extField",
			"extGated": "J84-9a_extGated",
			"extGroup": "J84-9a_extGroup",
			"extGroupFirst": "J84-9a_extGroupFirst",
			"extHint": "J84-9a_extHint",
			"extLabel": "J84-9a_extLabel",
			"extTable": "J84-9a_extTable",
			"extTag": "J84-9a_extTag",
			"extTHead": "J84-9a_extTHead",
			"extTRow": "J84-9a_extTRow",
			"fetchDialog": "J84-9a_fetchDialog",
			"field": "J84-9a_field",
			"fieldLabel": "J84-9a_fieldLabel",
			"iconButton": "J84-9a_iconButton",
			"iconButtonDanger": "J84-9a_iconButtonDanger",
			"input": "J84-9a_input",
			"intro": "J84-9a_intro",
			"linkButton": "J84-9a_linkButton",
			"modal": "J84-9a_modal",
			"modalDesc": "J84-9a_modalDesc",
			"modalFoot": "J84-9a_modalFoot",
			"modalMask": "J84-9a_modalMask",
			"modalTitle": "J84-9a_modalTitle",
			"modelAdvanced": "J84-9a_modelAdvanced",
			"modelCatalog": "J84-9a_modelCatalog",
			"modelCatalogHeading": "J84-9a_modelCatalogHeading",
			"modelCatalogMeta": "J84-9a_modelCatalogMeta",
			"modelCatalogTitle": "J84-9a_modelCatalogTitle",
			"modelEmpty": "J84-9a_modelEmpty",
			"modelEntry": "J84-9a_modelEntry",
			"modelField": "J84-9a_modelField",
			"modelFieldLabel": "J84-9a_modelFieldLabel",
			"modelList": "J84-9a_modelList",
			"modelListHead": "J84-9a_modelListHead",
			"modelRow": "J84-9a_modelRow",
			"primaryButton": "J84-9a_primaryButton",
			"quickEmpty": "J84-9a_quickEmpty",
			"quickItem": "J84-9a_quickItem",
			"quickItemApi": "J84-9a_quickItemApi",
			"quickItemId": "J84-9a_quickItemId",
			"quickList": "J84-9a_quickList",
			"quickWrap": "J84-9a_quickWrap",
			"rowActions": "J84-9a_rowActions",
			"rowCard": "J84-9a_rowCard",
			"rowHead": "J84-9a_rowHead",
			"rowIdentity": "J84-9a_rowIdentity",
			"rowName": "J84-9a_rowName",
			"rows": "J84-9a_rows",
			"rowTag": "J84-9a_rowTag",
			"savedNotice": "J84-9a_savedNotice",
			"secondaryButton": "J84-9a_secondaryButton",
			"section": "J84-9a_section",
			"selectInput": "J84-9a_selectInput",
			"setupCard": "J84-9a_setupCard",
			"switchRow": "J84-9a_switchRow",
			"tabBar": "J84-9a_tabBar",
			"tabButton": "J84-9a_tabButton",
			"tabButtonActive": "J84-9a_tabButtonActive",
			"tabPanel": "J84-9a_tabPanel",
			"tabs": "J84-9a_tabs",
			"title": "J84-9a_title",
			"titleRow": "J84-9a_titleRow"
		};
		//#endregion
		//#region src/client/models-plus/QuickLoad.tsx
		/**
		* Quick-load: source → provider → model id, three narrowing steps.
		*
		* The single search box could not answer the question it raised. One model id
		* ships under a dozen providers (`glm-5.3-flash` exists in zai, opencode,
		* opencode-go, baseten, together, huggingface and two gateways), and each
		* provider's copy can carry different capacities and compat switches — so a
		* flat list of ten same-looking ids left the user to pick blind, or to decode
		* a suffix the plugin had appended for want of a better idea.
		*
		* Splitting the axis fixes it at the source: the user states *which catalog*
		* and *whose copy* first, and the id search then runs inside that slice.
		*
		* Both drop-downs are plugin-rendered rather than native. A `<datalist>` was
		* tried for the provider field and abandoned: the browser positions its popup
		* itself (it opened across unrelated fields) and none of it is themeable, so
		* it could not look like the list beside it. One `quickList` now serves both,
		* which also keeps only one popup on screen at a time.
		*/
		/** The two sources, in the order the picker offers them; pi-ai leads by default. */
		const SOURCES = [{
			id: "pi-ai",
			label: "llm-pi-ai"
		}, {
			id: "models.dev",
			label: "models.dev"
		}];
		/**
		* One line describing what the selected source currently offers, shown while
		* nothing is typed. The pi-ai version and snapshot date matter here: a DSH home
		* can hold more than one pi-ai copy, and knowing which one answered is the
		* difference between a diagnosis and a mystery.
		* @param index - the fetched index.
		* @param source - the selected source.
		* @returns the summary line.
		*/
		function sourceSummary(index, source) {
			if (source === "pi-ai") {
				if (index.piAi.length === 0) return index.piAiFailure === void 0 ? "pi-ai 目录不可用" : `pi-ai 目录不可用：${index.piAiFailure}`;
				const version = index.piAiVersion === void 0 ? "" : ` v${index.piAiVersion}`;
				const when = index.piAiGeneratedAt === void 0 ? "" : ` · ${index.piAiGeneratedAt.slice(0, 10)}`;
				return `pi-ai 目录${version}，${String(index.piAi.length)} 个模型${when}；选择提供方或输入 model id`;
			}
			if (index.modelsDev.length === 0) return "models.dev 元数据未下载——点击页首「下载/更新元数据」";
			return `models.dev，${String(index.modelsDev.length)} 条；选择提供方或输入 model id`;
		}
		/**
		* Render the three-step quick-load picker and its candidate list.
		* @param props - the pick handler and disabled flag.
		* @returns the quick-load block.
		*/
		function QuickLoad(props) {
			const [source, setSource] = (0, react.useState)("pi-ai");
			const [provider, setProvider] = (0, react.useState)("");
			const [text, setText] = (0, react.useState)("");
			const [panel, setPanel] = (0, react.useState)(null);
			const [index, setIndex] = (0, react.useState)(void 0);
			const textField = (0, react.useRef)(null);
			const ensureIndex = () => {
				getPrefillIndex().then((loaded) => {
					setIndex(loaded);
				});
			};
			const providers = providersOf(index, source);
			const chosenProvider = providers.includes(provider) ? provider : "";
			const { hits, total } = searchPrefill(index, {
				source,
				provider: chosenProvider,
				text
			});
			const pick = (entry) => {
				setPanel(null);
				setText(entry.id);
				props.onPick(entry);
			};
			const switchSource = (next) => {
				setSource(next);
				setProvider("");
				setText("");
				setPanel(null);
			};
			/**
			* Commit one provider choice and move straight on to the id field, so the
			* flow is pick → type rather than pick → click → type.
			* @param name - the provider to select; blank means "every provider".
			*/
			const chooseProvider = (name) => {
				setProvider(name);
				setText("");
				textField.current?.focus();
			};
			const providerBody = () => {
				if (index === void 0) return /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
					className: models_plus_module_default["quickEmpty"],
					children: "正在载入预填数据…"
				});
				const needle = provider.trim().toLowerCase();
				const matches = needle.length === 0 ? providers : providers.filter((name) => name.toLowerCase().includes(needle));
				if (providers.length === 0) return /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
					className: models_plus_module_default["quickEmpty"],
					children: "该数据源没有提供方信息"
				});
				return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(react_jsx_runtime.Fragment, { children: [
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
						type: "button",
						className: models_plus_module_default["quickItem"],
						onMouseDown: (event) => {
							event.preventDefault();
							chooseProvider("");
						},
						children: "全部（不限提供方）"
					}),
					matches.map((name) => /* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
						type: "button",
						className: models_plus_module_default["quickItem"],
						onMouseDown: (event) => {
							event.preventDefault();
							chooseProvider(name);
						},
						children: name
					}, name)),
					matches.length === 0 ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
						className: models_plus_module_default["quickEmpty"],
						children: "没有匹配的提供方"
					}) : null
				] });
			};
			const modelBody = () => {
				if (index === void 0) return /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
					className: models_plus_module_default["quickEmpty"],
					children: "正在载入预填数据…"
				});
				if (chosenProvider.length === 0 && text.trim().length === 0) return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(react_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
					className: models_plus_module_default["quickEmpty"],
					children: sourceSummary(index, source)
				}), source === "pi-ai" && index.piAiWarnings.length > 0 ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
					className: models_plus_module_default["error"],
					children: index.piAiWarnings.join("；")
				}) : null] });
				if (hits.length === 0) return /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
					className: models_plus_module_default["quickEmpty"],
					children: "没有匹配的模型"
				});
				return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(react_jsx_runtime.Fragment, { children: [hits.map((entry) => /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("button", {
					type: "button",
					className: models_plus_module_default["quickItem"],
					onMouseDown: (event) => {
						event.preventDefault();
						pick(entry);
					},
					children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
						className: models_plus_module_default["quickItemId"],
						children: entry.id
					}), entry.api === void 0 ? null : /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
						className: models_plus_module_default["quickItemApi"],
						children: entry.api
					})]
				}, entry.key)), total > hits.length ? /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("span", {
					className: models_plus_module_default["quickEmpty"],
					children: [
						"另有 ",
						total - hits.length,
						" 项匹配——继续输入或选定提供方以缩小范围"
					]
				}) : null] });
			};
			return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
				className: models_plus_module_default["quickWrap"],
				children: [
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
						className: models_plus_module_default["extLabel"],
						children: "快速装入"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
						style: {
							display: "flex",
							gap: 6,
							alignItems: "center"
						},
						children: [
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("select", {
								className: `${models_plus_module_default["input"]} ${models_plus_module_default["selectInput"]}`,
								style: {
									flex: "0 0 108px",
									minWidth: 0
								},
								value: source,
								disabled: props.disabled,
								"aria-label": "数据源",
								onChange: (event) => {
									switchSource(event.target.value);
								},
								children: SOURCES.map((option) => /* @__PURE__ */ (0, react_jsx_runtime.jsx)("option", {
									value: option.id,
									children: option.label
								}, option.id))
							}),
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("input", {
								className: models_plus_module_default["input"],
								style: {
									flex: "0 0 132px",
									minWidth: 0
								},
								type: "text",
								value: provider,
								placeholder: "提供方：全部",
								"aria-label": "提供方",
								autoComplete: "off",
								disabled: props.disabled,
								onFocus: () => {
									ensureIndex();
									setPanel("provider");
								},
								onBlur: () => {
									setPanel(null);
								},
								onChange: (event) => {
									setProvider(event.target.value);
									setPanel("provider");
								}
							}),
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("input", {
								className: models_plus_module_default["input"],
								style: {
									flex: "1 1 auto",
									minWidth: 0
								},
								type: "text",
								ref: textField,
								value: text,
								placeholder: "model id（如 glm）…",
								"aria-label": "model id",
								autoComplete: "off",
								disabled: props.disabled,
								onFocus: () => {
									ensureIndex();
									setPanel("model");
								},
								onBlur: () => {
									setPanel(null);
								},
								onChange: (event) => {
									setText(event.target.value);
									setPanel("model");
								}
							})
						]
					}),
					panel === "provider" ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
						className: models_plus_module_default["quickList"],
						children: providerBody()
					}) : null,
					panel === "model" ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
						className: models_plus_module_default["quickList"],
						children: modelBody()
					}) : null
				]
			});
		}
		//#endregion
		//#region src/client/models-plus/ModelEntryPanel.tsx
		/**
		* One model entry's expanded panel: quick-load, capacities (the official
		* modelAdvanced fields, merged into this block per the v1.0.0 design), input
		* modalities, the developer-role tri-state, the reasoning-effort gate and its
		* gated area (thinking format, then the seven-level effort table).
		*
		* Every edit patches the row's draft object through `onChange` — persistence
		* rides the card's existing path-ops save with no extra wire calls. Clearing
		* the effort gate drops `reasoningEfforts` AND `compat.thinkingFormat` in ONE
		* commit so partial updates never overwrite each other (no orphan settings).
		*
		* Which compat switches this panel may write at all is decided by `api` (see
		* {@link ModelEntryPanelProps.api}): the adapter refuses a switch the model's
		* protocol does not declare instead of ignoring it, so a control offered on the
		* wrong protocol is a save that cannot succeed. An UNKNOWN protocol hides
		* nothing — nothing can be judged — and the host's own diagnostic still covers
		* that case.
		*/
		/**
		* Whether a draft field is absent or whitespace-only.
		* @param value - the field's current value.
		* @returns true when the field carries nothing worth keeping.
		*/
		function isBlank(value) {
			if (value === void 0 || value === null) return true;
			return typeof value === "string" && value.trim().length === 0;
		}
		/** The row's compat sub-object as a plain record (absent → empty). */
		function compatOf(model) {
			const value = model["compat"];
			return typeof value === "object" && value !== null && !Array.isArray(value) ? value : {};
		}
		/** The row's reasoningEfforts dict (absent/invalid → undefined = not declared). */
		function effortsOf(model) {
			const value = model["reasoningEfforts"];
			if (typeof value !== "object" || value === null || Array.isArray(value)) return void 0;
			return value;
		}
		/** The row's input modality list (absent → empty, matching the host reader). */
		function inputsOf(model) {
			const value = model["input"];
			return Array.isArray(value) ? value.filter((m) => typeof m === "string") : [];
		}
		/**
		* Render one model entry's expanded panel.
		* @param props - the row draft, its writer, and the disabled flag.
		* @returns the expanded panel.
		*/
		function ModelEntryPanel(props) {
			const { model, onChange, disabled, api } = props;
			/**
			* Whether this panel may OFFER a control for one compat switch.
			*
			* Not the same question as `protocolOffers`, and deliberately so: an
			* unresolvable protocol answers `true` throughout, because with no protocol to
			* read nothing can be judged — hiding a control on a guess would remove a
			* switch the route may well take, while the host still names anything it
			* refuses. A resolved protocol that offers nothing (one pi-ai gives no compat
			* type) answers `false` throughout, which is exactly what the adapter says.
			*/
			const mayOffer = (field) => api === void 0 || offeredCompatFields(api).includes(field);
			const [capacityText, setCapacityText] = (0, react.useState)(() => /* @__PURE__ */ new Map());
			/** Patch one key onto the row; `undefined` clears it. */
			const setKey = (key, value) => {
				const next = { ...model };
				if (value === void 0) Reflect.deleteProperty(next, key);
				else next[key] = value;
				onChange(next);
			};
			/** Patch one key inside `compat`; an emptied compat leaves no trace. */
			const setCompatKey = (key, value) => {
				const compat = { ...compatOf(model) };
				if (value === void 0) Reflect.deleteProperty(compat, key);
				else compat[key] = value;
				setKey("compat", Object.keys(compat).length === 0 ? void 0 : compat);
			};
			const setEfforts = (efforts) => {
				setKey("reasoningEfforts", efforts);
			};
			const setInput = (modalities) => {
				setKey("input", modalities.length === 0 ? void 0 : [...modalities]);
			};
			/**
			* Apply one prefill candidate.
			*
			* Every value is *restated* from the picked source rather than merged into
			* whatever was already there: capacities, modalities, reasoning levels and
			* compat are replaced wholesale. A prefill answers "what does this catalog
			* say about the model", so an absent field clears — leaving another source's
			* value behind would describe a model neither catalog claims, and switching
			* sources then re-picking is meant to be a clean rewrite.
			*
			* Two things do not follow that rule. `id` and `name` are filled only into a
			* blank row, because a catalog id is the request id for the vendor's *own*
			* endpoint while behind a gateway the string on the wire is often different.
			* And pi-ai's level map is *mapped* rather than copied, because `null` means
			* the opposite on each side.
			* @param entry - the picked candidate.
			*/
			const applyMetadata = (entry) => {
				const next = { ...model };
				const judgedBy = props.api ?? entry.api;
				if (entry.context === void 0) Reflect.deleteProperty(next, "contextWindow");
				else next["contextWindow"] = entry.context;
				if (entry.output === void 0) Reflect.deleteProperty(next, "maxTokens");
				else next["maxTokens"] = entry.output;
				const modality = entry.input.filter((m) => m === "text" || m === "image");
				if (modality.length > 0) next["input"] = modality;
				else Reflect.deleteProperty(next, "input");
				if (entry.source === "pi-ai") {
					if (isBlank(next["id"])) next["id"] = entry.id;
					if (isBlank(next["name"]) && entry.name !== void 0) next["name"] = entry.name;
					next["reasoningEfforts"] = reasoningEffortsFrom(entry.thinkingLevelMap, judgedBy, entry.reasoning);
					const compat = compatFrom(entry.compat, judgedBy);
					if (Object.keys(compat).length === 0) Reflect.deleteProperty(next, "compat");
					else next["compat"] = compat;
				} else {
					Reflect.deleteProperty(next, "reasoningEfforts");
					if (entry.reasoning && mayOffer("supportsReasoningEffort")) next["compat"] = { supportsReasoningEffort: true };
					else Reflect.deleteProperty(next, "compat");
				}
				onChange(next);
				setCapacityText(/* @__PURE__ */ new Map());
			};
			const capacityField = (field, label) => {
				const stored = model[field];
				const text = capacityText.get(field) ?? (typeof stored === "number" ? formatCapacity(stored) : "");
				return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("label", {
					className: models_plus_module_default["modelField"],
					children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
						className: models_plus_module_default["modelFieldLabel"],
						children: label
					}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("input", {
						className: models_plus_module_default["input"],
						type: "text",
						inputMode: "numeric",
						value: text,
						placeholder: "使用提供方默认值",
						"aria-label": label,
						disabled,
						onChange: (event) => {
							setCapacityText((current) => new Map(current).set(field, event.target.value));
							setKey(field, parseCapacity(event.target.value));
						},
						onBlur: () => {
							const raw = capacityText.get(field);
							if (raw === void 0) return;
							const parsed = parseCapacity(raw);
							if (parsed !== void 0 && Number.isNaN(parsed)) return;
							setCapacityText((current) => {
								const next = new Map(current);
								next.delete(field);
								return next;
							});
						}
					})]
				});
			};
			const compat = compatOf(model);
			const developerRole = compat["supportsDeveloperRole"] !== false;
			/**
			* Switches a prefill wrote that no control above stands for. Listing them
			* keeps a prefilled value from becoming invisible state: the pi-ai catalog
			* records far more of the compat surface than this panel models explicitly,
			* and that API refuses an unknown switch rather than ignoring it — so a value
			* the user cannot see is a value the user cannot fix.
			*
			* The set is the panel's base list narrowed to what this protocol takes. A
			* switch the protocol refuses keeps NO control — writing it would fail the
			* save — so it lands here instead, where it is named as refused and can be
			* cleared. That is the only way out of a row written before a protocol change
			* on the route, which no amount of hiding would repair.
			*/
			const dedicated = COMPAT_BASE_FIELDS.filter((field) => mayOffer(field));
			const extraCompat = Object.entries(compat).filter(([key]) => !dedicated.includes(key)).sort(([a], [b]) => a.localeCompare(b));
			/**
			* Read an edited switch back as the type it already had.
			* @param previous - the value the switch carried when rendered.
			* @param raw - the field text.
			* @returns the coerced value, or the previous one when the text is unreadable.
			*/
			const readCompatValue = (previous, raw) => {
				if (typeof previous === "boolean") return raw === "true";
				if (typeof previous === "number") {
					const parsed = Number(raw);
					return Number.isNaN(parsed) ? previous : parsed;
				}
				if (typeof previous === "string") return raw;
				try {
					return JSON.parse(raw);
				} catch {
					return previous;
				}
			};
			/**
			* The switch as a wire field: whether the endpoint takes `reasoning_effort`.
			*
			* Gated on the protocol as well as on the stored value: on a protocol that
			* does not take the switch a leftover `true` describes nothing this route can
			* act on, and the field's real home is the refused-switch list below.
			*/
			const gateOn = mayOffer("supportsReasoningEffort") && compat["supportsReasoningEffort"] === true;
			const efforts = effortsOf(model);
			/**
			* Whether the reasoning area is worth showing.
			*
			* The switch and the area answer different questions: the switch tells the
			* adapter the endpoint accepts `reasoning_effort`, while the area edits what
			* *this model* offers. A pi-ai prefill can leave the switch unset on purpose
			* — an absent key lets the adapter auto-detect from the endpoint — while
			* still carrying levels worth editing, and those levels reach the provider
			* through the protocol's own thinking parameter either way. So the area keys
			* off either signal, not the switch alone.
			*/
			const reasoningAreaShown = gateOn || efforts !== void 0 || mayOffer("thinkingFormat") && compat["thinkingFormat"] !== void 0;
			const toggleGate = (checked) => {
				if (checked) {
					setCompatKey("supportsReasoningEffort", true);
					return;
				}
				const nextCompat = { ...compat };
				Reflect.deleteProperty(nextCompat, "supportsReasoningEffort");
				Reflect.deleteProperty(nextCompat, "thinkingFormat");
				const next = {
					...model,
					compat: Object.keys(nextCompat).length === 0 ? void 0 : nextCompat
				};
				Reflect.deleteProperty(next, "reasoningEfforts");
				onChange(next);
			};
			const toggleLevel = (level, checked) => {
				const current = { ...efforts ?? {} };
				if (checked) current[level] = level === "off" ? null : level;
				else Reflect.deleteProperty(current, level);
				setEfforts(Object.keys(current).length === 0 ? void 0 : current);
			};
			const setWireValue = (level, text) => {
				if (efforts === void 0 || !(level in efforts)) return;
				const current = { ...efforts };
				current[level] = text.trim().length === 0 ? null : text.trim();
				setEfforts(current);
			};
			const declaredLevels = efforts === void 0 ? [] : THINKING_LEVELS.filter((level) => level in efforts);
			const hasEmptyWire = declaredLevels.some((level) => level !== "off" && String(efforts?.[level] ?? "").trim().length === 0);
			const onlyOffDeclared = efforts !== void 0 && declaredLevels.length > 0 && !declaredLevels.some((level) => level !== "off");
			const inputList = inputsOf(model);
			const toggleModality = (modality, checked) => {
				const base = inputList.length === 0 && model["input"] === void 0 ? ["text"] : [...inputList];
				setInput(checked ? [.../* @__PURE__ */ new Set([...base, modality])] : base.filter((m) => m !== modality));
			};
			return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
				className: models_plus_module_default["extBlock"],
				children: [
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
						className: `${models_plus_module_default["extGroup"]} ${models_plus_module_default["extGroupFirst"]}`,
						children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(QuickLoad, {
							onPick: applyMetadata,
							disabled
						})
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
						className: models_plus_module_default["extGroup"],
						children: /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
							className: models_plus_module_default["modelField"],
							style: { padding: "0 4px" },
							children: [capacityField("contextWindow", "上下文窗口"), capacityField("maxTokens", "最大输出 token")]
						})
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
						className: models_plus_module_default["extGroup"],
						children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
							className: models_plus_module_default["extLabel"],
							style: { marginBottom: 6 },
							children: "输入模态"
						}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
							style: {
								display: "flex",
								gap: 18
							},
							children: ["text", "image"].map((modality) => /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("label", {
								className: models_plus_module_default["switchRow"],
								children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("input", {
									type: "checkbox",
									className: models_plus_module_default["extCheckbox"],
									checked: inputList.includes(modality),
									disabled,
									onChange: (event) => {
										toggleModality(modality, event.target.checked);
									}
								}), modality === "text" ? "文本" : "图像"]
							}, modality))
						})]
					}),
					mayOffer("supportsDeveloperRole") ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
						className: models_plus_module_default["extGroup"],
						children: /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("label", {
							className: models_plus_module_default["extCheck"],
							children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("input", {
								type: "checkbox",
								className: models_plus_module_default["extCheckbox"],
								style: { marginTop: 3 },
								checked: developerRole,
								disabled,
								onChange: (event) => {
									setCompatKey("supportsDeveloperRole", event.target.checked ? void 0 : false);
								}
							}), /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("span", {
								style: {
									display: "flex",
									flexDirection: "column",
									gap: 2
								},
								children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
									className: models_plus_module_default["extCheckLabel"],
									children: "允许以 developer 角色发送系统提示"
								}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
									className: models_plus_module_default["extHint"],
									children: "推理模型的系统提示将以 developer 角色发出；网关拒绝该角色时取消勾选，改用 system。"
								})]
							})]
						})
					}) : null,
					/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
						className: models_plus_module_default["extGroup"],
						children: [mayOffer("supportsReasoningEffort") ? /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("label", {
							className: models_plus_module_default["switchRow"],
							children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("input", {
								type: "checkbox",
								className: models_plus_module_default["extCheckbox"],
								checked: gateOn,
								disabled,
								onChange: (event) => {
									toggleGate(event.target.checked);
								}
							}), "端点接受推理挡位参数（reasoning_effort）"]
						}) : /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("p", {
							className: models_plus_module_default["extHint"],
							children: [
								"当前协议（",
								String(api),
								"）不接受 reasoning_effort 开关，故此处不提供；下面的挡位仍通过该协议自身的 thinking 参数生效。"
							]
						}), mayOffer("supportsReasoningEffort") && !gateOn && reasoningAreaShown ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
							className: models_plus_module_default["extHint"],
							style: { marginTop: 6 },
							children: "此项未设置：由 llm-pi-ai 按其 baseURL 检测结果决定是否发送 reasoning_effort； 下面的挡位不受影响，仍通过各协议自己的 thinking 参数生效。"
						}) : null]
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
						className: models_plus_module_default["extGated"],
						hidden: !reasoningAreaShown,
						children: [mayOffer("thinkingFormat") ? /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
							className: models_plus_module_default["extField"],
							children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
								className: models_plus_module_default["extLabel"],
								children: "思考格式"
							}), /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("select", {
								className: `${models_plus_module_default["input"]} ${models_plus_module_default["selectInput"]}`,
								value: typeof compat["thinkingFormat"] === "string" ? compat["thinkingFormat"] : "",
								disabled,
								onChange: (event) => {
									setCompatKey("thinkingFormat", event.target.value === "" ? void 0 : event.target.value);
								},
								children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("option", {
									value: "",
									children: "—"
								}), THINKING_FORMATS.map((format) => /* @__PURE__ */ (0, react_jsx_runtime.jsx)("option", {
									value: format,
									children: format
								}, format))]
							})]
						}) : null, /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
							className: models_plus_module_default["extField"],
							children: [
								/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
									className: models_plus_module_default["extLabel"],
									children: "推理挡位"
								}),
								/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
									className: models_plus_module_default["extTable"],
									children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
										className: models_plus_module_default["extTHead"],
										children: [
											/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", { children: "声明" }),
											/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", { children: "挡位" }),
											/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", { children: "线上取值" })
										]
									}), THINKING_LEVELS.map((level) => {
										const declared = efforts !== void 0 && level in efforts;
										const isOff = level === "off";
										const wire = declared ? String(efforts?.[level] ?? "") : "";
										return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
											className: models_plus_module_default["extTRow"],
											children: [
												/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
													style: {
														display: "flex",
														justifyContent: "center"
													},
													children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("input", {
														type: "checkbox",
														className: models_plus_module_default["extCheckbox"],
														checked: declared,
														disabled,
														"aria-label": `声明 ${level}`,
														onChange: (event) => {
															toggleLevel(level, event.target.checked);
														}
													})
												}),
												/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
													style: { opacity: declared ? 1 : .5 },
													children: level
												}),
												/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
													style: { opacity: declared ? 1 : .4 },
													children: declared && !isOff ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)("input", {
														type: "text",
														value: wire,
														placeholder: level,
														"aria-label": `${level} 线上取值`,
														disabled,
														onChange: (event) => {
															setWireValue(level, event.target.value);
														}
													}) : /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
														style: {
															fontSize: 12,
															color: "var(--dsw-alias-label-tertiary)"
														},
														children: "—"
													})
												})
											]
										}, level);
									})]
								}),
								hasEmptyWire || onlyOffDeclared ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
									className: models_plus_module_default["error"],
									style: { marginTop: 6 },
									children: hasEmptyWire ? "除 off 外勾选的挡位必须填写线上取值。" : "至少声明一个 off 以外的挡位。"
								}) : null
							]
						})]
					}),
					extraCompat.length > 0 ? /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
						className: models_plus_module_default["extGroup"],
						children: [
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
								className: models_plus_module_default["extLabel"],
								style: { marginBottom: 6 },
								children: "其他兼容开关"
							}),
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
								style: {
									display: "flex",
									flexDirection: "column",
									gap: 6
								},
								children: extraCompat.map(([key, value]) => {
									const refused = !mayOffer(key);
									return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("label", {
										style: {
											display: "flex",
											flexDirection: "column",
											gap: 2
										},
										children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
											className: refused ? models_plus_module_default["error"] : models_plus_module_default["extHint"],
											children: refused ? `${key} —— 当前协议（${String(api)}）不接受此开关，请清空输入框以移除` : key
										}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("input", {
											className: models_plus_module_default["input"],
											type: "text",
											defaultValue: typeof value === "string" ? value : JSON.stringify(value) ?? "",
											"aria-label": key,
											disabled,
											onBlur: (event) => {
												const raw = event.target.value.trim();
												setCompatKey(key, raw.length === 0 ? void 0 : readCompatValue(value, raw));
											}
										})]
									}, key);
								})
							}),
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
								className: models_plus_module_default["extHint"],
								style: { marginTop: 6 },
								children: "这些开关由 pi-ai 目录预填；清空输入框即移除该开关，回到目录默认。"
							})
						]
					}) : null
				]
			});
		}
		//#endregion
		//#region src/client/models-plus/ModelCatalog.tsx
		/**
		* One provider profile's model catalog: rows joined from the draft's `models`
		* array, the fetch action (interrogating the endpoint the form currently
		* shows), and the candidate-picker modal. Each row's expanded panel is the
		* plugin's ModelEntryPanel — capacities and extension fields in one block.
		*/
		/** A row's text field, or the empty string when unset or not a string. */
		function textOf(model, key) {
			const value = model[key];
			return typeof value === "string" ? value : "";
		}
		/** Adopt one candidate, v1.0.0 defaults + the endpoint's disclosed capacities. */
		function adopt(candidate, routeApi) {
			const row = newModelDraft(routeApi);
			row["id"] = candidate.id;
			row["name"] = candidate.name ?? candidate.id;
			if (candidate.contextWindow !== void 0) row["contextWindow"] = candidate.contextWindow;
			if (candidate.maxTokens !== void 0) row["maxTokens"] = candidate.maxTokens;
			return row;
		}
		/**
		* Render the model catalog with its fetch action.
		* @param props - the drafted rows, probe target, wire face, and mutators.
		* @returns the catalog editor.
		*/
		function ModelCatalog(props) {
			const { models, onChange, probe, operations, disabled } = props;
			const [busy, setBusy] = (0, react.useState)(false);
			const [failure, setFailure] = (0, react.useState)(void 0);
			const [candidates, setCandidates] = (0, react.useState)(void 0);
			const [picked, setPicked] = (0, react.useState)(() => /* @__PURE__ */ new Set());
			const [query, setQuery] = (0, react.useState)("");
			const [expanded, setExpanded] = (0, react.useState)(() => /* @__PURE__ */ new Set());
			const patch = (index, next) => {
				onChange(models.map((model, at) => {
					if (at !== index) return model;
					const cleared = new Set(Object.entries(next).filter(([, value]) => value === void 0 || value === "").map(([key]) => key));
					return Object.fromEntries(Object.entries({
						...model,
						...next
					}).filter(([key]) => !cleared.has(key)));
				}));
			};
			const toggleExpanded = (index) => {
				setExpanded((current) => {
					const next = new Set(current);
					if (!next.delete(index)) next.add(index);
					return next;
				});
			};
			const removeRow = (index) => {
				onChange(models.filter((_model, at) => at !== index));
				setExpanded((current) => {
					const next = /* @__PURE__ */ new Set();
					for (const at of current) if (at < index) next.add(at);
					else if (at > index) next.add(at - 1);
					return next;
				});
			};
			const fetchModels = async () => {
				setBusy(true);
				setFailure(void 0);
				try {
					const answer = await operations.discoverModels(probe.settingsNs, {
						...probe.provider === void 0 ? {} : { provider: probe.provider },
						...probe.baseURL === void 0 || probe.baseURL.length === 0 ? {} : { baseURL: probe.baseURL },
						...probe.api === void 0 ? {} : { api: probe.api },
						...probe.apiKey === void 0 ? {} : { apiKey: probe.apiKey }
					});
					if (answer.kind === "refused") {
						setFailure(answer.message);
						return;
					}
					const found = answer.models;
					if (found.length === 0) {
						setFailure("该提供方没有列出任何模型，请手动添加。");
						return;
					}
					const known = new Set(models.map((model) => textOf(model, "id")));
					setQuery("");
					setCandidates(found);
					setPicked(new Set(found.filter((model) => !known.has(model.id)).map((model) => model.id)));
				} finally {
					setBusy(false);
				}
			};
			const closePicker = () => {
				setCandidates(void 0);
				setPicked(/* @__PURE__ */ new Set());
				setQuery("");
			};
			const adoptPicked = () => {
				if (candidates === void 0) return;
				const byId = new Map(models.map((model) => [textOf(model, "id"), model]));
				for (const candidate of candidates) {
					if (!picked.has(candidate.id)) continue;
					byId.set(candidate.id, byId.get(candidate.id) ?? adopt(candidate, props.routeApi));
				}
				onChange([...byId.values()]);
				closePicker();
			};
			const toggle = (id) => {
				setPicked((current) => {
					const next = new Set(current);
					if (!next.delete(id)) next.add(id);
					return next;
				});
			};
			const activeCandidates = candidates ?? [];
			const needle = query.trim().toLowerCase();
			const visible = needle.length === 0 ? activeCandidates : activeCandidates.filter((candidate) => candidate.id.toLowerCase().includes(needle));
			const allPicked = visible.length > 0 && visible.every((candidate) => picked.has(candidate.id));
			const askable = probe.provider !== void 0 || probe.baseURL !== void 0 && probe.baseURL.length > 0;
			return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("section", {
				className: models_plus_module_default["modelCatalog"],
				"aria-label": "模型目录",
				children: [
					/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
						className: models_plus_module_default["modelListHead"],
						children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
							className: models_plus_module_default["modelCatalogHeading"],
							children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
								className: models_plus_module_default["modelCatalogTitle"],
								children: "模型目录"
							}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
								className: models_plus_module_default["modelCatalogMeta"],
								children: props.overridden ? "已自定义模型目录" : "正在使用适配器默认模型"
							})]
						}), /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
							style: {
								display: "flex",
								alignItems: "center",
								gap: 4
							},
							children: [props.overridden && props.onReset !== void 0 ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
								type: "button",
								className: models_plus_module_default["linkButton"],
								disabled,
								onClick: props.onReset,
								children: "恢复默认模型"
							}) : null, props.hideFetch === true ? null : /* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
								type: "button",
								className: models_plus_module_default["linkButton"],
								disabled: disabled || busy || !askable || props.probeBlocked !== void 0,
								title: props.probeBlocked !== void 0 ? props.probeBlocked : askable ? void 0 : "请先填写 API 地址，再获取。",
								onClick: () => {
									fetchModels();
								},
								children: busy ? "正在询问提供方…" : "获取可用模型"
							})]
						})]
					}),
					models.length === 0 ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
						className: models_plus_module_default["modelEmpty"],
						children: "模型选择器中将不显示任何模型；目录外 ID 仍可直接发送。"
					}) : /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
						className: models_plus_module_default["modelList"],
						children: models.map((model, index) => /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
							className: models_plus_module_default["modelEntry"],
							children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
								className: models_plus_module_default["modelRow"],
								children: [
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)("input", {
										className: models_plus_module_default["input"],
										type: "text",
										value: textOf(model, "id"),
										placeholder: "模型 ID",
										"aria-label": `模型 ID ${String(index + 1)}`,
										disabled,
										onChange: (event) => {
											patch(index, { id: event.target.value });
										}
									}),
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)("input", {
										className: models_plus_module_default["input"],
										type: "text",
										value: textOf(model, "name"),
										placeholder: "显示名称",
										"aria-label": `显示名称 ${String(index + 1)}`,
										disabled,
										onChange: (event) => {
											patch(index, { name: event.target.value === "" ? void 0 : event.target.value });
										}
									}),
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
										type: "button",
										className: models_plus_module_default["iconButton"],
										"aria-label": `容量 ${String(index + 1)}`,
										"aria-expanded": expanded.has(index),
										title: "容量",
										onClick: () => {
											toggleExpanded(index);
										},
										children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("svg", {
											width: "14",
											height: "14",
											viewBox: "0 0 16 16",
											fill: "none",
											"aria-hidden": "true",
											style: {
												transform: expanded.has(index) ? "rotate(90deg)" : void 0,
												transition: "transform 120ms ease"
											},
											children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
												d: "M6 3.5L10.5 8L6 12.5",
												stroke: "currentColor",
												strokeWidth: "1.5",
												strokeLinecap: "round",
												strokeLinejoin: "round"
											})
										})
									}),
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
										type: "button",
										className: `${models_plus_module_default["iconButton"]} ${models_plus_module_default["iconButtonDanger"]}`,
										"aria-label": `删除模型 ${String(index + 1)}`,
										title: "删除模型",
										disabled,
										onClick: () => {
											removeRow(index);
										},
										children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("svg", {
											width: "14",
											height: "14",
											viewBox: "0 0 16 16",
											fill: "none",
											"aria-hidden": "true",
											children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
												d: "M2.5 4h11M6.5 4V2.5h3V4M4 4l.7 9a1 1 0 001 .9h4.6a1 1 0 001-.9L12 4M6.5 6.8v4.4M9.5 6.8v4.4",
												stroke: "currentColor",
												strokeWidth: "1.3",
												strokeLinecap: "round",
												strokeLinejoin: "round"
											})
										})
									})
								]
							}), expanded.has(index) ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)(ModelEntryPanel, {
								model,
								api: props.routeApi,
								disabled,
								onChange: (next) => {
									onChange(models.map((row, at) => at === index ? next : row));
								}
							}) : null]
						}, String(index)))
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("button", {
						type: "button",
						className: models_plus_module_default["addModelButton"],
						disabled,
						onClick: () => {
							onChange([...models, newModelDraft(props.routeApi)]);
						},
						children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("svg", {
							width: "14",
							height: "14",
							viewBox: "0 0 16 16",
							fill: "none",
							"aria-hidden": "true",
							children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
								d: "M8 3.5v9M3.5 8h9",
								stroke: "currentColor",
								strokeWidth: "1.5",
								strokeLinecap: "round"
							})
						}), "添加模型"]
					}),
					failure !== void 0 ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
						className: models_plus_module_default["error"],
						children: failure
					}) : null,
					/* @__PURE__ */ (0, react_jsx_runtime.jsxs)(_deepseek_ai_dsh_client_ui_primitives.Modal, {
						open: candidates !== void 0,
						onClose: closePicker,
						title: "选择要添加的模型",
						closeLabel: "关闭",
						description: "以下是模型提供方的可用模型，勾选要添加的模型。",
						className: models_plus_module_default["fetchDialog"],
						footer: /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(react_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
							type: "button",
							className: models_plus_module_default["secondaryButton"],
							onClick: closePicker,
							children: "取消"
						}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
							type: "button",
							className: models_plus_module_default["primaryButton"],
							onClick: adoptPicked,
							children: "添加所选"
						})] }),
						children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
							className: models_plus_module_default["candidateToolbar"],
							children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("input", {
								className: `${models_plus_module_default["input"]} ${models_plus_module_default["candidateSearch"]}`,
								type: "search",
								value: query,
								placeholder: "搜索模型",
								"aria-label": "搜索模型",
								onChange: (event) => {
									setQuery(event.target.value);
								}
							}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
								type: "button",
								className: models_plus_module_default["linkButton"],
								disabled: visible.length === 0,
								onClick: () => {
									setPicked((current) => {
										if (visible.every((candidate) => current.has(candidate.id))) return new Set([...current].filter((id) => !visible.some((candidate) => candidate.id === id)));
										return /* @__PURE__ */ new Set([...current, ...visible.map((candidate) => candidate.id)]);
									});
								},
								children: allPicked ? "取消全选" : "全选"
							})]
						}), visible.length === 0 ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
							className: models_plus_module_default["candidateEmpty"],
							role: "status",
							children: "没有匹配的模型。"
						}) : /* @__PURE__ */ (0, react_jsx_runtime.jsx)("ul", {
							className: models_plus_module_default["candidateList"],
							children: visible.map((candidate) => /* @__PURE__ */ (0, react_jsx_runtime.jsx)("li", {
								className: models_plus_module_default["candidate"],
								children: /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("label", {
									className: models_plus_module_default["candidateLabel"],
									children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("input", {
										type: "checkbox",
										checked: picked.has(candidate.id),
										onChange: () => {
											toggle(candidate.id);
										}
									}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
										className: models_plus_module_default["candidateId"],
										children: candidate.id
									})]
								})
							}, candidate.id))
						})]
					})
				]
			});
		}
		//#endregion
		//#region src/client/models-plus/ProviderEditor.tsx
		/**
		* One existing provider's editor card, fully plugin-owned (v1.0.0 rewrite).
		* Primary field: a single write-only API key input; the collapsed
		* 「供应商」 section carries baseURL (plus displayName/protocol for a
		* hand-declared route), the 「模型」 section the model catalog with the
		* extension panel. Save semantics mirror the host card: minimal path ops
		* against the stored section with a revision fence, then the credential
		* write — the draft comes from the user layer, so a wholesale replace can
		* never delete fields outside the card.
		*/
		/** The official DeepSeek roots, chosen by the profile's resolved protocol.
		* Host @ 0.1.6-alpha.2 kept both keys (deepSeekChatBaseUrl / deepSeekMessagesBaseUrl)
		* with Messages as the default; @ 0.1.7-alpha.1 it collapsed to a single
		* deepSeekBaseUrl (https://api.deepseek.com/anthropic) with an Anthropic-only
		* hint. We keep the protocol-aware pair so a chat-protocol route still prefills
		* the bare root — prefill only, the saved draft is whatever the user set. */
		const DEEPSEEK_CHAT_BASE_URL = "https://api.deepseek.com";
		const DEEPSEEK_MESSAGES_BASE_URL = "https://api.deepseek.com/anthropic";
		/** The editor layout the owning namespace selects. */
		function layoutOf(ns) {
			if (ns === "llm-deepseek") return "deepseek";
			if (ns === "llm-pi-ai") return "pi-ai";
			return "unknown";
		}
		/** A user-section subtree as a plain draft object (absent → empty). */
		function draftAt(schema, namespace, path) {
			const subtree = schema.getPath(namespace.user, path);
			if (typeof subtree !== "object" || subtree === null || Array.isArray(subtree)) return {};
			return structuredClone(subtree);
		}
		/** The credential reference this profile resolves keys through. */
		function refFor(schema, namespace, path, provider) {
			const profile = schema.getPath(namespace.value, path);
			const named = typeof profile === "object" && profile !== null ? profile.apiKeyEnv : void 0;
			return typeof named === "string" && named.length > 0 ? named : deriveKeyRef(provider);
		}
		/**
		* Render one existing provider's editing card.
		* @param props - the addressed profile plus wire faces.
		* @returns the editor card.
		*/
		function ProviderEditor(props) {
			const { namespace, schema, settingsPath, operations } = props;
			const [draft, setDraft] = (0, react.useState)(() => draftAt(schema, namespace, settingsPath));
			const [tab, setTab] = (0, react.useState)("provider");
			const [keyDraft, setKeyDraft] = (0, react.useState)("");
			const [keyState, setKeyState] = (0, react.useState)(void 0);
			const [busy, setBusy] = (0, react.useState)(false);
			const [failure, setFailure] = (0, react.useState)(void 0);
			const [committedOriginal, setCommittedOriginal] = (0, react.useState)(() => schema.getPath(namespace.user, settingsPath));
			const [expectedRevision, setExpectedRevision] = (0, react.useState)(() => namespace.revision);
			const root = (0, react.useMemo)(() => schema.rehydrate(namespace.schema), [namespace.schema, schema]);
			const node = (0, react.useMemo)(() => schema.nodeAtPath(root, settingsPath), [
				root,
				schema,
				settingsPath
			]);
			const fallback = schema.getPath(namespace.value, settingsPath);
			const disabled = props.readOnly || busy;
			const layout = layoutOf(namespace.ns);
			const keyRef = refFor(schema, namespace, settingsPath, props.provider);
			const protocols = (0, react.useMemo)(() => layout === "pi-ai" ? protocolChoices(namespace, schema) : [], [
				layout,
				namespace,
				schema
			]);
			/**
			* The pi-ai catalog, loaded only on the family that needs it: it answers the
			* protocol of a route that states none (a catalog route), which is what the
			* model panel judges compat switches by.
			*/
			const [prefillIndex, setPrefillIndex] = (0, react.useState)(void 0);
			(0, react.useEffect)(() => {
				if (layout !== "pi-ai") return;
				let stale = false;
				getPrefillIndex().then((loaded) => {
					if (!stale) setPrefillIndex(loaded);
				});
				return () => {
					stale = true;
				};
			}, [layout]);
			(0, react.useEffect)(() => {
				let stale = false;
				setKeyState(void 0);
				operations.describeCredential(keyRef).then((described) => {
					if (stale) return;
					setKeyState(described);
				});
				return () => {
					stale = true;
				};
			}, [operations, keyRef]);
			const stringAt = (source, key) => {
				const value = schema.getPath(source, [key]);
				return typeof value === "string" && value.trim().length > 0 ? value : void 0;
			};
			const setField = (key, next) => {
				const value = next === void 0 || next.trim().length === 0 ? void 0 : next;
				setDraft((current) => value === void 0 ? schema.deletePath(current, [key]) : schema.setPath(current, [key], value));
			};
			/**
			* The protocol every row of this route resolves to, resolved the way the
			* adapter resolves it: a hand-declared route's own `api` first — it overrides
			* the catalog for every model on the route — then the protocol the installed
			* catalog's entries for this route agree on, then nothing.
			*
			* The model panel needs it because the adapter judges each row's compat
			* switches by THIS protocol, not by the catalog entry the row was prefilled
			* from; without it a row can carry switches the route will refuse.
			*/
			const routeApi = layout === "pi-ai" ? (props.declared === true ? stringAt(draft, "api") ?? stringAt(fallback, "api") : void 0) ?? sharedCatalogApi(prefillIndex, props.provider) : void 0;
			const modelFailure = validateModelRows(schema.getPath(draft, ["models"]), routeApi);
			const keyFailure = (() => {
				if (keyDraft.length === 0) return void 0;
				const value = keyDraft.trim();
				if (value.length === 0) return "keyBlank";
				if (/^[A-Z][A-Z0-9_]*=[^=]/.test(value)) return "keyIllegalCharacters";
				const first = value[0];
				if ((first === "\"" || first === "'" || first === "`") && value.length > 1 && value.endsWith(first)) return "keyIllegalCharacters";
				return /^[\x21-\x7E]+$/.test(value) ? void 0 : "keyIllegalCharacters";
			})();
			const keyValue = keyDraft.trim();
			const probe = {
				settingsNs: namespace.ns,
				provider: props.provider,
				...(() => {
					const baseURL = stringAt(draft, "baseURL") ?? stringAt(fallback, "baseURL");
					return baseURL === void 0 ? {} : { baseURL };
				})(),
				...(() => {
					const api = layout === "pi-ai" && props.declared === true ? stringAt(draft, "api") ?? stringAt(fallback, "api") : void 0;
					return api === void 0 ? {} : { api };
				})(),
				...keyValue.length === 0 ? {} : { apiKey: keyValue }
			};
			/** The write for this card, or a failure message. */
			const applyOnce = async () => {
				const ns = namespace.ns;
				let next = layout === "pi-ai" && stringAt(draft, "apiKeyEnv") === void 0 && stringAt(fallback, "apiKeyEnv") === void 0 && keyValue.length > 0 ? schema.setPath(draft, ["apiKeyEnv"], keyRef) : draft;
				const rowFailure = validateModelRows(schema.getPath(next, ["models"]), routeApi);
				if (rowFailure !== void 0) return rowFailure.key === "modelCompatNotOffered" ? compatFailureMessage(rowFailure) : `模型 ${String(rowFailure.index + 1)}：${{
					modelIdRequired: "模型 ID 不能为空。",
					modelIdDuplicate: "模型 ID 不能重复。",
					modelNameInvalid: "显示名称不能为空。",
					modelContextInvalid: "上下文窗口须为正数，如 131072、256K、1M。",
					modelMaxTokensInvalid: "最大输出 token 数须为正数，如 8192、64K、1M。"
				}[rowFailure.key]}`;
				if (node !== void 0 && settingsPath.length === 0) {
					const sectionError = schema.validate(node, next);
					if (sectionError !== void 0) return sectionError;
				}
				if (schema.hasPath(next, ["models"])) next = schema.setPath(next, ["models"], modelDrafts(schema.getPath(next, ["models"])).map(normalizeModelRow));
				const ops = layout === "pi-ai" && fallback === void 0 && committedOriginal === void 0 && Object.keys(next).length === 0 ? [{
					op: "set",
					path: [...settingsPath],
					value: {}
				}] : pathOps(settingsPath, committedOriginal, next);
				if (ops.length > 0) {
					const written = await operations.writeSettings(ns, ops, expectedRevision);
					if (written.kind !== "written") return written.kind === "conflict" ? "这张卡片打开期间，这些设置已被其他地方改动。请关闭后重新打开，在当前值上编辑。" : written.message;
					setCommittedOriginal(schema.getPath(written.view.user, settingsPath));
					setExpectedRevision(written.view.revision);
					setDraft(next);
				}
				if (keyValue.length > 0) {
					const stored = await operations.storeCredential(keyRef, keyValue);
					if (stored !== void 0) return stored;
				}
				setKeyDraft("");
			};
			const apply = async () => {
				setBusy(true);
				setFailure(void 0);
				try {
					const applyFailure = await applyOnce();
					if (applyFailure !== void 0) {
						setFailure(applyFailure);
						return;
					}
					props.onClose(true);
				} finally {
					setBusy(false);
				}
			};
			if (node === void 0) return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("p", {
				className: models_plus_module_default["error"],
				children: [props.provider, ": 无法解析设置路径"]
			});
			/**
			* The catalog beneath the user layer: the composition entry's pin, or the
			* schema default — reading the effective value would echo the stored
			* override back the moment reset drops it.
			*/
			const inheritedModels = () => {
				return schema.getPath(namespace.base, [...settingsPath, "models"]) ?? schema.nodeAtPath(root, [...settingsPath, "models"])?.meta.default;
			};
			const customModels = schema.getPath(draft, ["models"]);
			const modelsOverridden = schema.hasPath(draft, ["models"]);
			const models = modelDrafts(modelsOverridden ? customModels : inheritedModels());
			const defaultContextWindow = schema.getPath(fallback, ["defaultContextWindow"]);
			const defaultMaxTokens = schema.getPath(fallback, ["maxTokens"]);
			const keyPlaceholder = keyState?.writable === false ? "由启动环境提供（只读）" : keyState?.configured === true ? "已配置——输入新值可替换" : layout === "pi-ai" && props.declared === true ? "输入 API 密钥，或留空使用环境认证" : "输入 API 密钥";
			const keyLocked = keyState?.writable === false;
			return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
				className: models_plus_module_default["editor"],
				children: [
					layout === "unknown" ? /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("p", {
						className: models_plus_module_default["advancedHint"],
						children: [
							"其余字段存于 settings.yaml；请直接编辑对应段。（",
							namespace.ns,
							"）"
						]
					}) : /* @__PURE__ */ (0, react_jsx_runtime.jsx)(react_jsx_runtime.Fragment, { children: /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
						className: models_plus_module_default["tabs"],
						children: [
							/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
								className: models_plus_module_default["tabBar"],
								role: "tablist",
								children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
									type: "button",
									role: "tab",
									"aria-selected": tab === "provider",
									className: tab === "provider" ? `${models_plus_module_default["tabButton"]} ${models_plus_module_default["tabButtonActive"]}` : models_plus_module_default["tabButton"],
									onClick: () => {
										setTab("provider");
									},
									children: "供应商"
								}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
									type: "button",
									role: "tab",
									"aria-selected": tab === "models",
									className: tab === "models" ? `${models_plus_module_default["tabButton"]} ${models_plus_module_default["tabButtonActive"]}` : models_plus_module_default["tabButton"],
									onClick: () => {
										setTab("models");
									},
									children: "模型"
								})]
							}),
							"                ",
							/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
								className: models_plus_module_default["tabPanel"],
								role: "tabpanel",
								hidden: tab !== "provider",
								children: [
									layout === "pi-ai" ? /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
										className: models_plus_module_default["field"],
										children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("label", {
											className: models_plus_module_default["fieldLabel"],
											children: "显示名称"
										}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("input", {
											className: models_plus_module_default["input"],
											type: "text",
											value: stringAt(draft, "displayName") ?? "",
											placeholder: stringAt(schema.getPath(namespace.base, settingsPath), "displayName") ?? props.provider,
											"aria-label": "显示名称",
											disabled,
											onChange: (event) => {
												setField("displayName", event.target.value);
											}
										})]
									}) : null,
									/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
										className: models_plus_module_default["field"],
										children: [
											/* @__PURE__ */ (0, react_jsx_runtime.jsx)("label", {
												className: models_plus_module_default["fieldLabel"],
												children: "API 密钥"
											}),
											/* @__PURE__ */ (0, react_jsx_runtime.jsx)("input", {
												className: models_plus_module_default["input"],
												type: "password",
												autoComplete: "off",
												value: keyDraft,
												placeholder: keyPlaceholder,
												"aria-label": "API 密钥",
												disabled: disabled || keyLocked,
												onChange: (event) => {
													setKeyDraft(event.target.value);
												}
											}),
											keyFailure === void 0 ? null : /* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
												className: models_plus_module_default["error"],
												children: keyFailure === "keyBlank" ? "请输入 API 密钥；留空则保持已存储的密钥。" : "此 API 密钥格式无效，请检查。"
											})
										]
									}),
									/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
										className: models_plus_module_default["field"],
										children: [
											/* @__PURE__ */ (0, react_jsx_runtime.jsx)("label", {
												className: models_plus_module_default["fieldLabel"],
												children: "API 地址"
											}),
											/* @__PURE__ */ (0, react_jsx_runtime.jsx)("input", {
												className: models_plus_module_default["input"],
												type: "text",
												value: stringAt(draft, "baseURL") ?? "",
												placeholder: layout === "deepseek" ? stringAt(fallback, "protocol") === "messages" ? DEEPSEEK_MESSAGES_BASE_URL : DEEPSEEK_CHAT_BASE_URL : stringAt(fallback, "baseURL") ?? "提供方默认",
												"aria-label": "API 地址",
												disabled,
												onChange: (event) => {
													setField("baseURL", event.target.value === "" ? void 0 : event.target.value);
												}
											}),
											layout === "deepseek" ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
												className: models_plus_module_default["advancedHint"],
												children: "请填写与当前连接配置兼容的 API 地址。"
											}) : null
										]
									}),
									layout === "pi-ai" && props.declared === true ? /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
										className: models_plus_module_default["field"],
										children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("label", {
											className: models_plus_module_default["fieldLabel"],
											children: "API 协议"
										}), /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("select", {
											className: `${models_plus_module_default["input"]} ${models_plus_module_default["selectInput"]}`,
											value: stringAt(draft, "api") ?? stringAt(fallback, "api") ?? "",
											"aria-label": "API 协议",
											disabled,
											onChange: (event) => {
												setField("api", event.target.value);
											},
											children: [(stringAt(draft, "api") ?? stringAt(fallback, "api")) === void 0 ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)("option", {
												value: "",
												children: "未选择"
											}) : null, protocols.map((choice) => /* @__PURE__ */ (0, react_jsx_runtime.jsx)("option", {
												value: choice,
												children: choice
											}, choice))]
										})]
									}) : null
								]
							}),
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
								className: models_plus_module_default["tabPanel"],
								role: "tabpanel",
								hidden: tab !== "models",
								children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(ModelCatalog, {
									models,
									overridden: modelsOverridden,
									routeApi,
									defaultContextWindow: typeof defaultContextWindow === "number" ? defaultContextWindow : void 0,
									defaultMaxTokens: typeof defaultMaxTokens === "number" ? defaultMaxTokens : void 0,
									probe,
									probeBlocked: keyFailure,
									hideFetch: layout === "deepseek",
									operations,
									disabled,
									onChange: (rows) => {
										setDraft((current) => schema.setPath(current, ["models"], rows));
									},
									onReset: () => {
										setDraft((current) => schema.deletePath(current, ["models"]));
									}
								})
							})
						]
					}) }),
					failure !== void 0 ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
						className: models_plus_module_default["error"],
						children: failure
					}) : null,
					modelFailure === void 0 ? null : /* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
						className: models_plus_module_default["advancedHint"],
						children: modelFailure.key === "modelCompatNotOffered" ? compatFailureMessage(modelFailure) : `模型 ${String(modelFailure.index + 1)}：${modelFailure.key}`
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
						className: models_plus_module_default["editorActions"],
						children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
							type: "button",
							className: models_plus_module_default["secondaryButton"],
							disabled: busy,
							onClick: () => {
								props.onClose(false);
							},
							children: "取消"
						}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
							type: "button",
							className: models_plus_module_default["primaryButton"],
							disabled: disabled || layout === "unknown" || modelFailure !== void 0 || keyFailure !== void 0,
							onClick: () => {
								apply();
							},
							children: busy ? "保存中…" : "保存"
						})]
					})
				]
			});
		}
		//#endregion
		//#region src/client/models-plus/CreateProviderCard.tsx
		/**
		* The card that declares a provider pi-ai does not ship — an OpenAI-compatible
		* gateway, a self-hosted server, or a provider newer than the installed
		* catalog. One `settings.mutate` sets the whole profile at `providers.<route>`;
		* the key travels separately through `credentials/set` under the reference
		* the profile records. The three fields a hand-declared route cannot default
		* (endpoint, protocol, at least one model) are required here.
		*/
		/** The settings namespace a hand-declared provider is written into. */
		const NS = "llm-pi-ai";
		/**
		* A route id usable as a settings key AND as the stem of a credential name.
		*/
		const ROUTE_PATTERN = /^[a-z][a-z0-9]*(?:-[a-z0-9]+)*$/;
		/**
		* Render the custom-provider creation card.
		* @param props - existing routes, protocol choices, wire faces.
		* @returns the creation card.
		*/
		function CreateProviderCard(props) {
			const { taken, protocols, operations } = props;
			const [openedAt] = (0, react.useState)(() => props.revision);
			const [route, setRoute] = (0, react.useState)("");
			const [displayName, setDisplayName] = (0, react.useState)("");
			const [baseURL, setBaseURL] = (0, react.useState)("");
			const [protocol, setProtocol] = (0, react.useState)(protocols[0] ?? "");
			const [tab, setTab] = (0, react.useState)("provider");
			const [keyDraft, setKeyDraft] = (0, react.useState)("");
			const [models, setModels] = (0, react.useState)([]);
			const [busy, setBusy] = (0, react.useState)(false);
			const [failure, setFailure] = (0, react.useState)(void 0);
			/** The profile write landed; only the key write can still be outstanding. */
			const [committed, setCommitted] = (0, react.useState)(false);
			const disabled = props.readOnly || busy;
			const profileDisabled = disabled || committed;
			const routeInvalid = route.length > 0 && !ROUTE_PATTERN.test(route);
			const routeTaken = taken.includes(route);
			const modelFailure = validateModelRows(models, protocol);
			const keyFailure = (() => {
				if (keyDraft.length === 0) return void 0;
				const value = keyDraft.trim();
				if (value.length === 0) return "keyBlank";
				if (/^[A-Z][A-Z0-9_]*=[^=]/.test(value)) return "keyIllegalCharacters";
				const first = value[0];
				if ((first === "\"" || first === "'" || first === "`") && value.length > 1 && value.endsWith(first)) return "keyIllegalCharacters";
				return /^[\x21-\x7E]+$/.test(value) ? void 0 : "keyIllegalCharacters";
			})();
			const keyValue = keyDraft.trim();
			const ready = route.length > 0 && !routeInvalid && !routeTaken && baseURL.length > 0 && models.length > 0 && modelFailure === void 0 && keyFailure === void 0;
			const hint = failure !== void 0 || ready || keyFailure !== void 0 || route.length === 0 || routeInvalid || routeTaken ? void 0 : baseURL.length === 0 ? "自定义提供方需要填写 API 地址。" : modelFailure !== void 0 ? modelFailure.key === "modelCompatNotOffered" ? compatFailureMessage(modelFailure) : `模型 ${String(modelFailure.index + 1)}：${modelFailure.key}` : "自定义提供方至少需要一个模型。";
			/** Perform the create, returning a failure message or undefined. */
			const createOnce = async () => {
				const keyRef = deriveKeyRef(route);
				const storesKey = keyValue.length > 0;
				if (!committed) {
					const profile = {
						...displayName.length === 0 ? {} : { displayName },
						...storesKey ? { apiKeyEnv: keyRef } : {},
						api: protocol,
						baseURL,
						models: models.map(normalizeModelRow)
					};
					const written = await operations.writeSettings(NS, [{
						op: "set",
						path: ["providers", route],
						value: profile
					}], openedAt);
					if (written.kind !== "written") return written.kind === "conflict" ? "这张卡片打开期间，这些设置已被其他地方改动。请关闭后重新打开，在当前值上编辑。" : written.message;
					setCommitted(true);
				}
				if (storesKey) {
					const stored = await operations.storeCredential(keyRef, keyValue);
					if (stored !== void 0) return stored;
				}
			};
			const create = async () => {
				setBusy(true);
				setFailure(void 0);
				try {
					const outcome = await createOnce();
					if (outcome !== void 0) {
						setFailure(outcome);
						return;
					}
					props.onClose(true);
				} finally {
					setBusy(false);
				}
			};
			return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
				className: models_plus_module_default["editor"],
				children: [
					/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
						className: models_plus_module_default["field"],
						style: {
							paddingTop: 12,
							borderTop: "0.5px solid var(--dsw-alias-border-l2)"
						},
						children: [
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("label", {
								className: models_plus_module_default["fieldLabel"],
								children: "Provider ID"
							}),
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("input", {
								className: models_plus_module_default["input"],
								type: "text",
								value: route,
								placeholder: "acme-gateway",
								"aria-label": "Provider ID",
								disabled: profileDisabled,
								onChange: (event) => {
									setRoute(event.target.value);
								}
							}),
							routeInvalid || routeTaken ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
								className: models_plus_module_default["error"],
								children: routeInvalid ? "需以小写字母开头，之后可用小写字母、数字和短横线。" : "已有提供方使用了这个 ID。"
							}) : /* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
								className: models_plus_module_default["advancedHint"],
								children: "以小写字母开头的标识，在请求中唯一标识该提供方，并用于派生凭据名。"
							})
						]
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
						className: models_plus_module_default["tabs"],
						children: [
							/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
								className: models_plus_module_default["tabBar"],
								role: "tablist",
								children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
									type: "button",
									role: "tab",
									"aria-selected": tab === "provider",
									className: tab === "provider" ? `${models_plus_module_default["tabButton"]} ${models_plus_module_default["tabButtonActive"]}` : models_plus_module_default["tabButton"],
									onClick: () => {
										setTab("provider");
									},
									children: "供应商"
								}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
									type: "button",
									role: "tab",
									"aria-selected": tab === "models",
									className: tab === "models" ? `${models_plus_module_default["tabButton"]} ${models_plus_module_default["tabButtonActive"]}` : models_plus_module_default["tabButton"],
									onClick: () => {
										setTab("models");
									},
									children: "模型"
								})]
							}),
							/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
								className: models_plus_module_default["tabPanel"],
								role: "tabpanel",
								hidden: tab !== "provider",
								children: [
									/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
										className: models_plus_module_default["field"],
										children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("label", {
											className: models_plus_module_default["fieldLabel"],
											children: "显示名称"
										}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("input", {
											className: models_plus_module_default["input"],
											type: "text",
											value: displayName,
											placeholder: route.length === 0 ? "显示名称" : route,
											"aria-label": "显示名称",
											disabled: profileDisabled,
											onChange: (event) => {
												setDisplayName(event.target.value);
											}
										})]
									}),
									/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
										className: models_plus_module_default["field"],
										children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("label", {
											className: models_plus_module_default["fieldLabel"],
											children: "API 地址"
										}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("input", {
											className: models_plus_module_default["input"],
											type: "text",
											value: baseURL,
											placeholder: "https://gateway.example/v1",
											"aria-label": "API 地址",
											disabled: profileDisabled,
											onChange: (event) => {
												setBaseURL(event.target.value);
											}
										})]
									}),
									/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
										className: models_plus_module_default["field"],
										children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("label", {
											className: models_plus_module_default["fieldLabel"],
											children: "API 协议"
										}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("select", {
											className: `${models_plus_module_default["input"]} ${models_plus_module_default["selectInput"]}`,
											value: protocol,
											"aria-label": "API 协议",
											disabled: profileDisabled,
											onChange: (event) => {
												setProtocol(event.target.value);
											},
											children: protocols.map((choice) => /* @__PURE__ */ (0, react_jsx_runtime.jsx)("option", {
												value: choice,
												children: choice
											}, choice))
										})]
									}),
									/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
										className: models_plus_module_default["field"],
										children: [
											/* @__PURE__ */ (0, react_jsx_runtime.jsx)("label", {
												className: models_plus_module_default["fieldLabel"],
												children: "API 密钥"
											}),
											/* @__PURE__ */ (0, react_jsx_runtime.jsx)("input", {
												className: models_plus_module_default["input"],
												type: "password",
												autoComplete: "off",
												value: keyDraft,
												placeholder: "输入 API 密钥，或留空使用环境认证",
												"aria-label": "API 密钥",
												disabled,
												onChange: (event) => {
													setKeyDraft(event.target.value);
												}
											}),
											keyFailure === void 0 ? null : /* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
												className: models_plus_module_default["error"],
												children: keyFailure === "keyBlank" ? "请输入 API 密钥；若该提供方以其他方式鉴权，可以留空。" : "此 API 密钥格式无效，请检查。"
											})
										]
									})
								]
							}),
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
								className: models_plus_module_default["tabPanel"],
								role: "tabpanel",
								hidden: tab !== "models",
								children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(ModelCatalog, {
									models,
									overridden: true,
									routeApi: protocol,
									defaultContextWindow: void 0,
									defaultMaxTokens: void 0,
									probe: {
										settingsNs: NS,
										baseURL,
										api: protocol,
										...keyValue.length === 0 ? {} : { apiKey: keyValue }
									},
									probeBlocked: keyFailure === "keyBlank" ? "请输入 API 密钥；若该提供方以其他方式鉴权，可以留空。" : keyFailure,
									operations,
									disabled: profileDisabled,
									onChange: setModels
								})
							})
						]
					}),
					failure !== void 0 ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
						className: models_plus_module_default["error"],
						children: failure
					}) : null,
					hint === void 0 ? null : /* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
						className: models_plus_module_default["advancedHint"],
						children: hint
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
						className: models_plus_module_default["editorActions"],
						children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
							type: "button",
							className: models_plus_module_default["secondaryButton"],
							disabled: busy,
							onClick: () => {
								props.onClose(committed);
							},
							children: "取消"
						}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
							type: "button",
							className: models_plus_module_default["primaryButton"],
							disabled: disabled || !ready,
							onClick: () => {
								create();
							},
							children: busy ? "创建中…" : "创建提供方"
						})]
					})
				]
			});
		}
		//#endregion
		//#region src/client/models-plus/ModelsPlusSection.tsx
		/**
		* The Models+ settings section (v1.0.0, fully plugin-owned UI): provider rows
		* joined from the configurable directory, settings namespaces, and credential
		* states, one editor card at a time. The title row carries the adapter badge
		* and the metadata download button — the only place models.dev data is ever
		* fetched, on an explicit user click.
		*/
		/** One fact decides the first-run posture: whether any provider is usable. */
		function needsSetup(row, anyUsable) {
			if (anyUsable) return false;
			if (row.entry.settingsPath.length > 0) return false;
			return row.credential?.configured !== true;
		}
		function targetOf(row) {
			const managedRef = deriveKeyRef(row.entry.provider);
			const credentialRef = row.apiKeyEnv === managedRef && row.credential?.configured === true && row.credential.writable ? managedRef : void 0;
			return {
				provider: row.entry.provider,
				displayName: row.entry.displayName,
				settingsNs: row.entry.settingsNs,
				settingsPath: row.entry.settingsPath,
				...credentialRef === void 0 ? {} : { credentialRef },
				...row.entry.declared === true ? { declared: true } : {}
			};
		}
		/**
		* Remove one user-added provider and its page-managed credential. Credential
		* removal comes first so a second-step failure leaves the row retryable.
		*/
		async function removeProviderProfile(operations, controller, target) {
			if (target.credentialRef !== void 0) {
				const credential = await operations.removeCredential(target.credentialRef);
				if (credential !== void 0) return credential;
			}
			const written = await operations.writeSettings(target.settingsNs, [{
				op: "unset",
				path: [...target.settingsPath]
			}], void 0);
			if (written.kind !== "written") return written.message;
			await controller.load();
		}
		/** Replace the one provider placeholder in localized destructive copy. */
		function providerCopy(template, target) {
			const label = target.provider === target.displayName ? target.provider : `${target.displayName} (${target.provider})`;
			return template.replace("{provider}", () => label);
		}
		/**
		* Render the Models+ section content column.
		* @param props - slot-delivered injected dependencies.
		* @returns the section, or null while the shell has not injected yet.
		*/
		function ModelsPlusSection(props) {
			const { controller, useSnapshot, operations, schema, t } = props;
			if (controller === void 0 || useSnapshot === void 0 || operations === void 0 || schema === void 0 || t === void 0) return null;
			return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Loaded, { injected: {
				controller,
				useSnapshot,
				operations,
				schema,
				t
			} });
		}
		function Loaded({ injected }) {
			const { controller, operations, schema, t } = injected;
			const useSnapshot = injected.useSnapshot;
			const state = useSnapshot((snapshot) => snapshot);
			const [editing, setEditing] = (0, react.useState)(void 0);
			const [adding, setAdding] = (0, react.useState)(false);
			const [declaring, setDeclaring] = (0, react.useState)(false);
			const [deleteTarget, setDeleteTarget] = (0, react.useState)(void 0);
			const [deleting, setDeleting] = (0, react.useState)(false);
			const [deleteFailure, setDeleteFailure] = (0, react.useState)(void 0);
			const [savedTarget, setSavedTarget] = (0, react.useState)(void 0);
			const [dismissedSetup, setDismissedSetup] = (0, react.useState)(() => /* @__PURE__ */ new Set());
			const [metaBusy, setMetaBusy] = (0, react.useState)(false);
			const [metaMessage, setMetaMessage] = (0, react.useState)(void 0);
			const announceSaved = (target) => {
				controller.load().then(() => {
					setSavedTarget(target);
				});
			};
			const closeEditor = (changed, target) => {
				setEditing(void 0);
				setAdding(false);
				setDeclaring(false);
				if (changed) announceSaved(target);
			};
			const closeSetup = (changed, target) => {
				setDismissedSetup((previous) => /* @__PURE__ */ new Set([...previous, target.provider]));
				if (changed) announceSaved(target);
			};
			const downloadMeta = async () => {
				setMetaBusy(true);
				setMetaMessage(void 0);
				try {
					const outcome = await downloadMetadata();
					setMetaMessage(outcome.ok ? {
						ok: true,
						text: "models.dev 元数据已下载并就绪。"
					} : {
						ok: false,
						text: `元数据下载失败：${outcome.message}`
					});
				} finally {
					setMetaBusy(false);
				}
			};
			if (state.status === "idle") controller.load();
			if (state.status === "error") {
				const errorText = state.error ?? "";
				return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
					className: models_plus_module_default["section"],
					children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
						className: models_plus_module_default["error"],
						children: `加载提供方目录失败: ${errorText}`
					}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
						type: "button",
						className: models_plus_module_default["secondaryButton"],
						onClick: () => {
							controller.load();
						},
						children: "重试"
					})]
				});
			}
			const savedRow = savedTarget === void 0 ? void 0 : state.rows.find((row) => row.entry.provider === savedTarget.provider);
			const savedIdentity = savedRow === void 0 ? savedTarget : {
				displayName: savedRow.entry.displayName,
				provider: savedRow.entry.provider
			};
			const anyUsable = state.rows.some(providerUsable);
			const configured = state.rows.filter((row) => row.configured);
			const configurable = state.rows.filter((row) => state.namespaces.has(row.entry.settingsNs));
			const addable = configurable.filter((row) => !row.configured);
			const addTarget = adding ? editing : void 0;
			const addNamespace = addTarget === void 0 ? void 0 : state.namespaces.get(addTarget.settingsNs);
			const protocols = (() => {
				return protocolChoices(state.namespaces.get("llm-pi-ai"), schema);
			})();
			const renderEditor = (target, namespace, onClose) => {
				if (namespace === void 0) return null;
				return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(ProviderEditor, {
					provider: target.provider,
					displayName: target.displayName,
					settingsPath: target.settingsPath,
					...target.declared === true ? { declared: true } : {},
					namespace,
					schema,
					operations,
					readOnly: !state.writable,
					onClose
				});
			};
			return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
				className: models_plus_module_default["section"],
				children: [
					/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
						className: models_plus_module_default["titleRow"],
						children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("h2", {
							className: models_plus_module_default["title"],
							children: t("nav")
						}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
							className: models_plus_module_default["rowActions"],
							children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
								type: "button",
								className: models_plus_module_default["linkButton"],
								disabled: metaBusy,
								title: "下载/更新 models.dev 元数据（供快速装入预填）",
								onClick: () => {
									downloadMeta();
								},
								children: metaBusy ? "正在下载元数据…" : "下载/更新元数据"
							})
						})]
					}),
					metaMessage === void 0 ? null : /* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
						className: metaMessage.ok ? models_plus_module_default["savedNotice"] : models_plus_module_default["error"],
						children: metaMessage.text
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
						className: models_plus_module_default["intro"],
						children: t("intro")
					}),
					savedIdentity === void 0 ? null : /* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
						className: models_plus_module_default["savedNotice"],
						role: "status",
						"aria-live": "polite",
						children: providerCopy("已保存 {provider}。", savedIdentity)
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("ul", {
						className: models_plus_module_default["rows"],
						children: configured.map((row) => {
							const target = targetOf(row);
							const namespace = state.namespaces.get(target.settingsNs);
							if (namespace === void 0) return null;
							const error = row.entry.error === void 0 ? null : /* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
								role: "alert",
								className: models_plus_module_default["error"],
								children: row.entry.error
							});
							if (needsSetup(row, anyUsable) && !dismissedSetup.has(row.entry.provider)) return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("li", {
								className: models_plus_module_default["rowCard"],
								children: [error, renderEditor(target, namespace, (changed) => {
									closeSetup(changed, target);
								})]
							}, row.entry.provider);
							const open = !adding && !declaring && editing?.provider === row.entry.provider;
							const credentialConfigured = row.credential?.configured === true;
							const credentialMissing = !credentialConfigured && row.apiKeyEnv !== void 0 && row.credential?.configured === false;
							return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("li", {
								className: models_plus_module_default["rowCard"],
								children: [
									error,
									/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
										className: models_plus_module_default["rowHead"],
										children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("span", {
											className: models_plus_module_default["rowIdentity"],
											children: [
												/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
													className: models_plus_module_default["rowName"],
													children: row.entry.displayName
												}),
												row.entry.declared === true ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
													className: models_plus_module_default["rowTag"],
													children: "自定义"
												}) : null,
												credentialConfigured ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
													className: `${models_plus_module_default["credentialDot"]} ${models_plus_module_default["credentialDotConfigured"]}`,
													role: "img",
													"aria-label": "API 密钥已配置",
													title: "API 密钥已配置"
												}) : credentialMissing ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
													className: `${models_plus_module_default["credentialDot"]} ${models_plus_module_default["credentialDotMissing"]}`,
													role: "img",
													"aria-label": "API 密钥缺失",
													title: "API 密钥缺失"
												}) : null
											]
										}), /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("span", {
											className: models_plus_module_default["rowActions"],
											children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
												type: "button",
												className: models_plus_module_default["secondaryButton"],
												"aria-label": providerCopy("编辑 {provider}", target),
												onClick: () => {
													setSavedTarget(void 0);
													setDeclaring(false);
													setAdding(false);
													setEditing(open ? void 0 : target);
												},
												children: "编辑"
											}), row.removable ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
												type: "button",
												className: models_plus_module_default["dangerButton"],
												"aria-label": providerCopy("删除 {provider}", target),
												disabled: !state.writable,
												onClick: () => {
													setSavedTarget(void 0);
													setDeleteFailure(void 0);
													setDeleteTarget(target);
												},
												children: "删除"
											}) : null]
										})]
									}),
									open ? renderEditor(target, namespace, (changed) => {
										closeEditor(changed, target);
									}) : null
								]
							}, row.entry.provider);
						})
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
						className: models_plus_module_default["addBlock"],
						children: addTarget !== void 0 && addNamespace !== void 0 ? /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
							className: models_plus_module_default["addCard"],
							children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
								className: models_plus_module_default["field"],
								children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("label", {
									className: models_plus_module_default["fieldLabel"],
									children: "提供方"
								}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("select", {
									className: `${models_plus_module_default["input"]} ${models_plus_module_default["selectInput"]}`,
									value: addTarget.provider,
									"aria-label": "提供方",
									onChange: (event) => {
										const row = addable.find((candidate) => candidate.entry.provider === event.target.value);
										if (row === void 0) return;
										setEditing(targetOf(row));
									},
									children: addable.map((row) => /* @__PURE__ */ (0, react_jsx_runtime.jsx)("option", {
										value: row.entry.provider,
										children: row.entry.displayName
									}, row.entry.provider))
								})]
							}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)(ProviderEditor, {
								provider: addTarget.provider,
								displayName: addTarget.displayName,
								namespace: addNamespace,
								schema,
								settingsPath: addTarget.settingsPath,
								operations,
								readOnly: !state.writable,
								onClose: (changed) => {
									closeEditor(changed, addTarget);
								}
							}, addTarget.provider)]
						}) : declaring ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
							className: models_plus_module_default["addCard"],
							children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(CreateProviderCard, {
								taken: state.rows.map((row) => row.entry.provider),
								protocols,
								revision: state.namespaces.get("llm-pi-ai")?.revision ?? 0,
								operations,
								readOnly: !state.writable,
								onClose: (changed) => {
									setDeclaring(false);
									if (changed) controller.load();
								}
							})
						}) : /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
							className: models_plus_module_default["addActions"],
							children: [configurable.length > 0 && /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("button", {
								type: "button",
								className: models_plus_module_default["addButton"],
								disabled: addable.length === 0 || !state.writable,
								onClick: () => {
									const first = addable[0];
									if (first === void 0) return;
									setSavedTarget(void 0);
									setDeclaring(false);
									setAdding(true);
									setEditing(targetOf(first));
								},
								children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("svg", {
									width: "14",
									height: "14",
									viewBox: "0 0 16 16",
									fill: "none",
									"aria-hidden": "true",
									children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
										d: "M8 3.5v9M3.5 8h9",
										stroke: "currentColor",
										strokeWidth: "1.5",
										strokeLinecap: "round"
									})
								}), "添加提供方"]
							}), state.namespaces.has("llm-pi-ai") && /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("button", {
								type: "button",
								className: models_plus_module_default["addButton"],
								disabled: protocols.length === 0 || !state.writable,
								onClick: () => {
									setSavedTarget(void 0);
									setAdding(false);
									setEditing(void 0);
									setDeclaring(true);
								},
								children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("svg", {
									width: "14",
									height: "14",
									viewBox: "0 0 16 16",
									fill: "none",
									"aria-hidden": "true",
									children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
										d: "M8 3.5v9M3.5 8h9",
										stroke: "currentColor",
										strokeWidth: "1.5",
										strokeLinecap: "round"
									})
								}), "添加自定义提供方"]
							})]
						})
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.Modal, {
						open: deleteTarget !== void 0,
						onClose: () => {
							if (deleting) return;
							setDeleteTarget(void 0);
							setDeleteFailure(void 0);
						},
						title: deleteTarget === void 0 ? "" : providerCopy("删除 {provider}？", deleteTarget),
						closeLabel: "关闭",
						description: deleteTarget === void 0 ? "" : providerCopy(deleteTarget.credentialRef === void 0 ? "删除 {provider} 会移除其配置；其使用的凭证（如有）由其他位置管理，将会保留。" : "删除 {provider} 会移除其配置和存储的 API 密钥。", deleteTarget),
						className: models_plus_module_default["deleteDialog"],
						footer: /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(react_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
							type: "button",
							className: models_plus_module_default["secondaryButton"],
							disabled: deleting,
							onClick: () => {
								setDeleteTarget(void 0);
								setDeleteFailure(void 0);
							},
							children: "取消"
						}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
							type: "button",
							className: `${models_plus_module_default["secondaryButton"]} ${models_plus_module_default["deleteConfirm"]}`,
							disabled: deleting,
							onClick: () => {
								if (deleteTarget === void 0 || deleting) return;
								setDeleting(true);
								setDeleteFailure(void 0);
								removeProviderProfile(operations, controller, deleteTarget).then((removeFailure) => {
									if (removeFailure !== void 0) {
										setDeleteFailure(removeFailure);
										return;
									}
									setDeleteTarget(void 0);
								}).finally(() => {
									setDeleting(false);
								});
							},
							children: deleteTarget === void 0 ? "" : providerCopy(deleting ? "正在删除 {provider}…" : "删除 {provider}", deleteTarget)
						})] }),
						children: deleteFailure === void 0 ? null : /* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
							className: models_plus_module_default["error"],
							children: deleteFailure
						})
					})
				]
			});
		}
		//#endregion
		//#region src/client/vendor/operations.ts
		/**
		* Bind the page's Host operations to the plugin's own Remote namespaces.
		* @param ctx - the page plugin's context, which declares `remote.credentials`,
		* `remote.llm`, and `remote.settings` in its own `inject`.
		* @returns the callbacks the section and its cards are injected with.
		*/
		function createModelsOperations(ctx) {
			return {
				describeCredential: async (ref) => {
					const response = await ctx.remote.credentials.describe([ref]);
					return response.ok ? response.value[ref] : void 0;
				},
				storeCredential: async (ref, value) => {
					const response = await ctx.remote.credentials.set(ref, value);
					return response.ok ? void 0 : response.error.message;
				},
				removeCredential: async (ref) => {
					const response = await ctx.remote.credentials.unset(ref);
					return response.ok ? void 0 : response.error.message;
				},
				writeSettings: async (ns, ops, expectedRevision) => {
					const response = await ctx.remote.settings.mutate(ns, ops, expectedRevision);
					if (response.ok) return {
						kind: "written",
						view: response.value
					};
					const { code, message } = response.error;
					return code === "settings/conflict" ? {
						kind: "conflict",
						message
					} : {
						kind: "refused",
						message
					};
				},
				discoverModels: async (settingsNs, request) => {
					const response = await ctx.remote.llm.discoverModels(settingsNs, request);
					return response.ok ? {
						kind: "found",
						models: response.value
					} : {
						kind: "refused",
						message: response.error.message
					};
				}
			};
		}
		//#endregion
		//#region src/client/vendor/schema-operations.ts
		/**
		* Hide the Cordis service identity behind bound schema callbacks.
		* @param service - settings-owned schema service available in the apply context.
		* @returns callbacks that cannot expose the service context to React components.
		*/
		function createSettingsSchemaOperations(service) {
			return {
				rehydrate: (serialized) => service.rehydrate(serialized),
				validate: (schema, draft) => service.validate(schema, draft),
				nodeAtPath: (root, path) => service.nodeAtPath(root, path),
				getPath: (value, path) => service.getPath(value, path),
				hasPath: (value, path) => service.hasPath(value, path),
				setPath: (root, path, value) => service.setPath(root, path, value),
				deletePath: (root, path) => service.deletePath(root, path)
			};
		}
		//#endregion
		//#region src/client/index-extension.ts
		/** Cordis service name (distinct from the npm package name). */
		const name = "model-extension-client";
		/** Required services — mirrors the upstream Models section registration @ 0.1.7-rc.1. */
		const inject = [
			"slots",
			"locale",
			"remote",
			"remote.credentials",
			"remote.llm",
			"remote.settings",
			"configForms",
			"settingsSchema"
		];
		/** Refetch the page snapshot only after its first load (upstream helper, inlined). */
		function refreshIfLoaded(controller) {
			if (controller.store.getSnapshot().status === "idle") return;
			controller.load();
		}
		/**
		* Apply: register the Models+ section once slot/locale services are up.
		* @param ctx - client root context.
		*/
		function apply(ctx) {
			const NS = "settings.models-extension";
			ctx.effect(() => ctx.locale.register(NS, {
				zh: { ...zh },
				en: { ...en }
			}), "dsh-model-extension: copy dictionaries");
			const schema = createSettingsSchemaOperations(ctx.settingsSchema);
			const operations = createModelsOperations(ctx);
			const controller = new ModelsSettingsStore(ctx, schema, ctx.configForms.describe());
			const t = ctx.locale.bind(NS);
			const injected = () => ({
				controller,
				hooks: { snapshot: controller.store },
				operations,
				schema,
				t
			});
			ctx.effect(() => {
				const refreshModels = () => {
					refreshIfLoaded(controller);
				};
				return () => [
					ctx.remote.$on("settings/document-updated", () => {
						refreshModels();
					}),
					ctx.remote.$on("credentials/reference-updated", refreshModels),
					ctx.remote.$on("llm/adapters-updated", refreshModels),
					ctx.on("connection/reset", refreshModels)
				];
			}, "dsh-model-extension: pushed invalidations");
			ctx.slots.inject("settings.section", () => ctx.slots.register({
				name: "settings.section",
				id: "models-extension",
				order: 11,
				label: () => t("nav"),
				inject: injected
			}, ModelsPlusSection));
		}
		//#endregion
		exports.apply = apply;
		exports.inject = inject;
		exports.name = name;
		return module.exports;
	}
});

//# sourceMappingURL=client.js.map