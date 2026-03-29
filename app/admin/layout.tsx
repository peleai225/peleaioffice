"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import {
  LayoutDashboard,
  Users,
  FolderKanban,
  Mail,
  Settings,
  BarChart3,
  FileText,
  Bell,
  Search,
  LogOut,
  ChevronDown,
  Home,
  Globe2,
} from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarInset,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { notifications, messages as inboxMessages } from "@/lib/mock-data"

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const unreadNotifications = notifications.filter((n) => !n.read).length
  const unreadMessages = inboxMessages.filter((m) => !m.read).length

  const navigation = [
    {
      title: "Principal",
      items: [
        { title: "Tableau de bord", href: "/admin", icon: LayoutDashboard },
        { title: "Clients", href: "/admin/clients", icon: Users },
        { title: "Projets", href: "/admin/projects", icon: FolderKanban },
        { title: "Messages", href: "/admin/messages", icon: Mail },
      ],
    },
    {
      title: "Gestion",
      items: [
        { title: "Contenu du site", href: "/admin/site", icon: Globe2 },
        { title: "Factures", href: "/admin/invoices", icon: FileText },
        { title: "Analytiques", href: "/admin/analytics", icon: BarChart3 },
        { title: "Paramètres", href: "/admin/settings", icon: Settings },
      ],
    },
  ]

  return (
    <SidebarProvider>
      <Sidebar variant="inset">
        <SidebarHeader>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton size="lg" asChild>
                <Link href="/admin">
                  <div className="flex items-center gap-2">
                    <Image
                      src="/images/peleai-logo-on-white.png"
                      alt="PeleAI"
                      width={32}
                      height={32}
                      className="rounded"
                    />
                    <div className="flex flex-col">
                      <span className="font-semibold text-sm">PeleAI</span>
                      <span className="text-xs text-muted-foreground">
                        Backoffice
                      </span>
                    </div>
                  </div>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarHeader>

        <SidebarContent>
          {navigation.map((group) => (
            <SidebarGroup key={group.title}>
              <SidebarGroupLabel>{group.title}</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {group.items.map((item) => {
                    const messageBadge =
                      item.href === "/admin/messages" ? unreadMessages : 0
                    const isNavActive =
                      item.href === "/admin"
                        ? pathname === "/admin"
                        : pathname === item.href
                    return (
                      <SidebarMenuItem key={item.href}>
                        <SidebarMenuButton
                          asChild
                          isActive={isNavActive}
                          tooltip={item.title}
                        >
                          <Link href={item.href}>
                            <item.icon className="size-4" />
                            <span>{item.title}</span>
                            {messageBadge > 0 && (
                              <Badge
                                variant="destructive"
                                className="ml-auto size-5 min-w-5 rounded-full p-0 text-xs flex items-center justify-center"
                              >
                                {messageBadge > 9 ? "9+" : messageBadge}
                              </Badge>
                            )}
                          </Link>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    )
                  })}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          ))}
        </SidebarContent>

        <SidebarFooter>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <Link href="/">
                  <Home className="size-4" />
                  <span>Retour au site</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <SidebarMenuButton size="lg">
                    <Avatar className="size-8">
                      <AvatarImage src="/placeholder.svg?height=32&width=32" />
                      <AvatarFallback>PK</AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col flex-1 text-left">
                      <span className="text-sm font-medium">Junior Kone</span>
                      <span className="text-xs text-muted-foreground">
                        Administrateur
                      </span>
                    </div>
                    <ChevronDown className="size-4" />
                  </SidebarMenuButton>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <DropdownMenuLabel>Mon compte</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <Link href="/admin/settings">
                      <Settings className="mr-2 size-4" />
                      Paramètres
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="text-destructive">
                    <LogOut className="mr-2 size-4" />
                    Déconnexion
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarFooter>
      </Sidebar>

      <SidebarInset>
        {/* Top Header */}
        <header className="sticky top-0 z-10 flex h-14 items-center gap-4 border-b bg-background px-4">
          <SidebarTrigger />
          <Separator orientation="vertical" className="h-6" />

          {/* Search */}
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
            <Input
              placeholder="Rechercher..."
              className="pl-9 bg-muted/50 border-0"
            />
          </div>

          <div className="ml-auto flex items-center gap-2">
            {/* Notifications */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="relative">
                  <Bell className="size-5" />
                  {unreadNotifications > 0 && (
                    <Badge
                      variant="destructive"
                      className="absolute -top-1 -right-1 size-5 rounded-full p-0 text-xs flex items-center justify-center"
                    >
                      {unreadNotifications}
                    </Badge>
                  )}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-80">
                <DropdownMenuLabel className="flex items-center justify-between">
                  Notifications
                  <Badge variant="secondary">{unreadNotifications} nouvelles</Badge>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                {notifications.slice(0, 4).map((notification) => (
                  <DropdownMenuItem
                    key={notification.id}
                    className="flex flex-col items-start gap-1 p-3"
                  >
                    <div className="flex items-center gap-2 w-full">
                      <span className="font-medium text-sm">
                        {notification.title}
                      </span>
                      {!notification.read && (
                        <span className="size-2 rounded-full bg-primary ml-auto" />
                      )}
                    </div>
                    <span className="text-xs text-muted-foreground">
                      {notification.message}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {notification.time}
                    </span>
                  </DropdownMenuItem>
                ))}
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild className="text-center justify-center">
                  <Link href="/admin/messages">Voir toutes les notifications</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 overflow-auto p-6">{children}</main>
      </SidebarInset>
    </SidebarProvider>
  )
}
