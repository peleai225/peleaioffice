import { readFile } from 'node:fs/promises'
import { join } from 'node:path'
import { ImageResponse } from 'next/og'
import { site } from '@/content/site'

export const alt = 'PeleAI — L’Innovation par l’intelligence Artificielle'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

/**
 * Image de partage (WhatsApp, LinkedIn, Facebook, X) générée au build :
 * logo officiel, promesse, et les arcs du logo en filigrane dans le coin.
 */
export default async function OpengraphImage() {
  const logo = await readFile(join(process.cwd(), 'public/brand/logo-bleu.png'))
  const logoSrc = `data:image/png;base64,${logo.toString('base64')}`

  // Quarts d'anneau concentriques aux proportions du logo (rayon intérieur / extérieur = 240 / 350).
  const rings = [360, 470, 580, 690]

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '72px 80px',
          background: '#FAF8F4',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {rings.map((r, i) => (
          <div
            key={r}
            style={{
              position: 'absolute',
              right: -r / 2,
              top: -r / 2,
              width: r,
              height: r,
              borderRadius: '50%',
              border: `${Math.round(r * 0.11)}px solid #345594`,
              opacity: 0.13 - i * 0.025,
            }}
          />
        ))}
        <img src={logoSrc} width={326} height={140} alt="" />
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          <div style={{ fontSize: 68, fontWeight: 700, color: '#345594', lineHeight: 1.05, letterSpacing: -2, maxWidth: 900 }}>
            Faites travailler l’IA pour votre entreprise.
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 20, fontSize: 28, color: '#556079' }}>
            <div style={{ width: 56, height: 8, borderRadius: 4, background: '#F5A524' }} />
            Sites internet · Solutions IA · Formation · {site.city}
          </div>
        </div>
      </div>
    ),
    size,
  )
}
