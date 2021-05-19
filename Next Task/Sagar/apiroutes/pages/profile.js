import React from "react";
import Image from "next/image";
import { buildDataPath, extractData } from "./api/user";

function Profile({ userDetail }) {
  if (!userDetail) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>API routes</h1>
      {userDetail.map((user) => {
        console.log(user.image);
        return (
          <div key={user.id}>
            <p>Name : {user.name}</p>
            <p>Email : {user.email}</p>
            <p>Phone : {user.phone}</p>
            <Image
            src={user.image}
            alt="userImage"
            width={500}
            height={500}
          />
          </div>
        );
      })}
    </div>
  );
}

export async function getStaticProps() {
  const filePath = buildDataPath();
  const data = extractData(filePath);

  return {
    props: {
      userDetail: data,
    },
  };
}

export default Profile;
