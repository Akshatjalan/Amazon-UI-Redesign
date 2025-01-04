import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import "../styles/productDetails.css";

const ProductDetails = () => {
  const { id } = useParams(); // Get product ID from URL
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/products/${id}`)
      .then((response) => response.json())
      .then((data) => setProduct(data));
  }, [id]);

  if (!product) {
    return (
      <p
        style={{
          height: "50vh",
          fontSize: "40px",
          textAlign: "center",
          marginTop: "100px",
        }}
      >
        Loading...
      </p>
    );
  }

  return (
    <div className="productDetailsPage">
      <br />
      <Link to="/">￩Back</Link>
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
    </div>
  );
};

export default ProductDetails;
