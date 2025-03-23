import { hash, compare } from 'bcryptjs'
import { prisma } from '@/lib/prisma'
import { AuthError } from '@/lib/exceptions'

export interface RegisterData {
  email: string
  password: string
  name?: string
}

export interface LoginData {
  email: string
  password: string
}

export class AuthService {
  async register(data: RegisterData) {
    const existingUser = await prisma.user.findUnique({
      where: { email: data.email },
    })

    if (existingUser) {
      throw new AuthError('User already exists')
    }

    const hashedPassword = await hash(data.password, 10)

    const user = await prisma.user.create({
      data: {
        email: data.email,
        password: hashedPassword,
        name: data.name,
        role: 'USER',
      },
      select: {
        id: true,
        email: true,
        name: true,
        role: true,
      },
    })

    return user
  }

  async createAdmin(data: RegisterData) {
    const existingUser = await prisma.user.findUnique({
      where: { email: data.email },
    })

    if (existingUser) {
      throw new AuthError('User already exists')
    }

    const hashedPassword = await hash(data.password, 10)

    const user = await prisma.user.create({
      data: {
        email: data.email,
        password: hashedPassword,
        name: data.name,
        role: 'ADMIN',
      },
      select: {
        id: true,
        email: true,
        name: true,
        role: true,
      },
    })

    return user
  }

  async validateCredentials(data: LoginData) {
    const user = await prisma.user.findUnique({
      where: { email: data.email },
    })

    if (!user) {
      throw new AuthError('Invalid credentials')
    }

    const isValidPassword = await compare(data.password, user.password)

    if (!isValidPassword) {
      throw new AuthError('Invalid credentials')
    }

    return {
      id: user.id,
      email: user.email,
      name: user.name,
      role: user.role,
    }
  }
} 