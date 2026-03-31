import React from 'react';

const SkillCategory = ({ icon, title, color, skills }) => (
  <div className="skill-card" style={{'--skill-color': color}}>
    <div className="skill-header">
      <span className="skill-icon">{icon}</span>
      <h3>{title}</h3>
    </div>
    <div className="skill-list">
      {skills.map((skill, index) => (
        <div key={index} className="skill-item">
          <div className="skill-info">
            <span className="skill-name">{skill.name}</span>
            <span className="skill-percent">{skill.level}%</span>
          </div>
          <div className="skill-bar">
            <div className="skill-progress" style={{ width: `${skill.level}%` }}></div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default SkillCategory;