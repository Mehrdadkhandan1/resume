import React from 'react'
import DetailsCard from './DetailsCard'
import { LuEye } from "react-icons/lu";
import { GoProjectSymlink } from "react-icons/go";
import { RiUserSharedLine } from "react-icons/ri";

const Details = () => {
    return (
        <div className='grid grid-cols-3 gap-4'>
            <DetailsCard icon={<LuEye />} title='بازدید از سایت' value='100' />
            <DetailsCard icon={<GoProjectSymlink />} title='اخرین پروژه ثبت شده' value='100' />
            <DetailsCard icon={<RiUserSharedLine />} title='اخرین بازدید شما ' value='100' />
        </div>
    )
}

export default Details