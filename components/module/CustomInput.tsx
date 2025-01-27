"use client"
import { Input, InputProps } from '@nextui-org/input'
import { cn } from '@nextui-org/theme'
import React from 'react'
import { Control, Controller, FieldError, FieldValues, Path, PathValue } from 'react-hook-form'
type CustomInputType<T extends FieldValues> = {
    control: Control<T>;
    name: Path<T>;
    error?: FieldError;
} & InputProps;



function CustomInput<T extends FieldValues>({
    className,
    control,
    name,
    error,
    label,
    ...rest
}: CustomInputType<T>) {
    return (
        <Controller name={name}
            defaultValue={"" as PathValue<T, Path<T>>}
            control={control} render={({ field }) => {
                return <Input
                    id={name}
                    {...rest}
                    isInvalid={!!error}
                    classNames={{
                        inputWrapper:"bg-transparent",
                        label: 'font-bold  '
                    }} className={cn([className, 'bg-transparent border-1   rounded-lg '])} label={label} {...field} name={name} errorMessage={<p>
                        {error?.message}
                    </p>} />
            }} />
    )
}

export default CustomInput