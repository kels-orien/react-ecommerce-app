import { combineReducers } from "redux";
import { ProductsReducer } from "./ProductsReducer";
import { PaginationReducer } from "./PaginationReducer";




const RootReducer = combineReducers({
  productsCollection: ProductsReducer,
  pagination: PaginationReducer 
});

export default RootReducer;
