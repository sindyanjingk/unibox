// app/api/register/route.ts
import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import bcrypt from 'bcryptjs'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, password, phone, tenantName, tenantSlug } = body

    // Cek slug tenant sudah dipakai belum
    const existingTenant = await prisma.tenant.findUnique({
      where: { slug: tenantSlug }
    })

    if (existingTenant) {
      return NextResponse.json(
        { error: 'Slug sudah digunakan, silakan pilih yang lain.' },
        { status: 400 }
      )
    }

    // Cek apakah user dengan email yang sama sudah ada (opsional)
    const existingUser = await prisma.user.findUnique({
      where: { email }
    })

    if (existingUser) {
      return NextResponse.json(
        { error: 'Email sudah terdaftar. Silakan login atau gunakan email lain.' },
        { status: 400 }
      )
    }

    const hashedPassword = await bcrypt.hash(password, 12)

    // Buat user dan tenant sekaligus (transaksi)
    const result = await prisma.$transaction(async (tx) => {
      // Buat user baru sebagai owner
      const user = await tx.user.create({
        data: {
          fullName: name,
          email,
          password: hashedPassword,
          phone,
          role: 'owner',
        }
      })

      // Buat tenant dan hubungkan ke user sebagai owner + member
      const tenant = await tx.tenant.create({
        data: {
          name: tenantName,
          slug: tenantSlug,
          email,
          phone,
          isActive: true,
          verified: false,
          primaryColor: '#6366f1',
          secondaryColor: '#8b5cf6',
          owner: {
            connect: { id: user.id }
          },
          users: {
            connect: { id: user.id } // sebagai member juga
          }
        }
      })

      return { tenant, user }
    })

    return NextResponse.json({
      message: 'Website dan akun berhasil dibuat',
      tenant: {
        id: result.tenant.id,
        slug: result.tenant.slug,
        name: result.tenant.name
      },
      user: {
        id: result.user.id,
        email: result.user.email,
        fullName: result.user.fullName
      }
    })

  } catch (error) {
    console.error('❌ Registration error:', error)
    return NextResponse.json(
      { error: 'Terjadi kesalahan pada server.' },
      { status: 500 }
    )
  }
}
