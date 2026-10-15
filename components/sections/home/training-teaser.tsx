import Image from 'next/image'
import { ArcList, Button, Eyebrow, Heading, Lead, Section } from '@/components/ds'
import { training } from '@/content/home'

export function TrainingTeaser() {
  return (
    <Section tone="paper" aria-labelledby="formations-titre">
      <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-6">
        <figure className="grid gap-4 lg:col-span-5">
          <div className="relative aspect-[4/5] max-w-md overflow-hidden rounded-card bg-night">
            <Image
              src={training.trainer.photo}
              alt={`Portrait de ${training.trainer.name}`}
              fill
              sizes="(min-width: 1024px) 450px, 90vw"
              className="object-cover"
            />
          </div>
          <figcaption className="text-small text-ink-soft">
            <span className="font-semibold text-ink">{training.trainer.name}</span>, {training.trainer.role}
          </figcaption>
        </figure>
        <div className="grid gap-6 lg:col-span-6 lg:col-start-7">
          <Eyebrow>{training.eyebrow}</Eyebrow>
          <Heading id="formations-titre" className="max-w-[18ch]">
            {training.title}
          </Heading>
          <Lead>{training.text}</Lead>
          <ArcList items={training.points} className="text-ink" />
          <p className="text-small text-ink-soft">{training.lastSession}</p>
          <div className="flex flex-wrap gap-3 pt-2">
            <Button href="/formations" variant="secondary" arrow>
              Voir les formations
            </Button>
            <Button href="/contact?objet=formation" variant="outline">
              Former mon équipe
            </Button>
          </div>
        </div>
      </div>
    </Section>
  )
}
