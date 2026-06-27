import React from 'react';
import Hero from '../components/Home/Hero';
import FeaturedProducts from '../components/Home/FeaturedProducts';
import WhyChooseUs from '../components/Home/WhyChooseUs';

const Home = () => {
  return (
    <div className="home-page fade-in">
      <Hero />
      <FeaturedProducts />
      <WhyChooseUs />
    </div>
  );
};

export default Home;
