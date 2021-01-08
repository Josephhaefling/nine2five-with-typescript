import mongoose from "mongoose"

const postSchema = mongoose.Schema({
    favoriteJobs: [Object],
    completedJobs: [Object],
})

const FavoritesMessage = mongoose.model("FavoritesMessage", postSchema)

export default FavoritesMessage