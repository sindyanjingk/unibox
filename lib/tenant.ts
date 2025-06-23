
import { prisma } from './prisma'

export async function getTenantBySubdomain(subdomain: string) {
  return await prisma.tenant.findUnique({
    where: { subdomain },
    include: {
      owner: true,
      tenantProducts: {
        include: {
          product: {
            include: {
              category: true
            }
          }
        },
        where: {
          isActive: true,
          product: {
            isActive: true
          }
        }
      }
    }
  })
}

export async function getTenantProducts(tenantId: string, categoryId?: string) {
  return await prisma.tenantProduct.findMany({
    where: {
      tenantId,
      isActive: true,
      product: {
        isActive: true,
        ...(categoryId && { categoryId })
      }
    },
    include: {
      product: {
        include: {
          category: true
        }
      }
    },
    orderBy: {
      product: {
        sort: 'asc'
      }
    }
  })
}

export async function createTenant(data: {
  subdomain: string
  name: string
  ownerEmail: string
  ownerName: string
  ownerPassword: string
  platformId: string
}) {
  return await prisma.tenant.create({
    data: {
      subdomain: data.subdomain,
      name: data.name,
      platformId: data.platformId,
      owner: {
        create: {
          email: data.ownerEmail,
          name: data.ownerName,
          password: data.ownerPassword,
          role: 'reseller',
          isOwner: true
        }
      }
    },
    include: {
      owner: true
    }
  })
}
