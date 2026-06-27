import React from 'react';
import { MapPin, Phone, Mail, MessageSquare } from 'lucide-react';
import './ContactInfo.css';

const ContactInfo = () => {
  const contactDetails = [
    {
      icon: <Phone size={24} />,
      title: "Direct WhatsApp Line",
      value: "+91 98765 43210",
      link: "https://wa.me/919876543210"
    },
    {
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>,
      title: "Instagram Page",
      value: "@kickinbanana_11",
      link: "https://instagram.com/kickinbanana_11"
    },
    {
      icon: <Mail size={24} />,
      title: "Email Support",
      value: "kickinbanana@gmail.com",
      link: "mailto:kickinbanana@gmail.com"
    },
    {
      icon: <MapPin size={24} />,
      title: "Jersey Warehouse HQ",
      value: "Indiranagar, Bangalore, Karnataka, India",
      link: null
    }
  ];

  return (
    <div className="contact-details-section">
      <div className="contact-grid-info">
        {contactDetails.map((item, idx) => (
          <div key={idx} className="contact-info-card">
            <div className="contact-icon-wrapper">{item.icon}</div>
            <div className="contact-text-wrapper">
              <h4>{item.title}</h4>
              {item.link ? (
                <a href={item.link} target="_blank" rel="noopener noreferrer" className="contact-link-tag">
                  {item.value}
                </a>
              ) : (
                <span className="contact-static-text">{item.value}</span>
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="contact-whatsapp-banner">
        <MessageSquare size={36} className="wa-banner-icon float" />
        <div className="wa-banner-text">
          <h3>Need Team Jerseys?</h3>
          <p>We offer special discounted bulk rates for teams of 11 or more. Let's design it on WhatsApp.</p>
        </div>
        <a href="https://wa.me/919876543210?text=Hi!%20I%20want%20to%20place%20a%20bulk%20custom%20jersey%20order." target="_blank" rel="noopener noreferrer" className="btn-primary">
          Get Team Discount
        </a>
      </div>
    </div>
  );
};

export default ContactInfo;
