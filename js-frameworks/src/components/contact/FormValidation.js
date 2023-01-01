import React, { useState } from "react";

function FormValidation() {
  const [name, setName] = useState("");
  const [telephone, setTelephone] = useState("");
  const [queryType, setQueryType] = useState("");
  const [message, setMessage] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formError, setFormError] = useState(false);

  const queryOptions = [
    "Enquiry",
    "Complaint",
    "Compliment",
    "General Message",
  ];

  const handleSubmit = (event) => {
    event.preventDefault();
    const phoneRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

    if (
      !name ||
      !telephone ||
      !queryType ||
      !message ||
      !telephone.match(phoneRegex)
    ) {
      setFormError(true);
      return;
    }

    setFormSubmitted(true);
  };

  if (formSubmitted) {
    return (
      <p className="success">Your form has been successfully submitted!</p>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      {formError && (
        <p className="required_message">Please fill out all fields correctly</p>
      )}
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <p className="help-text"> Required</p>
        {formError && (
          <p className="required_message">Please Enter your name</p>
        )}
      </label>
      <br />

      <label>
        Telephone:
        <input
          type="text"
          value={telephone}
          onChange={(event) => setTelephone(event.target.value)}
        />
        <p className="help-text"> Minimum 10 numbers</p>
        {formError && (
          <p className="required_message">must be a minimum of 10 numbers</p>
        )}
      </label>
      <br />
      <label>
        Query Type:
        <select
          value={queryType}
          onChange={(event) => setQueryType(event.target.value)}
        >
          <option value="" disabled>
            Select an option
          </option>
          {queryOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </label>
      <p className="help-text"> Required</p>
      {formError && <p className="required_message">Please Select an option</p>}
      <br />
      <label>
        Message:
        <textarea
          value={message}
          onChange={(event) => setMessage(event.target.value)}
        />
      </label>
      <p className="help-text"> Required</p>
      {formError && (
        <p className="required_message"> Please Enter your message</p>
      )}
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}

export default FormValidation;
