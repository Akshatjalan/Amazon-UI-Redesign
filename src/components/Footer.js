import React from "react";
import "../styles/Footer.css";

function Footer() {
  return (
    <div>
      <a className="footerTopContainer" href="#">
        Back to top
      </a>
      <div className="footerContainer">
        <ul>
          <li>
            <b>Get to Know Us</b>
          </li>
          <li>About Us</li>
          <li>Careers</li>
          <li>Press Releases</li>
          <li>Amazon Science </li>
        </ul>
        <ul>
          <li>
            <b>Connect with Us</b>
          </li>
          <li>Facebook</li>
          <li>Twitter</li>
          <li>Instagram</li>
          <li>Amazon Science </li>
        </ul>
        <ul>
          <li>
            <b>Let Us Help You</b>
          </li>
          <li>COVID-19 and Amazon</li>
          <li>Your Account</li>
          <li>Returns Centre</li>
          <li>100% Purchase Protection</li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
