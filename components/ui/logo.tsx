import Image from 'next/image'
import Link from 'next/link'
import { cn } from '@/lib/utils'

/**
 * Logo officiel, jamais déformé ni recoloré : seules les versions fournies sont utilisées.
 * PROVISOIRE : PNG extraits du logo actuel, à remplacer par logo-bleu.svg / logo-clair.svg / icone-p.svg.
 */
const LOGO = {
  blue: { src: '/brand/logo-bleu.png', width: 1200, height: 515 },
  light: { src: '/brand/logo-clair.png', width: 1200, height: 515 },
} as const

const MARK = { src: '/brand/icone-p.png', width: 512, height: 512 } as const

const ALT = "PeleAI, L'Innovation par l'intelligence Artificielle"

export function Logo({
  variant = 'blue',
  height = 40,
  href,
  clearSpace = false,
  priority = false,
  className,
}: {
  /** blue sur fond clair, light sur fond nuit ou bleu. */
  variant?: 'blue' | 'light'
  height?: number
  href?: string
  /** Ajoute la zone de protection : hauteur du P / 4 sur les quatre côtés. */
  clearSpace?: boolean
  priority?: boolean
  className?: string
}) {
  const file = LOGO[variant]
  const width = Math.round((height * file.width) / file.height)
  const img = (
    <Image
      src={file.src}
      alt={href ? 'PeleAI, retour à l’accueil' : ALT}
      width={width}
      height={height}
      priority={priority}
      className="block h-auto max-w-full"
      style={{ height, width: 'auto' }}
    />
  )
  const wrapperClass = cn('inline-block shrink-0', className)
  const style = clearSpace ? { padding: height / 4 } : undefined

  if (href) {
    return (
      <Link href={href} className={cn(wrapperClass, 'rounded-field')} style={style}>
        {img}
      </Link>
    )
  }
  return (
    <span className={wrapperClass} style={style}>
      {img}
    </span>
  )
}

/** Monogramme seul, pour les petits formats. */
export function LogoMark({ size = 40, className, decorative = false }: { size?: number; className?: string; decorative?: boolean }) {
  return (
    <Image
      src={MARK.src}
      alt={decorative ? '' : 'PeleAI'}
      width={size}
      height={size}
      className={cn('block shrink-0', className)}
    />
  )
}
