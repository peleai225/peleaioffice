'use client'

import Link from 'next/link'
import { ArrowRight, Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useSiteContent } from '@/components/providers/site-content-provider'

export function CTASection() {
  const { content } = useSiteContent()
  const tel = content.contact.phoneTelHref.replace(/\s/g, '')

  return (
    <section className="py-20 lg:py-28 bg-primary relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-1/4 h-[400px] w-[400px] rounded-full bg-accent/[0.08] blur-[120px]" />
      <div className="absolute bottom-0 right-1/3 h-[300px] w-[300px] rounded-full bg-accent/[0.05] blur-[100px]" />

      {/* Decorative circles */}
      <div className="absolute top-1/2 left-8 -translate-y-1/2 h-64 w-64 rounded-full border border-white/[0.05]" />
      <div className="absolute top-1/2 right-8 -translate-y-1/2 h-48 w-48 rounded-full border border-white/[0.05]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-4">
            Passez à l&apos;action
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl leading-tight">
            Prêt à transformer votre entreprise ?
          </h2>
          <p className="mt-5 text-lg text-white/60 leading-relaxed">
            Bénéficiez d&apos;un audit gratuit de votre présence digitale et découvrez comment nous pouvons vous aider à atteindre vos objectifs.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="gap-2 h-13 px-8 rounded-lg bg-accent hover:bg-accent/90 text-white shadow-lg shadow-accent/25 text-base"
            >
              <Link href="/contact">
                Demander un audit gratuit
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="gap-2 h-13 px-8 rounded-lg border-white/20 text-white hover:bg-white/10 text-base"
            >
              <a href={`tel:${tel}`}>
                <Phone className="h-4 w-4" />
                Nous appeler
              </a>
            </Button>
          </div>

          <p className="mt-8 text-sm text-white/40">
            Réponse garantie sous 24h — Sans engagement
          </p>
        </div>
      </div>
    </section>
  )
}
