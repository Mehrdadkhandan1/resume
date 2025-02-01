import { authOption } from '@/app/api/auth/[...nextauth]/route'
import { getServerSession } from 'next-auth'
import Image from 'next/image'
import React from 'react'

const Banner = async () => {
    const session = await getServerSession(authOption)
    return (
        <div className='w-full bg-purple-200 rounded-lg p-1 flex lg:items-center relative  lg:justify-between flex-col lg:flex-row lg:p-10  gap-6  mt-5 '>

            <div className='h-full flex flex-col gap-6 mt-5 mr-4 '>
                <h3 className='lg:text-32 md:text-24 text-20  text-purple-700 font-bold   '>
                    خوش اومدی {session.user.name}
                </h3>
                <p className='font-semibold text-14 md:text-16 lg:text-18  opacity-70'>
                    روز کاری خوبی داشته باشی

                </p>
            </div>
            <div className='lg:w-1/2 '>
                <Image alt='welcome' width={350} height={250} src={'/images/welcome-dashboard.svg'} />
            </div>
        </div>
    )
}

export default Banner