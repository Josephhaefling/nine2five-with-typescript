import * as api from '../api';

//Action creators
//functions that return actions

export const getFavorites = () => async (dispatch) => {
    try {
        const {data} = await api.getFavorites();
        dispatch({ type: 'GET_FAVORITES', payload: data });
    } catch (error) {
        console.log(error.message);
    }
}

export const createFavorite = (favorite) => async (dispatch) => {
    try {
        const {data} = await api.createFavorite(favorite);

        dispatch({type: "CREATE_FAVORITE", payload: data});
    } catch(error) {
        console.log(error.message);
    }
}