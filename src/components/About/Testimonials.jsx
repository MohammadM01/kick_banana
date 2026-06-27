import React from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import './Testimonials.css';

const Testimonials = () => {
  const ref = useScrollReveal(0.1);

  const reviews = [
    {
      name: "Rohit Sharma",
      role: "FC Bengaluru Fan Club Lead",
      comment: "Absolutely top notch prints. Ordered 25 custom home jerseys for our local tournament. The fit is premium, fabric is lightweight dry-fit. Exceptional value!",
      rating: "⭐⭐⭐⭐⭐"
    },
    {
      name: "Aditya Verma",
      role: "Cricket Club Organizer",
      comment: "Highly pleased with the customer support. We asked for dynamic tri-color collar customizations and the preview matched exactly what we received. Highly recommend!",
      rating: "⭐⭐⭐⭐⭐"
    },
    {
      name: "Kabir Sen",
      role: "Active Athlete",
      comment: "Best store in India for football jerseys. Direct WhatsApp support makes the process extremely clean and trustworthy.",
      rating: "⭐⭐⭐⭐⭐"
    }
  ];

  return (
    <div className="testimonials-section" ref={ref}>
      <div className="section-header" data-reveal>
        <h2>Loved By Sports Fans</h2>
        <p>Real feedback from fans, captains, and club leads across the nation.</p>
      </div>
      <div className="testimonials-grid">
        {reviews.map((rev, idx) => (
          <div
            key={idx}
            className="testimonial-card"
            data-reveal
            data-reveal-delay={idx * 120}
          >
            <div className="rating-row">{rev.rating}</div>
            <p className="testimonial-comment">"{rev.comment}"</p>
            <div className="testimonial-profile">
              <div className="profile-initials">
                {rev.name.split(' ').map(n => n[0]).join('')}
              </div>
              <div className="profile-info">
                <h4>{rev.name}</h4>
                <p>{rev.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
