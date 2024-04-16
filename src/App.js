import React, { useEffect } from 'react';

import { AboutUs, Chef, FindUs, Footer, Gallery, Header, Intro, Laurels, SpecialMenu, } from './container';
import { Navbar } from './components';
import './App.css';
import axios from 'axios';
import RandomFood from './container/RandomFood/RandomFood';


const App = () =>{

  return (
  <div>
    < Navbar />
    <Header />
    <RandomFood/>
    <AboutUs />
    <SpecialMenu />
    <Chef />
    <Intro />
    <Laurels />
    <Gallery />
    <FindUs />
    <Footer />
  </div>
);}

export default App;
