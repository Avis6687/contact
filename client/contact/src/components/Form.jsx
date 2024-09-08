import React from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

const Form = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // uploading the data  on the database

  const onSubmit = async (data) => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_SERVERURL}/contact`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      } else {
        navigate("/ThankYou");
        //Redirecting to Thank you Page
      }

      const result = await response.json();
      console.log("Form submitted successfully:", result);
      // Handle successful submission
    } catch (error) {
      console.error("Error submitting form:", error);
      // Handle submission error
    }
  };

  return (
    <div>
      <h4>Got a question?we'd love to hear from you.</h4>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <input
            placeholder="First Name"
            {...register("first_name", {
              required: "First name is required",
              minLength: {
                value: 2,
                message: "First name must be at least 2 characters long",
              },
              maxLength: {
                value: 50,
                message: "First name must be no more than 50 characters long",
              },
            })}
          />
          {errors.firstname && <p>{errors.first_name.message}</p>}
        </div>

        <div>
          <input
            placeholder="Last Name"
            {...register("last_name", {
              required: "Last name is required",
              minLength: {
                value: 2,
                message: "Last name must be at least 2 characters long",
              },
              maxLength: {
                value: 50,
                message: "Last name must be no more than 50 characters long",
              },
            })}
          />
          {errors.lastname && <p>{errors.last_name.message}</p>}
        </div>

        <div>
          <input
            placeholder="Email Address"
            type="email"
            {...register("user_email", {
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Invalid email address",
              },
            })}
          />
          {errors.email && <p>{errors.User_email.message}</p>}
        </div>

        <div>
          <input
            placeholder="Phone Number"
            type="tel"
            {...register("phone_no", {
              required: "Phone number is required",
              pattern: {
                value: /^[0-9]{10}$/,
                message: "Phone number must be exactly 10 digits",
              },
            })}
          />
          {errors.phone && <p>{errors.phone.message}</p>}
        </div>

        <div>
          <textarea
            id="note"
            placeholder="Information"
            {...register("note", {
              maxLength: {
                value: 500,
                message: "Note must be no more than 500 characters long",
              },
            })}
          />
          {errors.note && <p>{errors.note.message}</p>}
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
