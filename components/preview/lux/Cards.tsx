import React from 'react';

export const Cards: React.FC = () => {
  return (
    <section className="lux-section">
      <div className="lux-container">
        <h2 className="lux-section-title" style={{ textAlign: 'center' }}>
          Our <span className="text-brand-gradient">Luxury Treatments</span>
        </h2>
        <div className="lux-grid-3">
          <div className="lux-card">
            <div className="lux-card-icon lux-card-icon-turquoise">🖥️</div>
            <h3 className="lux-card-title">3D Digital Dentistry</h3>
            <p className="lux-small-text">Precision-engineered treatments using the latest in 3D scanning and digital design for flawless results.</p>
          </div>
          <div className="lux-card">
            <div className="lux-card-icon lux-card-icon-magenta">💎</div>
            <h3 className="lux-card-title">Porcelain Veneers</h3>
            <p className="lux-small-text">Hand-crafted, ultra-thin porcelain veneers to create a perfectly natural and radiant smile.</p>
          </div>
          <div className="lux-card">
            <div className="lux-card-icon lux-card-icon-gold">🔩</div>
            <h3 className="lux-card-title">Dental Implants</h3>
            <p className="lux-small-text">State-of-the-art dental implants that look, feel, and function just like natural teeth.</p>
          </div>
        </div>
      </div>
    </section>
  );
};
