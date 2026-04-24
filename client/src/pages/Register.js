import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import "./Register.css";

function Register() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();
    setError("");
    
    if (!username || !email || !password) {
      setError("Please enter username, email and password");
      return;
    }
    
    if (username.length < 3) {
      setError("Username must be at least 3 characters");
      return;
    }
    
    if (password.length < 4) {
      setError("Password must be at least 4 characters");
      return;
    }
    
    setLoading(true);

    try {
      const res = await axios.post("http://localhost:5000/register", {
        username,
        email,
        password,
      });

      if (res.data.success) {
        alert("Registration successful! Please login.");
        navigate("/");
      } else {
        setError(res.data.message);
      }
    } catch (err) {
      console.error("Register error:", err);
      setError("Cannot connect to server. Make sure backend is running on port 5000");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="register-page">
      <div className="register-box">
        <h1>Create Account</h1>
        <form onSubmit={handleRegister}>
          <input
            type="text"
            placeholder="Enter Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            disabled={loading}
          />
          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            disabled={loading}
          />
          <input
            type="password"
            placeholder="Enter Password (min 4 characters)"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            disabled={loading}
          />
          <button type="submit" disabled={loading}>
            {loading ? "Registering..." : "Register"}
          </button>
          {error && <p style={{ color: "#dc3545", marginTop: "15px", textAlign: "center" }}>{error}</p>}
        </form>
        <p style={{ marginTop: "20px", textAlign: "center" }}>
          Already have an account? <Link to="/">Login</Link>
        </p>
      </div>
    </div>
  );
}

export default Register;