import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { path: "/dashboard", name: "Dashboard", icon: "🏠" },
    { path: "/progress", name: "DSA Progress", icon: "📚" },
    { path: "/aptitude", name: "Aptitude", icon: "🧠" },
    { path: "/resume", name: "Resume Checker", icon: "📄" },
    { path: "/jobs", name: "Job Portal", icon: "💼" }
  ];

  return (
    <div style={{
      width: "260px",
      background: "linear-gradient(135deg, #1e293b 0%, #0f172a 100%)",
      color: "white",
      height: "100vh",
      position: "fixed",
      left: 0,
      top: 0,
      padding: "30px 20px"
    }}>
      <h2 style={{ marginBottom: "30px", textAlign: "center" }}>AI Placement</h2>
      {menuItems.map((item) => (
        <button
          key={item.path}
          onClick={() => navigate(item.path)}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            width: "100%",
            padding: "12px 16px",
            marginBottom: "8px",
            background: location.pathname === item.path ? "#667eea" : "transparent",
            border: "none",
            borderRadius: "12px",
            color: "white",
            cursor: "pointer",
            fontSize: "16px"
          }}
        >
          <span>{item.icon}</span>
          <span>{item.name}</span>
        </button>
      ))}
    </div>
  );
}

export default Sidebar;