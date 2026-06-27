import React, { useState } from 'react';
import PreviewJersey from '../components/Custom/PreviewJersey';
import CustomForm from '../components/Custom/CustomForm';
import { useScrollReveal } from '../hooks/useScrollReveal';

const Custom = () => {
  const [jerseyColor, setJerseyColor] = useState('#3B4E63');
  const [stripeColor, setStripeColor] = useState('#FFD23F');
  const [printName, setPrintName] = useState('BANANA');
  const [printNumber, setPrintNumber] = useState('11');
  const [stripeStyle, setStripeStyle] = useState('vertical');
  const [size, setSize] = useState('L');
  const revealRef = useScrollReveal();

  return (
    <div className="custom-page container" style={{ paddingBottom: '80px', paddingTop: '40px' }} ref={revealRef}>
      <div className="section-header" style={{ marginBottom: '40px' }} data-reveal>
        <h2>Custom Jersey Builder</h2>
        <p>Design your dream jersey. Choose colors, add your name, and send details directly to our WhatsApp to order.</p>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '40px',
        alignItems: 'start'
      }} className="custom-page-grid">
        <div data-reveal="left" data-reveal-delay="100">
          <PreviewJersey
            jerseyColor={jerseyColor}
            stripeColor={stripeColor}
            printName={printName}
            printNumber={printNumber}
            stripeStyle={stripeStyle}
          />
        </div>

        <div data-reveal="right" data-reveal-delay="200">
          <CustomForm
            jerseyColor={jerseyColor}
            setJerseyColor={setJerseyColor}
            stripeColor={stripeColor}
            setStripeColor={setStripeColor}
            printName={printName}
            setPrintName={setPrintName}
            printNumber={printNumber}
            setPrintNumber={setPrintNumber}
            stripeStyle={stripeStyle}
            setStripeStyle={setStripeStyle}
            size={size}
            setSize={setSize}
          />
        </div>
      </div>

      {/* Responsive layout adjust styling helper */}
      <style>{`
        @media (max-width: 768px) {
          .custom-page-grid {
            grid-template-columns: 1fr !important;
            gap: 30px !important;
          }
        }
      `}</style>
    </div>
  );
};

export default Custom;
