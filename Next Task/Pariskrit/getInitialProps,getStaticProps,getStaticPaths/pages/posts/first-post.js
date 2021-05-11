import Link from "next/link";

export default function FirstPost({ allUsers }) {
  return (
    <>
      <h1>First Post</h1>
      {allUsers.map((user) => (
        <h2 key={user.id}>{user.name}</h2>
      ))}
      <h2>
        <Link href="/">
          <a>Go To Home</a>
        </Link>
      </h2>
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  const allUsers = data.slice(0, 5);

  return {
    props: {
      allUsers,
    },
  };
}
