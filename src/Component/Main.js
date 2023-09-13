import React from "react";
import "./main.css";
import pasta from "../IMG/Pasta.png";
import lemonDesert from "../IMG/Lemon-dessert.png";
import greekSalad from "../IMG/Greek-salad.png";
import bruschetta from "../IMG/Bruschetta.png";

const Main = () => {
  const cardData = [
    {
      title: "Bruschetta",
      image: bruschetta,
      price: "12.29",
      description:
        "Bruschetta is an Italian appetizer renowned for its simplicity and delightful flavors. It consists of toasted slices of rustic bread, typically drizzled with olive oil and rubbed with garlic, which serve as a crunchy base for a variety of toppings.",
    },
    {
      title: "Greek salad",
      image: greekSalad,
      price: "10.99",
      description:
        "A Greek salad, also known as a 'horiatiki' salad, is a classic Mediterranean dish bursting with fresh and vibrant flavors. It typically includes a colorful medley of ingredients such as ripe tomatoes, cucumbers, red onions, and green bell peppers, all sliced and mixed together.",
    },
    {
      title: "Pasta",
      image: pasta,
      price: "15.00",
      description:
        "Pasta in tomato sauce is a classic Italian dish cherished worldwide for its comforting simplicity and rich flavors. Al dente pasta, often spaghetti or penne, is lovingly coated in a savory tomato sauce made from ripe tomatoes, garlic, onions, and aromatic herbs like basil and oregano.",
    },
    {
      title: "Lemon cake",
      image: lemonDesert,
      price: "8.00",
      description:
        "Lemon cake is a delightful dessert renowned for its zesty and citrusy flavor profile. This moist and tender cake is typically infused with the bright essence of fresh lemon zest and juice, creating a perfect balance of sweet and tangy notes.",
    },
  ];
  return (
    <main>
         <div className="labelContainer">
        <h4>Today's special</h4>
        <button className="btn btn-warning orderBTN">Order online</button>
      </div>
      <div className="cardContainer">
        {cardData.map((item, index) => (
          <div className="card border-warning mb-3 border-2 rounded" key={index}>
            <img src={item.image} class="card-img-top" alt="..."></img>
            <div className="card-body text-start">
              <h5 className="card-title">{item.title}</h5>
              <p class="card-text"><medium class="text-muted">${item.price}</medium></p>
              <p className="card-text">{item.description}</p>
              <a href="#" className="btn btn-warning orderBTN">
                Order
              </a>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};
export default Main;
