import React, { useEffect } from "react";
import ContactList from "../../Components/ContactList";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";

const ContactListPage = () => {
  useEffect(() => {
    // Any additional side-effects or cleanup logic here
  }, []);

  return (
    <div>
      <Header />
      <div className="contact-list">
        <h2>Contact List</h2>
        <ContactList />
      </div>
      <Footer />
    </div>
  );
};

export default ContactListPage;
