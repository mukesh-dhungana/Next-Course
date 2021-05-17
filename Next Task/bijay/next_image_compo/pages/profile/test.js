import React from "react";

const Test = ({ data }) => {
  return <div>{data.name}</div>;
};

export default Test;

export const getServerSideProps = async () => {
  const res = await fetch("http://localhost:3000/api/hello");
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
};
