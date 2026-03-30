import { Quote, Star } from 'lucide-react'

const testimonials = [
  {
    quote:
      "Avec PeleAI, Grand Bazar a renforcé sa visibilité digitale avec des visuels de qualité et une communication plus professionnelle. L'accompagnement est concret, rapide et orienté résultats.",
    author: 'Sonya Koffi',
    role: 'CEO, Grand Bazar',
    rating: 5,
    accent: '#C1440E',
  },
  {
    quote: 'PeleAI a complètement transformé notre présence en ligne. Notre site e-commerce génère maintenant 3x plus de ventes qu\'avant.',
    author: 'Aminata Diallo',
    role: 'CEO, AfriShop',
    rating: 5,
    accent: '#D4891A',
  },
  {
    quote: 'Une équipe professionnelle et réactive. Ils ont compris nos besoins dès le premier jour et ont livré au-delà de nos attentes.',
    author: 'Kouassi N\'Guessan',
    role: 'Fondateur, TechBénin',
    rating: 5,
    accent: '#1B3A6B',
  },
  {
    quote: 'Grâce à PeleAI360, nous avons automatisé 80% de notre gestion client. Un gain de temps et d\'efficacité inestimable.',
    author: 'Fatou Sow',
    role: 'Directrice Marketing, DigiServe',
    rating: 5,
    accent: '#8B5A00',
  },
]

/* ─── Small diamond ornament ──────────────────────────────────────────────── */
function DiamondOrnament({ color }: { color: string }) {
  return (
    <svg width="16" height="16" viewBox="0 0 20 20" aria-hidden="true">
      <polygon points="10,1 19,10 10,19 1,10" fill="none" stroke={color} strokeWidth="1.5" />
      <polygon points="10,5 15,10 10,15 5,10" fill={color} opacity="0.3" />
    </svg>
  )
}

export function Testimonials() {
  return (
    <section className="py-16 lg:py-24" style={{ backgroundColor: '#F5EDD8' }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mx-auto max-w-2xl text-center mb-12 lg:mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <DiamondOrnament color="#C1440E" />
            <p className="text-sm font-semibold uppercase tracking-widest" style={{ color: '#C1440E' }}>
              Témoignages
            </p>
            <DiamondOrnament color="#C1440E" />
          </div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-balance" style={{ color: '#1a0a00' }}>
            Ce que nos clients disent de nous
          </h2>
          <p className="mt-4 text-lg" style={{ color: '#6B4423' }}>
            Découvrez les retours d&apos;expérience de ceux qui nous ont fait confiance.
          </p>
          {/* Kente underline */}
          <div className="flex justify-center gap-px mt-5 mx-auto w-32 h-1.5 overflow-hidden rounded">
            {['#C1440E', '#D4891A', '#1B3A6B', '#C1440E', '#8B5A00', '#D4891A', '#C1440E'].map((c, i) => (
              <div key={i} className="flex-1 h-full" style={{ backgroundColor: c }} />
            ))}
          </div>
        </div>

        {/* Testimonials grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, i) => (
            <div
              key={i}
              className="relative rounded-xl p-6 transition-shadow duration-300 hover:shadow-lg border"
              style={{
                backgroundColor: 'white',
                borderColor: `${testimonial.accent}22`,
                borderWidth: '1.5px',
              }}
            >
              {/* Left accent bar */}
              <div
                className="absolute top-4 bottom-4 left-0 w-1 rounded-r"
                style={{ backgroundColor: testimonial.accent }}
              />

              {/* Quote icon */}
              <div className="absolute -top-3 left-6">
                <div
                  className="flex h-8 w-8 items-center justify-center rounded-full"
                  style={{ backgroundColor: testimonial.accent }}
                >
                  <Quote className="h-4 w-4 text-white" />
                </div>
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4 mt-3">
                {Array.from({ length: testimonial.rating }).map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-sm leading-relaxed" style={{ color: '#3a1a00' }}>
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="mt-5 flex items-center gap-3">
                <div
                  className="h-10 w-10 rounded-full rotate-45 flex items-center justify-center text-sm font-bold text-white shrink-0"
                  style={{ backgroundColor: testimonial.accent }}
                >
                  <span className="-rotate-45">{testimonial.author.charAt(0)}</span>
                </div>
                <div>
                  <p className="text-sm font-semibold" style={{ color: '#1a0a00' }}>
                    {testimonial.author}
                  </p>
                  <p className="text-xs" style={{ color: '#6B4423' }}>
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
