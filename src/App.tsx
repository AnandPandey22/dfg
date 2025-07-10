import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <div className="bg-slate-50 pt-16 sm:pt-20">
            <Header />
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Contact />
          </div>
        } />
      </Routes>
    </Router>
  );
}

export default App;