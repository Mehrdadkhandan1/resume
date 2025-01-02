import LayoutHome from '@/components/layouts/LayoutHome'
import React from 'react'

const LayoutClient = ({ children }: { children: React.ReactNode }) => {
    return (<LayoutHome>
        {children}
    </LayoutHome>)
}

export default LayoutClient 