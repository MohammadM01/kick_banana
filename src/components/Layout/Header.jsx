import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaWhatsapp, FaBars, FaTimes } from 'react-icons/fa';
import ThemeToggle from './ThemeToggle';
import './Header.css';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/collections', label: 'Collections' },
    { path: '/custom', label: 'Custom Jersey' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container header-content">
        {/* Logo */}
        <Link to="/" className="logo">
          <img src="/images/logo.png" alt="KICKINBANANA Logo" className="logo-img" />
          <span className="logo-text">KICKIN<span className="highlight">BANANA</span></span>
        </Link>

        {/* Desktop Nav */}
        <nav className={`nav ${mobileMenuOpen ? 'open' : ''}`}>
          {navLinks.map(link => (
            <Link
              key={link.path}
              to={link.path}
              className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="https://wa.me/919373874400?text=Hi%20KICKINBANANA!%20I%20want%20to%20enquire%20about%20jerseys."
            target="_blank"
            rel="noopener noreferrer"
            className="nav-whatsapp-link"
            onClick={() => setMobileMenuOpen(false)}
          >
            <FaWhatsapp /> WHATSAPP
          </a>
        </nav>

        {/* Header Actions */}
        <div className="header-actions">
          <ThemeToggle />
          <button
            className="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(prev => !prev)}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu overlay */}
      {mobileMenuOpen && (
        <div className="mobile-overlay" onClick={() => setMobileMenuOpen(false)} />
      )}
    </header>
  );
};

export default Header;
