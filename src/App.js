import React from "react";
import { Routes, Route } from "react-router-dom"; // Import Routes and Route components from React Router
import ProductListing from "./containers/ProductListing"; // Import ProductListing component
import Header from "./containers/Header"; // Import Header component
import Footer from "./containers/Footer"; // Import Footer component
import "./App.css";
import ProductDetails from "./containers/ProductDetails"; // Import ProductDetails component
import { ThemeProvider } from "./context/ThemeContext"; // Import ThemeProvider from your custom context

function App() {
  return (
    <div className="App">
      <Header /> {/* Render the Header component */}
      <Routes>
        {/* Define routes and their corresponding components */}
        <Route path="/" element={<ProductListing />} />{" "}
        {/* ProductListing component for the home route */}
        <Route path="/product/:productId" element={<ProductDetails />} />{" "}
        {/* ProductDetails component for product details */}
        <Route path="*" element={<h1>404 Not Found!</h1>} />{" "}
        {/* Rendered for unmatched routes */}
      </Routes>
      <ThemeProvider>
        <Footer /> {/* Render the Footer component wrapped in ThemeProvider */}
      </ThemeProvider>
    </div>
  );
}

export default App;
