export const addItemToBasket = (item) => {
    return {
        type: "ADD_ITEM",
        payload: item
    }
}

export const clearCart = () => {
    return {
        type: "RESET"
    };
}

export const AddQuantity = (item) => {
    return {
        type: "ADD_QUANTITY",
        payload: item
    }
}

export const SubQuantity = (item) => {
    return {
        type: "SUB_QUANTITY",
        payload: item
    }
}

export const RemoveFromCart = (item) => {
    return {
        type: "REMOVE_FROM_CART",
        payload: item
    }
}