import Link from "next/link";
import Head from "next/head";
import Home from "../../styles/Home.module.css";

function index(props) {
  return (
    <div className={Home.container}>
      <Head>
        <title>All Users</title>
      </Head>
      {props.users.map((user) => (
        <Link key={user.id} href={`/users/${user.id}`}>
          <a className={Home.listItem}>{user.name}</a>
        </Link>
      ))}
    </div>
  );
}

export default index;
