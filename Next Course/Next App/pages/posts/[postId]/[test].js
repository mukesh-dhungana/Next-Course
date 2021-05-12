import React from "react";
import { useRouter } from "next/router";

function Test(props) {
  //   let router = useRouter(props);
  //   if (router.isFallback) return <h1>Loading...</h1>;
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
  return {
    paths: [
      { params: { postId: "1", test: "1" } }, // /1/1
      { params: { postId: "2", test: "2" } },
      { params: { postId: "3", test: "3" } },
      { params: { postId: "4", test: "4" } },
    ],
    fallback: false,
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
      name: params.postId,
    },
    //revalidate:1
  };
};
