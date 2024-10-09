// CallToAction.jsx
import React from 'react';
import whatsappIcon from '../../public/whatsapp.svg';

export function CallToAction() {
    const handleClick = () => {
      
      const phoneNumber = window.prompt('Please enter a phone number to be used for notifications for WhatsApp');
  
      
      
      if (phoneNumber.length != 10) {

        window.alert(`Thank you! We will notify you at ${phoneNumber} when Spark! BookPals is ready for WhatsApp`);
      } else {

        window.alert("You didn't enter a valid 10 digit number. Please try again if you wish to be notified.");
      }
    };
  
    return (
      <div className="cta">
        <h2>Want to try it out?</h2>
        <button
          className="btn-link"
          id="ios-button"
          onClick={handleClick}
          style={{ display: 'flex', alignItems: 'center' }}
        >
          <img src={whatsappIcon} alt="whatsapp" className="btn-logo" />
          <span>Join for WhatsApp</span>
        </button>
      </div>
    );
  }
