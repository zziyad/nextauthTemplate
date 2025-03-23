'use client'

import { Activity, FileText, Plus, Users } from 'lucide-react'

import { SignOutButton } from '@/components/auth/sign-out-button'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

interface DashboardContentProps {
  user:
    | {
        name?: string | null
        email: string
      }
    | null
    | undefined
}

export function DashboardContent({ user }: DashboardContentProps) {
  if (!user) return null

  return (
    <div className="container py-8">
      <div className="mb-8 flex items-center justify-between">
        <h1 className="text-4xl font-bold">Dashboard</h1>
        <SignOutButton />
      </div>

      <div className="space-y-6">
        {/* Welcome Card */}
        <Card>
          <CardHeader>
            <CardTitle>Welcome back, {user.name || user.email}!</CardTitle>
            <CardDescription>Here's what's happening today</CardDescription>
          </CardHeader>
        </Card>

        {/* Stats Grid */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Users</CardTitle>
              <Users className="h-4 w-4 text-gray-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1,234</div>
              <p className="text-xs text-gray-500">+12% from last month</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Active Projects
              </CardTitle>
              <FileText className="h-4 w-4 text-gray-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">23</div>
              <p className="text-xs text-gray-500">+2 new this week</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Recent Activity
              </CardTitle>
              <Activity className="h-4 w-4 text-gray-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">42</div>
              <p className="text-xs text-gray-500">+8% from yesterday</p>
            </CardContent>
          </Card>
        </div>

        {/* Recent Activity */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>Your latest actions and updates</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                'Project "Homepage Redesign" was created',
                'New team member John Doe joined',
                'Task "Update Documentation" completed',
                'Meeting scheduled for tomorrow at 10 AM',
              ].map((activity, i) => (
                <div
                  key={i}
                  className="flex items-center space-x-4 rounded-lg border p-3"
                >
                  <Activity className="h-5 w-5 text-gray-500" />
                  <p className="text-sm">{activity}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>Common tasks you can perform</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4 md:grid-cols-2">
            <Button className="w-full justify-start space-x-2">
              <Plus className="h-4 w-4" />
              <span>New Project</span>
            </Button>
            <Button
              variant="outline"
              className="w-full justify-start space-x-2"
            >
              <Users className="h-4 w-4" />
              <span>Invite Team Member</span>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
