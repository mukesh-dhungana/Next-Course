import React from "react";
import { useRouter } from "next/router";
import Layout from "../../components/Layout";

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
