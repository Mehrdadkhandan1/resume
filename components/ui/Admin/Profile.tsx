import { authOption } from '@/app/api/auth/[...nextauth]/route'
import { getServerSession } from 'next-auth'
import Image from 'next/image'
import React from 'react'

const Profile = async () => {
    const session = await getServerSession(authOption)

    return (
        <div className='flex items-center flex-col gap-2 mt-4'>
            <div>
                <Image width={350} height={350} className='w-36 h-36 border-3 rounded-full p-2 border-purple-200' alt='profile' src={'/images/profile.png'} />
            </div>
            <p className='text-18 font-bold'>
               سلام  {session.user.name} 👋
            </p>
            
        </div>
    )
}

export default Profile