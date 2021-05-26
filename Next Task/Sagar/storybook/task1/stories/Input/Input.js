import React from "react";
import "./Input.css";

const Input = (props) => {
  const { variant = "medium", ...rest } = props;

  return <input type="text" className={variant} {...rest} />;
};

export default Input;
