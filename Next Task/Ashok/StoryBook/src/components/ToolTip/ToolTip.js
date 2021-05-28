import React from "react";
import PropTypes from "prop-types";
import "./tooltip.css";

function ToolTip({ type, size, content }) {
  return (
    <div className={`tooltip-container ${type} ${size}`}>
      <p className="tooltip-content">{content}</p>
    </div>
  );
}

ToolTip.defaultProps = {
  type: "primary",
  size: "md",
};

ToolTip.propTypes = {
  type: PropTypes.string,
  size: PropTypes.string,
  content: PropTypes.string,
};
export default ToolTip;
