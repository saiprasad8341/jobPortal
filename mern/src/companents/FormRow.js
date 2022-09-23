import React from "react";

const FormFlow = ({ type, name, value, handleChange, labelText }) => {
  return (
    <div className="form-row">
      <label htmlFor={name} className="form-label">
        {labelText || name}
      </label>
      <input
        type={type}
        value={value}
        id={name}
        name={name}
        onChange={handleChange}
        className="form-input"
      />
    </div>
  );
};

export default FormFlow;
