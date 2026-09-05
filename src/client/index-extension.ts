/**
 * dsh-model-extension — client entry (v1.0.0).
 *
 * Registers the Models+ settings section rendering the fully plugin-owned
 * models-plus component tree (no host component code is bundled). The store,
 * schema operations, Host operations, dictionaries, and invalidation wiring
 * keep the upstream ui-settings-models contracts @ 0.1.2-rc.1 — the logic
 * modules (store/operations/schema-operations) are still inlined from the
 * host tree at build time, only the presentation is ours.
 */
import type { Context as ClientContext } from '@deepseek-ai/cordis'
// Type-only: pulls the shell's SlotMap merge ('settings.section') into this program.
import type {} from '@deepseek-ai/dsh-client-ui-settings/client'
// Type-only: pulls the locale plugin's Context merge (ctx.locale).
import type {} from '@deepseek-ai/dsh-client-locale/client'
// Type-only: pulls the ui renderer's Context merge (useSnapshot and friends on inject faces).
import type {} from '@deepseek-ai/dsh-client-ui-renderer/client'
// Type-only: pulls the ctx.remote merge and forwarded-event key face.
import type {} from '@deepseek-ai/dsh-api-remotes/client'
import { ModelsPlusSection } from './models-plus/ModelsPlusSection.tsx'
import type { ModelsPlusInjected } from './models-plus/ModelsPlusSection.tsx'
import { ModelsSettingsStore } from './vendor/store.ts'
import { createModelsOperations } from './vendor/operations.ts'
import { createSettingsSchemaOperations } from './vendor/schema-operations.ts'
import { en as extensionEn, zh as extensionZh } from './extension-meta.ts'

/** Cordis service name (distinct from the npm package name). */
export const name = 'model-extension-client'

/** Required services — mirrors the upstream Models section registration @ 0.1.2-rc.1. */
export const inject = [
  'slots', 'locale', 'remote', 'remote.credentials', 'remote.llm', 'remote.settings',
  'settingsScope', 'settingsSchema',
]

/** Refetch the page snapshot only after its first load (upstream helper, inlined). */
function refreshIfLoaded(controller: ModelsSettingsStore): void {
  if (controller.store.getSnapshot().status === 'idle') return
  void controller.load()
}

/**
 * Apply: register the Models+ section once slot/locale services are up.
 * @param ctx - client root context.
 */
export function apply(ctx: ClientContext): void {
  const NS = 'settings.models-extension'
  ctx.effect(() => ctx.locale.register(NS, {
    zh: { ...extensionZh },
    en: { ...extensionEn },
  }), 'dsh-model-extension: copy dictionaries')

  const schema = createSettingsSchemaOperations(ctx.settingsSchema)
  const operations = createModelsOperations(ctx)
  const controller = new ModelsSettingsStore(ctx, schema, ctx.settingsScope.describe())
  const t = ctx.locale.bind(NS) as ModelsPlusInjected['t']
  const injected = (): ModelsPlusInjected => ({
    controller,
    hooks: { snapshot: controller.store },
    operations,
    schema,
    t,
  })

  // Pushed invalidations converge every open surface without polling.
  ctx.effect(() => {
    const refreshModels = (): void => { refreshIfLoaded(controller) }
    return () => [
      ctx.remote.$on('settings/document-updated', () => { refreshModels() }),
      ctx.remote.$on('credentials/reference-updated', refreshModels),
      ctx.remote.$on('llm/adapters-updated', refreshModels),
      ctx.on('connection/reset', refreshModels),
    ]
  }, 'dsh-model-extension: pushed invalidations')

  ctx.slots.inject('settings.section', () => ctx.slots.register({
    name: 'settings.section',
    id: 'models-extension',
    order: 11,
    label: () => t('nav'),
    inject: injected,
  }, ModelsPlusSection))
}
