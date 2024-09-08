import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const navigate = useNavigate();

  const [data, setData] = useState({
    first_name: "",
    last_name: "",
    user_email: "",
    phone_no: "",
    note: "",
  });

  // uploading the data from the form on the database

  const postData = async (e) => {
    e.preventDefault();
    console.log("submit");
    try {
      const response = await fetch(
        `${import.meta.env.VITE_SERVERURL}/contact`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        }
      );

      if (response.ok) {
        const responseData = await response.json();
        console.log({ responseData });
        console.log("worked");
        navigate("/ThankYou");
      } else {
        console.error("Server responded with an error:", response.status);
      }
    } catch (err) {
      console.error("An error occurred:", err);
    }
  };

  const handleChange = (e) => {
    console.log("changing", e);
    const { name, value } = e.target;

    setData((data) => ({
      ...data,
      [name]: value,
    }));
  };

  return (
    <div>
      <h4>Got a question?we'd love to hear from you.</h4>
      <form>
        <input
          required
          name="first_name"
          value={data.name}
          placeholder="First Name"
          onChange={handleChange}
        />
        <input
          required
          name="last_name"
          type="text"
          value={data.name}
          placeholder="Last Name"
          onChange={handleChange}
        />
        <input
          required
          name="user_email"
          type="email"
          value={data.name}
          placeholder="Email address"
          onChange={handleChange}
        />
        <input
          required
          type="tel"
          name="phone_no"
          minLength="10"
          maxLength="13"
          value={data.name}
          placeholder="Phone Number"
          onChange={handleChange}
        />
        <input
          required
          name="note"
          value={data.name}
          placeholder="Info/Note"
          onChange={handleChange}
        />
        <input onClick={postData} type="submit" />
      </form>
    </div>
  );
};

export default Form;
