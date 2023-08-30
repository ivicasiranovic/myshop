import React, { useEffect } from "react";
import axios from "axios"; // Import axios for making API requests
import { useParams } from "react-router-dom"; // Import useParams for getting URL parameters
import { useDispatch, useSelector } from "react-redux"; // Import useDispatch and useSelector from React Redux
import {
  selectedProduct,
  removeSelectedProduct,
} from "../redux/actions/productActions"; // Import action creators

const ProductDetails = () => {
  const { productId } = useParams(); // Get the "productId" from the URL parameters
  let product = useSelector((state) => state.product); // Get the selected product from the Redux store
  const { image, title, price, category, description } = product; // Destructure properties from the selected product
  const dispatch = useDispatch(); // Get the dispatch function from React Redux

  const fetchProductDetail = async (id) => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .catch((err) => {});
    dispatch(selectedProduct(response.data)); // Dispatch the action to select the fetched product
  };

  useEffect(() => {
    // Fetch product details when the component mounts or when productId changes
    if (productId && productId !== "") fetchProductDetail(productId);

    // Clean up by removing the selected product when the component unmounts
    return () => {
      dispatch(removeSelectedProduct()); // Dispatch the action to remove the selected product
    };
  }, [productId]);

  return (
    <div className="ui grid container">
      {Object.keys(product).length === 0 ? (
        <div>...Loading</div>
      ) : (
        <div className="ui placeholder segment">
          <div className="ui two column stackable center aligned grid">
            <div className="ui vertical divider">AND</div>
            <div className="middle aligned row">
              <div className="column lp">
                <img className="ui fluid image" src={image} alt="no internet" />
              </div>
              <div className="column rp">
                <h1>{title}</h1>
                <h2>
                  <a className="ui teal tag label">${price}</a>
                </h2>
                <h3 className="ui brown block header">{category}</h3>
                <p>{description}</p>
                <div className="ui vertical animated button" tabIndex="0">
                  <div className="hidden content">
                    <i className="shop icon"></i>
                  </div>
                  <div className="visible content">Add to Cart</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
