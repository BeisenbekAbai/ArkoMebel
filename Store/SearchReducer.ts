


const defaultState = {
    word: ''
}

//@ts-ignore
export const SearchReducer = (state = defaultState, action) => {
    switch(action.type){
        case "FindIt":
            return{ ...state, word: action.payload}
        default:
            return state
    }
}