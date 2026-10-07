import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, Train } from 'lucide-react';

const DoveSiamo = () => {
  return (
    <div style={{ paddingTop: '100px', minHeight: '100vh' }}>
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <h1 className="section-title">Dove Siamo</h1>
          <p className="section-subtitle">Vieni a trovarci nel cuore di Sesto San Giovanni, a pochi passi da te.</p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', marginBottom: '4rem' }}>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div style={{ backgroundColor: 'white', padding: '3rem', borderRadius: '20px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
              <h2 style={{ color: 'var(--purple-dark)', marginBottom: '2rem' }}>Informazioni per Raggiungerci</h2>
              
              <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem' }}>
                <MapPin color="var(--teal-dark)" size={24} />
                <div>
                  <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Indirizzo</h3>
                  <p style={{ color: 'var(--grey)' }}>Via Roma 123, <br/> 20099 Sesto San Giovanni (MI)</p>
                </div>
              </div>
              
              <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem' }}>
                <Train color="var(--teal-dark)" size={24} />
                <div>
                  <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Mezzi Pubblici</h3>
                  <p style={{ color: 'var(--grey)' }}>A pochi passi dalla stazione ferroviaria e dalla linea metropolitana M1 (Fermata Sesto 1° Maggio FS).</p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1rem' }}>
                <Clock color="var(--teal-dark)" size={24} />
                <div>
                  <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Orari di Apertura</h3>
                  <p style={{ color: 'var(--grey)' }}>Lun - Ven: 09:00 - 19:00 <br/> Sab: 09:00 - 13:00</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            style={{ width: '100%', height: '100%', minHeight: '400px', borderRadius: '20px', overflow: 'hidden' }}
          >
            {/* Google Maps Embed Placeholder */}
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2795.5398285519393!2d9.231908076634458!3d45.532454571074744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4786b854cdb0fbc3%3A0x6b4476ce138cbceb!2sSesto%20San%20Giovanni!5e0!3m2!1sen!2sit!4v1700000000000!5m2!1sen!2sit" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Mappa Sesto Dent"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default DoveSiamo;
