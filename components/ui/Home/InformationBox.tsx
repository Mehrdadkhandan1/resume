import CustomButton from '@/components/module/CustomButton'
import Link from 'next/link'
import React from 'react'

const InformationBox = () => {
    return (
        <div className='flex flex-col gap-6  information-landing'>
            <h4 className='text-18 font-semibold'>
                سلام من مهردادم 👋
            </h4>
            <h1 className='font-bold text-36 line-clamp-2 ' >
                برنامه نویس <span className='text-purple-500'>فرانت </span> اند
            </h1>
            <p className='text-16 font-medium line-clamp-2 font '>
                یه برنامه نویس پر شور با دوسال تجربه در زمینه فرانت اند با کتابخونه های ری اکت و نکست جی اس
            </p>
            <div>
                <CustomButton className='font-bold text-white bg-black'>
                    <Link href={'/projects'} >
                        مشاهده نمونه کار
                    </Link>
                </CustomButton>
            </div>
        </div>
    )
}

export default InformationBox