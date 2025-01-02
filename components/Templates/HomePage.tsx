import React from 'react'
import InformationBox from '../ui/Home/InformationBox'
import Image from 'next/image'

const HomePage = () => {
    return (
        <div className='grid lg:grid-cols-2 items-center w-full h-full justify-items-center'>
            <InformationBox />
            <div >
                <div className='border-1 order-1 lg:order-2 border-purple-800 mx-auto  rounded-full w-9/12  md:w-[350px] md:h-[350px] lg:w-[450px] lg:h-[450px] p-6 image-landing '>
                    <Image alt='me' width={400} height={400} className='grayscale w-full rounded-full h-full ' src={'/images/061b4d89-cd4f-4a55-99af-ecdd0b794bf4.jpg'} />
                </div>
            </div>
        </div>
    )
}

export default HomePage