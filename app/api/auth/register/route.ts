import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import bcrypt from 'bcryptjs'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, password, phone, registrationType, tenantName, tenantSlug } = body

    // Validate required fields
    if (!name || !email || !password) {
      return NextResponse.json(
        { error: 'Name, email, and password are required' },
        { status: 400 }
      )
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 12)

    if (registrationType === 'tenant') {
      if (!tenantName || !tenantSlug) {
        return NextResponse.json(
          { error: 'Tenant name and slug are required for tenant registration' },
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

      // Check if user already exists
      const existingUser = await prisma.user.findFirst({
        where: { email }
      })

      if (existingUser) {
        return NextResponse.json(
          { error: 'User with this email already exists' },
          { status: 400 }
        )
      }

      // Create tenant and owner user in transaction
      const result = await prisma.$transaction(async (tx) => {
        const tenant = await tx.tenant.create({
          data: {
            name: tenantName,
            slug: tenantSlug,
            email: email,
            primaryColor: '#8B5CF6',
            isActive: true
          }
        })

        const user = await tx.user.create({
          data: {
            name,
            email,
            password: hashedPassword,
            phone,
            role: 'OWNER',
            tenantId: tenant.id
          }
        })

        // Create default categories for tenant
        await tx.category.createMany({
          data: [
            { name: 'Social Media', slug: 'social-media', icon: '📱', tenantId: tenant.id },
            { name: 'Gaming', slug: 'gaming', icon: '🎮', tenantId: tenant.id },
            { name: 'PPOB', slug: 'ppob', icon: '💳', tenantId: tenant.id },
            { name: 'Premium', slug: 'premium', icon: '👑', tenantId: tenant.id }
          ]
        })

        return { tenant, user }
      })

      return NextResponse.json({
        message: 'Tenant and user created successfully',
        tenant: {
          id: result.tenant.id,
          slug: result.tenant.slug,
          name: result.tenant.name
        },
        user: {
          id: result.user.id,
          email: result.user.email,
          name: result.user.name
        }
      })

    } else if (registrationType === 'admin') {
      // Check if admin user already exists
      const existingUser = await prisma.user.findFirst({
        where: { 
          email,
          tenantId: null 
        }
      })

      if (existingUser) {
        return NextResponse.json(
          { error: 'Admin user with this email already exists' },
          { status: 400 }
        )
      }

      // Create admin user
      const user = await prisma.user.create({
        data: {
          name,
          email,
          password: hashedPassword,
          phone,
          role: 'ADMIN',
          tenantId: null
        }
      })

      return NextResponse.json({
        message: 'Admin user created successfully',
        user: {
          id: user.id,
          email: user.email,
          name: user.name
        }
      })

    } else if (registrationType === 'customer' && tenantSlug) {
      // Register customer to specific tenant
      const tenant = await prisma.tenant.findUnique({
        where: { slug: tenantSlug }
      })

      if (!tenant) {
        return NextResponse.json(
          { error: 'Store not found' },
          { status: 404 }
        )
      }

      // Check if customer already exists in this tenant
      const existingUser = await prisma.user.findFirst({
        where: {
          email,
          tenantId: tenant.id
        }
      })

      if (existingUser) {
        return NextResponse.json(
          { error: 'User already registered in this store' },
          { status: 400 }
        )
      }

      const user = await prisma.user.create({
        data: {
          name,
          email,
          password: hashedPassword,
          phone,
          role: 'CUSTOMER',
          tenantId: tenant.id
        }
      })

      return NextResponse.json({
        message: 'Customer registered successfully',
        user: {
          id: user.id,
          email: user.email,
          name: user.name
        }
      })
    }

    return NextResponse.json(
      { error: 'Invalid registration type' },
      { status: 400 }
    )

  } catch (error) {
    console.error('Registration error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}