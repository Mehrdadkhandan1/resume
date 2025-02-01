'use client'
import { Textarea, TextAreaProps } from '@nextui-org/input';
import { cn } from '@nextui-org/theme';
import React from 'react'
import { Control, Controller, FieldError, FieldValues, Path, PathValue } from 'react-hook-form';
type Props<T extends FieldValues> = {
    control: Control<T>;
    name: Path<T>,
    error?: FieldError,

} & TextAreaProps;
function CustomTextarea<T extends FieldValues>({ name, control, error, className, ...rest }: Props<T>) {
    return <Controller
        defaultValue={"" as PathValue<T, Path<T>>}
        control={control} name={name} render={({ field }) =>
            <Textarea
                errorMessage={<p> {error?.message}</p>}
                className={cn([className, 'border-1 rounded-lg'])}
                isInvalid={!!error}
                classNames={{
                    inputWrapper: "bg-transparent",
                    label: 'font-bold  '
                }}
                {...field}
                {...rest}
                label="توضیح مختصر" />

        } />

}

export default CustomTextarea