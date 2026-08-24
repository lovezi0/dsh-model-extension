/**
 * dsh-model-extension — client entry.
 *
 * Registers a "Models+" settings section that renders the official Models
 * page (inlined from the host's ui-settings-models sources at build time,
 * with our .ext touch-point replacements) under its own nav id. The store,
 * schema operations, dictionaries, and invalidation wiring mirror the
 * upstream ui-settings-models client/index.ts exactly — the forked components
 * run unmodified, so the wiring must too.
 */
import type { ClientContext } from '@deepseek-ai/dsh-client-runtime/client'
import type { ConnectionHandle } from '@deepseek-ai/dsh-api-remotes/client'
// Type-only: pulls the shell's SlotMap merge ('settings.section') into this program.
import type {} from '@deepseek-ai/dsh-client-ui-settings/client'
// Type-only: pulls the locale plugin's Context merge (ctx.locale).
import type {} from '@deepseek-ai/dsh-client-locale/client'
// Type-only: pulls the ctx.remote merge and forwarded-event key face.
import type {} from '@deepseek-ai/dsh-api-remotes/client'
import { ModelsSection } from './ModelsSection.ext.tsx'
import type { ModelsSectionInjected } from './ModelsSection.ext.tsx'
import { ModelsSettingsStore } from './store.ts'
import { createSettingsSchemaOperations } from './schema-operations.ts'
import { en as extensionEn, zh as extensionZh } from './extension-meta.ts'

/** Cordis service name (distinct from the npm package name). */
export const name = 'model-extension-client'

/** Required services — mirrors the upstream Models section registration. */
export const inject = ['slots', 'locale', 'connection', 'remote', 'settingsScope', 'settingsSchema']

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
  // Extension copy rides its own namespace; the section declares it via
  // `locale:` so the framework synthesizes the `t` seat for both the official
  // keys (resolved through our merged dictionary) and the extension keys.
  const NS = 'settings.models-extension'
  ctx.effect(() => ctx.locale.register(NS, {
    zh: { ...extensionZh },
    en: { ...extensionEn },
  }), 'dsh-model-extension: copy dictionaries')

  const connection = ctx.get('connection') as ConnectionHandle
  const schema = createSettingsSchemaOperations(ctx.settingsSchema)
  const controller = new ModelsSettingsStore(connection.api, schema, ctx.settingsScope.describe())
  // Registration-time text (the nav label thunk) shares one bound translate.
  const t = ctx.locale.bind(NS) as ModelsSectionInjected['t']
  const injected = (): ModelsSectionInjected => ({
    controller,
    hooks: { snapshot: controller.store },
    api: connection.api,
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
  }, ModelsSection))
}
