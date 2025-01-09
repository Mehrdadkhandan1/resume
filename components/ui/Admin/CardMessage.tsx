import CustomButton from '@/components/module/CustomButton'
import React from 'react'

const CardMessage = () => {
    return (
        <div className='p-2 shadow-lg border-purple-300 rounded-r-lg rounded-tl-xl border-2  flex flex-col gap-2 overflow-hidden'>
            <div className='border-b border-purple-300 py-1 flex items-center justify-between'>
                <h3 className='text-18 font-bold  '>
                    محمد محمدی
                </h3>
                <span className='text-14 font-light'>
                    1380-10-10
                </span>
            </div>
            <div className='flex  gap-4 flex-col'>
                <h3 className='text-18 font-semibold'>
                    سلام امیر
                </h3>
                <p className='line-clamp-3 py-1 '>
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرline-clamp-3line-clamp-3line-clamp-3line-clamp-3line-clamp-3line-clamp-3line-clamp-3line-clamp-3ها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
                </p>
                <div>
                    <CustomButton className='text-18 text-white bg-black font-bold !px-8'>
                        مشاهده
                    </CustomButton>
                </div>

            </div>
        </div>
    )
}

export default CardMessage