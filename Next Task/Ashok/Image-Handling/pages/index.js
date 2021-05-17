import React from "react";
import { useRouter } from "next/router";

const Login = () => {
  const router = useRouter();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (e.target.username.value) router.push(`/${e.target.username.value}`);
  };
  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="input">
          <label htmlFor="username">UserName</label>
          <input type="text" name="username" id="username" />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};
export default Login;
