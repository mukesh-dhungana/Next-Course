import React from "react";

const User = ({ user }) => {
  console.log(user);
  return (
    <>
      <div className="user-container">
        <h3>
          Name: <span> {user.name} </span>{" "}
        </h3>
        <h5>
          Email: <span> {user.email} </span>{" "}
        </h5>
      </div>
    </>
  );
};

export default User;
