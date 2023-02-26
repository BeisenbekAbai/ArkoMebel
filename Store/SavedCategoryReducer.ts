

const defaultState = {
    word: ''
}

//@ts-ignore
export const SavedCategoryReducer = (state = defaultState, action) => {
    switch(action.type){
        case "SaveOption":
            return{ ...state, word: action.payload}
        default:
            return state
    }
}