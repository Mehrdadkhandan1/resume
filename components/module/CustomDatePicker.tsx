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

            <DatePicker

                inputClass=' border py-1 px-2 rounded-lg bg-transparent placeholder:font-bold placeholder:text-foreground-500 '
                className='text-16 placeholder:text-16'
                range
                placeholder='تاریخ شروع و پایان '
                onChange={(e) => {
                    const startDate = e[0].toDate()
                    const endDate = e[1] && e[1].toDate()
                    const newValue = { startDate, endDate }
                    field.onChange(newValue)
                }} locale={persian_fa} calendar={persian} />
        </div>
    }} />
}

export default CustomDatePicker