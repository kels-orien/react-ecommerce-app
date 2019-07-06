import { combineReducers } from "redux";
import ProductsReducer from "./ProductsReducer";

const RootReducer = combineReducers({
  allProducts: ProductsReducer
});

export default RootReducer;
