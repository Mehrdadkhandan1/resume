import AddProjectFrom from '@/components/ui/Admin/add-project/AddProjectFrom'
import React from 'react'

const AddProjectPage = () => {
  return (
    <div className='container py-3'>
      <h3 className='text-24 font-bold '>
        اضافه کردن پروژه
      </h3>
      <div>
        <AddProjectFrom />
      </div>
    </div>
  )
}

export default AddProjectPage