import React, { useState } from "react";
import PropTypes from "prop-types";
import "./card.css";
import ToolTip from "../ToolTip/ToolTip";

function Card({ children, backgroundColor, size }) {
  const [hover, setHover] = useState(false);
  return (
    <div
      className={`card ${size}`}
      style={backgroundColor && { backgroundColor }}
      onMouseOver={() => setHover(true)}
      onMouseOut={() => setHover(false)}
    >
      {hover && (
        <ToolTip type="primary" content="lorem ipsum loreum ipsum" size="md" />
      )}
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
