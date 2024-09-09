import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    reset,
  } = useForm();

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
        throw new Error("Failed to submit the form. Please try again later.");
      }

      const result = await response.json();
      console.log("Form submitted successfully:", result);

      // Reset form on successful submission
      reset();
      // Redirect to Thank You page
      navigate("/thank-you");
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className="contact-form-container">
      <div>
        <h4>Got a question? We'd love to hear from you.</h4>

        <form className="contact-form" onSubmit={handleSubmit(onSubmit)}>
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
          {errors.first_name && (
            <p className="error">{errors.first_name.message}</p>
          )}

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
          {errors.last_name && (
            <p className="error">{errors.last_name.message}</p>
          )}

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
          {errors.user_email && (
            <p className="error">{errors.user_email.message}</p>
          )}

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
          {errors.phone_no && (
            <p className="error">{errors.phone_no.message}</p>
          )}

          <textarea
            placeholder="Information"
            {...register("note", {
              maxLength: {
                value: 500,
                message: "Note must be no more than 500 characters long",
              },
            })}
          />
          {errors.note && <p className="error">{errors.note.message}</p>}

          <button
            className="submit-button"
            type="submit"
            disabled={isSubmitting || isSubmitSuccessful}>
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
