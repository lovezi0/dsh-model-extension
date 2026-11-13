/**
 * dsh-model-extension — client entry (v1.4.0-alpha.1).
 *
 * The plugin is an extension of the official Models settings page, not a
 * replacement for it: it registers one seat inside every `llm-pi-ai` provider
 * card (`settings.models.provider-card`, keyed by the card's settings
 * namespace) and adds the two things the official page does not edit —
 * catalog quick-load and the per-model compat switches.
 *
 * Everything else (provider CRUD, API keys, model fields, reasoning levels,
 * retry policy, ordering) belongs to the official page and is left to it.
 */
import type { Context as ClientContext } from '@deepseek-ai/cordis'
// Type-only: pulls the shell's SlotMap merge for the provider-card seat.
import type {} from '@deepseek-ai/dsh-client-ui-settings-models/client'
// Type-only: pulls the settings Context merge (ctx.configForms / ctx.settingsSchema).
import type {} from '@deepseek-ai/dsh-client-ui-settings/client'
// Type-only: pulls the ctx.remote merge.
import type {} from '@deepseek-ai/dsh-api-remotes/client'
import { createModelsOperations } from './vendor/operations.ts'
import { createSettingsSchemaOperations } from './vendor/schema-operations.ts'
import { createProviderWriter } from './extension/write.ts'
import { ProviderExtras } from './extension/ProviderExtras.tsx'
import type { ProviderExtrasProps } from './extension/ProviderExtras.tsx'

/** Cordis service name (distinct from the npm package name). */
export const name = 'model-extension-client'

/**
 * Required services: the slot registry, the Host remotes the seat writes
 * through, and the settings services that resolve the card's namespace view and
 * schema. `configForms` is what yields the describe face (revision + writable).
 */
export const inject = [
  'slots', 'remote', 'remote.settings', 'remote.credentials', 'remote.llm', 'configForms', 'settingsSchema',
]

/**
 * Apply: register the seat on every `llm-pi-ai` provider card.
 * @param ctx - client root context.
 */
export function apply(ctx: ClientContext): void {
  const schema = createSettingsSchemaOperations(ctx.settingsSchema)
  const operations = createModelsOperations(ctx)
  const writer = createProviderWriter(ctx, operations, schema)
  const face = (): Pick<ProviderExtrasProps, 'writer' | 'schema' | 'operations'> => ({ writer, schema, operations })

  // The slot is declared by the official Models section when it registers; the
  // inject waits for that declaration instead of racing it at boot.
  ctx.slots.inject('settings.models.provider-card', () => ctx.slots.register({
    name: 'settings.models.provider-card',
    key: 'llm-pi-ai',
    id: 'model-extension-extras',
    inject: face,
  }, ProviderExtras))
}