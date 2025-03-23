'use client'

import Link from 'next/link'

import { AuthForm } from '@/components/auth/auth-form'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

export default function SignIn() {
  return (
    <main className="flex min-h-screen items-center justify-center p-4 md:p-8">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold">Sign in</CardTitle>
          <CardDescription>
            Enter your email and password to access your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <AuthForm mode="sign-in" />
        </CardContent>
        <CardFooter>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Don't have an account?{' '}
            <Link
              href="/sign-up"
              className="text-purple-600 hover:text-purple-700 dark:text-purple-400"
            >
              Sign up
            </Link>
          </p>
        </CardFooter>
      </Card>
    </main>
  )
}
