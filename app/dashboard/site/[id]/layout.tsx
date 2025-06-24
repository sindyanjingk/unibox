import { getSession } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { redirect } from 'next/navigation'

export default async function SiteDashboardLayout({
  children,
  params
}: {
  children: React.ReactNode
  params: { id: string }
}) {
  const session = await getSession()

  if (!session) {
    redirect('/login')
  }

  // Verify user has access to this site
  const site = await prisma.tenant.findFirst({
    where: {
      id: params.id,
      OR: [
        { ownerId: session.user.id },
        { users: { some: { id: session.user.id } } }
      ]
    }
  })

  if (!site) {
    redirect('/dashboard')
  }

  return <>{children}</>
}