import React from "react";
import Head from "next/head";
import Link from "next/link";
import Home from "../../styles/Home.module.css";

function index(props) {
  return (
    <div className={Home.container}>
      <Head>
        <title>All Users</title>
      </Head>
      <h3>All Users</h3>
      {props.users.map((user) => (
        <Link href={`/users/${user.id}`} key={user.id}>
          <a className={Home.listItem}>{user.name}</a>
        </Link>
      ))}
    </div>
  );
}

export const getStaticProps = async (ctx) => {
  const response = await fetch(`http://localhost:3000/api/hello`);
  const { users } = await response.json();
  return { props: { users }, revalidate: 10 };
};

export default index;
