import mongoose from 'mongoose'
const connectDb = async () => {
    if (mongoose.connections[0].readyState) return
    else {
        try {
            await mongoose.connect(`${process.env.MONGO_URL}`)
        } catch (err) {
        }


    }
}

export default connectDb