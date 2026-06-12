import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
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
    icon: CreditCard,
    title: 'Paiement Mobile Money',
    description: 'Orange Money, MTN MoMo, Wave, Moov Money — tous les opérateurs supportés.',
  },
  {
    icon: RefreshCw,
    title: 'Mise à jour temps réel',
    description: 'Modifiez vos plats, prix et disponibilités en quelques clics. Changements instantanés.',
  },
  {
    icon: Palette,
    title: 'Design personnalisé',
    description: 'Un menu qui reflète votre identité visuelle avec vos couleurs, logo et photos.',
  },
  {
    icon: BarChart3,
    title: 'Statistiques & historique',
    description: 'Suivez les plats les plus consultés, les paiements et l\'historique des transactions.',
  },
  {
    icon: Globe,
    title: 'Accessible partout',
    description: 'Compatible tous smartphones, pour restaurants et maquis modernes.',
  },
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
      'Paiement Mobile Money',
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
    <>
      {/* Hero banner */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-primary overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-[15%] right-[5%] h-[400px] w-[400px] rounded-full bg-orange-500/[0.06] blur-[100px]" />
          <div className="absolute bottom-[10%] left-[10%] h-[250px] w-[250px] rounded-full bg-accent/[0.05] blur-[80px]" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Text */}
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-orange-500/10 border border-orange-500/20 px-4 py-2 text-sm text-orange-300 mb-6">
                <UtensilsCrossed className="h-4 w-4" />
                Solution pour la restauration
              </div>

              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl leading-tight">
                Paiement Mobile Money{' '}
                <span className="text-orange-400">en un clic</span>
              </h1>

              <p className="mt-6 text-lg text-white/60 leading-relaxed">
                Scannez. Commandez. Savourez. La solution de digitalisation pour restaurants et maquis en Côte d&apos;Ivoire — menu, commandes, paiements et QR par table.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Button asChild size="lg" className="gap-2 rounded-lg bg-orange-500 hover:bg-orange-600 text-white shadow-lg shadow-orange-500/25">
                  <Link href="https://menupro.ci" target="_blank" rel="noopener noreferrer">
                    Visiter MenuPro.ci
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="gap-2 rounded-lg border-white/20 text-white hover:bg-white/10">
                  <Link href="/contact?demo=menupro">
                    Demander une démo
                  </Link>
                </Button>
              </div>

              <div className="mt-8 flex items-center gap-6 text-sm text-white/50">
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-orange-400" />
                  Installation rapide
                </div>
                <div className="flex items-center gap-2">
                  <CreditCard className="h-4 w-4 text-orange-400" />
                  Sans frais cachés
                </div>
              </div>
            </div>

            {/* Image */}
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl shadow-black/30 border border-white/10">
                <Image
                  src="/images/menupro-showcase.png"
                  alt="MenuPro - Paiement Mobile Money pour restaurants"
                  width={700}
                  height={500}
                  className="w-full h-auto"
                  unoptimized
                  priority
                />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 50" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto" preserveAspectRatio="none">
            <path d="M0 50L1440 50L1440 15C1440 15 1200 0 720 0C240 0 0 15 0 15L0 50Z" fill="var(--background)" />
          </svg>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 lg:py-28 bg-secondary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-14">
            <p className="text-sm font-semibold text-orange-500 uppercase tracking-widest mb-4">
              Fonctionnalités
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-[2.75rem] leading-tight">
              Tout ce dont votre restaurant a besoin
            </h2>
            <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
              Une solution complète pour moderniser l&apos;expérience de vos clients.
            </p>
          </div>

          <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="group bg-card rounded-2xl p-7 shadow-sm shadow-black/[0.04] border border-border/50 hover:shadow-xl hover:shadow-orange-500/[0.06] hover:-translate-y-2 transition-all duration-300"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-50 text-orange-600 mb-5 group-hover:bg-orange-500 group-hover:text-white transition-colors">
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-14">
            <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-4">
              Tarifs
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Tarifs simples et transparents
            </h2>
            <p className="mt-5 text-lg text-muted-foreground">
              Choisissez le plan adapté à votre établissement. Sans engagement.
            </p>
          </div>

          <div className="grid gap-7 lg:grid-cols-3 max-w-5xl mx-auto">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative rounded-2xl border p-7 transition-all duration-300 ${
                  plan.popular
                    ? 'border-accent shadow-xl shadow-accent/10 scale-[1.03] bg-card'
                    : 'border-border/50 bg-card hover:shadow-lg hover:-translate-y-1'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1 rounded-full bg-accent px-4 py-1 text-xs font-semibold text-white shadow-md shadow-accent/30">
                      <Zap className="h-3 w-3" />
                      Populaire
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-lg font-bold text-foreground">{plan.name}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{plan.description}</p>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                    {plan.period && <span className="text-muted-foreground ml-1 text-sm">{plan.period}</span>}
                  </div>
                </div>
                <ul className="space-y-3 mb-7">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-2.5">
                      <Check className="h-4 w-4 text-accent shrink-0" />
                      <span className="text-sm text-foreground/80">{f}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  asChild
                  className={`w-full rounded-lg ${plan.popular ? 'bg-accent hover:bg-accent/90 text-white shadow-md shadow-accent/20' : ''}`}
                  variant={plan.popular ? 'default' : 'outline'}
                >
                  <Link href="/contact?demo=menupro">
                    {plan.name === 'Enterprise' ? 'Nous contacter' : 'Commencer'}
                  </Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 lg:py-28 bg-secondary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-14">
            <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-4">
              Témoignages
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Ils nous font confiance
            </h2>
          </div>

          <div className="grid gap-7 md:grid-cols-2 max-w-4xl mx-auto">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-card rounded-2xl p-7 border border-border/50 shadow-sm">
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-foreground/90 leading-relaxed mb-5 italic">
                  &ldquo;{t.content}&rdquo;
                </p>
                <div className="flex items-center gap-3 pt-4 border-t border-border/50">
                  <div className="h-10 w-10 rounded-full bg-orange-100 flex items-center justify-center text-sm font-bold text-orange-600">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-primary relative overflow-hidden">
        <div className="absolute top-0 left-1/4 h-[300px] w-[300px] rounded-full bg-orange-500/[0.08] blur-[100px]" />
        <div className="absolute bottom-0 right-1/3 h-[250px] w-[250px] rounded-full bg-accent/[0.05] blur-[80px]" />
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Prêt à digitaliser votre restaurant ?
          </h2>
          <p className="mt-5 text-lg text-white/60">
            Rejoignez les restaurants qui ont fait le choix de la modernité avec MenuPro.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button asChild size="lg" className="gap-2 rounded-lg bg-orange-500 hover:bg-orange-600 text-white shadow-lg shadow-orange-500/25">
              <Link href="https://menupro.ci" target="_blank" rel="noopener noreferrer">
                Visiter MenuPro.ci
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="gap-2 rounded-lg border-white/20 text-white hover:bg-white/10">
              <Link href="/contact?demo=menupro">
                Demander une démo
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
