import { ActionTypes } from "../constants/actions-types";

// Your reducer logic here

const initialState = {
  // Initial state properties
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SET_PRODUCTS:
      // Handle SET_PRODUCTS action
      return state;

    case ActionTypes.SELECTED_PRODUCT:
      // Handle SELECTED_PRODUCT action
      return state;

    case ActionTypes.REMOVE_SELECTED_PRODUCT:
      // Handle REMOVE_SELECTED_PRODUCT action
      return state;

    default:
      return state;
  }
};

export default productReducer;
