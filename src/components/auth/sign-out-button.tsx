'use client'

import { useRouter } from 'next/navigation'
import { signOut } from 'next-auth/react'

import { Button } from '@/components/ui/button'

interface SignOutButtonProps {
  className?: string
}

export function SignOutButton({ className }: SignOutButtonProps) {
  const router = useRouter()

  const handleSignOut = async () => {
    await signOut({
      redirect: false,
    })
    router.push('/sign-in')
  }

  return (
    <Button variant="destructive" onClick={handleSignOut} className={className}>
      Sign Out
    </Button>
  )
}
