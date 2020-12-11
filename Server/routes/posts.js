import express from "express"
//Impor the controllers
import { getPosts, createPost } from "../controllers/posts.js"

const router = express.Router()
//Initial get request
router.get("/", getPosts)
//Post request
router.post("/", createPost)

export default router
