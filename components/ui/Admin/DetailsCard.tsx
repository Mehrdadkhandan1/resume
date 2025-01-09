import getTextColor from '@/utils/colorPicker'
import React from 'react'
type Props = {
    icon: React.ReactNode,
    title: string,
    value: string,
}
const DetailsCard = ({ icon, title, value }: Props) => {
    return (
        <div className={`p-2 relative rounded-lg  bg-black bg-opacity-85 text-16 flex flex-col gap-3`} style={{
            color: getTextColor('#9333ea')
        }}>
            <span className='absolute opacity-50 text-[52px] left-2 top-2'>
                {icon}
            </span>
            <h3>
                {title}
            </h3>
            <p>
                {value}
            </p>
        </div>
    )
}

export default DetailsCard