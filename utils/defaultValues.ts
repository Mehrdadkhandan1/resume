import User from "@/models/User"
import connectDb from "./db"
import { hash } from "./hash"
import IndexValue from "@/models/IndexValue"


export const defaultUser = async () => {
    try {
        await connectDb()
        const user = await User.findOne({ username: process.env.USER_ADMIN })
        if (!user) {
            const hashed = await hash(process.env.PASSWORD_ADMIN)
            await User.create({
                username: process.env.USER_ADMIN,
                password: hashed,
                name: 'مهرداد',
                lastName: "خندان"
            })

        }

    } catch (err) {
        console.log(err);
    }
}


export const defaultIndexValue = async () => {
    try {
        await connectDb()
        const value = IndexValue.getMaxListeners()
        console.log(`mehrdad`);
        console.log(`${value} index`);
    } catch (err) {
        console.log(err);
    }
}

