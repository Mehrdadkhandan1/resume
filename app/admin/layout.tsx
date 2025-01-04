import connectDb from '@/utils/db';
import { getSession } from 'next-auth/react';
import Link from 'next/link'
import React from 'react'
import { FaLongArrowAltRight } from "react-icons/fa";

const LayoutAdmin = async ({ children }: any) => {
  await connectDb()
  const session = await getSession()
  console.log("session : " + session);

  return (
    <div className='p-4'>
      <div className='flex relative'>
        <Link className='bg-black absolute  gap-2 text flex items-center  text-white  p-2 rounded-lg' href={'/'}>
          <FaLongArrowAltRight />
          <span>
            بازگشت به صفحه اصلی
          </span>
        </Link>
      </div>
      {children}
    </div>
  )
}

export default LayoutAdmin