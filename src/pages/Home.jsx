import React, { useState } from 'react';
import { CallToAction } from '../components/CallToAction'; 
import { Link } from 'react-router-dom'; 

export function Home() {
  const [phoneNumbers, setPhoneNumbers] = useState([]);
  const [phone, setPhone] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  // Validate the phone number
  const validatePhoneNumber = (phone) => {
    if (phone.length !== 10) {
      return { isValid: false, message: 'Please enter a valid 10-digit phone number' };
    }
    return { isValid: true }; 
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload
    const validation = validatePhoneNumber(phone);
    if (!validation.isValid) {
      setErrorMessage(validation.message);
      return; // Stop further processing if validation fails
    }

    setErrorMessage('');
 
    setPhoneNumbers([...phoneNumbers, phone]);
    setPhone(''); // Clear the input field
  };

  return (
    <div>
      <div className="content">
        <p>Spark! Bookpals is a revolutionary platform for Boston University's community. Bu students and affilicates can connect through foor and engage in in-depth discussions, and more! Our unique features allow users to filter books based on genres and complexity. among other things. Stay up-to-date through SMS and Whatsapp notifications whenever a book you be interested in is discussed!
        </p>
        <h2>Sign up</h2>
        <h5>Signup for Notifications</h5>
        <form id="signup-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Enter your phone number"
            />
            <button type="submit">Sign Up</button>
          </div>
        </form>
        {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
        <h2>Numbers that have signed up</h2>
        <ul>
          {phoneNumbers.map((num, index) => (
            <li key={index}>{num}</li>
          ))}
        </ul>
      </div>
      <CallToAction /> {/* CallToAction component will remain here */}
    </div>
  );
}
