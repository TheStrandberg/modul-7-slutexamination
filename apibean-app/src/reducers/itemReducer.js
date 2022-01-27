//Reducer - uppdaterar state i store
const initialState = { shoppingBasket: []};

const itemReducer = (state = initialState, action) => {
    switch(action.type) {
        case "ADD_ITEM":
            return {
                ...state,
                shoppingBasket: [
                    ...state.shoppingBasket,
                    {
                        item: action.payload
                    }
                ]
            }
        default: return state;
    }
}

export default itemReducer;