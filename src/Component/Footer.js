import React from "react";
import "./footer.css";
import footerLogo from "../IMG/footerLogo.png";
import fb from "../IMG/facebook.png";
import ig from "../IMG/instagram.png";
import tw from "../IMG/twitter.png";
import {Link} from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-nav-container">
          <img className="footer-img" src={footerLogo} alt="foote"></img>
        {/* Nav for footer */}
        <nav className="navLinks">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link href="#about">about</Link>
            </li>
            <li>
              <a href="#menu">menu</a>
            </li>
            <li>
              <a href="#head">Reservation</a>
            </li>
            <li>
              <a href="/">Order online</a>
            </li>
            <li>
              <a href="/">Login</a>
            </li>
          </ul>
        </nav>
      </div>

      <div className="contact-details-container">
        <div className="contact1">
          <p>123 Old town rd, Guyana</p>
          <p>651-789-4561</p>
          <p>Kay@gmail.com</p>
        </div>

        <div className="contact2">
          <p>123 New town rd, Guyana</p>
          <p>651-723-4661</p>
          <p>Jay@gmail.com</p>
        </div>
      </div>

      <div className="social-icons-container">
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
    </footer>
  );
};
export default Footer;
