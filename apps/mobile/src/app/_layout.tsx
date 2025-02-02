import * as Sentry from "@sentry/react-native"
import { initializeSentry } from "@this/observability/instrumentation/expo"
import { Stack } from "expo-router"
import * as SplashScreen from "expo-splash-screen"
import "react-native-reanimated"

import "~/assets/styles/tailwind.css"

import Providers from "~/components/providers"

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync()

// Initialize Sentry
initializeSentry()

function RootLayout() {
  return (
    <Providers>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
    </Providers>
  )
}

export default Sentry.wrap(RootLayout)
