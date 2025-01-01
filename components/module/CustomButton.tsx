import cn from '@/utils/cn'
import { Button } from '@nextui-org/button'
import React from 'react'
type Props = {
    type?: "submit" | "button",
    children: React.ReactNode,
    className?: string,
    onClick?: () => void,
}
const CustomButton = ({
    type,
    children,
    className,
    onClick,
}: Props) => {
    return (
        <Button type={type} onPress={onClick} className={cn(className, 'rounded-md px-3 py-2 shadow-md')}>
            {children}
        </Button>
    )
}

export default CustomButton