import React from 'react'
import Navbar from './navbar'
import CustomButton from '@/components/module/CustomButton'

import Logout from './Logout';
const Sidebar = () => {
    return (
        <aside className='flex p-3 pb-4 items-center flex-col gap-3 shadow-custom rounded-lg  border-gray-800 '>
            <div className='my-b w-full border-b pb-3 flex items-center justify-between ' >
                <h3 className='text-24  font-semibold'>
                    پنل ادمین
                </h3>
                <Logout />
            </div>
            <CustomButton className='w-full bg-purple-300 text-purple-800 font-bold'>
                اضافه کردن پروژه
            </CustomButton>
            <Navbar />
        </aside>
    )
}

export default Sidebar