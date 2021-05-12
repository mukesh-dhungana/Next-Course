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

export const getStaticPaths = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json();
  const paths = users.map((user) => ({ params: { id: "" + user.id } }));
  return {
    paths: paths,
    fallback: false,
  };
};

export const getStaticProps = async (ctx) => {
  console.log(ctx);
  const { id } = ctx.params;
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );
  const user = await response.json();
  return { props: { user } };
};

export default id;
