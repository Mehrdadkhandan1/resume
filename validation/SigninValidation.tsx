import { z } from 'zod'

export const signinValidate = z.object({
    userName: z.string().nonempty('نام کاربری الزامی میباشد'),
    password: z.string().nonempty('رمز عبورد الزامی میباشد')
}) 