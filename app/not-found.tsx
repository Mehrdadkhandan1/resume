import Link from 'next/link'
import React from 'react'

const NotFound = () => {
  return (
    <div className='h-full flex gap-4  items-center justify-center flex-col'>
      <h5 className='font-bold text-[90px] text-white bg-black rounded-md px-8 pt-2'>
        404
      </h5>
      <h3 className='font-bold text-36'>
        صفحه مورد نظر یافت نشد
      </h3>
      <Link className='mt-4 font-semibold border-b p-1 border-gray-500' href={'/'}>
        بازگشت به صفحه اصلی
      </Link>
    </div>
  )
}

export default NotFound