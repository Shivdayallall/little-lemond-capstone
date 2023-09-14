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
      description: "'This is the most AMAZING restaurant, hands down. The middle eastern authentic cuisine in this restaurant has the most JUICIEST kebabs in the universe and their tandoori bread is to die for.'",
      image: review1,
      vote:"⭐⭐🌟🌟"
    },
    {
      name: "Jane Smith",
      description:
        "'I tried a lamb gyro and I loved it. It was lettuce, onion and lamb with yogurt sauce. It was delicious.'",
      image: review2,
      vote:"⭐⭐🌟🌟"
    },
    {
      name: "Jerry Mud",
      description:
        "'Great fresh salads. We had salmon, beef and lamb rib kebabs. Service was good. Local neighborhood ambiance. Great experience.'",
      image: review3,
      vote:"⭐⭐🌟🌟"
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
              <br></br>
              <em>{review.vote}</em>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </section>
  );
};
export default Testimonial;
