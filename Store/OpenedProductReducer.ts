const defaultState = {
    openedProductID: 0
}

//@ts-ignore
export const openedProductReducer = (state = defaultState, action) => {
    switch (action.type){
        case 'OpenIt': 
            return{ ...state, openedProductID: action.payload}
        default: 
            return state
    }
}