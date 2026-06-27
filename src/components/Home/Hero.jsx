import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import CanvasParticles from '../Common/CanvasParticles';
import { useParallax } from '../../hooks/useParallax';
import './Hero.css';

const Hero = () => {
  const imgRef = useParallax(0.12);
  const orbRef = useParallax(0.06, true);

  // Text stagger on mount
  const textRef = useRef(null);
  useEffect(() => {
    const els = textRef.current?.querySelectorAll('[data-stagger]') || [];
    els.forEach((el, i) => {
      setTimeout(() => el.classList.add('stagger-in'), i * 120 + 200);
    });
  }, []);

  return (
    <section className="hero">
      {/* Canvas particle background */}
      <CanvasParticles />

      {/* Ambient glow orbs */}
      <div className="hero-orb hero-orb--1" ref={orbRef} />
      <div className="hero-orb hero-orb--2" />
      <div className="hero-orb hero-orb--3" />

      <div className="container hero-content" ref={textRef}>
        {/* Text side */}
        <div className="hero-text">
          <span className="hero-badge" data-stagger>⚡ PREMIUM JERSEYS</span>

          <h1 data-stagger>
            KICKIN<br />
            <span className="highlight">BANANA</span>
          </h1>

          <p className="hero-subtitle" data-stagger>
            Uncompromised Quality. Perfect Fit.
          </p>

          <p className="hero-description" data-stagger>
            Your premium destination for dry-fit replica football and cricket jerseys.
            Custom name &amp; number styling details tailored to match official player standards.
          </p>

          <div className="hero-cta" data-stagger>
            <Link to="/collections" className="btn-primary hero-btn-primary">
              SHOP COLLECTION
            </Link>
            <Link to="/custom" className="btn-secondary">
              CUSTOM JERSEY
            </Link>
          </div>

          <div className="hero-stats" data-stagger>
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

        {/* Image side */}
        <div className="hero-image">
          <div className="hero-image-wrapper" ref={imgRef}>
            {/* Glowing ring behind the image */}
            <div className="hero-img-glow" />
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

      {/* Scroll indicator */}
      <div className="hero-scroll-indicator">
        <div className="scroll-mouse">
          <div className="scroll-dot" />
        </div>
        <span>SCROLL</span>
      </div>
    </section>
  );
};

export default Hero;
