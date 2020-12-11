import mongoose from "mongoose";

const PostSchema = mongoose.Schema({
    favoriteJobs: "String",
    completedJobs: "String"
})

const PostMessage = mongoose.model('PostMessage', PostSchema);

export default PostMessage;