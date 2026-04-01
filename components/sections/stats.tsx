'use client'

import * as React from 'react'
import { useInView } from 'react-intersection-observer'

const stats = [
  { value: 15, suffix: '+', label: 'Projets réalisés' },
  { value: 98, suffix: '%', label: 'Clients satisfaits' },
  { value: 5,  suffix: '+', label: "Années d'expérience" },
  { value: 24, suffix: '/7', label: 'Support disponible' },
]

function AnimatedNumber({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = React.useState(0)
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 })

  React.useEffect(() => {
    if (!inView) return
    const duration = 1800
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
  }, [inView, value])

  return (
    <span ref={ref} className="text-4xl font-bold sm:text-5xl" style={{ color: '#2E5A9C' }}>
      {count}{suffix}
    </span>
  )
}

export function Stats() {
  return (
    <section className="py-16 lg:py-20" style={{ backgroundColor: '#F8FAFC', borderTop: '1px solid #E2E8F0', borderBottom: '1px solid #E2E8F0' }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 text-center">
          {stats.map((stat) => (
            <div key={stat.label}>
              <AnimatedNumber value={stat.value} suffix={stat.suffix} />
              <p className="mt-2 text-sm font-medium" style={{ color: '#64748B' }}>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
