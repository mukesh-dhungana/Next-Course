import React from "react";

const User = ({ users }) => {
  return (
    <div>
      {users.map((user) => (
        <h4>{user.name}</h4>
      ))}
    </div>
  );
};

export async function getStaticProps(content) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
  const users = await res.json();

  return {
    props: {
      users,
    },
  };
}

export default User;
