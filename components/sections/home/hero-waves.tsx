'use client'

import { useEffect, useRef } from 'react'
import { SignalWaves } from '@/components/ui'

/**
 * Ondes du hero qui suivent légèrement le curseur (pointeur fin uniquement).
 * Sans JavaScript, sur écran tactile ou en mouvement réduit : ondes CSS seules.
 */
export function HeroWaves({ className }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    const zone = el?.closest('section')
    if (!el || !zone) return
    if (!window.matchMedia('(pointer: fine)').matches) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    let frame = 0
    const onMove = (e: PointerEvent) => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        const r = zone.getBoundingClientRect()
        const x = (e.clientX - r.left) / r.width - 0.5
        const y = (e.clientY - r.top) / r.height - 0.5
        el.style.setProperty('--wave-x', `${(x * 28).toFixed(1)}px`)
        el.style.setProperty('--wave-y', `${(y * 20).toFixed(1)}px`)
      })
    }
    const onLeave = () => {
      el.style.setProperty('--wave-x', '0px')
      el.style.setProperty('--wave-y', '0px')
    }
    zone.addEventListener('pointermove', onMove)
    zone.addEventListener('pointerleave', onLeave)
    return () => {
      cancelAnimationFrame(frame)
      zone.removeEventListener('pointermove', onMove)
      zone.removeEventListener('pointerleave', onLeave)
    }
  }, [])

  return (
    <div ref={ref} className={className}>
      <SignalWaves intro />
    </div>
  )
}
