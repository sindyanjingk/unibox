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
        tenantSlug: { label: 'Tenant Slug', type: 'text', optional: true },
        userType: { label: 'User Type', type: 'text' }
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null
        }

        try {
          // For admin/main site login
          if (credentials.userType === 'admin') {
            const user = await prisma.user.findFirst({
              where: {
                email: credentials.email,
                role: 'ADMIN',
                tenantId: null
              },
              include: {
                tenant: true
              }
            })

            if (!user) {
              return null
            }

            const passwordMatch = await bcrypt.compare(credentials.password, user.password)
            if (!passwordMatch) {
              return null
            }

            return {
              id: user.id,
              email: user.email,
              name: user.name,
              role: user.role,
              tenantId: user.tenantId,
              tenant: user.tenant
            }
          }

          // For tenant user login
          if (credentials.tenantSlug) {
            const tenant = await prisma.tenant.findUnique({
              where: { slug: credentials.tenantSlug }
            })

            if (!tenant) {
              return null
            }

            const user = await prisma.user.findFirst({
              where: {
                email: credentials.email,
                tenantId: tenant.id
              },
              include: {
                tenant: true
              }
            })

            if (!user) {
              return null
            }

            const passwordMatch = await bcrypt.compare(credentials.password, user.password)
            if (!passwordMatch) {
              return null
            }

            return {
              id: user.id,
              email: user.email,
              name: user.name,
              role: user.role,
              tenantId: user.tenantId,
              tenant: user.tenant
            }
          }

          return null
        } catch (error) {
          console.error('Auth error:', error)
          return null
        }
      }
    })
  ],
  session: {
    strategy: 'jwt'
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role
        token.tenantId = user.tenantId
        token.tenant = user.tenant
      }
      return token
    },
    async session({ session, token }) {
      session.user.id = token.sub
      session.user.role = token.role
      session.user.tenantId = token.tenantId
      session.user.tenant = token.tenant
    }
  },
  pages: {
    signIn: '/login'
  },
  secret: process.env.NEXTAUTH_SECRET
}