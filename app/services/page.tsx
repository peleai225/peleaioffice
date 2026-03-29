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
  title: 'Nos Services',
  description: 'Découvrez nos services de création web, marketing digital, branding et solutions IA pour transformer votre entreprise.',
  alternates: { canonical: '/services' },
  openGraph: { url: '/services' },
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

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-24 pb-16 lg:pt-32 lg:pb-20 bg-gradient-to-b from-secondary/50 to-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
              Nos services
            </p>
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl text-balance">
              Des solutions complètes pour votre{' '}
              <span className="text-primary">transformation digitale</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Nous accompagnons les PME, startups et entrepreneurs africains dans leur croissance 
              avec des services digitaux sur-mesure et adaptés à vos objectifs.
            </p>
          </div>
        </div>
      </section>

      {/* Services detailed */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {services.map((service, index) => (
              <div
                key={service.id}
                id={service.id}
                className="scroll-mt-24"
              >
                <div className={`grid gap-12 lg:grid-cols-2 lg:gap-16 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-dense' : ''
                }`}>
                  {/* Content */}
                  <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary mb-6">
                      <service.icon className="h-7 w-7" />
                    </div>
                    
                    <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                      {service.title}
                    </h2>
                    
                    <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>

                    <ul className="mt-8 space-y-3">
                      {service.benefits.map((benefit) => (
                        <li key={benefit} className="flex items-center gap-3">
                          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10">
                            <Check className="h-4 w-4 text-primary" />
                          </div>
                          <span className="text-foreground">{benefit}</span>
                        </li>
                      ))}
                    </ul>

                    <Button asChild size="lg" className="mt-8 gap-2">
                      <Link href="/contact">
                        Discuter de votre projet
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </Button>
                  </div>

                  {/* Features cards */}
                  <div className={`grid grid-cols-2 gap-4 ${
                    index % 2 === 1 ? 'lg:col-start-1' : ''
                  }`}>
                    {service.features.map((feature) => (
                      <Card
                        key={feature.text}
                        className="border-border/50 hover:border-primary/20 hover:shadow-md transition-all duration-300"
                      >
                        <CardHeader className="pb-2">
                          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary text-primary">
                            <feature.icon className="h-5 w-5" />
                          </div>
                        </CardHeader>
                        <CardContent>
                          <CardDescription className="text-foreground font-medium">
                            {feature.text}
                          </CardDescription>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </div>
            ))}
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
