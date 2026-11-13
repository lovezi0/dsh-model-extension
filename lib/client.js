window.__ModuleLoader__.load({
	id: "dsh-model-extension",
	factory: (require) => {
		var module = { exports: {} };
		var exports = module.exports;
var __extCss = ".PkL4gq_section{max-width:720px;color:var(--dsw-alias-label-primary);flex-direction:column;gap:12px;display:flex}.PkL4gq_titleRow{align-items:center;gap:10px;display:flex}.PkL4gq_title{color:var(--dsw-alias-label-primary);margin:0;font-size:16px;font-weight:500;line-height:24px}.PkL4gq_intro{color:var(--dsw-alias-label-tertiary);margin:0;font-size:14px;line-height:22px}.PkL4gq_savedNotice{color:var(--dsw-alias-state-success-primary);margin:0;font-size:12px;line-height:18px}.PkL4gq_notice{color:var(--dsw-alias-state-warn-label);margin:0;font-size:12px;line-height:18px}.PkL4gq_error{color:var(--dsw-alias-state-error-primary);margin:0;font-size:12px;line-height:18px}.PkL4gq_rows{flex-direction:column;gap:8px;margin:12px 0 0;padding:0;list-style:none;display:flex}.PkL4gq_rowCard{border:.5px solid var(--dsw-alias-border-l4);border-radius:16px;flex-direction:column;gap:12px;padding:12px 14px;display:flex}.PkL4gq_rowHead{align-items:center;gap:10px;display:flex}.PkL4gq_rowIdentity{align-items:center;gap:6px;min-width:0;display:inline-flex}.PkL4gq_rowName{color:var(--dsw-alias-label-primary);font-size:14px;font-weight:500;line-height:22px}.PkL4gq_rowTag{border:.5px solid var(--dsw-alias-border-l3);color:var(--dsw-alias-label-secondary);border-radius:4px;flex:none;padding:1px 6px;font-size:11px;line-height:16px}.PkL4gq_credentialDot{box-sizing:border-box;border-radius:50%;flex:none;width:8px;height:8px;display:inline-block}.PkL4gq_credentialDotConfigured{background:var(--dsw-alias-state-success-primary)}.PkL4gq_accountStatus{color:var(--dsw-alias-state-success-primary);align-items:center;gap:4px;font-size:12px;line-height:18px;display:inline-flex}.PkL4gq_credentialDotMissing{background:var(--dsw-alias-state-error-primary)}.PkL4gq_rowActions{align-items:center;gap:4px;margin-left:auto;display:inline-flex}.PkL4gq_primaryButton,.PkL4gq_secondaryButton,.PkL4gq_addButton{box-sizing:border-box;height:36px;font:inherit;cursor:pointer;border:none;border-radius:18px;justify-content:center;align-items:center;gap:4px;padding:0 14px;font-size:14px;line-height:22px;display:inline-flex}.PkL4gq_primaryButton{background:var(--dsw-alias-button-primary-fill);color:var(--dsw-alias-label-primary-foreground)}.PkL4gq_primaryButton:hover:not(:disabled){background:var(--dsw-alias-button-primary-hover)}.PkL4gq_secondaryButton,.PkL4gq_addButton{border:.5px solid var(--dsw-alias-border-l3);color:var(--dsw-alias-label-primary);background:0 0}.PkL4gq_secondaryButton:hover:not(:disabled),.PkL4gq_addButton:hover:not(:disabled){background:var(--dsw-alias-interactive-bg-hover)}.PkL4gq_secondaryButton:hover:not(:disabled){background:var(--dsw-alias-interactive-bg-hover-solid)}.PkL4gq_dangerButton{box-sizing:border-box;height:36px;color:var(--dsw-alias-state-error-primary);font:inherit;cursor:pointer;background:0 0;border:none;border-radius:18px;justify-content:center;align-items:center;padding:0 14px;font-size:14px;line-height:22px;display:inline-flex}.PkL4gq_dangerButton:hover:not(:disabled){background:var(--dsw-alias-interactive-bg-hover-danger)}.PkL4gq_rowActions .PkL4gq_secondaryButton,.PkL4gq_rowActions .PkL4gq_dangerButton{border-radius:14px;height:28px;padding:0 10px;font-size:12px;line-height:18px}.PkL4gq_primaryButton:disabled,.PkL4gq_secondaryButton:disabled,.PkL4gq_dangerButton:disabled,.PkL4gq_addButton:disabled,.PkL4gq_linkButton:disabled,.PkL4gq_addModelButton:disabled{opacity:.4;cursor:default}.PkL4gq_primaryButton:focus-visible,.PkL4gq_secondaryButton:focus-visible,.PkL4gq_dangerButton:focus-visible,.PkL4gq_addButton:focus-visible,.PkL4gq_linkButton:focus-visible,.PkL4gq_addModelButton:focus-visible,.PkL4gq_iconButton:focus-visible,.PkL4gq_dragHandle:focus-visible,.PkL4gq_customizedSummary:focus-visible{box-shadow:0 0 0 2px var(--dsw-alias-border-l3);outline:none}.PkL4gq_editor{background:var(--dsw-alias-bg-module-platform);border-radius:12px;flex-direction:column;gap:14px;padding:14px 16px;display:flex}.PkL4gq_field{flex-direction:column;gap:6px;display:flex}.PkL4gq_fieldLabel{color:var(--dsw-alias-label-secondary);align-items:center;gap:10px;font-size:12px;font-weight:500;line-height:18px;display:inline-flex}.PkL4gq_linkButton{box-sizing:border-box;height:28px;color:var(--dsw-alias-label-tertiary);font:inherit;cursor:pointer;background:0 0;border:none;border-radius:14px;align-items:center;padding:0 10px;font-size:12px;line-height:18px;display:inline-flex}.PkL4gq_linkButton:hover:not(:disabled){background:var(--dsw-alias-interactive-bg-hover);color:var(--dsw-alias-label-secondary)}.PkL4gq_advancedHint{color:var(--dsw-alias-label-tertiary);margin:0;font-size:12px;line-height:18px}.PkL4gq_helpButton{border:.5px solid var(--dsw-alias-border-l3);corner-shape:round;width:16px;height:16px;color:var(--dsw-alias-label-tertiary);font:inherit;text-align:center;cursor:help;background:0 0;border-radius:50%;padding:0;font-size:11px;line-height:15px}.PkL4gq_helpButton:hover,.PkL4gq_helpButton:focus-visible{color:var(--dsw-alias-label-primary);border-color:var(--dsw-alias-label-tertiary)}.PkL4gq_editorActions{justify-content:flex-end;gap:8px;display:flex}.PkL4gq_addBlock{flex-direction:column;gap:12px;display:flex}.PkL4gq_addActions{flex-wrap:wrap;gap:10px;display:flex}.PkL4gq_addButton{border:1px dashed var(--dsw-alias-border-l3);border-radius:16px;flex:1 1 0;gap:6px;min-width:180px;height:44px}.PkL4gq_addCard{background:var(--dsw-alias-bg-module-platform);border-radius:12px;flex-direction:column;gap:14px;padding:14px 16px;list-style:none;display:flex}.PkL4gq_addCard .PkL4gq_editor,.PkL4gq_setupCard .PkL4gq_editor{background:0 0;padding:0}.PkL4gq_tabs{flex-direction:column;gap:12px;display:flex}.PkL4gq_tabBar{border-bottom:.5px solid var(--dsw-alias-border-l2);gap:4px;display:flex}.PkL4gq_tabButton{appearance:none;font:inherit;color:var(--dsw-alias-label-tertiary);cursor:pointer;background:0 0;border:none;padding:6px 12px 8px;font-size:13px;line-height:20px;position:relative}.PkL4gq_tabButton:hover{color:var(--dsw-alias-label-primary)}.PkL4gq_tabButton:disabled{opacity:.4;cursor:default}.PkL4gq_tabButtonActive{color:var(--dsw-alias-label-primary);font-weight:500}.PkL4gq_tabButtonActive:after{content:\"\";background:var(--dsw-alias-brand-primary);border-radius:2px;height:2px;position:absolute;bottom:-1px;left:10px;right:10px}.PkL4gq_tabPanel{flex-direction:column;gap:12px;display:flex}.PkL4gq_modelCatalog{flex-direction:column;gap:10px;display:flex}.PkL4gq_modelCatalogHeading{flex-direction:column;gap:2px;display:flex}.PkL4gq_modelCatalogTitle{color:var(--dsw-alias-label-secondary);font-size:12px;font-weight:500;line-height:18px}.PkL4gq_modelCatalogMeta,.PkL4gq_modelEmpty{color:var(--dsw-alias-label-tertiary);margin:0;font-size:12px;line-height:18px}.PkL4gq_modelList{flex-direction:column;gap:8px;display:flex}.PkL4gq_modelListHead{justify-content:space-between;align-items:flex-start;gap:12px;display:flex}.PkL4gq_modelEntry{border:.5px solid var(--dsw-alias-border-l4);border-radius:10px;padding:6px}.PkL4gq_modelRow{grid-template-columns:minmax(0,1.4fr) minmax(0,1fr) auto auto auto;align-items:center;gap:6px;display:grid;position:relative}.PkL4gq_modelEntryDragging{border:.5px solid var(--dsw-alias-border-l4);opacity:.5;border-radius:10px;padding:6px}.PkL4gq_dragHandle{box-sizing:border-box;width:24px;height:28px;color:var(--dsw-alias-label-tertiary);cursor:grab;touch-action:none;background:0 0;border:none;border-radius:6px;justify-content:center;align-items:center;display:inline-flex}.PkL4gq_dragHandle:hover:not(:disabled){background:var(--dsw-alias-interactive-bg-hover);color:var(--dsw-alias-label-primary)}.PkL4gq_dragHandle:active:not(:disabled){cursor:grabbing}.PkL4gq_dragHandle:disabled{cursor:default;opacity:.4}.PkL4gq_modelDropLine{background:var(--dsw-alias-brand-primary);pointer-events:none;border-radius:2px;height:2px;position:absolute;left:0;right:0}.PkL4gq_modelDropLine[data-edge=before]{top:-5px}.PkL4gq_modelDropLine[data-edge=after]{bottom:-5px}.PkL4gq_iconButton{box-sizing:border-box;width:28px;height:28px;color:var(--dsw-alias-label-tertiary);cursor:pointer;background:0 0;border:none;border-radius:6px;justify-content:center;align-items:center;display:inline-flex}.PkL4gq_iconButton:hover:not(:disabled){background:var(--dsw-alias-interactive-bg-hover);color:var(--dsw-alias-label-primary)}.PkL4gq_iconButton:disabled{cursor:default;opacity:.4}.PkL4gq_iconButtonDanger:hover:not(:disabled){background:var(--dsw-alias-interactive-bg-hover-danger);color:var(--dsw-alias-state-error-primary)}.PkL4gq_modelAdvanced{grid-template-columns:repeat(auto-fit,minmax(160px,1fr));gap:8px;padding:8px 4px 2px;display:grid}.PkL4gq_capacityRow{grid-template-columns:repeat(auto-fit,minmax(160px,1fr));gap:8px;padding:0 4px;display:grid}.PkL4gq_modelField{flex-direction:column;gap:4px;display:flex}.PkL4gq_modelFieldLabel{color:var(--dsw-alias-label-tertiary);font-size:12px;line-height:18px}.PkL4gq_modelEmpty{border:1px dashed var(--dsw-alias-border-l3);text-align:center;border-radius:8px;padding:12px}.PkL4gq_addModelButton{box-sizing:border-box;border:.5px solid var(--dsw-alias-border-l3);height:28px;color:var(--dsw-alias-label-primary);font:inherit;cursor:pointer;background:0 0;border-radius:14px;align-self:flex-start;align-items:center;gap:4px;padding:0 10px;font-size:12px;line-height:18px;display:inline-flex}.PkL4gq_addModelButton:hover:not(:disabled){background:var(--dsw-alias-interactive-bg-hover)}.PkL4gq_input{box-sizing:border-box;border:.5px solid var(--dsw-alias-border-l4);width:100%;height:32px;font:inherit;background:var(--dsw-alias-bg-layer-1);color:var(--dsw-alias-label-primary);border-radius:8px;padding:0 10px;font-size:14px;line-height:22px}select.PkL4gq_input{cursor:pointer;max-width:240px}.PkL4gq_input:focus{border-color:var(--dsw-alias-brand-primary);outline:none}.PkL4gq_input::placeholder{color:var(--dsw-alias-label-dimmed)}.PkL4gq_input:disabled{opacity:.6;cursor:default}.PkL4gq_keyInput{position:relative}.PkL4gq_keyInputFilled{padding-right:40px}.PkL4gq_keyToggle{border-radius:var(--dsw-radius-md);width:32px;color:var(--dsw-alias-label-secondary);cursor:pointer;background:0 0;border:none;justify-content:center;align-items:center;padding:0;display:inline-flex;position:absolute;inset:1px 1px 1px auto}.PkL4gq_keyToggle:hover:not(:disabled){color:var(--dsw-alias-label-primary)}.PkL4gq_keyToggle:focus-visible{outline:var(--dsw-focus-ring-width) solid var(--dsw-focus-ring-color,var(--dsw-alias-state-business-primary));outline-offset:-2px}.PkL4gq_keyToggle:disabled{opacity:.6;cursor:default}.PkL4gq_selectInput{appearance:none;background-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12' fill='none'%3E%3Cpath d='M3 4.5L6 7.5L9 4.5' stroke='%2381858C' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E\");background-position:right 12px center;background-repeat:no-repeat;background-size:12px 12px;padding-right:32px}.PkL4gq_deleteDialog{width:min(480px,100%)}.PkL4gq_deleteConfirm:not(:disabled){border-color:var(--dsw-alias-state-error-primary);color:var(--dsw-alias-state-error-primary)}.PkL4gq_deleteConfirm:hover:not(:disabled){background:var(--dsw-alias-interactive-bg-hover-danger)}.PkL4gq_fetchDialog{max-width:520px}.PkL4gq_candidateToolbar{align-items:center;gap:8px;margin-bottom:6px;display:flex}.PkL4gq_candidateSearch{flex:240px;min-width:0}.PkL4gq_candidateList{flex-direction:column;gap:2px;max-height:320px;margin:0;padding:0;list-style:none;display:flex;overflow-y:auto}.PkL4gq_candidate{border-radius:6px}.PkL4gq_candidateLabel{cursor:pointer;align-items:center;gap:8px;padding:6px 8px;display:flex}.PkL4gq_candidateId{overflow-wrap:anywhere;flex:auto;font-family:ui-monospace,SFMono-Regular,Menlo,monospace;font-size:13px}.PkL4gq_candidateEmpty{color:var(--dsw-alias-label-secondary);text-align:center;margin:24px 0;font-size:13px;line-height:20px}[hidden]{display:none!important}.PkL4gq_extBlock{border:.5px solid var(--dsw-alias-border-l3);background:var(--dsw-alias-bg-layer-1);border-radius:10px;flex-direction:column;gap:10px;margin:8px 4px 2px;padding:10px;display:flex}.PkL4gq_extGroup{border-top:.5px solid var(--dsw-alias-border-l2);padding-top:12px}.PkL4gq_extGroupFirst{border-top:none;padding-top:0}.PkL4gq_extCheck{cursor:pointer;align-items:flex-start;gap:8px;display:flex}.PkL4gq_extCheckLabel{color:var(--dsw-alias-label-primary);font-size:14px;line-height:22px}.PkL4gq_extHint{color:var(--dsw-alias-label-tertiary);font-size:12px;line-height:18px}.PkL4gq_extGated{flex-direction:column;gap:12px;padding-left:2px;display:flex}.PkL4gq_extField{flex-direction:column;gap:6px;display:flex}.PkL4gq_extLabel{color:var(--dsw-alias-label-tertiary);font-size:12px;line-height:18px}.PkL4gq_extTable{border:.5px solid var(--dsw-alias-border-l4);border-radius:8px;overflow:hidden}.PkL4gq_extTHead{color:var(--dsw-alias-label-tertiary);background:var(--dsw-alias-bg-module-platform);grid-template-columns:64px minmax(0,1fr) minmax(0,1.2fr);font-size:12px;line-height:18px;display:grid}.PkL4gq_extTHead>div{padding:6px 10px}.PkL4gq_extTHead>div+div{border-left:.5px solid var(--dsw-alias-border-l2)}.PkL4gq_extTRow{border-top:.5px solid var(--dsw-alias-border-l2);grid-template-columns:64px minmax(0,1fr) minmax(0,1.2fr);align-items:center;display:grid}.PkL4gq_extTRow>div{padding:6px 10px;font-size:14px}.PkL4gq_extTRow>div+div{border-left:.5px solid var(--dsw-alias-border-l2)}.PkL4gq_extTRow input[type=text]{box-sizing:border-box;border:.5px solid var(--dsw-alias-border-l4);width:100%;height:32px;font:inherit;background:var(--dsw-alias-bg-layer-1);color:var(--dsw-alias-label-primary);border-radius:8px;padding:0 10px;font-size:14px}.PkL4gq_extTRow input[type=text]:disabled{opacity:.6;cursor:default}.PkL4gq_extCheckbox{accent-color:var(--dsw-alias-brand-primary);flex:none;width:15px;height:15px}.PkL4gq_switchRow{cursor:pointer;align-items:center;gap:8px;font-size:14px;line-height:22px;display:flex}.PkL4gq_extTag{background:var(--dsw-static-deepseek-100);color:var(--dsw-static-deepseek-600);border:.5px solid #4176e659;border-radius:4px;flex:none;padding:1px 6px;font-size:11px;font-weight:500;line-height:16px}.PkL4gq_modalMask{background:var(--dsw-alias-bg-mask-1);z-index:100;justify-content:center;align-items:center;padding:24px;display:flex;position:fixed;inset:0}.PkL4gq_modal{background:var(--dsw-specific-menu);border-radius:16px;width:100%;padding:20px;box-shadow:0 12px 40px #0000002e}.PkL4gq_modalTitle{color:var(--dsw-alias-label-primary);margin-bottom:8px;font-size:16px;font-weight:500;line-height:24px}.PkL4gq_modalDesc{color:var(--dsw-alias-label-secondary);margin-bottom:16px;font-size:14px;line-height:22px}.PkL4gq_modalFoot{justify-content:flex-end;gap:8px;display:flex}.PkL4gq_quickWrap{flex-direction:column;gap:6px;display:flex;position:relative}.PkL4gq_quickList{z-index:20;background:var(--dsw-specific-menu);backdrop-filter:var(--dsw-menu-backdrop-filter);--dsw-elevation-stroke-color:var(--dsw-alias-border-l1);box-shadow:var(--dsw-elevation-prominent);border:0;border-radius:8px;max-height:264px;margin-top:2px;padding:4px;position:absolute;top:100%;left:0;right:0;overflow-y:auto}.PkL4gq_quickItem{width:100%;color:var(--dsw-alias-label-primary);text-align:left;cursor:pointer;background:0 0;border:none;border-radius:6px;flex-direction:column;gap:1px;padding:6px 8px;font-family:ui-monospace,SFMono-Regular,Menlo,monospace;font-size:13px;display:flex}.PkL4gq_quickItemId{overflow-wrap:anywhere}.PkL4gq_quickItemApi{color:var(--dsw-alias-label-tertiary);letter-spacing:.2px;font-size:11px;line-height:14px}.PkL4gq_quickItem:hover{background:var(--dsw-alias-interactive-bg-hover)}.PkL4gq_quickEmpty{color:var(--dsw-alias-label-tertiary);padding:6px 8px;font-size:12px;line-height:18px}@media (prefers-reduced-motion:reduce){.PkL4gq_customizedSummary:before{transition:none}}.wAa-rG_extrasRow{align-items:center;gap:8px;margin-top:4px;display:flex}.wAa-rG_extrasLink{color:var(--dsw-alias-label-secondary);font:inherit;cursor:pointer;background:0 0;border:none;padding:0;font-size:12px;font-weight:500;line-height:18px;text-decoration:underline dotted #0000}@media (hover:hover){.wAa-rG_extrasLink:hover{color:var(--dsw-alias-label-primary);text-decoration-color:currentColor}}.wAa-rG_extrasLink:focus-visible{box-shadow:0 0 0 2px var(--dsw-alias-border-l3);border-radius:4px;outline:none}.wAa-rG_extrasCaret{color:var(--dsw-alias-label-tertiary);margin-left:4px}.wAa-rG_extrasHint,.wAa-rG_notice{color:var(--dsw-alias-label-tertiary);margin:0;font-size:12px;line-height:18px}.wAa-rG_error{color:var(--dsw-alias-state-error-primary);margin:0;font-size:12px;line-height:18px}.wAa-rG_savedNotice{color:var(--dsw-alias-state-success-primary);margin:0;font-size:12px;line-height:18px}.wAa-rG_modelsModal{width:min(720px,92vw);max-height:100%}.wAa-rG_modelsModalContent{position:relative}.wAa-rG_headerAction{height:28px;color:var(--dsw-alias-label-secondary);font:inherit;cursor:pointer;background:0 0;border:none;border-radius:14px;align-items:center;padding:0 10px;font-size:12px;line-height:18px;display:inline-flex;position:absolute;top:22px;right:50px}@media (hover:hover){.wAa-rG_headerAction:hover:not(:disabled){background:var(--dsw-alias-interactive-bg-hover)}}.wAa-rG_headerAction:disabled{opacity:.4;cursor:default}.wAa-rG_headerAction:focus-visible{box-shadow:0 0 0 2px var(--dsw-alias-border-l3);outline:none}.wAa-rG_modalBody{flex-direction:column;gap:10px;height:min(64vh,560px);min-height:340px;display:flex}.wAa-rG_catalogBody{flex:auto;min-height:0;padding-right:4px;overflow-y:auto}.wAa-rG_secondaryButton{box-sizing:border-box;border:.5px solid var(--dsw-alias-border-l3);height:28px;color:var(--dsw-alias-label-primary);font:inherit;cursor:pointer;background:0 0;border-radius:14px;justify-content:center;align-items:center;padding:0 12px;font-size:12px;line-height:18px;display:inline-flex}@media (hover:hover){.wAa-rG_secondaryButton:hover:not(:disabled){background:var(--dsw-alias-interactive-bg-hover)}}.wAa-rG_secondaryButton:disabled{opacity:.4;cursor:default}.wAa-rG_secondaryButton:focus-visible{box-shadow:0 0 0 2px var(--dsw-alias-border-l3);outline:none}.wAa-rG_modelList{flex-direction:column;gap:6px;max-height:min(52vh,420px);display:flex;overflow-y:auto}.wAa-rG_modelCard{border:.5px solid var(--dsw-alias-border-l4);border-radius:10px;padding:8px 10px}.wAa-rG_modelHead{flex-wrap:wrap;align-items:baseline;gap:8px;display:flex}.wAa-rG_modelId{color:var(--dsw-alias-label-primary);font-size:12px;font-weight:500;line-height:18px}.wAa-rG_modelName{color:var(--dsw-alias-label-tertiary);font-size:11px;line-height:16px}.wAa-rG_modelHint{color:var(--dsw-alias-label-tertiary);margin-left:auto;font-size:11px;line-height:16px}.wAa-rG_compatRow{flex-wrap:wrap;align-items:center;gap:10px 14px;margin-top:6px;display:flex}.wAa-rG_compatField{color:var(--dsw-alias-label-secondary);align-items:center;gap:4px;font-size:11px;line-height:16px;display:inline-flex}.wAa-rG_compatInput{box-sizing:border-box;border:.5px solid var(--dsw-alias-border-l4);width:104px;height:24px;font:inherit;background:var(--dsw-alias-bg-layer-1);color:var(--dsw-alias-label-primary);border-radius:6px;padding:0 6px;font-size:11px}.wAa-rG_quickWrap{flex-direction:column;gap:6px;display:flex;position:relative}.wAa-rG_panelRow{flex-wrap:wrap;align-items:center;gap:6px;display:flex}.wAa-rG_input,.wAa-rG_selectInput{box-sizing:border-box;border:.5px solid var(--dsw-alias-border-l4);height:28px;font:inherit;background:var(--dsw-alias-bg-layer-1);color:var(--dsw-alias-label-primary);border-radius:8px;padding:0 8px;font-size:12px;line-height:18px}.wAa-rG_selectInput{flex:0 0 104px;min-width:0}.wAa-rG_quickList{z-index:20;background:var(--dsw-specific-menu);backdrop-filter:var(--dsw-menu-backdrop-filter);--dsw-elevation-stroke-color:var(--dsw-alias-border-l1);box-shadow:var(--dsw-elevation-prominent);border:0;border-radius:8px;max-height:264px;margin-top:2px;padding:4px;position:absolute;top:34px;left:0;right:0;overflow-y:auto}.wAa-rG_quickItem{width:100%;color:var(--dsw-alias-label-primary);font:inherit;text-align:left;cursor:pointer;background:0 0;border:none;border-radius:6px;align-items:baseline;gap:8px;padding:4px 8px;font-size:12px;line-height:18px;display:flex}@media (hover:hover){.wAa-rG_quickItem:hover{background:var(--dsw-alias-interactive-bg-hover)}}.wAa-rG_quickItemId{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.wAa-rG_quickItemApi{color:var(--dsw-alias-label-tertiary);flex:none;margin-left:auto;font-size:11px;line-height:16px}.wAa-rG_quickEmpty{color:var(--dsw-alias-label-tertiary);padding:6px 8px;font-size:12px;line-height:18px;display:block}.wAa-rG_extBlock{border:.5px solid var(--dsw-alias-border-l4);background:var(--dsw-alias-bg-layer-1);border-radius:10px;flex-direction:column;gap:10px;margin-top:8px;padding:10px;display:flex}.wAa-rG_extGroup{flex-direction:column;gap:6px;display:flex}.wAa-rG_extGroup+.wAa-rG_extGroup{border-top:.5px solid var(--dsw-alias-border-l4);padding-top:10px}.wAa-rG_extLabel{color:var(--dsw-alias-label-secondary);font-size:12px;font-weight:500;line-height:18px}.wAa-rG_extField{flex-direction:column;gap:4px;display:flex}.wAa-rG_capacityRow{flex-wrap:wrap;gap:10px;display:flex}.wAa-rG_capacityRow>*{flex:140px;min-width:0}.wAa-rG_extTable{flex-direction:column;gap:2px;display:flex}.wAa-rG_extTHead,.wAa-rG_extTRow{grid-template-columns:52px 84px minmax(0,1fr);align-items:center;gap:8px;display:grid}.wAa-rG_extTHead{border-bottom:.5px solid var(--dsw-alias-border-l4);color:var(--dsw-alias-label-tertiary);padding-bottom:4px;font-size:11px;line-height:16px}.wAa-rG_extTRow{color:var(--dsw-alias-label-secondary);font-size:12px;line-height:18px}.wAa-rG_extTRow input[type=text]{box-sizing:border-box;border:.5px solid var(--dsw-alias-border-l4);width:100%;height:26px;font:inherit;background:var(--dsw-alias-bg-layer-1);color:var(--dsw-alias-label-primary);border-radius:6px;padding:0 6px;font-size:12px}.wAa-rG_extCheckbox{width:14px;height:14px;margin:0}.wAa-rG_switchRow{color:var(--dsw-alias-label-secondary);align-items:center;gap:6px;font-size:12px;line-height:18px;display:inline-flex}.wAa-rG_extCheck{color:var(--dsw-alias-label-secondary);align-items:flex-start;gap:6px;font-size:12px;line-height:18px;display:flex}.wAa-rG_extHint{color:var(--dsw-alias-label-tertiary);font-size:11px;line-height:16px}.wAa-rG_modelSummary{color:var(--dsw-alias-label-tertiary);margin-left:auto;font-size:11px;line-height:16px}.wAa-rG_modelToggle{text-align:left;cursor:pointer;width:100%;font:inherit;background:0 0;border:none;align-items:baseline;gap:8px;padding:0;display:flex}.wAa-rG_modalFoot{border-top:.5px solid var(--dsw-alias-border-l4);justify-content:flex-end;align-items:center;gap:8px;padding-top:10px;display:flex}.wAa-rG_primaryButton{box-sizing:border-box;background:var(--dsw-alias-button-primary-fill);height:28px;color:var(--dsw-alias-label-primary-foreground);font:inherit;cursor:pointer;border:none;border-radius:14px;justify-content:center;align-items:center;padding:0 14px;font-size:12px;line-height:18px;display:inline-flex}@media (hover:hover){.wAa-rG_primaryButton:hover:not(:disabled){background:var(--dsw-alias-button-primary-hover)}}.wAa-rG_primaryButton:disabled{opacity:.4;cursor:default}.wAa-rG_primaryButton:focus-visible{box-shadow:0 0 0 2px var(--dsw-alias-border-l3);outline:none}.wAa-rG_dirtyHint{color:var(--dsw-alias-state-warn-label);margin-right:auto;font-size:11px;line-height:16px}\n";
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
		let react_jsx_runtime = require("react/jsx-runtime");
		//#region src/client/vendor/operations.ts
		/**
		* Bind the page's Host operations to the plugin's own Remote namespaces.
		* @param ctx - the page plugin's context, which declares `remote.credentials`,
		* `remote.llm`, and `remote.settings` in its own `inject`.
		* @returns the callbacks the section and its cards are injected with.
		*/
		function createModelsOperations(ctx) {
			return {
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
		//#region src/client/extension/write.ts
		/**
		* Bind the writer to the plugin's describe face, schema, and Host operations.
		* @param ctx - client root context (declares `configForms`, `remote.settings`).
		* @param operations - Models Host operations.
		* @param schema - bound settings-schema callbacks.
		* @returns the read/write surface handed to the extension components.
		*/
		function createProviderWriter(ctx, operations, schema) {
			return {
				read: (ns, path) => {
					const snapshot = describeSnapshot(ctx);
					if (snapshot === void 0) return void 0;
					const view = snapshot.views.find((candidate) => candidate.ns === ns);
					if (view === void 0) return void 0;
					return {
						user: objectAt(view.user, path, schema),
						resolved: objectAt(view.value, path, schema),
						revision: view.revision,
						writable: snapshot.writable
					};
				},
				writeModels: async (ns, path, models, expectedRevision) => {
					const outcome = await operations.writeSettings(ns, [{
						op: "set",
						path: [...path, "models"],
						value: [...models]
					}], expectedRevision);
					if (outcome.kind === "written") return {
						kind: "written",
						revision: outcome.view.revision
					};
					return outcome.kind === "conflict" ? { kind: "conflict" } : {
						kind: "refused",
						message: outcome.message
					};
				}
			};
		}
		/**
		* One object-valued subtree.
		* @param root - the layer value.
		* @param path - subtree path.
		* @param schema - bound schema callbacks.
		* @returns the object, or an empty record when the path holds something else.
		*/
		function objectAt(root, path, schema) {
			const subtree = schema.getPath(root, path);
			return typeof subtree === "object" && subtree !== null && !Array.isArray(subtree) ? subtree : {};
		}
		/**
		* Read the current describe snapshot, asking the face to load when it has none
		* yet (a card can render before the first settings push arrives).
		* @param ctx - client root context.
		* @returns the snapshot facts, or undefined while the describe is still loading.
		*/
		function describeSnapshot(ctx) {
			const face = ctx.configForms.describe();
			const view = face.getSnapshot().view;
			if (view === void 0) {
				face.ensure();
				return;
			}
			return {
				writable: view.writable,
				views: view.namespaces
			};
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
		/** Thinking levels offered by llm-pi-ai (THINKING_LEVEL_GATE @ 0.2.2-rc.3). Only `off` may carry an empty wire value. */
		const THINKING_LEVELS = [
			"off",
			"minimal",
			"low",
			"medium",
			"high",
			"xhigh",
			"max"
		];
		/** Reasoning wire formats understood by llm-pi-ai (SUPPORTED_THINKING_FORMATS @ 0.2.2-rc.3). */
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
		* set of its COMPAT_GATES @ 0.2.2-rc.3). Only these may reach a model row: the
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
		//#region src/client/models-plus/compat.ts
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
			return narrowEfforts(Object.keys(efforts).some((level) => level !== "off") ? efforts : false, api);
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
		/** Levels the Gemini protocol accepts, each sent under its own name. */
		const GEMINI_LEVELS = [
			"minimal",
			"low",
			"medium",
			"high"
		];
		/**
		* Narrow an efforts dict to what a protocol accepts.
		*
		* pi-ai's Gemini protocol sends only its four levels and fails a request whose
		* entry names any other level or whose wire value differs from the level name.
		* The adapter accepts the profile either way, so the failure only lands at the
		* first request — which is exactly what this filter prevents.
		* @param efforts - the mapped dict, or `false` for a non-reasoning model.
		* @param api - the protocol the row will be judged by.
		* @returns the dict that protocol accepts.
		*/
		function narrowEfforts(efforts, api) {
			if (efforts === false || api !== "google-generative-ai") return efforts;
			const narrowed = {};
			for (const level of GEMINI_LEVELS) if (level in efforts) narrowed[level] = level;
			return Object.keys(narrowed).length === 0 ? false : narrowed;
		}
		//#endregion
		//#region src/client/models-plus/models-plus.module.css
		var models_plus_module_default = {
			"accountStatus": "PkL4gq_accountStatus",
			"addActions": "PkL4gq_addActions",
			"addBlock": "PkL4gq_addBlock",
			"addButton": "PkL4gq_addButton",
			"addCard": "PkL4gq_addCard",
			"addModelButton": "PkL4gq_addModelButton",
			"advancedHint": "PkL4gq_advancedHint",
			"candidate": "PkL4gq_candidate",
			"candidateEmpty": "PkL4gq_candidateEmpty",
			"candidateId": "PkL4gq_candidateId",
			"candidateLabel": "PkL4gq_candidateLabel",
			"candidateList": "PkL4gq_candidateList",
			"candidateSearch": "PkL4gq_candidateSearch",
			"candidateToolbar": "PkL4gq_candidateToolbar",
			"capacityRow": "PkL4gq_capacityRow",
			"credentialDot": "PkL4gq_credentialDot",
			"credentialDotConfigured": "PkL4gq_credentialDotConfigured",
			"credentialDotMissing": "PkL4gq_credentialDotMissing",
			"customizedSummary": "PkL4gq_customizedSummary",
			"dangerButton": "PkL4gq_dangerButton",
			"deleteConfirm": "PkL4gq_deleteConfirm",
			"deleteDialog": "PkL4gq_deleteDialog",
			"dragHandle": "PkL4gq_dragHandle",
			"editor": "PkL4gq_editor",
			"editorActions": "PkL4gq_editorActions",
			"error": "PkL4gq_error",
			"extBlock": "PkL4gq_extBlock",
			"extCheck": "PkL4gq_extCheck",
			"extCheckbox": "PkL4gq_extCheckbox",
			"extCheckLabel": "PkL4gq_extCheckLabel",
			"extField": "PkL4gq_extField",
			"extGated": "PkL4gq_extGated",
			"extGroup": "PkL4gq_extGroup",
			"extGroupFirst": "PkL4gq_extGroupFirst",
			"extHint": "PkL4gq_extHint",
			"extLabel": "PkL4gq_extLabel",
			"extTable": "PkL4gq_extTable",
			"extTag": "PkL4gq_extTag",
			"extTHead": "PkL4gq_extTHead",
			"extTRow": "PkL4gq_extTRow",
			"fetchDialog": "PkL4gq_fetchDialog",
			"field": "PkL4gq_field",
			"fieldLabel": "PkL4gq_fieldLabel",
			"helpButton": "PkL4gq_helpButton",
			"iconButton": "PkL4gq_iconButton",
			"iconButtonDanger": "PkL4gq_iconButtonDanger",
			"input": "PkL4gq_input",
			"intro": "PkL4gq_intro",
			"keyInput": "PkL4gq_keyInput",
			"keyInputFilled": "PkL4gq_keyInputFilled",
			"keyToggle": "PkL4gq_keyToggle",
			"linkButton": "PkL4gq_linkButton",
			"modal": "PkL4gq_modal",
			"modalDesc": "PkL4gq_modalDesc",
			"modalFoot": "PkL4gq_modalFoot",
			"modalMask": "PkL4gq_modalMask",
			"modalTitle": "PkL4gq_modalTitle",
			"modelAdvanced": "PkL4gq_modelAdvanced",
			"modelCatalog": "PkL4gq_modelCatalog",
			"modelCatalogHeading": "PkL4gq_modelCatalogHeading",
			"modelCatalogMeta": "PkL4gq_modelCatalogMeta",
			"modelCatalogTitle": "PkL4gq_modelCatalogTitle",
			"modelDropLine": "PkL4gq_modelDropLine",
			"modelEmpty": "PkL4gq_modelEmpty",
			"modelEntry": "PkL4gq_modelEntry",
			"modelEntryDragging": "PkL4gq_modelEntryDragging",
			"modelField": "PkL4gq_modelField",
			"modelFieldLabel": "PkL4gq_modelFieldLabel",
			"modelList": "PkL4gq_modelList",
			"modelListHead": "PkL4gq_modelListHead",
			"modelRow": "PkL4gq_modelRow",
			"notice": "PkL4gq_notice",
			"primaryButton": "PkL4gq_primaryButton",
			"quickEmpty": "PkL4gq_quickEmpty",
			"quickItem": "PkL4gq_quickItem",
			"quickItemApi": "PkL4gq_quickItemApi",
			"quickItemId": "PkL4gq_quickItemId",
			"quickList": "PkL4gq_quickList",
			"quickWrap": "PkL4gq_quickWrap",
			"rowActions": "PkL4gq_rowActions",
			"rowCard": "PkL4gq_rowCard",
			"rowHead": "PkL4gq_rowHead",
			"rowIdentity": "PkL4gq_rowIdentity",
			"rowName": "PkL4gq_rowName",
			"rows": "PkL4gq_rows",
			"rowTag": "PkL4gq_rowTag",
			"savedNotice": "PkL4gq_savedNotice",
			"secondaryButton": "PkL4gq_secondaryButton",
			"section": "PkL4gq_section",
			"selectInput": "PkL4gq_selectInput",
			"setupCard": "PkL4gq_setupCard",
			"switchRow": "PkL4gq_switchRow",
			"tabBar": "PkL4gq_tabBar",
			"tabButton": "PkL4gq_tabButton",
			"tabButtonActive": "PkL4gq_tabButtonActive",
			"tabPanel": "PkL4gq_tabPanel",
			"tabs": "PkL4gq_tabs",
			"title": "PkL4gq_title",
			"titleRow": "PkL4gq_titleRow"
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
			const levelsOnly = api === "google-generative-ai";
			const offeredLevels = levelsOnly ? THINKING_LEVELS.filter((level) => level === "minimal" || level === "low" || level === "medium" || level === "high") : THINKING_LEVELS;
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
							className: models_plus_module_default["capacityRow"],
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
									}), offeredLevels.map((level) => {
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
														readOnly: levelsOnly,
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
		* Give the drag a readable ghost instead of the default row snapshot. The
		* browser fills the snapshot's transparent pixels with the page colour and the
		* copy carries every input box, which reads as a row being torn out.
		* @param event - the dragstart event.
		* @param label - the text the ghost shows.
		*/
		function dragGhost(event, label) {
			const doc = event.currentTarget.ownerDocument;
			const ghost = doc.createElement("div");
			ghost.textContent = label.length === 0 ? "模型" : label;
			ghost.style.cssText = "position:fixed;top:-1000px;left:0;padding:4px 10px;border-radius:8px;background:var(--dsw-specific-menu);color:var(--dsw-alias-label-primary);font:inherit;font-size:12px;line-height:18px;";
			doc.body.append(ghost);
			try {
				event.dataTransfer?.setDragImage(ghost, 8, 8);
			} catch {}
			setTimeout(() => {
				ghost.remove();
			}, 0);
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
			const [dragging, setDragging] = (0, react.useState)(void 0);
			const [dropAt, setDropAt] = (0, react.useState)(void 0);
			const [epoch, setEpoch] = (0, react.useState)(0);
			const draggingRef = (0, react.useRef)(void 0);
			const dropAtRef = (0, react.useRef)(void 0);
			/**
			* Where a drop lands once the dragged row is out of the way.
			*
			* The indicator names a GAP, not a row: `after` picks the gap above or below
			* the row under the pointer (its own midpoint, so the indicator says what a
			* release would do before the release), and the gap is counted in pre-move
			* positions. Removing the dragged row first shifts everything after it up by
			* one, so a gap beyond the drag's own slot has to come back by one to stay
			* the same slot.
			* @param from - the dragged row's position.
			* @param row - the row under the pointer.
			* @param after - whether the pointer sits past that row's midpoint.
			* @returns the insertion index for the post-removal array.
			*/
			const dropIndex = (from, row, after) => {
				const gap = after ? row + 1 : row;
				return from < gap ? gap - 1 : gap;
			};
			/**
			* Carry the expanded-row set through a move: the dragged row keeps its own
			* panel, and every row it passed shifts one slot.
			* @param current - the expanded positions before the move.
			* @param from - the dragged row's position.
			* @param to - its position after the move.
			* @returns the same panels, addressed by their new positions.
			*/
			const moveExpanded = (current, from, to) => {
				const next = /* @__PURE__ */ new Set();
				for (const at of current) if (at === from) next.add(to);
				else if (from < to ? at > from && at <= to : at >= to && at < from) next.add(at + (from < to ? -1 : 1));
				else next.add(at);
				return next;
			};
			/**
			* Put one row at another position in the draft.
			* @param from - the row's current position.
			* @param to - the position it should end up at.
			*/
			const moveRow = (from, to) => {
				if (from === to || from < 0 || to < 0 || from >= models.length || to >= models.length) return;
				const next = [...models];
				const [moved] = next.splice(from, 1);
				if (moved === void 0) return;
				next.splice(to, 0, moved);
				onChange(next);
				setExpanded((current) => moveExpanded(current, from, to));
				setEpoch((value) => value + 1);
			};
			/** @param index - the row the pointer took hold of. */
			const beginDrag = (index) => {
				draggingRef.current = index;
				dropAtRef.current = void 0;
				setDragging(index);
				setDropAt(void 0);
			};
			/**
			* Follow the pointer: keep the drop gap live so a release is predictable.
			* @param event - the dragover on a row.
			* @param index - that row's position.
			*/
			const trackDrag = (event, index) => {
				if (draggingRef.current === void 0) return;
				event.preventDefault();
				if (event.dataTransfer !== null) event.dataTransfer.dropEffect = "move";
				const box = event.currentTarget.getBoundingClientRect();
				const at = {
					row: index,
					after: event.clientY > box.top + box.height / 2
				};
				const current = dropAtRef.current;
				if (current !== void 0 && current.row === at.row && current.after === at.after) return;
				dropAtRef.current = at;
				setDropAt(at);
			};
			/** Commit the drop, or abandon it when the drag never named a gap. */
			const endDrag = () => {
				const from = draggingRef.current;
				const at = dropAtRef.current;
				draggingRef.current = void 0;
				dropAtRef.current = void 0;
				setDragging(void 0);
				setDropAt(void 0);
				if (from === void 0 || at === void 0) return;
				moveRow(from, dropIndex(from, at.row, at.after));
			};
			/**
			* Reorder from the keyboard.
			*
			* The handle is a button, so the move has to be reachable without a pointer.
			* Alt + Arrow is the conventional "move this thing" chord, and it leaves the
			* bare arrow keys to their normal page duty.
			* @param event - the key event on the handle.
			* @param index - this row's position.
			*/
			const handleHandleKey = (event, index) => {
				if (!event.altKey || event.key !== "ArrowUp" && event.key !== "ArrowDown") return;
				event.preventDefault();
				moveRow(index, index + (event.key === "ArrowUp" ? -1 : 1));
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
							className: dragging === index ? `${models_plus_module_default["modelEntry"]} ${models_plus_module_default["modelEntryDragging"]}` : models_plus_module_default["modelEntry"],
							children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
								className: models_plus_module_default["modelRow"],
								onDragOver: (event) => {
									trackDrag(event, index);
								},
								onDrop: (event) => {
									event.preventDefault();
									endDrag();
								},
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
									}),
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
										type: "button",
										className: models_plus_module_default["dragHandle"],
										"aria-label": `拖动以调整模型顺序 ${String(index + 1)}`,
										title: "拖动以调整顺序（也可用 Alt + ↑/↓）",
										disabled: disabled || models.length < 2,
										draggable: disabled !== true,
										onDragStart: (event) => {
											event.dataTransfer.effectAllowed = "move";
											event.dataTransfer.setData("application/x-dsh-model-order", String(index));
											dragGhost(event, textOf(model, "id"));
											beginDrag(index);
										},
										onDragEnd: endDrag,
										onKeyDown: (event) => {
											handleHandleKey(event, index);
										},
										children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("svg", {
											width: "14",
											height: "14",
											viewBox: "0 0 16 16",
											fill: "none",
											"aria-hidden": "true",
											children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
												d: "M5.5 4h.01M5.5 8h.01M5.5 12h.01M10.5 4h.01M10.5 8h.01M10.5 12h.01",
												stroke: "currentColor",
												strokeWidth: "1.6",
												strokeLinecap: "round"
											})
										})
									}),
									dropAt !== void 0 && dropAt.row === index ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
										className: models_plus_module_default["modelDropLine"],
										"data-edge": dropAt.after ? "after" : "before",
										"aria-hidden": "true"
									}) : null
								]
							}), expanded.has(index) ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)(ModelEntryPanel, {
								model,
								api: props.routeApi,
								disabled,
								onChange: (next) => {
									onChange(models.map((row, at) => at === index ? next : row));
								}
							}) : null]
						}, epoch + ":" + String(index)))
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
		//#region src/client/extension/extras.module.css
		var extras_module_default = {
			"capacityRow": "wAa-rG_capacityRow",
			"catalogBody": "wAa-rG_catalogBody",
			"compatField": "wAa-rG_compatField",
			"compatInput": "wAa-rG_compatInput",
			"compatRow": "wAa-rG_compatRow",
			"dirtyHint": "wAa-rG_dirtyHint",
			"error": "wAa-rG_error",
			"extBlock": "wAa-rG_extBlock",
			"extCheck": "wAa-rG_extCheck",
			"extCheckbox": "wAa-rG_extCheckbox",
			"extField": "wAa-rG_extField",
			"extGroup": "wAa-rG_extGroup",
			"extHint": "wAa-rG_extHint",
			"extLabel": "wAa-rG_extLabel",
			"extrasCaret": "wAa-rG_extrasCaret",
			"extrasHint": "wAa-rG_extrasHint",
			"extrasLink": "wAa-rG_extrasLink",
			"extrasRow": "wAa-rG_extrasRow",
			"extTable": "wAa-rG_extTable",
			"extTHead": "wAa-rG_extTHead",
			"extTRow": "wAa-rG_extTRow",
			"headerAction": "wAa-rG_headerAction",
			"input": "wAa-rG_input",
			"modalBody": "wAa-rG_modalBody",
			"modalFoot": "wAa-rG_modalFoot",
			"modelCard": "wAa-rG_modelCard",
			"modelHead": "wAa-rG_modelHead",
			"modelHint": "wAa-rG_modelHint",
			"modelId": "wAa-rG_modelId",
			"modelList": "wAa-rG_modelList",
			"modelName": "wAa-rG_modelName",
			"modelsModal": "wAa-rG_modelsModal",
			"modelsModalContent": "wAa-rG_modelsModalContent",
			"modelSummary": "wAa-rG_modelSummary",
			"modelToggle": "wAa-rG_modelToggle",
			"notice": "wAa-rG_notice",
			"panelRow": "wAa-rG_panelRow",
			"primaryButton": "wAa-rG_primaryButton",
			"quickEmpty": "wAa-rG_quickEmpty",
			"quickItem": "wAa-rG_quickItem",
			"quickItemApi": "wAa-rG_quickItemApi",
			"quickItemId": "wAa-rG_quickItemId",
			"quickList": "wAa-rG_quickList",
			"quickWrap": "wAa-rG_quickWrap",
			"savedNotice": "wAa-rG_savedNotice",
			"secondaryButton": "wAa-rG_secondaryButton",
			"selectInput": "wAa-rG_selectInput",
			"switchRow": "wAa-rG_switchRow"
		};
		//#endregion
		//#region src/client/extension/ModelsModal.tsx
		/**
		* The model catalog behind the card's `Models+` entry.
		*
		* This is the page-era editor restored inside a layer: fetch the endpoint's
		* model list, add or delete rows, drag to reorder, collapse a row and click to
		* expand it, and — in every row's expanded block — quick-load that row from the
		* pi-ai / models.dev catalogs, plus the capacity, modality, reasoning, and
		* compat fields the official page does not all edit.
		*
		* Edits stay in a local draft until Save, so one visit is one write and the
		* revision fence covers the whole edit.
		*/
		/**
		* Render the catalog editor and its save bar.
		* @param props - the route facts, operations, and commit callback.
		* @returns the editor body.
		*/
		function ModelsModal(props) {
			const [draft, setDraft] = (0, react.useState)(() => props.models.map((row) => ({ ...row })));
			const [busy, setBusy] = (0, react.useState)(false);
			const [status, setStatus] = (0, react.useState)(void 0);
			const [dirty, setDirty] = (0, react.useState)(false);
			const [downloading, setDownloading] = (0, react.useState)(false);
			const save = () => {
				setBusy(true);
				props.onCommit(draft).then((outcome) => {
					setBusy(false);
					if (outcome.kind === "written") {
						setDirty(false);
						props.onSaved();
						return;
					}
					setStatus(outcome.kind === "conflict" ? "设置已被其他改动刷新，关闭后重新打开再试" : "保存失败：" + outcome.message);
				});
			};
			const download = () => {
				setDownloading(true);
				downloadMetadata().then((result) => {
					setDownloading(false);
					setStatus(result.ok ? "models.dev 元数据已更新" : "下载失败：" + result.message);
				});
			};
			return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
				className: extras_module_default["modalBody"],
				children: [
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
						type: "button",
						className: extras_module_default["headerAction"],
						disabled: downloading,
						onClick: download,
						children: downloading ? "下载中…" : "更新 models.dev 元数据"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
						className: extras_module_default["catalogBody"],
						children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(ModelCatalog, {
							models: draft,
							overridden: true,
							defaultContextWindow: void 0,
							defaultMaxTokens: void 0,
							probe: {
								settingsNs: props.settingsNs,
								provider: props.provider,
								...props.baseURL === void 0 ? {} : { baseURL: props.baseURL },
								...props.api === void 0 ? {} : { api: props.api }
							},
							...props.api === void 0 ? {} : { routeApi: props.api },
							operations: props.operations,
							disabled: busy || !props.writable,
							onChange: (next) => {
								setDraft(next);
								setDirty(true);
								setStatus(void 0);
							}
						})
					}),
					status === void 0 ? null : /* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
						className: extras_module_default["error"],
						children: status
					}),
					props.writable ? null : /* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
						className: extras_module_default["notice"],
						children: "设置文档只读，无法写入。"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
						className: extras_module_default["modalFoot"],
						children: [dirty ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
							className: extras_module_default["dirtyHint"],
							children: "有未保存的改动"
						}) : null, /* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
							type: "button",
							className: extras_module_default["primaryButton"],
							disabled: busy || !props.writable || !dirty,
							onClick: save,
							children: busy ? "保存中…" : "保存"
						})]
					})
				]
			});
		}
		//#endregion
		//#region src/client/extension/ProviderExtras.tsx
		/**
		* The provider-card extension seat: one entry and its model-level editor.
		*
		* The official page has no per-model extension seat, so this plugin folds both
		* of its jobs behind a single word in the card — `Models+` — and opens a layer
		* that lists the route's models with each row's compat switches beside it.
		* Quick-load lives in that layer as a route-level action: it appends a model to
		* the route, it does not fill an existing row.
		*
		* The seat reads the stored namespace on every open (the revision fence needs
		* the revision in force now) and commits whole `models` arrays; a stale read
		* reports a conflict instead of overwriting a concurrent edit.
		*/
		/**
		* The route's stored model rows. The effective value is the base: a route that
		* inherits the catalog's list must not lose those rows when the first quick
		* load writes a custom array.
		* @param stored - the read subtree pair.
		* @returns the rows, or an empty list.
		*/
		function rowsOf(stored) {
			const source = stored?.user["models"] ?? stored?.resolved["models"];
			if (!Array.isArray(source)) return [];
			return source.filter((row) => typeof row === "object" && row !== null && !Array.isArray(row));
		}
		/**
		* The protocol the route states, from the user layer or the inherited value.
		* @param stored - the read subtree pair.
		* @returns the identifier, or undefined when no layer settles one.
		*/
		function apiOf(stored) {
			const declared = stored?.user["api"] ?? stored?.resolved["api"];
			return typeof declared === "string" && declared.length > 0 ? declared : void 0;
		}
		/**
		* The route's base URL, from the user layer or the inherited value.
		* @param stored - the read subtree pair.
		* @returns the URL, or undefined when no layer states one.
		*/
		function baseURLOf(stored) {
			const declared = stored?.user["baseURL"] ?? stored?.resolved["baseURL"];
			return typeof declared === "string" && declared.length > 0 ? declared : void 0;
		}
		/**
		* Render the seat.
		* @param props - owner share plus the plugin's read/write face.
		* @returns the extension block.
		*/
		function ProviderExtras(props) {
			const [open, setOpen] = (0, react.useState)(false);
			const [stored, setStored] = (0, react.useState)(void 0);
			const [models, setModels] = (0, react.useState)([]);
			const [revision, setRevision] = (0, react.useState)(0);
			const ns = props.provider.settingsNs;
			const path = props.provider.settingsPath;
			const displayName = typeof props.provider.displayName === "string" && props.provider.displayName.length > 0 ? props.provider.displayName : String(props.provider.provider);
			const openEditor = () => {
				const read = props.writer.read(ns, path);
				setStored(read);
				setModels(rowsOf(read));
				setRevision(read?.revision ?? 0);
				setOpen(true);
			};
			const commit = (next) => props.writer.writeModels(ns, path, next, revision).then((outcome) => {
				if (outcome.kind === "written") {
					setModels([...next]);
					setRevision(outcome.revision);
				}
				return outcome;
			});
			if (!props.configured) return /* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
				className: extras_module_default["extrasHint"],
				children: "保存该提供方后可在此装入目录模型或编辑兼容开关。"
			});
			return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
				className: extras_module_default["extrasRow"],
				children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("button", {
					type: "button",
					className: extras_module_default["extrasLink"],
					"aria-expanded": open,
					onClick: () => {
						open ? setOpen(false) : openEditor();
					},
					children: ["Models+", /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
						className: extras_module_default["extrasCaret"],
						"aria-hidden": "true",
						children: "▾"
					})]
				}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.Modal, {
					open,
					onClose: () => {
						setOpen(false);
					},
					title: `${displayName} · 模型扩展`,
					closeLabel: "关闭",
					className: extras_module_default["modelsModal"],
					contentClassName: extras_module_default["modelsModalContent"],
					children: open && stored !== void 0 ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)(ModelsModal, {
						models,
						api: apiOf(stored),
						writable: stored.writable,
						settingsNs: ns,
						provider: String(props.provider.provider),
						baseURL: baseURLOf(stored),
						operations: props.operations,
						onCommit: commit,
						onSaved: () => {
							setOpen(false);
						}
					}) : null
				})]
			});
		}
		//#endregion
		//#region src/client/index-extension.ts
		/** Cordis service name (distinct from the npm package name). */
		const name = "model-extension-client";
		/**
		* Required services: the slot registry, the Host remotes the seat writes
		* through, and the settings services that resolve the card's namespace view and
		* schema. `configForms` is what yields the describe face (revision + writable).
		*/
		const inject = [
			"slots",
			"remote",
			"remote.settings",
			"remote.credentials",
			"remote.llm",
			"configForms",
			"settingsSchema"
		];
		/**
		* Apply: register the seat on every `llm-pi-ai` provider card.
		* @param ctx - client root context.
		*/
		function apply(ctx) {
			const schema = createSettingsSchemaOperations(ctx.settingsSchema);
			const operations = createModelsOperations(ctx);
			const writer = createProviderWriter(ctx, operations, schema);
			const face = () => ({
				writer,
				schema,
				operations
			});
			ctx.slots.inject("settings.models.provider-card", () => ctx.slots.register({
				name: "settings.models.provider-card",
				key: "llm-pi-ai",
				id: "model-extension-extras",
				inject: face
			}, ProviderExtras));
		}
		//#endregion
		exports.apply = apply;
		exports.inject = inject;
		exports.name = name;
		return module.exports;
	}
});

//# sourceMappingURL=client.js.map