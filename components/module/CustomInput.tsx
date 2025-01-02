"use client"
import { Input } from '@nextui-org/input'
import { cn } from '@nextui-org/theme'
import React from 'react'
import { Control, Controller, FieldValues } from 'react-hook-form'

type Props = {
    name: string,
    control: Control<FieldValues>
    error: string | null,
    label: string,
    className?: string

}

const CustomInput = ({ name, control, error, label, className }: Props) => {
    return (
        <Controller name={name} control={control} render={({ field }) => {
            return <Input className={cn(className,'bg-transparent border-1  rounded-lg')} label={label} {...field} name={name} errorMessage={error} />
        }} />
    )
}

export default CustomInput