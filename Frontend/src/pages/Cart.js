import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../styles/Cart.css";

const Cart = () => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;
  // const API_BASE_URL = "http://localhost:5000"; //local work

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await axios.get(`${API_BASE_URL}/cart`, {
          headers: { Authorization: `Bearer ${token}` },
        });

        setCart(res.data);

        // Calculate total
        const cartTotal = res.data.reduce(
          (sum, item) => sum + item.subtotal,
          0
        );
        setTotal(cartTotal);
      } catch (error) {
        console.error("Error fetching cart:", error);
      }
    };

    fetchCart();
  }, [API_BASE_URL]);

  return (
    <div className="cartContainer">
      <br></br>
      <Link to="/">&#10094; Back</Link>
      <h1>Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cart.map((item) => (
            <div key={item.product._id} className="cartItem">
              <img src={item.product.image} alt={item.product.name} />
              <div>
                <h3>{item.product.name}</h3>
                <p>{item.product.description}</p>
                <p>Price: ₹{item.product.price}</p>
                <p>Quantity: {item.quantity}</p>
                <p>Subtotal: ₹{item.subtotal}</p>
              </div>
            </div>
          ))}
          <div className="checkoutDetails">
            <h2>Checkout</h2>
            <p>Total: ₹{total}</p>
            <button
              className="checkoutButton"
              onClick={() => alert("Order Placed")}
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
