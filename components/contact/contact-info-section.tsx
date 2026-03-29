"use client"

import { Mail, Phone, MapPin, MessageCircle, Clock } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useSiteContent } from "@/components/providers/site-content-provider"
import { buildWhatsAppUrl } from "@/lib/site-content"

export function ContactInfoSection() {
  const { content } = useSiteContent()
  const c = content.contact
  const telHref = `tel:${c.phoneTelHref.replace(/\s/g, "")}`
  const waHref = buildWhatsAppUrl(
    c.whatsappDigits,
    "Bonjour, je souhaite en savoir plus sur vos services."
  )

  const items: {
    icon: typeof Mail
    title: string
    value: string
    href: string | null
    description: string
  }[] = [
    {
      icon: Mail,
      title: "Email",
      value: c.email,
      href: `mailto:${c.email}`,
      description: "Réponse sous 24h",
    },
    {
      icon: Phone,
      title: "Téléphone",
      value: c.phoneDisplay,
      href: telHref,
      description: "Lun-Ven, 9h-18h",
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      value: c.phoneDisplay,
      href: waHref,
      description: "Réponse rapide",
    },
    {
      icon: MapPin,
      title: "Adresse",
      value: c.address,
      href: null,
      description: "Rendez-vous sur demande",
    },
  ]

  return (
    <>
      <h2 className="text-2xl font-bold text-foreground mb-6">Nos coordonnées</h2>

      <div className="space-y-4">
        {items.map((item) => {
          const inner = (
            <>
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <item.icon className="h-5 w-5" />
              </div>
              <div>
                <p className="font-medium text-foreground">{item.title}</p>
                <p className="text-sm text-primary">{item.value}</p>
                <p className="text-xs text-muted-foreground mt-1">{item.description}</p>
              </div>
            </>
          )
          const className =
            "flex items-start gap-4 rounded-lg border border-border/50 bg-background p-4 transition-all hover:border-primary/20 hover:shadow-md"
          if (!item.href) {
            return (
              <div key={item.title} className={className}>
                {inner}
              </div>
            )
          }
          return (
            <a
              key={item.title}
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className={className}
            >
              {inner}
            </a>
          )
        })}
      </div>

      <Card className="mt-8 border-border/50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-lg">
            <Clock className="h-5 w-5 text-primary" />
            Horaires d&apos;ouverture
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Lundi - Vendredi</span>
              <span className="font-medium text-foreground">{c.openingHoursWeekdays}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Samedi</span>
              <span className="font-medium text-foreground">{c.openingHoursSaturday}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Dimanche</span>
              <span className="font-medium text-foreground">{c.openingHoursSunday}</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  )
}
