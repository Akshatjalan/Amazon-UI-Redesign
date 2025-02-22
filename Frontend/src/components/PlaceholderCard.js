import React from "react";
import "../styles/PlaceholderCard.css";

const PlaceholderCard = () => {
  return (
    <div className="productsitemCard placeholder">
      <div className="productImg placeholder-animation"></div>
      <div className="productItemDetails">
        <div className="productBrand placeholder-animation"></div>
        <div className="productName placeholder-animation"></div>
        <div className="productPrice placeholder-animation"></div>
      </div>
    </div>
  );
};

export default PlaceholderCard;
