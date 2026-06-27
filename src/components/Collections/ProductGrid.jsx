import React from 'react';
import JerseyCard from '../Common/JerseyCard';
import './ProductGrid.css';

const ProductGrid = ({ products }) => {
  if (products.length === 0) {
    return (
      <div className="no-products-container">
        <p className="no-products-message">No jerseys found matching your selection.</p>
      </div>
    );
  }

  return (
    <div className="product-grid-container fade-in">
      {products.map(product => (
        <JerseyCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductGrid;
