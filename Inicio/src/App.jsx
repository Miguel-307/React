import { useState, useEffect } from 'react';
import './App.css';

// Importamos todos los componentes
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Pricing from './components/Pricing';
import Footer from './components/Footer';

function App() {
  // Estado del tema (Dark/Light)
  const [theme, setTheme] = useState(
    localStorage.getItem('theme') || 'dark'
  );

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className="app-wrapper">
      {/* Fondos animados (Blobs) */}
      <div className="blob blob-1"></div>
      <div className="blob blob-2"></div>

      {/* Navegación */}
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      
      {/* Contenido Principal */}
      <main>
        <Hero />
        <Features />
        <Pricing />
      </main>

      {/* Pie de página */}
      <Footer />
    </div>
  );
}

export default App;