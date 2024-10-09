// CallToAction.jsx
import React from 'react';
import whatsappIcon from '../../public/whatsapp.svg';

export function CallToAction() {
    const handleClick = () => {
      window.location.href = 'https://www.apple.com';
    };
  
    return (
      <div className="cta">
        <h2>Want to try it out?</h2>
        <button
          className="btn-link"
          id="ios-button"
          onClick={handleClick}
        >
          <img src={whatsappIcon} alt="WhatsApp" className="btn-logo" />
          <span>Join for WhatsApp</span>
        </button>
      </div>
    );
  }
