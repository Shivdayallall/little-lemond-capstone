import React from "react";
import review1 from "../IMG/girl.png";
import review2 from "../IMG/man.png";
import review3 from "../IMG/profile.png";
import "./testimonials.css";

import Carousel from "react-bootstrap/Carousel";

const Testimonial = () => {
  const reviews = [
    {
      name: "John Doe",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: review1,
    },
    {
      name: "Jane Smith",
      description:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: review2,
    },
    {
      name: "Jerry Mud",
      description:
        "'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'",
      image: review3,
    },
  ];
  return (
    <section className="reviews-section">
      <Carousel className="slider" interval={1500}>
        {reviews.map((review, index) => (
          <Carousel.Item key={index}>
            <h2 className="review-text">{review.description}</h2>
            <div className="review-poster">
              <img
                className="review-img"
                src={review.image}
                alt="person who reviewed the resturant"
              ></img>
              <em>{review.name}</em>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </section>
  );
};
export default Testimonial;
