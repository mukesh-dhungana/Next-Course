import React from "react";
import { useRouter } from "next/router";

function Test(props) {
    // let router = useRouter(props);
    // if (router.isFallback) return <h1>Loading...</h1>;
  //if (!props.isUser) return <h1>No user found</h1>;
  return (
    <div>
      This is test page
      <div>{props.name}</div>
    </div>
  );
}

export default Test;

export const getStaticPaths = () => {
  //console.log("paths");
  // /5 - 404 page 
  return {
    paths: [
      { params: { id: "1" } }, //  /1
      { params: { id: "2" } }, //  /2
      { params: { id: "3" } }, //  /3
      { params: { id: "4" } }, //  /4
    ],
    fallback: "blocking",
  };
};

export const getStaticProps = ({ params }) => {
  //console.log("staticprops", params);
  //   let data = [];
  //   if (data.length <= 0)
  //     return {
  //       notFound: true,
  //     };
  return {
    props: {
      name: params.id,
    },
    //revalidate:1
  };
};
