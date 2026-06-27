import React, { useState } from 'react';
import PreviewJersey from '../components/Custom/PreviewJersey';
import CustomForm from '../components/Custom/CustomForm';

const Custom = () => {
  const [jerseyColor, setJerseyColor] = useState('#3B4E63');
  const [stripeColor, setStripeColor] = useState('#FFD23F');
  const [printName, setPrintName] = useState('BANANA');
  const [printNumber, setPrintNumber] = useState('11');
  const [stripeStyle, setStripeStyle] = useState('vertical');
  const [size, setSize] = useState('L');

  return (
    <div className="custom-page container fade-in" style={{ paddingBottom: '80px', paddingTop: '40px' }}>
      <div className="section-header" style={{ marginBottom: '40px' }}>
        <h2>Custom Jersey Builder</h2>
        <p>Design your dream kit. Choose colors, add your name, and send details directly to our WhatsApp to order.</p>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '40px',
        alignItems: 'start'
      }} className="custom-page-grid">
        <PreviewJersey
          jerseyColor={jerseyColor}
          stripeColor={stripeColor}
          printName={printName}
          printNumber={printNumber}
          stripeStyle={stripeStyle}
        />

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
