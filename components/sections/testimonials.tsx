import { Star } from 'lucide-react'

const testimonials = [
  {
    quote: "Avec PeleAI, Grand Bazar a renforcé sa visibilité digitale avec des visuels de qualité et une communication plus professionnelle. L'accompagnement est concret, rapide et orienté résultats.",
    author: 'Sonya Koffi',
    role: 'CEO, Grand Bazar',
    initials: 'SK',
  },
  {
    quote: "PeleAI a complètement transformé notre présence en ligne. Notre site e-commerce génère maintenant 3x plus de ventes qu'avant.",
    author: 'Aminata Diallo',
    role: 'CEO, AfriShop',
    initials: 'AD',
  },
  {
    quote: "Une équipe professionnelle et réactive. Ils ont compris nos besoins dès le premier jour et ont livré au-delà de nos attentes.",
    author: "Kouassi N'Guessan",
    role: 'Fondateur, TechBénin',
    initials: 'KN',
  },
]

export function Testimonials() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-14">
          <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: '#2E5A9C' }}>
            Témoignages
          </p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl" style={{ color: '#0D1B2E' }}>
            Ce que nos clients disent de nous
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.author}
              className="rounded-2xl p-7"
              style={{ backgroundColor: '#F8FAFC', border: '1px solid #E2E8F0' }}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-sm leading-relaxed mb-6" style={{ color: '#374151' }}>
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div
                  className="h-10 w-10 rounded-full flex items-center justify-center text-sm font-bold text-white shrink-0"
                  style={{ backgroundColor: '#2E5A9C' }}
                >
                  {t.initials}
                </div>
                <div>
                  <p className="text-sm font-semibold" style={{ color: '#0D1B2E' }}>{t.author}</p>
                  <p className="text-xs" style={{ color: '#64748B' }}>{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
