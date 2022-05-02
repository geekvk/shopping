// data layer logic
export const initialState = {
    cart: [],

};

// Selector
export const getBasketTotal = (cart) => 
  cart?.reduce((amount, item) => item.price + amount + 500, 0);

function reducer(state, action){
    console.log(action);
    switch(action.type){
        case 'ADD_TO_CART':
            // adding item to cart
            return { 
                ...state,
                cart: [...state.cart, action.item],
            }
        case 'REMOVE_ITEM_CART':
            //remove item
            let newCart = [...state.cart];
            const index =  state.cart.findIndex((cartItem) => cartItem.id === action.id);
            if(index >= 0){
                newCart.splice(index, 1);
            }
            else{
                console.warn(`Product id : ${action.id} doesn't exist` )
            }
            return { ...state, cart: newCart }
        default:
            return state;
    }
}

export default reducer;