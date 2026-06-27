import React from 'react';
import './MarqueeTicker.css';

const items = [
  '⚽ Football Jerseys',
  '🏏 Cricket Jerseys',
  '🌍 Global Club Replicas',
  '⚡ Dry-Fit Technology',
  '✍️ Custom Name & Number',
  '🚀 Pan-India Delivery',
  '🏆 Siam Grade Quality',
  '💬 WhatsApp Support',
];

const MarqueeTicker = () => {
  const doubled = [...items, ...items];

  return (
    <div className="marquee-root" aria-hidden="true">
      <div className="marquee-track">
        {doubled.map((item, i) => (
          <span key={i} className="marquee-item">
            {item}
            <span className="marquee-dot">•</span>
          </span>
        ))}
      </div>
    </div>
  );
};

export default MarqueeTicker;
