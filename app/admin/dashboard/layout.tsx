import { authOption } from '@/app/api/auth/[...nextauth]/route'
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
    <main className='lg:grid lg:grid-cols-5 relative min-h-screen max-h-screen p-3 '>
      {/* side bar */}
      <section className='col-span-1 h-full relative'>
        <MobileSideBar />
      </section>
      {/* main */}
      <section className='col-span-4 px-4 overflow-y-scroll h-screen'>
        {children}
      </section>
    </main>
  )
}

export default LayoutDashboard