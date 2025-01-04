import CustomButton from '@/components/module/CustomButton'
import Link from 'next/link'
import React from 'react'

const NotFound = () => {
  return (
    <div className='h-full flex gap-4  items-center justify-center flex-col'>
      <h5 className='font-bold text-[45px] md:text-[50px]  lg:text-[90px] text-white bg-black rounded-md px-8 pt-2'>
        404
      </h5>
      <h3 className='font-bold text20 md:text-24 lg:text-36 '>
        صفحه مورد نظر یافت نشد
      </h3>
      <CustomButton  className='text-white bg-black'>
        <Link  className=' font-semibold w-full h-full  border-gray-500' href={'/'}>
          بازگشت به صفحه اصلی
        </Link>
      </CustomButton>
    </div>
  )
}

export default NotFound