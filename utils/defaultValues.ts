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

        
        const count = await IndexValue.countDocuments()
        if (!count) {
            await IndexValue.create({
                welcome: "سلام من مهردادم 👋", description: "یه برنامه نویس پر شور با دوسال تجربه در زمینه فرانت اند با کتابخونه های ری اکت و نکست جی اس", picture: '/public/uploads/profile.jpg'
            })
        }

    } catch (err) {

        console.log(err);
    }
}

