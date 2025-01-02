"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import React from 'react'
type Props = {
    href: string,
    label: React.ReactNode,
    icon?: React.ReactNode

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

export const ActiveLinkMobile = ({ href, label, icon }: Props) => {
    const pathName = usePathname()

    const isActive = (path: string) => pathName === path
    return (
        <li className={`  ${isActive(href) ? 'bg-purple-600 header-animate' : ''} py-1 rounded-xl bg-opacity-30 w-full overflow-hidden`}>

            <Link href={href} className={`${isActive(href) ? "text-purple-500  font-medium transition-all" : "text-gray-600"} relative  justify-center hover:opacity-80 text-16 transition-all flex items-center gap-1  flex-nowrap `} >
                <span className={` 
                    bubble 
                     bg-green-50 
                     font-bold py-2 px-4   overflow-hidden group  to-white bottom-0  rounded-md   ${isActive(href) ? ' block' : 'hidden'}  `}>

                </span>
                <span className='text-18 '>
                    {icon}
                </span>
                <span className={`${isActive(href) ? 'block' : "hidden"} text-nowrap`}>
                    {label}
                </span>
            </Link>
        </li>
    )
}