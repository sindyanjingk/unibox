
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
                tenantId: null // Admin users have no tenant
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
      return session
    }
  },
  pages: {
    signIn: '/login'
  },
  secret: process.env.NEXTAUTH_SECRET
}
