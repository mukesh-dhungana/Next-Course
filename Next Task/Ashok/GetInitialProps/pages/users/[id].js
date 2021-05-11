import React from "react";
import User from "../../styles/User.module.css";

function id({ user }) {
  const {
    name,
    username,
    website,
    phone,
    address: { street },
  } = user;
  return (
    <div className={User.Container}>
      <h2>Name: {name}</h2>
      <h4>UserName: {username}</h4>
      <h4>Website: {website}</h4>
      <h4>Phone: {phone}</h4>
      <h4>Address: {street}</h4>
    </div>
  );
}

id.getInitialProps = async (ctx) => {
  const { id } = ctx.query;
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );
  const user = await response.json();
  return { user };
};

export default id;
