"use client"

import CustomInput from '@/components/module/CustomInput'
import React from 'react'
import { useForm } from 'react-hook-form'
import { MdAdd } from 'react-icons/md'

const AddProjectFrom = () => {
    const { control, handleSubmit, formState: { errors } } = useForm()
    return (
        <div>
            <div className='w-11/12 m-auto h-[400px] border border-dashed rounded-lg my-4 flex items-center justify-center '>
                <label htmlFor='photo' className='text-24 flex flex-col gap-2 ' >
                    <span className='border-2 border-dashed p-2 rounded-md flex items-center justify-center '>
                        <MdAdd />
                    </span>
                    <span className='font-semibold text-18'> اپلود تصویر
                    </span>
                </label>
                <CustomInput className='opacity-0 fixed -top-5 -left-5' control={control} name='photo' type='file' />
            </div>

        </div>
    )
}

export default AddProjectFrom