"use client"
import CustomInput from '@/components/module/CustomInput'
import CustomTextarea from '@/components/module/CustomTextarea'
import React from 'react'
import { useForm } from 'react-hook-form'
import ChangePicture from './ChangePicture'
import CustomButton from '@/components/module/CustomButton'

const FormEdit = () => {
  const { control, handleSubmit, formState: { errors }, getValues } = useForm({
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
      <form className='grid grid-cols-1 gap-4' onSubmit={handleSubmit(submitEdit)}>
        <ChangePicture control={control} name='picture' />
        <CustomInput control={control} name='name' label='نام' />
        <CustomTextarea control={control} name='description' label='توضیحات ' />
        <div>
          <CustomButton type='submit' className='bg-black text-white'>
            ثبت تغیرات
          </CustomButton>
        </div>
      </form>
    </div>
  )
}

export default FormEdit