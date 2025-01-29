import CustomInput from '@/components/module/CustomInput'
import React from 'react'
import { Control, FieldError, FieldValues, Path } from 'react-hook-form'
import { MdAdd } from 'react-icons/md'
type Props = {
    control: Control,
    name: string,
    error?: FieldError
}
const ChangePicture = ({ control, name }: Props) => {
    return (
        <div className='flex flex-col gap-3'>
            <h3>
                تصویر شما
            </h3 >
            <div >
                <div className='w-11/12  border-2 h-[300px] rounded-lg mx-auto flex items-center justify-center flex-col gap-2 '>
                    <label className='cursor-pointer' htmlFor={name}> <MdAdd />  </label>
                    <span className='cursor-pointer' >
                        انتخاب تصویر
                    </span>
                </div>
                <CustomInput name={name} control={control} className='fixed -top-full -left-full' />
            </div>
        </div >
    )
}

export default ChangePicture