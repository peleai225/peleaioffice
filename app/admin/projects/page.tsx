"use client"

import * as React from "react"
import {
  Search,
  Plus,
  MoreHorizontal,
  Calendar,
  Users,
  Filter,
  Download,
  Trash2,
  Edit,
  Eye,
  Clock,
  CheckCircle2,
  AlertCircle,
  LayoutGrid,
  List,
} from "lucide-react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Progress } from "@/components/ui/progress"
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
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { projects, clients, teamMembers } from "@/lib/mock-data"

function formatCurrency(value: number) {
  return new Intl.NumberFormat("fr-FR").format(value) + " FCFA"
}

function getStatusConfig(status: string) {
  switch (status) {
    case "completed":
      return {
        label: "Terminé",
        variant: "default" as const,
        className: "bg-green-500/10 text-green-600 hover:bg-green-500/20",
        icon: CheckCircle2,
      }
    case "in-progress":
      return {
        label: "En cours",
        variant: "default" as const,
        className: "bg-blue-500/10 text-blue-600 hover:bg-blue-500/20",
        icon: Clock,
      }
    case "pending":
      return {
        label: "En attente",
        variant: "default" as const,
        className: "bg-yellow-500/10 text-yellow-600 hover:bg-yellow-500/20",
        icon: AlertCircle,
      }
    default:
      return {
        label: status,
        variant: "secondary" as const,
        className: "",
        icon: Clock,
      }
  }
}

export default function ProjectsPage() {
  const [searchQuery, setSearchQuery] = React.useState("")
  const [statusFilter, setStatusFilter] = React.useState<string>("all")
  const [typeFilter, setTypeFilter] = React.useState<string>("all")
  const [viewMode, setViewMode] = React.useState<"table" | "kanban">("table")
  const [isAddDialogOpen, setIsAddDialogOpen] = React.useState(false)

  const filteredProjects = projects.filter((project) => {
    const matchesSearch =
      project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.client.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesStatus = statusFilter === "all" || project.status === statusFilter
    const matchesType = typeFilter === "all" || project.type === typeFilter
    return matchesSearch && matchesStatus && matchesType
  })

  const projectTypes = [...new Set(projects.map((p) => p.type))]

  const stats = {
    total: projects.length,
    inProgress: projects.filter((p) => p.status === "in-progress").length,
    completed: projects.filter((p) => p.status === "completed").length,
    pending: projects.filter((p) => p.status === "pending").length,
    totalBudget: projects.reduce((sum, p) => sum + p.budget, 0),
  }

  const groupedProjects = {
    pending: filteredProjects.filter((p) => p.status === "pending"),
    "in-progress": filteredProjects.filter((p) => p.status === "in-progress"),
    completed: filteredProjects.filter((p) => p.status === "completed"),
  }

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Projets</h1>
          <p className="text-muted-foreground">
            Gérez et suivez l&apos;avancement de vos projets
          </p>
        </div>
        <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="mr-2 size-4" />
              Nouveau projet
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[600px]">
            <DialogHeader>
              <DialogTitle>Créer un projet</DialogTitle>
              <DialogDescription>
                Configurez les détails du nouveau projet
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="space-y-2">
                <Label htmlFor="project-name">Nom du projet</Label>
                <Input id="project-name" placeholder="Ex: Site e-commerce" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="client">Client</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Sélectionner un client" />
                    </SelectTrigger>
                    <SelectContent>
                      {clients.map((client) => (
                        <SelectItem key={client.id} value={client.id}>
                          {client.name} - {client.company}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="type">Type de projet</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Sélectionner un type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Site Web">Site Web</SelectItem>
                      <SelectItem value="Application Mobile">Application Mobile</SelectItem>
                      <SelectItem value="Application Web">Application Web</SelectItem>
                      <SelectItem value="Marketing Digital">Marketing Digital</SelectItem>
                      <SelectItem value="Branding">Branding</SelectItem>
                      <SelectItem value="Solution IA">Solution IA</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="budget">Budget (FCFA)</Label>
                  <Input id="budget" type="number" placeholder="1000000" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="deadline">Date limite</Label>
                  <Input id="deadline" type="date" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea id="description" placeholder="Décrivez le projet..." rows={3} />
              </div>
              <div className="space-y-2">
                <Label>Équipe assignée</Label>
                <div className="flex flex-wrap gap-2">
                  {teamMembers.map((member) => (
                    <Badge
                      key={member.id}
                      variant="outline"
                      className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      {member.name.split(" ")[0]}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setIsAddDialogOpen(false)}>
                Annuler
              </Button>
              <Button onClick={() => setIsAddDialogOpen(false)}>
                Créer le projet
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-5">
        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Total projets</CardDescription>
            <CardTitle className="text-2xl">{stats.total}</CardTitle>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardDescription>En cours</CardDescription>
            <CardTitle className="text-2xl text-blue-600">{stats.inProgress}</CardTitle>
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
            <CardDescription>Terminés</CardDescription>
            <CardTitle className="text-2xl text-green-600">{stats.completed}</CardTitle>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Budget total</CardDescription>
            <CardTitle className="text-xl">{formatCurrency(stats.totalBudget)}</CardTitle>
          </CardHeader>
        </Card>
      </div>

      {/* Filters and View Toggle */}
      <Card>
        <CardHeader>
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="flex flex-1 items-center gap-4">
              <div className="relative flex-1 max-w-sm">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
                <Input
                  placeholder="Rechercher un projet..."
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
                  <SelectItem value="all">Tous statuts</SelectItem>
                  <SelectItem value="pending">En attente</SelectItem>
                  <SelectItem value="in-progress">En cours</SelectItem>
                  <SelectItem value="completed">Terminés</SelectItem>
                </SelectContent>
              </Select>
              <Select value={typeFilter} onValueChange={setTypeFilter}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Tous types</SelectItem>
                  {projectTypes.map((type) => (
                    <SelectItem key={type} value={type}>
                      {type}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm">
                <Download className="mr-2 size-4" />
                Exporter
              </Button>
              <div className="flex items-center border rounded-md">
                <Button
                  variant={viewMode === "table" ? "secondary" : "ghost"}
                  size="icon"
                  className="rounded-r-none"
                  onClick={() => setViewMode("table")}
                >
                  <List className="size-4" />
                </Button>
                <Button
                  variant={viewMode === "kanban" ? "secondary" : "ghost"}
                  size="icon"
                  className="rounded-l-none"
                  onClick={() => setViewMode("kanban")}
                >
                  <LayoutGrid className="size-4" />
                </Button>
              </div>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          {viewMode === "table" ? (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Projet</TableHead>
                  <TableHead>Client</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Progression</TableHead>
                  <TableHead>Budget</TableHead>
                  <TableHead>Deadline</TableHead>
                  <TableHead>Équipe</TableHead>
                  <TableHead>Statut</TableHead>
                  <TableHead className="w-12"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredProjects.map((project) => {
                  const statusConfig = getStatusConfig(project.status)
                  return (
                    <TableRow key={project.id}>
                      <TableCell>
                        <div>
                          <p className="font-medium">{project.name}</p>
                          <p className="text-sm text-muted-foreground">{project.id}</p>
                        </div>
                      </TableCell>
                      <TableCell>{project.client}</TableCell>
                      <TableCell>
                        <Badge variant="outline">{project.type}</Badge>
                      </TableCell>
                      <TableCell>
                        <div className="w-32">
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-sm">{project.progress}%</span>
                          </div>
                          <Progress value={project.progress} className="h-2" />
                        </div>
                      </TableCell>
                      <TableCell className="font-medium">
                        {formatCurrency(project.budget)}
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-1 text-sm">
                          <Calendar className="size-3 text-muted-foreground" />
                          {new Date(project.deadline).toLocaleDateString("fr-FR")}
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex -space-x-2">
                          {project.teamMembers.slice(0, 3).map((member, i) => (
                            <Avatar key={i} className="size-7 border-2 border-background">
                              <AvatarFallback className="text-xs">
                                {member[0]}
                              </AvatarFallback>
                            </Avatar>
                          ))}
                          {project.teamMembers.length > 3 && (
                            <div className="size-7 rounded-full bg-muted flex items-center justify-center text-xs border-2 border-background">
                              +{project.teamMembers.length - 3}
                            </div>
                          )}
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge className={statusConfig.className}>
                          {statusConfig.label}
                        </Badge>
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
                              Voir détails
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <Edit className="mr-2 size-4" />
                              Modifier
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <Users className="mr-2 size-4" />
                              Gérer l&apos;équipe
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
                  )
                })}
              </TableBody>
            </Table>
          ) : (
            /* Kanban View */
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {(["pending", "in-progress", "completed"] as const).map((status) => {
                const statusConfig = getStatusConfig(status)
                const StatusIcon = statusConfig.icon
                return (
                  <div key={status} className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <StatusIcon className="size-4" />
                        <h3 className="font-semibold">{statusConfig.label}</h3>
                        <Badge variant="secondary" className="rounded-full">
                          {groupedProjects[status].length}
                        </Badge>
                      </div>
                    </div>
                    <div className="space-y-3">
                      {groupedProjects[status].map((project) => (
                        <Card key={project.id} className="cursor-pointer hover:shadow-md transition-shadow">
                          <CardHeader className="p-4 pb-2">
                            <div className="flex items-start justify-between">
                              <div>
                                <CardTitle className="text-sm font-medium">
                                  {project.name}
                                </CardTitle>
                                <CardDescription className="text-xs">
                                  {project.client}
                                </CardDescription>
                              </div>
                              <Badge variant="outline" className="text-xs">
                                {project.type}
                              </Badge>
                            </div>
                          </CardHeader>
                          <CardContent className="p-4 pt-0">
                            <div className="space-y-3">
                              <div>
                                <div className="flex items-center justify-between text-xs mb-1">
                                  <span className="text-muted-foreground">Progression</span>
                                  <span>{project.progress}%</span>
                                </div>
                                <Progress value={project.progress} className="h-1.5" />
                              </div>
                              <div className="flex items-center justify-between">
                                <div className="flex -space-x-2">
                                  {project.teamMembers.slice(0, 3).map((member, i) => (
                                    <Avatar key={i} className="size-6 border-2 border-background">
                                      <AvatarFallback className="text-xs">
                                        {member[0]}
                                      </AvatarFallback>
                                    </Avatar>
                                  ))}
                                </div>
                                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                                  <Calendar className="size-3" />
                                  {new Date(project.deadline).toLocaleDateString("fr-FR", {
                                    day: "numeric",
                                    month: "short",
                                  })}
                                </div>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                )
              })}
            </div>
          )}

          {filteredProjects.length === 0 && (
            <div className="text-center py-10">
              <p className="text-muted-foreground">Aucun projet trouvé</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
