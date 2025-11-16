import React, { useState } from "react";
import "./signup.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
function Signup() {
  // const [formData, setFormData] = useState({
  //   name: "",
  //   mobileNumber: "",
  //   email: "",
  //   password: "",
  // });

  const [name, setName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      if (!name || !mobileNumber || !email || !password) {
        setError("Please fill in all fields.");
        return;
      }

      const obj = {
        name,
        mobileNumber,
        email,
        password,
      };
      console.log("obj", obj);
      const url = `${import.meta.env.VITE_BACKEND_BASE_URL}/auth/signup`;
      const response = await axios.post(url, obj);
      console.log("response", response);
      navigate("/otp-verify", {
        state: {
          email,
        },
      });
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Sign Up</h2>
        {error && <p className="error">{error}</p>}
        {success && <p className="success">{success}</p>}

        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="number"
          name="mobileNumber"
          placeholder="mobileNumber"
          value={mobileNumber}
          onChange={(e) => setMobileNumber(e.target.value)}
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Link to={"/"}>Login? </Link>

        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default Signup;
