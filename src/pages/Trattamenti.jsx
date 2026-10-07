import React from 'react';
import { motion } from 'framer-motion';

const Trattamenti = () => {
  const services = [
    "Igiene Dentale", "Ortodonzia Invisibile", "Faccette Dentali", 
    "Sbiancamento Dentale", "Chirurgia Orale", "Endodonzia", 
    "Protesi Fissa e Mobile", "Gnatologia", "Pedodonzia"
  ];

  return (
    <div style={{ paddingTop: '100px', minHeight: '100vh', backgroundColor: 'var(--bg-light)' }}>
      <div className="container" style={{ paddingBottom: '4rem' }}>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <h1 className="section-title">I Nostri Trattamenti</h1>
          <p className="section-subtitle">Soluzioni complete per la salute e la bellezza del tuo sorriso.</p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '2rem' }}>
          {services.map((service, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              style={{ 
                background: 'white',
                padding: '2rem',
                borderRadius: '15px',
                boxShadow: '0 5px 15px rgba(0,0,0,0.05)',
                borderLeft: '4px solid var(--purple-dark)'
              }}
            >
              <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem', color: 'var(--teal-dark)' }}>{service}</h3>
              <p style={{ color: 'var(--grey)', fontSize: '0.9rem' }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Trattamenti;
