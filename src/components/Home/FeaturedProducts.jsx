import React from 'react';
import { ArrowRight, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import JerseyCard from '../Common/JerseyCard';
import productsData from '../../data/products.json';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import './FeaturedProducts.css';

// Load synchronously — data is local JSON, no async needed
const bestsellers = productsData
  .filter(p => p.badge === 'Bestseller' || p.badge === 'New')
  .slice(0, 4);

const FeaturedProducts = () => {
  const sectionRef = useScrollReveal(0.05);

  return (
    <section className="featured-products" ref={sectionRef}>
      <div className="container">
        <div className="section-header" data-reveal>
          <div className="section-title-row">
            <Zap className="section-title-icon" size={24} />
            <h2>Trending Jersey Releases</h2>
          </div>
          <p>Hand-picked designs flying off our shelves this week.</p>
        </div>

        <div className="products-grid">
          {bestsellers.map((product, idx) => (
            <div
              key={product.id}
              className="card-reveal-wrapper"
              data-reveal
              data-reveal-delay={String(idx * 90)}
            >
              <JerseyCard product={product} />
            </div>
          ))}
        </div>

        <div className="featured-actions" data-reveal data-reveal-delay="400">
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
