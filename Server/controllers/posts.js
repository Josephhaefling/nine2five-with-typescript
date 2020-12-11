<<<<<<< HEAD
// import { getPosts } from "../controllers/getPosts.js"
import PostMessage from "../models/postMessages.js"

export const getPosts = async (req, res) => {
    try {
        const postMessage = await PostMessage.find()

        console.log("post message", postMessage);

        res.status(200).json(postMessage)
    } catch(error) {
=======
import PostMessage from "../models/postMessage.js"

//Will be imported by the routes
export const getPosts = async (req, res) => {
//Each method here will have a try catch
    try {
        const postMessages = await PostMessage.find()

        res.status(200).json(postMessages)
    } catch (error) {
>>>>>>> dde11daf18f425cc56849f2303cbb99d17e8775b
        res.status(404).json({message: error.message})
    }
}

<<<<<<< HEAD
export const getCompletedJobs = async (req, res) => {
    try {

    } catch(error) {
        console.log(error.message);
    }
}

export const postFavoriteJobs = async (req, res) => {
    try {

    } catch(error) {
        console.log(error.message);
    }
}

export const postCompletedJobs = async (req, res) => {
    try {

    } catch(error) {
        console.log(error.message);
    }
}

=======
export const createPost = (req, res) => {
    res.send("Post Creation")
}
>>>>>>> dde11daf18f425cc56849f2303cbb99d17e8775b
