import React from "react";

const ContactDetails = () => {
  return (
    <div className="contact-info">
      <h2>Welcome to OpenAgent</h2>
      <h3>
        We’ve been around since 2013, making it easy for people to buy, sell,
        and own property.
      </h3>
      <h3>Here are the different ways you can contact us:</h3>
      <div className="contact-details">
        <div>
          <h3>Contact Us Details</h3>
          <p>
            Phone: 13 24 34 <br />
            Email: support@openagent.com.au
          </p>
          <h3>Postal Address:</h3>
          <p>PO Box 419, Alexandria NSW 1435</p>
          <h3>Contact Centre Hours of Operation:</h3>
          <p>Monday - Friday: 8:30 AM - 5:00 PM</p>
        </div>
      </div>
    </div>
  );
};

export default ContactDetails;
