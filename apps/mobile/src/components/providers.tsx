import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { type ReactNode, useState } from "react"

import FontLoader from "~/components/font-loader"
import ThemeProvider from "~/components/theme-provider"
import { links, trpc } from "~/lib/trpc"

const queryClient = new QueryClient()

export default function Providers({ children }: { children: ReactNode }) {
  const [trpcClient] = useState(() => trpc.createClient({ links }))

  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
        <FontLoader>
          <ThemeProvider>{children}</ThemeProvider>
        </FontLoader>
      </QueryClientProvider>
    </trpc.Provider>
  )
}
