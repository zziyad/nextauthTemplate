'use client'

import Link from 'next/link'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { AuthForm } from '@/components/auth/auth-form'

export default function SignUp() {
  return (
    <main className="flex min-h-screen items-center justify-center p-4 md:p-8">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold">
            Create an account
          </CardTitle>
          <CardDescription>
            Enter your details to create your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <AuthForm mode="sign-up" />
        </CardContent>
        <CardFooter>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Already have an account?{' '}
            <Link
              href="/sign-in"
              className="text-purple-600 hover:text-purple-700 dark:text-purple-400"
            >
              Sign in
            </Link>
          </p>
        </CardFooter>
      </Card>
    </main>
  )
}
