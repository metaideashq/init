import type Stripe from "stripe"
import * as z from "#index.ts"

export const StripeProcessWebhookEventPayloadSchema = z.object({
  /**
   * The webhook event payload.
   */
  stripeEvent: z.custom<Stripe.Event>(),
  /**
   * The webhook event ID. Use it to mark the event as processed.
   */
  webhookEventId: z.string(),
})

export const JobSchemaMap = {
  "stripe/process-webhook-event": StripeProcessWebhookEventPayloadSchema,
} as const

export type JobType = keyof typeof JobSchemaMap
export type JobPayload<T extends JobType> = z.infer<(typeof JobSchemaMap)[T]>
