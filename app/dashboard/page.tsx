import { getSession } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { redirect } from 'next/navigation'
import DashboardPage from '@/components/dashboard/dashboard-page'

const Dashboard = async () => {
  const session = await getSession()
  if (!session) {
    redirect("/login")
  }

  const user = await prisma.user.findFirst({
    where: {
      email: session?.user.email
    },
    select: {
      id: true,
      email: true,
      fullName: true,
      phone: true,
      role: true,
    }
  })

  // Check if user has any sites
  const sites = await prisma.tenant.findMany({
    where: {
      OR: [
        { ownerId: user?.id },
        { users: { some: { id: user?.id } } }
      ]
    },
    orderBy: {
      createdAt: 'desc'
    }
  })

  // If user has sites, redirect to first site dashboard
  if (sites.length > 0) {
    redirect("/dashboard/site/" + sites[0].id)
  }

  // If no sites, show dashboard page to create one
  return <DashboardPage />
}

export default DashboardPage