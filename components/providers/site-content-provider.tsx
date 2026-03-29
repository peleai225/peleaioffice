"use client"

import * as React from "react"
import {
  defaultSiteContent,
  loadSiteContentFromStorage,
  mergeIntoSiteContent,
  normalizeSiteContent,
  saveSiteContentToStorage,
  type SiteContent,
} from "@/lib/site-content"

type SiteContentContextValue = {
  content: SiteContent
  setContent: React.Dispatch<React.SetStateAction<SiteContent>>
  updateContent: (patch: Partial<SiteContent>) => void
  resetToDefaults: () => void
  hydrated: boolean
}

const SiteContentContext = React.createContext<SiteContentContextValue | null>(null)

export function SiteContentProvider({ children }: { children: React.ReactNode }) {
  const [content, setContent] = React.useState<SiteContent>(() =>
    normalizeSiteContent(defaultSiteContent)
  )
  const [hydrated, setHydrated] = React.useState(false)

  React.useEffect(() => {
    const stored = loadSiteContentFromStorage()
    if (stored) setContent(stored)
    setHydrated(true)
  }, [])

  const updateContent = React.useCallback((patch: Partial<SiteContent>) => {
    setContent((prev) => mergeIntoSiteContent(prev, patch))
  }, [])

  React.useEffect(() => {
    if (!hydrated) return
    saveSiteContentToStorage(content)
  }, [content, hydrated])

  const resetToDefaults = React.useCallback(() => {
    const fresh = normalizeSiteContent(defaultSiteContent)
    setContent(fresh)
    saveSiteContentToStorage(fresh)
  }, [])

  const value = React.useMemo(
    () => ({
      content,
      setContent,
      updateContent,
      resetToDefaults,
      hydrated,
    }),
    [content, updateContent, resetToDefaults, hydrated]
  )

  return (
    <SiteContentContext.Provider value={value}>{children}</SiteContentContext.Provider>
  )
}

export function useSiteContent() {
  const ctx = React.useContext(SiteContentContext)
  if (!ctx) {
    throw new Error("useSiteContent doit être utilisé dans SiteContentProvider")
  }
  return ctx
}

/** Pour composants optionnels (ex. hors provider en test) */
export function useSiteContentOptional(): SiteContentContextValue | null {
  return React.useContext(SiteContentContext)
}
