/**
 * Transition de page : une onde bleue se retire vers le coin haut droit, là où naît l'arc du logo.
 * Active seulement après la première navigation interne (voir NavTransitionMarker), jamais au premier chargement.
 */
export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="page-wave" aria-hidden="true" />
      {children}
    </>
  )
}
