import Link from "next/link";

export default function User({ allUsers, user }) {
  if (allUsers?.length) {
    return (
      <ol>
        {allUsers.map((user) => (
          <Link href={"/users/" + user.id} key={user.id}>
            <a>
              <li>{user.name}</li>
            </a>
          </Link>
        ))}
      </ol>
    );
  }

  return (
    <div>
      <h1>{user.name}</h1>
      <h1>{user.email}</h1>
    </div>
  );
}

export async function getServerSideProps({ params }) {
  if (!params.id) {
    const res = await fetch("https://jsonplaceholder.typicode.com/users/");
    const data = await res.json();

    return {
      props: {
        allUsers: data,
      },
    };
  }

  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${params.id}`
  );
  const data = await res.json();

  if (Object.keys(data).length <= 0) {
    return {
      notFound: true,
    };
  }

  return {
    props: { user: data },
  };
}
