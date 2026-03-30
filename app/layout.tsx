import type { Metadata, Viewport } from 'next'
// Google Fonts unavailable in this environment — using CSS font-family fallback
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { WhatsAppButton } from '@/components/whatsapp-button'
import { SiteContentProvider } from '@/components/providers/site-content-provider'
import { DynamicSiteHead } from '@/components/site/dynamic-site-head'
import { OrganizationJsonLd } from '@/components/site/json-ld'
import { getSiteUrl } from '@/lib/site-url'

const siteUrl = getSiteUrl()
const defaultOgImage = '/images/peleai-logo-on-white.png'

const fontVars = '--font-inter --font-geist-mono'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'PeleAI — Agence Digitale & IA | Abidjan, Côte d\'Ivoire',
    template: '%s | PeleAI',
  },
  description: 'PeleAI, agence digitale #1 à Abidjan : création de sites web, marketing digital, branding et solutions IA sur-mesure pour PME et startups africaines. Résultats garantis.',
  keywords: [
    'agence digitale Abidjan',
    'agence digitale Côte d\'Ivoire',
    'agence digitale Afrique',
    'création site web Abidjan',
    'marketing digital Côte d\'Ivoire',
    'intelligence artificielle Afrique',
    'branding Abidjan',
    'PME Afrique digitale',
    'startup Côte d\'Ivoire',
    'PeleAI',
    'Pelecho Kone',
    'transformation digitale Afrique',
    'agence web Abidjan',
    'SEO Côte d\'Ivoire',
    'automatisation IA',
    'MenuPro',
    'PeleAI360',
  ],
  authors: [{ name: 'Pelecho Junior Kone', url: siteUrl }],
  creator: 'PeleAI',
  publisher: 'PeleAI',
  category: 'technology',
  alternates: {
    canonical: '/',
    languages: { 'fr-CI': '/', 'fr': '/' },
  },
  openGraph: {
    type: 'website',
    locale: 'fr_CI',
    siteName: 'PeleAI',
    url: '/',
    title: 'PeleAI — Agence Digitale & IA | Abidjan',
    description: 'Création web, marketing digital, branding et solutions IA pour PME et startups africaines. Expert en transformation digitale à Abidjan, Côte d\'Ivoire.',
    images: [
      {
        url: defaultOgImage,
        width: 1200,
        height: 630,
        alt: 'PeleAI — Agence Digitale & Intelligence Artificielle Abidjan',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PeleAI — Agence Digitale & IA | Abidjan',
    description: 'Création web, marketing digital, branding et IA pour PME africaines. Abidjan, Côte d\'Ivoire.',
    images: [defaultOgImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-snippet': -1, 'max-image-preview': 'large' },
  },
  icons: {
    icon: [{ url: '/images/peleai-icon-dark.png', type: 'image/png' }],
    apple: [{ url: '/images/peleai-icon-dark.png' }],
  },
  verification: {},
}

export const viewport: Viewport = {
  themeColor: '#C1440E',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr">
      <body className="font-sans antialiased" suppressHydrationWarning>
        <OrganizationJsonLd />
        <SiteContentProvider>
          <DynamicSiteHead />
          <Header />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
          <WhatsAppButton />
        </SiteContentProvider>
        <Analytics />
      </body>
    </html>
  )
}
