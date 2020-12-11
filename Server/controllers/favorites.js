import FavoritesMessage from "../models/favoritesMessage.js"

export const getFavorites = async (req, res) => {
    try {
        const favoritesMessage = await FavoritesMessage.find();

        res.status(200).json(favoritesMessage)

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
//Left off here trying to figure out how to add favorites to the backend when you click the heart.
//
//
export const postFavorites = async (req, res) => {
    try {
        const favoritesMessage = await FavoritesMessage.find();

        res.status(200).json(favoritesMessage)

    } catch(error) {
        res.status(404).json({message: error.message})
    }
}

export const postCompletedJobs = async (req, res) => {
    try {

    } catch(error) {
        console.log(error.message);
    }
}

