import { ADD_PRODUCT, ADD_ALL_PRODUCTS } from "../Actions/ActionTypes";
import uniqueId from "lodash/uniqueId";

export const productsReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return [
        ...state,
        {
          id: uniqueId(""),
          name: action.pname,
          price: action.price,
          image_src: action.image_src,
          category: action.category,
          brand: action.category.brand
        }
      ];

    case ADD_ALL_PRODUCTS:
      return [...state, ...action.allProducts];

    default:
      return state;
  }
};
