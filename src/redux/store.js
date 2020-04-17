import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import marketPlace from "./reducers";

const store = createStore(marketPlace, composeWithDevTools());

export default store;
