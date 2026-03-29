"use client"

import * as React from "react"
import {
  Search,
  Download,
  FileText,
  CheckCircle2,
  Clock,
  AlertTriangle,
} from "lucide-react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { invoices } from "@/lib/mock-data"

function formatCurrency(value: number) {
  return new Intl.NumberFormat("fr-FR").format(value) + " FCFA"
}

function statusConfig(status: string) {
  switch (status) {
    case "paid":
      return {
        label: "Payée",
        icon: CheckCircle2,
        className: "bg-green-500/10 text-green-700 dark:text-green-400",
      }
    case "pending":
      return {
        label: "En attente",
        icon: Clock,
        className: "bg-amber-500/10 text-amber-700 dark:text-amber-400",
      }
    case "overdue":
      return {
        label: "En retard",
        icon: AlertTriangle,
        className: "bg-red-500/10 text-red-700 dark:text-red-400",
      }
    default:
      return {
        label: status,
        icon: FileText,
        className: "",
      }
  }
}

export default function InvoicesPage() {
  const [searchQuery, setSearchQuery] = React.useState("")
  const [statusFilter, setStatusFilter] = React.useState<string>("all")

  const filtered = invoices.filter((inv) => {
    const q = searchQuery.toLowerCase()
    const matchesSearch =
      inv.client.toLowerCase().includes(q) ||
      inv.project.toLowerCase().includes(q) ||
      inv.id.toLowerCase().includes(q)
    const matchesStatus = statusFilter === "all" || inv.status === statusFilter
    return matchesSearch && matchesStatus
  })

  const stats = {
    total: invoices.reduce((s, i) => s + i.amount, 0),
    paid: invoices.filter((i) => i.status === "paid").length,
    pending: invoices.filter((i) => i.status === "pending").length,
    overdue: invoices.filter((i) => i.status === "overdue").length,
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Factures</h1>
          <p className="text-muted-foreground">
            Suivi des factures et paiements (données de démonstration)
          </p>
        </div>
        <Button variant="outline" size="sm">
          <Download className="mr-2 size-4" />
          Exporter
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Montant total (toutes)</CardDescription>
            <CardTitle className="text-xl tabular-nums">
              {formatCurrency(stats.total)}
            </CardTitle>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Payées</CardDescription>
            <CardTitle className="text-2xl text-green-600 tabular-nums">
              {stats.paid}
            </CardTitle>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardDescription>En attente</CardDescription>
            <CardTitle className="text-2xl text-amber-600 tabular-nums">
              {stats.pending}
            </CardTitle>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardDescription>En retard</CardDescription>
            <CardTitle className="text-2xl text-red-600 tabular-nums">
              {stats.overdue}
            </CardTitle>
          </CardHeader>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <CardTitle className="text-lg">Liste des factures</CardTitle>
              <CardDescription>{invoices.length} factures enregistrées</CardDescription>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <div className="relative flex-1 min-w-[200px] max-w-sm">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
                <Input
                  placeholder="Client, projet, n°..."
                  className="pl-9"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="w-[160px]">
                  <SelectValue placeholder="Statut" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Tous les statuts</SelectItem>
                  <SelectItem value="paid">Payées</SelectItem>
                  <SelectItem value="pending">En attente</SelectItem>
                  <SelectItem value="overdue">En retard</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>N°</TableHead>
                <TableHead>Client</TableHead>
                <TableHead>Projet</TableHead>
                <TableHead className="text-right">Montant</TableHead>
                <TableHead>Échéance</TableHead>
                <TableHead>Payée le</TableHead>
                <TableHead>Statut</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filtered.map((inv) => {
                const cfg = statusConfig(inv.status)
                const Icon = cfg.icon
                return (
                  <TableRow key={inv.id}>
                    <TableCell className="font-mono text-sm">{inv.id}</TableCell>
                    <TableCell className="font-medium">{inv.client}</TableCell>
                    <TableCell className="text-muted-foreground">{inv.project}</TableCell>
                    <TableCell className="text-right tabular-nums font-medium">
                      {formatCurrency(inv.amount)}
                    </TableCell>
                    <TableCell className="text-muted-foreground">
                      {new Date(inv.dueDate).toLocaleDateString("fr-FR")}
                    </TableCell>
                    <TableCell className="text-muted-foreground">
                      {inv.paidDate
                        ? new Date(inv.paidDate).toLocaleDateString("fr-FR")
                        : "—"}
                    </TableCell>
                    <TableCell>
                      <Badge className={cfg.className}>
                        <Icon className="mr-1 size-3" />
                        {cfg.label}
                      </Badge>
                    </TableCell>
                  </TableRow>
                )
              })}
            </TableBody>
          </Table>
          {filtered.length === 0 && (
            <p className="text-center py-10 text-muted-foreground">Aucune facture trouvée</p>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
