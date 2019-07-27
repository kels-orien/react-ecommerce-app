import { ADD_PRODUCT, ADD_ALL_PRODUCTS } from "../Actions/ActionTypes";
import uniqueId from "lodash/uniqueId";
import LoadState from "./../utils/SyncProductCollection";

export const ProductsReducer = (state = LoadState(), action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return [
        ...state,
        {
          id: action.id,
          name: action.name,
          price: action.price,
          imageurl: action.imageurl,
          brand: action.brand
        }
      ];

    case ADD_ALL_PRODUCTS:
      return [...state, ...action.payload];

    default:
      return state;
  }
};
