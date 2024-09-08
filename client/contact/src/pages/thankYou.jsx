import React from "react";
import { Link } from "react-router-dom";

const ThankYou = () => {
  return (
    <div className="thank-you-container">
      <h2>Thank you for Contacting Open Agent</h2>
      <p>We will get back to you as soon as possible</p>
      <button className="back-button">
        <Link to="/contactUs">Back to Contact Page</Link>
      </button>
    </div>
  );
};

export default ThankYou;
