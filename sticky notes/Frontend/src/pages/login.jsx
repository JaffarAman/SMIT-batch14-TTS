import React, { useState } from "react";
import "./login.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Please fill in all fields.");
      return;
    }

    const obj = {
      email,
      password,
    };

    console.log("obj", obj);
    const url = `http://localhost:5000/api/auth/login`;
    const response = await axios.post(url, obj);
    console.log("response", response);
    localStorage.setItem("token" , response.data.token)
    navigate("/dashboard")
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Login</h2>
        {error && <p className="error">{error}</p>}

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Link to={"/signup"}>Signup?</Link>

        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
