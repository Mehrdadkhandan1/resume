import mongoose from 'mongoose'
const connectDb = async () => {
    if (mongoose.connections[0].readyState) return
    else {
        await mongoose.connect(`${process.env.MONGO_URL}`)
    }
}

export default connectDb