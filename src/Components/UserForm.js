import React, { useState } from "react";

/**
 * A reusable input field component.
 *
 * @param {Object} props - The props object.
 * @param {string} props.label - The label for the input field.
 * @param {string} props.type - The type of the input field.
 * @param {string} props.id - The id of the input field.
 * @param {string} props.name - The name of the input field.
 * @param {string} props.value - The value of the input field.
 * @param {function} props.onChange - The function to be called when the input field value changes.
 * @param {boolean} props.required - Whether the input field is required or not.
 * @param {string} props.error - The error message to be displayed if there is an error with the input field.
 * @returns {JSX.Element} - The InputField component.
 */
const InputField = ({
  label,
  type,
  id,
  name,
  value,
  onChange,
  required,
  error
}) => (
  <div className="mb-3">
    <label htmlFor={id} className="form-label">
      {label}
    </label>
    <input
      type={type}
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      required={required}
      className={`form-control ${error ? "is-invalid" : ""}`}
    />
    {error && <div className="invalid-feedback">{error}</div>}
  </div>
);

/**
 * A form component for adding a user.
 * @param {Object} props - The component props.
 * @param {Function} props.addUser - A function to add a user.
 * @returns {JSX.Element} - The UserForm component.
 */
const UserForm = ({ addUser }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: { name: "" }
  });

  const [formErrors, setFormErrors] = useState({});
  const [submitError, setSubmitError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const validateForm = () => {
    let errors = {};

    if (!formData.name.trim()) {
      errors.name = "Name is required";
    }

    // Simple email and phone validation
    if (!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(formData.email)) {
      errors.email = "Email is invalid";
    }

    if (!/^\d{10}$/.test(formData.phone)) {
      errors.phone = "Phone number is invalid";
    }

    if (!formData.company.name.trim()) {
      errors.company = "Company name is required";
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        await addUser(formData);
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: { name: "" }
        });
        setSubmitError("");
      } catch (error) {
        setSubmitError("Failed to add user. Please try again.");
      }
    }
  };

  return (
    <div className="user-form">
      <h2>Add User</h2>
      <form onSubmit={handleSubmit} className="row g-4">
        <div className="col-md-3">
          <InputField
            label="Name:"
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            error={formErrors.name}
          />
        </div>

        <div className="col-md-3">
          <InputField
            label="Email:"
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            error={formErrors.email}
          />
        </div>
        <div className="col-md-3">
          <InputField
            label="Phone:"
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            error={formErrors.phone}
          />
        </div>

        <div className="col-md-3">
          <InputField
            label="Company:"
            type="text"
            id="company"
            name="company"
            value={formData.company.name}
            onChange={(e) =>
              setFormData((prevData) => ({
                ...prevData,
                company: { name: e.target.value }
              }))
            }
            required
            error={formErrors.company}
          />
        </div>

        <div className="col-md-12">
          <button type="submit" className="btn btn-primary">
            Add User
          </button>
        </div>
      </form>
      {submitError && <p>{submitError}</p>}
    </div>
  );
};

export default UserForm;
