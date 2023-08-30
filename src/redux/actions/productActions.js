import { ActionTypes } from "../constants/actions-types";

// Action creator to set products in the Redux store
export const setProducts = (products) => {
  return {
    type: ActionTypes.SET_PRODUCTS, // Specify the action type
    payload: products, // Attach the data (products) to the action payload
  };
};

// Action creator to select a single product in the Redux store
export const selectedProduct = (product) => {
  return {
    type: ActionTypes.SELECTED_PRODUCT, // Specify the action type
    payload: product, // Attach the data (selected product) to the action payload
  };
};

// Action creator to remove the selected product from the Redux store
export const removeSelectedProduct = () => {
  return {
    type: ActionTypes.REMOVE_SELECTED_PRODUCT, // Specify the action type
  };
};
