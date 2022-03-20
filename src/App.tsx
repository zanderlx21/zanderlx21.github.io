import React from 'react';
import Greeting from './components/Greeting';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <main className="App">
      <Greeting />
      <Projects />
      <About />
      <Contact />
    </main>
  );
}

export default App;
