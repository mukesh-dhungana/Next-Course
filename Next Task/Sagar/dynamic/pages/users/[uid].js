import dynamic from "next/dynamic";

const User = dynamic(() => import("../../components/UserDetails"));

function UsersPage({ users }) {
  console.log(users);
  return <User {...{ users }} />;
}

export async function getStaticProps(context) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${context.params.uid}`
  );
  const users = await res.json();

  if (Object.keys(users).length === 0) {
    return {
      redirect: {
        destination: "/admin",
        permanent: false,
      },
    };
  }

  return {
    props: {
      users,
    },
  };
}

export async function getStaticPaths() {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
  const users = await res.json();

  return {
    paths: users.map((user) => ({ params: { uid: `${user.id}` } })),
    fallback: true,
  };
}

export default UsersPage;
