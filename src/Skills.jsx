import React from 'react';
import SkillCategory from './SkillCategory';

const Skills = () => {
  return (
    <section id="skills" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-number">03</span>
          <h2 className="section-title">Skills & Expertise</h2>
          <p className="section-subtitle">Technical proficiencies and professional competencies</p>
        </div>
        <div className="skills-layout">
          <SkillCategory
            icon="📊"
            title="Operations & Planning"
            color="#6366f1"
            skills={[
              { name: "Scheduling", level: 95 },
              { name: "Sales Planning", level: 90 },
              { name: "Operations Management", level: 92 },
              { name: "Business Planning", level: 88 },
              { name: "Budgeting & Forecasting", level: 85 }
            ]}
          />
          
          <SkillCategory
            icon="💼"
            title="Business & Strategy"
            color="#8b5cf6"
            skills={[
              { name: "Business Strategy", level: 87 },
              { name: "Market Research", level: 85 },
              { name: "Business Insights", level: 90 },
              { name: "Analytics", level: 92 },
              { name: "Problem Solving", level: 93 }
            ]}
          />
          
          <SkillCategory
            icon="📺"
            title="Media & Broadcasting"
            color="#ec4899"
            skills={[
              { name: "Broadcast Television", level: 90 },
              { name: "Traffic & Presentation", level: 95 },
              { name: "Advertising Operations", level: 93 },
              { name: "Entertainment Industry", level: 88 },
              { name: "Sales Operations", level: 90 }
            ]}
          />
          
          <SkillCategory
            icon="💻"
            title="Technical Skills"
            color="#06b6d4"
            skills={[
              { name: "Microsoft Excel", level: 95 },
              { name: "AIRWAVES", level: 90 },
              { name: "EMSIS", level: 88 },
              { name: "Spectra MD", level: 85 },
              { name: "PowerPoint", level: 92 }
            ]}
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;