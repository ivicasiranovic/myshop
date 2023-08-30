import React from "react";
import { Routes, Route } from "react-router-dom";
import ProductListing from "./containers/ProductListing";
import Header from "./containers/Header";
import Footer from "./containers/Footer";
import "./App.css";
import ProductDetails from "./containers/ProductDetails";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<ProductListing />} />
        <Route path="/product/:productId" element={<ProductDetails />} />
        <Route path="*" element={<h1>404 Not Found!</h1>} />
      </Routes>
      <ThemeProvider>
        <Footer />
      </ThemeProvider>
    </div>
  );
}

export default App;
