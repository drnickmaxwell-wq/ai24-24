import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="lux-header">
      <div className="lux-emergency-bar">
        <div className="lux-container">
          <span>Emergency Contact: 01273 453109</span>
        </div>
      </div>
      <div className="lux-container">
        <nav className="lux-nav">
          <a href="/" className="lux-logo">
            <div className="lux-logo-icon">S</div>
            <span style={{ fontWeight: 700, fontSize: '1.25rem' }}>Smile Makers</span>
          </a>
          <ul className="lux-nav-menu">
            <li><a href="#treatments" className="lux-nav-link lux-gold-shimmer">Treatments</a></li>
            <li><a href="#about" className="lux-nav-link lux-gold-shimmer">About Us</a></li>
            <li><a href="#reviews" className="lux-nav-link lux-gold-shimmer">Reviews</a></li>
            <li><a href="#contact" className="lux-nav-link lux-gold-shimmer">Contact</a></li>
          </ul>
          <button className="lux-cta-button lux-cta-primary">
            Book Now
          </button>
        </nav>
      </div>
    </header>
  );
};
