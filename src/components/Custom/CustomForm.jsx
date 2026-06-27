import React from 'react';
import { MessageSquare } from 'lucide-react';
import './CustomForm.jsx'; // self link mapping
import './CustomForm.css';

const CustomForm = ({
  jerseyColor,
  setJerseyColor,
  stripeColor,
  setStripeColor,
  printName,
  setPrintName,
  printNumber,
  setPrintNumber,
  stripeStyle,
  setStripeStyle,
  size,
  setSize
}) => {
  const handleOrder = (e) => {
    e.preventDefault();
    const formattedMsg = `Hi KickinBanana! I want to order a custom-designed jersey:
- *Base Color*: ${jerseyColor}
- *Stripe/Detail Color*: ${stripeColor}
- *Pattern Style*: ${stripeStyle}
- *Print Name*: ${printName || 'None'}
- *Print Number*: ${printNumber || 'None'}
- *Size*: ${size}
Please let me know how to pay and the estimated timeline!`;

    window.open(`https://wa.me/919876543210?text=${encodeURIComponent(formattedMsg)}`, '_blank');
  };

  const presetColors = [
    { value: '#3B4E63', name: 'Smoky Blue' },
    { value: '#FFD23F', name: 'Banana Yellow' },
    { value: '#E03B3B', name: 'Crimson Red' },
    { value: '#10B981', name: 'Pitch Green' },
    { value: '#111827', name: 'Slate Gray' },
    { value: '#FFFFFF', name: 'Pure White' },
  ];

  return (
    <form className="custom-jersey-form" onSubmit={handleOrder}>
      <h3>Custom Specs</h3>
      
      {/* Base Color presets */}
      <div className="form-group">
        <label>Jersey Base Color</label>
        <div className="color-picker-grid">
          {presetColors.map(col => (
            <button
              key={col.value}
              type="button"
              className={`color-pill-btn ${jerseyColor === col.value ? 'selected' : ''}`}
              style={{ backgroundColor: col.value }}
              onClick={() => setJerseyColor(col.value)}
              title={col.name}
            />
          ))}
        </div>
      </div>

      {/* Stripe Color presets */}
      <div className="form-group">
        <label>Stripes / Text Color</label>
        <div className="color-picker-grid">
          {presetColors.map(col => (
            <button
              key={col.value}
              type="button"
              className={`color-pill-btn ${stripeColor === col.value ? 'selected' : ''}`}
              style={{ backgroundColor: col.value }}
              onClick={() => setStripeColor(col.value)}
              title={col.name}
            />
          ))}
        </div>
      </div>

      {/* Stripe style */}
      <div className="form-group">
        <label>Pattern Style</label>
        <select value={stripeStyle} onChange={(e) => setStripeStyle(e.target.value)} className="custom-select">
          <option value="none">Plain / Solid</option>
          <option value="vertical">Vertical Stripes</option>
          <option value="horizontal">Horizontal Stripes</option>
          <option value="hoop">Center Chest Band</option>
        </select>
      </div>

      {/* Custom text fields */}
      <div className="form-row">
        <div className="form-group half">
          <label>Print Name</label>
          <input
            type="text"
            placeholder="e.g. RONALDO"
            value={printName}
            onChange={(e) => setPrintName(e.target.value)}
            maxLength={12}
            className="custom-input"
          />
        </div>
        <div className="form-group half">
          <label>Print Number</label>
          <input
            type="text"
            placeholder="e.g. 7"
            value={printNumber}
            onChange={(e) => setPrintNumber(e.target.value)}
            maxLength={3}
            className="custom-input"
          />
        </div>
      </div>

      {/* Sizing dropdown */}
      <div className="form-group">
        <label>Select Size</label>
        <select value={size} onChange={(e) => setSize(e.target.value)} className="custom-select">
          <option value="S">S (Chest 38")</option>
          <option value="M">M (Chest 40")</option>
          <option value="L">L (Chest 42")</option>
          <option value="XL">XL (Chest 44")</option>
          <option value="XXL">XXL (Chest 46")</option>
        </select>
      </div>

      <button type="submit" className="btn-primary submit-order-btn">
        <MessageSquare size={18} />
        <span>Order Custom via WhatsApp</span>
      </button>
    </form>
  );
};

export default CustomForm;
