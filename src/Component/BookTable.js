import React, { useState } from "react";
import AlertCustomer from "./AlertCustomer";

import "./bookTable.css";

const BookTable = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [partySize, setPartySize] = useState("");
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");
  const [occasion, setOccasion] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowAlert(true);
  };

  return (
    <section id="customer-contact">
      <main className="form-signin w-100 m-auto">
        <form onSubmit={handleSubmit}>
          <h1 className="h3 mb-3 fw-normal">Reserve your table</h1>

          <div className="form-floating">
            <input
              type="text"
              className="form-control"
              id="customer-full-name"
              name="customer-full-name"
              placeholder="full name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            ></input>
            <label htmlFor="customer-full-name">full name</label>
          </div>

          <div className="form-floating">
            <input
              type="email"
              className="form-control"
              id="customer-email"
              placeholder="email"
              name="customer-email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></input>
            <label htmlFor="customer-email">email</label>
          </div>

          <div className="form-floating">
            <input
              type="number"
              className="form-control"
              id="party-size"
              min="1"
              max="10"
              name="party-size"
              placeholder="party size"
              value={partySize}
              onChange={(e) => setPartySize(e.target.value)}
            ></input>
            <label htmlFor="party-size">party size</label>
          </div>

          <div className="form-floating">
            <input
              type="date"
              className="form-control"
              id="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            ></input>
          </div>

          <div className="form-floating">
            <input
              type="time"
              className="form-control"
              id="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
            ></input>
          </div>

          <select
            className="form-select"
            aria-label="Default select example"
            value={occasion}
            onChange={(e) => setOccasion(e.target.value)}
          >
            <option>Select occasion</option>
            <option>Birthday</option>
            <option>Wedding</option>
            <option>Dinner</option>
          </select>
          <button className="btn btn-primary w-100 py-2" type="submit">
            Book
          </button>
        </form>

        {showAlert && (
          <AlertCustomer
            fullName={fullName}
            time={time}
            email={email}
            date={date}
            partySize={partySize}
            occasion={occasion}
          />
        )}
      </main>
    </section>
  );
};

export default BookTable;
