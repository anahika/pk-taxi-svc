import React from "react";
import './landing.css'

function Landing() {
  const phoneNumber = 9882648185;
  return (
    <div className="bg d-flex flex-column align-items-center justify-content-center">
      <h1>Welcome to Travel Theoriz</h1>

      <a className="contact-button" href={`tel:${phoneNumber}`}>
        CONTACT US
      </a>
    </div>
  );
}

export default Landing;
