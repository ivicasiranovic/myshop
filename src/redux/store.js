// Import necessary dependencies
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers"; // Make sure this import is correct

// Configure the store
const store = configureStore({
  reducer: rootReducer,
  // Other middleware or configuration options
});

export default store;
