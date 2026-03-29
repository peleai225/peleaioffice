"use client"

import * as React from "react"
import { useSiteContent } from "@/components/providers/site-content-provider"

/** Met à jour titre document et favicon selon le contenu éditable (après hydratation). */
export function DynamicSiteHead() {
  const { content } = useSiteContent()

  React.useEffect(() => {
    if (content.brand.defaultTitle) {
      document.title = content.brand.defaultTitle
    }
    let link = document.querySelector("link[rel='icon']") as HTMLLinkElement | null
    if (!link) {
      link = document.createElement("link")
      link.rel = "icon"
      document.head.appendChild(link)
    }
    link.href = content.brand.faviconUrl || "/images/peleai-icon-dark.png"
  }, [content.brand.defaultTitle, content.brand.faviconUrl])

  return null
}
