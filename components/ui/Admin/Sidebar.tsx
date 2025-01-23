import Navbar from './navbar'

import Logout from './Logout';
import Link from 'next/link';
const Sidebar = () => {
    return (

        <aside className='lg:flex hidden  p-3 pb-4 items-center flex-col gap-3 shadow-custom rounded-lg  border-gray-800  '>

            <div className='my-b w-full border-b pb-3 flex items-center justify-between ' >
                <h3 className='text-20 xl:text-24 font-semibold'>
                    پنل ادمین
                </h3>
                <Logout />
            </div>
            <Link href={'/admin/dashboard/add-project'} className="w-full p-2 rounded-md text-center bg-purple-300 text-purple-800 font-bold">
                اضافه کردن پروژه
            </Link>
            <Navbar />
        </aside>
    )
}

export default Sidebar