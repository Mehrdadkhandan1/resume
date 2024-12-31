"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import React from 'react'
type Props = {
    href: string,
    label: React.ReactNode,

}
const ActiveLink = ({ href, label }: Props) => {
    const pathName = usePathname()

    const isActive = (path: string) => pathName === path
    return (
        <li>
            <Link href={href} className={`${isActive(href) ? "text-purple-500  font-bold" : "text-gray-400"} hover:opacity-80 text-18 transition-all `} >
                {label}
            </Link>
        </li>
    )
}

export default ActiveLink