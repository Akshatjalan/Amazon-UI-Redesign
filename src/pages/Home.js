import React from "react";
import "../styles/Home.css";
import mobilePng from "../assets/mobile.png";

function Home() {
  return (
    <div>
      <div className="heroContainer">
        <div className="heroContainerLeft">
          <div className="heroHeading">SHOP COMPUTERS & ACCESSORIES</div>
          <div className="heroDesc">
            Shop laptops, desktops, monitors, tablets, PC gaming, hard drives
            and storage, Accessories and more
          </div>
          <button className="heroButton">Explore more Products</button>
        </div>
        <div className="heroContainerRight">
          <h4>iPhone 15 Pro 512 GB</h4>
          <img
            className="heroImg"
            src={mobilePng}
            height="440px"
            alt="headphone"
          />
        </div>
      </div>
      <div className="heroContainer">
        <div className="heroContainerLeft">
          <div className="heroHeading">SHOP MOBILES & ACCESSORIES</div>
          <div className="heroDesc">
            Shop laptops, desktops, monitors, tablets, PC gaming, hard drives
            and storage, Accessories and more
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
