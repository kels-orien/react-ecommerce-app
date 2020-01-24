import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composedWithDevTools } from "redux-devtools-extension";
import throttle from "lodash/throttle";
import RootReducer from "./reducers/RootReducer";

const middleware = applyMiddleware(thunk);

const Store = createStore(
  RootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default Store;
