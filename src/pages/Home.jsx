import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, ShieldCheck, Heart, Smile, CheckCircle, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const { scrollYProgress } = useScroll();
  const yPos1 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const yPos2 = useTransform(scrollYProgress, [0, 1], [0, 100]);

  const fadeIn = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <div style={{ overflow: 'hidden' }}>
      
      {/* Hero Section */}
      <section style={{ 
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        paddingTop: '80px',
        position: 'relative'
      }}>
        {/* Abstract Background Elements */}
        <div className="blob blob-1"></div>
        <div className="blob blob-2" style={{ top: '20%', right: '10%', left: 'auto', background: 'var(--olive)' }}></div>
        <div style={{
          position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
          background: 'linear-gradient(120deg, rgba(255,255,255,0.8) 0%, rgba(244,246,248,0.4) 100%)',
          zIndex: 1
        }}></div>

        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '2rem', alignItems: 'center' }}>
            
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <div style={{ display: 'inline-block', padding: '0.5rem 1.5rem', background: 'rgba(51, 130, 126, 0.1)', color: 'var(--teal-dark)', borderRadius: '30px', fontWeight: '600', marginBottom: '1.5rem', border: '1px solid rgba(51, 130, 126, 0.2)' }}>
                <Star size={16} style={{ display: 'inline', marginRight: '8px', verticalAlign: '-3px' }}/> 
                Eccellenza a Milano Sesto San Giovanni
              </div>
              <h1 style={{ fontSize: '4.5rem', lineHeight: '1.05', marginBottom: '1.5rem', letterSpacing: '-1px' }}>
                Il tuo sorriso, <br/>
                <span style={{ 
                  background: 'linear-gradient(120deg, var(--purple-dark), var(--teal-dark))', 
                  WebkitBackgroundClip: 'text', 
                  WebkitTextFillColor: 'transparent' 
                }}>la nostra arte.</span>
              </h1>
              <p style={{ fontSize: '1.25rem', color: 'var(--grey)', marginBottom: '2.5rem', maxWidth: '520px', lineHeight: '1.8' }}>
                Il punto di riferimento per chi cerca un dentista latino a Milano. Un'esperienza odontoiatrica premium, senza stress né paura, guidata dalla Dott.ssa Maria Diaz.
              </p>
              <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
                <Link to="/contatti" className="btn-primary" style={{ padding: '1rem 2.5rem', fontSize: '1.1rem' }}>
                  Prenota una visita
                </Link>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{ display: 'flex', marginLeft: '10px' }}>
                    {[1,2,3,4].map(i => (
                      <div key={i} style={{ width: '40px', height: '40px', borderRadius: '50%', border: '3px solid white', marginLeft: '-15px', background: 'var(--purple-light)', backgroundImage: `url(https://i.pravatar.cc/100?img=${i+10})`, backgroundSize: 'cover' }}></div>
                    ))}
                  </div>
                  <p style={{ fontSize: '0.9rem', color: 'var(--grey)', fontWeight: '500', lineHeight: '1.2' }}>+1000<br/>Pazienti felici</p>
                </div>
              </div>
            </motion.div>
            
            <div style={{ position: 'relative', height: '700px' }}>
              <motion.div 
                style={{ y: yPos1, position: 'absolute', right: 0, top: '10%', width: '85%', height: '80%', zIndex: 2 }}
                initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 0.2 }}
              >
                <div style={{ width: '100%', height: '100%', borderRadius: '30px', overflow: 'hidden', boxShadow: '0 30px 60px rgba(0,0,0,0.15)' }}>
                  <img src="/images/hero.jpg" alt="Clinica" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
              </motion.div>

              <motion.div 
                style={{ y: yPos2, position: 'absolute', left: '-10%', bottom: '15%', width: '300px', zIndex: 3 }}
                initial={{ opacity: 0, x: -50 }} 
                animate={{ opacity: 1, x: 0 }} 
                transition={{ duration: 1, delay: 0.5 }}
              >
                <motion.div 
                  className="glass-card" 
                  style={{ padding: '2rem' }}
                  animate={{ y: [0, -15, 0] }}
                  transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                >
                  <div style={{ width: '50px', height: '50px', borderRadius: '15px', background: 'var(--teal-light)', display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '1rem' }}>
                    <ShieldCheck color="var(--teal-dark)" size={28} />
                  </div>
                  <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: 'var(--purple-dark)' }}>Cure Garantite</h4>
                  <p style={{ fontSize: '0.9rem', color: 'var(--grey)' }}>Tecnologie all'avanguardia per risultati sicuri e duraturi.</p>
                </motion.div>
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* About Section - Broken Grid Design */}
      <section className="section" style={{ background: 'white' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6rem', alignItems: 'center' }}>
            
            <div style={{ position: 'relative' }}>
              <div className="blob blob-3" style={{ top: '-50px', left: '-50px', background: 'var(--purple-light)' }}></div>
              <motion.div 
                initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }}
                style={{ position: 'relative', zIndex: 2, borderRadius: '30px', overflow: 'hidden', height: '600px' }}
              >
                <img src="/images/about.jpg" alt="Studio" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}
                className="glass-card"
                style={{ position: 'absolute', bottom: '-40px', right: '-40px', padding: '2rem', zIndex: 3, maxWidth: '280px', borderLeft: '5px solid var(--purple-dark)' }}
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
              >
                <p style={{ fontStyle: 'italic', color: 'var(--text-main)', fontSize: '1.1rem', marginBottom: '1rem' }}>"Ogni paziente esce con un messaggio di speranza."</p>
                <p style={{ fontWeight: 'bold', color: 'var(--purple-dark)' }}>- Dott.ssa Maria Diaz</p>
              </motion.div>
            </div>

            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeIn}
            >
              <h2 className="section-title">La Nostra Storia</h2>
              <p style={{ fontSize: '1.2rem', marginBottom: '1.5rem', color: 'var(--grey)' }}>
                Lo Studio Dentistico <strong style={{ color: 'var(--purple-dark)' }}>Sesto Dent</strong>, vanta una lunga tradizione nel settore odontoiatrico, offrendo servizi di alta qualità con professionalità e passione. Fondato dalla <strong style={{ color: 'var(--teal-dark)' }}>Dott.ssa Maria Diaz</strong>.
              </p>
              
              <div style={{ background: 'var(--bg-light)', padding: '2rem', borderRadius: '20px', marginBottom: '2rem', borderLeft: '4px solid var(--olive)' }}>
                <p style={{ fontSize: '1.1rem', color: 'var(--text-main)', fontStyle: 'italic' }}>
                  "Lo studio si è sempre concentrato sul servizio alla comunità latina di Milano. Il nostro team di esperti si occupa di tutti gli aspetti della salute orale."
                </p>
              </div>

              <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2.5rem' }}>
                {['Implantologia avanzata e ortodonzia', 'Faccette dentali e chirurgia orale', 'Approccio personalizzato e senza paura'].map((item, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '1.1rem', color: 'var(--text-main)' }}>
                    <CheckCircle color="var(--olive)" size={24} /> {item}
                  </li>
                ))}
              </ul>

              <Link to="/eccellenze" className="btn-outline">Scopri le nostre Eccellenze</Link>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Services / Features overlapping Section */}
      <section className="section" style={{ paddingBottom: '12rem', paddingTop: '8rem', background: 'var(--bg-light)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
            <h2 className="section-title center">Perché Sceglierci</h2>
            <p className="section-subtitle center">L’eccellenza dei nostri trattamenti unita alla lunga esperienza dei nostri specialisti, fa dello studio un punto di riferimento.</p>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem', position: 'relative' }}>
            {/* Background decorative curve */}
            <div style={{ position: 'absolute', top: '50%', left: 0, width: '100%', height: '2px', background: 'linear-gradient(90deg, transparent, var(--teal-dark), transparent)', opacity: 0.2, zIndex: 0 }}></div>

            {[
              { icon: <Heart size={40} color="var(--white)"/>, title: 'Cura Personalizzata', desc: 'Ogni paziente riceve un piano di trattamento su misura, seguito con attenzione.', color: 'var(--purple-dark)', offset: '0px' },
              { icon: <ShieldCheck size={40} color="var(--white)"/>, title: 'Senza Stress', desc: 'Un ambiente rilassante per chi cerca cure senza paura né ansia.', color: 'var(--teal-dark)', offset: '40px' },
              { icon: <Smile size={40} color="var(--white)"/>, title: 'Risultati Eccellenti', desc: 'Dall\'ingresso all\'uscita con un sorriso perfetto e un messaggio di speranza.', color: 'var(--olive)', offset: '80px' }
            ].map((feature, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2, duration: 0.6 }}
                style={{ 
                  background: 'white', 
                  padding: '3rem 2rem', 
                  borderRadius: '30px', 
                  boxShadow: '0 20px 40px rgba(0,0,0,0.04)',
                  position: 'relative',
                  zIndex: 1,
                  marginTop: feature.offset,
                  border: '1px solid rgba(0,0,0,0.02)'
                }}
              >
                <div style={{ width: '80px', height: '80px', borderRadius: '20px', background: feature.color, display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '2rem', boxShadow: `0 10px 20px ${feature.color}40`, transform: 'rotate(-5deg)' }}>
                  {feature.icon}
                </div>
                <h3 style={{ fontSize: '1.6rem', marginBottom: '1rem', color: 'var(--text-main)' }}>{feature.title}</h3>
                <p style={{ color: 'var(--grey)', lineHeight: '1.7' }}>{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section - Gradient overlap */}
      <section style={{ padding: '0 2rem', marginTop: '-6rem', position: 'relative', zIndex: 10 }}>
        <div className="container" style={{ maxWidth: '1000px' }}>
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            style={{ 
              background: 'linear-gradient(135deg, var(--teal-dark) 0%, var(--purple-dark) 100%)',
              padding: '5rem 4rem',
              borderRadius: '40px',
              color: 'white',
              textAlign: 'center',
              boxShadow: '0 30px 60px rgba(130, 43, 115, 0.3)',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            {/* CTA Decorative */}
            <div style={{ position: 'absolute', top: '-50%', left: '-20%', width: '100%', height: '100%', background: 'radial-gradient(circle, rgba(255,255,255,0.2) 0%, transparent 70%)' }}></div>
            
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '3.5rem', color: 'white', marginBottom: '1.5rem', position: 'relative', zIndex: 2 }}>
              Pronto per il tuo nuovo sorriso?
            </h2>
            <p style={{ fontSize: '1.3rem', marginBottom: '3rem', opacity: 0.9, position: 'relative', zIndex: 2, maxWidth: '600px', margin: '0 auto 3rem auto' }}>
              È il punto di riferimento a Milano, nel cuore di Sesto San Giovanni, a pochi passi dalla stazione ferroviaria e della M1.
            </p>
            <div style={{ position: 'relative', zIndex: 2 }}>
              <Link to="/contatti" className="btn-primary" style={{ backgroundColor: 'white', color: 'var(--purple-dark)', padding: '1.2rem 3rem', fontSize: '1.2rem', boxShadow: '0 10px 30px rgba(0,0,0,0.2)' }}>
                Prenota Ora <ArrowRight size={20} style={{ verticalAlign: 'middle', marginLeft: '0.8rem' }} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
      <div style={{ height: '6rem', background: 'white' }}></div>
    </div>
  );
};

export default Home;
