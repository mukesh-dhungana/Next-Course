import React from "react";
import styles from "../../styles/Home.module.css";

class UserPage extends React.Component {
  static async getInitialProps(ctx) {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/users/${ctx.query.pid}`
    );
    const result = await res.json();
    return { result };
  }

  render() {
    const { result } = this.props;
    console.log(Object.keys(result).length);

    return (
      <div className={styles.container}>
        {Object.keys(result).length !== 0 ? (
          <>
            <p>
              <b>Id : </b>
              {result.id}
            </p>
            <p>
              {" "}
              <b>Name : </b>
              {result.name}
            </p>
            <p>
              {" "}
              <b>Username :</b> {result.username}
            </p>
            <p>
              {" "}
              <b>Email :</b> {result.email}
            </p>
            <p>
              {" "}
              <b>Phone :</b> {result.phone}
            </p>
          </>
        ) : (
          <h1>Not Found</h1>
        )}
      </div>
    );
  }
}

export default UserPage;
