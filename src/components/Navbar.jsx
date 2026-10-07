import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Eccellenze', path: '/eccellenze' },
    { name: 'Trattamenti', path: '/trattamenti' },
    { name: 'Dove siamo', path: '/dove-siamo' },
    { name: 'Contatti', path: '/contatti' },
  ];

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-container">
        <Link to="/" className="navbar-logo">
          Sesto<span>Dent</span>
        </Link>
        
        <div className="nav-links">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path}
              className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
            >
              {link.name}
            </Link>
          ))}
          <Link to="/contatti" className="btn-primary" style={{ padding: '0.6rem 1.2rem', marginLeft: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Phone size={16} /> Prenota
          </Link>
        </div>

        <button 
          className="mobile-menu-btn"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="mobile-menu"
            style={{ backgroundColor: 'white', borderBottom: '1px solid #eee' }}
          >
            <div className="container" style={{ padding: '1rem 2rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  style={{ color: 'var(--purple-dark)', fontWeight: '500', padding: '0.5rem 0' }}
                >
                  {link.name}
                </Link>
              ))}
              <Link to="/contatti" onClick={() => setMobileMenuOpen(false)} className="btn-primary" style={{ textAlign: 'center' }}>
                Prenota ora
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
