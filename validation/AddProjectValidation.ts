import { z } from "zod";

export const addProjectValidation = z.object({
    name: z.string().nonempty("نام پروژه الزامی است "),
    description: z.string().nonempty("جزئیات الزامی است "),
    picture: z.any(),
    link: z.string()
})