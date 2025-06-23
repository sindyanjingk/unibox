
import { prisma } from './prisma'
import { Tenant } from '@prisma/client'

// Get tenant by slug
export async function getTenantBySlug(slug: string): Promise<Tenant | null> {
  try {
    const tenant = await prisma.tenant.findUnique({
      where: {
        slug: slug,
        isActive: true
      }
    })
    return tenant
  } catch (error) {
    console.error('Error fetching tenant:', error)
    return null
  }
}

// Get tenant with relations
export async function getTenantWithDetails(slug: string) {
  try {
    const tenant = await prisma.tenant.findUnique({
      where: {
        slug: slug,
        isActive: true
      },
      include: {
        categories: {
          where: { 
            products: { 
              some: { isActive: true } 
            } 
          },
          include: {
            _count: {
              select: { products: true }
            }
          }
        },
        _count: {
          select: {
            products: { where: { isActive: true } },
            orders: true,
            users: true
          }
        }
      }
    })
    return tenant
  } catch (error) {
    console.error('Error fetching tenant with details:', error)
    return null
  }
}

// Create new tenant
export async function createTenant(data: {
  slug: string
  name: string
  email?: string
  description?: string
}) {
  try {
    const tenant = await prisma.tenant.create({
      data: {
        ...data,
        categories: {
          create: [
            { name: 'Social Media', slug: 'social-media', icon: '📱' },
            { name: 'Gaming', slug: 'gaming', icon: '🎮' },
            { name: 'PPOB', slug: 'ppob', icon: '💳' },
            { name: 'Premium', slug: 'premium', icon: '👑' }
          ]
        }
      },
      include: {
        categories: true
      }
    })
    return tenant
  } catch (error) {
    console.error('Error creating tenant:', error)
    throw error
  }
}
