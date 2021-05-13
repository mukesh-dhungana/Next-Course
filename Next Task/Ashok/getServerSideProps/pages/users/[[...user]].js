import React from "react";
import dynamic from "next/dynamic";

const UserDetail = dynamic(() => import("../../components/UserDetail"), {
  loading: () => <div>Loading...</div>,
});
const UserList = dynamic(() => import("../../components/UserList"), {
  loading: () => <div>Loading...</div>,
});

function id({ data }) {
  const users = Array.isArray(data) ? (
    <UserList users={data} />
  ) : (
    <UserDetail user={data} />
  );

  return <>{users}</>;
}

export const getServerSideProps = async (ctx) => {
  const { resolvedUrl } = ctx;
  const response = await fetch(
    `https://jsonplaceholder.typicode.com${resolvedUrl}`
  );
  const data = await response.json();
  console.log(data);
  if (!data || JSON.stringify(data) === "{}") {
    return {
      notFound: true,
    };
  }
  return { props: { data } };
};

export default id;
