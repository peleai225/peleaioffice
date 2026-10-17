import Image from 'next/image'
import type { CSSProperties } from 'react'
import { cn } from '@/lib/utils'
import { ARC_GEOMETRY } from './arc'

/**
 * Hero « Ondes vivantes » : le monogramme officiel et des quarts d'anneau qui partent de son arc.
 * Avec `intro`, le monogramme se construit par un balayage circulaire, l'arc s'illumine,
 * puis les ondes commencent à émettre. CSS pur : composition complète sans JavaScript,
 * statique si l'utilisateur demande moins d'animations.
 *
 * Repère : celui de /brand/icone-p.png (512 × 512), où le centre et les rayons de l'arc ont été mesurés.
 */
const ICON = { size: 512, cx: 244.3, cy: 236.8, arcInner: 151, arcOuter: 220.2, stroke: 69.2 }

export function SignalWaves({
  count = 4,
  intro = false,
  className,
  monogramSrc = '/brand/icone-p.png',
}: {
  count?: number
  intro?: boolean
  className?: string
  monogramSrc?: string
}) {
  const gap = ICON.stroke * ARC_GEOMETRY.gapOverStroke
  const waves = Array.from({ length: count }, (_, k) => ICON.arcOuter + gap + k * (ICON.stroke + gap) + ICON.stroke / 2)
  const reach = ICON.arcOuter + gap + count * (ICON.stroke + gap)
  const minY = Math.floor(ICON.cy - reach)
  const width = Math.ceil(ICON.cx + reach)
  const height = ICON.size - minY
  const viewBox = `0 ${minY} ${width} ${height}`
  const arcMid = (ICON.arcInner + ICON.arcOuter) / 2
  const arc = (r: number) => `M ${ICON.cx} ${ICON.cy - r} A ${r} ${r} 0 0 1 ${ICON.cx + r} ${ICON.cy}`

  // Position du monogramme dans la boîte, en pourcentages du viewBox.
  const monoStyle: CSSProperties = {
    left: 0,
    top: `${(-minY / height) * 100}%`,
    width: `${(ICON.size / width) * 100}%`,
    height: `${(ICON.size / height) * 100}%`,
  }

  return (
    <div className={cn('relative', intro && 'signal-intro', className)} style={{ aspectRatio: `${width} / ${height}` }}>
      {/* Les ondes seules suivent --wave-x / --wave-y (réglées par HeroWaves) ; le monogramme ne bouge jamais. */}
      <svg aria-hidden="true" viewBox={viewBox} className="absolute inset-0 h-full w-full overflow-visible">
        <g
          style={{
            transform: 'translate3d(var(--wave-x, 0px), var(--wave-y, 0px), 0)',
            transition: 'transform 0.9s var(--ease-out)',
          }}
        >
          {waves.map((r, k) => (
            <path
              key={k}
              className="signal-wave"
              style={{ '--wave-index': k } as CSSProperties}
              d={arc(r)}
              fill="none"
              stroke="var(--brand-600)"
              strokeWidth={ICON.stroke}
            />
          ))}
        </g>
      </svg>
      <Image
        src={monogramSrc}
        alt=""
        width={ICON.size}
        height={ICON.size}
        priority={intro}
        className={cn('absolute max-w-none', intro && 'hero-mono')}
        style={monoStyle}
      />
      {intro && (
        <svg aria-hidden="true" viewBox={viewBox} className="pointer-events-none absolute inset-0 h-full w-full overflow-visible">
          <path className="hero-arc-glow" d={arc(arcMid)} fill="none" stroke="var(--brand-300)" strokeWidth={ICON.stroke + 2} />
        </svg>
      )}
    </div>
  )
}
