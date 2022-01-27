//item = det vi skickar med som payload
//Type = definerar för reducers vilken typ av action. 
//Payload = det vi ska spara

export const addItemToBasket = (item) => {
    return {
        type: "ADD_ITEM",
        payload: item
    }
}