"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { useSiteContent } from "@/components/providers/site-content-provider"

export function TrustedBy() {
  const { content } = useSiteContent()
  const clients =
    content.partners.length > 0 ? content.partners : [{ name: "Partenaire" }]

  return (
    <section className="border-y border-border bg-muted/30 py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-medium text-muted-foreground mb-8">
          {content.partnersSectionTitle}
        </p>

        <div className="relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-muted/30 to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-muted/30 to-transparent z-10" />

          <div className="flex animate-scroll">
            {[...clients, ...clients].map((client, i) => (
              <div
                key={`${client.name}-${client.logo ?? "t"}-${i}`}
                className={cn(
                  "flex-shrink-0 mx-8 flex items-center justify-center",
                  "h-14 min-w-[100px] max-w-[200px] px-4 rounded-lg bg-background border border-border"
                )}
              >
                {client.logo ? (
                  // eslint-disable-next-line @next/next/no-img-element -- SVG locaux ; évite soucis next/image + SVG
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="max-h-10 w-auto max-w-[180px] object-contain object-center"
                  />
                ) : (
                  <span className="text-sm font-semibold text-muted-foreground whitespace-nowrap text-center">
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
