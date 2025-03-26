import { model, models, Schema } from "mongoose";



const business = new Schema({
    description: {
        type: String
    },
    name: {
        type: String,
        default: 'مهرداد خنداد'
    },
    picture: {
        type: String,
    }

})


 const Business = models.Business || model('Business', business)

 export default Business