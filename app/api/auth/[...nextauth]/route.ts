import { authenticate } from "@/services/authService"
import { User } from "@/types/User"
import NextAuth, { AuthOptions, Awaitable } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

export const authOption: AuthOptions = {
    secret: process.env.SECRET_KEY,

    providers: [CredentialsProvider({
        name: 'Credentials',
        credentials: {
            username: {},
            password: {},
        },
        async authorize(credentials) {
            if (typeof credentials !== 'undefined') {
                const checkUser = await authenticate(credentials?.username, credentials.password)
                console.log(checkUser);
                return { username: checkUser.username, password: "sadsad" }
            } else {
                throw new Error('bad requst')
            }
        }
        ,
    })], callbacks: {

        async jwt({ token, user }) {
            console.log(user);
            if (user) {
                token.username = user.username
            }
            return token
        }
    }, session: { strategy: "jwt" }

}



const handler = NextAuth(authOption)

export { handler as GET, handler as POST };
