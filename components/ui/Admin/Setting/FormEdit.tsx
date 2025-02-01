"use client"
import CustomInput from '@/components/module/CustomInput'
import CustomTextarea from '@/components/module/CustomTextarea'
import React from 'react'
import { useForm } from 'react-hook-form'
import ChangePicture from './ChangePicture'

const FormEdit = () => {
  const { control, handleSubmit, formState: { errors } } = useForm({
    mode: 'onChange',
  })
  const submitEdit = async (value: {}) => {
    console.log(value);
  }
  return (
    <div className='flex flex-col gap-4 mt-4'>
      <h3 className='text-18 font-semibold text-primary-300'>
        صفحه اصلی
      </h3>
      <form onSubmit={handleSubmit(submitEdit)}>
        <CustomInput control={control} name='welcome' label='پیام خوش آمد گویی' />
        <CustomTextarea control={control} name='description' label='توضیحات ' />
        <ChangePicture control={control} name='picture' />
      </form>
    </div>
  )
}

export default FormEdit