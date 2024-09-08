import React from "react";
import ContactList from "../components/ContactList";
import { useEffect } from "react";

const contactList = () => {
  return (
    <div>
      <h2>Contact list</h2>
      <ContactList />
    </div>
  );
};

export default contactList;
