import { Metadata } from 'next'

import { DashboardContent } from '@/components/dashboard/dashboard-content'
import { getSession } from '@/lib/auth'

export const metadata: Metadata = {
  title: 'Dashboard',
  description: 'Your personal dashboard and overview.',
}

export default async function DashboardPage() {
  const session = await getSession()

  return <DashboardContent user={session?.user} />
} 