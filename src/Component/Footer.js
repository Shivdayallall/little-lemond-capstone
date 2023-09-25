import React from "react";
import "./footer.css";
import footerLogo from "../IMG/footerLogo.png";
import footer2 from "../IMG/footer2.png";
import fb from "../IMG/facebook.png";
import ig from "../IMG/instagram.png";
import tw from "../IMG/twitter.png";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-nav-container">
          <img className="footer-img" src={footerLogo} alt="foote"></img>
        {/* Nav for footer */}
        <nav className="navLinks">
          <ul>
            <li>
              <a href="home">Home</a>
            </li>
            <li>
              <a href="home">about</a>
            </li>
            <li>
              <a href="home">menu</a>
            </li>
            <li>
              <a href="home">Reservation</a>
            </li>
            <li>
              <a href="home">Order online</a>
            </li>
            <li>
              <a href="home">Login</a>
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
