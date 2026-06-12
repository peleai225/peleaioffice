import { cn } from "@/lib/utils"

/** Texture géométrique discrète (lignes / grille) — complète la charte bleue sans la remplacer. */
export function AfroPatternOverlay({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 afro-pattern-overlay opacity-40",
        "[mask-image:linear-gradient(to_bottom,black_40%,transparent)]",
        className
      )}
      aria-hidden
    />
  )
}

/** Fine bande dégradée (bordure haute de footer, etc.). */
export function AfroAccentStripe({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "h-1 w-full bg-gradient-to-r from-afro-terracotta/80 via-afro-gold to-afro-ochre/80",
        className
      )}
      aria-hidden
    />
  )
}

export { AfroZigzagDivider } from "./afro-zigzag-divider"
