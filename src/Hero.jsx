import React from 'react';

const Hero = ({ scrollToSection }) => {
  return (
    <section id="home" className="hero">
      <div className="hero-bg-animation">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
        <div className="grid-overlay"></div>
      </div>

      <div className="container">
        <div className="hero-content">

          <div className="hero-text">
            <div className="greeting">
              <span className="wave">👋</span> Hello, I'm
            </div>
            <h1 className="name-title">
              Gabrial <span className="gradient-text">Fernandes</span>
            </h1>
            <div className="typing-container">
              <p className="subtitle">
                <span className="typing-text">Planning Coordination Specialist</span>
              </p>
            </div>
            <p className="hero-description">
              Media Operations Expert at <strong>Condé Nast India</strong> specializing in Revenue Planning,
              Ad Operations & Strategic Coordination across prestigious brands including Vogue, GQ, and CNT.
            </p>
            <div className="hero-stats">
              <div className="stat-item">
                <span className="stat-number">8+</span>
                <span className="stat-label">Years Experience</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">500+</span>
                <span className="stat-label">Connections</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">10+</span>
                <span className="stat-label">Major Projects</span>
              </div>
            </div>
            <div className="cta-buttons">
              <button className="btn btn-primary" onClick={() => scrollToSection('contact')}>
                <span>Get In Touch</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </button>
              <button className="btn btn-secondary" onClick={() => scrollToSection('experience')}>
                <span>View Experience</span>
              </button>
            </div>
          </div>

          <div className="hero-image">
            <div className="profile-wrapper">
              <div className="profile-img">
                <span>GF</span>
              </div>
              <div className="orbit-ring ring-1"></div>
              <div className="orbit-ring ring-2"></div>
              <div className="floating-badge badge-1">📊</div>
              <div className="floating-badge badge-2">💼</div>
              <div className="floating-badge badge-3">🎯</div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;