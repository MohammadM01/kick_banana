import React from 'react';
import ContactInfo from '../components/Contact/ContactInfo';

const Contact = () => {
  return (
    <div className="contact-page container fade-in" style={{ paddingBottom: '80px', paddingTop: '40px' }}>
      <div className="section-header" style={{ marginBottom: '50px' }}>
        <h2>Contact Our Team</h2>
        <p>Got questions about size fits, custom logo prints, or bulk orders? We're active and ready to assist you!</p>
      </div>

      <ContactInfo />
    </div>
  );
};

export default Contact;
