import { Quote, Star } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

const testimonials = [
  {
    quote:
      "Avec PeleAI, Grand Bazar a renforcé sa visibilité digitale avec des visuels de qualité et une communication plus professionnelle. L'accompagnement est concret, rapide et orienté résultats.",
    author: 'Sonya Koffi',
    role: 'CEO, Grand Bazar',
    rating: 5,
  },
  {
    quote: 'PeleAI a complètement transformé notre présence en ligne. Notre site e-commerce génère maintenant 3x plus de ventes qu\'avant.',
    author: 'Aminata Diallo',
    role: 'CEO, AfriShop',
    rating: 5,
  },
  {
    quote: 'Une équipe professionnelle et réactive. Ils ont compris nos besoins dès le premier jour et ont livré au-delà de nos attentes.',
    author: 'Kouassi N\'Guessan',
    role: 'Fondateur, TechBénin',
    rating: 5,
  },
  {
    quote: 'Grâce à PeleAI360, nous avons automatisé 80% de notre gestion client. Un gain de temps et d\'efficacité inestimable.',
    author: 'Fatou Sow',
    role: 'Directrice Marketing, DigiServe',
    rating: 5,
  },
]

export function Testimonials() {
  return (
    <section className="py-16 lg:py-24 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mx-auto max-w-2xl text-center mb-12 lg:mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
            Témoignages
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            Ce que nos clients disent de nous
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Découvrez les retours d&apos;expérience de ceux qui nous ont fait confiance.
          </p>
        </div>

        {/* Testimonials grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, i) => (
            <Card
              key={i}
              className="relative bg-background border-border/50 hover:shadow-lg transition-shadow duration-300"
            >
              <CardContent className="pt-6">
                {/* Quote icon */}
                <div className="absolute -top-3 left-6">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <Quote className="h-4 w-4" />
                  </div>
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-4 mt-2">
                  {Array.from({ length: testimonial.rating }).map((_, j) => (
                    <Star
                      key={j}
                      className="h-4 w-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-foreground leading-relaxed">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>

                {/* Author */}
                <div className="mt-6 flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-sm font-semibold text-primary">
                    {testimonial.author.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">
                      {testimonial.author}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
