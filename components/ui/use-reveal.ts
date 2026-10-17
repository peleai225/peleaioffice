'use client'

import { useEffect, useRef, useState } from 'react'

export type RevealState = 'rest' | 'waiting' | 'shown'

/**
 * Révélation au défilement qui ne cache jamais le contenu par défaut :
 * - rendu serveur et sans JavaScript : l'élément est visible ('rest') ;
 * - après hydratation, seul un élément encore sous la ligne de flottaison passe en 'waiting',
 *   puis en 'shown' quand il entre dans l'écran (une seule fois) ;
 * - en mouvement réduit, les composants n'appliquent que des fondus (aucun déplacement).
 */
export function useReveal<T extends Element>() {
  const ref = useRef<T>(null)
  const [state, setState] = useState<RevealState>('rest')

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (el.getBoundingClientRect().top < window.innerHeight * 0.92) return

    setState('waiting')
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setState('shown')
          observer.disconnect()
        }
      },
      { rootMargin: '0px 0px -8% 0px' },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return { ref, state }
}
