import mongoose, { model, models, Schema } from "mongoose";



const projectSchema = new Schema({
    name: {
        type: String,
        required: true,
        description: String,
        createdBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },
        picture: String,
    }
})


const Project = models.Project || model("Project", projectSchema)
export default Project