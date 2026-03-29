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
  },
  {
    icon: Users,
    value: 98,
    suffix: '%',
    label: 'Clients satisfaits',
  },
  {
    icon: Award,
    value: 5,
    suffix: '+',
    label: 'Années d\'expérience',
  },
  {
    icon: Clock,
    value: 24,
    suffix: '/7',
    label: 'Support disponible',
  },
]

function AnimatedNumber({ value, suffix }: { value: number; suffix: string }) {
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
    <span ref={ref} className="text-4xl font-bold text-foreground sm:text-5xl">
      {count}
      {suffix}
    </span>
  )
}

export function Stats() {
  return (
    <section className="py-16 lg:py-20 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center text-center"
            >
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
                <stat.icon className="h-7 w-7" />
              </div>
              <AnimatedNumber value={stat.value} suffix={stat.suffix} />
              <p className="mt-2 text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
