import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import './JerseyCard.css';

const JerseyCard = ({ product }) => {
  const whatsappMessage = `Hi KickinBanana! I'm highly interested in the *${product.name}* (${product.sport} jersey). Is it available in size L? Let me know pricing and stock detail. Thanks!`;

  return (
    <div className="jersey-card">
      <div className="jersey-card-image">
        {product.image ? (
          <img src={product.image} alt={product.name} loading="lazy" />
        ) : (
          <div className="image-placeholder">
            <span>👕</span>
          </div>
        )}
        {product.badge && (
          <span className={`badge ${product.badge.toLowerCase()}`}>
            {product.badge}
          </span>
        )}
      </div>

      <div className="jersey-card-body">
        <span className="jersey-sport">{product.sport}</span>
        <h3>{product.name}</h3>
        <p className="jersey-description">{product.description}</p>

        <div className="jersey-sizes">
          {product.sizes.map(size => (
            <span key={size} className="size-tag">{size}</span>
          ))}
        </div>

        <div className="jersey-card-footer">
          <span className="jersey-price">{product.price}</span>
          <a
            href={`https://wa.me/919373874400?text=${encodeURIComponent(whatsappMessage)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="enquire-btn"
          >
            <FaWhatsapp size={14} style={{ marginRight: '6px', verticalAlign: 'middle' }} />
            <span>Enquire</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default JerseyCard;
