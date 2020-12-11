import express from "express";

import { getFavorites, postFavorites } from "../controllers/favorites.js"


const router = express.Router();

router.get('/', getFavorites, postFavorites)

export default router;
