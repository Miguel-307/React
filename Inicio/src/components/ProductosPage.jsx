import React from 'react';
import ServiceCard from './ServiceCard';
import ApiProductList from './ApiProductList';

const ProductosPage = () => {
  return (
    <section className="py-5 mt-5">
        <h1>Esto es de internet el verdadero tendra otra forma esta es la temporal</h1>
      <div className="container">
        <h2 className="display-5 fw-bold mb-5 text-center">Nuestros Servicios y Hardware</h2>
        
        {/* 1. SECCIÓN ESTÁTICA */}
        <div className="row justify-content-center mb-5">
            <ServiceCard 
                title="Instalación On-Site"
                description="Enviamos a un técnico certificado a tu local para configurar todos los TPVs y formar a tu personal."
                imageUrl="https://images.unsplash.com/photo-1581092921461-eab62e97a78e?auto=format&fit=crop&w=500&q=80"
            />
            <ServiceCard 
                title="Consultoría de Stock"
                description="Auditoría completa de tu inventario para optimizar mermas y automatizar pedidos a proveedores."
                imageUrl="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=500&q=80"
            />
        </div>

        {/* 2. SECCIÓN DINÁMICA (API) */}
        <ApiProductList />
      </div>
    </section>
  );
};

export default ProductosPage;