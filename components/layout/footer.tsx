"use client"

import Link from "next/link"
import Image from "next/image"
import { Mail, Phone, MapPin } from "lucide-react"
import { useSiteContent } from "@/components/providers/site-content-provider"
import { SocialPlatformIcon } from "@/components/site/social-icons"

const navigation = {
  main: [
    { name: "Accueil", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Réalisations", href: "/realisations" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Contact", href: "/contact" },
  ],
  services: [
    { name: "Création de Sites Web", href: "/services#web" },
    { name: "Marketing Digital", href: "/services#marketing" },
    { name: "Branding", href: "/services#branding" },
    { name: "Solutions IA", href: "/services#ia" },
  ],
}

export function Footer() {
  const { content } = useSiteContent()
  const solutionsNav = content.developedSolutions.map((s) => ({
    name: s.name,
    href: s.href,
  }))

  return (
    <footer className="text-zinc-100" style={{ backgroundColor: '#0D1B2E' }}>
      {/* African Kente-strip top border */}
      <div className="flex w-full overflow-hidden h-1">
        {['#C1440E', '#D4891A', '#C1440E', '#1B3A6B', '#D4891A', '#C1440E', '#8B5A00', '#D4891A', '#C1440E', '#1B3A6B'].map(
          (color, i) => (
            <div key={i} className="flex-1 h-full" style={{ backgroundColor: color }} />
          )
        )}
      </div>
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-8 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Image
              src={content.brand.logoOnBlueBg || "/images/peleai-logo-on-blue.png"}
              alt={`${content.brand.siteName} Logo`}
              width={280}
              height={80}
              className="h-16 w-auto max-w-[280px] object-contain object-left"
              unoptimized
            />
            <p className="mt-4 text-sm text-zinc-400 leading-relaxed">
              {content.brand.footerTagline}
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold tracking-wider uppercase text-zinc-100">
              Navigation
            </h3>
            <ul className="mt-4 space-y-3">
              {navigation.main.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-zinc-400 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold tracking-wider uppercase text-zinc-100">
              Solutions
            </h3>
            <ul className="mt-4 space-y-3">
              {solutionsNav.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-zinc-400 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
            <h3 className="text-sm font-semibold tracking-wider uppercase mt-6 text-zinc-100">
              Services
            </h3>
            <ul className="mt-4 space-y-3">
              {navigation.services.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-zinc-400 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold tracking-wider uppercase text-zinc-100">
              Contact
            </h3>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href={`mailto:${content.contact.email}`}
                  className="flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors"
                >
                  <Mail className="h-4 w-4 shrink-0" />
                  {content.contact.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${content.contact.phoneTelHref.replace(/\s/g, "")}`}
                  className="flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors"
                >
                  <Phone className="h-4 w-4 shrink-0" />
                  {content.contact.phoneDisplay}
                </a>
              </li>
              <li>
                <div className="flex items-center gap-2 text-sm text-zinc-400">
                  <MapPin className="h-4 w-4 shrink-0" />
                  {content.contact.address}
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-zinc-500">
              &copy; {new Date().getFullYear()} {content.brand.siteName}. Tous droits réservés.
            </p>
            <div className="flex gap-4">
              {content.social.map((item) => (
                <a
                  key={`${item.platform}-${item.url}`}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-500 hover:text-white transition-colors"
                >
                  <span className="sr-only">{item.platform}</span>
                  <SocialPlatformIcon platform={item.platform} className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
