'use client'
import Link from 'next/link'
import React from 'react'
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { FaRegFileCode, FaRegUser } from "react-icons/fa6";
import { usePathname } from 'next/navigation';
import { IoSettingsOutline } from "react-icons/io5";


const navIcons = [
    { href: "/admin/dashboard", name: 'داشبورد', icon: <MdOutlineSpaceDashboard /> },
    { href: "/admin/projects", name: 'پروژه ها ', icon: <FaRegFileCode /> },
    { href: "/admin/edit-user", name: 'ویرایش اطلاعات', icon: <FaRegUser /> },
    { href: "/admin/setting", name: 'تنظیمات سایت', icon: <IoSettingsOutline /> },
]

const Navbar = () => {
    const pathName = usePathname()

    const isActive = (path: string) => pathName === path
    return (
        <nav className={`flex flex-col gap-2 w-full px-3 mt-2 `}>
            <ul className='flex  gap-4 text-20 flex-col'>
                {navIcons.map((link, index) => {
                    return <li className={`${isActive(link.href) ? "bg-purple-200 font-medium text-purple-400" : "bg-transparent text-gray-500"} p-1 rounded-md  `} key={index} >
                        <Link className={`flex items-center gap-2`} href={link.href}>
                            <span className='text-20'>
                                {link.icon}
                            </span>
                            <span >
                                {link.name}
                            </span>
                        </Link>
                    </li>
                })}
            </ul>
        </nav >
    )
}

export default Navbar