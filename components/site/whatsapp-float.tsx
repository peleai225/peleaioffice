import { whatsappUrl } from '@/content/site'
import { WhatsAppIcon } from './icons'

/** Bouton WhatsApp flottant : discret, aux couleurs de la marque, au-dessus des zones sûres du téléphone. */
export function WhatsAppFloat() {
  return (
    <a
      href={whatsappUrl()}
      target="_blank"
      rel="noopener noreferrer"
      className="group fixed z-30 flex size-14 items-center justify-center rounded-full bg-brand text-white shadow-lift transition-[transform,background-color] duration-200 hover:-translate-y-0.5 hover:bg-brand-700"
      style={{
        right: 'max(1rem, env(safe-area-inset-right, 0px))',
        bottom: 'max(1rem, env(safe-area-inset-bottom, 0px))',
      }}
    >
      <WhatsAppIcon className="size-6" />
      <span className="sr-only">Écrire à PeleAI sur WhatsApp (nouvel onglet)</span>
    </a>
  )
}
