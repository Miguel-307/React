import React from 'react';

const Features = () => {
  const features = [
    {
      icon: "bi-shop-window",
      title: "Multi-Local Centralizado",
      desc: "Gestiona el stock y los pedidos de todas tus franquicias desde una sola pantalla. Adiós al Excel."
    },
    {
      icon: "bi-people-fill",
      title: "Control de Personal",
      desc: "Asigna turnos, revisa rendimientos y gestiona nóminas de todos tus equipos automáticamente."
    },
    {
      icon: "bi-bar-chart-line-fill",
      title: "Analítica Predictiva",
      desc: "Nuestra IA analiza tus ventas y te dice qué producto se agotará antes de que ocurra."
    }
  ];

  return (
    <section className="py-5" id="features">
      <div className="container py-5">
        <div className="text-center mb-5">
          <h2 className="fw-bold display-5 mb-3">Todo lo que necesitas</h2>
          <p className="lead text-muted">Una suite completa para escalar tu negocio sin perder el control.</p>
        </div>

        <div className="row g-4">
          {features.map((item, index) => (
            <div className="col-md-4" key={index}>
              <div className="glass p-4 rounded-4 h-100 border-0 feature-card">
                <div className="d-inline-flex align-items-center justify-content-center bg-primary bg-opacity-10 text-primary rounded-3 p-3 mb-4">
                  <i className={`bi ${item.icon} fs-3`}></i>
                </div>
                <h3 className="h4 fw-bold mb-3">{item.title}</h3>
                <p className="text-muted">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;