"use client"

import { 
  Users, 
  FolderKanban, 
  DollarSign, 
  TrendingUp,
  ArrowUpRight,
  ArrowDownRight,
  MoreHorizontal,
  Clock,
} from "lucide-react"
import Link from "next/link"
import {
  Bar,
  BarChart,
  Line,
  LineChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  PieChart,
  Pie,
  Cell,
} from "recharts"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
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
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { 
  clients, 
  projects, 
  revenueData, 
  projectTypeData, 
  activities,
  teamMembers 
} from "@/lib/mock-data"

const stats = [
  {
    title: "Chiffre d'affaires",
    value: "82.5M",
    unit: "FCFA",
    change: "+12.5%",
    trend: "up",
    icon: DollarSign,
    description: "vs mois dernier",
  },
  {
    title: "Projets actifs",
    value: projects.filter(p => p.status === "in-progress").length.toString(),
    change: "+3",
    trend: "up",
    icon: FolderKanban,
    description: "nouveaux ce mois",
  },
  {
    title: "Clients",
    value: clients.length.toString(),
    change: "+2",
    trend: "up",
    icon: Users,
    description: "nouveaux ce mois",
  },
  {
    title: "Taux de conversion",
    value: "68%",
    change: "-2%",
    trend: "down",
    icon: TrendingUp,
    description: "vs mois dernier",
  },
]

const COLORS = ["hsl(var(--chart-1))", "hsl(var(--chart-2))", "hsl(var(--chart-3))", "hsl(var(--chart-4))", "hsl(var(--chart-5))"]

const chartConfig = {
  revenue: {
    label: "Revenus",
    color: "hsl(var(--chart-1))",
  },
  expenses: {
    label: "Dépenses",
    color: "hsl(var(--chart-2))",
  },
}

function formatCurrency(value: number) {
  return new Intl.NumberFormat("fr-FR").format(value) + " FCFA"
}

function getStatusBadge(status: string) {
  switch (status) {
    case "completed":
      return <Badge className="bg-green-500/10 text-green-600 hover:bg-green-500/20">Terminé</Badge>
    case "in-progress":
      return <Badge className="bg-blue-500/10 text-blue-600 hover:bg-blue-500/20">En cours</Badge>
    case "pending":
      return <Badge className="bg-yellow-500/10 text-yellow-600 hover:bg-yellow-500/20">En attente</Badge>
    default:
      return <Badge variant="secondary">{status}</Badge>
  }
}

export default function AdminDashboard() {
  const activeProjects = projects.filter(p => p.status === "in-progress")
  
  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Tableau de bord</h1>
          <p className="text-muted-foreground">
            Bienvenue, Junior. Voici un aperçu de votre activité.
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">Exporter</Button>
          <Button asChild>
            <Link href="/admin/projects">Nouveau projet</Link>
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.title}>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {stat.title}
              </CardTitle>
              <stat.icon className="size-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="flex items-baseline gap-1">
                <span className="text-2xl font-bold">{stat.value}</span>
                {stat.unit && (
                  <span className="text-sm text-muted-foreground">{stat.unit}</span>
                )}
              </div>
              <div className="flex items-center gap-1 mt-1">
                {stat.trend === "up" ? (
                  <ArrowUpRight className="size-4 text-green-500" />
                ) : (
                  <ArrowDownRight className="size-4 text-red-500" />
                )}
                <span
                  className={`text-sm font-medium ${
                    stat.trend === "up" ? "text-green-500" : "text-red-500"
                  }`}
                >
                  {stat.change}
                </span>
                <span className="text-sm text-muted-foreground">
                  {stat.description}
                </span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Charts Row */}
      <div className="grid gap-6 lg:grid-cols-7">
        {/* Revenue Chart */}
        <Card className="lg:col-span-4">
          <CardHeader>
            <CardTitle>Revenus et Dépenses</CardTitle>
            <CardDescription>Évolution sur les 12 derniers mois</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig} className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={revenueData}>
                  <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                  <XAxis 
                    dataKey="month" 
                    className="text-xs"
                    tickLine={false}
                    axisLine={false}
                  />
                  <YAxis 
                    className="text-xs"
                    tickLine={false}
                    axisLine={false}
                    tickFormatter={(value) => `${value / 1000000}M`}
                  />
                  <ChartTooltip 
                    content={<ChartTooltipContent />}
                    formatter={(value: number) => formatCurrency(value)}
                  />
                  <Bar 
                    dataKey="revenue" 
                    fill="var(--color-revenue)" 
                    radius={[4, 4, 0, 0]}
                    name="Revenus"
                  />
                  <Bar 
                    dataKey="expenses" 
                    fill="var(--color-expenses)" 
                    radius={[4, 4, 0, 0]}
                    name="Dépenses"
                  />
                </BarChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>

        {/* Project Types Pie Chart */}
        <Card className="lg:col-span-3">
          <CardHeader>
            <CardTitle>Répartition par type</CardTitle>
            <CardDescription>Projets par catégorie</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={projectTypeData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={100}
                    paddingAngle={2}
                    dataKey="count"
                    nameKey="type"
                  >
                    {projectTypeData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip 
                    formatter={(value: number, name: string) => [value + " projets", name]}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="grid grid-cols-2 gap-2 mt-4">
              {projectTypeData.map((item, index) => (
                <div key={item.type} className="flex items-center gap-2">
                  <div 
                    className="size-3 rounded-full" 
                    style={{ backgroundColor: COLORS[index % COLORS.length] }}
                  />
                  <span className="text-xs text-muted-foreground">{item.type}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Projects and Activity Row */}
      <div className="grid gap-6 lg:grid-cols-7">
        {/* Active Projects */}
        <Card className="lg:col-span-4">
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>Projets en cours</CardTitle>
              <CardDescription>
                {activeProjects.length} projets actifs
              </CardDescription>
            </div>
            <Button variant="ghost" size="sm" asChild>
              <Link href="/admin/projects">Voir tout</Link>
            </Button>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {activeProjects.slice(0, 4).map((project) => (
                <div key={project.id} className="flex items-center gap-4">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <p className="font-medium truncate">{project.name}</p>
                      <span className="text-sm text-muted-foreground ml-2">
                        {project.progress}%
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span>{project.client}</span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Clock className="size-3" />
                        {project.deadline}
                      </span>
                    </div>
                    <Progress value={project.progress} className="h-2 mt-2" />
                  </div>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon" className="shrink-0">
                        <MoreHorizontal className="size-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>Voir détails</DropdownMenuItem>
                      <DropdownMenuItem>Modifier</DropdownMenuItem>
                      <DropdownMenuItem>Contacter le client</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <Card className="lg:col-span-3">
          <CardHeader>
            <CardTitle>Activité récente</CardTitle>
            <CardDescription>Les dernières actions de l&apos;équipe</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {activities.map((activity) => (
                <div key={activity.id} className="flex gap-3">
                  <Avatar className="size-8">
                    <AvatarImage src="/placeholder.svg?height=32&width=32" />
                    <AvatarFallback>
                      {activity.user.split(" ").map(n => n[0]).join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm">
                      <span className="font-medium">{activity.user}</span>{" "}
                      <span className="text-muted-foreground">{activity.action}</span>{" "}
                      <span className="font-medium">{activity.target}</span>
                    </p>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      {activity.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Team and Clients Row */}
      <div className="grid gap-6 lg:grid-cols-2">
        {/* Team Members */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>Équipe</CardTitle>
              <CardDescription>Membres de l&apos;équipe PeleAI</CardDescription>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {teamMembers.map((member) => (
                <div key={member.id} className="flex items-center gap-3">
                  <div className="relative">
                    <Avatar>
                      <AvatarImage src={member.avatar} />
                      <AvatarFallback>
                        {member.name.split(" ").map(n => n[0]).join("")}
                      </AvatarFallback>
                    </Avatar>
                    <span
                      className={`absolute bottom-0 right-0 size-3 rounded-full border-2 border-background ${
                        member.status === "online"
                          ? "bg-green-500"
                          : member.status === "away"
                          ? "bg-yellow-500"
                          : "bg-gray-400"
                      }`}
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium truncate">{member.name}</p>
                    <p className="text-sm text-muted-foreground">{member.role}</p>
                  </div>
                  <Badge variant="secondary">{member.projects} projets</Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Recent Clients */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>Clients récents</CardTitle>
              <CardDescription>Derniers clients ajoutés</CardDescription>
            </div>
            <Button variant="ghost" size="sm" asChild>
              <Link href="/admin/clients">Voir tout</Link>
            </Button>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Client</TableHead>
                  <TableHead>Projets</TableHead>
                  <TableHead>Statut</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {clients.slice(0, 5).map((client) => (
                  <TableRow key={client.id}>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Avatar className="size-8">
                          <AvatarImage src={client.avatar} />
                          <AvatarFallback>
                            {client.name.split(" ").map(n => n[0]).join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium text-sm">{client.name}</p>
                          <p className="text-xs text-muted-foreground">
                            {client.company}
                          </p>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>{client.totalProjects}</TableCell>
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
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
