import React from 'react';
import { Send } from 'lucide-react';
import './JerseyCard.css';

const JerseyCard = ({ product }) => {
  const whatsappMessage = `Hi KickinBanana! I'm highly interested in the *${product.name}* (${product.sport} jersey). Is it available in size L? Let me know pricing and stock detail. Thanks!`;

  return (
    <div className="jersey-card">
      <div className="jersey-image-container">
        {/* Custom Hand-Drawn / SVG Vector Jersey representation */}
        {product.image ? (
          <img src={product.image} alt={product.name} className="jersey-product-image" />
        ) : (
          <div className="jersey-vector-placeholder" style={{ '--jersey-color': product.color }}>
            <svg className="jersey-svg" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 30 L35 15 L45 22 L55 22 L65 15 L80 30 L72 40 L68 36 L68 85 L32 85 L32 36 L28 40 Z" fill="var(--jersey-color)" stroke="var(--primary)" strokeWidth="3" strokeLinejoin="round"/>
              <path d="M28 40 L32 36" stroke="var(--primary)" strokeWidth="2"/>
              <path d="M72 40 L68 36" stroke="var(--primary)" strokeWidth="2"/>
              <path d="M45 22 C45 26, 55 26, 55 22" fill="none" stroke="var(--primary)" strokeWidth="3" strokeLinecap="round"/>
              {product.sport === 'football' ? (
                <circle cx="50" cy="45" r="8" fill="#FFF" stroke="var(--primary)" strokeWidth="1.5"/>
              ) : (
                <path d="M46 41 L54 49 M54 41 L46 49" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round"/>
              )}
            </svg>
            <span className="jersey-sport-label">{product.sport.toUpperCase()}</span>
          </div>
        )}
        {product.badge && (
          <span className={`jersey-badge-pill ${product.badge.toLowerCase()}`}>
            {product.badge}
          </span>
        )}
      </div>
      <div className="jersey-info">
        <h3>{product.name}</h3>
        <p className="jersey-desc">{product.description}</p>
        <div className="jersey-sizes">
          {product.sizes.map(size => (
            <span key={size} className="size-pill">{size}</span>
          ))}
        </div>
        <div className="jersey-footer">
          <span className="jersey-price">{product.price}</span>
          <a
            href={`https://wa.me/919876543210?text=${encodeURIComponent(whatsappMessage)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="enquire-now-btn"
          >
            <Send size={14} />
            <span>Enquire</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default JerseyCard;
