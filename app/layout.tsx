import type { Metadata, Viewport } from 'next'
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
    icon: [{ url: '/images/peleai-icon-dark.png', type: 'image/png' }],
  },
}

export const viewport: Viewport = {
  themeColor: '#2E5A9C',
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
