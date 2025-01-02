"use client"
import { Form } from "@nextui-org/form"
import { useForm } from "react-hook-form"
import CustomInput from "../module/CustomInput"
import { zodResolver } from "@hookform/resolvers/zod"
import { signinValidate } from "@/validation/SigninValidation"
const LoginAdminPage = () => {
    const { control, handleSubmit, formState: { errors }
    } = useForm({
        resolver: zodResolver(signinValidate)
    })
    return (
        <main className="flex items-center justify-center relative min-h-screen max-h-screen ">
            <Form className="shadow-custom w-1/2 h-1/2 p-4 rounded-lg ">

                <h2 className="text-24 font-bold my-4">
                    صفحه ورود
                </h2>
                <CustomInput  label={'نام کاربری'} control={control} error={"Error"} name="username" />

            </Form>
        </main>
    )
}

export default LoginAdminPage