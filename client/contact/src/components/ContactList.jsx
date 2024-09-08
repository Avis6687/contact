import React, { useEffect, useState } from "react";

const ContactList = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    getData();
  }, []);

  //Getting the data from the server

  const getData = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_SERVERURL}/contact`,
        {
          method: "GET",
        }
      );
      const json = await response.json();
      console.log(json);
      if (response.status === 200) {
        setData(json.data);
      }
    } catch (err) {
      console.error(err);
    }
  };

  //Delete the user data from the list when delete button is pressed

  const deleteItem = async (id) => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_SERVERURL}/contact/${id}`,
        {
          method: "DELETE",
        }
      );
      if (response.status === 200) {
        getData();
      }
    } catch (err) {
      console.error(err);
    }
  };

  //Verifying the contact once the button is clicked

  const verifyContact = async (id) => {
    console.log(id);
    try {
      const response = await fetch(
        `${import.meta.env.VITE_SERVERURL}/contact/verify/${id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
        }
      );
      if (response.status === 200) {
        getData();
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      {data &&
        data.map((item, index) => (
          <div style={{ display: "flex", gap: 10 }}>
            <div>{item.first_name}</div>
            <div>{item.last_name}</div>
            <div>{item.user_email}</div>
            <div>{item.phone_no}</div>
            <div>{item.note}</div>
            <button
              onClick={() => verifyContact(item.id)}
              disabled={item.is_verified}>
              Mark as Verified
            </button>
            <button onClick={() => deleteItem(item.id)}>DELETE</button>
          </div>
        ))}
    </div>
  );
};

export default ContactList;
