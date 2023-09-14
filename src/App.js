import React from 'react';
import Header from './Component/Header';
import Nav from './Component/Nav';
import Main from './Component/Main';
import Testimonial from './Component/Testimonial';
import Footer from './Component/Footer';

import { ChakraProvider } from '@chakra-ui/react'

import './App.css';

function App() {
  return (
    <React.Fragment>
      <div className='App'>
        <Nav />
        <Header />
        <Main />
        <Testimonial />
        <Footer />
     </div>
    </React.Fragment>
  );
}

export default App;

