import React from "react";
import {Link} from "react-router-dom";
import "./nav.css";
import logo from "../IMG/Logo.png";

const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
          <img className="toplogo" src={logo} alt="resturant log"></img>
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
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
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
              <a className="nav-link" href="#head">Reservation</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#order-online">Order Online</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#login">Login</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Nav;
