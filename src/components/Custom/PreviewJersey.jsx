import React from 'react';
import './PreviewJersey.css';

const PreviewJersey = ({ jerseyColor, stripeColor, printName, printNumber, stripeStyle }) => {
  return (
    <div className="preview-jersey-card float">
      <div className="jersey-canvas">
        <svg className="custom-jersey-svg" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Jersey Main Body */}
          <path
            d="M20 30 L35 15 L45 22 L55 22 L65 15 L80 30 L72 40 L68 36 L68 85 L32 85 L32 36 L28 40 Z"
            fill={jerseyColor}
            stroke="var(--primary)"
            strokeWidth="2.5"
            strokeLinejoin="round"
          />
          
          {/* Stripes style */}
          {stripeStyle === 'vertical' && (
            <>
              <line x1="42" y1="22" x2="42" y2="85" stroke={stripeColor} strokeWidth="3" />
              <line x1="50" y1="22" x2="50" y2="85" stroke={stripeColor} strokeWidth="3" />
              <line x1="58" y1="22" x2="58" y2="85" stroke={stripeColor} strokeWidth="3" />
            </>
          )}

          {stripeStyle === 'horizontal' && (
            <>
              <line x1="32" y1="45" x2="68" y2="45" stroke={stripeColor} strokeWidth="4" />
              <line x1="32" y1="58" x2="68" y2="58" stroke={stripeColor} strokeWidth="4" />
              <line x1="32" y1="70" x2="68" y2="70" stroke={stripeColor} strokeWidth="4" />
            </>
          )}

          {stripeStyle === 'hoop' && (
            <path
              d="M32 50 L68 50 L68 62 L32 62 Z"
              fill={stripeColor}
              stroke="var(--primary)"
              strokeWidth="1.5"
            />
          )}

          {/* Sleeves */}
          <path d="M20 30 L28 40" stroke="var(--primary)" strokeWidth="2" />
          <path d="M80 30 L72 40" stroke="var(--primary)" strokeWidth="2" />

          {/* Collar */}
          <path d="M45 22 C45 25, 55 25, 55 22" fill="none" stroke="var(--primary)" strokeWidth="2.5" />

          {/* Player Number */}
          {printNumber && (
            <text
              x="50"
              y="58"
              fill={stripeColor}
              fontSize="16"
              fontWeight="900"
              textAnchor="middle"
              fontFamily="Impact, Arial Black, sans-serif"
            >
              {printNumber}
            </text>
          )}

          {/* Player Name */}
          {printName && (
            <text
              x="50"
              y="38"
              fill={stripeColor}
              fontSize="6"
              fontWeight="800"
              textAnchor="middle"
              fontFamily="sans-serif"
              letterSpacing="0.5"
            >
              {printName.toUpperCase()}
            </text>
          )}
        </svg>
      </div>
      <div className="jersey-canvas-details">
        <span className="live-preview-badge">Live Custom Preview</span>
      </div>
    </div>
  );
};

export default PreviewJersey;
