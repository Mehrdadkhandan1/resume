import mongoose, { model, models, Schema } from "mongoose";

const deadlineSchema = new Schema({
    startDate: {
        type: String,
    },
    endDate: {
        type: String,
    },
});

const projectSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    description: String,
    deadlineProject: deadlineSchema, 
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    picture: String,
});

const Project = models.Project || model("Project", projectSchema);
export default Project;