import React from "react";
import "./bookTable.css";

const BookTable = () => {
  return (
    <section id="customer-contact">
      <main class="form-signin w-100 m-auto">
        <form>
          <h1 class="h3 mb-3 fw-normal">Reserve your table</h1>

          <div class="form-floating">
            <input
              type="text"
              class="form-control"
              id="floatingInput"
              placeholder="first name"
            ></input>
            <label for="floatingInput">first name</label>
          </div>

          <div class="form-floating">
            <input
              type="text"
              class="form-control"
              id="floatingInput"
              placeholder="last name"
            ></input>
            <label for="floatingInput">last name</label>
          </div>

          <div class="form-floating">
            <input
              type="email"
              class="form-control"
              id="floatingInput"
              placeholder="email"
            ></input>
            <label for="floatingInput">email</label>
          </div>

          <div class="form-floating">
            <input
              type="number"
              class="form-control"
              id="floatingInput"
              placeholder="party size"
            ></input>
            <label for="floatingInput">party size</label>
          </div>

          <div class="form-floating">
            <input
              type="datetime-local"
              class="form-control"
              id="floatingInput"
            ></input>
          </div>



          <button class="btn btn-primary w-100 py-2" type="submit">
            Book
          </button>
        </form>
      </main>
    </section>
  );
};

export default BookTable;
