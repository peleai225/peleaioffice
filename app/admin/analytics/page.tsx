"use client"

import {
  Bar,
  BarChart,
  Line,
  LineChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import {
  clients,
  projects,
  revenueData,
  projectTypeData,
} from "@/lib/mock-data"

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

export default function AnalyticsPage() {
  const totalRevenue12m = revenueData.reduce((s, m) => s + m.revenue, 0)
  const totalExpenses12m = revenueData.reduce((s, m) => s + m.expenses, 0)
  const avgProjectBudget =
    projects.length > 0
      ? Math.round(projects.reduce((s, p) => s + p.budget, 0) / projects.length)
      : 0

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Analytiques</h1>
        <p className="text-muted-foreground">
          Indicateurs agrégés sur les données de démonstration
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Clients (base)</CardDescription>
            <CardTitle className="text-3xl tabular-nums">{clients.length}</CardTitle>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Projets suivis</CardDescription>
            <CardTitle className="text-3xl tabular-nums">{projects.length}</CardTitle>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Revenus 12 mois (simulé)</CardDescription>
            <CardTitle className="text-xl tabular-nums leading-tight">
              {formatCurrency(totalRevenue12m)}
            </CardTitle>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Budget moyen / projet</CardDescription>
            <CardTitle className="text-xl tabular-nums leading-tight">
              {formatCurrency(avgProjectBudget)}
            </CardTitle>
          </CardHeader>
        </Card>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Revenus et dépenses</CardTitle>
            <CardDescription>Série mensuelle fictive (12 mois)</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig} className="h-[320px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={revenueData}>
                  <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                  <XAxis dataKey="month" tickLine={false} axisLine={false} className="text-xs" />
                  <YAxis
                    tickLine={false}
                    axisLine={false}
                    className="text-xs"
                    tickFormatter={(v) => `${Math.round(v / 1_000_000)}M`}
                  />
                  <ChartTooltip
                    content={<ChartTooltipContent />}
                    formatter={(value: number) => formatCurrency(value)}
                  />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="revenue"
                    stroke="var(--color-revenue)"
                    strokeWidth={2}
                    dot={false}
                    name="Revenus"
                  />
                  <Line
                    type="monotone"
                    dataKey="expenses"
                    stroke="var(--color-expenses)"
                    strokeWidth={2}
                    dot={false}
                    name="Dépenses"
                  />
                </LineChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Marge sur 12 mois</CardTitle>
            <CardDescription>Revenus − dépenses (données fictives)</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold tabular-nums">
              {formatCurrency(totalRevenue12m - totalExpenses12m)}
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              Ratio dépenses / revenus :{" "}
              {totalRevenue12m > 0
                ? ((totalExpenses12m / totalRevenue12m) * 100).toFixed(1)
                : "0"}
              %
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Répartition par type de projet</CardTitle>
            <CardDescription>Nombre de projets par catégorie (jeu de démo)</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig} className="h-[260px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={projectTypeData} layout="vertical" margin={{ left: 8 }}>
                  <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                  <XAxis type="number" tickLine={false} />
                  <YAxis
                    type="category"
                    dataKey="type"
                    width={120}
                    tickLine={false}
                    axisLine={false}
                    className="text-xs"
                  />
                  <Tooltip
                    formatter={(value: number) => [value + " projets", "Volume"]}
                  />
                  <Bar dataKey="count" fill="hsl(var(--chart-3))" radius={[0, 4, 4, 0]} name="Projets" />
                </BarChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
