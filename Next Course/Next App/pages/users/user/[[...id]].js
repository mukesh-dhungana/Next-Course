import React from "react";
import { useRouter } from "next/router";
import Layout from "../../../components/Layout";

function User(props) {
  const router = useRouter();
  console.log(router.query, router);
  return (
    <div>
      This is user component
      <a onClick={() => router.replace("/posts")}>Go to homepage</a>
      <a onClick={() => router.push("/posts")}>Go to homepage push</a>
    </div>
  );
}
User.Layout = Layout;
export default User;

export const getStaticPaths = async () => {
  //console.log("paths");
  // let users= await (await fetch('api/getUsers')).json();

  // let params=users.map(x=>({params:{id:x.id}}))
  return {
    paths: [
      { params: { id: false } },   //users/user         //users/user/ -404 page
      { params: { id: ["1", "2", "3"] } }, // /users/user/1/2/3   // /users/user/1/2/4 - 404 page
      { params: { id: ["2", "2", "3"] } },
      { params: { id: ["3", "2", "3"] } },
      { params: { id: ["4", "2", "3"] } },
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
      //name: params.id,
    },
    //revalidate:1
  };
};
