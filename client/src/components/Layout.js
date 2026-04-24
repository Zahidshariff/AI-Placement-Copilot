import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../styles/Layout.css";

function Layout({ children }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Close sidebar when route changes (on mobile)
  useEffect(() => {
    setIsSidebarOpen(false);
  }, [location.pathname]); // Close when page changes

  // Close sidebar when window resizes to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024) {
        setIsSidebarOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const menuItems = [
    { path: "/dashboard", name: "Dashboard", icon: "🏠" },
    { path: "/progress", name: "DSA Progress", icon: "📚" },
    { path: "/aptitude", name: "Aptitude", icon: "🧠" },
    { path: "/resume", name: "Resume Checker", icon: "📄" },
    { path: "/jobs", name: "Job Portal", icon: "💼" }
  ];

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("email");
    navigate("/");
    setIsSidebarOpen(false);
  };

  const handleNavigation = (path) => {
    navigate(path);
    // Sidebar will close automatically via useEffect
  };

  return (
    <div className="layout-container">
      {/* Mobile Menu Button */}
      <button 
        className="mobile-menu-btn" 
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        aria-label="Toggle menu"
      >
        {isSidebarOpen ? "✕" : "☰"}
      </button>
      
      {/* Overlay */}
      <div 
        className={`sidebar-overlay ${!isSidebarOpen ? 'hidden' : ''}`} 
        onClick={() => setIsSidebarOpen(false)}
      ></div>
      
      {/* Sidebar */}
      <div className={`layout-sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <div className="layout-sidebar-header">
          <h2>AI Placement</h2>
          <p>Copilot</p>
        </div>
        
        <div className="layout-nav">
          {menuItems.map((item) => (
            <button
              key={item.path}
              className={`layout-nav-item ${location.pathname === item.path ? "active" : ""}`}
              onClick={() => handleNavigation(item.path)}
            >
              <span className="layout-nav-icon">{item.icon}</span>
              <span>{item.name}</span>
            </button>
          ))}
        </div>
        
        <button className="layout-logout-btn" onClick={handleLogout}>
          <span className="layout-nav-icon">🚪</span>
          <span>Logout</span>
        </button>
      </div>
      
      {/* Main Content */}
      <div className="layout-main">
        {children}
      </div>
    </div>
  );
}

export default Layout;