import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import loader from "./assets/loaderSpinner.gif";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3200);
  }, []);

  if (isLoading) {
    return (
      <div className="loader">
        <img src={loader} alt="loading" />
      </div>
    );
  }

  return (
    <Router>
      <div>
        <Navbar />

        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
