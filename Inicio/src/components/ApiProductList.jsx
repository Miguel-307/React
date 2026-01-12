import React, { useState, useEffect } from 'react';

const ApiProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Llamada a API Pública al montar el componente
  useEffect(() => {
    fetch('https://fakestoreapi.com/products/category/electronics?limit=4')
      .then(res => res.json())
      .then(json => {
        setProducts(json);
        setLoading(false);
      })
      .catch(err => console.error("Error cargando API:", err));
  }, []);

  if (loading) return <div className="text-center py-5"><div className="spinner-border text-primary"></div></div>;

  return (
    <div className="row g-4">
      <h3 className="mb-4 mt-5 border-bottom pb-2">Hardware Compatible (API Dinámica)</h3>
      {products.map((product) => (
        <div className="col-md-3 col-sm-6" key={product.id}>
          <div className="card h-100 bg-transparent border-0">
            <div className="glass p-3 rounded-4 h-100 d-flex flex-column">
              <div className="bg-white rounded-3 p-2 mb-3 d-flex align-items-center justify-content-center" style={{height: '150px'}}>
                  <img src={product.image} alt={product.title} style={{maxHeight: '100px', maxWidth: '100%'}} />
              </div>
              <h6 className="fw-bold small text-truncate">{product.title}</h6>
              <p className="fw-bold text-primary mt-auto">${product.price}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ApiProductList;