import Link from "next/link";

export default function Users({ users }) {
  return (
    <ol>
      {users.map((user) => (
        <li key={user.id}>
          <Link href={`/users/` + user.id}>
            <a>{user.name}</a>
          </Link>
        </li>
      ))}
    </ol>
  );
}

export async function getStaticProps(ctx) {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  return {
    props: { users: data },
  };
}
