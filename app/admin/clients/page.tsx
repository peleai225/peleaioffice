"use client"

import * as React from "react"
import {
  Search,
  Plus,
  MoreHorizontal,
  Mail,
  Phone,
  Building2,
  Filter,
  Download,
  Trash2,
  Edit,
  Eye,
} from "lucide-react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { clients } from "@/lib/mock-data"

function formatCurrency(value: number) {
  return new Intl.NumberFormat("fr-FR").format(value) + " FCFA"
}

export default function ClientsPage() {
  const [searchQuery, setSearchQuery] = React.useState("")
  const [statusFilter, setStatusFilter] = React.useState<string>("all")
  const [selectedClients, setSelectedClients] = React.useState<string[]>([])
  const [isAddDialogOpen, setIsAddDialogOpen] = React.useState(false)

  const filteredClients = clients.filter((client) => {
    const matchesSearch =
      client.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      client.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
      client.email.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesStatus = statusFilter === "all" || client.status === statusFilter
    return matchesSearch && matchesStatus
  })

  const toggleSelectAll = () => {
    if (selectedClients.length === filteredClients.length) {
      setSelectedClients([])
    } else {
      setSelectedClients(filteredClients.map((c) => c.id))
    }
  }

  const toggleSelectClient = (id: string) => {
    setSelectedClients((prev) =>
      prev.includes(id) ? prev.filter((cid) => cid !== id) : [...prev, id]
    )
  }

  const stats = {
    total: clients.length,
    active: clients.filter((c) => c.status === "active").length,
    pending: clients.filter((c) => c.status === "pending").length,
    totalRevenue: clients.reduce((sum, c) => sum + c.totalRevenue, 0),
  }

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Clients</h1>
          <p className="text-muted-foreground">
            Gérez vos clients et leurs informations
          </p>
        </div>
        <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="mr-2 size-4" />
              Nouveau client
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[500px]">
            <DialogHeader>
              <DialogTitle>Ajouter un client</DialogTitle>
              <DialogDescription>
                Remplissez les informations du nouveau client
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Nom complet</Label>
                  <Input id="name" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company">Entreprise</Label>
                  <Input id="company" placeholder="Nom de l'entreprise" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="email@example.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Téléphone</Label>
                <Input id="phone" placeholder="+225 XX XX XX XX XX" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="status">Statut</Label>
                <Select defaultValue="pending">
                  <SelectTrigger>
                    <SelectValue placeholder="Sélectionner un statut" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="active">Actif</SelectItem>
                    <SelectItem value="pending">En attente</SelectItem>
                    <SelectItem value="inactive">Inactif</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setIsAddDialogOpen(false)}>
                Annuler
              </Button>
              <Button onClick={() => setIsAddDialogOpen(false)}>
                Ajouter le client
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Total clients</CardDescription>
            <CardTitle className="text-2xl">{stats.total}</CardTitle>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Clients actifs</CardDescription>
            <CardTitle className="text-2xl text-green-600">{stats.active}</CardTitle>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardDescription>En attente</CardDescription>
            <CardTitle className="text-2xl text-yellow-600">{stats.pending}</CardTitle>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardDescription>CA Total</CardDescription>
            <CardTitle className="text-xl">{formatCurrency(stats.totalRevenue)}</CardTitle>
          </CardHeader>
        </Card>
      </div>

      {/* Filters and Actions */}
      <Card>
        <CardHeader>
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="flex flex-1 items-center gap-4">
              <div className="relative flex-1 max-w-sm">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
                <Input
                  placeholder="Rechercher un client..."
                  className="pl-9"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="w-[150px]">
                  <Filter className="mr-2 size-4" />
                  <SelectValue placeholder="Statut" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Tous</SelectItem>
                  <SelectItem value="active">Actifs</SelectItem>
                  <SelectItem value="pending">En attente</SelectItem>
                  <SelectItem value="inactive">Inactifs</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex items-center gap-2">
              {selectedClients.length > 0 && (
                <>
                  <span className="text-sm text-muted-foreground">
                    {selectedClients.length} sélectionné(s)
                  </span>
                  <Button variant="outline" size="sm">
                    <Trash2 className="mr-2 size-4" />
                    Supprimer
                  </Button>
                </>
              )}
              <Button variant="outline" size="sm">
                <Download className="mr-2 size-4" />
                Exporter
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-12">
                  <Checkbox
                    checked={
                      selectedClients.length === filteredClients.length &&
                      filteredClients.length > 0
                    }
                    onCheckedChange={toggleSelectAll}
                  />
                </TableHead>
                <TableHead>Client</TableHead>
                <TableHead>Contact</TableHead>
                <TableHead>Projets</TableHead>
                <TableHead>CA Généré</TableHead>
                <TableHead>Statut</TableHead>
                <TableHead>Inscrit le</TableHead>
                <TableHead className="w-12"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredClients.map((client) => (
                <TableRow key={client.id}>
                  <TableCell>
                    <Checkbox
                      checked={selectedClients.includes(client.id)}
                      onCheckedChange={() => toggleSelectClient(client.id)}
                    />
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <Avatar>
                        <AvatarImage src={client.avatar} />
                        <AvatarFallback>
                          {client.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium">{client.name}</p>
                        <p className="text-sm text-muted-foreground flex items-center gap-1">
                          <Building2 className="size-3" />
                          {client.company}
                        </p>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="space-y-1">
                      <p className="text-sm flex items-center gap-1">
                        <Mail className="size-3 text-muted-foreground" />
                        {client.email}
                      </p>
                      <p className="text-sm flex items-center gap-1">
                        <Phone className="size-3 text-muted-foreground" />
                        {client.phone}
                      </p>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant="secondary">{client.totalProjects} projets</Badge>
                  </TableCell>
                  <TableCell className="font-medium">
                    {formatCurrency(client.totalRevenue)}
                  </TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        client.status === "active"
                          ? "default"
                          : client.status === "pending"
                          ? "secondary"
                          : "outline"
                      }
                    >
                      {client.status === "active"
                        ? "Actif"
                        : client.status === "pending"
                        ? "En attente"
                        : "Inactif"}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-muted-foreground">
                    {new Date(client.joinedAt).toLocaleDateString("fr-FR")}
                  </TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <MoreHorizontal className="size-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>
                          <Eye className="mr-2 size-4" />
                          Voir le profil
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Edit className="mr-2 size-4" />
                          Modifier
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Mail className="mr-2 size-4" />
                          Envoyer un email
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="text-destructive">
                          <Trash2 className="mr-2 size-4" />
                          Supprimer
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>

          {filteredClients.length === 0 && (
            <div className="text-center py-10">
              <p className="text-muted-foreground">Aucun client trouvé</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
