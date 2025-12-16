import React, { useEffect, useRef, useState } from 'react';

const Hero = () => {
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setVisible(entry.isIntersecting));
    });
    observer.observe(domRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="min-vh-100 d-flex align-items-center position-relative pt-5 overflow-hidden">
      <div className="container mt-5">
        <div 
          ref={domRef}
          className={`row align-items-center fade-in-section ${isVisible ? 'is-visible' : ''}`}
        >
          {/* Columna Texto */}
          <div className="col-lg-6 mb-5 mb-lg-0">
            <div 
              className="d-inline-flex align-items-center px-3 py-1 rounded-pill mb-4 glass"
              style={{ border: '1px solid var(--primary-color)' }}
            >
              <span className="me-2">🚀</span>
              <small className="fw-bold" style={{ color: 'var(--primary-color)' }}>
                V 2.0 Ya Disponible
              </small>
            </div>

            <h1 className="display-3 fw-bold mb-4">
              Control total para tu <br />
              <span className="text-gradient">Red de Locales</span>
            </h1>

            <p className="lead text-muted mb-5">
              La plataforma definitiva que unifica stock, equipos y operaciones 
              de todas tus franquicias en un panel inteligente.
            </p>

            <div className="d-flex gap-3">
              <button className="btn btn-primary btn-lg rounded-pill px-5 shadow-lg">
                Demo Gratis
              </button>
              <button className="btn btn-outline-secondary btn-lg rounded-pill px-5 glass text-reset border-0">
                Ver Video
              </button>
            </div>
            
            <div className="mt-5 d-flex align-items-center gap-2">
              <div className="d-flex">
                 {[1,2,3].map(i => (
                   <img 
                    key={i}
                    src={`https://i.pravatar.cc/100?img=${10+i}`} 
                    className="rounded-circle border border-2 border-white"
                    width="40" 
                    height="40"
                    style={{marginLeft: '-10px'}}
                    alt="user"
                   />
                 ))}
              </div>
              <span className="small text-muted fw-bold ms-2">
                +500 Managers confían en Vaynux
              </span>
            </div>
          </div>

          {/* Columna Visual / Dashboard */}
          <div className="col-lg-6 position-relative">
            <div className="glass p-3 rounded-4 position-relative z-2" style={{ transform: 'rotateY(-10deg) rotateX(5deg)' }}>
               {/* Simulación de Interfaz */}
               <div className="bg-dark rounded-3 p-4" style={{ minHeight: '400px', opacity: 0.9 }}>
                 <div className="d-flex gap-2 mb-4">
                   <div className="rounded-circle bg-danger" style={{width:10, height:10}}></div>
                   <div className="rounded-circle bg-warning" style={{width:10, height:10}}></div>
                   <div className="rounded-circle bg-success" style={{width:10, height:10}}></div>
                 </div>
                 <h4 className="text-white text-center mt-5">Dashboard en Tiempo Real</h4>
                 {/* Aquí irían gráficas de ejemplo */}
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;