import React from 'react';

export const FAQ: React.FC = () => {
  return (
    <section className="lux-section" style={{ background: 'var(--surface-2)' }}>
      <div className="lux-container">
        <h2 className="lux-section-title" style={{ textAlign: 'center' }}>
          Frequently Asked <span className="text-brand-gradient">Questions</span>
        </h2>
        <div style={{ maxWidth: '80rem', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <details className="lux-card" style={{ cursor: 'pointer' }}>
            <summary className="lux-card-title">What makes your practice a 'luxury' experience?</summary>
            <p className="lux-body-text">We combine state-of-the-art technology with a serene, coastal setting and five-star patient care to create a dental experience unlike any other.</p>
          </details>
          <details className="lux-card" style={{ cursor: 'pointer' }}>
            <summary className="lux-card-title">How does the AI Smile Quiz work?</summary>
            <p className="lux-body-text">Our AI-powered quiz analyzes your smile and provides personalized recommendations for treatments that will help you achieve your goals. It's a fun and easy way to explore your options.</p>
          </details>
          <details className="lux-card" style={{ cursor: 'pointer' }}>
            <summary className="lux-card-title">Do you offer financing options?</summary>
            <p className="lux-body-text">Yes, we offer a range of flexible financing options to make your dream smile accessible. Please contact our team to learn more.</p>
          </details>
        </div>
      </div>
    </section>
  );
};
