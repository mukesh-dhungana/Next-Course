import React from "react";
import UserStyle from "../../styles/User.module.css";

function Admin() {
  return (
    <div className={UserStyle.Container}>
      <h1>Welcome to User Admin Page</h1>
      <h2>Name: Admin</h2>
    </div>
  );
}

export default Admin;
