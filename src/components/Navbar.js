import React from "react";
import "../styles/Navbar.css";
import logo from "../assets/amazon-logo.svg";
import userPng from "../assets/user.png";
import { FaRegHeart } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { BsSearch } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { BsBagCheck } from "react-icons/bs";
import { MdOutlineLocationOn } from "react-icons/md";

function Navbar() {
  return (
    <div>
      <div className="navbar">
        <div className="navbarLeft">
          <img className="navbarLogo" src={logo} alt="Amazon" />
          <div className="navbarLocation">
            <MdOutlineLocationOn color="#ff9900" />
            India
          </div>
          <div className="navbarSearchBar">
            <input
              className="navbarSearch"
              name="Search"
              type="text"
              placeholder="Search Amazon Products"
            />
            <BsSearch
              style={{
                backgroundColor: "#f2f3f5",
                padding: 11,
                borderTopRightRadius: 8,
                borderBottomRightRadius: 8,
              }}
              color="#131921"
              size="20"
            />
          </div>
        </div>
        <div className="navbarRight">
          <ul className="navbarTopLinks">
            <li>
              <FaRegHeart title="Wishlist" />
            </li>
            <li>
              <BsBagCheck title="Orders" />
            </li>
            <li>
              <FiShoppingCart title="Cart" />
            </li>
            <li>
              <img width="50px" src={userPng} alt="Amazon" />
              Akshat
            </li>
          </ul>
        </div>
      </div>
      <div className="navbarBottom">
        <div>
          <ul className="navbarBottomLinks">
            <li>
              <GiHamburgerMenu />
              &nbsp;&nbsp;All
            </li>
            <li>Today's Deals</li>
            <li>Gift Cards</li>
            <li>Amazon Pay</li>
            <li>Customer Service</li>
            <li>Become a Seller</li>
            <li
              style={{
                color: "#ff9900",
              }}
            >
              Try Amazon Prime
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
