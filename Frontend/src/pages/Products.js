import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";
import axios from "axios";

function Products({ type }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get("http://localhost:5000/products");
      if (type) {
        const filteredProducts = data.filter(
          (product) => product.type === type
        );
        setProducts(filteredProducts);
      } else {
        setProducts(data);
      }
    };
    fetchProducts();
  }, [type]);

  return (
    <div>
      <div className="productsContainer">
        <div className="productsItems">
          {products.map((product) => (
            <Link to={`/products/${product._id}`}>
              <div key={product._id} className="productsitemCard">
                <div className="productImg">
                  <img src={product.image} alt={product.name} />
                </div>
                <div className="productItemDetails">
                  <div className="productBrand">{product.brand}</div>
                  <div className="productName">{product.name}</div>
                  <div className="productPrice">MRP: ₹ {product.price}.00</div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Products;
