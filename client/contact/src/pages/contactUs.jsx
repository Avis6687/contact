import React from "react";
import Form from "../components/Form"; // Ensure the path is correct

const ContactUs = () => {
  return (
    <div className="contact-us">
      <div className="contact-info">
        <h2>
          Welcome to OpenAgent. We've been around since 2013, and our vision is
          to make it easy for people to buy, sell, and own property.
        </h2>
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
            <h3>Contact Centre Hours of Operation</h3>
            <p>Monday - Friday 8:30 AM - 5:00 PM</p>
          </div>
          <Form />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
