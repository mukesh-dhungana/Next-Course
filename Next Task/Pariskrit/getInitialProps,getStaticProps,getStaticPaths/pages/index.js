import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Go To{" "}
          <Link href="/users/1">
            <a>User-1</a>
          </Link>
        </h1>
        <h1 className={styles.title}>
          Go To{" "}
          <Link href="/users/2">
            <a>User-2</a>
          </Link>
        </h1>
        <h1 className={styles.title}>
          Go To{" "}
          <Link href="/users/3">
            <a>User-3</a>
          </Link>
        </h1>
      </main>
    </div>
  );
}
