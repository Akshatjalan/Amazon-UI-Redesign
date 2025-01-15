import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../styles/SignIn.css";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;
  // const API_BASE_URL = "http://localhost:5000"; //local work

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${API_BASE_URL}/signin`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        // Save the token to localStorage
        localStorage.setItem("token", data.token);
        navigate("/");
      } else {
        alert(data.error);
      }
    } catch (error) {
      console.error("Error signing in:", error);
    }
  };

  return (
    <div className="authContainer">
      <h2>Sign In</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button className="productDetailButton" type="submit">
          Sign In
        </button>
      </form>

      <h2>If you dont have a account</h2>
      <Link to="/signup">Sign Up</Link>
    </div>
  );
}

export default SignIn;
