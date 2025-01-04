import { authenticate } from "@/services/authService"
import { compareTextWithHash } from "@/utils/hash"
import NextAuth, { AuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

export const authOption: AuthOptions = {
    providers: [CredentialsProvider({
        name: 'Credentials',
        credentials: {
            username: {},
            password: {},
        },
        async authorize(credentials, req) {
            if (typeof credentials !== 'undefined') {
                const checkUser = await authenticate(credentials?.username, credentials.password)
                console.log(`${checkUser} user name`);
                return { status: "success", user: checkUser }
            } else {
                return { status: 'feaild', data: '' }
            }
        }
        ,
    })], session: { strategy: "jwt" }

}



const handler = NextAuth(authOption)

export { handler as GET, handler as POST }