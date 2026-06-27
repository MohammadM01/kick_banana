import React from 'react';
import { MessageSquare } from 'lucide-react';
import './WhatsAppButton.css';

const WhatsAppButton = () => {
  const message = "Hi! I just visited the KICKINBANANA website and want to enquire about stock availability and custom team orders.";

  return (
    <a
      href={`https://wa.me/919876543210?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-sticky-btn"
      aria-label="Contact WhatsApp"
    >
      <MessageSquare className="whatsapp-icon" size={24} />
      <span className="whatsapp-label">Enquire Now</span>
    </a>
  );
};

export default WhatsAppButton;
