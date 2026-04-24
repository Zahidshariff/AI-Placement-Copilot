import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import "./Login.css";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    
    if (!email || !password) {
      setError("Please enter both email and password");
      return;
    }
    
    setLoading(true);

    try {
      const res = await axios.post("http://localhost:5000/login", {
        email,
        password,
      });

      console.log("Login response:", res.data);

      if (res.data.success) {
        // Store token
        localStorage.setItem("token", res.data.token);
        
        // Store username - Check if it exists
        if (res.data.username && res.data.username !== "undefined") {
          localStorage.setItem("username", res.data.username);
          console.log("Username stored:", res.data.username);
        } else {
          console.error("Username missing in response!");
          // Fallback: use email name
          const emailName = email.split("@")[0];
          localStorage.setItem("username", emailName);
          console.log("Using email name as fallback:", emailName);
        }
        
        localStorage.setItem("email", email);
        
        // Verify storage
        console.log("LocalStorage after save:", {
          username: localStorage.getItem("username"),
          email: localStorage.getItem("email")
        });
        
        navigate("/dashboard");
      } else {
        setError(res.data.message);
      }
    } catch (err) {
      console.error("Login error:", err);
      setError("Cannot connect to server. Make sure backend is running on port 5000");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-left">
          <h1>AI Placement Copilot</h1>
          <p>Crack placements with smart roadmap, resume score, aptitude tests, coding progress & job recommendations.</p>
          <div className="features">
            <span>🚀 DSA Tracker</span>
            <span>📄 Resume Analyzer</span>
            <span>💼 Job Alerts</span>
            <span>🧠 Aptitude Tests</span>
          </div>
        </div>

        <div className="login-box">
          <h2>Welcome Back 👋</h2>
          <p className="sub-text">Login to continue</p>

          <form onSubmit={handleLogin}>
            <div className="input-group">
              <input
                type="email"
                placeholder="Enter Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="input-group">
              <input
                type="password"
                placeholder="Enter Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <button type="submit" disabled={loading}>
              {loading ? "Logging in..." : "Login"}
            </button>

            {error && (
              <p style={{ color: "#dc3545", marginTop: "10px", textAlign: "center", fontSize: "14px" }}>
                {error}
              </p>
            )}
          </form>

          <p className="signup-text">
            Don't have account? <Link to="/register">Sign Up</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;