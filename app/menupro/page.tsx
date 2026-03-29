import { Metadata } from 'next'
import Link from 'next/link'
import { 
  UtensilsCrossed, 
  QrCode, 
  Smartphone, 
  Globe, 
  Palette, 
  BarChart3, 
  Clock, 
  CreditCard,
  ArrowRight,
  Check,
  Star,
  Zap,
  RefreshCw,
  Languages
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'MenuPro - Menu Digital pour Restaurants | PeleAI',
  description:
    "MenuPro est la solution SaaS déployée sur menupro.ci : commandes en ligne, paiements Mobile Money (Orange, MTN, Wave, Moov), QR par table et notifications WhatsApp pour les restaurants en Côte d'Ivoire.",
  alternates: { canonical: '/menupro' },
  openGraph: { url: '/menupro' },
}

const features = [
  {
    icon: QrCode,
    title: 'QR Code Intelligent',
    description: 'Vos clients scannent et accèdent instantanément à votre menu depuis leur smartphone.',
  },
  {
    icon: RefreshCw,
    title: 'Mise à jour en temps réel',
    description: 'Modifiez vos plats, prix et disponibilités en quelques clics. Les changements sont instantanés.',
  },
  {
    icon: Palette,
    title: 'Design personnalisé',
    description: 'Un menu qui reflète votre identité visuelle avec vos couleurs, logo et photos.',
  },
  {
    icon: Languages,
    title: 'Multi-langues',
    description: 'Proposez votre menu en français, anglais et autres langues pour accueillir tous vos clients.',
  },
  {
    icon: BarChart3,
    title: 'Statistiques détaillées',
    description: 'Suivez les plats les plus consultés et optimisez votre offre.',
  },
  {
    icon: Globe,
    title: 'Accessible partout',
    description: 'Votre menu est disponible 24/7 sur le web, même hors de votre établissement.',
  },
]

const benefits = [
  'Réduction des coûts d\'impression',
  'Hygiène renforcée (sans contact)',
  'Expérience client moderne',
  'Mise à jour des prix instantanée',
  'Photos haute qualité des plats',
  'Aucune application à télécharger',
]

const plans = [
  {
    name: 'Starter',
    price: '15 000',
    period: 'FCFA/mois',
    description: 'Idéal pour les petits établissements',
    features: [
      'Jusqu\'à 30 plats',
      '1 QR Code',
      'Design basique',
      '1 langue',
      'Support email',
    ],
    popular: false,
  },
  {
    name: 'Pro',
    price: '35 000',
    period: 'FCFA/mois',
    description: 'Pour les restaurants en croissance',
    features: [
      'Plats illimités',
      'QR Codes illimités',
      'Design personnalisé',
      '3 langues',
      'Statistiques avancées',
      'Support prioritaire',
    ],
    popular: true,
  },
  {
    name: 'Enterprise',
    price: 'Sur mesure',
    period: '',
    description: 'Pour les chaînes et franchises',
    features: [
      'Multi-établissements',
      'API personnalisée',
      'Intégrations POS',
      'Langues illimitées',
      'Account manager dédié',
      'SLA garanti',
    ],
    popular: false,
  },
]

const communicationGallery: { src: string; alt: string }[] = [
  {
    src: '/realisations/logos/menupro-official.png',
    alt: 'MenuPro — identité visuelle officielle (menupro.ci)',
  },
]

const testimonials = [
  {
    name: 'Aminata Diallo',
    role: 'Gérante, Le Palmier Doré',
    content: 'Depuis que nous utilisons MenuPro, nos clients sont impressionnés. Plus besoin de réimprimer les menus à chaque changement de prix !',
    rating: 5,
  },
  {
    name: 'Jean-Pierre Kouassi',
    role: 'Chef propriétaire, Saveurs d\'Afrique',
    content: 'La possibilité d\'ajouter des photos de qualité a augmenté les commandes de nos plats signature de 40%.',
    rating: 5,
  },
]

export default function MenuProPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div className="animate-fade-in">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm text-primary mb-6">
                <UtensilsCrossed className="h-4 w-4" />
                Solution pour la restauration
              </div>
              
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl text-balance">
                Votre menu devient{' '}
                <span className="text-primary">digital</span>
              </h1>
              
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-xl">
                Produit SaaS développé par PeleAI et opéré sur{" "}
                <strong className="text-foreground">menupro.ci</strong> : menu en ligne, commandes,
                paiements Mobile Money, QR par table et suivi WhatsApp — pensé pour les restaurants
                ivoiriens.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Button asChild size="lg" className="gap-2">
                  <Link href="https://menupro.ci" target="_blank" rel="noopener noreferrer">
                    Visiter MenuPro.ci
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/contact?demo=menupro">
                    Demander une démo
                  </Link>
                </Button>
              </div>

              <div className="mt-8 flex items-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-primary" />
                  Configuration en 24h
                </div>
                <div className="flex items-center gap-2">
                  <CreditCard className="h-4 w-4 text-primary" />
                  Essai gratuit 14 jours
                </div>
              </div>
            </div>

            {/* Phone Mockup with Menu */}
            <div className="relative animate-fade-in animation-delay-200">
              <div className="relative mx-auto max-w-sm">
                {/* Phone frame */}
                <div className="relative rounded-[3rem] bg-foreground p-3 shadow-2xl">
                  <div className="rounded-[2.5rem] bg-background overflow-hidden">
                    {/* Phone notch */}
                    <div className="flex justify-center pt-2 pb-4 bg-primary/5">
                      <div className="h-6 w-24 rounded-full bg-foreground/10" />
                    </div>
                    
                    {/* Menu content */}
                    <div className="px-4 pb-6 space-y-4">
                      {/* Restaurant header */}
                      <div className="text-center py-4">
                        <div className="h-12 w-12 mx-auto rounded-full bg-primary/20 flex items-center justify-center mb-2">
                          <UtensilsCrossed className="h-6 w-6 text-primary" />
                        </div>
                        <h3 className="font-semibold text-foreground">Le Gourmet Africain</h3>
                        <p className="text-xs text-muted-foreground">Menu Digital</p>
                      </div>

                      {/* Categories */}
                      <div className="flex gap-2 overflow-x-auto pb-2">
                        {['Entrées', 'Plats', 'Desserts', 'Boissons'].map((cat, i) => (
                          <span 
                            key={cat} 
                            className={`shrink-0 px-3 py-1 rounded-full text-xs font-medium ${
                              i === 0 ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'
                            }`}
                          >
                            {cat}
                          </span>
                        ))}
                      </div>

                      {/* Menu items */}
                      {[
                        { name: 'Poulet Yassa', price: '4 500 FCFA', desc: 'Poulet mariné aux oignons' },
                        { name: 'Thieboudienne', price: '5 000 FCFA', desc: 'Riz au poisson sénégalais' },
                        { name: 'Attiéké Poisson', price: '3 500 FCFA', desc: 'Couscous de manioc' },
                      ].map((item) => (
                        <div key={item.name} className="flex gap-3 p-2 rounded-lg bg-muted/50">
                          <div className="h-14 w-14 rounded-lg bg-primary/10 shrink-0" />
                          <div className="flex-1 min-w-0">
                            <p className="font-medium text-sm text-foreground truncate">{item.name}</p>
                            <p className="text-xs text-muted-foreground truncate">{item.desc}</p>
                            <p className="text-sm font-semibold text-primary mt-1">{item.price}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* QR Code floating */}
                <div className="absolute -right-4 -bottom-4 rounded-xl bg-background p-3 shadow-lg border border-border">
                  <QrCode className="h-16 w-16 text-foreground" />
                </div>

                {/* Scan indicator */}
                <div className="absolute -left-4 top-1/4 rounded-lg bg-background p-2 shadow-lg border border-border">
                  <div className="flex items-center gap-2">
                    <Smartphone className="h-4 w-4 text-primary" />
                    <span className="text-xs font-medium">Scannez</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-border/60 bg-muted/15 py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-10 max-w-2xl text-center">
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Communication & visuels
            </h2>
            <p className="mt-2 text-muted-foreground">
              Extraits de campagnes MenuPro — menupro.ci · 05 01 86 26 40
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {communicationGallery.map((item) => (
              <div
                key={item.src}
                className="overflow-hidden rounded-xl border border-border/50 bg-background shadow-sm"
              >
                {/* eslint-disable-next-line @next/next/no-img-element -- visuels marketing locaux */}
                <img src={item.src} alt={item.alt} className="h-auto w-full object-cover" loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
              Tout ce dont vous avez besoin
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              MenuPro offre toutes les fonctionnalités pour moderniser l&apos;expérience 
              de vos clients et simplifier votre gestion.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <Card 
                key={feature.title} 
                className="group hover:shadow-lg transition-all duration-300 animate-fade-in border-border/50"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
                Pourquoi passer au menu digital ?
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Les restaurants modernes adoptent le digital pour offrir une meilleure 
                expérience client tout en réduisant leurs coûts opérationnels.
              </p>

              <ul className="mt-8 grid gap-4 sm:grid-cols-2">
                {benefits.map((benefit) => (
                  <li key={benefit} className="flex items-center gap-3">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Check className="h-4 w-4" />
                    </div>
                    <span className="text-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-10">
                <Button asChild size="lg" className="gap-2">
                  <Link href="/contact?demo=menupro">
                    Commencer maintenant
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              {[
                { value: '50+', label: 'Restaurants équipés' },
                { value: '-70%', label: 'Coûts d\'impression' },
                { value: '30%', label: 'Commandes en plus' },
                { value: '24/7', label: 'Menu accessible' },
              ].map((stat) => (
                <div key={stat.label} className="rounded-2xl bg-muted/50 p-6 text-center">
                  <p className="text-3xl font-bold text-primary">{stat.value}</p>
                  <p className="mt-2 text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
              Tarifs simples et transparents
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Choisissez le plan adapté à votre établissement. Sans engagement.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {plans.map((plan) => (
              <Card 
                key={plan.name}
                className={`relative ${plan.popular ? 'border-primary shadow-lg scale-105' : 'border-border/50'}`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1 rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                      <Zap className="h-3 w-3" />
                      Populaire
                    </span>
                  </div>
                )}
                <CardHeader className="text-center">
                  <CardTitle>{plan.name}</CardTitle>
                  <CardDescription>{plan.description}</CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                    {plan.period && (
                      <span className="text-muted-foreground ml-1">{plan.period}</span>
                    )}
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    asChild 
                    className="w-full" 
                    variant={plan.popular ? 'default' : 'outline'}
                  >
                    <Link href="/contact?demo=menupro">
                      {plan.name === 'Enterprise' ? 'Nous contacter' : 'Commencer'}
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Ils nous font confiance
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.name} className="border-border/50">
                <CardContent className="pt-6">
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic mb-4">
                    &ldquo;{testimonial.content}&rdquo;
                  </p>
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-primary">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl text-balance">
            Prêt à digitaliser votre menu ?
          </h2>
          <p className="mt-4 text-lg text-primary-foreground/80">
            Rejoignez les restaurants qui ont déjà fait le choix de la modernité avec MenuPro.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button asChild size="lg" variant="secondary" className="gap-2">
              <Link href="https://menupro.ci" target="_blank" rel="noopener noreferrer">
                Visiter MenuPro.ci
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10">
              <Link href="/contact?demo=menupro">
                Demander une démo
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
