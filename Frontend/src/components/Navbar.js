import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Navbar.css";
import logo from "../assets/amazon-logo.svg";
import userPng from "../assets/userAvatar.png";
// import { FaRegHeart } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { BsSearch } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineLocationOn } from "react-icons/md";
import { FiLogOut } from "react-icons/fi";

function Navbar() {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const userName = localStorage.getItem("userName");

  const handleSearch = () => {
    if (searchQuery.trim()) {
      navigate(`/search?q=${searchQuery.trim()}`);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userName");
    alert("You have been signed out.");
    navigate("/signin");
  };

  return (
    <div>
      <div className="navbar">
        <div className="navbarLeft">
          <Link to="/">
            <img className="navbarLogo" src={logo} alt="Amazon" />
          </Link>
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
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleSearch()}
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
              onClick={handleSearch}
            />
          </div>
        </div>
        <div className="navbarRight">
          <ul className="navbarTopLinks">
            {/* <li>
              <Link to="/cart" className="cartLink">
                <FaRegHeart title="Wishlist" />
              </Link>
            </li> */}
            <li>
              <Link to="/cart" className="cartLink">
                <FiShoppingCart title="Cart" size={20} />
              </Link>
            </li>
            {token ? (
              <li>
                <Link onClick={handleLogout} className="cartLink">
                  <FiLogOut title="Logout" size={20} />
                </Link>
              </li>
            ) : (
              <li>
                <Link to="/cart" className="cartLink">
                  Sign In
                </Link>
              </li>
            )}

            <li>
              <img width="32px" src={userPng} alt="Amazon" />
              <h4>&nbsp; {userName}</h4>
            </li>
          </ul>
        </div>
      </div>

      <div className="navbarSmallScreen">
        <div className="navbarLeftSmallScreen">
          <img width="30px" src={userPng} alt="Amazon" />
        </div>
        <div className="navbarLogoSmallScreen">
          <Link to="/">
          <img src={logo} alt="Amazon" />
          </Link>
        </div>
        <div className="navbarRight">
          <ul className="navbarTopLinksSmallScreen">
            <li>
              <Link to="/cart" className="cartLink">
                <FiShoppingCart title="Cart" size={20} />
              </Link>
            </li>
            {token ? (
              <li>
                <Link onClick={handleLogout} className="cartLink">
                  <FiLogOut title="Logout" size={20} />
                </Link>
              </li>
            ) : (
              <li>
                <Link to="/cart" className="cartLink">
                  Sign In
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>

      <div className="navbarSearchBarSmallScreen">
        <input
          className="navbarSearchSmallScreen"
          name="Search"
          type="text"
          placeholder="Search Amazon Products"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && handleSearch()}
        />
        <BsSearch
          style={{
            backgroundColor: "#ff9900",
            padding: 11,
            borderTopRightRadius: 8,
            borderBottomRightRadius: 8,
            marginRight: 10,
          }}
          color="#FFFF"
          size="20"
          onClick={handleSearch}
        />
      </div>

      <div className="navbarBottom">
        <div>
          <ul className="navbarBottomLinks">
            <li>
              <Link to="/category-products?type=All">
                <GiHamburgerMenu />
                &nbsp;&nbsp;All
              </Link>
            </li>
            <li>
              <Link to="/category-products?type=Shoes">Shoes</Link>
            </li>
            <li>
              <Link to="/category-products?type=Bags">Backpacks</Link>
            </li>
            <li>
              <Link to="/cart">Cart Items</Link>
            </li>
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
