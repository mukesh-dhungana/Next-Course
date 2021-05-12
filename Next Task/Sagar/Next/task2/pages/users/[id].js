import React from "react";

const UserId = (props) => {
  console.log(props);
  return (
    <div>
      <h1>getStaticProps</h1>
      <p>Name : {props.user.name}</p>
      <p>Username : {props.user.username}</p>
      <p>Email : {props.user.email}</p>
      <p>Phone : {props.user.phone}</p>
    </div>
  );
};

export async function getStaticProps(content) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${content.params.id}`
  );
  const user = await res.json();

  return {
    props: {
      user,
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: new Array(10)
      .fill(null)
      .map((_, index) => ({ params: { id: `${index + 1}` } })),
    fallback: false,
  };
}

export default UserId;
