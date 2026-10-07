import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col">
            <h3 style={{ fontSize: '1.5rem', fontFamily: 'var(--font-serif)', color: 'white' }}>
              Sesto<span style={{ color: 'var(--teal-light)' }}>Dent</span>
            </h3>
            <p>
              Il tuo sorriso è la nostra priorità. <br/>
              Eccellenza odontoiatrica per la comunità latina a Milano.
            </p>
          </div>
          
          <div className="footer-col">
            <h3>Contatti</h3>
            <p style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <MapPin size={18} color="var(--teal-light)" /> 
              Sesto San Giovanni, Milano (vicino M1)
            </p>
            <p style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Phone size={18} color="var(--teal-light)" /> 
              +39 123 456 7890
            </p>
            <p style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Mail size={18} color="var(--teal-light)" /> 
              info@sestodent.it
            </p>
          </div>
          
          <div className="footer-col">
            <h3>Orari</h3>
            <p style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Clock size={18} color="var(--teal-light)" /> 
              Lun - Ven: 9:00 - 19:00
            </p>
            <p style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', paddingLeft: '1.7rem' }}>
              Sab: 9:00 - 13:00
            </p>
            <p style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', paddingLeft: '1.7rem' }}>
              Dom: Chiuso
            </p>
          </div>
          
          <div className="footer-col">
            <h3>Link Utili</h3>
            <Link to="/eccellenze">Le nostre Eccellenze</Link>
            <Link to="/trattamenti">Trattamenti</Link>
            <Link to="/legale">Privacy Policy & GDPR</Link>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Studio Dentistico Sesto Dent | Dott.ssa Maria Diaz. Tutti i diritti riservati.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
