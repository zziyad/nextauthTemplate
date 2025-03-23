import { Metadata } from 'next'

import { AdminDashboard } from '@/components/admin/admin-dashboard'
import { getSession } from '@/lib/auth'
import { prisma } from '@/lib/prisma'

export const metadata: Metadata = {
  title: 'Admin Dashboard',
  description: 'Admin dashboard for managing users and content.',
}

export default async function AdminPage() {
  const session = await getSession()

  // Fetch some basic stats
  const stats = await prisma.$transaction([
    prisma.user.count(),
    prisma.user.count({ where: { role: 'ADMIN' } }),
    prisma.session.count(),
  ])

  const [totalUsers, totalAdmins, activeSessions] = stats

  return (
    <AdminDashboard
      stats={{
        totalUsers,
        totalAdmins,
        activeSessions,
      }}
      user={session?.user}
    />
  )
}
