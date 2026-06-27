import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';

const slides = [
  {
    id: 1,
    image: '/images/hero_slide_1.png',
    badge: '⚡ NEW DROPS',
    title: 'THE TUNNEL',
    highlight: 'COLLECTION',
    subtitle: 'Where legends are born.',
  },
  {
    id: 2,
    image: '/images/hero_slide_2.png',
    badge: '🔥 PREMIUM TIER',
    title: 'LOCKER ROOM',
    highlight: 'EDITION',
    subtitle: 'Step into the spotlight.',
  },
  {
    id: 3,
    image: '/images/hero_slide_3.png',
    badge: '⭐ EXCLUSIVE',
    title: 'STREET x',
    highlight: 'PITCH',
    subtitle: 'Style that transcends the game.',
  }
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-advance slides
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="hero-cinematic">
      {/* Background Slides */}
      {slides.map((slide, index) => (
        <div 
          key={slide.id} 
          className={`hero-slide ${index === currentSlide ? 'active' : ''}`}
        >
          <div 
            className="hero-slide-bg"
            style={{ backgroundImage: `url(${slide.image})` }}
          />
          {/* Overlay gradient for text readability */}
          <div className="hero-overlay" />
        </div>
      ))}

      {/* Content overlay */}
      <div className="hero-content-wrapper">
        <div className="container hero-content-inner">
          <div className="hero-text-block">
            {/* We map over slides again just for the text to animate in properly on change */}
            {slides.map((slide, index) => (
              <div 
                key={`text-${slide.id}`} 
                className={`hero-text-content ${index === currentSlide ? 'active' : ''}`}
              >
                <span className="hero-badge">{slide.badge}</span>
                <h1>
                  {slide.title}<br />
                  <span className="highlight">{slide.highlight}</span>
                </h1>
                <p className="hero-subtitle">{slide.subtitle}</p>
                <p className="hero-description">
                  Uncompromised quality. Perfect fit. Your premium destination for dry-fit replica football and cricket jerseys.
                </p>
              </div>
            ))}

            <div className="hero-cta">
              <Link to="/collections" className="btn-primary hero-btn-primary">
                SHOP COLLECTION
              </Link>
              <Link to="/custom" className="btn-secondary hero-btn-secondary">
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
        </div>
      </div>

      {/* Slider Controls */}
      <div className="hero-controls">
        <div className="hero-dots">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`hero-dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => setCurrentSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
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
