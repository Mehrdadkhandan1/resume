import { InputProps } from '@nextui-org/input'

import DatePicker from "react-multi-date-picker"
import persian_fa from "react-date-object/locales/persian_fa"
import persian from "react-date-object/calendars/persian"


import React from 'react'
import { Control, Controller, FieldError, FieldValues, Path, UseFormSetValue } from 'react-hook-form'
type Props<T extends FieldValues> = {
    name: Path<T>,
    contorl: Control<T>
    error?: FieldError,

} & InputProps
function CustomDatePicker<T extends FieldValues>({ name, contorl, error, }: Props<T>) {
    return <Controller name={name} control={contorl} render={({ field }) => {
        return <div className='date-picker'>
            <DatePicker range onChange={(e) => {
                const start  = e[0].toDate()
                const end = e[1] && e[1].toDate()
                const newValue = [start,end]
                console.log(newValue);

                field.onChange(e)
            }} locale={persian_fa} calendar={persian} />
        </div>
    }} />
}

export default CustomDatePicker