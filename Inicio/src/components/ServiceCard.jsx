import React from 'react';

const ServiceCard = ({ title, description, imageUrl }) => {
  return (
    <div className="col-md-6 mb-4">
      <div className="glass p-4 rounded-4 h-100 d-flex flex-column align-items-center text-center">
        <img 
          src={imageUrl} 
          alt={title} 
          className="img-fluid rounded-3 mb-3" 
          style={{ maxHeight: '200px', objectFit: 'cover' }}
        />
        <h3 className="fw-bold">{title}</h3>
        <p className="text-muted">{description}</p>
        <button className="btn btn-outline-primary mt-auto rounded-pill">Más info</button>
      </div>
    </div>
  );
};

export default ServiceCard;