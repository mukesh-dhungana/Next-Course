import dynamic from "next/dynamic";
import Image from "next/image";

export default function User({ user }) {
  return (
    <div>
      <h1>User Details</h1>
      <Image
        src="https://avatars.githubusercontent.com/u/50880222?s=400&u=ccf38e3da416568196a5ed267a26d77cebe16caa&v=4"
        width={100}
        height={100}
      />
      <br />
      <label>
        <b>Name:</b>
      </label>
      <p>{user.name}</p>
      <label>
        <b>Email:</b>
      </label>
      <p>{user.email}</p>
      <label>
        <b>Phone:</b>
      </label>
      <p>{user.phone}</p>
    </div>
  );
}

export async function getStaticProps(ctx) {
  const res = await fetch("http://localhost:3000/api/users");
  const users = await res.json();

  return {
    props: {
      user: users[0],
    },
  };
}
