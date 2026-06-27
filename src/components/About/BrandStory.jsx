import React from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import './BrandStory.css';

const BrandStory = () => {
  const ref = useScrollReveal();

  return (
    <div className="brand-story-section" ref={ref}>
      <div className="brand-story-grid">
        <div className="brand-story-text" data-reveal="left">
          <span className="story-badge">Established 2024</span>
          <h2>Crafted for the Real Fan</h2>
          <p>
            KICKINBANANA started with a simple belief: football and cricket jerseys shouldn't cost a fortune to be premium. As die-hard sports enthusiasts ourselves, we noticed the market was filled with overpriced, generic kits that lose their shine after a few matches.
          </p>
          <p>
            We set out to change the game by working directly with specialized manufacturers, ensuring every thread, patch, and custom vinyl lettering meets standard matchday quality. Today, we supply custom-built soccer jerseys and cricket gear to local clubs, fans, and athletes across India.
          </p>
        </div>
        <div className="brand-story-graphic" data-reveal="right" data-reveal-delay="150">
          <div className="story-visual-card">
            <svg viewBox="0 0 120 120" fill="none" className="story-svg">
              <rect x="10" y="10" width="100" height="100" rx="20" fill="var(--bg-primary)" stroke="var(--border)" strokeWidth="2" />
              <path d="M35 85 L50 35 L70 35 L85 85 Z" fill="var(--primary)" opacity="0.15" />
              <line x1="30" y1="90" x2="90" y2="30" stroke="var(--primary)" strokeWidth="4" strokeLinecap="round" />
              <line x1="35" y1="90" x2="85" y2="40" stroke="var(--primary-light)" strokeWidth="2" strokeLinecap="round" />
              <circle cx="75" cy="45" r="10" fill="var(--primary)" />
              <circle cx="75" cy="45" r="7" fill="var(--bg-secondary)" />
            </svg>
            <div className="story-stat">
              <span className="stat-num">10k+</span>
              <span className="stat-lbl">Jerseys Shipped</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandStory;
