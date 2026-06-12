import { Quote, Star } from 'lucide-react'

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
    <section className="py-20 lg:py-28 bg-secondary">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mx-auto max-w-2xl text-center mb-14 lg:mb-20">
          <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-4">
            Témoignages
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-[2.75rem] leading-tight">
            Ce que nos clients disent de nous
          </h2>
          <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
            Découvrez les retours d&apos;expérience de ceux qui nous ont fait confiance.
          </p>
        </div>

        {/* Testimonials grid */}
        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, i) => (
            <div
              key={i}
              className={`group bg-card rounded-2xl p-7 shadow-sm shadow-black/[0.04] border border-border/50 transition-all duration-300 hover:shadow-xl hover:shadow-accent/[0.06] hover:-translate-y-2 ${i === 0 ? 'lg:col-span-2' : ''}`}
            >
              {/* Quote icon */}
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent mb-5">
                <Quote className="h-5 w-5" />
              </div>

              {/* Rating */}
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, j) => (
                  <Star
                    key={j}
                    className="h-4 w-4 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              {/* Quote text */}
              <blockquote className={`text-foreground/90 leading-relaxed mb-6 ${i === 0 ? 'text-base lg:text-lg' : 'text-sm'}`}>
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-3 pt-5 border-t border-border/50">
                <div className="h-11 w-11 rounded-full bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center text-sm font-bold text-accent">
                  {testimonial.author.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">
                    {testimonial.author}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
