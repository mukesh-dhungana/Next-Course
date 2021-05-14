import dynamic from "next/dynamic";

const DynamicUser = dynamic(() => import("../../components/User"), {
  loading: () => <p>Loading....</p>,
});
const DynamicAdmin = dynamic(() => import("../../components/Admin"), {
  loading: () => <p>Loading....</p>,
});

export default function User({ user }) {
  return user.id ? <DynamicUser user={user} /> : <DynamicAdmin />;
}

export async function getServerSideProps(ctx) {
  const {
    params: { id },
  } = ctx;
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const data = await res.json();

  return {
    props: {
      user: data,
    },
  };
}
