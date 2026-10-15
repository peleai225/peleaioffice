import type { Metadata, Viewport } from 'next'
import { Outfit, Source_Sans_3 } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { SiteHeader } from '@/components/layout/site-header'
import { SiteFooter } from '@/components/layout/site-footer'
import { WhatsAppFloat } from '@/components/site/whatsapp-float'
import { NavTransitionMarker } from '@/components/ds/motion'
import { SiteContentProvider } from '@/components/providers/site-content-provider'
import { OrganizationJsonLd } from '@/components/site/json-ld'
import { getSiteUrl } from '@/lib/site-url'

const siteUrl = getSiteUrl()
const defaultOgImage = '/images/peleai-logo-on-white.png'

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
    default: 'PeleAI - L\'Innovation par l\'Intelligence Artificielle',
    template: '%s | PeleAI',
  },
  description: 'Agence digitale spécialisée dans la création de sites web, marketing digital, branding et solutions IA. Transformez votre entreprise avec PeleAI.',
  keywords: ['agence digitale', 'intelligence artificielle', 'création site web', 'marketing digital', 'branding', 'Afrique', 'PME', 'startup'],
  authors: [{ name: 'PeleAI' }],
  creator: 'PeleAI',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    siteName: 'PeleAI',
    url: '/',
    title: 'PeleAI - L\'Innovation par l\'Intelligence Artificielle',
    description: 'Transformez votre entreprise avec des solutions digitales sur-mesure.',
    images: [
      {
        url: defaultOgImage,
        width: 1200,
        height: 630,
        alt: 'PeleAI',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PeleAI - L\'Innovation par l\'Intelligence Artificielle',
    description: 'Transformez votre entreprise avec des solutions digitales sur-mesure.',
    images: [defaultOgImage],
  },
  robots: {
    index: true,
    follow: true,
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
        <SiteContentProvider>
          <SiteHeader />
          <main id="contenu" className="min-h-screen">
            {children}
          </main>
          <SiteFooter />
          <WhatsAppFloat />
          <NavTransitionMarker />
        </SiteContentProvider>
        <Analytics />
      </body>
    </html>
  )
}
