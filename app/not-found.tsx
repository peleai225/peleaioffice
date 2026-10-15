import type { Metadata } from 'next'
import { Arc, Button, Section } from '@/components/ds'

export const metadata: Metadata = {
  title: 'Page introuvable',
  robots: { index: false },
}

/** 404 « hors signal » : l'arc du logo, isolé, qui cherche son signal. */
export default function NotFound() {
  return (
    <Section tone="paper" space="lg" aria-labelledby="introuvable-titre">
      <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-6">
        <div className="grid gap-6 lg:col-span-7">
          <p className="font-display text-label font-medium uppercase text-ink-soft">Erreur 404</p>
          <h1 id="introuvable-titre" className="max-w-[14ch] font-display text-h1 font-bold text-brand">
            Hors signal : cette page est introuvable.
          </h1>
          <p className="text-measure text-lead text-ink-soft">
            Le lien est peut-être ancien, ou l’adresse contient une faute de frappe. Voici de quoi retrouver le fil.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button href="/" arrow>
              Revenir à l’accueil
            </Button>
            <Button href="/services" variant="outline">
              Voir les services
            </Button>
            <Button href="/contact" variant="link">
              Nous contacter
            </Button>
          </div>
        </div>
        <div aria-hidden="true" className="relative mx-auto grid size-56 place-items-center sm:size-72 lg:col-span-4 lg:col-start-9">
          <Arc size="100%" className="arc-pulse absolute inset-0 text-brand-200" />
          <Arc size="62%" className="arc-pulse absolute left-0 bottom-0 text-brand [animation-delay:0.4s]" />
          <Arc size="30%" className="arc-pulse absolute left-0 bottom-0 text-cta [animation-delay:0.8s]" />
        </div>
      </div>
    </Section>
  )
}
