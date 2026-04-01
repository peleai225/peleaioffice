"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { TRUSTED_PARTNER_LOGOS } from "@/lib/site-content"
import { useSiteContent } from "@/components/providers/site-content-provider"

export function TrustedBy() {
  const { content } = useSiteContent()
  const clients =
    content.partners.length > 0 ? content.partners : [{ name: "Partenaire" }]

  return (
    <section className="py-10 relative overflow-hidden" style={{ backgroundColor: '#FFFAF4', borderTop: '1px solid rgba(193,68,14,0.12)', borderBottom: '1px solid rgba(193,68,14,0.12)' }}>
      {/* Kente top stripe */}
      <div className="absolute top-0 left-0 right-0 flex h-1 overflow-hidden">
        {['#C1440E','#D4891A','#1B3A6B','#C1440E','#8B5A00','#D4891A','#C1440E','#1B3A6B','#D4891A','#C1440E','#8B5A00','#C1440E','#D4891A','#1B3A6B','#C1440E','#8B5A00'].map((c, i) => (
          <div key={i} className="flex-1 h-full" style={{ backgroundColor: c }} />
        ))}
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-semibold uppercase tracking-widest mb-8" style={{ color: '#C1440E' }}>
          {content.partnersSectionTitle}
        </p>

        <div className="relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-20 z-10" style={{ background: 'linear-gradient(to right, #FFFAF4, transparent)' }} />
          <div className="absolute right-0 top-0 bottom-0 w-20 z-10" style={{ background: 'linear-gradient(to left, #FFFAF4, transparent)' }} />

          <div className="flex animate-scroll">
            {[...clients, ...clients].map((client, i) => (
              <div
                key={`${client.name}-${client.logo ?? "t"}-${i}`}
                className={cn(
                  "flex-shrink-0 mx-8 flex items-center justify-center",
                  "h-14 min-w-[100px] max-w-[200px] px-4 rounded-lg"
                )}
                style={{ backgroundColor: 'white', border: '1.5px solid rgba(193,68,14,0.15)' }}
              >
                {client.logo ? (
                  // eslint-disable-next-line @next/next/no-img-element -- SVG locaux ; évite soucis next/image + SVG
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="max-h-10 w-auto max-w-[180px] object-contain object-center"
                    onError={(e) => {
                      const fallback = TRUSTED_PARTNER_LOGOS[client.name]
                      if (!fallback) return
                      const img = e.currentTarget
                      if (img.src.endsWith(fallback)) return
                      img.src = fallback
                    }}
                  />
                ) : (
                  <span className="text-sm font-semibold whitespace-nowrap text-center" style={{ color: '#6B4423' }}>
                    {client.name}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  )
}
