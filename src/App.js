import React from "react";
import Nav from "./Component/Nav";
import ReserveTable from "./Component/BookTable";
import Home from "./Component/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <React.Fragment>
        <div className="App">
          <Nav />
          <Routes>
            <Route path="/" index element={<Home />} />
            <Route path="/booktable" element={<ReserveTable />} />
          </Routes>
        </div>
      </React.Fragment>
    </BrowserRouter>
  );
}

export default App;
