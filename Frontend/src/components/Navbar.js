import React from "react";
import "../styles/Navbar.css";
import logo from "../assets/amazon-logo.svg";
import userPng from "../assets/userAvatar.png";
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
                backgroundColor: "#ff9900",
                padding: 10.5,
                borderTopRightRadius: 8,
                borderBottomRightRadius: 8,
              }}
              color="#FFFF"
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
              <img width="32px" src={userPng} alt="Amazon" />
              <h4>&nbsp; Akshat</h4>
            </li>
          </ul>
        </div>
      </div>

      <div className="navbarSmallScreen">
        <div className="navbarLeftSmallScreen">
          <img width="30px" src={userPng} alt="Amazon" />
        </div>
        <div className="navbarLogoSmallScreen">
          <img src={logo} alt="Amazon" />
        </div>
        <div className="navbarRight">
          <ul className="navbarTopLinksSmallScreen">
            <li>
              <FaRegHeart title="Wishlist" size={20} />
            </li>
            <li>
              <FiShoppingCart title="Cart" size={20} />
            </li>
          </ul>
        </div>
      </div>

      <div className="navbarSearchBarSmallScreen">
        <input
          className="navbarSearchSmallScreen"
          name="Search"
          type="text"
          placeholder="Search Amazon Products"
        />
        <BsSearch
              style={{
                backgroundColor: "#ff9900",
                padding: 11,
                borderTopRightRadius: 8,
                borderBottomRightRadius: 8,
                marginRight: 10
              }}
              color="#FFFF"
              size="20"
            />
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
