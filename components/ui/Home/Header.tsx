import React from 'react'
import ActiveLink from './ActiveLink';
import Image from 'next/image';
import Link from 'next/link';
import ChatHeader from './ChatHeader';

const Header = () => {
  
  return (
    <header className=' hidden lg:grid  grid-cols-3  mt-4 items-center' >
      {/* chat */}
      <ChatHeader />
      {/* menu */}
      <div className='justify-self-center'>
        <ul className='flex items-center gap-12 '>
          <ActiveLink href={'/'} label={'خانه'} />
          <ActiveLink href={'/projects'} label={'پروژه ها'} />
          <ActiveLink href={'/about-me'} label={'درباره من'} />
        </ul>
      </div>
      {/* logo */}
      <div className='w-28 h-8 justify-self-end'>
        <Link href={'/'}>
          <Image alt='logo' className='w-full h-full object-cover' src='/logo/me.png' width={1000} height={1000} />
        </Link>
      </div>
    </header>
  )
}

export default Header