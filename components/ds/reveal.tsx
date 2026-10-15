'use client'

import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'
import { useReveal } from './use-reveal'

/**
 * Entrée de section : fondu et 20 px de déplacement, 600 ms, une seule fois.
 * `delay` (ms) échelonne les éléments d'une liste.
 */
export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode
  delay?: number
  className?: string
}) {
  const { ref, state } = useReveal<HTMLDivElement>()
  return (
    <div
      ref={ref}
      className={cn(
        state !== 'rest' && 'transition-[opacity,transform] duration-[600ms] ease-[var(--ease-out)]',
        state === 'waiting' && 'translate-y-5 opacity-0 motion-reduce:translate-y-0',
        className,
      )}
      style={state === 'shown' && delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  )
}
