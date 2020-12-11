// import { getPosts } from "../controllers/getPosts.js"
import PostMessage from "../models/postMessages.js"

export const getPosts = async (req, res) => {
    try {
        const postMessage = await PostMessage.find()

        console.log("post message", postMessage);

        res.status(200).json(postMessage)
    } catch(error) {
        res.status(404).json({message: error.message})
    }
}

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

