import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";
import axios from "axios";
import PlaceholderCard from "../components/PlaceholderCard";

function Products({ type }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const productsContainerRef = useRef(null);

  const scroll = (direction) => {
    const container = productsContainerRef.current;
    if (direction === "left") {
      container.scrollBy({ left: -550, behavior: "smooth" });
    } else {
      container.scrollBy({ left: 550, behavior: "smooth" });
    }
  };

  const isLargeScreen = window.innerWidth > 1250;

  const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get(`${API_BASE_URL}/products`);
      if (type) {
        const filteredProducts = data.filter(
          (product) => product.type === type
        );
        setProducts(filteredProducts);
      } else {
        setProducts(data);
      }
      setLoading(false);
    };
    fetchProducts();
  }, [type, API_BASE_URL]);

  return (
    <div>
      <div className="productsContainer">
        {isLargeScreen && (
          <button className="scrollButton left" onClick={() => scroll("left")}>
            🡰
          </button>
        )}
        <div className="productsItems" ref={productsContainerRef}>
          {loading
            ? Array.from({ length: 6 }).map((_, index) => (
                <PlaceholderCard key={index} />
              ))
            : products.map((product) => (
                <Link to={`/products/${product._id}`} key={product._id}>
                  <div className="productsitemCard">
                    <div className="productImg">
                      <img src={product.image} alt={product.name} />
                    </div>
                    <div className="productItemDetails">
                      <div className="productBrand">{product.brand}</div>
                      <div className="productName">{product.name}</div>
                      <div className="productPrice">
                        MRP: ₹ {product.price}.00
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
        </div>
        {isLargeScreen && (
          <button
            className="scrollButton right"
            onClick={() => scroll("right")}
          >
            🡲
          </button>
        )}
      </div>
    </div>
  );
}

export default Products;
