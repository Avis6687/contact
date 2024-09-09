import React, { useEffect } from "react";
import ContactList from "../../Components/ContactList";

const ContactListPage = () => {
  useEffect(() => {
    // Any additional side-effects or cleanup logic here
  }, []);

  return (
    <div className="contact-list">
      <h2>Contact List</h2>
      <ContactList />
    </div>
  );
};

export default ContactListPage;
