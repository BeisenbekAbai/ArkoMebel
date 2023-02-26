


const defaultState = {
    active: false
}

//@ts-ignore
export const CategoryActiveReducer = (state = defaultState, action) => {
    switch(action.type){
        case "changeCategoryActive":
            return{ ...state, active: action.payload}
        default:
            return state
    }
}