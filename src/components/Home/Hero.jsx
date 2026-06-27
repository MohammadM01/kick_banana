import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container hero-content">
        <div className="hero-text fade-in-up">
          <span className="hero-badge">⚡ PREMIUM REPLICA KITS</span>
          <h1>
            KICKIN<br />
            <span className="highlight">BANANA</span>
          </h1>
          <p className="hero-subtitle">
            Uncompromised Quality. Perfect Fit.
          </p>
          <p className="hero-description">
            Your premium destination for dry-fit replica football and cricket jerseys. Custom name & number styling details tailored to match official player standards.
          </p>
          <div className="hero-cta">
            <Link to="/collections" className="btn-primary">
              SHOP COLLECTION
            </Link>
            <Link to="/custom" className="btn-secondary">
              CUSTOM JERSEY
            </Link>
          </div>
          <div className="hero-stats">
            <div className="stat">
              <span className="stat-number">10k+</span>
              <span className="stat-label">Happy Customers</span>
            </div>
            <div className="stat-divider" />
            <div className="stat">
              <span className="stat-number">Premium</span>
              <span className="stat-label">Siam Version Fit</span>
            </div>
            <div className="stat-divider" />
            <div className="stat">
              <span className="stat-number">Pan-India</span>
              <span className="stat-label">Fast Delivery</span>
            </div>
          </div>
        </div>

        <div className="hero-image scale-in">
          <div className="hero-image-wrapper">
            <img
              src="/images/real_madrid.png"
              alt="Premium Soccer Jersey Model"
              className="hero-img"
            />
            <div className="hero-image-badge">
              <span>Siam High-Grade Replica</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
