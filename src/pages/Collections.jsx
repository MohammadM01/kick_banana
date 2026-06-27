import React, { useState } from 'react';
import FilterBar from '../components/Collections/FilterBar';
import ProductGrid from '../components/Collections/ProductGrid';
import productsData from '../data/products.json';

const Collections = () => {
  const [activeSport, setActiveSport] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = productsData.filter(product => {
    const matchesSport = activeSport === 'all' || product.sport === activeSport;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          product.sport.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesSport && matchesSearch;
  });

  return (
    <div className="collections-page container fade-in" style={{ paddingBottom: '80px', paddingTop: '40px' }}>
      <div className="section-header">
        <h2>Jersey Collections</h2>
        <p>Premium dry-fit replica jerseys cataloged for both soccer and cricket teams.</p>
      </div>

      <FilterBar
        activeSport={activeSport}
        setActiveSport={setActiveSport}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />

      <ProductGrid products={filteredProducts} />
    </div>
  );
};

export default Collections;
