export default (favorites = [], action) => {
    switch(action.type) {
        case 'GET_FAVORITES' :
            return action.payload
        case 'CREATE_FAVORITES':
            return [...favorites, action.payload]
        default:
            return favorites
    }
} 