//Reducer - uppdaterar state i store
const initialState = { shoppingCart: []};

const itemReducer = (state = initialState, action) => {
    switch(action.type) {
        case "ADD_ITEM":
      // Check if Item is in cart already
      const item = action.payload;
      const inCart = state.shoppingCart.find((item) => 
        item.id === action.payload.id ? true : false
      );
      return {
        ...state,
        shoppingCart: inCart
          ? state.shoppingCart.map((item) =>
              item.id === action.payload.id
                ? { ...item, qty: item.qty + 1 }
                : item
            )
        : [...state.shoppingCart, { ...item, qty: 1 }],
        
      };
        case "ADD_QUANTITY":
        return {
            ...state, 
            shoppingCart: state.shoppingCart.map((item) => 
            item.id === action.id 
            ? {...item, quantity: + item.quantity + 1}
            : item,
            ),
        };

        case "SUB_QUANTITY":
        return {
            ...state, 
            shoppingCart: state.shoppingCart.map((item) => 
            item.id === action.id 
            ? {...item, quantity: item.quantity !==1 ? item.quantity -1 : 1,
            }
            : item,
            ),
        };
        case "RESET": 
        return {
            shoppingCart: []
        }
        default: 
            return state;
    }
}

export default itemReducer;