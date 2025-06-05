import React, { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import axios from "axios";
import "../styles/Home.css";
import "../styles/CategoryProducts.css";
import loaderImg from "../assets/loading-gif.gif";

function CategoryProducts() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const type = queryParams.get("type");

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;
  // const API_BASE_URL = "http://localhost:5000"; //local work

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get(`${API_BASE_URL}/products`);
      let filteredProducts;

      if (type === "All") {
        // Group products by type
        const groupedProducts = data.reduce((acc, product) => {
          if (!acc[product.type]) {
            acc[product.type] = [];
          }
          acc[product.type].push(product);
          return acc;
        }, {});
        filteredProducts = Object.entries(groupedProducts).map(
          ([type, products]) => ({
            type,
            products,
          })
        );
      } else {
        filteredProducts = data.filter((product) => product.type === type);
      }

      setProducts(filteredProducts);
      setLoading(false);
    };
    fetchProducts();
  }, [type, API_BASE_URL]);

  return (
    <div className="categoryProductsContainer">
      <h1 className="categoryProductsTitle">
        {type === "All" ? "Our Products" : `Products for ${type}`}
      </h1>
      <div className="categoryProductsGrid">
        {loading ? (
          // <p className="categoryProductsLoading">Loading...</p>
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
        ) : type === "All" ? (
          products.map((group) => (
            <div key={group.type} className="categoryProductGroup">
              <h2>{group.type}</h2>
              <div className="categoryProductsGrid">
                {group.products.map((product) => (
                  <Link to={`/products/${product._id}`} key={product._id}>
                    <div key={product._id} className="categoryProductCard">
                      <div className="categoryProductImage">
                        <img src={product.image} alt={product.name} />
                      </div>
                      <div className="categoryProductDetails">
                        <div className="categoryProductBrand">
                          {product.brand}
                        </div>
                        <div className="categoryProductName">
                          {product.name}
                        </div>
                        <div className="categoryProductPrice">
                          MRP: ₹ {product.price}.00
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))
        ) : (
          products.map((product) => (
            <Link to={`/products/${product._id}`} key={product._id}>
              <div key={product._id} className="categoryProductCard">
                <div className="categoryProductImage">
                  <img src={product.image} alt={product.name} />
                </div>
                <div className="categoryProductDetails">
                  <div className="categoryProductBrand">{product.brand}</div>
                  <div className="categoryProductName">{product.name}</div>
                  <div className="categoryProductPrice">
                    MRP: ₹ {product.price}.00
                  </div>
                </div>
              </div>
            </Link>
          ))
        )}
      </div>
    </div>
  );
}

export default CategoryProducts;
