import React from 'react'
import Header from '../ui/Home/Header'
import MobileHeader from '../ui/Home/MobileHeader'

const LayoutHome = ({ children }: Readonly<{
    children: React.ReactNode
}>) => {
    return (
        <div className='w-full h-full relative'>
            <Header />
            <MobileHeader />
            {children}
        </div>
    )
}

export default LayoutHome   