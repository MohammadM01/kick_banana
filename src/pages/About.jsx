import React from 'react';
import BrandStory from '../components/About/BrandStory';
import Testimonials from '../components/About/Testimonials';
import { useScrollReveal } from '../hooks/useScrollReveal';

const About = () => {
  const revealRef = useScrollReveal();

  return (
    <div className="about-page container" style={{ paddingBottom: '80px', paddingTop: '40px' }} ref={revealRef}>
      <div className="section-header" style={{ marginBottom: '50px' }} data-reveal>
        <h2>About KICKINBANANA</h2>
        <p>Your ultimate destination for premium replica sports apparel and custom team gears.</p>
      </div>

      <div data-reveal data-reveal-delay="100">
        <BrandStory />
      </div>
      
      <div data-reveal data-reveal-delay="200">
        <Testimonials />
      </div>
    </div>
  );
};

export default About;
