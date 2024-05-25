import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import AboutUs from './components/AboutUs/AboutUs';
import Portfolio from './components/Portfolio/Portfolio';

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <AboutUs />
      <Portfolio />
    </>
  );
}

export default App;
