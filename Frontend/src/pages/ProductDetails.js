import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

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
    <div>
      <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} style={{ width: "300px" }} />
      <p>
        <strong>Brand:</strong> {product.brand}
      </p>
      <p>
        <strong>Description:</strong> {product.description}
      </p>
      <p>
        <strong>Type:</strong> {product.type}
      </p>
      <p>
        <strong>Price:</strong> ₹{product.price}
      </p>
      <button onClick={() => alert(`${product.name} added to cart!`)}>
        Add to Cart
      </button>
    </div>
  );
};

export default ProductDetails;
