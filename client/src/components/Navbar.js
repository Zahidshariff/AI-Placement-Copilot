import React from "react";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("email");
    navigate("/");
  };

  return (
    <nav style={{
      background: "white",
      padding: "15px 30px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
      marginBottom: "20px",
      borderRadius: "12px"
    }}>
      <h2 style={{ color: "#667eea" }}>AI Placement Copilot</h2>
      <button
        onClick={handleLogout}
        style={{
          padding: "8px 20px",
          background: "#dc3545",
          color: "white",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer"
        }}
      >
        Logout
      </button>
    </nav>
  );
}

export default Navbar;