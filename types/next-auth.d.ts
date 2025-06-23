
import NextAuth from 'next-auth'

declare module 'next-auth' {
  interface Session {
    user: {
      id: string
      email: string
      name: string
      role: string
      tenantId?: string
      tenant?: {
        id: string
        name: string
        slug: string
        domain?: string
        logoUrl?: string
        primaryColor: string
        isActive: boolean
      }
    }
  }

  interface User {
    id: string
    email: string
    name: string
    role: string
    tenantId?: string
    tenant?: {
      id: string
      name: string
      slug: string
      domain?: string
      logoUrl?: string
      primaryColor: string
      isActive: boolean
    }
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    role: string
    tenantId?: string
    tenant?: {
      id: string
      name: string
      slug: string
      domain?: string
      logoUrl?: string
      primaryColor: string
      isActive: boolean
    }
  }
}
