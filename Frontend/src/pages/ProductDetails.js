import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import "../styles/productDetails.css";
import loaderImg from "../assets/loading-gif.gif";
import { addToCart } from "../utils/addToCart";

const ProductDetails = () => {
  const { id } = useParams(); // Get product ID from URL
  const [product, setProduct] = useState(null);

  const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;
  // const API_BASE_URL = "http://localhost:5000" //local work

  useEffect(() => {
    fetch(`${API_BASE_URL}/products/${id}`)
      .then((response) => response.json())
      .then((data) => setProduct(data));
  }, [id, API_BASE_URL]);

  if (!product) {
    return (
      <p
        style={{
          height: "55vh",
          fontSize: "40px",
          textAlign: "center",
          marginTop: "100px",
        }}
      >
        <img src={loaderImg} width="100px" alt="Loading..." />
      </p>
    );
  }

  const handleAddToCart = async () => {
    const token = localStorage.getItem("token");

    if (!token) {
      alert("Please sign in to add products to your cart!");
      return;
    }

    await addToCart(id, 1);
    alert("Product added to cart!");
  };

  return (
    <div className="productDetailsPage">
      <br />
      <Link to="/">&#10094; Back</Link>
      <div className="productDetailHeaders">
        <h1>{product.name}</h1>
      </div>
      <div className="productDetailContainer">
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
            <div className="productDesc">
              <b>About this item:</b>
              <br></br>
              {product.description}
            </div>
            <div className="productPrice">MRP: ₹ {product.price}.00</div>
          </div>
          <button className="productDetailButton" onClick={handleAddToCart}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
