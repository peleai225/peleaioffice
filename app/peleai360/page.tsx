import type { Metadata } from 'next'
import Link from 'next/link'
import {
  Users,
  BarChart3,
  MessageSquare,
  FileText,
  Settings,
  ArrowRight,
  Check,
  Zap,
  Clock,
  TrendingUp,
  Shield,
  Play,
  ShoppingCart,
  Monitor,
  Package,
  Wallet,
  Star,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { DemoForm } from '@/components/forms/demo-form'

export const metadata: Metadata = {
  title: "PeleAI360 — CRM & Gestion d'Entreprise pour PME | Côte d'Ivoire",
  description:
    "PeleAI360 : assistant digital tout-en-un pour les PME ivoiriennes. CRM, facturation, automatisation marketing, reporting. Simplifié pour l'Afrique.",
  keywords: ["CRM Côte d'Ivoire", "gestion PME Abidjan", "PeleAI360", "logiciel gestion entreprise CI", "automatisation marketing Afrique"],
  alternates: { canonical: '/peleai360' },
  openGraph: {
    url: '/peleai360',
    title: "PeleAI360 — CRM & Gestion d'Entreprise pour PME africaines",
    description: "CRM, facturation et automatisation pour PME ivoiriennes. Simplifiez, automatisez, croissez.",
  },
}

const featureCategories = [
  {
    icon: BarChart3,
    title: 'Tableau de bord & Pilotage',
    accent: '#2E5A9C',
    features: [
      'Vue synthétique des activités (ventes, stock, caisse, commandes)',
      'Statistiques et graphiques en temps réel',
      'Alertes et notifications personnalisables',
    ],
  },
  {
    icon: ShoppingCart,
    title: 'E-commerce & Catalogue',
    accent: '#C1440E',
    features: [
      'Gestion des produits (catégories, variantes, prix, stock)',
      'Boutique en ligne intégrée avec panier',
      'Promotions, réductions et codes promo',
    ],
  },
  {
    icon: Monitor,
    title: 'Point de Vente (POS)',
    accent: '#1B3A6B',
    features: [
      'Interface caisse tactile optimisée',
      'Paiements (espèces, Mobile Money, carte)',
      'Tickets de caisse et reçus numériques',
    ],
  },
  {
    icon: Package,
    title: 'Commandes & Logistique',
    accent: '#D4891A',
    features: [
      'Gestion des commandes (en ligne et en boutique)',
      'Suivi des livraisons et des transporteurs',
      'Gestion des retours et litiges',
      'Multi-entrepôts et mouvements de stock',
    ],
  },
  {
    icon: Wallet,
    title: 'Finance & Comptabilité',
    accent: '#8B5A00',
    features: [
      'Facturation, devis et avoirs',
      'Suivi des encaissements et dépenses',
      'Rapports financiers (CA, marges, TVA)',
    ],
  },
  {
    icon: Users,
    title: 'Marketing & CRM',
    accent: '#C1440E',
    features: [
      'Fiche client complète (historique, notes)',
      'Campagnes SMS/Email automatisées',
      'Programme de fidélité et points de récompense',
      'Segmentation et filtres avancés',
    ],
  },
  {
    icon: Settings,
    title: 'Administration & Paramétrage',
    accent: '#2E5A9C',
    features: [
      'Gestion des utilisateurs et des droits d\'accès',
      'Multi-boutiques / Multi-points de vente',
      'Intégrations API (WhatsApp, Mobile Money, livraison)',
    ],
  },
]

const benefits = [
  { icon: Clock,      title: '10h gagnées par semaine', description: 'Automatisez les tâches répétitives et concentrez-vous sur votre croissance.', accent: '#C1440E' },
  { icon: TrendingUp, title: '+45% de conversion',      description: 'Améliorez votre suivi client et ne laissez plus aucune opportunité vous échapper.', accent: '#D4891A' },
  { icon: Shield,     title: 'Données sécurisées',      description: 'Vos informations sont protégées avec les meilleurs standards de sécurité.', accent: '#1B3A6B' },
]

const howItWorks = [
  { step: '01', title: 'Inscription',    description: "Créez votre compte en quelques minutes et importez vos données existantes.", accent: '#C1440E' },
  { step: '02', title: 'Configuration', description: "Personnalisez l'outil selon vos besoins avec l'aide de notre équipe.", accent: '#D4891A' },
  { step: '03', title: 'Utilisation',   description: "Profitez d'une plateforme intuitive et d'un support disponible 24/7.", accent: '#1B3A6B' },
]

const painPoints = [
  'Vous perdez du temps avec des tâches administratives répétitives ?',
  'Vos informations clients sont dispersées dans plusieurs outils ?',
  "Vous n'avez pas de visibilité claire sur vos performances ?",
  "Vous manquez des opportunités de vente par manque de suivi ?",
]

export default function PeleAI360Page() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden" style={{ backgroundColor: '#0D1B2E' }}>
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse at 30% 50%, rgba(46,90,156,0.3) 0%, transparent 65%)' }} />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            {/* Content */}
            <div>
              <div
                className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-medium mb-6"
                style={{ backgroundColor: 'rgba(212,137,26,0.15)', color: '#D4891A', border: '1px solid rgba(212,137,26,0.3)' }}
              >
                <Zap className="h-4 w-4" />
                Produit SaaS · PeleAI
              </div>

              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl text-balance text-white">
                PeleAI<span style={{ color: '#D4891A' }}>360</span>
              </h1>

              <p className="mt-2 text-xl" style={{ color: '#D4891A' }}>
                Votre assistant digital tout-en-un
              </p>

              <p className="mt-4 text-lg leading-relaxed" style={{ color: 'rgba(255,255,255,0.65)' }}>
                Au même titre que{' '}
                <a href="https://menupro.ci/" target="_blank" rel="noopener noreferrer" style={{ color: '#D4891A' }} className="font-medium hover:underline underline-offset-4">
                  MenuPro
                </a>{' '}
                pour la restauration, PeleAI360 centralise CRM, facturation et pilotage pour votre entreprise. Simplifiez, automatisez, croissez.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Button
                  asChild size="lg" className="gap-2 font-semibold"
                  style={{ backgroundColor: '#2E5A9C', border: 'none', color: 'white' }}
                >
                  <a href="#demo">
                    Demander une démo gratuite
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </Button>
                <Button
                  asChild size="lg" variant="outline" className="gap-2"
                  style={{ borderColor: 'rgba(255,255,255,0.25)', color: 'white', background: 'rgba(255,255,255,0.05)' }}
                >
                  <Link href="#features">
                    <Play className="h-4 w-4" />
                    Voir les fonctionnalités
                  </Link>
                </Button>
              </div>

              <div className="mt-8 flex items-center gap-6 text-sm" style={{ color: 'rgba(255,255,255,0.6)' }}>
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4" style={{ color: '#D4891A' }} />
                  Essai gratuit 14 jours
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4" style={{ color: '#D4891A' }} />
                  Sans engagement
                </div>
              </div>
            </div>

            {/* Dashboard visual */}
            <div className="relative">

              <div className="relative rounded-2xl overflow-hidden shadow-2xl" style={{ border: '2px solid rgba(212,137,26,0.3)' }}>
                {/* Dashboard header */}
                <div className="px-5 pt-4 pb-3 flex items-center justify-between" style={{ backgroundColor: '#1B3A6B' }}>
                  <div className="flex items-center gap-2">
                    <div className="h-3 w-3 rounded-full" style={{ backgroundColor: '#C1440E' }}/>
                    <div className="h-3 w-3 rounded-full" style={{ backgroundColor: '#D4891A' }}/>
                    <div className="h-3 w-3 rounded-full" style={{ backgroundColor: '#4CAF50' }}/>
                  </div>
                  <span className="text-xs font-medium" style={{ color: 'rgba(255,255,255,0.5)' }}>PeleAI360 Dashboard</span>
                  <div/>
                </div>
                <div className="h-0.5" style={{ backgroundColor: '#2E5A9C' }}/>

                <div className="p-5" style={{ backgroundColor: '#0D1B2E' }}>
                  {/* Stats row */}
                  <div className="grid grid-cols-3 gap-3 mb-4">
                    {[
                      { label: 'Clients', value: '1 247', accent: '#C1440E' },
                      { label: 'Revenus', value: '5.2M', accent: '#D4891A' },
                      { label: 'Tâches', value: '23', accent: '#1B3A6B' },
                    ].map((s) => (
                      <div key={s.label} className="rounded-xl p-3 text-center" style={{ backgroundColor: `${s.accent}18`, border: `1px solid ${s.accent}30` }}>
                        <p className="text-xs mb-1" style={{ color: 'rgba(255,255,255,0.5)' }}>{s.label}</p>
                        <p className="text-lg font-bold" style={{ color: s.accent }}>{s.value}</p>
                      </div>
                    ))}
                  </div>

                  {/* Chart */}
                  <div className="rounded-xl p-4 mb-4" style={{ backgroundColor: 'rgba(255,255,255,0.05)' }}>
                    <p className="text-xs mb-3" style={{ color: 'rgba(255,255,255,0.4)' }}>Performance mensuelle</p>
                    <div className="flex items-end gap-2 h-20">
                      {[40,65,45,80,55,70,90,75,85].map((h, i) => (
                        <div
                          key={i}
                          className="flex-1 rounded-t"
                          style={{ height: `${h}%`, background: i % 2 === 0 ? 'linear-gradient(to top, #C1440E, #E05A20)' : 'linear-gradient(to top, #D4891A, #F5C842)' }}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Activity + Tasks */}
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { title: 'Dernières activités', items: ['Nouveau client ajouté', 'Devis envoyé', 'Paiement reçu'], dot: '#C1440E' },
                      { title: 'Tâches du jour', items: ['Relancer prospect A', 'Mettre à jour CRM', 'Rapport hebdo'], dot: '#D4891A' },
                    ].map((col) => (
                      <div key={col.title} className="rounded-xl p-3" style={{ backgroundColor: 'rgba(255,255,255,0.05)' }}>
                        <p className="text-[10px] mb-2" style={{ color: 'rgba(255,255,255,0.4)' }}>{col.title}</p>
                        {col.items.map((item) => (
                          <div key={item} className="flex items-center gap-2 mb-2">
                            <div className="h-2 w-2 rounded-full shrink-0" style={{ backgroundColor: col.dot }}/>
                            <div className="h-1.5 flex-1 rounded" style={{ backgroundColor: 'rgba(255,255,255,0.1)' }}/>
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating card: African professional */}
              <div
                className="absolute -bottom-4 -left-4 rounded-xl px-4 py-3 shadow-xl"
                style={{ backgroundColor: '#D4891A', color: 'white' }}
              >
                <p className="text-xs font-medium opacity-80">Satisfaction client</p>
                <p className="text-2xl font-bold">98%</p>
              </div>
              <div
                className="absolute -top-4 -right-4 rounded-xl px-4 py-3 shadow-xl"
                style={{ backgroundColor: '#C1440E', color: 'white' }}
              >
                <p className="text-xs font-medium opacity-80">PME accompagnées</p>
                <p className="text-2xl font-bold">15+</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pain points */}
      <section className="py-16 lg:py-20" style={{ backgroundColor: '#F8FAFC' }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4" style={{ color: '#0D1B2E' }}>
              Vous vous reconnaissez ?
            </h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {painPoints.map((point, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 rounded-xl p-4 text-left"
                  style={{ backgroundColor: 'white', border: '1.5px solid rgba(193,68,14,0.15)' }}
                >
                  <div
                    className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full font-bold text-sm text-white"
                    style={{ backgroundColor: '#C1440E' }}
                  >
                    ?
                  </div>
                  <p className="text-sm" style={{ color: '#374151' }}>{point}</p>
                </div>
              ))}
            </div>
            <p className="mt-8 text-lg font-semibold" style={{ color: '#2E5A9C' }}>
              PeleAI360 est la solution à tous ces problèmes.
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-16 lg:py-24 scroll-mt-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12 lg:mb-16">
            <p className="text-sm font-semibold uppercase tracking-wider mb-3" style={{ color: '#2E5A9C' }}>
              Fonctionnalités
            </p>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-balance" style={{ color: '#0D1B2E' }}>
              Tout ce dont vous avez besoin, au même endroit
            </h2>
            <p className="mt-4 text-lg" style={{ color: '#64748B' }}>
              7 modules complets pour piloter votre entreprise de A à Z.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {featureCategories.map((cat) => (
              <div
                key={cat.title}
                className="rounded-2xl p-5 transition-all hover:shadow-lg hover:-translate-y-1"
                style={{ backgroundColor: 'white', border: `1.5px solid ${cat.accent}22` }}
              >
                <div className="h-1 rounded mb-5" style={{ backgroundColor: cat.accent }} />
                <div
                  className="flex h-11 w-11 items-center justify-center rounded-xl mb-4 text-white"
                  style={{ backgroundColor: cat.accent }}
                >
                  <cat.icon className="h-5 w-5" />
                </div>
                <h3 className="text-base font-bold mb-3" style={{ color: '#0D1B2E' }}>{cat.title}</h3>
                <ul className="space-y-2">
                  {cat.features.map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <Star className="h-3.5 w-3.5 mt-0.5 shrink-0" style={{ color: cat.accent }} />
                      <span className="text-xs leading-snug" style={{ color: '#64748B' }}>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 lg:py-20" style={{ backgroundColor: '#0D1B2E' }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Les résultats parlent d&apos;eux-mêmes
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="text-center">
                <div
                  className="mx-auto flex h-20 w-20 items-center justify-center mb-4 text-white"
                  style={{
                    backgroundColor: 'rgba(255,255,255,0.12)',
                    border: '2px solid rgba(255,255,255,0.2)',
                    clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
                  }}
                >
                  <benefit.icon className="h-9 w-9" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{benefit.title}</h3>
                <p style={{ color: 'rgba(255,255,255,0.8)' }}>{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

      </section>

      {/* How it works */}
      <section className="py-16 lg:py-24" style={{ backgroundColor: '#F8FAFC' }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12 lg:mb-16">
            <p className="text-sm font-semibold uppercase tracking-wider mb-3" style={{ color: '#2E5A9C' }}>
              Comment ça marche
            </p>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl" style={{ color: '#0D1B2E' }}>
              Démarrez en 3 étapes simples
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {howItWorks.map((item, i) => (
              <div key={item.step} className="relative text-center">
                {/* Connector */}
                {i < howItWorks.length - 1 && (
                  <div
                    className="hidden md:block absolute top-10 h-0.5"
                    style={{
                      left: 'calc(50% + 3rem)',
                      right: 0,
                      background: `linear-gradient(to right, ${item.accent}, ${howItWorks[i+1].accent})`,
                    }}
                  />
                )}

                <div className="flex flex-col items-center">
                  <div
                    className="flex h-20 w-20 items-center justify-center rounded-full text-white text-2xl font-bold mb-5 shadow-lg"
                    style={{ backgroundColor: item.accent, border: `3px solid ${item.accent}40` }}
                  >
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold mb-2" style={{ color: '#0D1B2E' }}>{item.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: '#64748B' }}>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Demo form */}
      <section id="demo" className="py-16 lg:py-24 scroll-mt-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            {/* Content */}
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider mb-3" style={{ color: '#2E5A9C' }}>
                Essai gratuit
              </p>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-balance" style={{ color: '#0D1B2E' }}>
                Prêt à simplifier votre gestion ?
              </h2>
              <p className="mt-4 text-lg leading-relaxed" style={{ color: '#64748B' }}>
                Demandez une démonstration personnalisée et découvrez comment PeleAI360
                peut transformer votre façon de travailler.
              </p>

              <ul className="mt-8 space-y-4">
                {[
                  'Démonstration personnalisée de 30 minutes',
                  'Configuration adaptée à votre secteur',
                  'Essai gratuit de 14 jours',
                  "Support dédié pendant l'onboarding",
                ].map((item, i) => {
                  const accent = ['#C1440E','#D4891A','#1B3A6B','#8B5A00'][i % 4]
                  return (
                    <li key={item} className="flex items-center gap-3">
                      <div
                        className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-white"
                        style={{ backgroundColor: accent }}
                      >
                        <Check className="h-4 w-4" />
                      </div>
                      <span style={{ color: '#374151' }}>{item}</span>
                    </li>
                  )
                })}
              </ul>

              {/* Stats badges */}
              <div className="mt-8 flex flex-wrap gap-3">
                {[
                  { value: '14j', label: 'Essai gratuit', accent: '#C1440E' },
                  { value: '30min', label: 'Démo dédiée', accent: '#D4891A' },
                  { value: '24/7', label: 'Support', accent: '#1B3A6B' },
                ].map((s) => (
                  <div
                    key={s.label}
                    className="rounded-xl px-4 py-2 text-center"
                    style={{ backgroundColor: `${s.accent}12`, border: `1.5px solid ${s.accent}25` }}
                  >
                    <p className="text-xl font-bold" style={{ color: s.accent }}>{s.value}</p>
                    <p className="text-xs" style={{ color: '#64748B' }}>{s.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Form */}
            <div
              className="rounded-2xl p-6 sm:p-8 shadow-xl"
              style={{ backgroundColor: 'white', border: '1.5px solid rgba(193,68,14,0.15)' }}
            >
              <h3 className="text-xl font-bold mb-6" style={{ color: '#0D1B2E' }}>
                Demander une démo
              </h3>
              <DemoForm />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
