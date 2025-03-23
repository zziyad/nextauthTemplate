'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { SignOutButton } from '@/components/auth/sign-out-button'

interface AdminDashboardProps {
  stats: {
    totalUsers: number
    totalAdmins: number
    activeSessions: number
  }
  user: {
    name?: string | null
    email: string
  } | null | undefined
}

export function AdminDashboard({ stats, user }: AdminDashboardProps) {
  if (!user) return null

  return (
    <div className="container py-8">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-4xl font-bold">Admin Dashboard</h1>
        <SignOutButton />
      </div>
      
      <div className="grid gap-6">
        <div className="rounded-lg border p-4">
          <h2 className="text-xl font-semibold mb-2">
            Welcome back, {user.name || user.email}
          </h2>
          <p className="text-muted-foreground">
            This is your admin dashboard where you can manage users, view analytics, and control system settings.
          </p>
        </div>
        
        {/* Stats */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Total Users</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">{stats.totalUsers}</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Admin Users</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">{stats.totalAdmins}</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Active Sessions</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">{stats.activeSessions}</p>
            </CardContent>
          </Card>
        </div>
        
        {/* Admin Features */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-lg border p-4">
            <h3 className="text-lg font-semibold mb-2">User Management</h3>
            <p className="text-muted-foreground">
              Manage user accounts, roles, and permissions.
            </p>
          </div>
          
          <div className="rounded-lg border p-4">
            <h3 className="text-lg font-semibold mb-2">Analytics</h3>
            <p className="text-muted-foreground">
              View system analytics and usage statistics.
            </p>
          </div>
          
          <div className="rounded-lg border p-4">
            <h3 className="text-lg font-semibold mb-2">Settings</h3>
            <p className="text-muted-foreground">
              Configure system settings and preferences.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
} 