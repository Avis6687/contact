import React from "react";
import ContactDetails from "../../Components/ContactDetail";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";

const ContactUsPage = () => {
  return (
    <div>
      <Header />
      <div className="contact-us-page">
        <ContactDetails />
      </div>
      <Footer />
    </div>
  );
};

export default ContactUsPage;
