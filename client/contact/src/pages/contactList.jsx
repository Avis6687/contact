import React from "react";
import ContactList from "../components/ContactList";
import { useEffect } from "react";

const contactList = () => {
  return (
    <div>
      <h1>Contact list</h1>
      <ContactList />
    </div>
  );
};

export default contactList;
