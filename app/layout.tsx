import type { Metadata, Viewport } from 'next'
import { Outfit, Source_Sans_3 } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { SiteHeader } from '@/components/layout/site-header'
import { SiteFooter } from '@/components/layout/site-footer'
import { WhatsAppFloat } from '@/components/site/whatsapp-float'
import { NavTransitionMarker } from '@/components/ui/motion'
import { OrganizationJsonLd } from '@/components/site/json-ld'
import { site } from '@/content/site'
import { getSiteUrl } from '@/lib/site-url'

const siteUrl = getSiteUrl()
const defaultTitle = 'PeleAI — Agence digitale et IA à Abidjan, Côte d’Ivoire'

/** Titres : géométrique, en écho au mot « PeleAI » du logo. */
const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
})

/** Texte courant : humaniste, lisible en petite taille sur mobile. */
const sourceSans = Source_Sans_3({
  subsets: ['latin'],
  variable: '--font-source-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: defaultTitle,
    template: '%s | PeleAI',
  },
  description: site.description,
  applicationName: 'PeleAI',
  authors: [{ name: 'Pelecho Junior Koné', url: '/a-propos/pelecho-junior-kone' }],
  creator: 'PeleAI',
  publisher: 'PeleAI',
  alternates: {
    canonical: '/',
  },
  // L'image de partage est générée par app/opengraph-image.tsx (convention de fichier Next.js).
  openGraph: {
    type: 'website',
    locale: 'fr_CI',
    siteName: 'PeleAI',
    url: '/',
    title: defaultTitle,
    description: site.description,
  },
  twitter: {
    card: 'summary_large_image',
    title: defaultTitle,
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  // Codes de vérification Search Console / Bing, posés via les variables d'environnement (jamais en dur).
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION || undefined,
    other: process.env.BING_SITE_VERIFICATION ? { 'msvalidate.01': process.env.BING_SITE_VERIFICATION } : undefined,
  },
  icons: {
    icon: [{ url: '/brand/icone-p.png', type: 'image/png' }],
    apple: [{ url: '/brand/icone-p.png' }],
  },
}

export const viewport: Viewport = {
  themeColor: '#345594',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" className={`${outfit.variable} ${sourceSans.variable}`} data-scroll-behavior="smooth">
      <body suppressHydrationWarning>
        <a
          href="#contenu"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-night focus:px-5 focus:py-3 focus:font-display focus:font-semibold focus:text-white"
        >
          Aller au contenu
        </a>
        <OrganizationJsonLd />
        <SiteHeader />
        <main id="contenu" className="min-h-screen">
          {children}
        </main>
        <SiteFooter />
        <WhatsAppFloat />
        <NavTransitionMarker />
        <Analytics />
      </body>
    </html>
  )
}
