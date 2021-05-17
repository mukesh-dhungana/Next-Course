import React from "react";
import Image from "next/image";
import UserStyle from "../../styles/User.module.css";

function User({
  user: { name, username, website, phone, street, image } = {},
}) {
  return (
    <div className={UserStyle.Container}>
      <h1>Welcome to User Detail Page</h1>
      <Image src={image} width={300} height={300} />
      <h2>Name: {name}</h2>
      <h4>UserName: {username}</h4>
      <h4>Website: {website}</h4>
      <h4>Phone: {phone}</h4>
      <h4>Address: {street}</h4>
    </div>
  );
}

export default User;
