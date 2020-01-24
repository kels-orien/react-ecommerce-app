import { ADD_PRODUCT, 
  ADD_PRODUCT_TO_CART, 
  DECREMENT_CART_PRODUCT_QUANTITY, 
  INCREMENT_CART_PRODUCT_QUANTITY, 
  REMOVE_PRODUCT_FROM_CART,
  REMOVE_ALL_PRODUCTS_FROM_CART } from "../utils/constants";
import {newProducts} from "../data/items"

const INITIALSTATE = {
    products: newProducts,
    cart: []
}


export const ProductsReducer = (state = INITIALSTATE, action) => {
  let updatedCart;
  let updatedItemIndex;

  switch (action.type) {
    case ADD_PRODUCT_TO_CART:
      updatedCart = [...state.cart];
      updatedItemIndex =  updatedCart.findIndex(item => item.id === action.payload.id);


      if (updatedItemIndex < 0) {
        updatedCart.push({...action.payload})
      } else {
        const updatedItem =  {
          ...updatedCart[updatedItemIndex]
        };

        updatedItem.quantity++;
        updatedCart[updatedItemIndex] = updatedItem;
        console.log("add cart update: " , updatedCart)
      }
      return {...state, cart: updatedCart};

      case INCREMENT_CART_PRODUCT_QUANTITY:   
        updatedCart = [...state.cart];
        console.log("increment cart: ",  updatedCart)
        updatedItemIndex = updatedCart.findIndex(
          item => item.id === action.payload
        )

        const incrementedItem = {
          ...updatedCart[updatedItemIndex]
        }

        incrementedItem.quantity++;

        updatedCart[updatedItemIndex] = incrementedItem;
        
       

        return {...state, cart:updatedCart};

      case DECREMENT_CART_PRODUCT_QUANTITY:
        updatedCart = [...state.cart];
       
        updatedItemIndex = updatedCart.findIndex(
            item => item.id === action.payload
        )

        const decrementedItem = {
          ...updatedCart[updatedItemIndex]
        }

        decrementedItem.quantity--;

        updatedCart[updatedItemIndex] = decrementedItem;


        return {...state, cart: updatedCart}

      case REMOVE_PRODUCT_FROM_CART:
          updatedCart = [...state.cart];
          updatedItemIndex = updatedCart.findIndex(
                item => item.id === action.payload
          );

          updatedCart.splice(updatedItemIndex, 1);

          return {...state, cart: updatedCart}; 
          
      case REMOVE_ALL_PRODUCTS_FROM_CART:
    
          return {...state, cart: []};    
    default:
      return state;
  }
};
