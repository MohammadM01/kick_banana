import React from 'react';
import Hero from '../components/Home/Hero';
import MarqueeTicker from '../components/Common/MarqueeTicker';
import FeaturedProducts from '../components/Home/FeaturedProducts';
import WhyChooseUs from '../components/Home/WhyChooseUs';

const Home = () => {
  return (
    <div className="home-page">
      <Hero />
      <MarqueeTicker />
      <FeaturedProducts />
      <WhyChooseUs />
    </div>
  );
};

export default Home;
