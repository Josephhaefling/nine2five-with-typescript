<<<<<<< HEAD
import express from "express";

import { getPosts } from "../controllers/posts.js"


const router = express.Router();

router.get('/', getPosts)

export default router;
=======
import express from "express"
//Impor the controllers
import { getPosts, createPost } from "../controllers/posts.js"

const router = express.Router()
//Initial get request
router.get("/", getPosts)
//Post request
router.post("/", createPost)

export default router
>>>>>>> dde11daf18f425cc56849f2303cbb99d17e8775b
