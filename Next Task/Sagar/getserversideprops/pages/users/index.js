import Link from "next/link";

const Users = ({ users }) => {
  return (
    <div>
      {users.map((user) => (
        <h4 key={user.id}>
          <Link href={`/users/${user.id}`}>{user.name}</Link>
        </h4>
      ))}
    </div>
  );
};

export async function getServerSideProps(context) {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();

  return {
    props: {
      users,
    },
  };
}

export default Users;
