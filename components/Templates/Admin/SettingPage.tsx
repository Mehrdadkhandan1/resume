import FormEdit from '@/components/ui/Admin/Setting/FormEdit'
import React from 'react'

const SettingPage = () => {
    return (
        <main className='grid grid-cols-1 md:grid-cols-7 lg:grid-cols-9 container py-3'>
            <h3 className='col-span-1 md:col-span-7 lg:col-span-9 text-24 font-bold'>
                تنظیمات
            </h3>
            
            <div className='col-span-9'>
            <FormEdit  />
            </div>
        </main>
    )
}

export default SettingPage