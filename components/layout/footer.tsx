"use client"

import Link from "next/link"
import Image from "next/image"
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react"
import { useSiteContent } from "@/components/providers/site-content-provider"
import { SocialPlatformIcon } from "@/components/site/social-icons"
import { Button } from "@/components/ui/button"

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
    <footer className="bg-primary text-white">
      {/* CTA banner */}
      <div className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-bold text-white">Prêt à lancer votre projet ?</h3>
              <p className="text-white/60 text-sm mt-1">Discutons de vos objectifs et trouvons la meilleure solution.</p>
            </div>
            <Button asChild className="rounded-lg bg-accent hover:bg-accent/90 text-white shadow-lg shadow-accent/25 gap-2">
              <Link href="/contact">
                Nous contacter
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-12">
          {/* Brand */}
          <div className="lg:col-span-4">
            <Image
              src={content.brand.logoOnBlueBg || "/images/peleai-logo-on-blue.png"}
              alt={`${content.brand.siteName} Logo`}
              width={200}
              height={56}
              className="h-10 w-auto max-w-[200px] object-contain object-left"
              unoptimized
            />
            <p className="mt-5 text-sm text-white/50 leading-relaxed max-w-sm">
              {content.brand.footerTagline}
            </p>
            <div className="flex gap-3 mt-6">
              {content.social.map((item) => (
                <a
                  key={`${item.platform}-${item.url}`}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/[0.06] text-white/60 hover:bg-accent hover:text-white transition-all duration-300"
                >
                  <span className="sr-only">{item.platform}</span>
                  <SocialPlatformIcon platform={item.platform} className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h3 className="text-sm font-semibold uppercase tracking-widest text-white/40 mb-5">
              Navigation
            </h3>
            <ul className="space-y-3">
              {navigation.main.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/60 hover:text-accent transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions & Services */}
          <div className="lg:col-span-3">
            <h3 className="text-sm font-semibold uppercase tracking-widest text-white/40 mb-5">
              Solutions
            </h3>
            <ul className="space-y-3">
              {solutionsNav.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/60 hover:text-accent transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-white/40 mt-8 mb-5">
              Services
            </h3>
            <ul className="space-y-3">
              {navigation.services.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/60 hover:text-accent transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <h3 className="text-sm font-semibold uppercase tracking-widest text-white/40 mb-5">
              Contact
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href={`mailto:${content.contact.email}`}
                  className="flex items-center gap-3 text-sm text-white/60 hover:text-accent transition-colors"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/[0.06]">
                    <Mail className="h-4 w-4" />
                  </div>
                  {content.contact.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${content.contact.phoneTelHref.replace(/\s/g, "")}`}
                  className="flex items-center gap-3 text-sm text-white/60 hover:text-accent transition-colors"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/[0.06]">
                    <Phone className="h-4 w-4" />
                  </div>
                  {content.contact.phoneDisplay}
                </a>
              </li>
              <li>
                <div className="flex items-center gap-3 text-sm text-white/60">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/[0.06]">
                    <MapPin className="h-4 w-4" />
                  </div>
                  {content.contact.address}
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-8 border-t border-white/10">
          <p className="text-sm text-white/30 text-center">
            &copy; {new Date().getFullYear()} {content.brand.siteName}. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  )
}
