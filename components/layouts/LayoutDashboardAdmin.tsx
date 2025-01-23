import React from 'react'
import MobileSideBar from '../ui/Admin/MobileSideBar'
import Sidebar from '../ui/Admin/Sidebar'

const LayoutDashboardAdmin = ({ children }: { children: React.ReactNode }) => {
    return (
        <main className='lg:grid lg:grid-cols-12 relative min-h-screen max-h-screen p-3 w-full '>
            {/* side bar */}
            <section className='col-span-3 h-full relative'>
                <MobileSideBar />
                <Sidebar />
            </section>
            {/* main */}
            <section className='col-span-9 px-4 overflow-y-scroll h-screen'>
                {children}
            </section>
        </main>
    )
}

export default LayoutDashboardAdmin