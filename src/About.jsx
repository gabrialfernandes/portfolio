import React from 'react';

const About = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-number">01</span>
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">Get to know more about my background and expertise</p>
        </div>
        <div className="about-content">
          <div className="about-main">
            <div className="quote-card">
              <svg className="quote-icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"/>
              </svg>
              <p className="quote-text">We all bloom in our own season.</p>
            </div>
            <div className="about-text">
              <p>
                An experienced <span className="highlight">media professional</span> with a demonstrated 
                history of working in the Media industry. Currently serving as Planning - Senior Support 
                at <span className="highlight">Condé Nast India</span>, managing operations for prestigious 
                brands including Vogue, CNT, GQ, and AD.
              </p>
              <p>
                With expertise spanning ad operations, on-air management, sales planning, and strategic coordination, 
                I bring a comprehensive approach to media operations. My experience includes extensive work with 
                industry-leading software platforms and successful collaboration with teams both locally and internationally.
              </p>
            </div>
            <div className="tech-showcase">
              <h4>Core Technologies</h4>
              <div className="tech-grid">
                {[
                  { name: 'AIRWAVES', icon: '📡' },
                  { name: 'EMSIS', icon: '💻' },
                  { name: 'Spectra MD', icon: '📊' },
                  { name: 'Fusion', icon: '🔗' },
                  { name: 'Excel', icon: '📈' },
                  { name: 'SAP', icon: '🗄️' }
                ].map(tech => (
                  <div key={tech.name} className="tech-card">
                    <span className="tech-icon">{tech.icon}</span>
                    <span className="tech-name">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="about-sidebar">
            <div className="info-card">
              <div className="info-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
                <div>
                  <span className="info-label">Location</span>
                  <span className="info-value">Mumbai, India</span>
                </div>
              </div>
              <div className="info-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
                  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
                </svg>
                <div>
                  <span className="info-label">Company</span>
                  <span className="info-value">Condé Nast India</span>
                </div>
              </div>
              <div className="info-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                <div>
                  <span className="info-label">Experience</span>
                  <span className="info-value">8+ Years</span>
                </div>
              </div>
              <div className="info-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
                  <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
                </svg>
                <div>
                  <span className="info-label">Education</span>
                  <span className="info-value">MBA, BCom</span>
                </div>
              </div>
            </div>
            <div className="achievements-card">
              <h4>Key Achievements</h4>
              <ul>
                <li>Led IPL 2019 & 2020 operations</li>
                <li>Managed Cricket World Cup 2019</li>
                <li>62 Station oversight at Radio Mirchi</li>
                <li>Multi-brand coordination at Condé Nast</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;