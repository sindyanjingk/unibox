import { getSession } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { redirect } from 'next/navigation'
import React from 'react'

type Props = {}

const DashboardPage = async (props: Props) => {
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

  const site = await prisma.tenant.findFirst({
    where: {
      users: {
        some: {
          id: user?.id
        }
      }
    }
  })
  console.log({ site });
  if (site) {
    redirect("/dashboard/site/" + site.id)
  }
  return (
    <div className='h-screen w-screen flex items-center justify-center'>
      <div className="text-md">Oops! it's looks like you don't have any site yet</div>
    </div>
  )
}

export default DashboardPage