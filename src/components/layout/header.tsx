'use client'

import Link from 'next/link'
import { useSession } from 'next-auth/react'

import { UserMenu } from '@/components/auth/user-menu'
import { Button } from '@/components/ui/button'

export function Header() {
  const { data: session } = useSession()

  return (
    <header className="bg-background/95 supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full border-b backdrop-blur">
      <div className="container flex h-14 items-center">
        <div className="mr-4 flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="font-bold">My App</span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <Link
              href="/dashboard"
              className="hover:text-foreground/80 transition-colors"
            >
              Dashboard
            </Link>
            {session?.user.role === 'ADMIN' && (
              <Link
                href="/admin"
                className="hover:text-foreground/80 transition-colors"
              >
                Admin
              </Link>
            )}
            <Link
              href="/settings"
              className="hover:text-foreground/80 transition-colors"
            >
              Settings
            </Link>
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-2">
          {session?.user ? (
            <UserMenu user={session.user} />
          ) : (
            <>
              <Link href="/sign-in">
                <Button variant="ghost">Sign In</Button>
              </Link>
              <Link href="/sign-up">
                <Button>Sign Up</Button>
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  )
}
