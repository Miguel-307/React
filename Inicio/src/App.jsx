import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Importamos el Router
import './App.css';

// Importamos componentes
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Pricing from './components/Pricing';
import Footer from './components/Footer';
import ProductosPage from './components/ProductosPage'; // Nueva página

// Componente simple para la Home (agrupa Hero, Features y Pricing)
const Home = () => (
  <>
    <Hero />
    <Features />
    <Pricing />
  </>
);

// Componente vacío para cumplir requisito de Contacto
const Contacto = () => (
    <div className="container mt-5 pt-5 text-center" style={{minHeight: '60vh'}}>
        <h1 className="mt-5 display-4">Contáctanos</h1>
        <p className="lead">Formulario en construcción...</p>
    </div>
);

function App() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <BrowserRouter> {/* El Router envuelve todo */}
      <div className="app-wrapper">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>

        {/* Navbar siempre visible */}
        <Navbar theme={theme} toggleTheme={toggleTheme} />
        
        <main>
          {/* Aquí definimos las rutas que cambian el contenido */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/productos" element={<ProductosPage />} />
            <Route path="/contacto" element={<Contacto />} />
          </Routes>
        </main>

        {/* Footer siempre visible */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;