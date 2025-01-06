"use client"
import { Form } from "@nextui-org/form"
import { useForm } from "react-hook-form"
import CustomInput from "../module/CustomInput"
import { zodResolver } from "@hookform/resolvers/zod"
import { signinValidate } from "@/validation/SigninValidation"
import { FaUser } from "react-icons/fa";
import CustomButton from "../module/CustomButton"
import { signIn } from "next-auth/react"
import { User } from "@/types/User"
import toast from "react-hot-toast"
import { useState } from "react"
import { useRouter } from "next/navigation"

const LoginAdminPage = () => {
    const { control, handleSubmit, getValues,
        formState: { errors }
    } = useForm<User>({
        mode: "onChange",
        resolver: zodResolver(signinValidate)
    })
    const [loading, setLoading] = useState<boolean>(false)
    const navigate = useRouter()
    const siginUser = async () => {
        setLoading(true)
        const res = await signIn('credentials', { username: getValues('username'), password: getValues('password'), redirect: false })
        setLoading(false)
        if (res.ok) {
            toast.success("ورود موفق آمیر . در حال انتقال به داشبورد ....")
            navigate.push('/admin/dashboard')
        }
    }

    return (
        <main className="flex items-center justify-center flex-col relative min-h-screen max-h-screen ">
            <div className="border-2 mx-auto text-[52px]  text-gray-400 rounded-full p-4 translate-y-10 bg-[#fff] ">
                <FaUser />
            </div>
            <Form onSubmit={handleSubmit(siginUser)} className="shadow-custom w-full  md:w-2/3 lg:w-1/3 h-1/2 p-4 rounded-lg ">
                <h2 className="text-24  font-extrabold my-4">
                    ورود  ادمین
                </h2>
                <CustomInput label={'نام کاربری'} control={control} error={errors.username} name="username" />
                <CustomInput label={'رمز عبور'} control={control} error={errors.password} name="password" />
                <CustomButton loading={loading} className="bg-black text-white" type="submit">
                    ورود
                </CustomButton>
            </Form>
        </main>
    )
}

export default LoginAdminPage