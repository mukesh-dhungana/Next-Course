import Link from "next/link";
import React from "react";
import UserStyle from "../../styles/User.module.css";

function User({ user = {} }) {
  const { name, username, website, phone, address: { street } = {} } = user;
  return (
    <div className={UserStyle.Container}>
      <Link href="/users">
        <button>Go back</button>
      </Link>
      <h2>Name: {name}</h2>
      <h4>UserName: {username}</h4>
      <h4>Website: {website}</h4>
      <h4>Phone: {phone}</h4>
      <h4>Address: {street}</h4>
    </div>
  );
}

export default User;
