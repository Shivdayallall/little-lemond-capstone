import React from 'react'
import Nav from "./Nav";
import Header from './Header';
import Main from './Main';
import Testimonial from './Testimonial';
import About from './About';
import Footer from './Footer';

const Home = () => {
  return (
    <div>
        {/* <Nav /> */}
        <Header />
        <Main />
        <Testimonial />
        <About />
        <Footer />
    </div>
  )
}

export default Home