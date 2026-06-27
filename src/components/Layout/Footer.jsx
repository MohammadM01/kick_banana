import React from 'react';
import { Link } from 'react-router-dom';
import { Send, MessageSquare } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-brand">
          <Link to="/" className="footer-logo">
            <div className="logo-badge">KB</div>
            <h3>KICKINBANANA</h3>
          </Link>
          <p className="footer-desc">
            Premium custom soccer & cricket jerseys designed for performance and built for durability. Handcrafted fits for the absolute enthusiasts.
          </p>
          <div className="footer-tagline">
            High Quality • Great Fit • Affordable
          </div>
        </div>

        <div className="footer-links">
          <h4>Explore</h4>
          <Link to="/">Home</Link>
          <Link to="/collections">Collections</Link>
          <Link to="/custom">Custom Orders</Link>
          <Link to="/about">About Us</Link>
          <Link to="/contact">Contact Support</Link>
        </div>

        <div className="footer-social">
          <h4>Get in Touch</h4>
          <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="social-link">
            <MessageSquare size={18} />
            <span>WhatsApp Order Support</span>
          </a>
          <a href="https://instagram.com/kickinbanana_11" target="_blank" rel="noopener noreferrer" className="social-link">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
            <span>@kickinbanana_11</span>
          </a>
          <a href="mailto:kickinbanana@gmail.com" className="social-link">
            <Send size={18} />
            <span>kickinbanana@gmail.com</span>
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} KICKINBANANA. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
