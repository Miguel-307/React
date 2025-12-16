import React from 'react';

const Navbar = ({ theme, toggleTheme }) => {
  return (
    <nav className="navbar navbar-expand-lg fixed-top glass py-3">
      <div className="container">
        <a className="navbar-brand fw-bold fs-4" href="#">
          VAYNUX
        </a>
        
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon" style={{filter: theme === 'dark' ? 'invert(1)' : 'none'}}></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-center gap-3">
            <li className="nav-item"><a className="nav-link" href="#">Producto</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Precios</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Empresa</a></li>
            
            {/* Botón Theme Toggle */}
            <li className="nav-item">
              <button 
                onClick={toggleTheme} 
                className="btn btn-sm rounded-circle border-0"
                style={{ background: 'var(--bg-body)', color: 'var(--text-main)' }}
              >
                {theme === 'dark' ? (
                  <i className="bi bi-sun-fill fs-5"></i>
                ) : (
                  <i className="bi bi-moon-stars-fill fs-5"></i>
                )}
              </button>
            </li>
            
            <li className="nav-item">
              <button className="btn btn-primary px-4 rounded-pill fw-medium">
                Empezar
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;