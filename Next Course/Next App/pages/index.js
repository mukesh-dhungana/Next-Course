import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Error from "./_error";
import { useEffect } from "react";

// export default function Home(props) {
//   // console.log(statusCode);
//   // if (statusCode) {
//   //   // This line will show the default Error Page
//   //   return <Error statusCode={statusCode} />;
//   // }
//   return (
//     <div className={styles.container}>
//        This is home page
//       <h1>{props.data.name}</h1>
//     </div>
//   );
// }

// Home.getInitialProps = async (context) => {
//   let res = await fetch("http://localhost:3000/api/hello");
//   let data = await res.json();
//   return {
//     data,
//   };
// };

import React, { Component } from "react";

class Home extends Component {
  static getInitialProps = async (context) => {
    const { res } = context;
    res.statusCode = 500;
    let response = await fetch("http://localhost:3000/api/hello");
    let data = await response.json();
    return {
      data,
    };
  };
  render() {
    return (
      <div className={styles.container}>
        This is home page
        <h1>{this.props.data.name}</h1>
      </div>
    );
  }
}

export default Home;
