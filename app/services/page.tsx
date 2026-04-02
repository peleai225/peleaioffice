import type { Metadata } from 'next'
import Link from 'next/link'
import {
  Globe,
  TrendingUp,
  Palette,
  Cpu,
  ArrowRight,
  Check,
  ShoppingCart,
  Layout,
  Smartphone,
  Search,
  Target,
  BarChart3,
  PenTool,
  FileText,
  Image as ImageIcon,
  Bot,
  Workflow,
  Plug,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { ProcessSteps } from '@/components/sections/process-steps'
import { CTASection } from '@/components/sections/cta-section'

export const metadata: Metadata = {
  title: 'Nos Services — Web, Marketing, Branding & IA',
  description: 'Création de sites web, marketing digital, branding et solutions IA à Abidjan. PeleAI accompagne les PME et startups africaines dans leur transformation digitale. Résultats mesurables.',
  keywords: ['création site web Abidjan', 'marketing digital Côte d\'Ivoire', 'branding Afrique', 'solutions IA PME', 'agence digitale Abidjan'],
  alternates: { canonical: '/services' },
  openGraph: {
    url: '/services',
    title: 'Services PeleAI — Web, Marketing, Branding & IA | Abidjan',
    description: 'Création web, marketing digital, branding et IA pour PME africaines à Abidjan.',
  },
}

const services = [
  {
    id: 'web',
    icon: Globe,
    title: 'Création de Sites Web',
    description: 'Des sites web modernes, performants et optimisés pour convertir vos visiteurs en clients.',
    features: [
      { icon: Layout, text: 'Sites vitrine professionnels' },
      { icon: ShoppingCart, text: 'Boutiques e-commerce' },
      { icon: Smartphone, text: 'Design responsive mobile-first' },
      { icon: Search, text: 'Optimisation SEO intégrée' },
    ],
    benefits: [
      'Technologies modernes (Next.js, React)',
      'Performance optimale (Core Web Vitals)',
      'Sécurité renforcée',
      'Formation et documentation',
    ],
  },
  {
    id: 'marketing',
    icon: TrendingUp,
    title: 'Marketing Digital',
    description: 'Des stratégies de croissance efficaces pour développer votre audience et augmenter vos ventes.',
    features: [
      { icon: Target, text: 'Publicité Meta & Google Ads' },
      { icon: Search, text: 'SEO & Content Marketing' },
      { icon: BarChart3, text: 'Analytics & Reporting' },
      { icon: TrendingUp, text: 'Growth Hacking' },
    ],
    benefits: [
      'ROI mesurable et transparent',
      'Ciblage précis de votre audience',
      'Rapports détaillés mensuels',
      'Optimisation continue des campagnes',
    ],
  },
  {
    id: 'branding',
    icon: Palette,
    title: 'Branding & Identité Visuelle',
    description: 'Une identité de marque forte qui vous démarque de la concurrence et parle à vos clients.',
    features: [
      { icon: PenTool, text: 'Création de logo' },
      { icon: FileText, text: 'Charte graphique complète' },
      { icon: ImageIcon, text: 'Supports marketing' },
      { icon: Palette, text: 'Direction artistique' },
    ],
    benefits: [
      'Identité unique et mémorable',
      'Cohérence sur tous les supports',
      'Fichiers source fournis',
      'Déclinaisons multiples',
    ],
  },
  {
    id: 'ia',
    icon: Cpu,
    title: 'Solutions Digitales Intelligentes',
    description: 'Automatisez vos processus et gagnez en efficacité avec l\'intelligence artificielle.',
    features: [
      { icon: Bot, text: 'Chatbots & assistants IA' },
      { icon: Workflow, text: 'Automatisation des processus' },
      { icon: BarChart3, text: 'Analyse prédictive' },
      { icon: Plug, text: 'Intégrations API' },
    ],
    benefits: [
      'Gain de temps significatif',
      'Réduction des erreurs humaines',
      'Disponibilité 24/7',
      'Scalabilité illimitée',
    ],
  },
]

/* ─── African service accent colors ─────────────────────────────────────── */
const SERVICE_ACCENTS = ['#C1440E', '#D4891A', '#1B3A6B', '#8B5A00']

export default function ServicesPage() {
  return (
    <>
      {/* Hero — dark navy + African pattern (cohérent avec homepage) */}
      <section
        className="relative overflow-hidden pt-28 pb-16 lg:pt-36 lg:pb-20"
        style={{ backgroundColor: '#0D1B2E' }}
      >
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: 'rgba(255,255,255,0.7)' }}>
              Nos services
            </p>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl text-balance">
              Des solutions complètes pour votre{' '}
              <span style={{ color: '#D4891A' }}>transformation digitale</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed" style={{ color: 'rgba(255,255,255,0.72)' }}>
              Nous accompagnons les PME, startups et entrepreneurs africains dans leur croissance
              avec des services digitaux sur-mesure et adaptés à vos objectifs.
            </p>
            {/* Service anchor links */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              {services.map((s, i) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  className="inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 text-sm font-medium transition-all hover:scale-105"
                  style={{ backgroundColor: 'rgba(46,90,156,0.15)', border: '1px solid rgba(46,90,156,0.3)', color: 'white' }}
                >
                  <s.icon className="h-3.5 w-3.5" />
                  {s.title.split(' ')[0]}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services detailed */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {services.map((service, index) => {
              const accent = SERVICE_ACCENTS[index]
              return (
                <div
                  key={service.id}
                  id={service.id}
                  className="scroll-mt-24"
                >
                  <div className="w-12 h-0.5 mb-10" style={{ backgroundColor: '#2E5A9C' }} />

                  <div className={`grid gap-12 lg:grid-cols-2 lg:gap-16 items-center ${index % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}>
                    {/* Content */}
                    <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                      <div
                        className="flex h-14 w-14 items-center justify-center rounded-xl mb-6 relative"
                        style={{ backgroundColor: `${accent}18` }}
                      >
                        <div className="absolute inset-0 rotate-45 rounded-xl opacity-10" style={{ border: `2px solid ${accent}` }} />
                        <service.icon className="h-7 w-7 relative" style={{ color: accent }} />
                      </div>

                      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl" style={{ color: '#0D1B2E' }}>
                        {service.title}
                      </h2>

                      <p className="mt-4 text-lg leading-relaxed" style={{ color: '#64748B' }}>
                        {service.description}
                      </p>

                      <ul className="mt-8 space-y-3">
                        {service.benefits.map((benefit) => (
                          <li key={benefit} className="flex items-center gap-3">
                            <div
                              className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full"
                              style={{ backgroundColor: `${accent}20` }}
                            >
                              <Check className="h-3.5 w-3.5" style={{ color: accent }} />
                            </div>
                            <span style={{ color: '#374151' }}>{benefit}</span>
                          </li>
                        ))}
                      </ul>

                      <Button
                        asChild
                        size="lg"
                        className="mt-8 gap-2 text-white font-semibold"
                        style={{ background: `linear-gradient(135deg, ${accent}, ${accent}cc)`, border: 'none' }}
                      >
                        <Link href="/contact">
                          Discuter de votre projet
                          <ArrowRight className="h-4 w-4" />
                        </Link>
                      </Button>
                    </div>

                    {/* Visual + Features */}
                    <div className={`space-y-4 ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                      {/*
                        TODO: Ajouter une vraie photo de votre travail / équipe ici.
                        Exemple: <img src="/images/service-web.jpg" alt="..." className="w-full h-48 object-cover rounded-xl mb-4" />
                        Photos recommandées: captures de projets livrés, votre équipe au travail, vos clients.
                      */}
                      <div className="grid grid-cols-2 gap-4">
                        {service.features.map((feature) => (
                          <div
                            key={feature.text}
                            className="rounded-xl p-5 border transition-all duration-300 hover:shadow-md hover:-translate-y-0.5"
                            style={{ backgroundColor: 'white', borderColor: `${accent}22`, borderWidth: '1.5px' }}
                          >
                            <div
                              className="flex h-10 w-10 items-center justify-center rounded-lg mb-3"
                              style={{ backgroundColor: `${accent}15`, color: accent }}
                            >
                              <feature.icon className="h-5 w-5" />
                            </div>
                            <p className="font-semibold text-sm" style={{ color: '#0D1B2E' }}>
                              {feature.text}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Process */}
      <ProcessSteps />

      {/* CTA */}
      <CTASection />
    </>
  )
}
