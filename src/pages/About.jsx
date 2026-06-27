import React from 'react';
import BrandStory from '../components/About/BrandStory';
import Testimonials from '../components/About/Testimonials';

const About = () => {
  return (
    <div className="about-page container fade-in" style={{ paddingBottom: '80px', paddingTop: '40px' }}>
      <div className="section-header" style={{ marginBottom: '50px' }}>
        <h2>About KICKINBANANA</h2>
        <p>Your ultimate destination for premium replica sports apparel and custom team gears.</p>
      </div>

      <BrandStory />
      <Testimonials />
    </div>
  );
};

export default About;
