
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  // Create sample tenant
  const tenant = await prisma.tenant.upsert({
    where: { slug: 'tokodigital' },
    update: {},
    create: {
      slug: 'tokodigital',
      name: 'TokoDigital Store',
      description: 'Toko digital terpercaya sejak 2020. Melayani kebutuhan digital Anda dengan harga terbaik dan pelayanan 24/7.',
      email: 'admin@tokodigital.com',
      whatsapp: '+6281234567890',
      verified: true,
      primaryColor: '#6366f1',
      secondaryColor: '#8b5cf6'
    }
  })

  // Create categories
  const categories = await Promise.all([
    prisma.category.upsert({
      where: { slug_tenantId: { slug: 'social-media', tenantId: tenant.id } },
      update: {},
      create: {
        name: 'Social Media',
        slug: 'social-media',
        description: 'Layanan untuk semua platform media sosial',
        icon: '📱',
        tenantId: tenant.id
      }
    }),
    prisma.category.upsert({
      where: { slug_tenantId: { slug: 'gaming', tenantId: tenant.id } },
      update: {},
      create: {
        name: 'Gaming',
        slug: 'gaming',
        description: 'Top up diamond, UC, dan voucher game',
        icon: '🎮',
        tenantId: tenant.id
      }
    }),
    prisma.category.upsert({
      where: { slug_tenantId: { slug: 'ppob', tenantId: tenant.id } },
      update: {},
      create: {
        name: 'PPOB',
        slug: 'ppob',
        description: 'Pembayaran tagihan dan pulsa',
        icon: '💳',
        tenantId: tenant.id
      }
    }),
    prisma.category.upsert({
      where: { slug_tenantId: { slug: 'premium', tenantId: tenant.id } },
      update: {},
      create: {
        name: 'Premium',
        slug: 'premium',
        description: 'Account premium Netflix, Spotify, dll',
        icon: '👑',
        tenantId: tenant.id
      }
    })
  ])

  // Create sample products
  const products = [
    {
      name: 'Instagram Followers 1K',
      slug: 'instagram-followers-1k',
      description: 'Real followers Indonesia, garansi 30 hari',
      price: 15000,
      originalPrice: 20000,
      cost: 10000,
      categoryId: categories[0].id,
      tenantId: tenant.id,
      provider: 'provider1',
      providerCode: 'IG_FOLLOWERS_1K'
    },
    {
      name: 'Mobile Legends 275 Diamond',
      slug: 'mobile-legends-275-diamond',
      description: 'Proses instant, aman dan terpercaya',
      price: 75000,
      cost: 65000,
      categoryId: categories[1].id,
      tenantId: tenant.id,
      provider: 'provider1',
      providerCode: 'ML_DIAMOND_275'
    },
    {
      name: 'PLN Token 50K',
      slug: 'pln-token-50k',
      description: 'Token PLN 50.000 dengan admin 1000',
      price: 51000,
      cost: 50000,
      categoryId: categories[2].id,
      tenantId: tenant.id,
      provider: 'provider1',
      providerCode: 'PLN_TOKEN_50K'
    },
    {
      name: 'Netflix Premium 1 Bulan',
      slug: 'netflix-premium-1-bulan',
      description: 'Account Netflix Premium sharing 1 bulan',
      price: 65000,
      originalPrice: 80000,
      cost: 45000,
      categoryId: categories[3].id,
      tenantId: tenant.id,
      provider: 'provider1',
      providerCode: 'NETFLIX_PREMIUM_1M'
    }
  ]

  for (const productData of products) {
    await prisma.product.upsert({
      where: { slug_tenantId: { slug: productData.slug, tenantId: tenant.id } },
      update: {},
      create: productData
    })
  }

  // Create sample user
  const user = await prisma.user.upsert({
    where: { email_tenantId: { email: 'user@example.com', tenantId: tenant.id } },
    update: {},
    create: {
      email: 'user@example.com',
      fullName: 'John Doe',
      phone: '+6281234567890',
      password: '$2a$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', // password
      tenantId: tenant.id,
      emailVerified: true
    }
  })

  console.log('Seed data created successfully!')
  console.log('Tenant:', tenant.name)
  console.log('Categories:', categories.length)
  console.log('Products:', products.length)
  console.log('User:', user.email)
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
