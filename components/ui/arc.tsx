import type { CSSProperties, ReactNode } from 'react'
import { cn } from '@/lib/utils'

/**
 * Géométrie de l'arc du logo, mesurée sur le fichier source :
 * - un quart d'anneau aux terminaisons plates, centré en bas à gauche ;
 * - rayon intérieur / rayon extérieur = 240 / 350 ;
 * - le trait S (hampe, panse, arc) est le même partout ;
 * - l'écart entre la panse et l'arc vaut 0,164 S.
 * Tous les arcs du site sont construits avec ces rapports.
 */
export const ARC_GEOMETRY = {
  innerOverOuter: 240 / 350,
  gapOverStroke: 18 / 110,
  /** Rayon intérieur de l'arc du logo, en multiples du trait S. */
  innerInStrokes: 240 / 110,
} as const

type Corner = 'tr' | 'tl' | 'br' | 'bl'

/** Oriente l'arc : « tr » reproduit le logo (l'arc s'ouvre en haut à droite). */
const cornerTransform: Record<Corner, string> = {
  tr: '',
  tl: '-scale-x-100',
  br: '-scale-y-100',
  bl: 'scale-x-[-1] scale-y-[-1]',
}

function quarterPath(cx: number, cy: number, r: number) {
  return `M ${cx} ${cy - r} A ${r} ${r} 0 0 1 ${cx + r} ${cy}`
}

/**
 * Un arc seul, aux proportions du logo. La boîte carrée est remplie par le rayon extérieur.
 * La couleur suit `currentColor` : la fixer avec une classe text-*.
 */
export function Arc({
  size = 24,
  corner = 'tr',
  className,
  style,
  strokeRatio,
}: {
  size?: number | string
  corner?: Corner
  className?: string
  style?: CSSProperties
  /** Épaisseur / rayon extérieur. Par défaut celle du logo (≈ 0,314). */
  strokeRatio?: number
}) {
  const outer = 100
  const t = outer * (strokeRatio ?? 1 - ARC_GEOMETRY.innerOverOuter)
  const mid = outer - t / 2
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 100 100"
      width={size}
      height={size}
      className={cn('shrink-0 overflow-visible', cornerTransform[corner], className)}
      style={style}
    >
      <path d={quarterPath(0, 100, mid)} fill="none" stroke="currentColor" strokeWidth={t} />
    </svg>
  )
}

/** Liste à puces dont la puce est un petit arc. */
export function ArcList({ items, className }: { items: ReactNode[]; className?: string }) {
  return (
    <ul className={cn('grid gap-3', className)}>
      {items.map((item, i) => (
        <li key={i} className="grid grid-cols-[1rem_minmax(0,1fr)] items-start gap-3">
          <Arc size={14} className="mt-[0.45em] text-brand" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

/**
 * Arcs concentriques en filigrane. Le premier anneau a exactement les proportions de l'arc du logo,
 * les suivants s'écartent de 0,164 S comme la panse et l'arc. À placer en absolu dans une section
 * (`relative isolate overflow-hidden`), rogné par les bords.
 */
export function ArcWatermark({
  count = 4,
  corner = 'tr',
  className,
  peak = 0.14,
}: {
  count?: number
  corner?: Corner
  className?: string
  /** Opacité de l'anneau le plus proche du centre ; les suivants s'estompent. */
  peak?: number
}) {
  const box = 1000
  const S = box / (ARC_GEOMETRY.innerInStrokes + 1 + (count - 1) * (1 + ARC_GEOMETRY.gapOverStroke))
  const rings = Array.from({ length: count }, (_, k) => {
    const inner = ARC_GEOMETRY.innerInStrokes * S + k * S * (1 + ARC_GEOMETRY.gapOverStroke)
    return { mid: inner + S / 2, opacity: peak * (1 - k / (count + 1)) }
  })
  return (
    <svg
      aria-hidden="true"
      viewBox={`0 0 ${box} ${box}`}
      className={cn('pointer-events-none absolute -z-10', cornerTransform[corner], className)}
    >
      {rings.map((ring, k) => (
        <path
          key={k}
          d={quarterPath(0, box, ring.mid)}
          fill="none"
          stroke="currentColor"
          strokeWidth={S}
          opacity={ring.opacity}
        />
      ))}
    </svg>
  )
}

/** Indicateur de chargement : l'arc seul, qui pulse lentement. */
export function ArcLoader({ size = 48, label = 'Chargement', className }: { size?: number; label?: string; className?: string }) {
  return (
    <span role="status" className={cn('relative inline-grid', className)} style={{ width: size, height: size }}>
      <Arc size={size} className="col-start-1 row-start-1 text-brand-100" />
      <Arc size={size} className="arc-pulse col-start-1 row-start-1 text-brand" />
      <span className="sr-only">{label}</span>
    </span>
  )
}

/**
 * Coin de carte : un arc ambre qui se dessine au survol ou au focus du parent `.group`.
 * Le seul endroit où l'accent rencontre le motif.
 */
export function ArcCorner({ size = 72, className }: { size?: number; className?: string }) {
  const t = 100 * (1 - ARC_GEOMETRY.innerOverOuter)
  const mid = 100 - t / 2
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 100 100"
      width={size}
      height={size}
      className={cn('pointer-events-none absolute right-0 top-0 overflow-visible', className)}
    >
      <path
        className="arc-draw"
        pathLength={100}
        d={`M ${100 - mid} 0 A ${mid} ${mid} 0 0 1 100 ${mid}`}
        fill="none"
        stroke="var(--cta)"
        strokeWidth={t}
      />
    </svg>
  )
}
