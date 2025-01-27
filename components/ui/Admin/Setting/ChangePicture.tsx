import CustomInput from '@/components/module/CustomInput'
import React from 'react'
import { Control, FieldError, FieldValues, Path } from 'react-hook-form'
type Props = {
    control: Control,
    name: string,
    error?: FieldError
}
const ChangePicture = ({ control, name }: Props) => {
    return (
        <div>
            <h3>
                تصویر شما
            </h3 >
            <div>
                <CustomInput name={name} control={control} />
            </div>
        </div >
    )
}

export default ChangePicture