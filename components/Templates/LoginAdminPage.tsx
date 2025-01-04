"use client"
import { Form } from "@nextui-org/form"
import { useForm } from "react-hook-form"
import CustomInput from "../module/CustomInput"
import { zodResolver } from "@hookform/resolvers/zod"
import { signinValidate } from "@/validation/SigninValidation"
import { FaUser } from "react-icons/fa";
import CustomButton from "../module/CustomButton"
import { useSession } from "next-auth/react"

const LoginAdminPage = () => {
    const { control, handleSubmit, formState: { errors }
    } = useForm({
        resolver: zodResolver(signinValidate)
    })
    const sesion = useSession()
    console.log(sesion);
    return (
        <main className="flex items-center justify-center flex-col relative min-h-screen max-h-screen ">
            <div className="border-2 mx-auto text-[52px] text-gray-400 rounded-full p-4 translate-y-10 bg-[#fff] ">
                <FaUser />
            </div>
            <Form className="shadow-custom w-full  md:w-2/3 lg:w-1/3 h-1/2 p-4 rounded-lg ">
                <h2 className="text-24 font-extrabold my-4">
                    ورود  ادمین
                </h2>
                <CustomInput label={'نام کاربری'} control={control} error={"Error"} name="username" />
                <CustomInput label={'رمز عبور'} control={control} error={"Error"} name="password" />
                <CustomButton>
                    ورود
                </CustomButton>
            </Form>
        </main>
    )
}

export default LoginAdminPage