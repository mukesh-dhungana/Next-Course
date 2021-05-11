import { useRouter } from "next/router";

export default function User({ user }) {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading.......</div>;
  }

  return (
    <div>
      <h1>{user.name}</h1>
      <h1>{user.email}</h1>
    </div>
  );
}

// User.getInitialProps = async ({ query }) => {
//   const res = await fetch(
//     `https://jsonplaceholder.typicode.com/users/${query.id}`
//   );
//   const data = await res.json();

//   return { user: data };
// };

export async function getStaticPaths() {
  return {
    paths: [{ params: { id: "1" } }, { params: { id: "2" } }],
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${params.id}`
  );
  const data = await res.json();

  return {
    props: {
      user: data,
    },
  };
}
