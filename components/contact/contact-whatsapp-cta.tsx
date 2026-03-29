"use client"

import { MessageCircle } from "lucide-react"
import { useSiteContent } from "@/components/providers/site-content-provider"
import { buildWhatsAppUrl } from "@/lib/site-content"

export function ContactWhatsAppCta() {
  const { content } = useSiteContent()
  const href = buildWhatsAppUrl(
    content.contact.whatsappDigits,
    "Bonjour, j'ai une question concernant vos services."
  )
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 rounded-lg bg-[#25D366] px-6 py-3 text-sm font-medium text-white hover:bg-[#25D366]/90 transition-colors"
    >
      <MessageCircle className="h-5 w-5" />
      Discuter sur WhatsApp
    </a>
  )
}
