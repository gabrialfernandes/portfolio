import React from 'react';

const ContactCard = ({ icon, title, value, link }) => (
  <a href={link} className="contact-card">
    <div className="contact-icon-wrapper">{icon}</div>
    <div className="contact-info">
      <h4>{title}</h4>
      <p>{value}</p>
    </div>
  </a>
);

export default ContactCard;