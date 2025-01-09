"use client"
import { Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from '@nextui-org/dropdown'
import { signOut } from 'next-auth/react'
import React, { useState } from 'react'
import { IoMdArrowDropdown } from 'react-icons/io'
import { IoMdLogOut } from "react-icons/io";

const Logout = () => {
    const [loading, setLoading] = useState<boolean>(false)
    const signoutHandler = async () => {

        const res = await signOut({ redirect: false })
        console.log(console.log(res))
    }

    return (
        <Dropdown className='[&>*]:p-0 rounded-md text-20 ' classNames={{ base: 'outline-0 ', }}>
            <DropdownTrigger className='cursor-pointer' >
                <IoMdArrowDropdown className='text-20' />
            </DropdownTrigger>

            <DropdownMenu >
                <DropdownItem
                    onPress={signoutHandler}
                    startContent={<IoMdLogOut />}
                    key='new'>
                    خروج از حساب
                </DropdownItem>
            </DropdownMenu>
        </Dropdown>
    )
}

export default Logout


// تعداد پروژه ها

// تعداد بازدید ها 

//  پیام ها

// پروژه اضافه شده اخیر