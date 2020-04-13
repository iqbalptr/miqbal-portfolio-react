import React from 'react';
import './App.css';
import Navbar from './components/Navbar'
import Body from './components/Body'
import LandingPage from './components/LandingPage'
import About from './components/About'
import Skills from './components/Skills'
function App() {
  return (
    <div className="App">
     <Navbar/>
     <Body />
     <br/>
     <br/>
     <br/>
     <br/>
     <LandingPage/>
     <br/>
     <br/>
     <Skills />
     <br/>
     <br/>
     <About />
  </div>
  );
}

export default App;
