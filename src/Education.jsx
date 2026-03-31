import React from 'react';
import EducationCard from './EducationCard';

const Education = () => {
  return (
    <section id="education" className="section section-alt">
      <div className="container">
        <div className="section-header">
          <span className="section-number">04</span>
          <h2 className="section-title">Education</h2>
          <p className="section-subtitle">Academic background and qualifications</p>
        </div>
        <div className="education-grid">
          <EducationCard
            institution="NMIMS CDOE"
            degree="Master of Business Administration"
            field="Operations Management and Supervision"
            duration="2022 - 2024"
            icon="🎓"
            color="#6366f1"
          />
          
          <EducationCard
            institution="University of Mumbai"
            degree="Bachelor of Commerce"
            field="Accounting and Finance"
            duration="2012 - 2015"
            icon="📚"
            color="#8b5cf6"
          />
          
          <EducationCard
            institution="Kankavali College"
            degree="Higher Secondary Certificate"
            field="Business/Commerce"
            duration="2009 - 2011"
            icon="📖"
            color="#ec4899"
          />
          
          <EducationCard
            institution="St Ursula High School"
            degree="Secondary School Certificate"
            field="General Education"
            duration="1997 - 2009"
            icon="🏫"
            color="#06b6d4"
          />
        </div>
      </div>
    </section>
  );
};

export default Education;