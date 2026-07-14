import React, { useState } from "react";

function Form() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const [errors, setErrors] = useState({});

  // Handle Input Change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Validate Form
  const validate = () => {
    let newErrors = {};

    // Name Validation
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    // Email Validation
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
    ) {
      newErrors.email = "Invalid email format";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  // Handle Submit
  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      alert("Form Submitted Successfully!");

      setFormData({
        name: "",
        email: "",
      });

      setErrors({});
    }
  };

  return (
    <div style={{ width: "350px", margin: "50px auto" }}>
      <h2>React Form Validation</h2>

      <form onSubmit={handleSubmit}>

        <div>
          <label>Name:</label><br />
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          <br />
          {errors.name && (
            <span style={{ color: "red" }}>
              {errors.name}
            </span>
          )}
        </div>

        <br />

        <div>
          <label>Email:</label><br />
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <br />
          {errors.email && (
            <span style={{ color: "red" }}>
              {errors.email}
            </span>
          )}
        </div>

        <br />

        <button type="submit">
          Submit
        </button>

      </form>
    </div>
  );
}

export default Form;