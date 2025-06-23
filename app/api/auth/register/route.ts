
import { NextRequest, NextResponse } from 'next/server'
import bcrypt from 'bcryptjs'
import { prisma } from '@/lib/prisma'

export async function POST(request: NextRequest) {
  try {
    const { email, password, name, tenantSlug, tenantName, phone } = await request.json()

    // Validate required fields
    if (!email || !password || !name) {
      return NextResponse.json(
        { error: 'Email, password, and name are required' },
        { status: 400 }
      )
    }

    // Check if this is main site registration (admin)
    if (!tenantSlug) {
      // Check if admin already exists
      const existingAdmin = await prisma.admin.findUnique({
        where: { email }
      })

      if (existingAdmin) {
        return NextResponse.json(
          { error: 'Admin with this email already exists' },
          { status: 400 }
        )
      }

      // Create admin user
      const hashedPassword = await bcrypt.hash(password, 12)
      const admin = await prisma.admin.create({
        data: {
          email,
          name,
          password: hashedPassword
        }
      })

      return NextResponse.json({
        message: 'Admin account created successfully',
        user: {
          id: admin.id,
          email: admin.email,
          name: admin.name,
          role: 'admin'
        }
      })
    }

    // Tenant registration
    if (!tenantName) {
      return NextResponse.json(
        { error: 'Tenant name is required for tenant registration' },
        { status: 400 }
      )
    }

    // Check if tenant slug is available
    const existingTenant = await prisma.tenant.findUnique({
      where: { slug: tenantSlug }
    })

    if (existingTenant) {
      return NextResponse.json(
        { error: 'Website URL is already taken' },
        { status: 400 }
      )
    }

    // Create tenant and first user in a transaction
    const hashedPassword = await bcrypt.hash(password, 12)
    
    const result = await prisma.$transaction(async (tx) => {
      // Create tenant
      const tenant = await tx.tenant.create({
        data: {
          slug: tenantSlug,
          name: tenantName,
          email: email,
          categories: {
            create: [
              { name: 'Social Media', slug: 'social-media', icon: '📱' },
              { name: 'Gaming', slug: 'gaming', icon: '🎮' },
              { name: 'PPOB', slug: 'ppob', icon: '💳' },
              { name: 'Premium', slug: 'premium', icon: '👑' }
            ]
          }
        }
      })

      // Create first user (admin of this tenant)
      const user = await tx.user.create({
        data: {
          email,
          fullName: name,
          phone: phone || null,
          password: hashedPassword,
          tenantId: tenant.id,
          emailVerified: true
        }
      })

      return { tenant, user }
    })

    return NextResponse.json({
      message: 'Account and website created successfully',
      tenant: {
        id: result.tenant.id,
        slug: result.tenant.slug,
        name: result.tenant.name
      },
      user: {
        id: result.user.id,
        email: result.user.email,
        name: result.user.fullName,
        role: 'user'
      }
    })

  } catch (error) {
    console.error('Registration error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
