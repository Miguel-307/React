import React from 'react';

const Pricing = () => {
  return (
    <section className="py-5" id="pricing">
      <div className="container py-5">
        <div className="text-center mb-5">
          <h2 className="fw-bold display-5">Planes Flexibles</h2>
          <p className="text-muted">Empieza gratis y escala a medida que abres nuevos locales.</p>
        </div>

        <div className="row justify-content-center align-items-center g-4">
          
          {/* Plan Starter */}
          <div className="col-lg-4">
            <div className="glass p-4 rounded-4 text-center">
              <h4 className="text-muted mb-3">Starter</h4>
              <h2 className="display-4 fw-bold">0€</h2>
              <p className="text-muted mb-4">Para 1 local</p>
              <ul className="list-unstyled text-start mb-4 ps-4">
                <li className="mb-2"><i className="bi bi-check-circle-fill text-primary me-2"></i>Gestión de Stock</li>
                <li className="mb-2"><i className="bi bi-check-circle-fill text-primary me-2"></i>3 Usuarios</li>
                <li className="mb-2 text-muted"><i className="bi bi-x-circle me-2"></i>Sin IA Predictiva</li>
              </ul>
              <button className="btn btn-outline-primary w-100 rounded-pill">Crear cuenta</button>
            </div>
          </div>

          {/* Plan PRO (Destacado) */}
          <div className="col-lg-4">
            <div className="glass p-5 rounded-4 text-center border-primary position-relative shadow-lg" style={{borderWidth: '2px'}}>
              <span className="position-absolute top-0 start-50 translate-middle badge rounded-pill bg-primary px-3 py-2">
                MÁS POPULAR
              </span>
              <h4 className="text-primary fw-bold mb-3">Business</h4>
              <h2 className="display-4 fw-bold">49€</h2>
              <p className="text-muted mb-4">/mes por local</p>
              <ul className="list-unstyled text-start mb-4 ps-4">
                <li className="mb-2"><i className="bi bi-check-circle-fill text-primary me-2"></i>Multi-local ilimitado</li>
                <li className="mb-2"><i className="bi bi-check-circle-fill text-primary me-2"></i>Analítica IA</li>
                <li className="mb-2"><i className="bi bi-check-circle-fill text-primary me-2"></i>Soporte 24/7</li>
              </ul>
              <button className="btn btn-primary w-100 btn-lg rounded-pill shadow">Empezar Prueba</button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Pricing;