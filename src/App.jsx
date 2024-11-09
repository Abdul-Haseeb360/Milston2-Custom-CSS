import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import './App.css';
import "./components/css/style.css"

const App = () => {
  return (
    <Router>
      <div className="app" >
        <header >
          <nav >
            <ul>
              <li><Link style={{color: "white", textDecoration: "none"}} to="/">Home</Link></li>
              <li><Link style={{color: "white", textDecoration: "none"}}to="/about">About</Link></li>
              <li><Link style={{color: "white", textDecoration: "none"}} to="/services">Services</Link></li>
              <li><Link style={{color: "white", textDecoration: "none"}} to="/contact">Contact</Link></li>
            </ul>
          </nav>
        </header>

        <main >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <footer >
          <p>&copy; 2023 My Company. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
};

export default App;
