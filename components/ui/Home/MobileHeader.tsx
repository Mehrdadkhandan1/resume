import Image from 'next/image'
import React from 'react'


const MobileHeader = () => {
    
    return (
        <nav className='h-20 '>
            <header className=' grid grid-cols-2 w-full'>
                <ul className='felx items-center gap-2 '>
                    <li>
                    </li>
                </ul>
                <div className='justify-items-end'>
                    <Image alt='logo' className='w-28 ' src='/logo/me.png' width={250} height={100} />
                </div>
            </header>

        </nav>
    )
}

export default MobileHeader