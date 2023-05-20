export const initialState ={
    cart: []
};

//selector
export const getCartTotal = (cart) =>
    cart?.reduce((amount, item) => item.price + amount,0); 
const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
      case 'ADD_TO_CART':
        return {
          ...state,
          cart: [...state.cart, action.item],
        };
  
      case 'REMOVE_FROM_CART':
        const index = state.cart.findIndex((cartItem) => cartItem.id === action.id);
        let newCart = [...state.cart];
        if (index >= 0) {
          newCart.splice(index, 1);
        } else {
          console.warn("Can't remove the product as it's not in the basket!");
        }
        return {
          ...state,
          cart: newCart,
        };
  
      case 'INCREMENT_PRODUCT':
        const incrementedCart = state.cart.map((item) => {
          if (item.id === action.id) {
            return {
              id: item.id,
              quantity: item.quantity + 1,
            };
          } else {
            return item;
          }
        });
        return {
          ...state,
          cart: incrementedCart,
        };
  
      case 'DECREMENT_PRODUCT':
        const decrementedCart = state.cart.map((item) => {
          if (item.id === action.id) {
            return {
              ...item,
              quantity: item.quantity - 1,
            };
          } else {
            return item;
          }
        });
        return {
          ...state,
          cart: decrementedCart,
        };
  
      case 'SCHEDULE_WEEK':
        return {
            ...state,
            cart: [...state.cart, action.item],
          };
  
      default:
        return state;
    }
  };
  
  export default reducer;
  