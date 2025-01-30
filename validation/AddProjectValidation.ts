import { z } from "zod";

export const addProjectValidation = z.object({
  name: z.string().nonempty("نام پروژه الزامی است "),
  description: z.string().nonempty("جزئیات الزامی است "),
  picture: z
    .instanceof(FileList)
    .refine((files) => files.length > 0, "لطفا یک تصویر انتخاب کنید."),
});
