import axios from 'axios';

const url = 'http://localhost:5000/favorites';

export const fetchPosts = () => axios.get(url);

export const getFavorites = () => axios.get(url)

export const createFavorite = (newPost) => axios.post(url, newPost)