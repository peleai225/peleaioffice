"use client"

import * as React from "react"
import { Building2, Bell, Shield, Mail } from "lucide-react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Switch } from "@/components/ui/switch"

export default function SettingsPage() {
  const [emailNewMessages, setEmailNewMessages] = React.useState(true)
  const [emailInvoices, setEmailInvoices] = React.useState(true)
  const [emailWeekly, setEmailWeekly] = React.useState(false)

  return (
    <div className="space-y-6 max-w-3xl">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Paramètres</h1>
        <p className="text-muted-foreground">
          Préférences du backoffice (aucune sauvegarde — données de démonstration)
        </p>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <Building2 className="size-5 text-muted-foreground" />
            <CardTitle className="text-lg">Organisation</CardTitle>
          </div>
          <CardDescription>
            Informations affichées dans les documents et l&apos;interface
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="org-name">Nom de l&apos;agence</Label>
            <Input id="org-name" defaultValue="PeleAI" readOnly className="bg-muted/50" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="org-email">Email de contact</Label>
            <Input
              id="org-email"
              type="email"
              defaultValue="contact@peleai.ci"
              readOnly
              className="bg-muted/50"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="org-phone">Téléphone</Label>
            <Input
              id="org-phone"
              defaultValue="+225 XX XX XX XX XX"
              readOnly
              className="bg-muted/50"
            />
          </div>
          <Button type="button" variant="secondary" disabled>
            Enregistrer (bientôt avec base de données)
          </Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <Bell className="size-5 text-muted-foreground" />
            <CardTitle className="text-lg">Notifications</CardTitle>
          </div>
          <CardDescription>Choix conservés uniquement dans cette session (démo)</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center justify-between gap-4">
            <div className="space-y-0.5">
              <Label className="text-base">Nouveaux messages</Label>
              <p className="text-sm text-muted-foreground flex items-center gap-1">
                <Mail className="size-3" />
                Recevoir un email lors d&apos;un message client
              </p>
            </div>
            <Switch checked={emailNewMessages} onCheckedChange={setEmailNewMessages} />
          </div>
          <Separator />
          <div className="flex items-center justify-between gap-4">
            <div className="space-y-0.5">
              <Label className="text-base">Factures et paiements</Label>
              <p className="text-sm text-muted-foreground">
                Rappels d&apos;échéance et confirmations de paiement
              </p>
            </div>
            <Switch checked={emailInvoices} onCheckedChange={setEmailInvoices} />
          </div>
          <Separator />
          <div className="flex items-center justify-between gap-4">
            <div className="space-y-0.5">
              <Label className="text-base">Résumé hebdomadaire</Label>
              <p className="text-sm text-muted-foreground">
                Synthèse projets et indicateurs chaque lundi
              </p>
            </div>
            <Switch checked={emailWeekly} onCheckedChange={setEmailWeekly} />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <Shield className="size-5 text-muted-foreground" />
            <CardTitle className="text-lg">Sécurité</CardTitle>
          </div>
          <CardDescription>
            L&apos;authentification et la gestion des comptes seront ajoutées avec la base de données
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="rounded-lg border bg-muted/30 p-4 text-sm text-muted-foreground">
            Connexion sécurisée, rôles administrateur et journal d&apos;audit : prévu pour la
            prochaine phase (données réelles).
          </div>
          <Button type="button" variant="outline" disabled>
            Changer le mot de passe
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
