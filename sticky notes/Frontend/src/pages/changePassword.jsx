import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";

const ChangePassword = () => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");


  const [URLSearchParams] =  useSearchParams()
  console.log("searchparams" , URLSearchParams.get("q"))

  const handleChangePassword = (e) => {
    e.preventDefault();

    // Validation
    if (!currentPassword || !newPassword || !confirmPassword) {
      setMessage("⚠️ Please fill in all fields.");
      return;
    }

    if (newPassword.length < 6) {
      setMessage("🔒 New password must be at least 6 characters long.");
      return;
    }

    if (newPassword !== confirmPassword) {
      setMessage("❌ New password and confirm password do not match.");
      return;
    }

    // Simulate API call for password change
    setTimeout(() => {
      setMessage("✅ Password changed successfully!");
      setCurrentPassword("");
      setNewPassword("");
      setConfirmPassword("");
    }, 1000);
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2>Change Password</h2>
        <p style={{ color: "#666", marginBottom: 20 }}>
          Update your account password below.
        </p>

        <form onSubmit={handleChangePassword}>
          <input
            type="password"
            placeholder="New Password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            style={styles.input}
          />

          <input
            type="password"
            placeholder="Confirm New Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            style={styles.input}
          />

          <button type="submit" style={styles.button}>
            Update Password
          </button>
        </form>

        {message && <p style={styles.message}>{message}</p>}
      </div>
    </div>
  );
};

// Inline styling
const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#f5f6fa",
  },
  card: {
    width: 350,
    padding: 30,
    borderRadius: 10,
    backgroundColor: "#fff",
    boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
    textAlign: "center",
  },
  input: {
    width: "100%",
    padding: 12,
    marginBottom: 15,
    borderRadius: 5,
    border: "1px solid #ccc",
    fontSize: 16,
  },
  button: {
    width: "100%",
    padding: 12,
    border: "none",
    borderRadius: 5,
    backgroundColor: "#28a745",
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    cursor: "pointer",
  },
  message: {
    marginTop: 15,
    color: "#333",
    fontSize: 14,
  },
};

export default ChangePassword;
