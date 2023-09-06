import React from "react";
import "./footer.css";
import footerLogo from "../IMG/footerLogo.png"
import fb from "../IMG/facebook.png"
import ig from "../IMG/instagram.png"
import tw from "../IMG/twitter.png"

const Footer = () => {
  return (
    <footer className="footer-container">
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <img className="logo" src={footerLogo} alt="resturant log"></img>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav footer-nav">
            <h5>Navigation</h5>
              <li className="nav-item">
                <a className="nav-link" href="#home">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#menu">
                  Menu
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#reservation">
                  Reservation
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#order-online">
                  Order Online
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#login">
                  Login
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="contact-details">
            <div className="contact1">
                <p>123 Buxton rd, Guyana</p>
                <p>651-789-4561</p>
                <p>Kay@gmail.com</p>
            </div>
            <div className="contact2">
                <p>123 Broken rd, Guyana</p>
                <p>651-723-4661</p>
                <p>Jay@gmail.com</p>
            </div>
            <div className="social-icon">
                <a href="google.com">
                    <img src={fb} alt="facebook"></img>
                </a>
                <a href="google.com">
                    <img src={ig} alt="instagram"></img>
                </a>
                <a href="google.com">
                    <img src={tw} alt="twitter"></img>
                </a>
            </div>
      </div>
    </footer>
  );
};
export default Footer;
