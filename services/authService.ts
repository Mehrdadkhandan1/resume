import User from "@/models/User"
import connectDb from "@/utils/db"
import { compareTextWithHash } from "@/utils/hash"


export const authenticate = async (username: String | undefined, password: String | undefined) => {
    try {

        await connectDb()
        const user = await User.findOne({ username })
        const checkPassword = await compareTextWithHash(password, user.password)
        console.log(checkPassword);
        if (user)
            return user
        else
            return null
    } catch (err) {
        console.log(err);
        return null
    }

} 