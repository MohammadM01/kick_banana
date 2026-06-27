import React from 'react';
import { Link } from 'react-router-dom';
import { FaWhatsapp, FaInstagram, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const wsUrl = "https://wa.me/919373874400?text=Hi%20KICKINBANANA!%20I%20saw%20your%20website%20and%20want%20to%20place%20an%20order.";
  const callUrl = "tel:+919373874400";
  const instaUrl = "https://instagram.com/kickinbanana_11";
  const mailUrl = "mailto:kickinbanana@gmail.com";

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="footer-logo-row">
              <img src="/images/logo.png" alt="KICKINBANANA Logo" className="footer-logo-img" />
              <h3>KICKIN<span>BANANA</span></h3>
            </div>
            <p className="footer-desc">Premium dry-fit replica soccer &amp; cricket jerseys. Customized name &amp; number vinyl prints tailored to match professional pitch-wear standards.</p>
            <div className="footer-contact-details">
              <a href={wsUrl} target="_blank" rel="noopener noreferrer" className="contact-item">
                <FaWhatsapp className="contact-icon ws-green" /> +91 9373874400
              </a>
              <a href={callUrl} className="contact-item">
                <FaPhoneAlt className="contact-icon gold" /> Call: +91 9373874400
              </a>
            </div>
          </div>

          <div className="footer-links">
            <h4>SHOP DIRECTORY</h4>
            <Link to="/">Home</Link>
            <Link to="/collections">Replica Jerseys</Link>
            <Link to="/custom">Customization Form</Link>
            <Link to="/about">Brand Story</Link>
          </div>

          <div className="footer-links">
            <h4>SUPPORT & HELP</h4>
            <a href={wsUrl} target="_blank" rel="noopener noreferrer">WhatsApp Support</a>
            <a href={mailUrl}>Email Support</a>
            <span className="reply-time">Instant response within 1 hour</span>
          </div>

          <div className="footer-social">
            <h4>CONNECT WITH US</h4>
            <p className="social-sub">Follow our Instagram catalog for daily updates & product reviews.</p>
            <div className="social-icons">
              <a href={instaUrl} target="_blank" rel="noopener noreferrer" className="social-icon instagram" aria-label="Instagram">
                <FaInstagram />
              </a>
              <a href={wsUrl} target="_blank" rel="noopener noreferrer" className="social-icon whatsapp" aria-label="WhatsApp">
                <FaWhatsapp />
              </a>
              <a href={mailUrl} className="social-icon email" aria-label="Email">
                <FaEnvelope />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} KICKINBANANA. Premium Replica Apparel Co. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
