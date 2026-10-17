'use client'

import { useEffect, useState, type ReactNode } from 'react'
import { cn } from '@/lib/utils'
import { ARC_GEOMETRY } from './arc'
import { useReveal } from './use-reveal'

/** Compte de 0 jusqu'à la valeur quand `run` passe à vrai. Le chiffre final est toujours celui fourni. */
function useCountUp(target: number | null, run: boolean, duration = 1400) {
  const [value, setValue] = useState<number | null>(null)
  useEffect(() => {
    if (target === null || !run) return
    let frame = 0
    const start = performance.now()
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration)
      const eased = 1 - Math.pow(1 - t, 4)
      setValue(Math.round(target * eased))
      if (t < 1) frame = requestAnimationFrame(tick)
    }
    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [target, run, duration])
  return value
}

/**
 * Chiffre clé porté par un arc qui se remplit une fois à l'entrée dans l'écran, pendant que le nombre défile.
 * `value` (0 à 1) ne sert qu'à la jauge : le chiffre affiché est fourni tel quel, jamais inventé.
 */
export function ArcGauge({
  value,
  figure,
  label,
  size = 88,
  className,
}: {
  value: number
  figure: string
  label: ReactNode
  size?: number
  className?: string
}) {
  const { ref, state } = useReveal<HTMLDivElement>()
  const t = 100 * (1 - ARC_GEOMETRY.innerOverOuter)
  const mid = 100 - t / 2
  const d = `M 0 ${100 - mid} A ${mid} ${mid} 0 0 1 ${mid} 100`
  const filled = Math.max(0, Math.min(1, value)) * 100

  const match = figure.match(/^(\d+)(.*)$/)
  const target = match ? Number(match[1]) : null
  const counted = useCountUp(target, state === 'shown')
  const shown =
    match && state === 'waiting' ? `0${match[2]}` : match && counted !== null ? `${counted}${match[2]}` : figure

  return (
    <div ref={ref} className={cn('flex items-center gap-5', className)}>
      <svg aria-hidden="true" viewBox="0 0 100 100" width={size} height={size} className="shrink-0">
        <path d={d} fill="none" stroke="currentColor" strokeWidth={t} className="text-brand-800" pathLength={100} />
        <path
          d={d}
          fill="none"
          stroke="var(--cta)"
          strokeWidth={t}
          pathLength={100}
          strokeDasharray="100 100"
          strokeDashoffset={state === 'waiting' ? 100 : 100 - filled}
          className={cn(state !== 'rest' && 'transition-[stroke-dashoffset] delay-150 duration-[1400ms] ease-[var(--ease-out)]')}
        />
      </svg>
      <div className="grid gap-1">
        <span className="font-display text-[clamp(2.25rem,1.8rem+1.6vw,3rem)] font-bold leading-none tabular-nums">
          <span aria-hidden="true">{shown}</span>
          <span className="sr-only">{figure}</span>
        </span>
        <span className="text-small text-ink-soft">{label}</span>
      </div>
    </div>
  )
}
