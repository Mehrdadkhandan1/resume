import { authOption } from '@/app/api/auth/[...nextauth]/route'
import { getServerSession } from 'next-auth'
import Image from 'next/image'
import React from 'react'

const Banner = async () => {
    const session = await getServerSession(authOption)
    console.log(session);
    return (
        <div className='w-full bg-purple-200 rounded-lg p-3 flex items-center relative  justify-between  h-52 mt-5 '>

            <div className='h-full flex flex-col gap-6 mt-5 mr-4 '>
                <h3 className='text-32  text-purple-700 font-bold   '>
                    خوش اومدی {session.user.name}
                </h3>
                <p className='font-semibold  opacity-70'>
                    روز کاری خوبی داشته باشی

                </p>
            </div>
            <div className='w-1/2'>
                <Image alt='welcome' width={350} height={250} src={'/images/welcome-dashboard.svg'} />
            </div>
        </div>
    )
}

export default Banner