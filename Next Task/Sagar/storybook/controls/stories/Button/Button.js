import React from "react";
import "./button.css";

const Button = (props) => {
  const { variant, children, medium, backgroundColor, ...rest } = props;

  const mode = medium ? "medium" : "large";

  return (
    <button
      className={`button ${variant} ${mode}`}
      {...rest}
      style={backgroundColor && { backgroundColor }}
    >
      {children}
    </button>
  );
};

export default Button;
