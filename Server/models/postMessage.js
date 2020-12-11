import mongoose from "mongoose"

const postSchema = mongoose.Schema({
    favoriteJobs: String,
    completedJobs: String
})

const PostMessage = mongoose.model("PostMessage", postSchema)

export default PostMessage