import User from "@/models/User"
import connectDb from "./db"
import { hash } from "./hash"


export const defaultUser = async () => {
    try {
        await connectDb()
        const user = await User.findOne({ username: process.env.USER_ADMIN })
        if (!user) {
            const hashed = await hash(process.env.PASSWORD_ADMIN)
            const newUser = await User.create({
                username: process.env.USER_ADMIN,
                password: hashed
            })
            console.log(newUser);

        }
    } catch (err) {
        console.log(err);
    }
}