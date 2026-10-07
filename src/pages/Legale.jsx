import React from 'react';

const Legale = () => {
  return (
    <div style={{ paddingTop: '120px', paddingBottom: '60px', minHeight: '100vh' }}>
      <div className="container" style={{ maxWidth: '800px', backgroundColor: 'white', padding: '3rem', borderRadius: '20px', boxShadow: '0 5px 20px rgba(0,0,0,0.05)' }}>
        <h1 style={{ color: 'var(--purple-dark)', marginBottom: '2rem', fontSize: '2.5rem' }}>Privacy Policy & GDPR</h1>
        
        <div style={{ color: 'var(--text-main)', lineHeight: '1.8' }}>
          <p style={{ marginBottom: '1.5rem' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>

          <h3 style={{ color: 'var(--teal-dark)', marginTop: '2rem', marginBottom: '1rem' }}>1. Titolare del Trattamento</h3>
          <p style={{ marginBottom: '1.5rem' }}>
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>

          <h3 style={{ color: 'var(--teal-dark)', marginTop: '2rem', marginBottom: '1rem' }}>2. Tipologia dei Dati Trattati</h3>
          <p style={{ marginBottom: '1.5rem' }}>
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.
          </p>
          <ul style={{ listStyleType: 'disc', paddingLeft: '2rem', marginBottom: '1.5rem' }}>
            <li>Dati anagrafici (nome, cognome, etc.)</li>
            <li>Dati di contatto (email, numero di telefono)</li>
            <li>Dati relativi alla salute (solo con consenso esplicito)</li>
          </ul>

          <h3 style={{ color: 'var(--teal-dark)', marginTop: '2rem', marginBottom: '1rem' }}>3. Diritti dell'Interessato</h3>
          <p style={{ marginBottom: '1.5rem' }}>
            Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Legale;
