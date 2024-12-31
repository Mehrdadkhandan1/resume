import React from 'react'
import Header from '../ui/Home/Header'

const LayoutHome = ({ children }: Readonly<{
    children: React.ReactNode
}>) => {
    return (
        <div>
            <Header />
            {children}
        </div>
    )
}

export default LayoutHome   