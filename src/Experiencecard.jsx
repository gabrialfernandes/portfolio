import React from 'react';

const ExperienceCard = ({ title, company, duration, period, location, current, highlight, icon, responsibilities }) => (
  <div className="timeline-item">
    <div className="timeline-marker">
      <span className="timeline-icon">{icon}</span>
    </div>
    <div className="timeline-content">
      {current && <span className="current-badge">Current Position</span>}
      <h3>{title}</h3>
      <div className="exp-company">{company}</div>
      <div className="exp-meta">
        <span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <circle cx="12" cy="12" r="10"/>
            <polyline points="12 6 12 12 16 14"/>
          </svg>
          {duration} • {period}
        </span>
        <span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
            <circle cx="12" cy="10" r="3"/>
          </svg>
          {location}
        </span>
      </div>
      {highlight && <div className="exp-highlight">⭐ {highlight}</div>}
      <ul className="exp-responsibilities">
        {responsibilities.map((resp, index) => (
          <li key={index}>{resp}</li>
        ))}
      </ul>
    </div>
  </div>
);

export default ExperienceCard;