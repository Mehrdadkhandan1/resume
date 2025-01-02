import Image from 'next/image'
import React from 'react'
import { ActiveLinkMobile } from './ActiveLink'
import { GoHome } from "react-icons/go";
import { TbUserStar } from "react-icons/tb";

import { GrProjects } from "react-icons/gr";
import ChatHeader from './ChatHeader';

const MobileHeader = () => {

    return (
        <nav className='h-20 relative w-full lg:hidden'>
            <header className=' flex md:justify-between gap-6 items-center   w-full mt-4 px-4' >
                <ChatHeader />

                <ul className='grid grid-cols-3   items-center justify-center justify-items-center    justify-self-center w-5/6 '>
                    <ActiveLinkMobile label='خانه' href='/' icon={<GoHome />} />
                    <ActiveLinkMobile label='پروژه ها' href='/projects' icon={<GrProjects />} />
                    <ActiveLinkMobile label='درباره من' href='/about-me' icon={<TbUserStar />} />
                </ul>
                <div className='justify-items-end col-span-1 justify-self-end '>
                    <Image alt='logo' className='w-28' src='/logo/me.png' width={250} height={100} />
                </div>
            </header>


        </nav>
    )
}

export default MobileHeader