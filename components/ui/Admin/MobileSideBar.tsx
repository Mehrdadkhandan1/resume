"use client"
import CustomButton from '@/components/module/CustomButton'
import React, { useState } from 'react'
import Logout from './Logout'
import Navbar from './navbar'
import { CgMenuRightAlt } from "react-icons/cg";

const MobileSideBar = () => {
    const [menu, showMenu] = useState<boolean>(false)

    return (
        <>

            <aside className={`flex p-3 pb-4 fixed ${menu ? "right-0 " : "-right-full"} transition-all  bg-white z-20 items-center flex-col gap-3 shadow-custom rounded-lg w-1/2 lg:w-full  border-gray-800 `}>

                <div className='my-b w-full border-b pb-3 flex items-center justify-between ' >
                    <h3 className='text-20 xl:text-24 font-semibold'>
                        پنل ادمین
                    </h3>
                    <Logout />
                </div>
                <CustomButton className='w-full bg-purple-300 text-purple-800 font-bold'>
                    اضافه کردن پروژه
                </CustomButton>
                <Navbar />
            </aside>
            <CustomButton onClick={() => showMenu(true)} className='absolute z-10 top-3 right-3 !p-0 min-w-0 min-h-0 w-10 h-10 bg-black !text-white text-24 !rounded-full'>
                <CgMenuRightAlt size={20} />
            </CustomButton>
        </>
    )
}

export default MobileSideBar