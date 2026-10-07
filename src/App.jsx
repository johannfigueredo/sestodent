import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import Home from './pages/Home';
import Eccellenze from './pages/Eccellenze';
import Trattamenti from './pages/Trattamenti';
import DoveSiamo from './pages/DoveSiamo';
import Contatti from './pages/Contatti';
import Legale from './pages/Legale';
import './index.css';

function App() {
  return (
    <Router>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/eccellenze" element={<Eccellenze />} />
          <Route path="/trattamenti" element={<Trattamenti />} />
          <Route path="/dove-siamo" element={<DoveSiamo />} />
          <Route path="/contatti" element={<Contatti />} />
          <Route path="/legale" element={<Legale />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppButton />
    </Router>
  );
}

export default App;
