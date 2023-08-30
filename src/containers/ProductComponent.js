import React from "react";
import { Link } from "react-router-dom"; // Import Link component for navigation
import { useSelector } from "react-redux"; // Import useSelector hook for accessing Redux store

const ProductComponent = () => {
  // Use the useSelector hook to extract the products array from the Redux store
  const products = useSelector((state) => state.allProducts.products);

  // Map through the products array and render each product as a card
  const renderList = products.map((product) => {
    const { id, title, image, price, category } = product;
    return (
      <div className="four wide column" key={id}>
        <Link to={`/product/${id}`}>
          {/* Wrap the card in a Link component to navigate to the product details page */}
          <div className="ui link cards">
            <div className="card">
              <div className="image">
                <img src={image} alt={title} />
              </div>
              <div className="content">
                <div className="header">{title}</div>
                <div className="meta price">$ {price}</div>
                <div className="meta">{category}</div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    );
  });

  // Render the list of products
  return <>{renderList}</>;
};

export default ProductComponent;
