import { authOption } from '@/app/api/auth/[...nextauth]/route'
import LayoutDashboardAdmin from '@/components/layouts/LayoutDashboardAdmin'
import MobileSideBar from '@/components/ui/Admin/MobileSideBar'
import Sidebar from '@/components/ui/Admin/Sidebar'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import React from 'react'

const LayoutDashboard = async ({ children }) => {
  const sission = await getServerSession(authOption)
  if (!sission) {
    redirect('/')
  }
  return (
    <LayoutDashboardAdmin>
        {children}
    </LayoutDashboardAdmin>
  )
}

export default LayoutDashboard