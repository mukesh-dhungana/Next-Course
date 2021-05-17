import React from "react";
import dynamic from "next/dynamic";

const UserDetail = dynamic(() => import("../components/UserDetail"));
const AdminDetail = dynamic(() => import("../components/AdminDetail"));

const DashBoard = ({ user }) => {
  const DashBoardBody =
    JSON.stringify(user) === "{}" ? (
      <AdminDetail />
    ) : (
      <UserDetail user={user} />
    );

  return <>{DashBoardBody}</>;
};

export const getServerSideProps = async (ctx) => {
  const { id } = ctx.query;
  const response = await fetch(`http://localhost:3000/api/users/${id}`);
  const user = await response.json();

  return {
    props: { user },
  };
};

export default DashBoard;
