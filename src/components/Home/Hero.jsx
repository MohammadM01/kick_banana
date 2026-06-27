import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container hero-content">
        <div className="hero-text fade-in-up">
          <span className="hero-badge">🔥 New Arrivals</span>
          <h1>
            Premium Cricket & <br />
            <span className="highlight">Football Kits</span>
          </h1>
          <p className="hero-subtitle">
            Bringing you the finest jerseys at affordable prices
          </p>
          <p className="hero-description">
            High Quality • Great Fit • Affordable – Your one-stop jersey hub for
            cricket and football fans across India.
          </p>
          <div className="hero-cta">
            <Link to="/collections" className="btn-primary">
              Browse Collections →
            </Link>
            <Link to="/custom" className="btn-secondary">
              Custom Order
            </Link>
          </div>
          <div className="hero-stats">
            <div className="stat">
              <span className="stat-number">50+</span>
              <span className="stat-label">Jerseys Sold</span>
            </div>
            <div className="stat-divider" />
            <div className="stat">
              <span className="stat-number">100%</span>
              <span className="stat-label">Customer Satisfaction</span>
            </div>
            <div className="stat-divider" />
            <div className="stat">
              <span className="stat-number">5-7</span>
              <span className="stat-label">Days Delivery</span>
            </div>
          </div>
        </div>

        <div className="hero-image scale-in">
          <div className="hero-image-wrapper">
            <img
              src="/images/real_madrid.png"
              alt="Premium Cricket and Football Jerseys"
              className="hero-img"
            />
            <div className="hero-image-badge">
              <span>Quality Guaranteed</span>
            </div>
            <div className="floating-badge top-right">
              <span>⭐ 4.9/5</span>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-bg-shapes">
        <div className="shape shape-1" />
        <div className="shape shape-2" />
        <div className="shape shape-3" />
      </div>
    </section>
  );
};

export default Hero;
