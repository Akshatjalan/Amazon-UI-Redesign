import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import "../styles/SearchResult.css";

function SearchResults() {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get("q");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (query) {
      fetch(`http://localhost:5000/products/search?q=${query}`)
        .then((res) => res.json())
        .then((data) => setProducts(data))
        .catch((error) =>
          console.error("Error fetching search results:", error)
        );
    }
  }, [query]);

  return (
    <div className="productDetailsPage">
      <br />
      <Link to="/">🡰 Back</Link>
      <h2>Search Results for "{query}"</h2>
      {products.length > 0 ? (
        <div className="productGrid">
          {products.map((product) => (
            <div className="searchResultContainer">
              <div className="productDetailLeft">
                <img
                  src={product.image}
                  alt={product.name}
                  style={{ width: "500px" }}
                />
              </div>
              <div className="productDetailRight">
                <div className="productItemDetails">
                  <div className="productBrand">{product.brand}</div>
                  <div className="productName">{product.name}</div>
                  <div className="productDesc">{product.description}</div>
                  <div className="productPrice">MRP: ₹ {product.price}.00</div>
                </div>
                <button
                  className="productDetailButton"
                  onClick={() => alert(`${product.name} added to cart!`)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>No products found</p>
      )}
    </div>
  );
}

export default SearchResults;
