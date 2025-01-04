import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";
import axios from "axios";

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get("http://localhost:5000/products");
      setProducts(data);
    };
    fetchProducts();
  }, []);

  return (
    <div>
      <div className="productsHeaders">
        <div>Our Products</div>
      </div>
      <div className="productsContainer">
        <div className="productsItems">
          {products.map((product) => (
            <Link to={`/products/${product._id}`}>
              <div key={product._id} className="productsitemCard">
                <div className="productImg">
                  <img src={product.image} alt={product.name} />
                </div>
                <div className="productBrand">{product.brand}</div>
                <div className="productName">{product.name}</div>
                <div className="productPrice">₹ {product.price}</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Products;
