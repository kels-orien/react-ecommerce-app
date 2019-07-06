import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composedWithDevTools } from "redux-devtools-extensions";
import throttle from "lodash/throttle";
import RootReducer from "./reducers/RootReducer";
import { loadState, saveState } from "./utils/SyncProductCollection";

const middleware = applyMiddleware(thunk);
const persistedState = loadState();

const Store = createStore(
  RootReducer,
  persistedState,
  composedWithDevTools(middleware)
);

export default Store;
