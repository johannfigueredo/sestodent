import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, User, Calendar } from 'lucide-react';

const Contatti = () => {
  return (
    <div style={{ paddingTop: '100px', minHeight: '100vh', backgroundColor: 'var(--bg-light)' }}>
      <div className="container" style={{ paddingBottom: '4rem' }}>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <h1 className="section-title">Contattaci</h1>
          <p className="section-subtitle">Prenota la tua visita o richiedi maggiori informazioni. Siamo qui per te.</p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '4rem' }}>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div style={{ backgroundColor: 'var(--teal-dark)', color: 'white', padding: '3rem', borderRadius: '20px', height: '100%' }}>
              <h2 style={{ color: 'white', marginBottom: '2rem', fontSize: '2rem' }}>I Nostri Recapiti</h2>
              
              <div style={{ marginBottom: '2rem' }}>
                <p style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '1.2rem', marginBottom: '1rem' }}>
                  <Phone color="var(--teal-light)" /> +39 123 456 7890
                </p>
                <p style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '1.2rem' }}>
                  <Mail color="var(--teal-light)" /> info@sestodent.it
                </p>
              </div>

              <div style={{ marginTop: '4rem' }}>
                <h3 style={{ color: 'var(--teal-light)', marginBottom: '1rem' }}>Emergenze Dentistiche</h3>
                <p style={{ opacity: 0.9 }}>Per urgenze odontoiatriche, ti preghiamo di chiamarci direttamente al numero indicato per ricevere assistenza nel minor tempo possibile.</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <div style={{ backgroundColor: 'white', padding: '3rem', borderRadius: '20px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
              <h2 style={{ color: 'var(--purple-dark)', marginBottom: '2rem' }}>Richiedi Appuntamento</h2>
              
              <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                  <div>
                    <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-main)', fontWeight: '500' }}>Nome e Cognome</label>
                    <div style={{ position: 'relative' }}>
                      <User size={18} style={{ position: 'absolute', top: '50%', transform: 'translateY(-50%)', left: '15px', color: 'var(--grey)' }} />
                      <input type="text" placeholder="Mario Rossi" style={{ width: '100%', padding: '1rem 1rem 1rem 2.5rem', borderRadius: '10px', border: '1px solid #ddd', outline: 'none' }} />
                    </div>
                  </div>
                  <div>
                    <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-main)', fontWeight: '500' }}>Telefono</label>
                    <div style={{ position: 'relative' }}>
                      <Phone size={18} style={{ position: 'absolute', top: '50%', transform: 'translateY(-50%)', left: '15px', color: 'var(--grey)' }} />
                      <input type="tel" placeholder="+39 000 000 0000" style={{ width: '100%', padding: '1rem 1rem 1rem 2.5rem', borderRadius: '10px', border: '1px solid #ddd', outline: 'none' }} />
                    </div>
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-main)', fontWeight: '500' }}>Email (Opzionale)</label>
                  <div style={{ position: 'relative' }}>
                    <Mail size={18} style={{ position: 'absolute', top: '50%', transform: 'translateY(-50%)', left: '15px', color: 'var(--grey)' }} />
                    <input type="email" placeholder="mario@example.com" style={{ width: '100%', padding: '1rem 1rem 1rem 2.5rem', borderRadius: '10px', border: '1px solid #ddd', outline: 'none' }} />
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-main)', fontWeight: '500' }}>Motivo della visita</label>
                  <select style={{ width: '100%', padding: '1rem', borderRadius: '10px', border: '1px solid #ddd', outline: 'none', backgroundColor: 'white', color: 'var(--grey)' }}>
                    <option value="">Seleziona un'opzione</option>
                    <option value="prima-visita">Prima Visita (Consulenza)</option>
                    <option value="igiene">Igiene Orale</option>
                    <option value="dolore">Emergenza / Dolore</option>
                    <option value="altro">Altro</option>
                  </select>
                </div>

                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-main)', fontWeight: '500' }}>Messaggio (Opzionale)</label>
                  <textarea rows="4" placeholder="Scrivi qui..." style={{ width: '100%', padding: '1rem', borderRadius: '10px', border: '1px solid #ddd', outline: 'none', resize: 'none' }}></textarea>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                  <input type="checkbox" id="privacy" style={{ marginTop: '0.3rem' }} />
                  <label htmlFor="privacy" style={{ fontSize: '0.9rem', color: 'var(--grey)' }}>
                    Acconsento al trattamento dei miei dati personali in accordo con la <a href="/legale" style={{ color: 'var(--teal-dark)' }}>Privacy Policy</a>.
                  </label>
                </div>

                <button type="button" className="btn-primary" style={{ marginTop: '1rem' }}>Invia Richiesta</button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contatti;
