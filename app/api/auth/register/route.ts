
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
import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import bcrypt from 'bcryptjs'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, password, phone, registrationType, tenantName, tenantSlug } = body

    // Check if user already exists
    const existingUser = await prisma.user.findFirst({
      where: {
        email,
        ...(tenantSlug ? {
          tenant: {
            slug: tenantSlug
          }
        } : {
          tenantId: null
        })
      }
    })

    if (existingUser) {
      return NextResponse.json(
        { error: 'User already exists' },
        { status: 400 }
      )
    }

    const hashedPassword = await bcrypt.hash(password, 12)

    if (registrationType === 'tenant') {
      // Check if tenant slug is available
      const existingTenant = await prisma.tenant.findUnique({
        where: { slug: tenantSlug }
      })

      if (existingTenant) {
        return NextResponse.json(
          { error: 'Tenant slug already exists' },
          { status: 400 }
        )
      }

      // Create tenant and owner user in transaction
      const result = await prisma.$transaction(async (tx) => {
        const tenant = await tx.tenant.create({
          data: {
            name: tenantName,
            slug: tenantSlug,
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

        return { tenant, user }
      })

      return NextResponse.json({
        message: 'Tenant and user created successfully',
        tenant: result.tenant,
        user: { id: result.user.id, email: result.user.email, name: result.user.name }
      })

    } else if (registrationType === 'admin') {
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
        user: { id: user.id, email: user.email, name: user.name }
      })

    } else if (registrationType === 'customer' && tenantSlug) {
      // Register customer to specific tenant
      const tenant = await prisma.tenant.findUnique({
        where: { slug: tenantSlug }
      })

      if (!tenant) {
        return NextResponse.json(
          { error: 'Tenant not found' },
          { status: 404 }
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
        user: { id: user.id, email: user.email, name: user.name }
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
