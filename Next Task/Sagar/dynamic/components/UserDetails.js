import React from "react";

const UserDetails = ({ users }) => {
  if (!users) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>Dynamic Import</h1>
      <p>Name : {users.name}</p>
      <p>Username : {users.username}</p>
      <p>Phone : {users.phone}</p>
    </div>
  );
};

export default UserDetails;
