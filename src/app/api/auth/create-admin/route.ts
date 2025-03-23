import { NextResponse } from 'next/server'
import { AuthService } from '@/services/auth/auth.service'
import { AuthError } from '@/lib/exceptions'

export async function POST(req: Request) {
  try {
    const data = await req.json()
    const authService = new AuthService()
    
    const user = await authService.createAdmin(data)
    
    return NextResponse.json({ user })
  } catch (error) {
    if (error instanceof AuthError) {
      return NextResponse.json(
        { error: error.message },
        { status: error.statusCode }
      )
    }

    console.error('Admin creation error:', error)
    return NextResponse.json(
      { error: 'Something went wrong' },
      { status: 500 }
    )
  }
}
