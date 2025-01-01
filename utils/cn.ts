
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

export const cn = (...className: any) => {
    return twMerge(clsx(className))
}

export default cn