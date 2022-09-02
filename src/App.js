import React from 'react';
import "./App.css"
import About from './components/About';
import HeroSection from './components/HeroSection';
import Team from './components/Team';
import Price from "./components/Price"
import Testimonials from './components/Testimonials';
import Footer from "./components/Footer"
import NavigationBar from './components/NavigationBar';

const App = () => {
  return (
    <>
      <NavigationBar />
      <HeroSection />
      <About />
      <Team />
      <Price />
      <Testimonials />
      <Footer />
    </>
  )
}

export default App;