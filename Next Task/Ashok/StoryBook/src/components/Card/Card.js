import React from "react";
import PropTypes from "prop-types";
import "./card.css";

function Card({ children, backgroundColor, size }) {
  return (
    <div
      className={`card ${size}`}
      style={backgroundColor && { backgroundColor }}
    >
      {children}
    </div>
  );
}

Card.propTypes = {
  children: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string,
  size: PropTypes.string,
};

Card.defaultProps = {
  backgroundColor: null,
  size: "medium",
};

export default Card;
