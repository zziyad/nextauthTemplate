import { hash } from 'bcryptjs'

import { prisma } from '../src/lib/prisma'

async function createUser(
  email: string,
  password: string,
  name: string,
  isAdmin: boolean
) {
  try {
    // Check if user exists
    const existingUser = await prisma.user.findUnique({
      where: { email },
    })

    if (existingUser) {
      console.log(`User ${email} already exists`)
      return
    }

    // Hash password
    const hashedPassword = await hash(password, 10)

    // Create user
    const user = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        name,
        role: isAdmin ? 'ADMIN' : 'USER',
      },
    })

    console.log(`Created ${isAdmin ? 'admin' : 'regular'} user:`)
    console.log({
      id: user.id,
      email: user.email,
      name: user.name,
      role: user.role,
    })
  } catch (error) {
    console.error('Error creating user:', error)
  } finally {
    await prisma.$disconnect()
  }
}

// Create admin user
createUser('admin@example.com', 'admin123', 'Admin User', true)

// Create regular user
createUser('user@example.com', 'user123', 'Regular User', false)
