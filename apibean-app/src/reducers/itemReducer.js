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
        //If items is already in cart, add + 1 qty. If not, add item to shoppingCart
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
                  item.id === action.payload.id
                    ? { ...item, qty: item.qty + 1 }
                    : item
                )
          };
        case "SUB_QUANTITY":
          return {
            ...state,
            shoppingCart: state.shoppingCart.map((item) =>
                  item.id === action.payload.id
                  ? {
                    ...item,
                    qty: item.qty !== 0 ? item.qty - 1 : 0,
                  }
                : item,
                )
          };
          case "REMOVE_FROM_CART":
          return {
            ...state,
            shoppingCart: state.shoppingCart.filter((item) => item.id !== action.payload.id),
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