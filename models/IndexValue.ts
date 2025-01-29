import { model, models, Schema } from "mongoose";



const indexValue = new Schema({
    "welcome": {
        type: String,
    },
    
    "description": {
        type: String,
    }
    
    
})


const IndexValue = models.IndexValue || model("IndexValue",indexValue)

export default IndexValue