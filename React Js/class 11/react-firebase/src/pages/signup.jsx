import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");

  const navigate = useNavigate();

  const signupHandler = async () => {
    console.log("email", email);
    console.log("password", password);
    await createUserWithEmailAndPassword(auth, email, password);
    console.log("user signup");
    navigate("/");
  };

  return (
    <div>
      <h1>Sign-up</h1>
      <input
        type="text"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
      <input
        type="password"
        placeholder="password"
        onChange={(e) => setpassword(e.target.value)}
        value={password}
      />
      <p>
        Already Account? <Link to={"/"}> login </Link>
      </p>
      <button onClick={signupHandler}>Signup</button>
    </div>
  );
};

export default Signup;
