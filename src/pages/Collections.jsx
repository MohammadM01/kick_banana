import React, { useState } from 'react';
import FilterBar from '../components/Collections/FilterBar';
import ProductGrid from '../components/Collections/ProductGrid';
import productsData from '../data/products.json';
import { useScrollReveal } from '../hooks/useScrollReveal';

const Collections = () => {
  const [activeSport, setActiveSport] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const revealRef = useScrollReveal();

  const filteredProducts = productsData.filter(product => {
    const matchesSport = activeSport === 'all' || product.sport === activeSport;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          product.sport.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesSport && matchesSearch;
  });

  return (
    <div className="collections-page container" style={{ paddingBottom: '80px', paddingTop: '40px' }} ref={revealRef}>
      <div className="section-header" data-reveal>
        <h2>Jersey Collections</h2>
        <p>Premium dry-fit replica jerseys cataloged for both soccer and cricket teams.</p>
      </div>

      <div data-reveal data-reveal-delay="100">
        <FilterBar
          activeSport={activeSport}
          setActiveSport={setActiveSport}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />
      </div>

      <div data-reveal data-reveal-delay="200">
        <ProductGrid products={filteredProducts} />
      </div>
    </div>
  );
};

export default Collections;
