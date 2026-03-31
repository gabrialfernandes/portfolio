import React from 'react';
import ContactCard from './ContactCard';

const Contact = () => {
  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-number">05</span>
          <h2 className="section-title">Let's Connect</h2>
          <p className="section-subtitle">Ready to collaborate? Reach out and let's create something amazing</p>
        </div>
        <div className="contact-layout">
          <div className="contact-main">
            <h3>Get In Touch</h3>
            <p>
              I'm always interested in hearing about new opportunities, collaborations, 
              and conversations about media operations and planning strategies. Whether you have 
              a question or just want to say hi, feel free to reach out!
            </p>
            <div className="contact-methods">
              <ContactCard
                icon={
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                }
                title="Email"
                value="gabrielfernandes27041993@gmail.com"
                link="mailto:gabrielfernandes27041993@gmail.com"
              />
              
              <ContactCard
                icon={
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                }
                title="LinkedIn"
                value="Connect with me"
                link="https://in.linkedin.com/in/gabrial-fernandes-061909191"
              />
              
              <ContactCard
                icon={
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                }
                title="Location"
                value="Mumbai, Maharashtra"
                link="#"
              />
              
              <ContactCard
                icon={
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
                  </svg>
                }
                title="Company"
                value="Condé Nast India"
                link="#"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;