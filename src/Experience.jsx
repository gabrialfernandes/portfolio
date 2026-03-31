import React from 'react';
import ExperienceCard from './Experiencecard';

const Experience = () => {
  return (
    <section id="experience" className="section section-alt">
      <div className="container">
        <div className="section-header">
          <span className="section-number">02</span>
          <h2 className="section-title">Professional Journey</h2>
          <p className="section-subtitle">A timeline of my career milestones and growth</p>
        </div>
        <div className="timeline">
          <ExperienceCard
            title="Planning - Senior Support"
            company="Condé Nast India"
            duration="Sep 2023 - Present"
            period="2 yrs 6 mos"
            location="Mumbai, Maharashtra, India"
            current={true}
            icon="🏢"
            responsibilities={[
              "Print Ads Scheduling (Flatplan creation for Vogue and CNT)",
              "Revenue comparison with previous year and forecasts presentation",
              "In-depth analysis of trends, shortfalls, and successes",
              "Weekly, monthly, and yearly performance summaries for Net Revenue Targets",
              "Daily forecast updates across Print, Digital, Events, and Social Media",
              "Lead Editorial collaboration calls for CNT"
            ]}
          />

          <ExperienceCard
            title="Senior Executive Media Operations"
            company="IPG Mediabrands"
            duration="Apr 2023 - Sep 2023"
            period="6 mos"
            location="Mumbai, Maharashtra, India"
            icon="📊"
            responsibilities={[
              "Working for Initiative Sydney/Melbourne/Perth (Mumbai COE)",
              "Campaign performance tracking and optimization",
              "Competitive reporting and post-campaign analysis",
              "Billing reconciliation and media flowchart updates",
              "Using Australian systems: Spectra MD, Fusion"
            ]}
          />

          <ExperienceCard
            title="Media Operations Executive"
            company="IPG Mediabrands"
            duration="Sep 2021 - Apr 2023"
            period="1 yr 8 mos"
            location="Mumbai, Maharashtra, India"
            icon="💼"
            responsibilities={[
              "Campaign performance tracking for goal achievement",
              "Partner actualisations for campaign delivery",
              "Departmental project participation"
            ]}
          />

          <ExperienceCard
            title="Traffic and Presentation"
            company="Disney Star"
            duration="Jan 2019 - May 2021"
            period="2 yrs 5 mos"
            location="Mumbai, Maharashtra, India"
            highlight="Major Events: Cricket World Cup 2019, IPL 2019 & 2020"
            icon="📺"
            responsibilities={[
              "Promos presentation for Star Sports Network (ON AIR)",
              "Live Sports and recorded programs scheduling",
              "Daily NETWORK maintenance across Star Sports",
              "Scheduled BWF, Pro Kabaddi, Premier League, Bundesliga, Formula 1"
            ]}
          />

          <ExperienceCard
            title="Ad Operations"
            company="Radio Mirchi (ENIL)"
            duration="Aug 2017 - Jan 2019"
            period="1 yr 6 mos"
            location="Lower Parel"
            icon="📻"
            responsibilities={[
              "Traffic Scheduling for multiple stations",
              "Managing Chennai, Madurai, Lucknow, Jaipur stations",
              "Daily log reconciliation and DFR/DSDR reporting",
              "Monitoring 62 stations Recon status",
              "Working with EMSIS (Electronic Media Solution in SAP)"
            ]}
          />
        </div>
      </div>
    </section>
  );
};

export default Experience;