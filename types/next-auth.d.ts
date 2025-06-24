// types/next-auth.d.ts
import NextAuth from "next-auth"

declare module "next-auth" {
  interface Session {
    user: {
      id: string
      name?: string
      email: string
      role: string
      tenantId?: string | null
    }
  }

  interface User {
    id: string
    email: string
    name?: string
    role: string
    tenantId?: string | null
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    role?: string
    tenantId?: string | null
  }
}
