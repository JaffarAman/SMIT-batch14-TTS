import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <h1>LOGIN</h1>
      <input type="text" placeholder="Email" />
      <input type="text" placeholder="password" />
      <p>
        Create Account? <Link to={"/signup"}> Signup </Link>
      </p>
      <button>Login</button>
    </div>
  );
};

export default Login;
