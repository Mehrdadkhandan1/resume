import { InputProps } from '@nextui-org/input'

import DatePicker from "react-multi-date-picker"
import persian_fa from "react-date-object/locales/persian_fa"
import persian from "react-date-object/calendars/persian"


import React from 'react'
import { Control, Controller, FieldError, FieldValues, Path } from 'react-hook-form'
type Props<T extends FieldValues> = {
    name: Path<T>,
    contorl: Control<T>
    error?: FieldError,

} & InputProps
function CustomDatePicker<T extends FieldValues>({ name, contorl, error }: Props<T>) {
    return <Controller name={name} control={contorl} render={({ field }) => {
        return <div className='date-picker'>
            <DatePicker range onChange={(e) => {
                console.log(e);
                const date= new Date(e)
            
                field.onChange(date)
            }} locale={persian_fa} calendar={persian} />
        </div>
    }} />
}

export default CustomDatePicker