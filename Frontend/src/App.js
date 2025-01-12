import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import loader from "./assets/loaderSpinner.gif";
import Footer from "./components/Footer";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import SearchResults from "./pages/SearchResults";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3200);
  }, []);

  if (isLoading) {
    return (
      <div className="loader">
        <img src={loader} alt="loading" />
      </div>
    );
  }

  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/search" element={<SearchResults />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
