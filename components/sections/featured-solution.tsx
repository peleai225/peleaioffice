"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Check, Zap, UtensilsCrossed, Smartphone, Globe, ShieldCheck, CreditCard, ShoppingBag, Server } from "lucide-react"
import { Button } from "@/components/ui/button"

const solutions = [
  {
    id: "menupro",
    name: "MenuPro",
    tagline: "Paiement Mobile Money en un clic",
    description: "Solution de paiement mobile pour restaurants et maquis. Scannez, commandez, savourez. Vos clients paient directement depuis leur téléphone.",
    image: "/images/menupro-showcase.png",
    color: "from-orange-500 to-orange-600",
    bgColor: "bg-orange-50",
    textColor: "text-orange-600",
    features: [
      "Paiement Mobile Money (Orange, MTN, Moov)",
      "QR Code pour commande rapide",
      "Reçu instantané par SMS",
      "Historique des transactions",
      "Compatible tous smartphones",
      "Installation rapide et sans frais cachés",
    ],
    href: "/menupro",
    cta: "Découvrir MenuPro",
    icon: UtensilsCrossed,
    badges: [
      { icon: Smartphone, text: "Mobile First" },
      { icon: CreditCard, text: "Paiement sécurisé" },
      { icon: ShieldCheck, text: "Données protégées" },
    ],
  },
  {
    id: "peleai360",
    name: "PeleAI 360°",
    tagline: "Votre solution digitale 360° pour le e-commerce",
    description: "Votre business mérite une vraie boutique. Transformez votre activité en boutique e-commerce professionnelle et développez votre marque.",
    image: "/images/peleai360-showcase.png",
    color: "from-green-500 to-green-600",
    bgColor: "bg-green-50",
    textColor: "text-green-600",
    price: "350.000 FCFA",
    priceNote: "Hébergement + nom de domaine inclus",
    features: [
      "Boutique professionnelle clé en main",
      "Hébergement inclus (1ère année)",
      "Paiements sécurisés intégrés",
      "Design responsive mobile & desktop",
      "Formation à la gestion incluse",
      "Support technique dédié",
    ],
    href: "/peleai360",
    cta: "Découvrir PeleAI 360°",
    icon: Zap,
    badges: [
      { icon: Globe, text: "Nom de domaine inclus" },
      { icon: Server, text: "Hébergement inclus" },
      { icon: ShoppingBag, text: "E-commerce complet" },
    ],
  },
]

export function FeaturedSolution() {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mx-auto max-w-2xl text-center mb-14 lg:mb-20">
          <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-4">
            Nos Solutions
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-[2.75rem] leading-tight">
            Des produits conçus pour l&apos;Afrique
          </h2>
          <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
            Des solutions SaaS innovantes adaptées aux réalités du marché africain.
          </p>
        </div>

        {/* Solutions */}
        <div className="space-y-20 lg:space-y-28">
          {solutions.map((solution, index) => (
            <div
              key={solution.id}
              className={`grid lg:grid-cols-2 gap-10 lg:gap-16 items-center ${index % 2 === 1 ? 'lg:direction-rtl' : ''}`}
            >
              {/* Image */}
              <div className={`relative ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-black/10 border border-border/50">
                  <Image
                    src={solution.image}
                    alt={`${solution.name} - ${solution.tagline}`}
                    width={800}
                    height={600}
                    className="w-full h-auto"
                    unoptimized
                  />
                </div>
                {/* Decorative element */}
                <div className={`absolute -z-10 -bottom-4 -right-4 w-full h-full rounded-2xl bg-gradient-to-br ${solution.color} opacity-10`} />
              </div>

              {/* Content */}
              <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                {/* Icon + name */}
                <div className="flex items-center gap-3 mb-4">
                  <div className={`flex h-11 w-11 items-center justify-center rounded-xl ${solution.bgColor} ${solution.textColor}`}>
                    <solution.icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">{solution.name}</h3>
                </div>

                <p className={`text-sm font-semibold uppercase tracking-widest ${solution.textColor} mb-4`}>
                  {solution.tagline}
                </p>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  {solution.description}
                </p>

                {/* Price badge for PeleAI 360 */}
                {solution.price && (
                  <div className="inline-flex items-baseline gap-2 bg-green-50 border border-green-200 rounded-xl px-5 py-3 mb-6">
                    <span className="text-xs text-green-600 font-medium">À partir de</span>
                    <span className="text-2xl font-bold text-green-700">{solution.price}</span>
                    <span className="text-xs text-green-600">{solution.priceNote}</span>
                  </div>
                )}

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {solution.features.map((text) => (
                    <li key={text} className="flex items-start gap-3">
                      <div className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${solution.bgColor} ${solution.textColor} mt-0.5`}>
                        <Check className="h-3 w-3" />
                      </div>
                      <span className="text-sm text-foreground/80">{text}</span>
                    </li>
                  ))}
                </ul>

                {/* Badges */}
                <div className="flex flex-wrap gap-3 mb-8">
                  {solution.badges.map((badge) => (
                    <div key={badge.text} className="flex items-center gap-2 bg-secondary rounded-lg px-3 py-2 text-xs font-medium text-muted-foreground">
                      <badge.icon className="h-3.5 w-3.5" />
                      {badge.text}
                    </div>
                  ))}
                </div>

                {/* CTAs */}
                <div className="flex flex-wrap gap-3">
                  <Button asChild className={`gap-2 rounded-lg bg-gradient-to-r ${solution.color} hover:opacity-90 text-white shadow-lg`}>
                    <Link href={solution.href}>
                      {solution.cta}
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className="rounded-lg">
                    <Link href={`/contact?demo=${encodeURIComponent(solution.name.toLowerCase())}`}>
                      Demander une démo
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
