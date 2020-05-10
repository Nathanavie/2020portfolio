import React from 'react';
import Header from './components/Header';
import Intro from './components/Intro';
import About from './components/About';
import Work from './components/Work';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Intro />
      <About />
      <Work />
      <Contact />
    </div>
  );
}

export default App;
