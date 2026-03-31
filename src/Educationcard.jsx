import React from 'react';

const EducationCard = ({ institution, degree, field, duration, icon, color }) => (
  <div className="edu-card" style={{'--edu-color': color}}>
    <div className="edu-icon-wrapper">
      <span className="edu-icon">{icon}</span>
    </div>
    <h3>{institution}</h3>
    <h4>{degree}</h4>
    <p>{field}</p>
    <div className="edu-duration">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
        <line x1="16" y1="2" x2="16" y2="6"/>
        <line x1="8" y1="2" x2="8" y2="6"/>
        <line x1="3" y1="10" x2="21" y2="10"/>
      </svg>
      {duration}
    </div>
  </div>
);

export default EducationCard;