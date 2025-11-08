import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const OTPPage = () => {
  const [otp, setOtp] = useState("");
  const [isSuccess, setisSuccess] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();
  console.log("location", location?.state?.email);

  useEffect(() => {
    if (!location?.state?.email) {
      navigate("/");
    }
  }, []);

  const handleVerifyOtp = async () => {
    if (!otp) {
      return alert("OTP REQUIRED");
    }

    // call verify-otp api
    const URL = "http://localhost:5000/api/verify-otp";
    const body = {
      email: location.state.email,
      otp,
    };
    const response = await axios.post(URL, body);
    console.log("response", response);

    if (response.data.status) {
      // success
      setisSuccess(true);
    } else {
      // error
      alert(response.data.message);
    }
  };

  const handleSendOtp = async () => {
    // call reset-otp api
    const URL = "http://localhost:5000/api/reset-otp";
    const body = {
      email: location.state.email,
    };
    const response = await axios.post(URL, body);
    console.log("response", response);

    if (response.data.status) {
      // success
        alert("OTP RESET Successfully!")
    } else {
      // error
      alert(response.data.message);
    }
  };

  return (
    <div style={styles.container}>
      <h2>🔐 OTP Verification</h2>

      <div style={styles.card}>
        <h4>Enter the OTP sent to your email</h4>
        <input
          type="text"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          placeholder="Enter OTP"
          style={styles.input}
          maxLength={6}
        />
        <button onClick={handleVerifyOtp} style={styles.button}>
          Verify OTP
        </button>
        <p style={{ marginTop: 10 }}>
          Didn’t get the OTP?{" "}
          <button onClick={handleSendOtp} style={styles.linkBtn}>
            Resend
          </button>
        </p>
      </div>

      {isSuccess && (
        <div style={styles.card}>
          <h3>🎉 Verification Successful!</h3>
          <p>Welcome, {location.state.email}!</p>
          <button
            onClick={() => {
              navigate("/");
            }}
          >
            back to Login
          </button>
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingTop: "60px",
  },
  card: {
    width: 300,
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
    textAlign: "center",
  },
  input: {
    width: "100%",
    padding: 10,
    marginTop: 10,
    borderRadius: 5,
    border: "1px solid #ccc",
  },
  button: {
    marginTop: 15,
    width: "100%",
    padding: 10,
    border: "none",
    borderRadius: 5,
    backgroundColor: "#007bff",
    color: "#fff",
    fontWeight: "bold",
    cursor: "pointer",
  },
  linkBtn: {
    background: "none",
    border: "none",
    color: "#007bff",
    textDecoration: "underline",
    cursor: "pointer",
  },
};

export default OTPPage;
