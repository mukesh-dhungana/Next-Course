import React from "react";
import PropTypes from "prop-types";
import "./inputfield.css";

function InputField({
  label,
  type,
  name,
  error,
  value,
  onChange,
  placeholder,
}) {
  return (
    <div className="field">
      <label htmlFor={label}>{label}</label>
      <input
        type={type}
        id={label}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        className="input"
        style={error ? { border: "1px solid red" } : {}}
      />
      <small className="error">{error}</small>
    </div>
  );
}

InputField.defaultProps = {
  type: "text",
  onChange: () => ({}),
};

InputField.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  error: PropTypes.string,
  onChange: PropTypes.func,
};

export default InputField;
