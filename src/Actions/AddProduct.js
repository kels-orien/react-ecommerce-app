import { ADD_NEW_PRODUCT, ADD_ALL_PRODUCTS } from "./ActionTypes";

export default function addProduct(product) {
  return {
    type: ADD_PRODUCT,
    product
  };
}
