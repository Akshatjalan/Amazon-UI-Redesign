import React from "react";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <a className="footerTopContainer" href="#top">
        Back to top
      </a>
      <div className="footerContainer">
        <ul>
          <li>
            <b>Contact</b>
          </li>
          <li>
            <a
              href="mailto:akshatjalanmain@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Gmail
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/akshat-jalan/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </li>
        </ul>
        <ul>
          <li>
            <b>Other Works</b>
          </li>
          <li>
            <a
              href="https://akshatjalan.github.io/devfolio/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Devfolio
            </a>
          </li>
          <li>
            <a
              href="https://github.com/Akshatjalan/DevFreelance"
              target="_blank"
              rel="noopener noreferrer"
            >
              Code FreeLance
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
