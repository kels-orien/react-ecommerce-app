import { GET_ALL_PRODUCTS, 
  ADD_PRODUCT_TO_CART, 
  REMOVE_PRODUCT_FROM_CART, 
  REMOVE_ALL_PRODUCTS_FROM_CART, 
  PREV_PAGE, 
  INCREMENT_CART_PRODUCT_QUANTITY,
  DECREMENT_CART_PRODUCT_QUANTITY,
  NEXT_PAGE,
  GO_TO_PAGE } from "../utils/constants";

export const addProductToCart = product => {
  return {
    type: ADD_PRODUCT_TO_CART,
    payload:product
  };
}

export const removeProductFromCart = productId => {
  return {
      type: REMOVE_PRODUCT_FROM_CART,
      payload:productId
  }
}

export const removeAllProductsFromCart = ()=> {
  return {
      type: REMOVE_ALL_PRODUCTS_FROM_CART
  }
}

export const getAllProducts=(allProducts) => {
  return {
    type: GET_ALL_PRODUCTS,
    payload:allProducts
  };
}


export const incrementProductQuantity = productId => {
  return {
    type: INCREMENT_CART_PRODUCT_QUANTITY, 
    payload:productId
  }  
}


export const decrementProductQuantity = productId => {
  return {
    type: DECREMENT_CART_PRODUCT_QUANTITY,
    payload:productId
  }
}


export const nextPage = () => {
  return {
      type: NEXT_PAGE
  }
};

export const prevPage = () => {
  return {
      type: PREV_PAGE
  }
};

export const goToPage = (n) => {
  return {
      type: GO_TO_PAGE,
      currentPage: n
  }
};