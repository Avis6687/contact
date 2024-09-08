import React, { useEffect, useState, useCallback } from "react";

const ContactList = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getData = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`${import.meta.env.VITE_SERVERURL}/contact`);
      const json = await response.json();
      if (response.ok) {
        setData(json.data);
      } else {
        setError(`Error: ${response.statusText}`);
      }
    } catch (err) {
      setError(`Error: ${err.message}`);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    getData();
    const intervalId = setInterval(getData, 30000);
    return () => clearInterval(intervalId);
  }, [getData]);

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this contact?")) {
      setLoading(true); // Optional: show loading state during delete
      try {
        const response = await fetch(
          `${import.meta.env.VITE_SERVERURL}/contact/${id}`,
          {
            method: "DELETE",
          }
        );
        if (response.ok) {
          setData((prevData) =>
            prevData.filter((contact) => contact.id !== id)
          );
        } else {
          setError(`Error deleting contact: ${response.statusText}`);
        }
      } catch (err) {
        setError(`Error: ${err.message}`);
      } finally {
        setLoading(false);
      }
    }
  };

  const handleVerify = async (id) => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_SERVERURL}/contact/verify/${id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
        }
      );
      if (response.ok) {
        setData((prevData) =>
          prevData.map((contact) =>
            contact.id === id ? { ...contact, is_verified: true } : contact
          )
        );
      } else {
        setError(`Error verifying contact: ${response.statusText}`);
      }
    } catch (err) {
      setError(`Error: ${err.message}`);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

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
            <tr key={item.id}>
              <td>{item.first_name}</td>
              <td>{item.last_name}</td>
              <td>{item.user_email}</td>
              <td>{item.phone_no}</td>
              <td>{item.note}</td>
              <td>
                <button
                  className="verify-button"
                  onClick={() => handleVerify(item.id)}
                  disabled={item.is_verified || loading}>
                  {item.is_verified ? "Verified" : "Mark as Verified"}
                </button>
                <button
                  className="delete-button"
                  onClick={() => handleDelete(item.id)}
                  disabled={loading}>
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
