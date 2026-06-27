import React from 'react';
import { ShieldCheck, BadgePercent, Truck, Award } from 'lucide-react';
import './WhyChooseUs.css';

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: <Award size={32} className="why-icon-svg" />,
      title: 'Authentic Premium Quality',
      description: 'Engineered with double-knit dry-fit mesh fabrics, detailed embroidered club badges, and professional vinyl lettering that won\'t fade.'
    },
    {
      icon: <BadgePercent size={32} className="why-icon-svg" />,
      title: 'Direct Manufacturer Pricing',
      description: 'We cut the intermediate supplier charges so you receive premium fit, authentic replica jerseys at a fraction of standard retail cost.'
    },
    {
      icon: <Truck size={32} className="why-icon-svg" />,
      title: 'Reliable Pan-India Delivery',
      description: 'Fully tracked shipping right to your doorstep within 5-7 business days, backed by our instant WhatsApp tracking support.'
    },
    {
      icon: <ShieldCheck size={32} className="why-icon-svg" />,
      title: 'Hassle-Free Sizing Exchanges',
      description: 'Unsure about the fit? Standard jersey size exchanges within 7 days ensure you can hit the pitch with complete confidence.'
    }
  ];

  return (
    <section className="why-choose-us">
      <div className="container">
        <div className="section-header">
          <h2>The KickinBanana Advantage</h2>
          <p>We combine sports passion with premium apparel crafting standards.</p>
        </div>
        <div className="why-grid">
          {reasons.map((reason, idx) => (
            <div key={idx} className="why-card">
              <div className="why-icon-container">
                {reason.icon}
              </div>
              <h3>{reason.title}</h3>
              <p>{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
