import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home'; // Updated path for Home
import About from './pages/About/About'; // Updated path for About
import Services from './pages/Services/Services'; // Updated path for Services
import Outsource from './pages/Outsource/Outsource'; // Updated path for Outsource
import Contact from './pages/Contact/Contact'; // Updated path for Contact

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/outsource" element={<Outsource />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;