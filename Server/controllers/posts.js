import PostMessage from "../models/postMessage.js"

//Will be imported by the routes
export const getPosts = async (req, res) => {
//Each method here will have a try catch
    try {
        const postMessages = await PostMessage.find()

        res.status(200).json(postMessages)
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}

export const createPost = (req, res) => {
    res.send("Post Creation")
}