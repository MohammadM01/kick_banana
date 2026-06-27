import React, { useState, useEffect } from 'react';
import { ArrowRight, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import JerseyCard from '../Common/JerseyCard';
import productsData from '../../data/products.json';
import './FeaturedProducts.css';

const FeaturedProducts = () => {
  const [bestsellers, setBestsellers] = useState([]);

  useEffect(() => {
    // Filter bestsellers or just slice first 4
    setBestsellers(productsData.filter(p => p.badge === 'Bestseller' || p.badge === 'New').slice(0, 4));
  }, []);

  return (
    <section className="featured-products">
      <div className="container">
        <div className="section-header">
          <div className="section-title-row">
            <Zap className="section-title-icon" size={24} />
            <h2>Trending Jersey Releases</h2>
          </div>
          <p>Hand-picked designs flying off our shelves this week.</p>
        </div>
        <div className="products-grid fade-in">
          {bestsellers.map(product => (
            <JerseyCard key={product.id} product={product} />
          ))}
        </div>
        <div className="featured-actions">
          <Link to="/collections" className="btn-secondary">
            <span>Explore Full Catalog</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
