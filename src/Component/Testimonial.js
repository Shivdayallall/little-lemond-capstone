import React from "react";
import review1 from "../IMG/girl.png";
import review2 from "../IMG/man.png";
import review3 from "../IMG/profile.png";
import "./testimonials.css";

import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";

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
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: review3,
    },

  ];
  return (
    <section className="reviews-section">
      <Carousel className="slider" fade>
        {reviews.map((review, index) => (
          <Carousel.Item key={index}>
            <Card className="horizontal-card">
              <div className="card-image">
                <Card.Img src={review.image} alt={review.name} />
              </div>
              <Card.Body>
                <Card.Title>{review.name}</Card.Title>
                <Card.Text>{review.description}</Card.Text>
              </Card.Body>
            </Card>
          </Carousel.Item>
        ))}
      </Carousel>
    </section>
  );
};
export default Testimonial;
