"use client"

import * as React from "react"
import {
  Search,
  Mail,
  MailOpen,
  Filter,
  Inbox,
  User,
  Sparkles,
  MessageSquare,
} from "lucide-react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Separator } from "@/components/ui/separator"
import { messages as initialMessages } from "@/lib/mock-data"

type MessageItem = (typeof initialMessages)[number]

function typeLabel(type: string) {
  switch (type) {
    case "client":
      return "Client"
    case "prospect":
      return "Prospect"
    case "demo":
      return "Démo"
    default:
      return type
  }
}

function typeBadgeVariant(type: string): "default" | "secondary" | "outline" {
  switch (type) {
    case "client":
      return "default"
    case "prospect":
      return "secondary"
    default:
      return "outline"
  }
}

export default function MessagesPage() {
  const [items, setItems] = React.useState<MessageItem[]>(initialMessages)
  const [searchQuery, setSearchQuery] = React.useState("")
  const [typeFilter, setTypeFilter] = React.useState<string>("all")
  const [readFilter, setReadFilter] = React.useState<string>("all")
  const [selected, setSelected] = React.useState<MessageItem | null>(null)

  const filtered = items.filter((m) => {
    const q = searchQuery.toLowerCase()
    const matchesSearch =
      m.from.toLowerCase().includes(q) ||
      m.email.toLowerCase().includes(q) ||
      m.subject.toLowerCase().includes(q) ||
      m.message.toLowerCase().includes(q)
    const matchesType = typeFilter === "all" || m.type === typeFilter
    const matchesRead =
      readFilter === "all" ||
      (readFilter === "unread" && !m.read) ||
      (readFilter === "read" && m.read)
    return matchesSearch && matchesType && matchesRead
  })

  const stats = {
    total: items.length,
    unread: items.filter((m) => !m.read).length,
    client: items.filter((m) => m.type === "client").length,
  }

  const openMessage = (m: MessageItem) => {
    setSelected(m)
    if (!m.read) {
      setItems((prev) =>
        prev.map((x) => (x.id === m.id ? { ...x, read: true } : x))
      )
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Messages</h1>
          <p className="text-muted-foreground">
            Boîte de réception et demandes entrantes (données de démonstration)
          </p>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Total</CardDescription>
            <CardTitle className="text-2xl flex items-center gap-2">
              <Inbox className="size-5 text-muted-foreground" />
              {stats.total}
            </CardTitle>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Non lus</CardDescription>
            <CardTitle className="text-2xl text-primary flex items-center gap-2">
              <Mail className="size-5" />
              {stats.unread}
            </CardTitle>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Messages clients</CardDescription>
            <CardTitle className="text-2xl flex items-center gap-2">
              <User className="size-5 text-muted-foreground" />
              {stats.client}
            </CardTitle>
          </CardHeader>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="flex flex-1 flex-wrap items-center gap-3">
              <div className="relative flex-1 min-w-[200px] max-w-md">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
                <Input
                  placeholder="Rechercher..."
                  className="pl-9"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <Select value={typeFilter} onValueChange={setTypeFilter}>
                <SelectTrigger className="w-[160px]">
                  <Filter className="mr-2 size-4 shrink-0" />
                  <SelectValue placeholder="Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Tous les types</SelectItem>
                  <SelectItem value="client">Client</SelectItem>
                  <SelectItem value="prospect">Prospect</SelectItem>
                  <SelectItem value="demo">Démo</SelectItem>
                </SelectContent>
              </Select>
              <Select value={readFilter} onValueChange={setReadFilter}>
                <SelectTrigger className="w-[160px]">
                  <SelectValue placeholder="Lecture" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Tous</SelectItem>
                  <SelectItem value="unread">Non lus</SelectItem>
                  <SelectItem value="read">Lus</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-2">
          {filtered.map((m) => (
            <button
              key={m.id}
              type="button"
              onClick={() => openMessage(m)}
              className="w-full text-left rounded-lg border p-4 transition-colors hover:bg-muted/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                <div className="flex items-start gap-3 min-w-0">
                  <div className="mt-0.5 shrink-0">
                    {m.read ? (
                      <MailOpen className="size-5 text-muted-foreground" />
                    ) : (
                      <Mail className="size-5 text-primary" />
                    )}
                  </div>
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="font-medium">{m.from}</span>
                      {!m.read && (
                        <Badge variant="default" className="text-[10px] px-1.5 py-0">
                          Nouveau
                        </Badge>
                      )}
                      <Badge variant={typeBadgeVariant(m.type)} className="text-xs">
                        {typeLabel(m.type)}
                      </Badge>
                    </div>
                    <p className="text-sm font-medium mt-1 truncate">{m.subject}</p>
                    <p className="text-sm text-muted-foreground line-clamp-2 mt-1">
                      {m.message}
                    </p>
                  </div>
                </div>
                <div className="text-xs text-muted-foreground shrink-0 sm:text-right pl-8 sm:pl-0">
                  {new Date(m.date).toLocaleString("fr-FR", {
                    dateStyle: "short",
                    timeStyle: "short",
                  })}
                </div>
              </div>
            </button>
          ))}

          {filtered.length === 0 && (
            <div className="text-center py-12 text-muted-foreground">
              <MessageSquare className="size-10 mx-auto mb-2 opacity-50" />
              <p>Aucun message ne correspond à votre recherche</p>
            </div>
          )}
        </CardContent>
      </Card>

      <Dialog open={!!selected} onOpenChange={(open) => !open && setSelected(null)}>
        <DialogContent className="sm:max-w-lg">
          <DialogHeader>
            <div className="flex items-center gap-2 flex-wrap">
              <DialogTitle className="text-left">{selected?.subject}</DialogTitle>
              {selected && (
                <Badge variant={typeBadgeVariant(selected.type)}>
                  {typeLabel(selected.type)}
                </Badge>
              )}
            </div>
            <DialogDescription className="text-left space-y-1">
              <span className="block font-medium text-foreground">{selected?.from}</span>
              <span className="block text-sm">{selected?.email}</span>
              {selected && (
                <span className="block text-xs text-muted-foreground">
                  {new Date(selected.date).toLocaleString("fr-FR", {
                    dateStyle: "full",
                    timeStyle: "short",
                  })}
                </span>
              )}
            </DialogDescription>
          </DialogHeader>
          <Separator />
          <p className="text-sm leading-relaxed whitespace-pre-wrap">{selected?.message}</p>
          <div className="flex justify-end gap-2 pt-2">
            <Button variant="outline" onClick={() => setSelected(null)}>
              Fermer
            </Button>
            <Button>
              <Sparkles className="mr-2 size-4" />
              Répondre (démo)
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
