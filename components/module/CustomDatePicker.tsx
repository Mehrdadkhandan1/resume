import { InputProps } from '@nextui-org/input'
import React from 'react'
import {DateRangePicker} from "@heroui/date-picker";
import { Control, Controller, FieldError, FieldValues, Path } from 'react-hook-form'
type Props<T extends FieldValues> = {
    name: Path<T>,
    contorl: Control<T>
    error?: FieldError,

} & InputProps
function CustomDatePicker<T extends FieldValues>({ name, contorl, error }: Props<T>) {
    return <Controller name={name} control={contorl} render={() => {
        return <DateRangePicker   />;

    }} />
}

export default CustomDatePicker