import React from "react";
import User from "../../styles/User.module.css";

function id({ user = {} }) {
  const { name } = user;
  return (
    <div className={User.Container}>
      <h2>Name: {name}</h2>
    </div>
  );
}

export const getStaticPaths = async () => {
  const response = await fetch("http://localhost:3000/api/hello");
  const { users } = await response.json();
  const paths = users.map((user) => ({ params: { id: "" + user.id } }));

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps = async (ctx) => {
  const { id } = ctx.params;
  const response = await fetch(`http://localhost:3000/api/${id}`);
  const { user } = await response.json();
  if (!user || JSON.stringify(user) === "{}") return { notFound: true };
  return { props: { user }, revalidate: 5 };
};

export default id;
