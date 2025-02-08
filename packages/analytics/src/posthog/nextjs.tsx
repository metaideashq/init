import { usePathname, useSearchParams } from "next/navigation"
import { PostHogProvider, usePostHog } from "posthog-js/react"
import { type ComponentProps, useEffect, useRef } from "react"

import env from "@this/env/analytics.web"

export function AnalyticsProvider(
  props: Pick<ComponentProps<typeof PostHogProvider>, "children">
) {
  return (
    <PostHogProvider
      {...props}
      apiKey={env.NEXT_PUBLIC_POSTHOG_API_KEY}
      options={{
        api_host: env.NEXT_PUBLIC_POSTHOG_HOST,
        person_profiles: "identified_only",
        capture_pageview: false,
        capture_pageleave: true,
      }}
    />
  )
}

export function TrackPageview() {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const posthog = usePostHog()
  const prevPathRef = useRef<string | null>(null)

  useEffect(() => {
    if (!posthog || !pathname) {
      return
    }

    const url = new URL(pathname, window.location.origin)
    url.search = searchParams.toString()
    const currentPath = url.toString()

    if (currentPath === prevPathRef.current) {
      return
    }

    posthog.capture("$pageview", {
      $current_url: currentPath,
    })

    prevPathRef.current = currentPath
  }, [pathname, searchParams, posthog])

  return null
}

export function IdentifyUser({
  user,
}: {
  user: { id: string; email: string }
}) {
  const posthog = usePostHog()

  useEffect(() => {
    posthog.identify(user.id.toString(), {
      email: user.email,
    })
  }, [posthog, user.id, user.email])

  return null
}

export { usePostHog as useAnalytics } from "posthog-js/react"
