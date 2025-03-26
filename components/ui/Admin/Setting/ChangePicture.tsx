'use client'

import Image from 'next/image'
import React, { useState } from 'react'
import { Control, Controller, FieldError, FieldValues, Path } from 'react-hook-form'
import { MdAdd } from 'react-icons/md'
type Props = {
    control: Control,
    name: string,
    error?: FieldError,


}
const ChangePicture = ({ control, name, }: Props) => {
    const [picture, setPicture] = useState<string>('')
    return (
        <div className='flex flex-col gap-4'>
            <h3 className='font-bold'>
                تصویر شما
            </h3 >
            <div className='w-full h-[350px]' >
                <div className='w-12/12  border-2 h-[300px] rounded-lg mx-auto flex items-center justify-center flex-col gap-2 '>
                    {!picture ? <label className='cursor-pointer flex items-center justify-center flex-col gap-2' htmlFor={name}> <MdAdd />
                        <span className='cursor-pointer font-bold' >
                            انتخاب تصویر
                        </span>
                    </label> : <div className='h-full w-full' ><Image className='w-full h-full object-cover' src={picture} alt='تصویر پروژه' height={200} width={200} /></div>}

                </div>
                <Controller
                    control={control}
                    name="picture"
                    render={({ field }) => (
                        <input
                            type="file"
                            id="picture"
                            onChange={(e) => {
                                if (e.target.files && e.target.files.length > 0) {
                                    const urlCretor = URL.createObjectURL(e.target.files[0])
                                    setPicture(urlCretor)
                                    field.onChange(e.target.files);
                                }
                            }}
                            className="opacity-0 fixed -top-5 -left-5"
                        />
                    )}
                />
            </div>
        </div >
    )
}

export default ChangePicture