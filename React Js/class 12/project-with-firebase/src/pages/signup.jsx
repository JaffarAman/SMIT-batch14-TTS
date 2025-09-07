import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");

  const navigate = useNavigate();

  const signupHandler = async () => {
    try {
      console.log("values", email, password);
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      navigate("/");
      console.log("response ", response);
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div>
      <h1>Signup</h1>

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
      <button onClick={signupHandler}>Signup</button>
      <p>
        Already Account? <Link to="/"> Login </Link>{" "}
      </p>
    </div>
  );
};

export default Signup;
