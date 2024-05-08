import React from "react";
import Input from "./Input";

const Login = () => {
  return (
    <div>
      <form className="form">
        <Input type="text" placeholder="username" />
        <Input type="password" placeholder="Password" />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
