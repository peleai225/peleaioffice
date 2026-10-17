'use client'

import { usePathname } from 'next/navigation'
import { Fragment, useEffect, useRef, type CSSProperties, type ReactNode } from 'react'
import { cn } from '@/lib/utils'
import { useReveal } from './use-reveal'

function prefersReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

/**
 * Texte révélé mot par mot : chaque mot monte à travers un masque quand le bloc entre à l'écran.
 * Rendu serveur et sans JavaScript : texte visible normalement.
 */
export function SplitText({ text, className }: { text: string; className?: string }) {
  const { ref, state } = useReveal<HTMLSpanElement>()
  const words = text.split(' ')
  return (
    <span ref={ref} className={cn(state === 'waiting' && 'split-waiting', className)}>
      <span className="sr-only">{text}</span>
      <span aria-hidden="true">
        {/* L'espace reste HORS du masque : à l'intérieur d'un inline-block, il serait supprimé. */}
        {words.map((w, i) => (
          <Fragment key={i}>
            <span className="word-mask">
              <span className="split-inner" style={{ '--i': i } as CSSProperties}>
                {w}
              </span>
            </span>
            {i < words.length - 1 && ' '}
          </Fragment>
        ))}
      </span>
    </span>
  )
}

/** Titre du hero : mots qui montent dès le premier affichage (CSS pur, pas d'attente d'hydratation). */
export function HeroTitleWords({ text }: { text: string }) {
  const words = text.split(' ')
  return (
    <>
      <span className="sr-only">{text}</span>
      <span aria-hidden="true">
        {words.map((w, i) => (
          <Fragment key={i}>
            <span className="word-mask">
              <span className="word-up" style={{ '--i': i } as CSSProperties}>
                {w}
              </span>
            </span>
            {i < words.length - 1 && ' '}
          </Fragment>
        ))}
      </span>
    </>
  )
}

/** Élément magnétique : suit légèrement le curseur quand il passe à proximité (pointeur fin uniquement). */
export function Magnetic({ children, strength = 0.3, className }: { children: ReactNode; strength?: number; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  useEffect(() => {
    const el = ref.current
    if (!el || prefersReducedMotion() || !window.matchMedia('(pointer: fine)').matches) return
    let frame = 0
    const onMove = (e: PointerEvent) => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        const r = el.getBoundingClientRect()
        const dx = e.clientX - (r.left + r.width / 2)
        const dy = e.clientY - (r.top + r.height / 2)
        el.style.transform = `translate3d(${dx * strength}px, ${dy * strength * 1.2}px, 0)`
      })
    }
    const onLeave = () => {
      cancelAnimationFrame(frame)
      el.style.transform = ''
    }
    el.addEventListener('pointermove', onMove)
    el.addEventListener('pointerleave', onLeave)
    return () => {
      cancelAnimationFrame(frame)
      el.removeEventListener('pointermove', onMove)
      el.removeEventListener('pointerleave', onLeave)
    }
  }, [strength])
  return (
    <span
      ref={ref}
      className={cn('inline-flex -m-4 p-4 transition-transform duration-500 ease-[var(--ease-out)] will-change-transform', className)}
    >
      {children}
    </span>
  )
}

/** Inclinaison 3D au survol, avec un reflet qui suit le curseur. */
export function Tilt({ children, max = 6, className }: { children: ReactNode; max?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const el = ref.current
    if (!el || prefersReducedMotion() || !window.matchMedia('(pointer: fine)').matches) return
    let frame = 0
    const onMove = (e: PointerEvent) => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        const r = el.getBoundingClientRect()
        const x = (e.clientX - r.left) / r.width
        const y = (e.clientY - r.top) / r.height
        el.style.transform = `perspective(1000px) rotateX(${(0.5 - y) * max}deg) rotateY(${(x - 0.5) * max}deg)`
        el.style.setProperty('--glare-x', `${x * 100}%`)
        el.style.setProperty('--glare-y', `${y * 100}%`)
        el.style.setProperty('--glare-o', '1')
      })
    }
    const onLeave = () => {
      cancelAnimationFrame(frame)
      el.style.transform = ''
      el.style.setProperty('--glare-o', '0')
    }
    el.addEventListener('pointermove', onMove)
    el.addEventListener('pointerleave', onLeave)
    return () => {
      cancelAnimationFrame(frame)
      el.removeEventListener('pointermove', onMove)
      el.removeEventListener('pointerleave', onLeave)
    }
  }, [max])
  return (
    <div
      ref={ref}
      className={cn(
        'relative h-full transition-transform duration-500 ease-[var(--ease-out)] [transform-style:preserve-3d]',
        'after:pointer-events-none after:absolute after:inset-0 after:rounded-card after:opacity-[var(--glare-o,0)] after:transition-opacity after:duration-500',
        'after:bg-[radial-gradient(circle_at_var(--glare-x,50%)_var(--glare-y,50%),rgb(255_255_255/0.35),transparent_45%)]',
        className,
      )}
    >
      {children}
    </div>
  )
}

/**
 * Active la transition de page (onde bleue) à partir de la première navigation interne,
 * jamais au premier chargement.
 */
export function NavTransitionMarker() {
  const pathname = usePathname()
  const first = useRef(pathname)
  useEffect(() => {
    if (pathname !== first.current) document.documentElement.classList.add('nav-ready')
  }, [pathname])
  return null
}
