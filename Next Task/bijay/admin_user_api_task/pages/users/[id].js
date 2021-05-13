import React from "react";
import dynamic from "next/dynamic";

const User = dynamic(() => import("../../Components/User"));

const Id = ({ data }) => {
  return (
    <>
      <User user={data} />
    </>
  );
};

export default Id;

export const getServerSideProps = async (context) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${context.params.id}`
  );
  const data = await response.json();
  if (Object.values(data).length === 0) {
    return {
      redirect: {
        destination: "/admin",
        permanent: false,
      },
    };
  }
  return {
    props: { data },
  };
};
