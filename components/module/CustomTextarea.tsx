'use client'
import { Textarea, TextAreaProps } from '@nextui-org/input';
import React from 'react'
import { Control, Controller, FieldError, FieldValues, Path } from 'react-hook-form';
type Props<T extends FieldValues> = {
    control: Control<T>;
    name: Path<T>,
    error?: FieldError,

} & TextAreaProps;
function CustomTextarea<T extends FieldValues>({ name, control, error, className, ...rest }: Props<T>) {

    return <Controller control={control} name={name} render={({ field }) => <>
        <Textarea
            errorMessage={error.message}
            className={className}
            {...field}
            {...rest}
            label="توضیحات" placeholder="توضیحات پروژه" />
    </>
    } />

}

export default CustomTextarea