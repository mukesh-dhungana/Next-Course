import React from "react";

function index({ text, onClick } = {}) {
  return (
    <button className="btn" onClick={onClick}>
      {text}
    </button>
  );
}

export default index;
