import React, { useEffect, useState } from "react";

const ContactList = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();

    // Set up polling to refresh data every 30 seconds
    const intervalId = setInterval(getData, 30000);

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  // Fetch the data from the server
  const getData = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_SERVERURL}/contact`,
        {
          method: "GET",
        }
      );
      const json = await response.json();
      if (response.status === 200) {
        setData(json.data);
      }
    } catch (err) {
      console.error(err);
    }
  };

  // Delete the contact from the list when the delete button is pressed
  const deleteContact = async (id) => {
    if (window.confirm("Are you sure you want to delete this contact?")) {
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
    }
  };

  // Verify the contact once the button is clicked
  const verifyContact = async (id) => {
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
    <div className="contact-list-container">
      <table className="contact-table">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Phone No</th>
            <th>Info</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item}>
              <td>{item.first_name}</td>
              <td>{item.last_name}</td>
              <td>{item.user_email}</td>
              <td>{item.phone_no}</td>
              <td>{item.note}</td>
              <td>
                <button
                  className="verify-button"
                  onClick={() => verifyContact(item.id)}
                  disabled={item.is_verified}>
                  Mark as Verified
                </button>
                <button
                  className="delete-button"
                  onClick={() => deleteContact(item.id)}>
                  DELETE
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ContactList;
