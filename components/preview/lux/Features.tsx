import React from 'react';

export const Features: React.FC = () => {
  return (
    <section className="lux-section" style={{ background: 'var(--surface-2)' }}>
      <div className="lux-container">
        <h2 className="lux-section-title" style={{ textAlign: 'center' }}>
          <span className="text-brand-gradient">Visualisation Technology</span>
        </h2>
        <p className="lux-body-text" style={{ textAlign: 'center', maxWidth: '80rem', margin: '0 auto 2rem' }}>
          We use state-of-the-art technology to show you the results before we even start. Our 3D scanning and AI-powered smile design tools allow you to visualize your perfect smile with incredible accuracy.
        </p>
        <div className="lux-grid-2" style={{ alignItems: 'center' }}>
          <div>
            <img src="/public/lux/light/assets/visualisation-tech.webp" alt="3D smile visualisation" style={{ width: '100%', borderRadius: 'var(--card-radius)' }} />
          </div>
          <div>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div className="lux-tooth-icon" />
                <span className="lux-body-text">AI-Powered Smile Design</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div className="lux-tooth-icon" />
                <span className="lux-body-text">Intraoral 3D Scanning</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div className="lux-tooth-icon" />
                <span className="lux-body-text">Digital Treatment Planning</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div className="lux-tooth-icon" />
                <span className="lux-body-text">Before & After Previews</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
