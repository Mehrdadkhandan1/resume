import { authenticate } from "@/services/authService"
import { User } from "@/types/User"
import { AuthOptions } from "next-auth"
import NextAuth from "next-auth/next"
import CredentialsProvider from "next-auth/providers/credentials"

export const authOption: AuthOptions = {
    secret: process.env.SECRET_KEY,

    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                username: { label: "Username", type: "text" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials) {
                if (!credentials) throw new Error('Bad request')

                const checkUser = await authenticate(credentials.username, credentials.password)

                if (checkUser) {
                    const user: User = {
                        id: `${checkUser.id}`,
                        name: `${checkUser.name}`,
                        lastName: `${checkUser.lastName}`,
                        username: `${checkUser.username}`,
                        password: `${checkUser.password}`
                    }
                    return user
                }
                throw new Error('نام کاربری یا رمز عبور اشتباه میباشد ')
            }
        })
    ],
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.username = user.username
                token.name = user.name
                token.lastName = user.lastName
                

            }
            return token
        },
        async session({ session, token }) {
            if (token) {
                session.user = { username: token.username, name: token.name, lastName: token.lastName } as any
                console.log(session);
                console.log(token);
            } return session
        }
    },
    session: { strategy: "jwt" }
}

const handler = NextAuth(authOption)

export { handler as GET, handler as POST }
