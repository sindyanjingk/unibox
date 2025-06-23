
import { NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import { PrismaAdapter } from '@next-auth/prisma-adapter'
import { prisma } from './prisma'
import bcrypt from 'bcryptjs'

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
        tenantSlug: { label: 'Tenant Slug', type: 'text' }
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null
        }

        // For main site login (admin/owner)
        if (!credentials.tenantSlug) {
          // Check if it's main site admin login
          const adminUser = await prisma.admin.findUnique({
            where: { email: credentials.email }
          })

          if (adminUser && await bcrypt.compare(credentials.password, adminUser.password)) {
            return {
              id: adminUser.id,
              email: adminUser.email,
              name: adminUser.name,
              role: 'admin',
              tenantId: null
            }
          }
          return null
        }

        // For tenant-specific login
        const tenant = await prisma.tenant.findUnique({
          where: { slug: credentials.tenantSlug, isActive: true }
        })

        if (!tenant) return null

        const user = await prisma.user.findUnique({
          where: {
            email_tenantId: {
              email: credentials.email,
              tenantId: tenant.id
            }
          },
          include: { tenant: true }
        })

        if (user && await bcrypt.compare(credentials.password, user.password)) {
          return {
            id: user.id,
            email: user.email,
            name: user.fullName,
            role: 'user',
            tenantId: user.tenantId,
            tenantSlug: user.tenant.slug
          }
        }

        return null
      }
    })
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role
        token.tenantId = user.tenantId
        token.tenantSlug = user.tenantSlug
      }
      return token
    },
    async session({ session, token }) {
      session.user.id = token.sub as string
      session.user.role = token.role as string
      session.user.tenantId = token.tenantId as string
      session.user.tenantSlug = token.tenantSlug as string
      return session
    }
  },
  pages: {
    signIn: '/login',
    signUp: '/register'
  },
  session: {
    strategy: 'jwt'
  }
}
