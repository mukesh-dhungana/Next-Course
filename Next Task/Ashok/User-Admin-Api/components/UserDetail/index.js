import React from "react";
import UserStyle from "../../styles/User.module.css";

function User({ user: { name, username, website, phone, street } = {} }) {
  return (
    <div className={UserStyle.Container}>
      <h1>Welcome to User Detail Page</h1>
      <h2>Name: {name}</h2>
      <h4>UserName: {username}</h4>
      <h4>Website: {website}</h4>
      <h4>Phone: {phone}</h4>
      <h4>Address: {street}</h4>
    </div>
  );
}

export default User;
