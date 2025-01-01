import React from 'react'
import InformationBox from '../ui/Home/InformationBox'
import Image from 'next/image'

const HomePage = () => {
    return (
        <div className='grid grid-cols-2 items-center w-full h-full justify-items-center'>
            <InformationBox />
            <div >
                <div className='border-1 border-purple-800 rounded-full w-[450px] h-[450px] p-6 image-landing'>
                    <Image alt='me' width={400} height={400} className='grayscale w-full rounded-full h-full ' src={'/images/061b4d89-cd4f-4a55-99af-ecdd0b794bf4.jpg'} />
                </div>
            </div>
        </div>
    )
}

export default HomePage