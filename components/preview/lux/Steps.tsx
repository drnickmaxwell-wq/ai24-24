import React from 'react';

export const Steps: React.FC = () => {
  return (
    <section className="lux-section" style={{ background: 'var(--surface-2)' }}>
      <div className="lux-container">
        <h2 className="lux-section-title" style={{ textAlign: 'center' }}>
          Your Journey to a <span className="text-brand-gradient">Perfect Smile</span>
        </h2>
        <div className="lux-grid-4">
          <div className="lux-card" style={{ textAlign: 'center' }}>
            <div className="lux-stats-number" style={{ color: 'var(--brand-magenta)' }}>1</div>
            <h3 className="lux-card-title">Consultation</h3>
            <p className="lux-small-text">Meet our experts for a comprehensive smile analysis.</p>
          </div>
          <div className="lux-card" style={{ textAlign: 'center' }}>
            <div className="lux-stats-number" style={{ color: 'var(--brand-turquoise)' }}>2</div>
            <h3 className="lux-card-title">Visualisation</h3>
            <p className="lux-small-text">See your new smile with our 3D preview technology.</p>
          </div>
          <div className="lux-card" style={{ textAlign: 'center' }}>
            <div className="lux-stats-number" style={{ color: 'var(--brand-gold)' }}>3</div>
            <h3 className="lux-card-title">Treatment</h3>
            <p className="lux-small-text">Relax in our luxury coastal setting during your treatment.</p>
          </div>
          <div className="lux-card" style={{ textAlign: 'center' }}>
            <div className="lux-stats-number" style={{ color: 'var(--success)' }}>4</div>
            <h3 className="lux-card-title">Reveal</h3>
            <p className="lux-small-text">Enjoy your new, perfect smile with confidence.</p>
          </div>
        </div>
      </div>
    </section>
  );
};
