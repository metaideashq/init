import { Toaster } from "@this/ui/web/sonner"
import { TooltipProvider } from "@this/ui/web/tooltip"
import { ThemeProvider } from "next-themes"
import type { ReactNode } from "react"

export default function Providers({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <TooltipProvider>
        {children}
        <Toaster />
      </TooltipProvider>
    </ThemeProvider>
  )
}
