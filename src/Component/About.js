import React from "react";
import "./about.css";
import chef1 from "../IMG/chef1.jfif";
import chef2 from "../IMG/chef2.jpg";

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-details">
        <h1>Little Lemon</h1>
        <h5>Guyana</h5>
        <p>
          We are a family own mediterranean resturant, focused on traditional
          recipes served with a modern twist.
        </p>
      </div>

      <div className="img-container-chef">
        <img
          src={chef1}
          alt="woman presenting a plate of food"
          className="img-chef1"
        ></img>

        <img
          src={chef2}
          alt="man presenting a plate of food"
          className="img-chef2"
        ></img>
      </div>
    </section>
  );
};

export default About;
