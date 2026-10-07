import React from 'react';
import { motion } from 'framer-motion';

const Eccellenze = () => {
  return (
    <div style={{ paddingTop: '100px', minHeight: '100vh' }}>
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <h1 className="section-title">Le Nostre Eccellenze</h1>
          <p className="section-subtitle">Tecnologia, precisione e dedizione per offrirti solo il meglio.</p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'center', marginBottom: '6rem' }}>
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div style={{ width: '100%', height: '400px', borderRadius: '20px', backgroundColor: '#eee', backgroundImage: 'url(/images/implant.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', color: 'var(--teal-dark)' }}>Implantologia Avanzata</h2>
            <p style={{ marginBottom: '1.5rem', color: 'var(--text-main)' }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <p style={{ color: 'var(--grey)' }}>
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </motion.div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'center', marginBottom: '6rem' }}>
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            style={{ order: 2 }}
          >
            <div style={{ width: '100%', height: '400px', borderRadius: '20px', backgroundColor: '#eee', backgroundImage: 'url(/images/aesthetic.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            style={{ order: 1 }}
          >
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', color: 'var(--purple-dark)' }}>Estetica Dentale</h2>
            <p style={{ marginBottom: '1.5rem', color: 'var(--text-main)' }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <p style={{ color: 'var(--grey)' }}>
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Eccellenze;
