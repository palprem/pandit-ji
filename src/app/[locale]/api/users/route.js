import { prisma } from '@/lib/prisma'
import { NextResponse } from 'next/server'

// GET: Fetch all users
export async function GET() {
  const users = await prisma.user.findMany({
    select: {
      user_id: true,
      first_name: true,
      last_name: true,
      email_id: true,
      phone_number: true,
      password: false,
      role: true,
    }
  })
  return NextResponse.json(users)
}

// POST: Create a user
export async function POST(req) {
  const { name, email } = await req.json()
  const user = await prisma.user.create({
    data: { name, email },
  })
  return NextResponse.json(user)
}
