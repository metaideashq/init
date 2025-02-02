import { createEnv } from "@t3-oss/env-nextjs"
import * as z from "@this/validation"

export default createEnv({
  client: {
    NEXT_PUBLIC_SENTRY_DSN: z.string(),
  },
  runtimeEnv: {
    NEXT_PUBLIC_SENTRY_DSN: process.env.NEXT_PUBLIC_SENTRY_DSN,
  },
  skipValidation: process.env.SKIP_VALIDATION_OBSERVABILITY_WEB === "true",
})
