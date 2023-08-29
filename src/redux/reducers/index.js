import { combineReducers } from "redux";
import productReducer from "./productReducer"; // Adjust the path as needed

const rootReducer = combineReducers({
  products: productReducer,
  // other reducers...
});

export default rootReducer;
