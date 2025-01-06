import cn from '@/utils/cn'
import { Button } from '@nextui-org/button'
import React from 'react'
type Props = {
    type?: "submit" | "button",
    children: React.ReactNode,
    className?: string,
    loading?: boolean,
    onClick?: () => void,
}
const CustomButton = ({
    type,
    children,
    className,
    loading,
    onClick,
}: Props) => {
    return (
        <Button type={type} isLoading={loading} onPress={onClick} className={cn(className, 'rounded-md px-3 py-2 shadow-md')}>
            {children}
        </Button>
    )
}

export default CustomButton