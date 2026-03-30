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
  title: "MenuPro — Menu Digital & Commandes pour Restaurants | Côte d'Ivoire",
  description:
    "MenuPro by PeleAI : menu digital QR, commandes en ligne, paiements Mobile Money (Orange, MTN MoMo, Wave, Moov), notifications WhatsApp. Solution SaaS pour restaurants en Côte d'Ivoire — menupro.ci.",
  keywords: ["menu digital restaurant", "MenuPro Côte d'Ivoire", "QR code restaurant Abidjan", "Mobile Money restaurant", "commandes en ligne restaurant CI"],
  alternates: { canonical: '/menupro' },
  openGraph: {
    url: '/menupro',
    title: "MenuPro — Menu Digital pour Restaurants en Côte d'Ivoire",
    description: "Menu QR, commandes, paiements Mobile Money pour restaurants ivoiriens.",
  },
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
      <section className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden" style={{ backgroundColor: '#0D1B2E' }}>
        {/* Kente top */}
        <div className="absolute top-0 left-0 right-0 flex overflow-hidden h-1">
          {['#C1440E','#D4891A','#1B3A6B','#C1440E','#D4891A','#8B5A00','#C1440E','#D4891A','#1B3A6B','#C1440E','#8B5A00','#D4891A'].map(
            (c, i) => <div key={i} className="flex-1 h-full" style={{ backgroundColor: c }} />
          )}
        </div>
        {/* Geo texture */}
        <div className="absolute inset-0 opacity-[0.06]">
          <svg className="w-full h-full" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="mp-geo" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
                <polyline points="0,12 10,0 20,12 30,0 40,12 50,0 60,12 70,0 80,12" fill="none" stroke="white" strokeWidth="1.2"/>
                <polygon points="40,38 52,50 40,62 28,50" fill="none" stroke="white" strokeWidth="1"/>
                <circle cx="10" cy="75" r="1.8" fill="white"/><circle cx="50" cy="75" r="1.8" fill="white"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#mp-geo)"/>
          </svg>
        </div>
        <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full blur-3xl opacity-15" style={{ backgroundColor: '#D4891A' }}/>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="h-px w-10 bg-gradient-to-r from-transparent to-[#D4891A]"/>
                <div className="h-2 w-2 rotate-45 bg-[#D4891A]"/>
                <div className="h-px w-10 bg-gradient-to-l from-transparent to-[#D4891A]"/>
              </div>
              <div
                className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm mb-6"
                style={{ backgroundColor: 'rgba(212,137,26,0.15)', border: '1px solid rgba(212,137,26,0.4)', color: '#D4891A' }}
              >
                <UtensilsCrossed className="h-4 w-4" />
                Solution pour la restauration
              </div>

              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl text-balance">
                Votre menu devient{' '}
                <span style={{ color: '#F5A470' }}>digital</span>
              </h1>
              
              <p className="mt-6 text-lg leading-relaxed max-w-xl" style={{ color: 'rgba(255,255,255,0.72)' }}>
                Produit SaaS développé par PeleAI et opéré sur{" "}
                <strong className="text-white">menupro.ci</strong> : menu en ligne, commandes,
                paiements Mobile Money, QR par table et suivi WhatsApp — pensé pour les restaurants
                ivoiriens.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Button
                  asChild size="lg" className="gap-2 text-white font-semibold"
                  style={{ background: 'linear-gradient(135deg, #C1440E, #E05A20)', border: 'none' }}
                >
                  <Link href="https://menupro.ci" target="_blank" rel="noopener noreferrer">
                    Visiter MenuPro.ci
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  asChild size="lg" variant="outline"
                  style={{ borderColor: 'rgba(212,137,26,0.5)', color: '#D4891A', background: 'rgba(212,137,26,0.08)' }}
                >
                  <Link href="/contact?demo=menupro">
                    Demander une démo
                  </Link>
                </Button>
              </div>

              <div className="mt-8 flex items-center gap-6 text-sm" style={{ color: 'rgba(255,255,255,0.55)' }}>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" style={{ color: '#D4891A' }} />
                  Configuration en 24h
                </div>
                <div className="flex items-center gap-2">
                  <CreditCard className="h-4 w-4" style={{ color: '#D4891A' }} />
                  Essai gratuit 14 jours
                </div>
              </div>
            </div>

            {/* Phone Mockup — styled with African palette */}
            <div className="relative">
              <div className="relative mx-auto max-w-sm">
                {/* Phone frame — dark navy */}
                <div className="relative rounded-[3rem] p-3 shadow-2xl" style={{ backgroundColor: '#0A1628' }}>
                  <div className="rounded-[2.5rem] overflow-hidden" style={{ backgroundColor: '#FFFAF4' }}>
                    {/* Phone notch */}
                    <div className="flex justify-center pt-2 pb-4" style={{ backgroundColor: '#C1440E08' }}>
                      <div className="h-6 w-24 rounded-full" style={{ backgroundColor: '#0A162820' }}/>
                    </div>
                    {/* Menu content */}
                    <div className="px-4 pb-6 space-y-4">
                      {/* Kente strip */}
                      <div className="flex overflow-hidden h-1 rounded">
                        {['#C1440E','#D4891A','#1B3A6B','#C1440E','#8B5A00','#D4891A','#C1440E'].map(
                          (c, i) => <div key={i} className="flex-1 h-full" style={{ backgroundColor: c }} />
                        )}
                      </div>
                      {/* Restaurant header */}
                      <div className="text-center py-3">
                        <div className="h-12 w-12 mx-auto rounded-full flex items-center justify-center mb-2" style={{ backgroundColor: '#C1440E15' }}>
                          <UtensilsCrossed className="h-6 w-6" style={{ color: '#C1440E' }}/>
                        </div>
                        <h3 className="font-bold text-sm" style={{ color: '#1a0a00' }}>Le Gourmet Africain</h3>
                        <p className="text-xs" style={{ color: '#6B4423' }}>Menu Digital · menupro.ci</p>
                      </div>
                      {/* Categories */}
                      <div className="flex gap-2 overflow-x-auto pb-2">
                        {['Entrées', 'Plats', 'Desserts', 'Boissons'].map((cat, i) => (
                          <span
                            key={cat}
                            className="shrink-0 px-3 py-1 rounded-full text-xs font-medium"
                            style={i === 0
                              ? { backgroundColor: '#C1440E', color: 'white' }
                              : { backgroundColor: '#F5EDD8', color: '#6B4423' }
                            }
                          >{cat}</span>
                        ))}
                      </div>
                      {/* Menu items */}
                      {[
                        { name: 'Poulet Yassa', price: '4 500 FCFA', desc: 'Poulet mariné aux oignons' },
                        { name: 'Thieboudienne', price: '5 000 FCFA', desc: 'Riz au poisson sénégalais' },
                        { name: 'Attiéké Poisson', price: '3 500 FCFA', desc: 'Couscous de manioc' },
                      ].map((item) => (
                        <div key={item.name} className="flex gap-3 p-2 rounded-lg" style={{ backgroundColor: '#F5EDD8' }}>
                          <div className="h-14 w-14 rounded-lg shrink-0" style={{ backgroundColor: '#C1440E18' }}/>
                          <div className="flex-1 min-w-0">
                            <p className="font-semibold text-sm truncate" style={{ color: '#1a0a00' }}>{item.name}</p>
                            <p className="text-xs truncate" style={{ color: '#6B4423' }}>{item.desc}</p>
                            <p className="text-sm font-bold mt-1" style={{ color: '#C1440E' }}>{item.price}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                {/* QR Code floating */}
                <div className="absolute -right-4 -bottom-4 rounded-xl p-3 shadow-lg" style={{ backgroundColor: 'white', border: '1.5px solid #C1440E30' }}>
                  <QrCode className="h-16 w-16" style={{ color: '#C1440E' }}/>
                </div>
                {/* Scan indicator */}
                <div className="absolute -left-4 top-1/4 rounded-lg p-2 shadow-lg" style={{ backgroundColor: 'white', border: '1.5px solid #D4891A30' }}>
                  <div className="flex items-center gap-2">
                    <Smartphone className="h-4 w-4" style={{ color: '#D4891A' }}/>
                    <span className="text-xs font-semibold" style={{ color: '#1a0a00' }}>Scannez</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Kente bottom */}
        <div className="absolute bottom-0 left-0 right-0 flex overflow-hidden h-1">
          {['#C1440E','#D4891A','#1B3A6B','#C1440E','#8B5A00','#D4891A','#C1440E','#D4891A'].map(
            (c, i) => <div key={i} className="flex-1 h-full" style={{ backgroundColor: c, opacity: 0.7 }} />
          )}
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
      <section className="py-16 lg:py-24" style={{ backgroundColor: '#F5EDD8' }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-1.5 w-1.5 rotate-45 bg-[#C1440E]"/>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-balance" style={{ color: '#1a0a00' }}>
                Tout ce dont vous avez besoin
              </h2>
              <div className="h-1.5 w-1.5 rotate-45 bg-[#C1440E]"/>
            </div>
            <p className="mt-3 text-lg max-w-2xl mx-auto" style={{ color: '#6B4423' }}>
              MenuPro offre toutes les fonctionnalités pour moderniser l&apos;expérience
              de vos clients et simplifier votre gestion.
            </p>
            <div className="flex justify-center gap-px mt-4 mx-auto w-36 h-1.5 overflow-hidden rounded">
              {['#C1440E','#D4891A','#1B3A6B','#C1440E','#8B5A00','#D4891A','#C1440E'].map(
                (c, i) => <div key={i} className="flex-1 h-full" style={{ backgroundColor: c }} />
              )}
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, i) => {
              const accents = ['#C1440E','#D4891A','#1B3A6B','#8B5A00','#C1440E','#D4891A']
              const accent = accents[i % accents.length]
              return (
                <div
                  key={feature.title}
                  className="group rounded-xl p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
                  style={{ backgroundColor: 'white', border: `1.5px solid ${accent}22` }}
                >
                  <div className="h-0.5 rounded mb-5" style={{ backgroundColor: accent, opacity: 0.5 }}/>
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl mb-4" style={{ backgroundColor: `${accent}15`, color: accent }}>
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-bold mb-2" style={{ color: '#1a0a00' }}>{feature.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: '#6B4423' }}>{feature.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 lg:py-24" style={{ backgroundColor: '#FFFAF4' }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-0.5 w-8 rounded" style={{ backgroundColor: '#C1440E' }}/>
                <div className="h-3 w-3 rotate-45" style={{ backgroundColor: '#C1440E' }}/>
              </div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-balance" style={{ color: '#1a0a00' }}>
                Pourquoi passer au menu digital ?
              </h2>
              <p className="mt-4 text-lg" style={{ color: '#6B4423' }}>
                Les restaurants modernes adoptent le digital pour offrir une meilleure
                expérience client tout en réduisant leurs coûts opérationnels.
              </p>
              <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                {benefits.map((benefit) => (
                  <li key={benefit} className="flex items-center gap-3">
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full" style={{ backgroundColor: '#C1440E18' }}>
                      <Check className="h-3.5 w-3.5" style={{ color: '#C1440E' }}/>
                    </div>
                    <span className="text-sm" style={{ color: '#3a1a00' }}>{benefit}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-10">
                <Button
                  asChild size="lg" className="gap-2 text-white font-semibold"
                  style={{ background: 'linear-gradient(135deg, #C1440E, #E05A20)', border: 'none' }}
                >
                  <Link href="/contact?demo=menupro">
                    Commencer maintenant
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
            {/* Stats */}
            <div className="grid grid-cols-2 gap-5">
              {[
                { value: '50+', label: 'Restaurants équipés', accent: '#C1440E' },
                { value: '-70%', label: "Coûts d'impression", accent: '#D4891A' },
                { value: '+30%', label: 'Commandes en plus', accent: '#1B3A6B' },
                { value: '24/7', label: 'Menu accessible', accent: '#8B5A00' },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl p-6 text-center"
                  style={{ backgroundColor: `${stat.accent}0D`, border: `1.5px solid ${stat.accent}25` }}
                >
                  <p className="text-3xl font-bold" style={{ color: stat.accent }}>{stat.value}</p>
                  <p className="mt-2 text-sm" style={{ color: '#6B4423' }}>{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 lg:py-24" style={{ backgroundColor: '#F5EDD8' }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-1.5 w-1.5 rotate-45 bg-[#D4891A]"/>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-balance" style={{ color: '#1a0a00' }}>
                Tarifs simples et transparents
              </h2>
              <div className="h-1.5 w-1.5 rotate-45 bg-[#D4891A]"/>
            </div>
            <p className="mt-3 text-lg" style={{ color: '#6B4423' }}>
              Choisissez le plan adapté à votre établissement. Sans engagement.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {plans.map((plan) => {
              const accent = plan.popular ? '#C1440E' : plan.name === 'Enterprise' ? '#1B3A6B' : '#D4891A'
              return (
                <div
                  key={plan.name}
                  className={`relative rounded-2xl p-6 transition-all ${plan.popular ? 'shadow-2xl scale-105' : 'hover:shadow-lg'}`}
                  style={{ backgroundColor: 'white', border: `${plan.popular ? '2px' : '1.5px'} solid ${accent}${plan.popular ? '60' : '22'}` }}
                >
                  {/* Top kente bar */}
                  <div className="flex overflow-hidden h-1.5 rounded mb-5">
                    {[accent, '#D4891A', '#1B3A6B', accent, '#8B5A00', accent].map(
                      (c, i) => <div key={i} className="flex-1 h-full" style={{ backgroundColor: c }} />
                    )}
                  </div>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <span className="inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-bold text-white" style={{ backgroundColor: accent }}>
                        <Zap className="h-3 w-3" /> Populaire
                      </span>
                    </div>
                  )}
                  <div className="text-center mb-5">
                    <h3 className="text-xl font-bold mb-1" style={{ color: '#1a0a00' }}>{plan.name}</h3>
                    <p className="text-sm mb-4" style={{ color: '#6B4423' }}>{plan.description}</p>
                    <div>
                      <span className="text-4xl font-bold" style={{ color: accent }}>{plan.price}</span>
                      {plan.period && <span className="text-sm ml-1" style={{ color: '#6B4423' }}>{plan.period}</span>}
                    </div>
                  </div>
                  <ul className="space-y-2.5 mb-6">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2">
                        <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full" style={{ backgroundColor: `${accent}18` }}>
                          <Check className="h-3 w-3" style={{ color: accent }}/>
                        </div>
                        <span className="text-sm" style={{ color: '#3a1a00' }}>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    asChild className="w-full font-semibold"
                    style={plan.popular
                      ? { background: `linear-gradient(135deg, ${accent}, ${accent}cc)`, color: 'white', border: 'none' }
                      : { borderColor: `${accent}60`, color: accent, background: 'transparent' }
                    }
                    variant={plan.popular ? 'default' : 'outline'}
                  >
                    <Link href="/contact?demo=menupro">
                      {plan.name === 'Enterprise' ? 'Nous contacter' : 'Commencer'}
                    </Link>
                  </Button>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 lg:py-24" style={{ backgroundColor: '#FFFAF4' }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px flex-1 max-w-[80px]" style={{ background: 'linear-gradient(to right, transparent, #D4891A)' }}/>
              <div className="h-2 w-2 rotate-45" style={{ backgroundColor: '#D4891A' }}/>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl" style={{ color: '#1a0a00' }}>
                Ils nous font confiance
              </h2>
              <div className="h-2 w-2 rotate-45" style={{ backgroundColor: '#D4891A' }}/>
              <div className="h-px flex-1 max-w-[80px]" style={{ background: 'linear-gradient(to left, transparent, #D4891A)' }}/>
            </div>
            {/* Kente underline */}
            <div className="flex justify-center mt-2">
              <div className="flex overflow-hidden h-1 w-24 rounded">
                {['#C1440E','#D4891A','#1B3A6B','#C1440E','#8B5A00','#D4891A'].map((c,i) => (
                  <div key={i} className="flex-1" style={{ backgroundColor: c }}/>
                ))}
              </div>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
            {testimonials.map((testimonial, idx) => {
              const accents = ['#C1440E', '#D4891A', '#1B3A6B', '#8B5A00']
              const accent = accents[idx % accents.length]
              return (
                <div
                  key={testimonial.name}
                  className="rounded-2xl p-6 transition-all hover:shadow-lg"
                  style={{ backgroundColor: 'white', borderLeft: `4px solid ${accent}`, border: `1.5px solid ${accent}20`, borderLeftWidth: '4px', borderLeftColor: accent }}
                >
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="h-4 w-4" style={{ fill: '#D4891A', color: '#D4891A' }} />
                    ))}
                  </div>
                  <p className="italic mb-5 leading-relaxed" style={{ color: '#5a3010' }}>
                    &ldquo;{testimonial.content}&rdquo;
                  </p>
                  <div className="flex items-center gap-3">
                    <div
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-white font-bold text-sm"
                      style={{ backgroundColor: accent }}
                    >
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-semibold" style={{ color: '#1a0a00' }}>{testimonial.name}</p>
                      <p className="text-sm" style={{ color: '#6B4423' }}>{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-16 lg:py-24 overflow-hidden" style={{ backgroundColor: '#B8421A' }}>
        {/* Tribal pattern overlay */}
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="menupro-cta-pattern" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                <circle cx="30" cy="30" r="10" fill="none" stroke="white" strokeWidth="1.5"/>
                <path d="M0,30 L30,0 L60,30 L30,60 Z" fill="none" stroke="white" strokeWidth="1"/>
                <circle cx="0" cy="0" r="3" fill="white" opacity="0.6"/>
                <circle cx="60" cy="0" r="3" fill="white" opacity="0.6"/>
                <circle cx="0" cy="60" r="3" fill="white" opacity="0.6"/>
                <circle cx="60" cy="60" r="3" fill="white" opacity="0.6"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#menupro-cta-pattern)"/>
          </svg>
        </div>
        {/* Gold top border */}
        <div className="absolute top-0 left-0 right-0 flex overflow-hidden h-1.5">
          {['#D4891A','#F5C842','#D4891A','#8B5A00','#D4891A','#F5C842','#D4891A','#8B5A00','#D4891A','#F5C842','#D4891A','#8B5A00'].map((c,i) => (
            <div key={i} className="flex-1" style={{ backgroundColor: c }}/>
          ))}
        </div>
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-3 flex justify-center">
            <svg width="40" height="20" viewBox="0 0 40 20">
              <polygon points="20,0 40,20 0,20" fill="#D4891A" opacity="0.8"/>
            </svg>
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl text-balance">
            Prêt à digitaliser votre menu ?
          </h2>
          <p className="mt-4 text-lg" style={{ color: 'rgba(255,255,255,0.85)' }}>
            Rejoignez les restaurants qui ont déjà fait le choix de la modernité avec MenuPro.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button
              asChild size="lg" className="gap-2 font-semibold text-[#B8421A]"
              style={{ backgroundColor: '#D4891A', border: 'none' }}
            >
              <Link href="https://menupro.ci" target="_blank" rel="noopener noreferrer">
                Visiter MenuPro.ci
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild size="lg" variant="outline"
              className="gap-2 font-semibold"
              style={{ borderColor: 'rgba(255,255,255,0.4)', color: 'white', background: 'rgba(255,255,255,0.1)' }}
            >
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
