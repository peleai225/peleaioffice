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
    <section className="py-10" style={{ backgroundColor: '#F8FAFC', borderTop: '1px solid #E2E8F0', borderBottom: '1px solid #E2E8F0' }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-semibold uppercase tracking-widest mb-8" style={{ color: '#94A3B8' }}>
          {content.partnersSectionTitle}
        </p>

        <div className="relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-16 z-10" style={{ background: 'linear-gradient(to right, #F8FAFC, transparent)' }} />
          <div className="absolute right-0 top-0 bottom-0 w-16 z-10" style={{ background: 'linear-gradient(to left, #F8FAFC, transparent)' }} />

          <div className="flex animate-scroll">
            {[...clients, ...clients].map((client, i) => (
              <div
                key={`${client.name}-${i}`}
                className={cn(
                  "flex-shrink-0 mx-6 flex items-center justify-center",
                  "h-12 min-w-[100px] max-w-[180px] px-4 rounded-xl bg-white"
                )}
                style={{ border: '1px solid #E2E8F0' }}
              >
                {client.logo ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="max-h-8 w-auto max-w-[160px] object-contain"
                    onError={(e) => {
                      const fallback = TRUSTED_PARTNER_LOGOS[client.name]
                      if (!fallback) return
                      const img = e.currentTarget
                      if (img.src.endsWith(fallback)) return
                      img.src = fallback
                    }}
                  />
                ) : (
                  <span className="text-sm font-semibold whitespace-nowrap" style={{ color: '#94A3B8' }}>
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
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
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
