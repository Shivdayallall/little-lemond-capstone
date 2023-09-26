import React from "react";
// import Header from "./Component/Header";
import Nav from "./Component/Nav";
// import Main from "./Component/Main";
// import Testimonial from "./Component/Testimonial";
// import About from "./Component/About";
import ReserveTable from "./Component/BookTable";
import Home from "./Component/Home";
// import Footer from "./Component/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { ChakraProvider } from "@chakra-ui/react";

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
