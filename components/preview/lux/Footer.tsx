import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="lux-footer">
      <div className="lux-container lux-footer-content">
        <div className="lux-grid-4" style={{ alignItems: 'flex-start' }}>
          <div>
            <a href="/" className="lux-logo" style={{ color: 'var(--surface)' }}>
              <div className="lux-logo-icon">S</div>
              <span style={{ fontWeight: 700, fontSize: '1.25rem' }}>Smile Makers</span>
            </a>
            <p className="lux-small-text" style={{ opacity: 0.8, marginTop: '1rem' }}>
              Experience the future of dentistry in a luxury coastal setting.
            </p>
          </div>
          <div>
            <h4 className="lux-card-title" style={{ color: 'var(--surface)' }}>Quick Links</h4>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <li><a href="#treatments" className="lux-small-text" style={{ color: 'var(--surface)', textDecoration: 'none' }}>Treatments</a></li>
              <li><a href="#about" className="lux-small-text" style={{ color: 'var(--surface)', textDecoration: 'none' }}>About Us</a></li>
              <li><a href="#reviews" className="lux-small-text" style={{ color: 'var(--surface)', textDecoration: 'none' }}>Reviews</a></li>
              <li><a href="#contact" className="lux-small-text" style={{ color: 'var(--surface)', textDecoration: 'none' }}>Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="lux-card-title" style={{ color: 'var(--surface)' }}>Contact Us</h4>
            <p className="lux-small-text" style={{ opacity: 0.8 }}>
              123 Coastal Drive, Brighton, BN1 2CD
              <br />
              01273 453109
              <br />
              hello@smilemakers.com
            </p>
          </div>
          <div>
            <h4 className="lux-card-title" style={{ color: 'var(--surface)' }}>Opening Hours</h4>
            <p className="lux-small-text" style={{ opacity: 0.8 }}>
              Mon-Fri: 9AM - 5PM
              <br />
              Sat: 10AM - 2PM
              <br />
              Sun: Closed
            </p>
          </div>
        </div>
        <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.1)', marginTop: '2rem', paddingTop: '2rem', textAlign: 'center' }}>
          <p className="lux-small-text" style={{ opacity: 0.6 }}>
            © {new Date().getFullYear()} Smile Makers. All Rights Reserved. CQC Registered.
          </p>
        </div>
      </div>
      <div className="lux-footer-emergency">
        <div className="lux-container">
          <span>24/7 Emergency Care Available: 01273 453109</span>
        </div>
      </div>
    </footer>
  );
};
