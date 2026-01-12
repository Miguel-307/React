import React from 'react';
import { Link } from 'react-router-dom'; // IMPORTANTE

const Navbar = ({ theme, toggleTheme }) => {
  return (
    <nav className="navbar navbar-expand-lg fixed-top glass py-3">
      <div className="container">
        <Link className="navbar-brand fw-bold fs-4" to="/">VAYNUX</Link>
        
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon" style={{filter: theme === 'dark' ? 'invert(1)' : 'none'}}></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-center gap-3">
            <li className="nav-item"><Link className="nav-link" to="/">Inicio</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/productos">Productos</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/contacto">Contacto</Link></li>
            
            <li className="nav-item">
              <button onClick={toggleTheme} className="btn btn-sm rounded-circle border-0">
                {theme === 'dark' ? <i className="bi bi-sun-fill fs-5"></i> : <i className="bi bi-moon-stars-fill fs-5"></i>}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;