'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Home, LayoutDashboard, Settings, ShieldCheck } from 'lucide-react'
import { useSession } from 'next-auth/react'

import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface SidebarNavProps extends React.HTMLAttributes<HTMLElement> {
  items: {
    href: string
    title: string
    icon: React.ReactNode
    adminOnly?: boolean
  }[]
}

export function Sidebar({ className, items, ...props }: SidebarNavProps) {
  const pathname = usePathname()
  const { data: session } = useSession()

  return (
    <nav
      className={cn(
        'flex space-x-2 lg:flex-col lg:space-y-1 lg:space-x-0',
        className
      )}
      {...props}
    >
      {items.map((item) => {
        // Skip admin items for non-admin users
        if (item.adminOnly && session?.user.role !== 'ADMIN') {
          return null
        }

        return (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              buttonVariants({ variant: 'ghost' }),
              pathname === item.href
                ? 'bg-muted hover:bg-muted'
                : 'hover:bg-transparent hover:underline',
              'justify-start'
            )}
          >
            {item.icon}
            <span className="ml-2">{item.title}</span>
          </Link>
        )
      })}
    </nav>
  )
}

export const defaultNavItems = [
  {
    href: '/',
    title: 'Home',
    icon: <Home className="h-4 w-4" />,
  },
  {
    href: '/dashboard',
    title: 'Dashboard',
    icon: <LayoutDashboard className="h-4 w-4" />,
  },
  {
    href: '/admin',
    title: 'Admin',
    icon: <ShieldCheck className="h-4 w-4" />,
    adminOnly: true,
  },
  {
    href: '/settings',
    title: 'Settings',
    icon: <Settings className="h-4 w-4" />,
  },
]
