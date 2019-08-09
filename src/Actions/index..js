import { GET_ALL_PRODUCTS, ADD_PRODUCT_TO_CART, REMOVE_PRODUCT_FROM_CART } from "../utils/constants";

export const addProductToCart = product => {
  return {
    type: ADD_PRODUCT_TO_CART,
    product
  };
}

export const removeProductFromCart = productId => {
  return {
      type: REMOVE_PRODUCT_FROM_CART,
      productId
  }
}


export const getAllProducts=(allProducts) => {
  return {
    type: GET_ALL_PRODUCTS,
    allProducts
  };
}


export const increaseProductQuantity = productId => {
  return {
    type: INCREASE_PRODUCT_QUANTITY, 
    productId
  }  
}


export const decrementProductQuantity = productId => {
  return {
    type: DECREMENT_CART_PRODUCT_QUANTITY,
    productId
  }
}


