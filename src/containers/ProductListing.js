import React, { useEffect } from "react";
import axios from "axios"; // Import axios for making API requests
import { useDispatch, useSelector } from "react-redux"; // Import useDispatch and useSelector from React Redux
import { setProducts } from "../redux/actions/productActions"; // Import action creator
import ProductComponent from "./ProductComponent"; // Import ProductComponent for rendering individual products

const ProductPage = () => {
  const products = useSelector((state) => state.allProducts.products); // Get the products array from the Redux store
  const dispatch = useDispatch(); // Get the dispatch function from React Redux

  const fetchProducts = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => {});
    dispatch(setProducts(response.data)); // Dispatch the action to set the fetched products
  };

  useEffect(() => {
    fetchProducts(); // Fetch products when the component mounts
  }, []);

  return (
    <div className="ui grid container">
      <ProductComponent />
      {/* Render the ProductComponent to display the list of products */}
    </div>
  );
};

export default ProductPage;
