"use client"
import { SessionProvider } from "next-auth/react"
import { Session } from 'next-auth'
import { NextUIProvider } from '@nextui-org/system'
import { Toaster } from "react-hot-toast"
type Props = {
    children: React.ReactNode,
    session: Session | null,
}
const AppProviders = ({ children, session }: Props) => {
    
    return (
        <SessionProvider session={session} >
            <NextUIProvider className='h-full relative'>
                {children}
                <Toaster position="bottom-left" />
            </NextUIProvider>
        </SessionProvider>
    )
}

export default AppProviders