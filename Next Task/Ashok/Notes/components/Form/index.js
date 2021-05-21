import React, { useEffect } from "react";

function index({ handleNoteTitleSubmit, name, placeholder, id } = {}) {
  useEffect(() => {
    name === "title" && document.getElementById(name + id).focus();
  }, []);
  return (
    <form onSubmit={handleNoteTitleSubmit}>
      <input type="text" name={name} id={name + id} placeholder={placeholder} />
    </form>
  );
}

export default index;
