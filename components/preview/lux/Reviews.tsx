import React from 'react';

export const Reviews: React.FC = () => {
  return (
    <section className="lux-section">
      <div className="lux-container">
        <h2 className="lux-section-title" style={{ textAlign: 'center' }}>
          Going the <span className="text-brand-gradient">Extra Smile</span>
        </h2>
        <div className="lux-grid-3">
          <div className="lux-review-card">
            <div className="lux-review-stars">★★★★★</div>
            <p className="lux-review-text">"The most incredible dental experience of my life. The attention to detail and luxury feel is unmatched."</p>
            <div className="lux-review-author">
              <div className="lux-review-avatar">A</div>
              <div>
                <div style={{ fontWeight: 700 }}>Alex Johnson</div>
                <div style={{ fontSize: '0.875rem', opacity: 0.8 }}>Veneers Patient</div>
              </div>
            </div>
          </div>
          <div className="lux-review-card">
            <div className="lux-review-stars">★★★★★</div>
            <p className="lux-review-text">"I never thought I'd say this about a dentist, but I can't wait to go back! The results are stunning."</p>
            <div className="lux-review-author">
              <div className="lux-review-avatar">S</div>
              <div>
                <div style={{ fontWeight: 700 }}>Samantha Williams</div>
                <div style={{ fontSize: '0.875rem', opacity: 0.8 }}>Implants Patient</div>
              </div>
            </div>
          </div>
          <div className="lux-review-card">
            <div className="lux-review-stars">★★★★★</div>
            <p className="lux-review-text">"From the 3D preview to the final result, everything was flawless. Truly a first-class experience."</p>
            <div className="lux-review-author">
              <div className="lux-review-avatar">M</div>
              <div>
                <div style={{ fontWeight: 700 }}>Michael Brown</div>
                <div style={{ fontSize: '0.875rem', opacity: 0.8 }}>Smile Design Patient</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
