import React from 'react'
import CardMessage from './CardMessage'

const Messages = () => {
    return (
        <div className=''>
            <h3 className='text-24 font-bold'> پیام ها</h3>
            <div className=' rounded-lg grid grid-cols-1 lg:grid-cols-2 gap-2 my-4  '>

                <CardMessage />
            </div>
        </div>
    )
}

export default Messages