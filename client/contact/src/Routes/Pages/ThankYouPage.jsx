import React from "react";
import { Link } from "react-router-dom";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";

const ThankYouPage = () => {
  return (
    <div>
      <Header />
      <div className="thank-you-container">
        <h2>Thank you for Contacting Open Agent</h2>
        <p>We will get back to you as soon as possible</p>
        <button className="back-button">
          <Link to="/contact-us">Back to Contact Page</Link>
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default ThankYouPage;
