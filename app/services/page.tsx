import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import {
  Globe,
  TrendingUp,
  Palette,
  Cpu,
  ArrowRight,
  Check,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
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
    subtitle: 'Un site web qui travaille pour vous !',
    description: 'Des sites web modernes, performants et optimisés pour convertir vos visiteurs en clients. Votre présence en ligne, notre expertise.',
    image: '/images/service-web.png',
    color: 'bg-blue-50 text-blue-600',
    price: '350 000 FCFA',
    priceNote: 'Site complet + hébergement + nom de domaine offert 1 an',
    benefits: [
      'Sites vitrine professionnels',
      'Boutiques e-commerce',
      'Design responsive mobile-first',
      'Optimisation SEO intégrée',
      'Technologies modernes (Next.js, React)',
      'Performance optimale (Core Web Vitals)',
      'Sécurité renforcée',
      'Formation et documentation',
    ],
    highlights: ['Qualité garantie', 'Livraison rapide', 'Support dédié', 'Satisfaction client'],
  },
  {
    id: 'marketing',
    icon: TrendingUp,
    title: 'Marketing Digital',
    subtitle: 'Plus de visibilité, plus de clients, plus de ventes !',
    description: 'Des stratégies de croissance efficaces pour développer votre audience et augmenter vos ventes. Notre objectif : des résultats concrets.',
    image: '/images/service-marketing.png',
    color: 'bg-green-50 text-green-600',
    benefits: [
      'Publicité Meta & Google Ads',
      'SEO & Content Marketing',
      'Analytics & Reporting',
      'Growth Hacking',
      'ROI mesurable et transparent',
      'Ciblage précis de votre audience',
      'Rapports détaillés mensuels',
      'Optimisation continue des campagnes',
    ],
    highlights: ['Audience qualifiée', 'Croissance durable', 'ROI optimisé', 'Transparence & confiance'],
  },
  {
    id: 'branding',
    icon: Palette,
    title: 'Branding & Identité Visuelle',
    subtitle: 'Une marque forte qui parle à vos clients',
    description: 'Une identité de marque forte qui vous démarque de la concurrence. Design, stratégie, créativité et impact.',
    image: '/images/service-branding.png',
    color: 'bg-purple-50 text-purple-600',
    benefits: [
      'Création de logo professionnel',
      'Charte graphique complète',
      'Supports marketing (print & digital)',
      'Direction artistique',
      'Identité unique et mémorable',
      'Cohérence sur tous les supports',
      'Fichiers source fournis',
      'Déclinaisons multiples',
    ],
    highlights: ['Design', 'Stratégie', 'Créativité', 'Impact'],
  },
  {
    id: 'ia',
    icon: Cpu,
    title: 'Solutions Digitales Intelligentes',
    subtitle: 'Automatisez, optimisez, analysez, sécurisez',
    description: 'Automatisez vos processus et gagnez en efficacité avec l\'intelligence artificielle. Des solutions intelligentes pour des résultats concrets.',
    image: '/images/service-ia.png',
    color: 'bg-orange-50 text-orange-600',
    benefits: [
      'Automatisation intelligente',
      'Analyse de données avancée',
      'Intégration sur mesure',
      'Sécurité & fiabilité',
      'Gain de temps significatif',
      'Productivité accrue',
      'Réduction des coûts',
      'Croissance durable',
    ],
    highlights: ['Gain de temps', 'Productivité', 'Réduction des coûts', 'Croissance durable'],
  },
]

export default function ServicesPage() {
  return (
    <>
      {/* Hero banner */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-24 bg-primary overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-[20%] right-[10%] h-[300px] w-[300px] rounded-full bg-accent/[0.08] blur-[80px]" />
          <div className="absolute bottom-[10%] left-[10%] h-[200px] w-[200px] rounded-full bg-accent/[0.05] blur-[60px]" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-4">
              Nos services
            </p>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl leading-tight">
              Des solutions complètes pour votre{' '}
              <span className="text-accent">transformation digitale</span>
            </h1>
            <p className="mt-6 text-lg text-white/60 leading-relaxed">
              Nous accompagnons les PME, startups et entrepreneurs africains dans leur croissance
              avec des services digitaux sur-mesure et adaptés à vos objectifs.
            </p>
            <div className="mt-4 flex items-center justify-center gap-2 text-sm text-white/40">
              <Link href="/" className="hover:text-white/70 transition-colors">Accueil</Link>
              <span>/</span>
              <span className="text-accent">Services</span>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 50" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto" preserveAspectRatio="none">
            <path d="M0 50L1440 50L1440 15C1440 15 1200 0 720 0C240 0 0 15 0 15L0 50Z" fill="var(--background)" />
          </svg>
        </div>
      </section>

      {/* Services detailed */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-28 lg:space-y-36">
            {services.map((service, index) => (
              <div
                key={service.id}
                id={service.id}
                className="scroll-mt-24"
              >
                <div className={`grid gap-12 lg:grid-cols-2 lg:gap-16 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-dense' : ''
                }`}>
                  {/* Image */}
                  <div className={`relative ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-black/10 border border-border/50">
                      <Image
                        src={service.image}
                        alt={service.title}
                        width={700}
                        height={700}
                        className="w-full h-auto"
                        unoptimized
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                    <div className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl ${service.color} mb-5`}>
                      <service.icon className="h-7 w-7" />
                    </div>

                    <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                      {service.title}
                    </h2>

                    <p className="mt-2 text-accent font-semibold">
                      {service.subtitle}
                    </p>

                    <p className="mt-4 text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>

                    {/* Price badge */}
                    {service.price && (
                      <div className="mt-6 inline-flex items-baseline gap-2 bg-accent/5 border border-accent/20 rounded-xl px-5 py-3">
                        <span className="text-xs text-accent font-medium">À partir de</span>
                        <span className="text-2xl font-bold text-accent">{service.price}</span>
                      </div>
                    )}
                    {service.priceNote && (
                      <p className="mt-2 text-xs text-muted-foreground">{service.priceNote}</p>
                    )}

                    {/* Benefits */}
                    <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
                      {service.benefits.map((benefit) => (
                        <li key={benefit} className="flex items-center gap-2.5">
                          <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/10">
                            <Check className="h-3 w-3 text-accent" />
                          </div>
                          <span className="text-sm text-foreground/80">{benefit}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Highlights */}
                    <div className="mt-6 flex flex-wrap gap-2">
                      {service.highlights.map((h) => (
                        <span key={h} className="inline-flex items-center rounded-lg bg-secondary px-3 py-1.5 text-xs font-medium text-muted-foreground">
                          {h}
                        </span>
                      ))}
                    </div>

                    <Button asChild size="lg" className="mt-8 gap-2 rounded-lg bg-accent hover:bg-accent/90 text-white shadow-md shadow-accent/20">
                      <Link href="/contact">
                        Discuter de votre projet
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ProcessSteps />
      <CTASection />
    </>
  )
}
