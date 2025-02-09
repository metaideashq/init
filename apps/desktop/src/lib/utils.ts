import { isProduction } from "@this/utils/environment"
import { createUrlBuilder } from "@this/utils/url"

import env from "~/lib/env"

export const buildApiUrl = createUrlBuilder(
  env.VITE_API_URL,
  isProduction ? "https" : "http"
)
