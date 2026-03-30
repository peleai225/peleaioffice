'use client'

import * as React from 'react'
import { useInView } from 'react-intersection-observer'
import { Briefcase, Users, Award, Clock } from 'lucide-react'

const stats = [
  {
    icon: Briefcase,
    value: 15,
    suffix: '+',
    label: 'Projets réalisés',
    accent: '#C1440E',   // terracotta
  },
  {
    icon: Users,
    value: 98,
    suffix: '%',
    label: 'Clients satisfaits',
    accent: '#D4891A',   // gold
  },
  {
    icon: Award,
    value: 5,
    suffix: '+',
    label: 'Années d\'expérience',
    accent: '#C1440E',
  },
  {
    icon: Clock,
    value: 24,
    suffix: '/7',
    label: 'Support disponible',
    accent: '#D4891A',
  },
]

/* ─── Kente-strip decorative rule ──────────────────────────────────────────── */
function KenteStrip() {
  return (
    <div className="flex w-full overflow-hidden rounded h-2 mb-10 mx-auto max-w-3xl">
      {['#C1440E', '#D4891A', '#1B3A6B', '#C1440E', '#8B5A00', '#D4891A', '#C1440E', '#1B3A6B', '#D4891A', '#C1440E', '#8B5A00', '#1B3A6B'].map(
        (color, i) => (
          <div key={i} className="flex-1 h-full" style={{ backgroundColor: color }} />
        )
      )}
    </div>
  )
}

function AnimatedNumber({ value, suffix, accent }: { value: number; suffix: string; accent: string }) {
  const [count, setCount] = React.useState(0)
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 })

  React.useEffect(() => {
    if (inView) {
      const duration = 2000
      const steps = 60
      const increment = value / steps
      let current = 0
      const timer = setInterval(() => {
        current += increment
        if (current >= value) {
          setCount(value)
          clearInterval(timer)
        } else {
          setCount(Math.floor(current))
        }
      }, duration / steps)
      return () => clearInterval(timer)
    }
  }, [inView, value])

  return (
    <span ref={ref} className="text-4xl font-bold sm:text-5xl" style={{ color: accent }}>
      {count}
      {suffix}
    </span>
  )
}

export function Stats() {
  return (
    <section className="py-16 lg:py-20 relative overflow-hidden" style={{ backgroundColor: '#F5EDD8' }}>
      {/* Very subtle geometric texture */}
      <div className="absolute inset-0 opacity-[0.04] african-pattern-bg" style={{ color: '#C1440E' }} />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <KenteStrip />

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center text-center group"
            >
              {/* Icon container with African geometric shape */}
              <div
                className="mb-4 flex h-14 w-14 items-center justify-center relative"
                style={{ color: stat.accent }}
              >
                {/* Rotated square backdrop (diamond shape) */}
                <div
                  className="absolute inset-0 rotate-45 rounded-sm opacity-15"
                  style={{ backgroundColor: stat.accent }}
                />
                <div
                  className="absolute inset-1 rotate-45 rounded-sm opacity-10"
                  style={{ border: `1.5px solid ${stat.accent}` }}
                />
                <stat.icon className="relative h-7 w-7" />
              </div>

              <AnimatedNumber value={stat.value} suffix={stat.suffix} accent={stat.accent} />
              <p className="mt-2 text-sm font-medium" style={{ color: '#6B4423' }}>{stat.label}</p>

              {/* Bottom accent line */}
              <div className="mt-3 h-0.5 w-10 rounded" style={{ backgroundColor: stat.accent, opacity: 0.5 }} />
            </div>
          ))}
        </div>

        <KenteStrip />
      </div>
    </section>
  )
}
