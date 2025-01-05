"use client"
import React, { useEffect } from 'react'
import { SessionProvider, signIn, SignInResponse } from "next-auth/react"
import { Session } from 'next-auth'
import { NextUIProvider } from '@nextui-org/system'
type Props = {
    children: React.ReactNode,
    session: Session | null,
}
const AppProviders = ({ children, session }: Props) => {
    return (
        <SessionProvider session={session} >
            <NextUIProvider className='h-full relative'>
                {children}
            </NextUIProvider>
        </SessionProvider>
    )
}

export default AppProviders