import React from 'react';
import Header from './components/Header';
import Intro from './components/Intro';
import About from './components/About';
import Work from './components/Work';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Intro />
      <About />
      <Work />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
