import { getServerSession } from "next-auth"
import { authOption } from "../../api/auth/[...nextauth]/route"
import { redirect } from 'next/navigation'
import LoginAdminPage from "@/components/Templates/Admin/LoginAdminPage"


const LoginAdmin = async () => {
    const session = await getServerSession(authOption)

    if (session?.user) {
        redirect('/admin/dashboard')

    }

    return (<LoginAdminPage />)
}

export default LoginAdmin