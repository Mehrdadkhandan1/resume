"use client"

import CustomButton from '@/components/module/CustomButton'
import CustomInput from '@/components/module/CustomInput'
import CustomTextarea from '@/components/module/CustomTextarea'
import http from '@/services/http'
import { Project } from '@/types/Project'
import { addProjectValidation } from '@/validation/AddProjectValidation'
import { zodResolver } from '@hookform/resolvers/zod'
import React from 'react'
import { useForm } from 'react-hook-form'
import { MdAdd } from 'react-icons/md'

const AddProjectFrom = () => {
    const { control, handleSubmit, formState: { errors } } = useForm<Project>({
        mode: "onChange",
        resolver: zodResolver(addProjectValidation)

    })
    const submitProject = async (value) => {
        console.log(value);
        const res = await http.post('/projects/add-project',{name:"mosa"})
        console.log(res);
    }
    console.log(errors);
    return (
        <div>
            <div className='w-11/12 m-auto h-[400px] border-2 border-dashed rounded-lg my-4 flex items-center justify-center '>
                <label htmlFor='picture' className='text-24 cursor-pointer flex flex-col gap-2 ' >
                    <span className='border-2 border-dashed p-2 rounded-md flex items-center justify-center '>
                        <MdAdd />
                    </span>
                    <span className='font-semibold text-18'> اپلود تصویر
                    </span>
                </label>
                <CustomInput className='opacity-0 fixed -top-5 -left-5' control={control} name='picture' type='file' />
            </div>
            <div>
                <h3 className='text-18 font-semibold  my-3'>اطلاعات پروژه </h3>
                <form onSubmit={handleSubmit(submitProject)} className='flex gap-3 flex-col'>
                    <CustomInput className='w-1/2' control={control} name='name' label="نام پروژه" error={errors.name} />
                    <CustomTextarea className='w-full' control={control} name='description' label="توضیحات پروژه" error={errors.description} />
                    <div>
                        <CustomButton type='submit' className='bg-primary-300 text-white font-bold' >
                            ثبت پروژه
                        </CustomButton>
                    </div>

                </form>
            </div>

        </div>
    )
}

export default AddProjectFrom