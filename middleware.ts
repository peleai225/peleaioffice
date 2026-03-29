import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

/**
 * Backoffice : désactivé par défaut (redirection vers l’accueil).
 * Pour le réactiver en local ou en prod : ADMIN_ENABLED=true dans .env.local / variables d’environnement.
 */
export function middleware(request: NextRequest) {
  const adminEnabled = process.env.ADMIN_ENABLED === "true"
  if (!adminEnabled && request.nextUrl.pathname.startsWith("/admin")) {
    return NextResponse.redirect(new URL("/", request.url))
  }
  return NextResponse.next()
}

export const config = {
  matcher: ["/admin", "/admin/:path*"],
}
