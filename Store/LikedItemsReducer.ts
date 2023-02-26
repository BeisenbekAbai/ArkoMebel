const defaultState = {
    items: []
}


//@ts-ignore
export const LikedItemsReducer = (state = defaultState, action) => {
    switch(action.type) {
        case 'AddToLiked':
            return {items: action.payload}
        default:
            return state
    }
}