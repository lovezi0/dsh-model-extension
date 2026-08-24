window.__ModuleLoader__.load({
	id: "dsh-model-extension",
	factory: (require) => {
		var module = { exports: {} };
		var exports = module.exports;
var __extCss = ".Qji2zG_section{max-width:720px;color:var(--dsw-alias-label-primary);flex-direction:column;gap:12px;display:flex}.Qji2zG_title{color:var(--dsw-alias-label-primary);margin:0;font-size:16px;font-weight:500;line-height:24px}.Qji2zG_intro{color:var(--dsw-alias-label-tertiary);margin:0;font-size:14px;line-height:22px}.Qji2zG_notice{color:var(--dsw-alias-state-warn-label);margin:0;font-size:12px;line-height:18px}.Qji2zG_savedNotice{color:var(--dsw-alias-state-success-primary);margin:0;font-size:12px;line-height:18px}.Qji2zG_rows{flex-direction:column;gap:8px;margin:12px 0 0;padding:0;list-style:none;display:flex}.Qji2zG_rowCard{border:1px solid var(--dsw-alias-border-l2);border-radius:12px;flex-direction:column;gap:12px;padding:12px 14px;display:flex}.Qji2zG_rowHead{align-items:center;gap:10px;display:flex}.Qji2zG_rowIdentity{align-items:center;gap:6px;min-width:0;display:inline-flex}.Qji2zG_rowName{color:var(--dsw-alias-label-primary);font-size:14px;font-weight:500;line-height:22px}.Qji2zG_rowTag{border:1px solid var(--dsw-alias-border-l3);color:var(--dsw-alias-label-secondary);border-radius:4px;flex:none;padding:1px 6px;font-size:11px;line-height:16px}.Qji2zG_credentialDot{box-sizing:border-box;border-radius:50%;flex:none;width:8px;height:8px;display:inline-block}.Qji2zG_credentialDotConfigured{background:var(--dsw-alias-state-success-primary)}.Qji2zG_credentialDotMissing{background:var(--dsw-alias-state-error-primary)}.Qji2zG_rowActions{align-items:center;gap:4px;margin-left:auto;display:inline-flex}.Qji2zG_primaryButton,.Qji2zG_secondaryButton,.Qji2zG_addButton{box-sizing:border-box;height:36px;font:inherit;cursor:pointer;border:none;border-radius:18px;justify-content:center;align-items:center;gap:4px;padding:0 14px;font-size:14px;line-height:22px;display:inline-flex}.Qji2zG_primaryButton{background:var(--dsw-alias-button-primary-fill);color:var(--dsw-alias-label-primary-foreground)}.Qji2zG_primaryButton:hover:not(:disabled){background:var(--dsw-alias-button-primary-hover)}.Qji2zG_secondaryButton,.Qji2zG_addButton{border:1px solid var(--dsw-alias-border-l2);color:var(--dsw-alias-label-primary);background:0 0}.Qji2zG_secondaryButton:hover:not(:disabled),.Qji2zG_addButton:hover:not(:disabled){background:var(--dsw-alias-interactive-bg-hover)}.Qji2zG_secondaryButton:hover:not(:disabled){background:var(--dsw-alias-interactive-bg-hover-solid)}.Qji2zG_dangerButton{box-sizing:border-box;height:36px;color:var(--dsw-alias-state-error-primary);font:inherit;cursor:pointer;background:0 0;border:none;border-radius:18px;justify-content:center;align-items:center;padding:0 14px;font-size:14px;line-height:22px;display:inline-flex}.Qji2zG_dangerButton:hover:not(:disabled){background:var(--dsw-alias-interactive-bg-hover-danger)}.Qji2zG_rowActions .Qji2zG_secondaryButton,.Qji2zG_rowActions .Qji2zG_dangerButton{border-radius:14px;height:28px;padding:0 10px;font-size:12px;line-height:18px}.Qji2zG_primaryButton:disabled,.Qji2zG_secondaryButton:disabled,.Qji2zG_dangerButton:disabled,.Qji2zG_addButton:disabled,.Qji2zG_linkButton:disabled,.Qji2zG_addModelButton:disabled{opacity:.4;cursor:default}.Qji2zG_primaryButton:focus-visible,.Qji2zG_secondaryButton:focus-visible,.Qji2zG_dangerButton:focus-visible,.Qji2zG_addButton:focus-visible,.Qji2zG_linkButton:focus-visible,.Qji2zG_addModelButton:focus-visible,.Qji2zG_iconButton:focus-visible,.Qji2zG_customizedSummary:focus-visible{box-shadow:0 0 0 2px var(--dsw-alias-border-l3);outline:none}.Qji2zG_editor{background:var(--dsw-alias-bg-module-platform);border-radius:12px;flex-direction:column;gap:14px;padding:14px 16px;display:flex}.Qji2zG_editorHeader{align-items:baseline;gap:8px;display:flex}.Qji2zG_editorTitle{color:var(--dsw-alias-label-primary);font-size:14px;font-weight:500;line-height:22px}.Qji2zG_editorRoute{color:var(--dsw-alias-label-tertiary);font-size:12px;line-height:18px}.Qji2zG_field{flex-direction:column;gap:6px;display:flex}.Qji2zG_fieldLabel{color:var(--dsw-alias-label-secondary);align-items:center;gap:10px;font-size:12px;font-weight:500;line-height:18px;display:inline-flex}.Qji2zG_linkButton{box-sizing:border-box;height:28px;color:var(--dsw-alias-label-tertiary);font:inherit;cursor:pointer;background:0 0;border:none;border-radius:14px;align-items:center;padding:0 10px;font-size:12px;line-height:18px;display:inline-flex}.Qji2zG_linkButton:hover:not(:disabled){background:var(--dsw-alias-interactive-bg-hover);color:var(--dsw-alias-label-secondary)}.Qji2zG_advancedHint{color:var(--dsw-alias-label-tertiary);margin:0;font-size:12px;line-height:18px}.Qji2zG_editorActions{justify-content:flex-end;gap:8px;display:flex}.Qji2zG_addBlock{flex-direction:column;gap:12px;display:flex}.Qji2zG_addActions{flex-wrap:wrap;gap:10px;display:flex}.Qji2zG_addButton{border:1px dashed var(--dsw-alias-border-l3);border-radius:12px;flex:1 1 0;gap:6px;min-width:180px;height:44px}.Qji2zG_addCard,.Qji2zG_setupCard{background:var(--dsw-alias-bg-module-platform);border-radius:12px;flex-direction:column;gap:14px;padding:14px 16px;list-style:none;display:flex}.Qji2zG_addCard .Qji2zG_editor,.Qji2zG_setupCard .Qji2zG_editor{background:0 0;padding:0}.Qji2zG_customized{border-top:1px solid var(--dsw-alias-border-l2);padding-top:10px}.Qji2zG_customizedSummary{cursor:pointer;width:fit-content;color:var(--dsw-alias-label-secondary);border-radius:6px;align-items:center;gap:6px;margin-left:-4px;padding:2px 4px;font-size:12px;font-weight:500;line-height:18px;list-style:none;display:flex}.Qji2zG_customizedSummary::-webkit-details-marker{display:none}.Qji2zG_customizedSummary:before{content:\"\";border-bottom:1.5px solid;border-right:1.5px solid;width:5px;height:5px;transition:transform .12s;transform:rotate(-45deg)translate(-1px,-1px)}.Qji2zG_customized[open]>.Qji2zG_customizedSummary:before{transform:rotate(45deg)translate(-1px,-1px)}.Qji2zG_customizedSummary:hover{color:var(--dsw-alias-label-primary)}.Qji2zG_customizedBody{flex-direction:column;gap:12px;padding-top:12px;display:flex}.Qji2zG_modelCatalog{border-top:1px solid var(--dsw-alias-border-l2);flex-direction:column;gap:10px;padding-top:12px;display:flex}.Qji2zG_modelCatalogHeading{flex-direction:column;gap:2px;display:flex}.Qji2zG_modelCatalogTitle{color:var(--dsw-alias-label-secondary);font-size:12px;font-weight:500;line-height:18px}.Qji2zG_modelCatalogMeta,.Qji2zG_modelEmpty{color:var(--dsw-alias-label-tertiary);margin:0;font-size:12px;line-height:18px}.Qji2zG_modelList{flex-direction:column;gap:8px;display:flex}.Qji2zG_modelListHead{justify-content:space-between;align-items:flex-start;gap:12px;display:flex}.Qji2zG_modelEntry{border:1px solid var(--dsw-alias-border-l2);border-radius:8px;padding:6px}.Qji2zG_modelRow{grid-template-columns:minmax(0,1.4fr) minmax(0,1fr) auto auto;align-items:center;gap:6px;display:grid}.Qji2zG_iconButton{box-sizing:border-box;width:28px;height:28px;color:var(--dsw-alias-label-tertiary);cursor:pointer;background:0 0;border:none;border-radius:6px;justify-content:center;align-items:center;display:inline-flex}.Qji2zG_iconButton:hover:not(:disabled){background:var(--dsw-alias-interactive-bg-hover);color:var(--dsw-alias-label-primary)}.Qji2zG_iconButton:disabled{cursor:default;opacity:.4}.Qji2zG_iconButtonDanger:hover:not(:disabled){background:var(--dsw-alias-interactive-bg-hover-danger);color:var(--dsw-alias-state-error-primary)}.Qji2zG_modelAdvanced{grid-template-columns:repeat(auto-fit,minmax(160px,1fr));gap:8px;padding:8px 4px 2px;display:grid}.Qji2zG_modelField{flex-direction:column;gap:4px;display:flex}.Qji2zG_modelFieldLabel{color:var(--dsw-alias-label-tertiary);font-size:12px;line-height:18px}.Qji2zG_modelEmpty{border:1px dashed var(--dsw-alias-border-l3);text-align:center;border-radius:8px;padding:12px}.Qji2zG_addModelButton{box-sizing:border-box;border:1px solid var(--dsw-alias-border-l2);height:28px;color:var(--dsw-alias-label-primary);font:inherit;cursor:pointer;background:0 0;border-radius:14px;align-self:flex-start;align-items:center;gap:4px;padding:0 10px;font-size:12px;line-height:18px;display:inline-flex}.Qji2zG_addModelButton:hover:not(:disabled){background:var(--dsw-alias-interactive-bg-hover)}.Qji2zG_input{box-sizing:border-box;border:1px solid var(--dsw-alias-border-l2);width:100%;height:32px;font:inherit;background:var(--dsw-alias-bg-layer-1);color:var(--dsw-alias-label-primary);border-radius:8px;padding:0 10px;font-size:14px;line-height:22px}select.Qji2zG_input{cursor:pointer;max-width:240px}.Qji2zG_input:focus{border-color:var(--dsw-alias-brand-primary);outline:none}.Qji2zG_input::placeholder{color:var(--dsw-alias-label-dimmed)}.Qji2zG_input:disabled{opacity:.6;cursor:default}.Qji2zG_selectInput{appearance:none;background-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12' fill='none'%3E%3Cpath d='M3 4.5L6 7.5L9 4.5' stroke='%2381858C' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E\");background-position:right 12px center;background-repeat:no-repeat;background-size:12px 12px;padding-right:32px}.Qji2zG_error{color:var(--dsw-alias-state-error-primary);margin:0;font-size:12px;line-height:18px}.Qji2zG_deleteDialog{width:min(480px,100%)}.Qji2zG_deleteConfirm:not(:disabled){border-color:var(--dsw-alias-state-error-primary);color:var(--dsw-alias-state-error-primary)}.Qji2zG_deleteConfirm:hover:not(:disabled){background:var(--dsw-alias-interactive-bg-hover-danger)}.Qji2zG_hiddenLabel{clip:rect(0 0 0 0);white-space:nowrap;width:1px;height:1px;position:absolute;overflow:hidden}@media (prefers-reduced-motion:reduce){.Qji2zG_customizedSummary:before{transition:none}}.Qji2zG_fetchDialog{--dsh-scrollbar-thumb:var(--dsw-alias-scrollbar-bg-l2);--dsh-scrollbar-thumb-hover:var(--dsw-alias-scrollbar-hover-l2);max-width:520px}.Qji2zG_candidateActions{justify-content:flex-end;margin-bottom:6px;display:flex}.Qji2zG_candidateList{flex-direction:column;gap:2px;max-height:320px;margin:0;padding:0;list-style:none;display:flex;overflow-y:auto}.Qji2zG_candidate{border-radius:6px}.Qji2zG_candidateLabel{cursor:pointer;align-items:center;gap:8px;padding:6px 8px;display:flex}.Qji2zG_candidateId{font-family:var(--ds-font-family-code);overflow-wrap:anywhere;flex:auto;font-size:13px}.TST7FW_section{max-width:720px;color:var(--dsw-alias-label-primary);flex-direction:column;gap:12px;display:flex}.TST7FW_title{color:var(--dsw-alias-label-primary);margin:0;font-size:16px;font-weight:500;line-height:24px}.TST7FW_intro{color:var(--dsw-alias-label-tertiary);margin:0;font-size:14px;line-height:22px}.TST7FW_notice{color:var(--dsw-alias-state-warn-label);margin:0;font-size:12px;line-height:18px}.TST7FW_savedNotice{color:var(--dsw-alias-state-success-primary);margin:0;font-size:12px;line-height:18px}.TST7FW_rows{flex-direction:column;gap:8px;margin:12px 0 0;padding:0;list-style:none;display:flex}.TST7FW_rowCard{border:1px solid var(--dsw-alias-border-l2);border-radius:12px;flex-direction:column;gap:12px;padding:12px 14px;display:flex}.TST7FW_rowHead{align-items:center;gap:10px;display:flex}.TST7FW_rowIdentity{align-items:center;gap:6px;min-width:0;display:inline-flex}.TST7FW_rowName{color:var(--dsw-alias-label-primary);font-size:14px;font-weight:500;line-height:22px}.TST7FW_rowTag{border:1px solid var(--dsw-alias-border-l3);color:var(--dsw-alias-label-secondary);border-radius:4px;flex:none;padding:1px 6px;font-size:11px;line-height:16px}.TST7FW_credentialDot{box-sizing:border-box;border-radius:50%;flex:none;width:8px;height:8px;display:inline-block}.TST7FW_credentialDotConfigured{background:var(--dsw-alias-state-success-primary)}.TST7FW_credentialDotMissing{background:var(--dsw-alias-state-error-primary)}.TST7FW_rowActions{align-items:center;gap:4px;margin-left:auto;display:inline-flex}.TST7FW_primaryButton,.TST7FW_secondaryButton,.TST7FW_addButton{box-sizing:border-box;height:36px;font:inherit;cursor:pointer;border:none;border-radius:18px;justify-content:center;align-items:center;gap:4px;padding:0 14px;font-size:14px;line-height:22px;display:inline-flex}.TST7FW_primaryButton{background:var(--dsw-alias-button-primary-fill);color:var(--dsw-alias-label-primary-foreground)}.TST7FW_primaryButton:hover:not(:disabled){background:var(--dsw-alias-button-primary-hover)}.TST7FW_secondaryButton,.TST7FW_addButton{border:1px solid var(--dsw-alias-border-l2);color:var(--dsw-alias-label-primary);background:0 0}.TST7FW_secondaryButton:hover:not(:disabled),.TST7FW_addButton:hover:not(:disabled){background:var(--dsw-alias-interactive-bg-hover)}.TST7FW_secondaryButton:hover:not(:disabled){background:var(--dsw-alias-interactive-bg-hover-solid)}.TST7FW_dangerButton{box-sizing:border-box;height:36px;color:var(--dsw-alias-state-error-primary);font:inherit;cursor:pointer;background:0 0;border:none;border-radius:18px;justify-content:center;align-items:center;padding:0 14px;font-size:14px;line-height:22px;display:inline-flex}.TST7FW_dangerButton:hover:not(:disabled){background:var(--dsw-alias-interactive-bg-hover-danger)}.TST7FW_rowActions .TST7FW_secondaryButton,.TST7FW_rowActions .TST7FW_dangerButton{border-radius:14px;height:28px;padding:0 10px;font-size:12px;line-height:18px}.TST7FW_primaryButton:disabled,.TST7FW_secondaryButton:disabled,.TST7FW_dangerButton:disabled,.TST7FW_addButton:disabled,.TST7FW_linkButton:disabled,.TST7FW_addModelButton:disabled{opacity:.4;cursor:default}.TST7FW_primaryButton:focus-visible,.TST7FW_secondaryButton:focus-visible,.TST7FW_dangerButton:focus-visible,.TST7FW_addButton:focus-visible,.TST7FW_linkButton:focus-visible,.TST7FW_addModelButton:focus-visible,.TST7FW_iconButton:focus-visible,.TST7FW_customizedSummary:focus-visible{box-shadow:0 0 0 2px var(--dsw-alias-border-l3);outline:none}.TST7FW_editor{background:var(--dsw-alias-bg-module-platform);border-radius:12px;flex-direction:column;gap:14px;padding:14px 16px;display:flex}.TST7FW_editorHeader{align-items:baseline;gap:8px;display:flex}.TST7FW_editorTitle{color:var(--dsw-alias-label-primary);font-size:14px;font-weight:500;line-height:22px}.TST7FW_editorRoute{color:var(--dsw-alias-label-tertiary);font-size:12px;line-height:18px}.TST7FW_field{flex-direction:column;gap:6px;display:flex}.TST7FW_fieldLabel{color:var(--dsw-alias-label-secondary);align-items:center;gap:10px;font-size:12px;font-weight:500;line-height:18px;display:inline-flex}.TST7FW_linkButton{box-sizing:border-box;height:28px;color:var(--dsw-alias-label-tertiary);font:inherit;cursor:pointer;background:0 0;border:none;border-radius:14px;align-items:center;padding:0 10px;font-size:12px;line-height:18px;display:inline-flex}.TST7FW_linkButton:hover:not(:disabled){background:var(--dsw-alias-interactive-bg-hover);color:var(--dsw-alias-label-secondary)}.TST7FW_advancedHint{color:var(--dsw-alias-label-tertiary);margin:0;font-size:12px;line-height:18px}.TST7FW_editorActions{justify-content:flex-end;gap:8px;display:flex}.TST7FW_addBlock{flex-direction:column;gap:12px;display:flex}.TST7FW_addActions{flex-wrap:wrap;gap:10px;display:flex}.TST7FW_addButton{border:1px dashed var(--dsw-alias-border-l3);border-radius:12px;flex:1 1 0;gap:6px;min-width:180px;height:44px}.TST7FW_addCard,.TST7FW_setupCard{background:var(--dsw-alias-bg-module-platform);border-radius:12px;flex-direction:column;gap:14px;padding:14px 16px;list-style:none;display:flex}.TST7FW_addCard .TST7FW_editor,.TST7FW_setupCard .TST7FW_editor{background:0 0;padding:0}.TST7FW_customized{border-top:1px solid var(--dsw-alias-border-l2);padding-top:10px}.TST7FW_customizedSummary{cursor:pointer;width:fit-content;color:var(--dsw-alias-label-secondary);border-radius:6px;align-items:center;gap:6px;margin-left:-4px;padding:2px 4px;font-size:12px;font-weight:500;line-height:18px;list-style:none;display:flex}.TST7FW_customizedSummary::-webkit-details-marker{display:none}.TST7FW_customizedSummary:before{content:\"\";border-bottom:1.5px solid;border-right:1.5px solid;width:5px;height:5px;transition:transform .12s;transform:rotate(-45deg)translate(-1px,-1px)}.TST7FW_customized[open]>.TST7FW_customizedSummary:before{transform:rotate(45deg)translate(-1px,-1px)}.TST7FW_customizedSummary:hover{color:var(--dsw-alias-label-primary)}.TST7FW_customizedBody{flex-direction:column;gap:12px;padding-top:12px;display:flex}.TST7FW_modelCatalog{border-top:1px solid var(--dsw-alias-border-l2);flex-direction:column;gap:10px;padding-top:12px;display:flex}.TST7FW_modelCatalogHeading{flex-direction:column;gap:2px;display:flex}.TST7FW_modelCatalogTitle{color:var(--dsw-alias-label-secondary);font-size:12px;font-weight:500;line-height:18px}.TST7FW_modelCatalogMeta,.TST7FW_modelEmpty{color:var(--dsw-alias-label-tertiary);margin:0;font-size:12px;line-height:18px}.TST7FW_modelList{flex-direction:column;gap:8px;display:flex}.TST7FW_modelListHead{justify-content:space-between;align-items:flex-start;gap:12px;display:flex}.TST7FW_modelEntry{border:1px solid var(--dsw-alias-border-l2);border-radius:8px;padding:6px}.TST7FW_modelRow{grid-template-columns:minmax(0,1.4fr) minmax(0,1fr) auto auto;align-items:center;gap:6px;display:grid}.TST7FW_iconButton{box-sizing:border-box;width:28px;height:28px;color:var(--dsw-alias-label-tertiary);cursor:pointer;background:0 0;border:none;border-radius:6px;justify-content:center;align-items:center;display:inline-flex}.TST7FW_iconButton:hover:not(:disabled){background:var(--dsw-alias-interactive-bg-hover);color:var(--dsw-alias-label-primary)}.TST7FW_iconButton:disabled{cursor:default;opacity:.4}.TST7FW_iconButtonDanger:hover:not(:disabled){background:var(--dsw-alias-interactive-bg-hover-danger);color:var(--dsw-alias-state-error-primary)}.TST7FW_modelAdvanced{grid-template-columns:repeat(auto-fit,minmax(160px,1fr));gap:8px;padding:8px 4px 2px;display:grid}.TST7FW_modelExtensionFields{box-sizing:border-box;width:100%;display:block}.TST7FW_modelField{flex-direction:column;gap:4px;display:flex}.TST7FW_modelFieldLabel{color:var(--dsw-alias-label-tertiary);font-size:12px;line-height:18px}.TST7FW_modelEmpty{border:1px dashed var(--dsw-alias-border-l3);text-align:center;border-radius:8px;padding:12px}.TST7FW_addModelButton{box-sizing:border-box;border:1px solid var(--dsw-alias-border-l2);height:28px;color:var(--dsw-alias-label-primary);font:inherit;cursor:pointer;background:0 0;border-radius:14px;align-self:flex-start;align-items:center;gap:4px;padding:0 10px;font-size:12px;line-height:18px;display:inline-flex}.TST7FW_addModelButton:hover:not(:disabled){background:var(--dsw-alias-interactive-bg-hover)}.TST7FW_input{box-sizing:border-box;border:1px solid var(--dsw-alias-border-l2);width:100%;height:32px;font:inherit;background:var(--dsw-alias-bg-layer-1);color:var(--dsw-alias-label-primary);border-radius:8px;padding:0 10px;font-size:14px;line-height:22px}select.TST7FW_input{cursor:pointer;max-width:240px}.TST7FW_input:focus{border-color:var(--dsw-alias-brand-primary);outline:none}.TST7FW_input::placeholder{color:var(--dsw-alias-label-dimmed)}.TST7FW_input:disabled{opacity:.6;cursor:default}.TST7FW_selectInput{appearance:none;background-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12' fill='none'%3E%3Cpath d='M3 4.5L6 7.5L9 4.5' stroke='%2381858C' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E\");background-position:right 12px center;background-repeat:no-repeat;background-size:12px 12px;padding-right:32px}.TST7FW_error{color:var(--dsw-alias-state-error-primary);margin:0;font-size:12px;line-height:18px}.TST7FW_deleteDialog{width:min(480px,100%)}.TST7FW_deleteConfirm:not(:disabled){border-color:var(--dsw-alias-state-error-primary);color:var(--dsw-alias-state-error-primary)}.TST7FW_deleteConfirm:hover:not(:disabled){background:var(--dsw-alias-interactive-bg-hover-danger)}.TST7FW_hiddenLabel{clip:rect(0 0 0 0);white-space:nowrap;width:1px;height:1px;position:absolute;overflow:hidden}@media (prefers-reduced-motion:reduce){.TST7FW_customizedSummary:before{transition:none}}.TST7FW_fetchDialog{--dsh-scrollbar-thumb:var(--dsw-alias-scrollbar-bg-l2);--dsh-scrollbar-thumb-hover:var(--dsw-alias-scrollbar-hover-l2);max-width:520px}.TST7FW_candidateActions{justify-content:flex-end;margin-bottom:6px;display:flex}.TST7FW_candidateList{flex-direction:column;gap:2px;max-height:320px;margin:0;padding:0;list-style:none;display:flex;overflow-y:auto}.TST7FW_candidate{border-radius:6px}.TST7FW_candidateLabel{cursor:pointer;align-items:center;gap:8px;padding:6px 8px;display:flex}.TST7FW_candidateId{font-family:var(--ds-font-family-code);overflow-wrap:anywhere;flex:auto;font-size:13px}\n";
if (typeof document !== 'undefined' && document.querySelector('style[data-plugin-css="dsh-model-extension"]') === null) {
  var __tag = document.createElement('style');
  __tag.dataset.plugin = "dsh-model-extension";
  __tag.dataset.pluginCss = "dsh-model-extension/ModelsSection.ext.module.css";
  __tag.textContent = __extCss;
  document.head.appendChild(__tag);
}
		Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
		let react = require("react");
		let _deepseek_ai_dsh_client_ui_primitives = require("@deepseek-ai/dsh-client-ui-primitives");
		let react_jsx_runtime = require("react/jsx-runtime");
		let _deepseek_ai_dsh_client_runtime_client = require("@deepseek-ai/dsh-client-runtime/client");
		//#region
		/**
		* Browser-side judgement of a typed API key.
		* @module @deepseek-ai/dsh-client-ui-settings-models/apiKey
		*/
		/**
		* Twin of `normalizeApiKey` in `@deepseek-ai/dsh-llm`: printable ASCII, space
		* excluded. Client packages reference only client packages, so the charset
		* rule is mirrored here rather than imported; keep the two in step, as
		* `validateDeepSeekModels` is kept in step with the host's `catalogModel`.
		*/
		const LEGAL_API_KEY = /^[\x21-\x7E]+$/;
		/**
		* A pasted `NAME=value` environment line. Two narrowings keep real keys clear
		* of it: the name must be upper-case, so `sk-` forms break at the hyphen, and
		* the `=` must be followed by something other than another `=`, so base64
		* padding on an all-upper-case key (`ABCD==`) is not mistaken for an
		* assignment. This heuristic runs only here — a resolver applying it could
		* lock a user out of a gateway whose key legitimately takes this shape, with
		* the environment refusing it too and no way through.
		*/
		const ENV_LINE = /^[A-Z][A-Z0-9_]*=[^=]/;
		/** Whether a value is wrapped in one matching pair of quotes. */
		function isQuoted(value) {
			const first = value[0];
			if (first !== "\"" && first !== "'" && first !== "`") return false;
			return value.length > 1 && value.endsWith(first);
		}
		/**
		* Judge the key input's current value.
		*
		* An empty field is not a failure: every card opens with it empty even when a
		* key is already stored, where it means keep that one. A field holding only
		* whitespace is a failure rather than an empty field, so typed input is never
		* silently discarded.
		* @param draft - the key input's current value, untrimmed.
		* @returns the copy key for a field-level failure, or `undefined` to allow submit.
		*/
		function apiKeyFailure(draft) {
			if (draft.length === 0) return void 0;
			const value = draft.trim();
			if (value.length === 0) return "keyBlank";
			if (ENV_LINE.test(value) || isQuoted(value)) return "keyIllegalCharacters";
			if (!LEGAL_API_KEY.test(value)) return "keyIllegalCharacters";
		}
		//#endregion
		//#region
		var ModelsSection_module_default = {
			"addActions": "Qji2zG_addActions",
			"addBlock": "Qji2zG_addBlock",
			"addButton": "Qji2zG_addButton",
			"addCard": "Qji2zG_addCard",
			"addModelButton": "Qji2zG_addModelButton",
			"advancedHint": "Qji2zG_advancedHint",
			"candidate": "Qji2zG_candidate",
			"candidateActions": "Qji2zG_candidateActions",
			"candidateId": "Qji2zG_candidateId",
			"candidateLabel": "Qji2zG_candidateLabel",
			"candidateList": "Qji2zG_candidateList",
			"credentialDot": "Qji2zG_credentialDot",
			"credentialDotConfigured": "Qji2zG_credentialDotConfigured",
			"credentialDotMissing": "Qji2zG_credentialDotMissing",
			"customized": "Qji2zG_customized",
			"customizedBody": "Qji2zG_customizedBody",
			"customizedSummary": "Qji2zG_customizedSummary",
			"dangerButton": "Qji2zG_dangerButton",
			"deleteConfirm": "Qji2zG_deleteConfirm",
			"deleteDialog": "Qji2zG_deleteDialog",
			"editor": "Qji2zG_editor",
			"editorActions": "Qji2zG_editorActions",
			"editorHeader": "Qji2zG_editorHeader",
			"editorRoute": "Qji2zG_editorRoute",
			"editorTitle": "Qji2zG_editorTitle",
			"error": "Qji2zG_error",
			"fetchDialog": "Qji2zG_fetchDialog",
			"field": "Qji2zG_field",
			"fieldLabel": "Qji2zG_fieldLabel",
			"hiddenLabel": "Qji2zG_hiddenLabel",
			"iconButton": "Qji2zG_iconButton",
			"iconButtonDanger": "Qji2zG_iconButtonDanger",
			"input": "Qji2zG_input",
			"intro": "Qji2zG_intro",
			"linkButton": "Qji2zG_linkButton",
			"modelAdvanced": "Qji2zG_modelAdvanced",
			"modelCatalog": "Qji2zG_modelCatalog",
			"modelCatalogHeading": "Qji2zG_modelCatalogHeading",
			"modelCatalogMeta": "Qji2zG_modelCatalogMeta",
			"modelCatalogTitle": "Qji2zG_modelCatalogTitle",
			"modelEmpty": "Qji2zG_modelEmpty",
			"modelEntry": "Qji2zG_modelEntry",
			"modelField": "Qji2zG_modelField",
			"modelFieldLabel": "Qji2zG_modelFieldLabel",
			"modelList": "Qji2zG_modelList",
			"modelListHead": "Qji2zG_modelListHead",
			"modelRow": "Qji2zG_modelRow",
			"notice": "Qji2zG_notice",
			"primaryButton": "Qji2zG_primaryButton",
			"rowActions": "Qji2zG_rowActions",
			"rowCard": "Qji2zG_rowCard",
			"rowHead": "Qji2zG_rowHead",
			"rowIdentity": "Qji2zG_rowIdentity",
			"rowName": "Qji2zG_rowName",
			"rows": "Qji2zG_rows",
			"rowTag": "Qji2zG_rowTag",
			"savedNotice": "Qji2zG_savedNotice",
			"secondaryButton": "Qji2zG_secondaryButton",
			"section": "Qji2zG_section",
			"selectInput": "Qji2zG_selectInput",
			"setupCard": "Qji2zG_setupCard",
			"title": "Qji2zG_title"
		};
		//#endregion
		//#region
		/**
		* Render one provider card's action row.
		* @param props - the labels, commit gating, and handlers the owning card supplies.
		* @returns the cancel/commit row.
		*/
		function EditorFooter(props) {
			const { t } = props;
			return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
				className: ModelsSection_module_default["editorActions"],
				children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
					type: "button",
					className: ModelsSection_module_default["secondaryButton"],
					disabled: props.busy,
					onClick: props.onCancel,
					children: t(props.cancelLabel ?? "cancel")
				}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
					type: "button",
					className: ModelsSection_module_default["primaryButton"],
					disabled: props.submitDisabled,
					onClick: props.onSubmit,
					children: props.busy ? t(props.submitBusyLabel) : t(props.submitLabel)
				})]
			});
		}
		//#endregion
		//#region
		/**
		* Curated editor for the direct DeepSeek adapter's advisory model catalog.
		* The settings layer replaces `models` as one array, so the parent supplies
		* the effective inherited rows until the first edit materializes a user
		* override; reset removes that override instead of copying defaults into it.
		*/
		/** Row index encoded in an editing-buffer key. */
		function rowOf(key) {
			return Number(key.slice(0, key.indexOf(":")));
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
		* (rejected by {@link validateDeepSeekModels} before any write).
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
		/**
		* Validate adapter constraints that the serialized schema cannot express.
		* @param value - user-owned `models` value, or undefined while inherited.
		* @returns the first invalid row, or undefined when the adapter will accept it.
		*/
		function validateDeepSeekModels(value) {
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
			}
		}
		/**
		* Render the direct DeepSeek adapter's model catalog: id and display name on
		* each row, capacities behind the row's own disclosure.
		* @param props - effective rows plus the array-level override actions.
		* @returns the catalog editor.
		*/
		function DeepSeekModelsEditor(props) {
			const [editing, setEditing] = (0, react.useState)(() => /* @__PURE__ */ new Map());
			const [expanded, setExpanded] = (0, react.useState)(() => /* @__PURE__ */ new Set());
			const update = (index, key, value) => {
				const next = props.models.map((model, at) => {
					const copy = { ...model };
					if (at !== index) return copy;
					if (value === void 0) Reflect.deleteProperty(copy, key);
					else copy[key] = value;
					return copy;
				});
				props.onChange(next);
			};
			const remove = (index) => {
				setEditing((current) => {
					const next = /* @__PURE__ */ new Map();
					for (const [key, text] of current) {
						const at = rowOf(key);
						if (at === index) continue;
						next.set(at > index ? key.replace(/^\d+/, String(at - 1)) : key, text);
					}
					return next;
				});
				setExpanded((current) => {
					const next = /* @__PURE__ */ new Set();
					for (const at of current) {
						if (at === index) continue;
						next.add(at > index ? at - 1 : at);
					}
					return next;
				});
				props.onChange(props.models.filter((_model, at) => at !== index).map((model) => ({ ...model })));
			};
			const reset = () => {
				setEditing(/* @__PURE__ */ new Map());
				setExpanded(/* @__PURE__ */ new Set());
				props.onReset();
			};
			const toggle = (index) => {
				setExpanded((current) => {
					const next = new Set(current);
					if (!next.delete(index)) next.add(index);
					return next;
				});
			};
			/** The field's text: its live keystrokes, else the stored count spelled short. */
			const capacityText = (model, index, field) => {
				const typed = editing.get(`${String(index)}:${field}`);
				if (typed !== void 0) return typed;
				const value = model[field];
				return typeof value === "number" ? formatCapacity(value) : "";
			};
			const settleCapacity = (index, field) => {
				const key = `${String(index)}:${field}`;
				const typed = editing.get(key);
				if (typed === void 0) return;
				const parsed = parseCapacity(typed);
				if (parsed !== void 0 && Number.isNaN(parsed)) return;
				setEditing((current) => {
					const next = new Map(current);
					next.delete(key);
					return next;
				});
			};
			/** One capacity field of one row, rendered inside the row's disclosure. */
			const capacityField = (model, index, field, fallback) => /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("label", {
				className: ModelsSection_module_default["modelField"],
				children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
					className: ModelsSection_module_default["modelFieldLabel"],
					children: props.t(field === "contextWindow" ? "contextWindow" : "maxTokens")
				}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("input", {
					className: ModelsSection_module_default["input"],
					type: "text",
					inputMode: "numeric",
					value: capacityText(model, index, field),
					placeholder: fallback === void 0 ? props.t(field === "contextWindow" ? "contextWindowPlaceholder" : "maxTokensPlaceholder") : formatCapacity(fallback),
					"aria-label": `${props.t(field === "contextWindow" ? "contextWindow" : "maxTokens")} ${String(index + 1)}`,
					disabled: props.disabled,
					onChange: (event) => {
						const text = event.target.value;
						setEditing((current) => new Map(current).set(`${String(index)}:${field}`, text));
						update(index, field, parseCapacity(text));
					},
					onBlur: () => {
						settleCapacity(index, field);
					}
				})]
			});
			return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("section", {
				className: ModelsSection_module_default["modelCatalog"],
				"aria-label": props.t("models"),
				children: [
					/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
						className: ModelsSection_module_default["modelListHead"],
						children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
							className: ModelsSection_module_default["modelCatalogHeading"],
							children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
								className: ModelsSection_module_default["modelCatalogTitle"],
								children: props.t("models")
							}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
								className: ModelsSection_module_default["modelCatalogMeta"],
								children: props.overridden ? props.t("modelsCustomized") : props.t("modelsInherited")
							})]
						}), props.overridden ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
							type: "button",
							className: ModelsSection_module_default["linkButton"],
							disabled: props.disabled,
							onClick: reset,
							children: props.t("resetModels")
						}) : null]
					}),
					props.models.length === 0 ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
						className: ModelsSection_module_default["modelEmpty"],
						children: props.t("modelsEmpty")
					}) : /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
						className: ModelsSection_module_default["modelList"],
						children: props.models.map((model, index) => /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
							className: ModelsSection_module_default["modelEntry"],
							children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
								className: ModelsSection_module_default["modelRow"],
								children: [
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)("input", {
										className: ModelsSection_module_default["input"],
										type: "text",
										value: typeof model["id"] === "string" ? model["id"] : "",
										placeholder: props.t("modelId"),
										"aria-label": `${props.t("modelId")} ${String(index + 1)}`,
										disabled: props.disabled,
										onChange: (event) => {
											update(index, "id", event.target.value);
										},
										onBlur: (event) => {
											const trimmed = event.target.value.trim();
											if (trimmed !== event.target.value) update(index, "id", trimmed);
										}
									}),
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)("input", {
										className: ModelsSection_module_default["input"],
										type: "text",
										value: typeof model["name"] === "string" ? model["name"] : "",
										placeholder: props.t("modelName"),
										"aria-label": `${props.t("modelName")} ${String(index + 1)}`,
										disabled: props.disabled,
										onChange: (event) => {
											update(index, "name", event.target.value === "" ? void 0 : event.target.value);
										}
									}),
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
										type: "button",
										className: ModelsSection_module_default["iconButton"],
										"aria-label": `${props.t("modelAdvanced")} ${String(index + 1)}`,
										"aria-expanded": expanded.has(index),
										title: props.t("modelAdvanced"),
										onClick: () => {
											toggle(index);
										},
										children: expanded.has(index) ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.IconChevronDownOutline14, {}) : /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.IconChevronRightOutline14, {})
									}),
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
										type: "button",
										className: `${ModelsSection_module_default["iconButton"]} ${ModelsSection_module_default["iconButtonDanger"]}`,
										"aria-label": `${props.t("removeModel")} ${String(index + 1)}`,
										title: props.t("removeModel"),
										disabled: props.disabled,
										onClick: () => {
											remove(index);
										},
										children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.IconTrashOutline16, { size: 14 })
									})
								]
							}), expanded.has(index) ? /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
								className: ModelsSection_module_default["modelAdvanced"],
								children: [capacityField(model, index, "contextWindow", props.defaultContextWindow), capacityField(model, index, "maxTokens", props.defaultMaxTokens)]
							}) : null]
						}, index))
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("button", {
						type: "button",
						className: ModelsSection_module_default["addModelButton"],
						disabled: props.disabled,
						onClick: () => {
							props.onChange([...props.models.map((model) => ({ ...model })), { id: "" }]);
						},
						children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.IconPlusOutline16, { size: 14 }), props.t("addModel")]
					})
				]
			});
		}
		//#endregion
		//#region
		/**
		* Any route key walks a dict schema to the same profile node, so the lookup
		* names one that cannot collide with a configured route.
		*/
		const PROBE_ROUTE = "\0probe";
		/**
		* Human text for a rejected wire call. A transport failure rejects with an
		* Error; a host or a runtime can reject with anything, and the page still has
		* to say something.
		* @param error - the rejection value.
		* @returns the message to show.
		*/
		function messageOf(error) {
			return error instanceof Error ? error.message : String(error);
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
			api;
			schema;
			describeFace;
			/** The snapshot the section renders from (uSES-safe store). */
			store = (0, _deepseek_ai_dsh_client_runtime_client.createSnapshotStore)({
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
			* @param api - the wire face (credentials/llm domains, and settings writes).
			* @param describeFace - the shared mirror's describe face (namespace views and writability).
			*/
			constructor(api, schema, describeFace) {
				this.api = api;
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
				let providers;
				let writable;
				let views;
				try {
					const [providersResponse] = await Promise.all([this.api.llm.providers({}), this.describeFace.ensure()]);
					if (!providersResponse.result.ok) throw new Error(providersResponse.result.error.message);
					const mirrored = this.describeFace.getSnapshot();
					if (mirrored.view === void 0) throw new Error(mirrored.error ?? "settings are unavailable in this browser");
					providers = providersResponse.result.value.providers;
					writable = mirrored.view.writable;
					views = mirrored.view.namespaces;
				} catch (error) {
					if (generation !== this.generation) return;
					this.store.update((s) => {
						s.status = "error";
						s.error = error instanceof Error ? error.message : String(error);
					});
					return;
				}
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
				const refs = [...new Set(rows.flatMap((row) => row.apiKeyEnv === void 0 ? [] : [row.apiKeyEnv]))];
				let credentials = {};
				let credentialError = null;
				if (refs.length > 0) try {
					const response = await this.api.credentials.describe({ refs });
					if (response.result.ok) credentials = response.result.value.credentials;
					else credentialError = response.result.error.message;
				} catch (error) {
					credentialError = messageOf(error);
				}
				if (generation !== this.generation) return;
				this.store.update((s) => {
					s.status = "ready";
					s.error = null;
					s.credentialError = credentialError;
					s.writable = writable;
					s.rows = rows.map((row) => ({
						...row,
						...row.apiKeyEnv !== void 0 && credentials[row.apiKeyEnv] !== void 0 ? { credential: credentials[row.apiKeyEnv] } : {}
					}));
					s.namespaces = namespaces;
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
		//#region src/client/ModelsSection.ext.module.css
		var ModelsSection_ext_module_default = {
			"addActions": "TST7FW_addActions",
			"addBlock": "TST7FW_addBlock",
			"addButton": "TST7FW_addButton",
			"addCard": "TST7FW_addCard",
			"addModelButton": "TST7FW_addModelButton",
			"advancedHint": "TST7FW_advancedHint",
			"candidate": "TST7FW_candidate",
			"candidateActions": "TST7FW_candidateActions",
			"candidateId": "TST7FW_candidateId",
			"candidateLabel": "TST7FW_candidateLabel",
			"candidateList": "TST7FW_candidateList",
			"credentialDot": "TST7FW_credentialDot",
			"credentialDotConfigured": "TST7FW_credentialDotConfigured",
			"credentialDotMissing": "TST7FW_credentialDotMissing",
			"customized": "TST7FW_customized",
			"customizedBody": "TST7FW_customizedBody",
			"customizedSummary": "TST7FW_customizedSummary",
			"dangerButton": "TST7FW_dangerButton",
			"deleteConfirm": "TST7FW_deleteConfirm",
			"deleteDialog": "TST7FW_deleteDialog",
			"editor": "TST7FW_editor",
			"editorActions": "TST7FW_editorActions",
			"editorHeader": "TST7FW_editorHeader",
			"editorRoute": "TST7FW_editorRoute",
			"editorTitle": "TST7FW_editorTitle",
			"error": "TST7FW_error",
			"fetchDialog": "TST7FW_fetchDialog",
			"field": "TST7FW_field",
			"fieldLabel": "TST7FW_fieldLabel",
			"hiddenLabel": "TST7FW_hiddenLabel",
			"iconButton": "TST7FW_iconButton",
			"iconButtonDanger": "TST7FW_iconButtonDanger",
			"input": "TST7FW_input",
			"intro": "TST7FW_intro",
			"linkButton": "TST7FW_linkButton",
			"modelAdvanced": "TST7FW_modelAdvanced",
			"modelCatalog": "TST7FW_modelCatalog",
			"modelCatalogHeading": "TST7FW_modelCatalogHeading",
			"modelCatalogMeta": "TST7FW_modelCatalogMeta",
			"modelCatalogTitle": "TST7FW_modelCatalogTitle",
			"modelEmpty": "TST7FW_modelEmpty",
			"modelEntry": "TST7FW_modelEntry",
			"modelExtensionFields": "TST7FW_modelExtensionFields",
			"modelField": "TST7FW_modelField",
			"modelFieldLabel": "TST7FW_modelFieldLabel",
			"modelList": "TST7FW_modelList",
			"modelListHead": "TST7FW_modelListHead",
			"modelRow": "TST7FW_modelRow",
			"notice": "TST7FW_notice",
			"primaryButton": "TST7FW_primaryButton",
			"rowActions": "TST7FW_rowActions",
			"rowCard": "TST7FW_rowCard",
			"rowHead": "TST7FW_rowHead",
			"rowIdentity": "TST7FW_rowIdentity",
			"rowName": "TST7FW_rowName",
			"rows": "TST7FW_rows",
			"rowTag": "TST7FW_rowTag",
			"savedNotice": "TST7FW_savedNotice",
			"secondaryButton": "TST7FW_secondaryButton",
			"section": "TST7FW_section",
			"selectInput": "TST7FW_selectInput",
			"setupCard": "TST7FW_setupCard",
			"title": "TST7FW_title"
		};
		//#endregion
		//#region src/client/extension-meta.ts
		const ADAPTER_VERSION = "0.1.1-rc.2";
		/** Thinking levels offered by llm-pi-ai (THINKING_LEVEL_GATE @ rc.2). Only `off` may carry an empty wire value. */
		const THINKING_LEVELS = [
			"off",
			"minimal",
			"low",
			"medium",
			"high",
			"xhigh",
			"max"
		];
		/** Input modalities accepted by llm-pi-ai (MODALITY_GATE @ rc.2). */
		const MODALITIES = ["text", "image"];
		/** Reasoning wire formats understood by llm-pi-ai (SUPPORTED_THINKING_FORMATS @ rc.2). */
		const THINKING_FORMATS = [
			"openai",
			"deepseek",
			"openrouter",
			"together",
			"zai",
			"qwen",
			"chat-template",
			"qwen-chat-template",
			"string-thinking",
			"ant-ling"
		];
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
			customNeedsModels: "A custom provider needs at least one model.",
			create: "Create provider",
			creating: "Creating…",
			onboardingTitle: "Add an API key to get started",
			onboardingDescription: "Configure the official DeepSeek provider to start building.",
			onboardingLater: "Configure later",
			onboardingSave: "Save and continue",
			onboardingSaving: "Saving…",
			keyRequired: "Enter an API key to continue.",
			adapterVersion: "Current adapter: {version}",
			extDeclare: "Declared",
			extSection: "Model extensions",
			extSectionHint: "Extra per-model fields that live in settings.yaml.",
			supportsReasoningEffort: "Endpoint accepts reasoning effort",
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
			customNeedsModels: "自定义提供方至少需要一个模型。",
			create: "创建提供方",
			creating: "创建中…",
			onboardingTitle: "先添加一个 API 密钥即可开始",
			onboardingDescription: "配置官方 DeepSeek 提供方以开始构建。",
			onboardingLater: "稍后配置",
			onboardingSave: "保存并继续",
			onboardingSaving: "保存中…",
			keyRequired: "请输入 API 密钥以继续。",
			adapterVersion: "当前适配器：{version}",
			extDeclare: "声明",
			extSection: "模型扩展",
			extSectionHint: "settings.yaml 中按模型生效的扩展字段。",
			supportsReasoningEffort: "端点接受推理挡位参数（reasoning_effort）",
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
		//#region src/client/ModelExtensionFields.tsx
		/** Chinese display names for the thinking levels (wire value stays in parentheses). */
		const LEVEL_LABELS = {
			off: {
				zh: "关闭",
				en: "Off"
			},
			minimal: {
				zh: "极小",
				en: "Minimal"
			},
			low: {
				zh: "低",
				en: "Low"
			},
			medium: {
				zh: "中",
				en: "Medium"
			},
			high: {
				zh: "高",
				en: "High"
			},
			xhigh: {
				zh: "超高",
				en: "Extra High"
			},
			max: {
				zh: "最大",
				en: "Max"
			}
		};
		/** Chinese display names for the input modalities. */
		const MODALITY_LABELS = {
			text: {
				zh: "文本",
				en: "Text"
			},
			image: {
				zh: "图像",
				en: "Image"
			}
		};
		/** Shared checkbox inline style (matches the host's checkbox look). */
		const checkboxStyle = {
			width: "15px",
			height: "15px",
			margin: 0,
			accentColor: "var(--dsw-alias-brand-primary)",
			flex: "none"
		};
		/** The row's compat sub-object as a plain record (absent → empty). */
		function compatOf(model) {
			const value = model["compat"];
			return typeof value === "object" && value !== null && !Array.isArray(value) ? value : {};
		}
		/** The row's reasoningEfforts dict (absent/false/invalid → undefined = not declared). */
		function effortsOf(model) {
			const value = model["reasoningEfforts"];
			if (typeof value !== "object" || value === null || Array.isArray(value)) return void 0;
			return value;
		}
		/**
		* Render the extension block for one model row.
		* @param props - the row draft, its writer, and the disabled flag.
		* @returns the extension fields section.
		*/
		function ModelExtensionFields(props) {
			const { model, onChange, disabled = false } = props;
			const isZh = typeof document !== "undefined" && document.documentElement.lang.startsWith("zh");
			const t = (key) => (isZh ? zh : en)[key];
			const levelLabel = (level) => isZh ? `${LEVEL_LABELS[level].zh} (${level})` : `${LEVEL_LABELS[level].en} (${level})`;
			const modalityLabel = (modality) => isZh ? MODALITY_LABELS[modality]?.zh ?? modality : MODALITY_LABELS[modality]?.en ?? modality;
			const compat = compatOf(model);
			const supportsReasoningEffort = compat["supportsReasoningEffort"] === true;
			/** Write one key into `compat`, merging into the row's existing compat and
			*  clearing the whole `compat` node when it would become empty. Used for
			*  `supportsReasoningEffort` and `thinkingFormat` ONLY — those are the only
			*  model extension fields that live under `compat`. */
			const setCompatKey = (key, value) => {
				const next = { ...compat };
				if (value === void 0) delete next[key];
				else next[key] = value;
				onChange({ compat: Object.keys(next).length === 0 ? void 0 : next });
			};
			const setEfforts = (efforts) => {
				onChange({ reasoningEfforts: efforts });
			};
			const setInput = (modalities) => {
				onChange({ input: modalities.length === 0 ? void 0 : modalities });
			};
			const toggleLevel = (level, checked) => {
				const efforts = { ...effortsOf(model) ?? {} };
				if (checked) efforts[level] = level === "off" ? null : level;
				else delete efforts[level];
				const next = { reasoningEfforts: Object.keys(efforts).length === 0 ? void 0 : efforts };
				onChange(next);
			};
			const setWireValue = (level, text) => {
				const efforts = { ...effortsOf(model) ?? {} };
				if (!(level in efforts)) return;
				efforts[level] = text.trim().length === 0 ? null : text.trim();
				setEfforts(efforts);
			};
			const toggleModality = (modality, checked) => {
				const current = Array.isArray(model["input"]) ? model["input"] : ["text"];
				setInput(checked ? [.../* @__PURE__ */ new Set([...current, modality])] : current.filter((entry) => entry !== modality));
			};
			const efforts = effortsOf(model);
			const declaredLevels = efforts === void 0 ? [] : THINKING_LEVELS.filter((level) => level in efforts);
			const inputList = Array.isArray(model["input"]) ? model["input"] : [];
			const thinkingFormat = typeof compat["thinkingFormat"] === "string" ? compat["thinkingFormat"] : void 0;
			const hasEmptyWire = declaredLevels.some((level) => level !== "off" && String(efforts?.[level] ?? "").trim().length === 0);
			const onlyOffDeclared = efforts !== void 0 && declaredLevels.length > 0 && !declaredLevels.some((level) => level !== "off");
			/** One declared level's wire-value row inside the levels table. */
			const wireRow = (level) => {
				return level === "off" ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
					style: {
						fontSize: 12,
						color: "var(--color-text-tertiary, #999)"
					},
					children: "—"
				}) : /* @__PURE__ */ (0, react_jsx_runtime.jsx)("input", {
					className: ModelsSection_ext_module_default["input"],
					type: "text",
					value: String(efforts?.[level] ?? ""),
					"aria-label": `${t("reasoningEffortWire")} ${level}`,
					placeholder: level,
					disabled,
					onChange: (event) => {
						setWireValue(level, event.target.value);
					}
				});
			};
			return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("fieldset", {
				style: {
					border: "none",
					padding: 0,
					margin: 0,
					display: "flex",
					flexDirection: "column",
					gap: 14
				},
				children: [
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
						style: {
							borderTop: "0.5px solid var(--color-border-tertiary, rgba(0,0,0,0.15))",
							paddingTop: 12
						},
						children: /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("label", {
							style: {
								display: "inline-flex",
								alignItems: "center",
								gap: 8,
								cursor: "pointer"
							},
							children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("input", {
								type: "checkbox",
								style: checkboxStyle,
								checked: supportsReasoningEffort,
								disabled,
								onChange: (event) => {
									if (event.target.checked) setCompatKey("supportsReasoningEffort", true);
									else {
										const nextCompat = { ...compat };
										delete nextCompat["supportsReasoningEffort"];
										delete nextCompat["thinkingFormat"];
										onChange({
											compat: Object.keys(nextCompat).length === 0 ? void 0 : nextCompat,
											reasoningEfforts: void 0
										});
									}
								}
							}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
								className: ModelsSection_ext_module_default["modelFieldLabel"],
								children: t("supportsReasoningEffort")
							})]
						})
					}),
					!supportsReasoningEffort ? null : /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(react_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
							className: ModelsSection_ext_module_default["modelFieldLabel"],
							style: { marginBottom: 6 },
							children: t("reasoningEfforts")
						}),
						/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
							style: {
								border: "0.5px solid var(--color-border-tertiary, rgba(0,0,0,0.15))",
								borderRadius: "var(--border-radius-md, 8px)",
								overflow: "hidden"
							},
							children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
								style: {
									display: "grid",
									gridTemplateColumns: "56px 1fr 1fr",
									fontSize: 12,
									color: "var(--color-text-secondary, #666)",
									background: "var(--color-background-secondary, #f5f5f5)"
								},
								children: [
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
										style: { padding: "5px 10px" },
										children: t("extDeclare")
									}),
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
										style: {
											padding: "5px 10px",
											borderLeft: "0.5px solid var(--color-border-tertiary, rgba(0,0,0,0.15))"
										},
										children: t("reasoningEffortLevel")
									}),
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
										style: {
											padding: "5px 10px",
											borderLeft: "0.5px solid var(--color-border-tertiary, rgba(0,0,0,0.15))"
										},
										children: t("reasoningEffortWire")
									})
								]
							}), THINKING_LEVELS.map((level, at) => /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
								style: {
									display: "grid",
									gridTemplateColumns: "56px 1fr 1fr",
									alignItems: "center",
									borderTop: at === 0 ? "none" : "0.5px solid var(--color-border-tertiary, rgba(0,0,0,0.15))"
								},
								children: [
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
										style: {
											padding: "5px 10px",
											display: "flex",
											justifyContent: "center"
										},
										children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("input", {
											type: "checkbox",
											style: checkboxStyle,
											checked: level in (efforts ?? {}),
											disabled,
											onChange: (event) => {
												toggleLevel(level, event.target.checked);
											}
										})
									}),
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
										style: {
											padding: "5px 10px",
											fontSize: 13,
											borderLeft: "0.5px solid var(--color-border-tertiary, rgba(0,0,0,0.15))",
											opacity: level in (efforts ?? {}) ? 1 : .5
										},
										children: levelLabel(level)
									}),
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
										style: {
											padding: "5px 10px",
											borderLeft: "0.5px solid var(--color-border-tertiary, rgba(0,0,0,0.15))",
											opacity: level in (efforts ?? {}) ? 1 : .4
										},
										children: level in (efforts ?? {}) ? wireRow(level) : /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
											style: {
												fontSize: 12,
												color: "var(--color-text-tertiary, #999)"
											},
											children: "—"
										})
									})
								]
							}, level))]
						}),
						hasEmptyWire || onlyOffDeclared ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
							className: ModelsSection_ext_module_default["error"],
							style: { marginTop: 6 },
							children: hasEmptyWire ? t("reasoningEffortEmptyWire") : t("reasoningEffortsNeedNonOff")
						}) : null
					] }), /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("label", {
						className: ModelsSection_ext_module_default["modelField"],
						style: {
							display: "flex",
							flexDirection: "column",
							gap: 4
						},
						children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
							className: ModelsSection_ext_module_default["modelFieldLabel"],
							children: t("thinkingFormat")
						}), /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("select", {
							className: ModelsSection_ext_module_default["input"],
							value: thinkingFormat ?? "",
							disabled,
							onChange: (event) => {
								const value = event.target.value;
								setCompatKey("thinkingFormat", value === "" ? void 0 : value);
							},
							children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("option", {
								value: "",
								children: "—"
							}), THINKING_FORMATS.map((format) => /* @__PURE__ */ (0, react_jsx_runtime.jsx)("option", {
								value: format,
								children: format
							}, format))]
						})]
					})] }),
					/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
						style: {
							borderTop: "0.5px solid var(--color-border-tertiary, rgba(0,0,0,0.15))",
							paddingTop: 12
						},
						children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
							className: ModelsSection_ext_module_default["modelFieldLabel"],
							style: { marginBottom: 6 },
							children: t("inputModalities")
						}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
							style: {
								display: "flex",
								flexWrap: "wrap",
								gap: 16
							},
							children: MODALITIES.map((modality) => /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("label", {
								style: {
									display: "inline-flex",
									alignItems: "center",
									gap: 6,
									cursor: "pointer",
									fontSize: 13
								},
								children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("input", {
									type: "checkbox",
									style: checkboxStyle,
									checked: inputList.includes(modality),
									disabled,
									onChange: (event) => {
										toggleModality(modality, event.target.checked);
									}
								}), modalityLabel(modality)]
							}, modality))
						})]
					})
				]
			});
		}
		//#endregion
		//#region src/client/ModelListEditor.ext.tsx
		/**
		* The model list of one pi-ai provider profile (EXT fork for dsh-model-extension).
		*
		* Forked from deepseek-harness packages/client/ui-settings-models
		* src/client/ModelListEditor.tsx @ 0.1.1-rc.2.
		* Only difference vs upstream: each row's expanded capacities area additionally
		* renders <ModelExtensionFields>, which edits the same draft object in place —
		* the extension fields ride the card's existing save path untouched.
		*
		* The list is the profile's `models` array as the card holds it: an empty list
		* means "serve this route's built-in catalog", and any entry replaces that
		* catalog, so a row is only ever added deliberately. Fetching asks the endpoint
		* **the form currently shows** — including a key typed but not yet saved — so
		* adding a provider is one pass instead of save-then-return; the reply is
		* candidates the user picks from, never configuration written behind them.
		*
		* A provider that cannot be interrogated (an unreachable endpoint, a protocol
		* with no readable listing) is not a dead end: the failure is shown next to the
		* rows the user can still fill in by hand.
		*/
		/** A row's text field, or the empty string when unset or not a string. */
		function textOf(model, key) {
			const value = model[key];
			return typeof value === "string" ? value : "";
		}
		/** A row's numeric field, or `undefined` when unset or not a number. */
		function numberOf(model, key) {
			const value = model[key];
			return typeof value === "number" ? value : void 0;
		}
		/** Disclosure chevron; rotates to point down while its row is open. */
		function IconChevron({ open }) {
			return /* @__PURE__ */ (0, react_jsx_runtime.jsx)("svg", {
				width: "14",
				height: "14",
				viewBox: "0 0 16 16",
				fill: "none",
				"aria-hidden": true,
				style: {
					transform: open ? "rotate(90deg)" : void 0,
					transition: "transform 120ms ease"
				},
				children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
					d: "M6 3.5L10.5 8L6 12.5",
					stroke: "currentColor",
					strokeWidth: "1.5",
					strokeLinecap: "round",
					strokeLinejoin: "round"
				})
			});
		}
		/** Removal glyph for one model row. */
		function IconTrash() {
			return /* @__PURE__ */ (0, react_jsx_runtime.jsx)("svg", {
				width: "14",
				height: "14",
				viewBox: "0 0 16 16",
				fill: "none",
				"aria-hidden": true,
				children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
					d: "M2.5 4h11M6.5 4V2.5h3V4M4 4l.7 9a1 1 0 001 .9h4.6a1 1 0 001-.9L12 4M6.5 6.8v4.4M9.5 6.8v4.4",
					stroke: "currentColor",
					strokeWidth: "1.3",
					strokeLinecap: "round",
					strokeLinejoin: "round"
				})
			});
		}
		/**
		* What an empty capacity field is worth, shown as its placeholder so a row left
		* blank does not read as a model with no capacity at all.
		*
		* The magnitudes are the adapter's own route-level fallbacks (`llm-pi-ai`'s
		* `defaultContextWindow` and `defaultMaxTokens`), spelled the way a person
		* would say them. They are a hint, not a mirror: this page counts `K` as 1000,
		* so typing `256K` stores 256000 while leaving the field blank keeps the
		* adapter's 262144. A deployment that overrides those defaults is not
		* reflected here — nothing on this page can read them.
		*/
		const CAPACITY_HINT = {
			contextWindow: "256K",
			maxTokens: "32K"
		};
		/**
		* Spell a stored count for a field that may be unset. The spelling itself is
		* {@link formatCapacity}, shared with the DeepSeek catalog editor so both
		* surfaces read and write one K/M vocabulary.
		* @param value - stored capacity, or `undefined` for an unset field.
		* @returns the field text, empty when unset.
		*/
		function capacitySpelling(value) {
			return value === void 0 ? "" : formatCapacity(value);
		}
		/** Adopt a candidate, keeping whatever capacities the provider disclosed. */
		function adopt(candidate) {
			return {
				id: candidate.id,
				...candidate.name === void 0 ? {} : { name: candidate.name },
				...candidate.contextWindow === void 0 ? {} : { contextWindow: candidate.contextWindow },
				...candidate.maxTokens === void 0 ? {} : { maxTokens: candidate.maxTokens }
			};
		}
		/**
		* Render the model list with its fetch action.
		* @param props - the drafted rows, probe target, wire face, and copy.
		* @returns the model-list editor.
		*/
		function ModelListEditor(props) {
			const { models, onChange, probe, api, t, disabled } = props;
			const [busy, setBusy] = (0, react.useState)(false);
			const [failure, setFailure] = (0, react.useState)(void 0);
			const [candidates, setCandidates] = (0, react.useState)(void 0);
			const [picked, setPicked] = (0, react.useState)(/* @__PURE__ */ new Set());
			const [expanded, setExpanded] = (0, react.useState)(/* @__PURE__ */ new Set());
			const [editing, setEditing] = (0, react.useState)(/* @__PURE__ */ new Map());
			/** Buffer key for one capacity field; the row half moves when rows do. */
			const bufferKey = (index, field) => `${String(index)}:${field}`;
			const editCapacity = (index, field, text) => {
				setEditing((current) => new Map(current).set(bufferKey(index, field), text));
				patch(index, { [field]: parseCapacity(text) });
			};
			/** What a capacity field shows: the buffer while typing, else the stored count. */
			const capacityText = (model, index, field) => editing.get(bufferKey(index, field)) ?? capacitySpelling(numberOf(model, field));
			/** Drop one row's entries and shift the rows after it down, in one pass. */
			const reindexOnRemove = (current, index) => {
				const next = /* @__PURE__ */ new Map();
				for (const [key, value] of current) {
					const at = Number(key.slice(0, key.indexOf(":")));
					if (at === index) continue;
					next.set(at > index ? key.replace(/^\d+/, String(at - 1)) : key, value);
				}
				return next;
			};
			const toggleExpanded = (index) => {
				setExpanded((current) => {
					const next = new Set(current);
					if (!next.delete(index)) next.add(index);
					return next;
				});
			};
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
			const fetchModels = async () => {
				setBusy(true);
				setFailure(void 0);
				try {
					const response = await api.llm.discoverModels({
						settingsNs: probe.settingsNs,
						...probe.provider === void 0 ? {} : { provider: probe.provider },
						...probe.baseURL === void 0 || probe.baseURL.length === 0 ? {} : { baseURL: probe.baseURL },
						...probe.api === void 0 ? {} : { api: probe.api },
						...probe.apiKey === void 0 ? {} : { apiKey: probe.apiKey }
					});
					if (!response.result.ok) {
						setFailure(response.result.error.message);
						return;
					}
					const found = response.result.value.models;
					if (found.length === 0) {
						setFailure(t("fetchEmpty"));
						return;
					}
					const known = new Set(models.map((model) => textOf(model, "id")));
					setCandidates(found);
					setPicked(new Set(found.filter((model) => !known.has(model.id)).map((model) => model.id)));
				} catch (error) {
					setFailure(messageOf(error));
				} finally {
					setBusy(false);
				}
			};
			const closePicker = () => {
				setCandidates(void 0);
				setPicked(/* @__PURE__ */ new Set());
			};
			const adoptPicked = () => {
				/* v8 ignore next -- the dialog only renders with candidates loaded */
				if (candidates === void 0) return;
				const byId = new Map(models.map((model) => [textOf(model, "id"), model]));
				for (const candidate of candidates) {
					if (!picked.has(candidate.id)) continue;
					byId.set(candidate.id, byId.get(candidate.id) ?? adopt(candidate));
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
			const allCandidatesPicked = activeCandidates.length > 0 && activeCandidates.every((candidate) => picked.has(candidate.id));
			const toggleAllCandidates = () => {
				setPicked((current) => {
					return activeCandidates.every((candidate) => current.has(candidate.id)) ? /* @__PURE__ */ new Set() : new Set(activeCandidates.map((candidate) => candidate.id));
				});
			};
			const askable = probe.provider !== void 0 || probe.baseURL !== void 0 && probe.baseURL.length > 0;
			return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("section", {
				className: ModelsSection_ext_module_default["modelCatalog"],
				"aria-label": t("models"),
				children: [
					/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
						className: ModelsSection_ext_module_default["modelListHead"],
						children: [
							/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
								className: ModelsSection_ext_module_default["modelCatalogHeading"],
								children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
									className: ModelsSection_ext_module_default["modelCatalogTitle"],
									children: t("models")
								}), props.overridden === void 0 ? null : /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
									className: ModelsSection_ext_module_default["modelCatalogMeta"],
									children: props.overridden ? t("modelsCustomized") : t("modelsInherited")
								})]
							}),
							props.overridden === true && props.onReset !== void 0 ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
								type: "button",
								className: ModelsSection_ext_module_default["linkButton"],
								disabled,
								onClick: props.onReset,
								children: t("resetModels")
							}) : null,
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
								type: "button",
								className: ModelsSection_ext_module_default["linkButton"],
								disabled: disabled || busy || !askable || props.probeBlocked !== void 0,
								title: props.probeBlocked !== void 0 ? t(props.probeBlocked) : askable ? void 0 : t("fetchNeedsBaseUrl"),
								onClick: () => {
									fetchModels();
								},
								children: busy ? t("fetching") : t("fetchModels")
							})
						]
					}),
					models.length === 0 ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
						className: ModelsSection_ext_module_default["modelEmpty"],
						children: t("modelsEmpty")
					}) : null,
					models.map((model, index) => /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
						className: ModelsSection_ext_module_default["modelEntry"],
						children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
							className: ModelsSection_ext_module_default["modelRow"],
							children: [
								/* @__PURE__ */ (0, react_jsx_runtime.jsx)("input", {
									className: ModelsSection_ext_module_default["input"],
									type: "text",
									value: textOf(model, "id"),
									placeholder: t("modelId"),
									"aria-label": `${t("modelId")} ${index + 1}`,
									disabled,
									onChange: (event) => {
										patch(index, { id: event.target.value });
									}
								}),
								/* @__PURE__ */ (0, react_jsx_runtime.jsx)("input", {
									className: ModelsSection_ext_module_default["input"],
									type: "text",
									value: textOf(model, "name"),
									placeholder: t("modelName"),
									"aria-label": `${t("modelName")} ${index + 1}`,
									disabled,
									onChange: (event) => {
										patch(index, { name: event.target.value === "" ? void 0 : event.target.value });
									}
								}),
								/* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
									type: "button",
									className: ModelsSection_ext_module_default["iconButton"],
									"aria-label": `${t("modelAdvanced")} ${index + 1}`,
									"aria-expanded": expanded.has(index),
									title: t("modelAdvanced"),
									onClick: () => {
										toggleExpanded(index);
									},
									children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(IconChevron, { open: expanded.has(index) })
								}),
								/* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
									type: "button",
									className: `${ModelsSection_ext_module_default["iconButton"]} ${ModelsSection_ext_module_default["iconButtonDanger"]}`,
									"aria-label": `${t("removeModel")} ${index + 1}`,
									title: t("removeModel"),
									disabled,
									onClick: () => {
										onChange(models.filter((_model, at) => at !== index));
										setExpanded((current) => {
											const next = /* @__PURE__ */ new Set();
											for (const at of current) if (at < index) next.add(at);
											else if (at > index) next.add(at - 1);
											return next;
										});
										setEditing((current) => reindexOnRemove(current, index));
									},
									children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(IconTrash, {})
								})
							]
						}), expanded.has(index) ? /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(react_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
							className: ModelsSection_ext_module_default["modelAdvanced"],
							children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("label", {
								className: ModelsSection_ext_module_default["modelField"],
								children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
									className: ModelsSection_ext_module_default["modelFieldLabel"],
									children: t("modelContextWindow")
								}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("input", {
									className: ModelsSection_ext_module_default["input"],
									type: "text",
									inputMode: "numeric",
									value: capacityText(model, index, "contextWindow"),
									placeholder: CAPACITY_HINT.contextWindow,
									"aria-label": `${t("modelContextWindow")} ${index + 1}`,
									disabled,
									onChange: (event) => {
										editCapacity(index, "contextWindow", event.target.value);
									}
								})]
							}), /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("label", {
								className: ModelsSection_ext_module_default["modelField"],
								children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
									className: ModelsSection_ext_module_default["modelFieldLabel"],
									children: t("modelMaxTokens")
								}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("input", {
									className: ModelsSection_ext_module_default["input"],
									type: "text",
									inputMode: "numeric",
									value: capacityText(model, index, "maxTokens"),
									placeholder: CAPACITY_HINT.maxTokens,
									"aria-label": `${t("modelMaxTokens")} ${index + 1}`,
									disabled,
									onChange: (event) => {
										editCapacity(index, "maxTokens", event.target.value);
									}
								})]
							})]
						}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
							className: ModelsSection_ext_module_default["modelExtensionFields"],
							children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(ModelExtensionFields, {
								model,
								onChange: (next) => {
									patch(index, next);
								},
								disabled
							})
						})] }) : null]
					}, index)),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
						type: "button",
						className: ModelsSection_ext_module_default["addModelButton"],
						disabled,
						onClick: () => {
							onChange([...models, { id: "" }]);
						},
						children: t("addModel")
					}),
					failure !== void 0 ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
						className: ModelsSection_ext_module_default["error"],
						children: failure
					}) : null,
					/* @__PURE__ */ (0, react_jsx_runtime.jsxs)(_deepseek_ai_dsh_client_ui_primitives.Modal, {
						open: candidates !== void 0,
						onClose: closePicker,
						title: t("fetchTitle"),
						closeLabel: t("close"),
						description: t("fetchDescription"),
						className: ModelsSection_ext_module_default["fetchDialog"],
						footer: /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(react_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.Button, {
							variant: "outline",
							onClick: closePicker,
							children: t("cancel")
						}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.Button, {
							variant: "outline",
							onClick: adoptPicked,
							children: t("fetchAdopt")
						})] }),
						children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
							className: ModelsSection_ext_module_default["candidateActions"],
							children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.Button, {
								variant: "ghost",
								size: "sm",
								onClick: toggleAllCandidates,
								children: t(allCandidatesPicked ? "fetchDeselectAll" : "fetchSelectAll")
							})
						}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("ul", {
							className: ModelsSection_ext_module_default["candidateList"],
							children: (candidates ?? []).map((candidate) => /* @__PURE__ */ (0, react_jsx_runtime.jsx)("li", {
								className: ModelsSection_ext_module_default["candidate"],
								children: /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("label", {
									className: ModelsSection_ext_module_default["candidateLabel"],
									children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("input", {
										type: "checkbox",
										checked: picked.has(candidate.id),
										onChange: () => {
											toggle(candidate.id);
										}
									}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
										className: ModelsSection_ext_module_default["candidateId"],
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
		//#region
		/**
		* The card that declares a provider pi-ai does not ship — an OpenAI-compatible
		* gateway, a self-hosted server, or a provider newer than the installed
		* catalog.
		*
		* This is a create, not an edit, which is why it is its own card rather than
		* the provider editor with extra fields: the route id is being *chosen* here,
		* and the settings address does not exist until it is. One `settings.mutate`
		* sets the whole profile at `providers.<route>`; the key travels separately
		* through `credentials.set` under the reference the profile records, exactly as
		* an existing provider's key does.
		*
		* The three fields a hand-declared route cannot default — endpoint, protocol,
		* and at least one model — are required here rather than at load, so the
		* failure names the field while the user is still looking at it.
		*
		* There is deliberately no reasoning-effort control, here or on the editor
		* card: effort is a per-MODEL capability, and the models under one provider
		* disagree about it, so a provider-scoped control can only be set to a value
		* some of them reject. The composer's model picker offers each model its own
		* levels instead.
		*/
		/** The settings namespace a hand-declared provider is written into. */
		const NS = "llm-pi-ai";
		/**
		* A route id usable as a settings key AND as the stem of a credential name.
		* The leading letter is the second half of that: `deriveKeyRef` uppercases the
		* id and replaces every non-alphanumeric run with `_`, and a credential
		* reference is a POSIX shell identifier, which cannot start with a digit. A
		* digit-leading id passes every check this card makes and then fails at the
		* credential seam with a raw regular expression the user cannot act on.
		*/
		const ROUTE_PATTERN = /^[a-z][a-z0-9]*(?:-[a-z0-9]+)*$/;
		/**
		* Render the custom-provider creation card.
		* @param props - existing routes, protocol choices, wire faces, and copy.
		* @returns the creation card.
		*/
		function CustomProviderCard(props) {
			const { taken, protocols, api, t } = props;
			const [openedAt] = (0, react.useState)(() => props.revision);
			const [route, setRoute] = (0, react.useState)("");
			const [displayName, setDisplayName] = (0, react.useState)("");
			const [baseURL, setBaseURL] = (0, react.useState)("");
			const [protocol, setProtocol] = (0, react.useState)(protocols[0] ?? "");
			const [keyDraft, setKeyDraft] = (0, react.useState)("");
			const [models, setModels] = (0, react.useState)([]);
			const [busy, setBusy] = (0, react.useState)(false);
			const [failure, setFailure] = (0, react.useState)(void 0);
			/**
			* The profile write landed. Only the key write can still be outstanding, so
			* the fields that describe the provider are settled and the retry path is
			* the credential alone.
			*/
			const [committed, setCommitted] = (0, react.useState)(false);
			const disabled = props.readOnly || busy;
			/** Everything but the key stops being editable once the provider exists. */
			const profileDisabled = disabled || committed;
			const routeInvalid = route.length > 0 && !ROUTE_PATTERN.test(route);
			const routeTaken = taken.includes(route);
			const modelFailure = validateDeepSeekModels(models);
			const keyFailure = apiKeyFailure(keyDraft);
			const keyValue = keyDraft.trim();
			const ready = route.length > 0 && !routeInvalid && !routeTaken && baseURL.length > 0 && models.length > 0 && modelFailure === void 0 && keyFailure === void 0;
			const hint = failure !== void 0 || ready || keyFailure !== void 0 || route.length === 0 || routeInvalid || routeTaken ? void 0 : baseURL.length === 0 ? t("customNeedsBaseUrl") : modelFailure !== void 0 ? `${t("model")} ${String(modelFailure.index + 1)}: ${t(modelFailure.key)}` : t("customNeedsModels");
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
						models: models.map((model) => ({ ...model }))
					};
					const response = await api.settings.mutate({
						ns: NS,
						ops: [{
							op: "set",
							path: ["providers", route],
							value: profile
						}],
						expectedRevision: openedAt
					});
					if (!response.result.ok) return response.result.error.message;
					setCommitted(true);
				}
				if (storesKey) {
					const stored = await api.credentials.set({
						ref: keyRef,
						value: keyValue
					});
					if (!stored.result.ok) return stored.result.error.message;
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
				} catch (error) {
					setFailure(messageOf(error));
				} finally {
					setBusy(false);
				}
			};
			return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
				className: ModelsSection_module_default["editor"],
				children: [
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
						className: ModelsSection_module_default["editorHeader"],
						children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
							className: ModelsSection_module_default["editorTitle"],
							children: t("customTitle")
						})
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
						className: ModelsSection_module_default["field"],
						children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
							className: ModelsSection_module_default["fieldLabel"],
							children: t("customRoute")
						}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("input", {
							className: ModelsSection_module_default["input"],
							type: "text",
							value: route,
							placeholder: "acme-gateway",
							"aria-label": t("customRoute"),
							disabled: profileDisabled,
							onChange: (event) => {
								setRoute(event.target.value);
							}
						})]
					}),
					routeInvalid || routeTaken ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
						className: ModelsSection_module_default["error"],
						children: t(routeInvalid ? "customRouteInvalid" : "customRouteTaken")
					}) : /* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
						className: ModelsSection_module_default["advancedHint"],
						children: t("customRouteHint")
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
						className: ModelsSection_module_default["field"],
						children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
							className: ModelsSection_module_default["fieldLabel"],
							children: t("customDisplayName")
						}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("input", {
							className: ModelsSection_module_default["input"],
							type: "text",
							value: displayName,
							placeholder: route.length === 0 ? t("customDisplayName") : route,
							"aria-label": t("customDisplayName"),
							disabled: profileDisabled,
							onChange: (event) => {
								setDisplayName(event.target.value);
							}
						})]
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
						className: ModelsSection_module_default["field"],
						children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
							className: ModelsSection_module_default["fieldLabel"],
							children: t("baseUrl")
						}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("input", {
							className: ModelsSection_module_default["input"],
							type: "text",
							value: baseURL,
							placeholder: "https://gateway.example/v1",
							"aria-label": t("baseUrl"),
							disabled: profileDisabled,
							onChange: (event) => {
								setBaseURL(event.target.value);
							}
						})]
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
						className: ModelsSection_module_default["field"],
						children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
							className: ModelsSection_module_default["fieldLabel"],
							children: t("customApi")
						}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("select", {
							className: `${ModelsSection_module_default["input"]} ${ModelsSection_module_default["selectInput"]}`,
							value: protocol,
							"aria-label": t("customApi"),
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
						className: ModelsSection_module_default["field"],
						children: [
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
								className: ModelsSection_module_default["fieldLabel"],
								children: t("keyInput")
							}),
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("input", {
								className: ModelsSection_module_default["input"],
								type: "password",
								autoComplete: "off",
								value: keyDraft,
								placeholder: t("keyPlaceholder"),
								"aria-label": t("keyInput"),
								disabled,
								onChange: (event) => {
									setKeyDraft(event.target.value);
								}
							}),
							keyFailure === void 0 ? null : /* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
								className: ModelsSection_module_default["error"],
								children: t(keyFailure === "keyBlank" ? "keyBlankNew" : keyFailure)
							})
						]
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)(ModelListEditor, {
						models,
						onChange: setModels,
						probe: {
							settingsNs: NS,
							baseURL,
							api: protocol,
							...keyValue.length === 0 ? {} : { apiKey: keyValue }
						},
						probeBlocked: keyFailure === "keyBlank" ? "keyBlankNew" : keyFailure,
						api,
						t,
						disabled: profileDisabled
					}),
					failure !== void 0 ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
						className: ModelsSection_module_default["error"],
						children: failure
					}) : null,
					hint === void 0 ? null : /* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
						className: ModelsSection_module_default["advancedHint"],
						children: hint
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)(EditorFooter, {
						t,
						busy,
						submitDisabled: disabled || !ready,
						submitLabel: "create",
						submitBusyLabel: "creating",
						onCancel: () => {
							props.onClose(committed);
						},
						onSubmit: () => {
							create();
						}
					})
				]
			});
		}
		//#endregion
		//#region
		/**
		* One provider's editor card, hand-written per adapter family: the primary
		* field is a single write-only **API key** input (the page never asks for an
		* environment-variable name — a typed key stores through `credentials.set`
		* under the profile's reference, deriving `<ROUTE>_API_KEY` when the profile
		* has none. The pi-ai profile records that derivation as `apiKeyEnv` only when
		* a key is entered; a blank key materializes a reference-free profile for
		* provider-native authentication);
		* the collapsed 自定义设置 area carries the per-family extras (`baseURL` for
		* both families, DeepSeek's id/name/context-window model catalog, and the
		* display name and wire protocol of a pi-ai route the adapter does not ship —
		* the two fields the create card asked that route for, editable here for the
		* same reason).
		* Reasoning effort is deliberately absent: it is a per-MODEL capability, and
		* the models under one provider disagree about it, so a provider-scoped
		* control can only be set to a value some of them reject. The composer's
		* model picker offers each model its own levels; `settings.yaml` keeps the
		* profile field for a deployment that knows its route. Everything else stays
		* owned by `settings.yaml`. Profile edits land as minimal `settings.mutate`
		* path ops against the stored section — the card names only the fields it can
		* see instead of rebuilding the whole subtree from a partial descriptor.
		*/
		/** The public DeepSeek endpoint shown as the deepseek base-URL placeholder. */
		const DEEPSEEK_PUBLIC_BASE_URL = "https://api.deepseek.com";
		/** A user-section subtree as a plain draft object (absent → empty). */
		function draftAt(schema, namespace, path) {
			const subtree = schema.getPath(namespace.user, path);
			if (typeof subtree !== "object" || subtree === null || Array.isArray(subtree)) return {};
			return structuredClone(subtree);
		}
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
		/** The editor layout the owning namespace selects. */
		function layoutOf(ns) {
			if (ns === "llm-deepseek") return "deepseek";
			if (ns === "llm-pi-ai") return "pi-ai";
			return "unknown";
		}
		/** The credential reference this profile resolves keys through. */
		function refFor(schema, namespace, path, provider) {
			const profile = schema.getPath(namespace.value, path);
			const named = typeof profile === "object" && profile !== null ? profile.apiKeyEnv : void 0;
			return typeof named === "string" && named.length > 0 ? named : deriveKeyRef(provider);
		}
		/**
		* Render one provider's editing card.
		* @param props - the addressed profile plus wire faces and copy.
		* @returns the editor card.
		*/
		function ProviderEditor(props) {
			const { namespace, schema, settingsPath, api, t } = props;
			const [draft, setDraft] = (0, react.useState)(() => draftAt(schema, namespace, settingsPath));
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
			(0, react.useEffect)(() => {
				let stale = false;
				setKeyState(void 0);
				api.credentials.describe({ refs: [keyRef] }).then((response) => {
					if (stale || !response.result.ok) return;
					setKeyState(response.result.value.credentials[keyRef]);
				}, () => void 0);
				return () => {
					stale = true;
				};
			}, [api.credentials, keyRef]);
			const stringAt = (source, key) => {
				const value = schema.getPath(source, [key]);
				return typeof value === "string" && value.trim().length > 0 ? value : void 0;
			};
			const setField = (key, next) => {
				const value = next === void 0 || next.trim().length === 0 ? void 0 : next;
				setDraft((current) => value === void 0 ? schema.deletePath(current, [key]) : schema.setPath(current, [key], value));
			};
			const modelFailure = validateDeepSeekModels(schema.getPath(draft, ["models"]));
			const keyFailure = apiKeyFailure(keyDraft);
			const keyValue = keyDraft.trim();
			const shownKeyFailure = (props.credentialRequired === true && keyDraft.length > 0 && keyValue.length === 0 ? "keyRequired" : void 0) ?? keyFailure;
			const probeApi = stringAt(draft, "api") ?? stringAt(fallback, "api");
			const probeBaseURL = stringAt(draft, "baseURL") ?? stringAt(fallback, "baseURL");
			const probe = {
				settingsNs: namespace.ns,
				provider: props.provider,
				...probeBaseURL === void 0 ? {} : { baseURL: probeBaseURL },
				...probeApi === void 0 ? {} : { api: probeApi },
				...keyValue.length === 0 ? {} : { apiKey: keyValue }
			};
			/**
			* The write for this card, or a failure message. Every edit travels as
			* path ops against the STORED section: the draft comes from the redacted
			* descriptor, so a wholesale replace rebuilt from it could delete fields
			* outside the card. Ops name only the fields this card can see.
			*/
			const applyOnce = async () => {
				const ns = namespace.ns;
				const next = layout === "pi-ai" && stringAt(draft, "apiKeyEnv") === void 0 && stringAt(fallback, "apiKeyEnv") === void 0 && keyValue.length > 0 ? schema.setPath(draft, ["apiKeyEnv"], keyRef) : draft;
				if (props.credentialOnly !== true) {
					const failure = validateDeepSeekModels(schema.getPath(next, ["models"]));
					/* v8 ignore next 3 -- unreachable from the card: the same failure disables submit */
					if (failure !== void 0) return `${t("model")} ${String(failure.index + 1)}: ${t(failure.key)}`;
				}
				/* v8 ignore next -- apply is only reachable from the rendered card, which required a resolved node */
				if (props.credentialOnly !== true && node !== void 0 && settingsPath.length === 0) {
					const sectionError = schema.validate(node, next);
					if (sectionError !== void 0) return sectionError;
				}
				const materializesNativeProfile = layout === "pi-ai" && fallback === void 0 && committedOriginal === void 0 && Object.keys(next).length === 0;
				const ops = props.credentialOnly === true ? [] : materializesNativeProfile ? [{
					op: "set",
					path: [...settingsPath],
					value: {}
				}] : pathOps(settingsPath, committedOriginal, next);
				if (ops.length > 0) {
					const response = await api.settings.mutate({
						ns,
						ops,
						expectedRevision
					});
					if (!response.result.ok) return response.result.error.code === "settings-conflict" ? t("conflict") : response.result.error.message;
					setCommittedOriginal(schema.getPath(response.result.value.user, settingsPath));
					setExpectedRevision(response.result.value.revision);
					setDraft(next);
				}
				if (keyValue.length > 0) {
					const stored = await api.credentials.set({
						ref: keyRef,
						value: keyValue
					});
					if (!stored.result.ok) return stored.result.error.message;
				}
				setKeyDraft("");
			};
			const apply = async () => {
				setBusy(true);
				setFailure(void 0);
				try {
					const failure = await applyOnce();
					if (failure !== void 0) {
						setFailure(failure);
						return;
					}
					props.onClose(true);
				} catch (error) {
					setFailure(messageOf(error));
				} finally {
					setBusy(false);
				}
			};
			if (node === void 0) return /* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
				className: ModelsSection_module_default["error"],
				children: `${props.provider}: unresolvable settings path`
			});
			const keyLocked = keyState?.writable === false;
			/**
			* The catalog beneath the user layer: what the composition entry pinned, or
			* else the schema default that `resolve` would supply. The effective value
			* cannot answer this — it still carries the stored override until the unset
			* is applied, so reading it would echo that override straight back the
			* moment reset drops it, leaving the rows unchanged until a reload.
			*/
			const inheritedModels = () => {
				return schema.getPath(namespace.base, [...settingsPath, "models"]) ?? schema.nodeAtPath(root, [...settingsPath, "models"])?.meta.default;
			};
			/**
			* The curated fields of one known adapter family. The family arrives
			* narrowed so the per-family branches below are total: an unknown namespace
			* renders the hint instead and never reaches this body.
			*/
			const curatedFields = (family) => {
				const ownsIdentity = family === "pi-ai" && props.declared === true;
				const customModels = schema.getPath(draft, ["models"]);
				const modelsOverridden = schema.hasPath(draft, ["models"]);
				const models = modelDrafts(modelsOverridden ? customModels : inheritedModels());
				const defaultContextWindow = schema.getPath(fallback, ["defaultContextWindow"]);
				const defaultMaxTokens = schema.getPath(fallback, ["maxTokens"]);
				const keyPlaceholder = keyLocked ? t("keyEnvLocked") : keyState?.configured === true && props.credentialRequired !== true ? t("keyStored") : family === "pi-ai" ? t("keyPlaceholderNative") : t("keyPlaceholder");
				/** What both family editors take: the rows, whose layer owns them, and the two writes. */
				const catalogProps = {
					models,
					overridden: modelsOverridden,
					t,
					disabled,
					onChange: (next) => {
						setDraft((current) => schema.setPath(current, ["models"], next));
					},
					onReset: () => {
						setDraft((current) => schema.deletePath(current, ["models"]));
					}
				};
				return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(react_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
					className: ModelsSection_module_default["field"],
					children: [
						/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
							className: ModelsSection_module_default["fieldLabel"],
							children: t("keyInput")
						}),
						/* @__PURE__ */ (0, react_jsx_runtime.jsx)("input", {
							className: ModelsSection_module_default["input"],
							type: "password",
							autoComplete: "off",
							value: keyDraft,
							placeholder: keyPlaceholder,
							"aria-label": t("keyInput"),
							"aria-invalid": shownKeyFailure !== void 0,
							required: props.credentialRequired === true,
							autoFocus: props.autoFocusCredential === true,
							disabled: disabled || keyLocked,
							onChange: (event) => {
								setKeyDraft(event.target.value);
							}
						}),
						shownKeyFailure === void 0 ? null : /* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
							className: ModelsSection_module_default["error"],
							children: t(shownKeyFailure)
						})
					]
				}), props.credentialOnly === true ? null : /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("details", {
					className: ModelsSection_module_default["customized"],
					children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("summary", {
						className: ModelsSection_module_default["customizedSummary"],
						children: t("customized")
					}), /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
						className: ModelsSection_module_default["customizedBody"],
						children: [
							ownsIdentity ? /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
								className: ModelsSection_module_default["field"],
								children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
									className: ModelsSection_module_default["fieldLabel"],
									children: t("customDisplayName")
								}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("input", {
									className: ModelsSection_module_default["input"],
									type: "text",
									value: stringAt(draft, "displayName") ?? "",
									placeholder: stringAt(schema.getPath(namespace.base, settingsPath), "displayName") ?? props.provider,
									"aria-label": t("customDisplayName"),
									disabled,
									onChange: (event) => {
										setField("displayName", event.target.value);
									}
								})]
							}) : null,
							/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
								className: ModelsSection_module_default["field"],
								children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
									className: ModelsSection_module_default["fieldLabel"],
									children: t("baseUrl")
								}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("input", {
									className: ModelsSection_module_default["input"],
									type: "text",
									value: stringAt(draft, "baseURL") ?? "",
									placeholder: family === "deepseek" ? DEEPSEEK_PUBLIC_BASE_URL : stringAt(fallback, "baseURL") ?? t("baseUrlDefault"),
									"aria-label": t("baseUrl"),
									disabled,
									onChange: (event) => {
										setField("baseURL", event.target.value === "" ? void 0 : event.target.value);
									}
								})]
							}),
							ownsIdentity ? /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
								className: ModelsSection_module_default["field"],
								children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
									className: ModelsSection_module_default["fieldLabel"],
									children: t("customApi")
								}), /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("select", {
									className: `${ModelsSection_module_default["input"]} ${ModelsSection_module_default["selectInput"]}`,
									value: probeApi ?? "",
									"aria-label": t("customApi"),
									disabled,
									onChange: (event) => {
										setField("api", event.target.value);
									},
									children: [probeApi === void 0 ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)("option", {
										value: "",
										children: t("customApiUnset")
									}) : null, protocols.map((choice) => /* @__PURE__ */ (0, react_jsx_runtime.jsx)("option", {
										value: choice,
										children: choice
									}, choice))]
								})]
							}) : null,
							family === "deepseek" ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)(DeepSeekModelsEditor, {
								...catalogProps,
								defaultContextWindow: typeof defaultContextWindow === "number" ? defaultContextWindow : void 0,
								defaultMaxTokens: typeof defaultMaxTokens === "number" ? defaultMaxTokens : void 0
							}) : /* @__PURE__ */ (0, react_jsx_runtime.jsx)(ModelListEditor, {
								...catalogProps,
								probe,
								probeBlocked: keyFailure,
								api
							})
						]
					})]
				})] });
			};
			return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
				className: props.credentialOnly === true ? ModelsSection_module_default["addBlock"] : ModelsSection_module_default["editor"],
				children: [
					props.hideTitle === true ? null : /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
						className: ModelsSection_module_default["editorHeader"],
						children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
							className: ModelsSection_module_default["editorTitle"],
							children: props.displayName
						}), props.provider !== props.displayName ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
							className: ModelsSection_module_default["editorRoute"],
							children: props.provider
						}) : null]
					}),
					layout === "unknown" ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
						className: ModelsSection_module_default["advancedHint"],
						children: `${t("advancedHint")} (${namespace.ns})`
					}) : curatedFields(layout),
					failure !== void 0 ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
						className: ModelsSection_module_default["error"],
						children: failure
					}) : null,
					props.credentialOnly === true || modelFailure === void 0 ? null : /* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
						className: ModelsSection_module_default["advancedHint"],
						children: `${t("model")} ${String(modelFailure.index + 1)}: ${t(modelFailure.key)}`
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)(EditorFooter, {
						t,
						busy,
						submitDisabled: disabled || layout === "unknown" || props.credentialOnly !== true && modelFailure !== void 0 || shownKeyFailure !== void 0 || props.credentialRequired === true && keyValue.length === 0,
						submitLabel: props.submitLabel ?? "apply",
						submitBusyLabel: props.submitBusyLabel ?? "applying",
						...props.cancelLabel === void 0 ? {} : { cancelLabel: props.cancelLabel },
						onCancel: () => {
							props.onClose(false);
						},
						onSubmit: () => {
							apply();
						}
					})
				]
			});
		}
		//#endregion
		//#region src/client/ModelsSection.ext.tsx
		/**
		* Models settings section (EXT fork for dsh-model-extension).
		*
		* Forked from deepseek-harness packages/client/ui-settings-models
		* src/client/ModelsSection.tsx @ 0.1.1-rc.2.
		* Only difference vs upstream: the h2 title row carries an adapter-version
		* badge. Everything else is upstream verbatim — keep this file minimal when
		* merging drift after a host upgrade.
		*
		* Models settings section: the provider rows joined from the configurable
		* directory, settings namespaces, and credential states, with one editor
		* card at a time. Rows expose only confirmed API-key state through accessible
		* solid configured or missing dots. A whole-section provider without a
		* configured key renders as its open setup card instead of a row, but only in
		* the first-run posture — no provider on the page can serve requests yet — and
		* only until the user closes that card; the add flow is a card carrying the
		* dormant-provider select. Each card kind owns its own open state, so closing
		* one never discards a draft in another. Every mutation writes through the
		* wire, while a provider removal first requires confirmation; the page
		* re-renders from pushed invalidations or the post-apply reload.
		*/
		/** Render an editor for either the setup posture or an expanded provider row. */
		function renderProviderEditor({ target, ...props }) {
			return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(ProviderEditor, {
				provider: target.provider,
				displayName: target.displayName,
				settingsPath: target.settingsPath,
				...target.declared === true ? { declared: true } : {},
				...props
			});
		}
		/**
		* Remove one user-added provider and its page-managed credential. Credential
		* removal comes first so a second-step failure leaves the provider row visible
		* and the whole operation safely retryable; both unsets are idempotent.
		* The settings removal names the profile rather than rebuilding its whole
		* namespace from a partial view.
		* @param api - settings and credential wire faces.
		* @param controller - the page store to refresh.
		* @param target - the provider's settings address and optional managed credential.
		* @returns the failure message, or undefined once the write and reload landed.
		*/
		async function removeProviderProfile(api, controller, target) {
			try {
				if (target.credentialRef !== void 0) {
					const credential = await api.credentials.unset({ ref: target.credentialRef });
					if (!credential.result.ok) return credential.result.error.message;
				}
				const response = await api.settings.mutate({
					ns: target.settingsNs,
					ops: [{
						op: "unset",
						path: [...target.settingsPath]
					}]
				});
				if (!response.result.ok) return response.result.error.message;
			} catch (error) {
				return messageOf(error);
			}
			await controller.load();
		}
		/**
		* Whether a whole-section provider still needs its first key: an unconfigured
		* credential opens the setup card instead of showing a row. This is the
		* first-run posture alone — a user who can already reach some provider gets an
		* ordinary row with the missing-key dot, since nothing here is blocking them.
		* @param row - the joined provider row.
		* @param anyUsable - whether any joined row can already serve requests.
		* @returns whether to render the setup card.
		*/
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
		/** Stable visible and accessible identity for one provider target. */
		function providerTargetLabel(target) {
			return target.provider === target.displayName ? target.provider : `${target.displayName} (${target.provider})`;
		}
		/** Replace the one provider placeholder in localized destructive-action copy. */
		function providerCopy(template, target) {
			return template.replace("{provider}", () => providerTargetLabel(target));
		}
		/**
		* Render the Models section content column.
		* @param props - slot-delivered injected dependencies.
		* @returns the section, or null while the shell has not injected yet.
		*/
		function ModelsSection(props) {
			const { controller, useSnapshot, api, schema, t } = props;
			if (controller === void 0 || useSnapshot === void 0 || api === void 0 || schema === void 0 || t === void 0) return null;
			return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Loaded, { injected: {
				controller,
				useSnapshot,
				api,
				schema,
				t
			} });
		}
		function Loaded({ injected }) {
			const { controller, api, schema, t } = injected;
			const state = injected.useSnapshot((snapshot) => snapshot);
			const [editing, setEditing] = (0, react.useState)(void 0);
			const [adding, setAdding] = (0, react.useState)(false);
			const [deleteTarget, setDeleteTarget] = (0, react.useState)(void 0);
			const [deleting, setDeleting] = (0, react.useState)(false);
			const [deleteFailure, setDeleteFailure] = (0, react.useState)(void 0);
			const [savedTarget, setSavedTarget] = (0, react.useState)(void 0);
			const [declaring, setDeclaring] = (0, react.useState)(false);
			const [dismissedSetup, setDismissedSetup] = (0, react.useState)(() => /* @__PURE__ */ new Set());
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
			/**
			* Close a setup card, which owns none of the state above: the row-editor,
			* add, and declare cards each own one of those, so clearing them here would
			* discard a draft the user opened beside this card. Dismissal is this card's
			* own — the provider falls back to an ordinary row for the rest of the
			* session, and reopens through Edit.
			*/
			const closeSetup = (changed, target) => {
				setDismissedSetup((previous) => /* @__PURE__ */ new Set([...previous, target.provider]));
				if (changed) announceSaved(target);
			};
			const closeDelete = () => {
				if (deleting) return;
				setDeleteTarget(void 0);
				setDeleteFailure(void 0);
			};
			const confirmDelete = () => {
				/* v8 ignore next -- the action only renders with a target and is disabled while a deletion is pending */
				if (deleteTarget === void 0 || deleting) return;
				setDeleting(true);
				setDeleteFailure(void 0);
				removeProviderProfile(api, controller, deleteTarget).then((failure) => {
					if (failure !== void 0) {
						setDeleteFailure(failure);
						return;
					}
					setDeleteTarget(void 0);
				}).finally(() => {
					setDeleting(false);
				});
			};
			if (state.status === "idle") controller.load();
			if (state.status === "error") {
				/* v8 ignore next -- an error status always carries text; the fallback satisfies the nullable type */
				const errorText = state.error ?? "";
				return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
					className: ModelsSection_ext_module_default["section"],
					children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
						className: ModelsSection_ext_module_default["error"],
						children: `${t("loadFailed")}: ${errorText}`
					}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
						type: "button",
						className: ModelsSection_ext_module_default["secondaryButton"],
						onClick: () => {
							controller.load();
						},
						children: t("retry")
					})]
				});
			}
			const savedRow = savedTarget === void 0 ? void 0 : state.rows.find((row) => row.entry.provider === savedTarget.provider);
			const savedIdentity = savedRow === void 0 ? savedTarget : {
				provider: savedRow.entry.provider,
				displayName: savedRow.entry.displayName
			};
			const anyUsable = state.rows.some(providerUsable);
			const configured = state.rows.filter((row) => row.configured);
			const addable = state.rows.filter((row) => !row.configured && row.entry.settingsNs !== "");
			const addTarget = adding ? editing : void 0;
			const addNamespace = addTarget === void 0 ? void 0 : state.namespaces.get(addTarget.settingsNs);
			const protocols = protocolChoices(state.namespaces.get("llm-pi-ai"), schema);
			return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
				className: ModelsSection_ext_module_default["section"],
				children: [
					/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("h2", {
						className: ModelsSection_ext_module_default["title"],
						children: [t("title"), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
							className: ModelsSection_ext_module_default["intro"],
							children: ` — ${t("adapterVersion").replace("{version}", ADAPTER_VERSION)}`
						})]
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
						className: ModelsSection_ext_module_default["intro"],
						children: t("intro")
					}),
					!state.writable && state.status === "ready" ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
						className: ModelsSection_ext_module_default["notice"],
						children: t("readOnly")
					}) : null,
					savedIdentity === void 0 ? null : /* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
						className: ModelsSection_ext_module_default["savedNotice"],
						role: "status",
						"aria-live": "polite",
						children: providerCopy(t("savedProvider"), savedIdentity)
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("ul", {
						className: ModelsSection_ext_module_default["rows"],
						children: configured.map((row) => {
							const target = targetOf(row);
							const namespace = state.namespaces.get(target.settingsNs);
							/* v8 ignore next -- the join marks a row configured only when its namespace resolved */
							if (namespace === void 0) return null;
							if (needsSetup(row, anyUsable) && !dismissedSetup.has(row.entry.provider)) return /* @__PURE__ */ (0, react_jsx_runtime.jsx)("li", {
								className: ModelsSection_ext_module_default["setupCard"],
								children: renderProviderEditor({
									target,
									namespace,
									schema,
									api,
									t,
									readOnly: !state.writable,
									onClose: (changed) => {
										closeSetup(changed, target);
									}
								})
							}, row.entry.provider);
							const open = !adding && editing?.provider === row.entry.provider;
							const credentialConfigured = row.credential?.configured === true;
							const credentialMissing = !credentialConfigured && row.apiKeyEnv !== void 0 && row.credential?.configured === false;
							return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("li", {
								className: ModelsSection_ext_module_default["rowCard"],
								children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
									className: ModelsSection_ext_module_default["rowHead"],
									children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("span", {
										className: ModelsSection_ext_module_default["rowIdentity"],
										children: [
											/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
												className: ModelsSection_ext_module_default["rowName"],
												children: row.entry.displayName
											}),
											row.entry.declared === true ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
												className: ModelsSection_ext_module_default["rowTag"],
												children: t("customTag")
											}) : null,
											credentialConfigured ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
												className: `${ModelsSection_ext_module_default["credentialDot"]} ${ModelsSection_ext_module_default["credentialDotConfigured"]}`,
												role: "img",
												"aria-label": t("credentialConfigured"),
												title: t("credentialConfigured")
											}) : credentialMissing ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
												className: `${ModelsSection_ext_module_default["credentialDot"]} ${ModelsSection_ext_module_default["credentialDotMissing"]}`,
												role: "img",
												"aria-label": t("credentialMissing"),
												title: t("credentialMissing")
											}) : null
										]
									}), /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("span", {
										className: ModelsSection_ext_module_default["rowActions"],
										children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
											type: "button",
											className: ModelsSection_ext_module_default["secondaryButton"],
											"aria-label": providerCopy(t("editProvider"), target),
											onClick: () => {
												setSavedTarget(void 0);
												setDeclaring(false);
												setAdding(false);
												setEditing(open ? void 0 : target);
											},
											children: t("edit")
										}), row.removable ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
											type: "button",
											className: ModelsSection_ext_module_default["dangerButton"],
											"aria-label": providerCopy(t("removeProvider"), target),
											disabled: !state.writable,
											onClick: () => {
												setSavedTarget(void 0);
												setDeleteFailure(void 0);
												setDeleteTarget(target);
											},
											children: t("remove")
										}) : null]
									})]
								}), open ? renderProviderEditor({
									target,
									namespace,
									schema,
									api,
									t,
									readOnly: !state.writable,
									onClose: (changed) => {
										closeEditor(changed, target);
									}
								}) : null]
							}, row.entry.provider);
						})
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
						className: ModelsSection_ext_module_default["addBlock"],
						children: addTarget !== void 0 && addNamespace !== void 0 ? /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
							className: ModelsSection_ext_module_default["addCard"],
							children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
								className: ModelsSection_ext_module_default["field"],
								children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
									className: ModelsSection_ext_module_default["fieldLabel"],
									children: t("provider")
								}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("select", {
									className: `${ModelsSection_ext_module_default["input"]} ${ModelsSection_ext_module_default["selectInput"]}`,
									value: addTarget.provider,
									"aria-label": t("provider"),
									onChange: (event) => {
										const row = addable.find((candidate) => candidate.entry.provider === event.target.value);
										/* v8 ignore next -- the select only lists addable rows */
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
								hideTitle: true,
								namespace: addNamespace,
								schema,
								settingsPath: addTarget.settingsPath,
								api,
								t,
								readOnly: !state.writable,
								onClose: (changed) => {
									closeEditor(changed, addTarget);
								}
							}, addTarget.provider)]
						}) : declaring ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
							className: ModelsSection_ext_module_default["addCard"],
							children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(CustomProviderCard, {
								taken: state.rows.map((row) => row.entry.provider),
								protocols,
								/* v8 ignore next -- the card only opens from a button disabled without this namespace */
								revision: state.namespaces.get("llm-pi-ai")?.revision ?? 0,
								api,
								t,
								readOnly: !state.writable,
								onClose: (changed) => {
									setDeclaring(false);
									if (changed) controller.load();
								}
							})
						}) : /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
							className: ModelsSection_ext_module_default["addActions"],
							children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("button", {
								type: "button",
								className: ModelsSection_ext_module_default["addButton"],
								disabled: addable.length === 0 || !state.writable,
								onClick: () => {
									const first = addable[0];
									/* v8 ignore next -- the button is disabled while nothing is addable */
									if (first === void 0) return;
									setSavedTarget(void 0);
									setDeclaring(false);
									setAdding(true);
									setEditing(targetOf(first));
								},
								children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.IconPlusOutline16, { size: 14 }), t("add")]
							}), /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("button", {
								type: "button",
								className: ModelsSection_ext_module_default["addButton"],
								disabled: protocols.length === 0 || !state.writable,
								onClick: () => {
									setSavedTarget(void 0);
									setAdding(false);
									setEditing(void 0);
									setDeclaring(true);
								},
								children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.IconPlusOutline16, { size: 14 }), t("customAdd")]
							})]
						})
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.Modal, {
						open: deleteTarget !== void 0,
						onClose: closeDelete,
						title: deleteTarget === void 0 ? "" : providerCopy(t("deleteTitle"), deleteTarget),
						closeLabel: t("close"),
						description: deleteTarget === void 0 ? "" : providerCopy(deleteTarget.credentialRef === void 0 ? t("deleteDescription") : t("deleteDescriptionWithCredential"), deleteTarget),
						className: ModelsSection_ext_module_default["deleteDialog"],
						footer: /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(react_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.Button, {
							variant: "outline",
							autoFocus: true,
							disabled: deleting,
							onClick: closeDelete,
							children: t("cancel")
						}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.Button, {
							variant: "outline",
							className: ModelsSection_ext_module_default["deleteConfirm"],
							disabled: deleting,
							onClick: confirmDelete,
							children: deleteTarget === void 0 ? "" : providerCopy(deleting ? t("deleting") : t("deleteConfirm"), deleteTarget)
						})] }),
						children: deleteFailure === void 0 ? null : /* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
							className: ModelsSection_ext_module_default["error"],
							children: deleteFailure
						})
					})
				]
			});
		}
		//#endregion
		//#region
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
		/** Required services — mirrors the upstream Models section registration. */
		const inject = [
			"slots",
			"locale",
			"connection",
			"remote",
			"settingsScope",
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
			const connection = ctx.get("connection");
			const schema = createSettingsSchemaOperations(ctx.settingsSchema);
			const controller = new ModelsSettingsStore(connection.api, schema, ctx.settingsScope.describe());
			const t = ctx.locale.bind(NS);
			const injected = () => ({
				controller,
				hooks: { snapshot: controller.store },
				api: connection.api,
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
			}, ModelsSection));
		}
		//#endregion
		exports.apply = apply;
		exports.inject = inject;
		exports.name = name;
		return module.exports;
	}
});

//# sourceMappingURL=client.js.map