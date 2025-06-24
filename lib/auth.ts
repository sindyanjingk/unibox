// lib/auth.ts
import { getServerSession, NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import { PrismaAdapter } from '@next-auth/prisma-adapter'
import { prisma } from './prisma'
import bcrypt from 'bcryptjs'

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' }
      },
      async authorize(credentials) {
        const { email, password } = credentials ?? {}
        if (!email || !password) return null

        try {
          const user = await prisma.user.findFirst({
            where: { email },
            include: {
              ownedTenants: true,
              memberOfTenants: true,
            }
          })

          if (!user) return null

          const isValid = await bcrypt.compare(password, user.password)
          if (!isValid) return null

          const defaultTenant = user.ownedTenants[0] ?? user.memberOfTenants[0] ?? null

          return {
            id: user.id,
            email: user.email,
            name: user.fullName,
            role: user.role ?? 'user',
            tenantId: defaultTenant?.id ?? null
          }
        } catch (error) {
          console.error('❌ Login error:', error)
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
        token.tenantId = user.tenantId ?? null
      }
      return token
    },
    async session({ session, token }) {
      if (session.user && token.sub) {
        session.user.id = token.sub
        session.user.role = token.role as string
        session.user.tenantId = (token.tenantId as string) ?? null
      }
      return session
    }
  },
  pages: {
    signIn: '/login'
  },
  secret: process.env.NEXTAUTH_SECRET
}

// helper to use in server components / middleware
export function getSession() {
  return getServerSession(authOptions) as Promise<{
    user: {
      id: string
      name?: string
      email: string
      role: string
      tenantId?: string | null
    }
  } | null>
}
