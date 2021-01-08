import express from "express";

import { getFavorites, createFavorite } from "../controllers/favorites.js"


const router = express.Router();

router.get('/', getFavorites)
router.post('/', createFavorite)

export default router;
