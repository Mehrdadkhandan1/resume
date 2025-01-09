
import { model, models, Schema } from "mongoose"
const userShcema = new Schema({
    "username": {
        type: String,
        required: true
    },
    "password": {
        type: String,
        required: true
    },
    "name": {
        type: String,
        required: true
    },
    "lastName": {
        type: String,
        required: true
    }
})

const User = models.User || model("User", userShcema)


export default User