import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
    const navigate = useNavigate()
  const loginHandler = async () => {
    try {
      console.log("values", email, password);
      const response = await signInWithEmailAndPassword(auth, email, password);
      console.log("response login ", response);
      localStorage.setItem("uid", response.user.uid);
      navigate("/dashboard");
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <div>
      <h1>Login</h1>

      <input
        type="text"
        placeholder="email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="password"
        onChange={(e) => setpassword(e.target.value)}
      />
      <button onClick={loginHandler}>Login</button>
      <p>
        Create Account? <Link to="/signup"> Signup </Link>{" "}
      </p>
    </div>
  );
};

export default Login;
