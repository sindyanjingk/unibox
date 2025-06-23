
import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
  // Create Platform
  const platform = await prisma.platform.upsert({
    where: { id: 'unibox-platform' },
    update: {},
    create: {
      id: 'unibox-platform',
      name: 'UniBox',
      domain: 'unibox.id',
      settings: {
        allowRegistration: true,
        defaultTheme: 'dark',
        supportEmail: 'support@unibox.id'
      }
    }
  })

  // Create Platform Admin
  const hashedPassword = await bcrypt.hash('admin123', 10)
  const admin = await prisma.platformAdmin.upsert({
    where: { email: 'admin@unibox.id' },
    update: {},
    create: {
      email: 'admin@unibox.id',
      password: hashedPassword,
      name: 'Platform Admin',
      role: 'super_admin',
      platformId: platform.id
    }
  })

  // Create Categories
  const categories = [
    {
      name: 'Social Media',
      slug: 'social-media',
      icon: '📱',
      description: 'Layanan untuk platform media sosial'
    },
    {
      name: 'Gaming',
      slug: 'gaming',
      icon: '🎮',
      description: 'Top up game dan voucher gaming'
    },
    {
      name: 'PPOB',
      slug: 'ppob',
      icon: '💳',
      description: 'Pembayaran tagihan dan pulsa'
    },
    {
      name: 'Premium Accounts',
      slug: 'premium-accounts',
      icon: '⭐',
      description: 'Akun premium berbagai platform'
    }
  ]

  for (const [index, cat] of categories.entries()) {
    await prisma.category.upsert({
      where: { 
        slug_platformId: {
          slug: cat.slug,
          platformId: platform.id
        }
      },
      update: {},
      create: {
        ...cat,
        sort: index,
        platformId: platform.id
      }
    })
  }

  // Create Sample Products
  const socialMediaCategory = await prisma.category.findFirst({
    where: { slug: 'social-media', platformId: platform.id }
  })

  const gamingCategory = await prisma.category.findFirst({
    where: { slug: 'gaming', platformId: platform.id }
  })

  if (socialMediaCategory) {
    await prisma.product.upsert({
      where: {
        slug_platformId: {
          slug: 'instagram-followers-1000',
          platformId: platform.id
        }
      },
      update: {},
      create: {
        name: '1000 Instagram Followers',
        slug: 'instagram-followers-1000',
        description: 'Tambah 1000 followers Instagram real dan aktif',
        price: 25000,
        cost: 15000,
        type: 'social_media',
        provider: 'instagram',
        fields: {
          username_required: true,
          delivery_time: '1-24 jam',
          guarantee: '30 hari'
        },
        categoryId: socialMediaCategory.id,
        platformId: platform.id
      }
    })
  }

  if (gamingCategory) {
    await prisma.product.upsert({
      where: {
        slug_platformId: {
          slug: 'mobile-legends-86-diamonds',
          platformId: platform.id
        }
      },
      update: {},
      create: {
        name: '86 Diamonds Mobile Legends',
        slug: 'mobile-legends-86-diamonds',
        description: 'Top up 86 diamonds untuk Mobile Legends',
        price: 22000,
        cost: 20000,
        type: 'gaming',
        provider: 'mobile_legends',
        fields: {
          user_id_required: true,
          zone_id_required: true,
          delivery_time: '1-5 menit'
        },
        categoryId: gamingCategory.id,
        platformId: platform.id
      }
    })
  }

  console.log('✅ Database seeded successfully!')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
