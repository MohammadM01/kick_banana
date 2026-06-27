import React from 'react';
import ContactInfo from '../components/Contact/ContactInfo';
import { useScrollReveal } from '../hooks/useScrollReveal';

const Contact = () => {
  const revealRef = useScrollReveal();

  return (
    <div className="contact-page container" style={{ paddingBottom: '80px', paddingTop: '40px' }} ref={revealRef}>
      <div className="section-header" style={{ marginBottom: '50px' }} data-reveal>
        <h2>Contact Our Team</h2>
        <p>Got questions about size fits, custom logo prints, or bulk orders? We're active and ready to assist you!</p>
      </div>

      <div data-reveal data-reveal-delay="100">
        <ContactInfo />
      </div>
    </div>
  );
};

export default Contact;
