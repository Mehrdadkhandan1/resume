import User from "@/models/User"
import connectDb from "@/utils/db"
import { compareTextWithHash } from "@/utils/hash"


export const authenticate = async (username: string | undefined, password: string | undefined) => {
    try {

        await connectDb()
        const user = await User.findOne({ username })
        const checkPassword = await compareTextWithHash(password, user.password)
        if (user) {
            if (checkPassword) {
                return user
            }else{
                return null
            }
        }
        else
            return null
    } catch (err) {
        console.log(err);
        return null
    }

} 