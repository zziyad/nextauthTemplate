import { NextResponse } from 'next/server'
import { withAuth } from 'next-auth/middleware'

export default withAuth(
  function middleware(req) {
    const token = req.nextauth.token
    const isAdmin = token?.role === 'ADMIN'
    const isUser = token?.role === 'USER'

    // Admin only routes
    if (req.nextUrl.pathname.startsWith('/admin')) {
      if (!isAdmin) {
        return NextResponse.redirect(new URL('/', req.url))
      }
    }

    // User only routes
    if (req.nextUrl.pathname.startsWith('/dashboard')) {
      if (!isUser && !isAdmin) {
        return NextResponse.redirect(new URL('/', req.url))
      }
    }

    return NextResponse.next()
  },
  {
    callbacks: {
      authorized: ({ token }) => !!token,
    },
  }
)

export const config = {
  matcher: ['/dashboard/:path*', '/admin/:path*', '/settings/:path*'],
}
