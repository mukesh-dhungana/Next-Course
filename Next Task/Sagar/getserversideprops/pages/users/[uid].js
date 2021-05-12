const userId = ({ user }) => {
  return (
    <div>
      <h2>getServerSideProps</h2>
      <p>Name : {user.name} </p>
      <p>Username : {user.username} </p>
      <p>Phone : {user.phone} </p>
    </div>
  );
};

export async function getServerSideProps(context) {
  const { params } = context;
  const userid = params.uid;

  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userid}`
  );
  const user = await res.json();

  if (Object.keys(user).length === 0) {
    return { notFound: true };
  }

  return {
    props: {
      user,
    },
  };
}

export default userId;
