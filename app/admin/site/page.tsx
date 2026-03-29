"use client"

import * as React from "react"
import {
  mergeIntoSiteContent,
  mergeSiteContent,
  type PartnerEntry,
  type SiteContent,
  type SocialPlatform,
} from "@/lib/site-content"
import { useSiteContent } from "@/components/providers/site-content-provider"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Plus, Trash2, RotateCcw, Save, Info } from "lucide-react"

const SOCIAL_PLATFORMS: SocialPlatform[] = [
  "linkedin",
  "facebook",
  "instagram",
  "tiktok",
  "twitter",
  "github",
  "youtube",
]

export default function AdminSiteContentPage() {
  const { content, setContent, resetToDefaults } = useSiteContent()
  const [draft, setDraft] = React.useState<SiteContent>(content)
  const [saved, setSaved] = React.useState(false)

  React.useEffect(() => {
    setDraft(structuredClone(content))
  }, [content])

  const save = () => {
    setContent(mergeSiteContent(draft))
    setSaved(true)
    window.setTimeout(() => setSaved(false), 2500)
  }

  const reset = () => {
    if (!window.confirm("Réinitialiser tout le contenu du site aux valeurs par défaut ?")) return
    resetToDefaults()
  }

  const patch = (partial: Partial<SiteContent>) => {
    setDraft((d) => mergeIntoSiteContent(d, partial))
  }

  return (
    <div className="space-y-6 max-w-4xl">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Contenu du site</h1>
          <p className="text-muted-foreground text-sm">
            Modifications enregistrées dans ce navigateur (localStorage). Branchez une API pour la
            prod.
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <Button variant="outline" onClick={reset}>
            <RotateCcw className="mr-2 size-4" />
            Réinitialiser
          </Button>
          <Button onClick={save}>
            <Save className="mr-2 size-4" />
            Enregistrer
          </Button>
        </div>
      </div>

      {saved && (
        <Alert>
          <Info className="size-4" />
          <AlertTitle>Enregistré</AlertTitle>
          <AlertDescription>
            Rechargez les pages publiques pour voir le favicon / titre mis à jour partout.
          </AlertDescription>
        </Alert>
      )}

      <Alert variant="default" className="border-primary/30 bg-primary/5">
        <Info className="size-4 text-primary" />
        <AlertTitle className="text-primary">Logo & médias</AlertTitle>
        <AlertDescription>
          Déposez les fichiers dans <code className="text-xs">public/images/</code> (ex.{" "}
          <code className="text-xs">peleai-logo-on-white.png</code>,{" "}
          <code className="text-xs">peleai-logo-on-blue.png</code>) puis indiquez le chemin dans{" "}
          <code className="text-xs">public</code>) ou une URL absolue hébergée ailleurs.
        </AlertDescription>
      </Alert>

      <Tabs defaultValue="brand" className="space-y-6">
        <TabsList className="flex flex-wrap h-auto gap-1">
          <TabsTrigger value="brand">Marque</TabsTrigger>
          <TabsTrigger value="contact">Contact</TabsTrigger>
          <TabsTrigger value="social">Réseaux</TabsTrigger>
          <TabsTrigger value="partners">Partenaires</TabsTrigger>
          <TabsTrigger value="solutions">Solutions</TabsTrigger>
          <TabsTrigger value="portfolio">Portfolio</TabsTrigger>
        </TabsList>

        <TabsContent value="brand">
          <Card>
            <CardHeader>
              <CardTitle>Identité & SEO de base</CardTitle>
              <CardDescription>Logo, favicon, textes affichés sur le site.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label>Nom du site</Label>
                  <Input
                    value={draft.brand.siteName}
                    onChange={(e) =>
                      patch({ brand: { ...draft.brand, siteName: e.target.value } })
                    }
                  />
                </div>
                <div className="space-y-2 sm:col-span-2">
                  <Label>Logo — fond blanc / clair (header)</Label>
                  <Input
                    value={draft.brand.logoOnWhiteBg}
                    onChange={(e) =>
                      patch({ brand: { ...draft.brand, logoOnWhiteBg: e.target.value } })
                    }
                    placeholder="/images/peleai-logo-on-white.png"
                  />
                </div>
                <div className="space-y-2 sm:col-span-2">
                  <Label>Logo — fond sombre (footer noir)</Label>
                  <Input
                    value={draft.brand.logoOnBlueBg}
                    onChange={(e) =>
                      patch({ brand: { ...draft.brand, logoOnBlueBg: e.target.value } })
                    }
                    placeholder="/images/peleai-logo-on-blue.png"
                  />
                </div>
                <div className="space-y-2 sm:col-span-2">
                  <Label>URL du favicon</Label>
                  <Input
                    value={draft.brand.faviconUrl}
                    onChange={(e) =>
                      patch({ brand: { ...draft.brand, faviconUrl: e.target.value } })
                    }
                  />
                </div>
                <div className="space-y-2 sm:col-span-2">
                  <Label>Phrase sous le logo (footer)</Label>
                  <Textarea
                    rows={3}
                    value={draft.brand.footerTagline}
                    onChange={(e) =>
                      patch({ brand: { ...draft.brand, footerTagline: e.target.value } })
                    }
                  />
                </div>
                <div className="space-y-2 sm:col-span-2">
                  <Label>Titre par défaut (balise {"<title>"})</Label>
                  <Input
                    value={draft.brand.defaultTitle}
                    onChange={(e) =>
                      patch({ brand: { ...draft.brand, defaultTitle: e.target.value } })
                    }
                  />
                </div>
                <div className="space-y-2 sm:col-span-2">
                  <Label>Meta description par défaut</Label>
                  <Textarea
                    rows={2}
                    value={draft.brand.defaultDescription}
                    onChange={(e) =>
                      patch({ brand: { ...draft.brand, defaultDescription: e.target.value } })
                    }
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="contact">
          <Card>
            <CardHeader>
              <CardTitle>Coordonnées</CardTitle>
              <CardDescription>Affichées sur la page Contact et dans le footer.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label>Email</Label>
                  <Input
                    value={draft.contact.email}
                    onChange={(e) =>
                      patch({ contact: { ...draft.contact, email: e.target.value } })
                    }
                  />
                </div>
                <div className="space-y-2">
                  <Label>Téléphone (affiché)</Label>
                  <Input
                    value={draft.contact.phoneDisplay}
                    onChange={(e) =>
                      patch({ contact: { ...draft.contact, phoneDisplay: e.target.value } })
                    }
                  />
                </div>
                <div className="space-y-2">
                  <Label>Lien tel (ex. +22900000000)</Label>
                  <Input
                    value={draft.contact.phoneTelHref}
                    onChange={(e) =>
                      patch({ contact: { ...draft.contact, phoneTelHref: e.target.value } })
                    }
                  />
                </div>
                <div className="space-y-2">
                  <Label>WhatsApp (chiffres pour wa.me, ex. 2250506805382)</Label>
                  <Input
                    value={draft.contact.whatsappDigits}
                    onChange={(e) =>
                      patch({ contact: { ...draft.contact, whatsappDigits: e.target.value } })
                    }
                  />
                </div>
                <div className="space-y-2 sm:col-span-2">
                  <Label>Adresse</Label>
                  <Input
                    value={draft.contact.address}
                    onChange={(e) =>
                      patch({ contact: { ...draft.contact, address: e.target.value } })
                    }
                  />
                </div>
                <Separator className="sm:col-span-2" />
                <div className="space-y-2">
                  <Label>Lun–Ven</Label>
                  <Input
                    value={draft.contact.openingHoursWeekdays}
                    onChange={(e) =>
                      patch({
                        contact: { ...draft.contact, openingHoursWeekdays: e.target.value },
                      })
                    }
                  />
                </div>
                <div className="space-y-2">
                  <Label>Samedi</Label>
                  <Input
                    value={draft.contact.openingHoursSaturday}
                    onChange={(e) =>
                      patch({
                        contact: { ...draft.contact, openingHoursSaturday: e.target.value },
                      })
                    }
                  />
                </div>
                <div className="space-y-2">
                  <Label>Dimanche</Label>
                  <Input
                    value={draft.contact.openingHoursSunday}
                    onChange={(e) =>
                      patch({
                        contact: { ...draft.contact, openingHoursSunday: e.target.value },
                      })
                    }
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="social">
          <Card>
            <CardHeader>
              <CardTitle>Réseaux sociaux</CardTitle>
              <CardDescription>Liens du footer et du hero portfolio.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {draft.social.map((row, i) => (
                <div key={i} className="flex flex-col gap-2 sm:flex-row sm:items-end">
                  <div className="space-y-2 flex-1">
                    <Label>Réseau</Label>
                    <Select
                      value={row.platform}
                      onValueChange={(v) => {
                        const next = [...draft.social]
                        next[i] = { ...next[i], platform: v as SocialPlatform }
                        patch({ social: next })
                      }}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {SOCIAL_PLATFORMS.map((p) => (
                          <SelectItem key={p} value={p}>
                            {p}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2 flex-[2]">
                    <Label>URL</Label>
                    <Input
                      value={row.url}
                      onChange={(e) => {
                        const next = [...draft.social]
                        next[i] = { ...next[i], url: e.target.value }
                        patch({ social: next })
                      }}
                    />
                  </div>
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    onClick={() => patch({ social: draft.social.filter((_, j) => j !== i) })}
                  >
                    <Trash2 className="size-4" />
                  </Button>
                </div>
              ))}
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={() =>
                  patch({
                    social: [...draft.social, { platform: "linkedin", url: "https://" }],
                  })
                }
              >
                <Plus className="mr-2 size-4" />
                Ajouter un lien
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="partners">
          <Card>
            <CardHeader>
              <CardTitle>Partenaires (bandeau « Ils nous font confiance »)</CardTitle>
              <CardDescription>
                Nom affiché (accessibilité) et logo optionnel — chemins sous{" "}
                <code className="text-xs">public</code>, ex.{" "}
                <code className="text-xs">/realisations/khara.svg</code>.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label>Titre de la section</Label>
                <Input
                  value={draft.partnersSectionTitle}
                  onChange={(e) => patch({ partnersSectionTitle: e.target.value })}
                />
              </div>
              <div className="space-y-3">
                <Label>Liste</Label>
                {draft.partners.map((partner: PartnerEntry, i: number) => (
                  <div
                    key={i}
                    className="flex flex-col gap-3 rounded-lg border border-border p-3 sm:flex-row sm:items-end"
                  >
                    <div className="grid flex-1 gap-3 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label className="text-xs">Nom</Label>
                        <Input
                          value={partner.name}
                          onChange={(e) => {
                            const next = [...draft.partners]
                            next[i] = { ...next[i], name: e.target.value }
                            patch({ partners: next })
                          }}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label className="text-xs">Logo (URL ou chemin)</Label>
                        <Input
                          placeholder="/realisations/…"
                          value={partner.logo ?? ""}
                          onChange={(e) => {
                            const v = e.target.value.trim()
                            const next = [...draft.partners]
                            next[i] = { ...next[i], logo: v || undefined }
                            patch({ partners: next })
                          }}
                        />
                      </div>
                    </div>
                    <Button
                      type="button"
                      variant="outline"
                      size="icon"
                      className="shrink-0"
                      onClick={() =>
                        patch({ partners: draft.partners.filter((_, j) => j !== i) })
                      }
                    >
                      <Trash2 className="size-4" />
                    </Button>
                  </div>
                ))}
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={() =>
                    patch({
                      partners: [...draft.partners, { name: "", logo: undefined }],
                    })
                  }
                >
                  <Plus className="mr-2 size-4" />
                  Ajouter un partenaire
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="solutions">
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Section d&apos;accueil « Solutions phares »</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label>Badge</Label>
                  <Input
                    value={draft.featuredSolutionsSection.badgeLabel}
                    onChange={(e) =>
                      patch({
                        featuredSolutionsSection: {
                          ...draft.featuredSolutionsSection,
                          badgeLabel: e.target.value,
                        },
                      })
                    }
                  />
                </div>
                <div className="space-y-2">
                  <Label>Titre</Label>
                  <Input
                    value={draft.featuredSolutionsSection.title}
                    onChange={(e) =>
                      patch({
                        featuredSolutionsSection: {
                          ...draft.featuredSolutionsSection,
                          title: e.target.value,
                        },
                      })
                    }
                  />
                </div>
                <div className="space-y-2">
                  <Label>Sous-titre</Label>
                  <Textarea
                    rows={2}
                    value={draft.featuredSolutionsSection.subtitle}
                    onChange={(e) =>
                      patch({
                        featuredSolutionsSection: {
                          ...draft.featuredSolutionsSection,
                          subtitle: e.target.value,
                        },
                      })
                    }
                  />
                </div>
              </CardContent>
            </Card>

            {draft.developedSolutions.map((sol, idx) => (
              <Card key={sol.id}>
                <CardHeader>
                  <CardTitle className="text-lg">
                    Solution : {sol.name} <span className="text-muted-foreground">({sol.id})</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="grid gap-3 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label>Nom</Label>
                      <Input
                        value={sol.name}
                        onChange={(e) => {
                          const next = [...draft.developedSolutions]
                          next[idx] = { ...next[idx], name: e.target.value }
                          patch({ developedSolutions: next })
                        }}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>Slug URL interne</Label>
                      <Input
                        value={sol.href}
                        onChange={(e) => {
                          const next = [...draft.developedSolutions]
                          next[idx] = { ...next[idx], href: e.target.value }
                          patch({ developedSolutions: next })
                        }}
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label>Accroche</Label>
                    <Input
                      value={sol.tagline}
                      onChange={(e) => {
                        const next = [...draft.developedSolutions]
                        next[idx] = { ...next[idx], tagline: e.target.value }
                        patch({ developedSolutions: next })
                      }}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Description</Label>
                    <Textarea
                      rows={3}
                      value={sol.description}
                      onChange={(e) => {
                        const next = [...draft.developedSolutions]
                        next[idx] = { ...next[idx], description: e.target.value }
                        patch({ developedSolutions: next })
                      }}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Points forts (une ligne par puce)</Label>
                    <Textarea
                      rows={4}
                      value={sol.features.join("\n")}
                      onChange={(e) => {
                        const next = [...draft.developedSolutions]
                        next[idx] = {
                          ...next[idx],
                          features: e.target.value
                            .split("\n")
                            .map((s) => s.trim())
                            .filter(Boolean),
                        }
                        patch({ developedSolutions: next })
                      }}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Couleur carte</Label>
                    <Select
                      value={sol.color}
                      onValueChange={(v) => {
                        const next = [...draft.developedSolutions]
                        next[idx] = { ...next[idx], color: v as "primary" | "accent" }
                        patch({ developedSolutions: next })
                      }}
                    >
                      <SelectTrigger className="max-w-xs">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="primary">Primaire</SelectItem>
                        <SelectItem value="accent">Accent</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="portfolio">
          <Card>
            <CardHeader>
              <CardTitle>Hero portfolio</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {(
                [
                  ["heroBadge", "Badge"],
                  ["heroName", "Prénom / début du nom"],
                  ["heroNameHighlight", "Nom mis en avant"],
                  ["heroSubtitle", "Sous-titre (carte photo)"],
                  [
                    "heroPortraitUrl",
                    "Photo hero (chemin public, ex. /images/portfolio/photo.png)",
                  ],
                  ["heroLocationLine", "Ligne localisation"],
                  ["heroExperienceLine", "Ligne expérience"],
                  ["linkedinButtonUrl", "URL bouton LinkedIn"],
                ] as const
              ).map(([key, label]) => (
                <div key={key} className="space-y-2">
                  <Label>{label}</Label>
                  <Input
                    value={draft.portfolio[key] as string}
                    onChange={(e) =>
                      patch({
                        portfolio: { ...draft.portfolio, [key]: e.target.value },
                      })
                    }
                  />
                </div>
              ))}
              <div className="space-y-2">
                <Label>Biographie</Label>
                <Textarea
                  rows={5}
                  value={draft.portfolio.heroBio}
                  onChange={(e) =>
                    patch({ portfolio: { ...draft.portfolio, heroBio: e.target.value } })
                  }
                />
              </div>
              <div className="space-y-2">
                <Label>Titre section « À propos »</Label>
                <Input
                  value={draft.portfolio.aboutSectionTitle}
                  onChange={(e) =>
                    patch({
                      portfolio: { ...draft.portfolio, aboutSectionTitle: e.target.value },
                    })
                  }
                />
              </div>
              <div className="space-y-2">
                <Label>Texte « À propos de moi » (page portfolio)</Label>
                <Textarea
                  rows={8}
                  value={draft.portfolio.aboutSectionBody}
                  onChange={(e) =>
                    patch({
                      portfolio: { ...draft.portfolio, aboutSectionBody: e.target.value },
                    })
                  }
                />
              </div>
            </CardContent>
          </Card>

          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Projets majeurs (grille)</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {draft.portfolio.projects.map((proj, i) => (
                <div key={proj.id} className="rounded-lg border p-4 space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-sm text-muted-foreground">Projet {i + 1}</span>
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      onClick={() =>
                        patch({
                          portfolio: {
                            ...draft.portfolio,
                            projects: draft.portfolio.projects.filter((_, j) => j !== i),
                          },
                        })
                      }
                    >
                      <Trash2 className="size-4" />
                    </Button>
                  </div>
                  <div className="grid gap-3 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label>ID</Label>
                      <Input
                        value={proj.id}
                        onChange={(e) => {
                          const next = [...draft.portfolio.projects]
                          next[i] = { ...next[i], id: e.target.value }
                          patch({ portfolio: { ...draft.portfolio, projects: next } })
                        }}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>Nom</Label>
                      <Input
                        value={proj.name}
                        onChange={(e) => {
                          const next = [...draft.portfolio.projects]
                          next[i] = { ...next[i], name: e.target.value }
                          patch({ portfolio: { ...draft.portfolio, projects: next } })
                        }}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>Catégorie</Label>
                      <Input
                        value={proj.category}
                        onChange={(e) => {
                          const next = [...draft.portfolio.projects]
                          next[i] = { ...next[i], category: e.target.value }
                          patch({ portfolio: { ...draft.portfolio, projects: next } })
                        }}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>Lien (path)</Label>
                      <Input
                        value={proj.link}
                        onChange={(e) => {
                          const next = [...draft.portfolio.projects]
                          next[i] = { ...next[i], link: e.target.value }
                          patch({ portfolio: { ...draft.portfolio, projects: next } })
                        }}
                      />
                    </div>
                    <div className="space-y-2 sm:col-span-2">
                      <Label>Description</Label>
                      <Textarea
                        rows={2}
                        value={proj.description}
                        onChange={(e) => {
                          const next = [...draft.portfolio.projects]
                          next[i] = { ...next[i], description: e.target.value }
                          patch({ portfolio: { ...draft.portfolio, projects: next } })
                        }}
                      />
                    </div>
                    <div className="space-y-2 sm:col-span-2">
                      <Label>Image (URL ou /realisations/…)</Label>
                      <Input
                        value={proj.image ?? ""}
                        placeholder="/realisations/mon-projet.svg"
                        onChange={(e) => {
                          const next = [...draft.portfolio.projects]
                          next[i] = { ...next[i], image: e.target.value || undefined }
                          patch({ portfolio: { ...draft.portfolio, projects: next } })
                        }}
                      />
                    </div>
                  </div>
                </div>
              ))}
              <Button
                type="button"
                variant="outline"
                onClick={() =>
                  patch({
                    portfolio: {
                      ...draft.portfolio,
                      projects: [
                        ...draft.portfolio.projects,
                        {
                          id: `p-${Date.now()}`,
                          name: "Nouveau projet",
                          category: "Web",
                          description: "",
                          link: "/",
                          image: undefined,
                        },
                      ],
                    },
                  })
                }
              >
                <Plus className="mr-2 size-4" />
                Ajouter un projet
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
