/** Référence des tokens pour la page /design-system. Les valeurs vivent dans app/globals.css. */

export const brandScale = [
  { step: '50', hex: '#F3F6FB', onWhite: 1.08, onNight: 16.85 },
  { step: '100', hex: '#E4EAF5', onWhite: 1.21, onNight: 15.11 },
  { step: '200', hex: '#C9D5EA', onWhite: 1.48, onNight: 12.33 },
  { step: '300', hex: '#9DB4DD', onWhite: 2.1, onNight: 8.7 },
  { step: '400', hex: '#6E8BC1', onWhite: 3.43, onNight: 5.32 },
  { step: '500', hex: '#4B6DAC', onWhite: 5.14, onNight: 3.55 },
  { step: '600', hex: '#345594', onWhite: 7.31, onNight: 2.5, note: 'logo' },
  { step: '700', hex: '#2B4679', onWhite: 9.31, onNight: 1.96 },
  { step: '800', hex: '#243A63', onWhite: 11.29, onNight: 1.62 },
  { step: '900', hex: '#1C2D4C', onWhite: 13.73, onNight: 1.33 },
  { step: '950', hex: '#0B1527', onWhite: 18.25, onNight: 1, note: 'nuit' },
] as const

export const roles = [
  { name: 'Bleu marque', token: 'brand', hex: '#345594', use: 'Titres, liens, boutons secondaires, motif.' },
  { name: 'Bleu nuit', token: 'night', hex: '#0B1527', use: 'Sections fortes, footer, couleur du texte.' },
  { name: 'Bleu clair', token: 'tint', hex: '#EDF1F8', use: 'Une section sur deux.' },
  { name: 'Blanc cassé', token: 'paper', hex: '#FAF8F4', use: 'Fond principal.' },
  { name: 'Texte secondaire', token: 'ink-soft', hex: '#556079', use: 'Sous-titres, légendes.' },
  { name: 'Ambre', token: 'cta', hex: '#F5A524', use: 'Appels à l’action uniquement, texte nuit dessus.' },
  { name: 'Ambre texte', token: 'cta-ink', hex: '#B4530A', use: 'Texte ambre sur fond clair, rare.' },
  { name: 'Ligne', token: 'line', hex: '#D9DFEA', use: 'Bordures et séparateurs.' },
] as const

export const contrasts = [
  { fg: 'Bleu marque', bg: 'Blanc', ratio: 7.31, verdict: 'ok' },
  { fg: 'Bleu marque', bg: 'Blanc cassé', ratio: 6.89, verdict: 'ok' },
  { fg: 'Bleu marque', bg: 'Bleu clair', ratio: 6.45, verdict: 'ok' },
  { fg: 'Blanc', bg: 'Bleu marque', ratio: 7.31, verdict: 'ok' },
  { fg: 'Blanc', bg: 'Bleu nuit', ratio: 18.25, verdict: 'ok' },
  { fg: 'Bleu 300', bg: 'Bleu nuit', ratio: 8.7, verdict: 'ok' },
  { fg: 'Texte secondaire', bg: 'Blanc cassé', ratio: 5.94, verdict: 'ok' },
  { fg: 'Texte secondaire', bg: 'Bleu clair', ratio: 5.56, verdict: 'ok' },
  { fg: 'Nuit', bg: 'Ambre', ratio: 8.94, verdict: 'ok' },
  { fg: 'Ambre texte', bg: 'Blanc cassé', ratio: 4.73, verdict: 'ok' },
  { fg: 'Ambre', bg: 'Bleu marque', ratio: 3.58, verdict: 'shapes' },
] as const

export const typeScale = [
  { token: 'text-display', role: 'H1 du hero', font: 'Outfit 700', size: 'clamp(2.75rem, 1.5rem + 5.5vw, 6.5rem)', lh: '1,02' },
  { token: 'text-h1', role: 'H1 des pages', font: 'Outfit 700', size: 'clamp(2.5rem, 1.6rem + 3.6vw, 4.5rem)', lh: '1,05' },
  { token: 'text-h2', role: 'Titre de section', font: 'Outfit 600', size: 'clamp(1.875rem, 1.4rem + 1.8vw, 3rem)', lh: '1,1' },
  { token: 'text-h3', role: 'Sous-titre', font: 'Outfit 600', size: 'clamp(1.25rem, 1.1rem + 0.5vw, 1.5rem)', lh: '1,25' },
  { token: 'text-lead', role: 'Introduction', font: 'Source Sans 3', size: 'clamp(1.125rem, 1.05rem + 0.35vw, 1.3125rem)', lh: '1,55' },
  { token: 'text-body', role: 'Texte courant', font: 'Source Sans 3', size: '1.125rem', lh: '1,6' },
  { token: 'text-small', role: 'Petit texte', font: 'Source Sans 3', size: '0.9375rem', lh: '1,5' },
  { token: 'text-label', role: 'Étiquette', font: 'Outfit 500, capitales', size: '0.8125rem', lh: '1,2' },
] as const

export const spacing = [4, 8, 12, 16, 24, 32, 48, 64, 96, 128, 160] as const

export const motion = [
  { name: 'Survol', value: '200 à 400 ms, ease-out', use: 'Boutons, cartes, liens, arc de coin.' },
  { name: 'Entrée de section', value: '600 ms, fondu + 20 px', use: 'Une seule fois, échelonné de 80 ms dans les listes.' },
  { name: 'Ondes du hero', value: 'cycle de 4,2 s, décalage de 350 ms', use: 'Seule animation en boucle du site.' },
  { name: 'Moins d’animations', value: 'prefers-reduced-motion', use: 'Tout est coupé ; les compositions restent complètes.' },
] as const
