import React, { useState } from 'react';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleForgotPassword = (e) => {
    e.preventDefault();

    if (!email) {
      setMessage('⚠️ Please enter your email address.');
      return;
    }

    // Simulate password reset email
    // In a real app, call your backend API or Firebase here
    setTimeout(() => {
      setMessage(`✅ Password reset link sent to ${email}`);
    }, 1000);
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2>Forgot Password</h2>
        <p style={{ color: '#666', marginBottom: 20 }}>
          Enter your registered email address and we’ll send you a link to reset your password.
        </p>

        <form onSubmit={handleForgotPassword}>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={styles.input}
          />
          <button type="submit" style={styles.button}>
            Send Reset Link
          </button>
        </form>

        {message && <p style={styles.message}>{message}</p>}
      </div>
    </div>
  );
};

// Inline CSS styles
const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#f5f6fa',
  },
  card: {
    width: 350,
    padding: 30,
    borderRadius: 10,
    backgroundColor: '#fff',
    boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
    textAlign: 'center',
  },
  input: {
    width: '100%',
    padding: 12,
    marginBottom: 15,
    borderRadius: 5,
    border: '1px solid #ccc',
    fontSize: 16,
  },
  button: {
    width: '100%',
    padding: 12,
    border: 'none',
    borderRadius: 5,
    backgroundColor: '#007bff',
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    cursor: 'pointer',
  },
  message: {
    marginTop: 15,
    color: '#333',
    fontSize: 14,
  },
};

export default ForgotPassword;
