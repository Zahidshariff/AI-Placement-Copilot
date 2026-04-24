import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../components/Layout";

function Dashboard() {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");

  useEffect(() => {
    // Try to get username from localStorage
    let storedUsername = localStorage.getItem("username");
    
    console.log("Raw username from storage:", storedUsername);
    
    // Clean up username if needed
    if (storedUsername && storedUsername !== "undefined" && storedUsername !== "null") {
      setUserName(storedUsername);
    } else {
      // Fallback: try to get email and extract name
      const email = localStorage.getItem("email");
      if (email && email !== "undefined") {
        const emailName = email.split("@")[0];
        setUserName(emailName);
      } else {
        setUserName("Guest");
      }
    }
  }, []);

  // If username changes, update display
  useEffect(() => {
    console.log("Current username state:", userName);
  }, [userName]);

  const recommendations = [
    {
      id: 1,
      step: "Step 1: DSA Mastery",
      icon: "📚",
      color: "#667eea",
      timeline: "9 Months",
      progress: "65% Complete",
      tasks: [
        "Learn Programming Fundamentals",
        "Master Core Data Structures",
        "Practice Trees & Graphs",
        "Dynamic Programming",
        "Mock Interviews"
      ],
      path: "/progress"
    },
    {
      id: 2,
      step: "Step 2: Aptitude Preparation",
      icon: "🧠",
      color: "#4facfe",
      timeline: "2 Months",
      progress: "Week 2 of 8",
      tasks: [
        "Quantitative Aptitude",
        "Logical Reasoning",
        "Verbal English",
        "Mock Tests"
      ],
      path: "/aptitude"
    },
    {
      id: 3,
      step: "Step 3: Resume Optimization",
      icon: "📄",
      color: "#f093fb",
      timeline: "1 Week",
      progress: "Optimize Now",
      tasks: [
        "ATS-friendly keywords",
        "Quantify achievements",
        "Add projects",
        "Add certifications"
      ],
      path: "/resume"
    },
    {
      id: 4,
      step: "Step 4: Job Application",
      icon: "💼",
      color: "#43e97b",
      timeline: "Ongoing",
      progress: "Start Applying",
      tasks: [
        "Apply to jobs daily",
        "Connect with recruiters",
        "Follow up applications",
        "Prepare for interviews"
      ],
      path: "/jobs"
    }
  ];

  const quickActions = [
    { icon: "📚", title: "Continue DSA", color: "#667eea", path: "/progress", description: "Solve today's 5 problems" },
    { icon: "🧠", title: "Aptitude Practice", color: "#4facfe", path: "/aptitude", description: "Complete daily test" },
    { icon: "📄", title: "Fix Resume", color: "#f093fb", path: "/resume", description: "Improve ATS score" },
    { icon: "💼", title: "Apply Jobs", color: "#43e97b", path: "/jobs", description: "Apply to 10 jobs today" }
  ];

  return (
    <Layout>
      <div style={{ maxWidth: "1300px", margin: "0 auto", width: "100%" }}>
        {/* Welcome Header */}
        <div style={{
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          borderRadius: "24px",
          padding: "clamp(30px, 6vw, 50px)",
          marginBottom: "clamp(25px, 5vw, 40px)",
          boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
          textAlign: "center"
        }}>
          <h1 style={{ 
            fontSize: "clamp(32px, 7vw, 48px)", 
            color: "white", 
            marginBottom: "10px",
            fontWeight: "bold"
          }}>
            Hi {userName || "Buddy"}! 👋
          </h1>
          <p style={{ 
            color: "rgba(255,255,255,0.95)", 
            fontSize: "clamp(16px, 4vw, 20px)",
            marginTop: "5px"
          }}>
            Welcome & Enjoy 🎉
          </p>
        </div>

        {/* Your Placement Roadmap */}
        <div style={{ marginBottom: "clamp(30px, 6vw, 40px)" }}>
          <h2 style={{ 
            fontSize: "clamp(20px, 5vw, 24px)", 
            marginBottom: "clamp(15px, 4vw, 20px)",
            color: "#1e293b"
          }}>
            🎯 Your Placement Roadmap
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "clamp(15px, 4vw, 20px)" }}>
            {recommendations.map((rec) => (
              <div key={rec.id} style={{ display: "flex", gap: "clamp(10px, 3vw, 20px)" }}>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "clamp(30px, 8vw, 40px)" }}>
                  <div style={{ 
                    width: "clamp(30px, 8vw, 36px)", 
                    height: "clamp(30px, 8vw, 36px)", 
                    borderRadius: "50%", 
                    background: rec.color, 
                    display: "flex", 
                    alignItems: "center", 
                    justifyContent: "center", 
                    color: "white", 
                    fontWeight: "bold",
                    fontSize: "clamp(14px, 4vw, 16px)"
                  }}>
                    {rec.id}
                  </div>
                  {rec.id < recommendations.length && <div style={{ width: "2px", flex: 1, background: "#cbd5e1", margin: "8px 0" }}></div>}
                </div>
                <div style={{ 
                  flex: 1, 
                  background: "white", 
                  borderRadius: "clamp(16px, 4vw, 20px)", 
                  padding: "clamp(15px, 4vw, 20px)", 
                  borderTop: `3px solid ${rec.color}`, 
                  boxShadow: "0 4px 12px rgba(0,0,0,0.05)" 
                }}>
                  <div style={{ display: "flex", gap: "clamp(10px, 3vw, 15px)", marginBottom: "20px", flexWrap: "wrap" }}>
                    <div style={{ 
                      width: "clamp(45px, 10vw, 55px)", 
                      height: "clamp(45px, 10vw, 55px)", 
                      fontSize: "clamp(24px, 6vw, 28px)", 
                      background: `${rec.color}20`, 
                      borderRadius: "15px", 
                      display: "flex", 
                      alignItems: "center", 
                      justifyContent: "center" 
                    }}>
                      {rec.icon}
                    </div>
                    <div>
                      <h3 style={{ 
                        fontSize: "clamp(16px, 4.5vw, 20px)", 
                        marginBottom: "8px",
                        color: rec.color
                      }}>
                        {rec.step}
                      </h3>
                      <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
                        <span style={{ fontSize: "clamp(11px, 3vw, 12px)", padding: "4px 12px", borderRadius: "20px", background: "#f1f5f9", color: "#475569" }}>
                          ⏱️ {rec.timeline}
                        </span>
                        <span style={{ fontSize: "clamp(11px, 3vw, 12px)", padding: "4px 12px", borderRadius: "20px", background: `${rec.color}15`, color: rec.color }}>
                          📍 {rec.progress}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div style={{ 
                    display: "grid", 
                    gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 200px), 1fr))", 
                    gap: "10px", 
                    marginBottom: "20px" 
                  }}>
                    {rec.tasks.map((task, idx) => (
                      <div key={idx} style={{ 
                        display: "flex", 
                        alignItems: "center", 
                        gap: "8px", 
                        padding: "8px 12px", 
                        background: "#f8fafc", 
                        borderRadius: "10px", 
                        fontSize: "clamp(12px, 3.5vw, 13px)" 
                      }}>
                        <span style={{ color: "#10b981" }}>✓</span> {task}
                      </div>
                    ))}
                  </div>
                  <button 
                    onClick={() => navigate(rec.path)} 
                    style={{ 
                      padding: "clamp(8px, 3vw, 10px) clamp(15px, 4vw, 20px)", 
                      background: rec.color, 
                      color: "white", 
                      border: "none", 
                      borderRadius: "12px", 
                      cursor: "pointer", 
                      fontWeight: "500",
                      fontSize: "clamp(13px, 3.5vw, 14px)",
                      width: "100%",
                      transition: "all 0.3s"
                    }}
                    onMouseEnter={(e) => e.target.style.opacity = "0.9"}
                    onMouseLeave={(e) => e.target.style.opacity = "1"}
                  >
                    Continue {rec.step.split(":")[1] || rec.step} →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div style={{ marginBottom: "clamp(30px, 6vw, 40px)" }}>
          <h2 style={{ 
            fontSize: "clamp(20px, 5vw, 24px)", 
            marginBottom: "clamp(15px, 4vw, 20px)",
            color: "#1e293b"
          }}>
            ⚡ Quick Actions
          </h2>
          <div style={{ 
            display: "grid", 
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 250px), 1fr))", 
            gap: "clamp(15px, 4vw, 20px)" 
          }}>
            {quickActions.map((action, index) => (
              <div key={index} onClick={() => navigate(action.path)} style={{ 
                background: "white", 
                padding: "clamp(15px, 4vw, 20px)", 
                borderRadius: "20px", 
                display: "flex", 
                alignItems: "center", 
                gap: "15px", 
                cursor: "pointer", 
                transition: "all 0.3s", 
                borderBottom: `3px solid ${action.color}`, 
                boxShadow: "0 2px 8px rgba(0,0,0,0.05)" 
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-5px)";
                e.currentTarget.style.boxShadow = "0 8px 25px rgba(0,0,0,0.1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,0,0,0.05)";
              }}>
                <div style={{ 
                  width: "clamp(45px, 10vw, 50px)", 
                  height: "clamp(45px, 10vw, 50px)", 
                  fontSize: "clamp(24px, 6vw, 28px)", 
                  background: `${action.color}20`, 
                  borderRadius: "14px", 
                  display: "flex", 
                  alignItems: "center", 
                  justifyContent: "center" 
                }}>
                  {action.icon}
                </div>
                <div style={{ flex: 1 }}>
                  <h4 style={{ fontSize: "clamp(14px, 4vw, 16px)", marginBottom: "5px" }}>{action.title}</h4>
                  <p style={{ fontSize: "clamp(11px, 3vw, 12px)", color: "#64748b" }}>{action.description}</p>
                </div>
                <div style={{ fontSize: "20px", color: "#94a3b8" }}>→</div>
              </div>
            ))}
          </div>
        </div>

        {/* Daily Motivation */}
        <div style={{ 
          background: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)", 
          borderRadius: "24px", 
          padding: "clamp(25px, 5vw, 35px)", 
          textAlign: "center",
          color: "white"
        }}>
          <div style={{ fontSize: "clamp(40px, 10vw, 56px)", marginBottom: "15px" }}>🌟</div>
          <h3 style={{ 
            fontSize: "clamp(18px, 4.5vw, 24px)", 
            marginBottom: "10px",
            fontWeight: "600"
          }}>
            Stay Consistent, Stay Motivated!
          </h3>
          <p style={{ 
            fontSize: "clamp(13px, 3.5vw, 16px)", 
            opacity: 0.95,
            maxWidth: "600px",
            margin: "0 auto"
          }}>
            Small daily progress leads to big results. Keep learning and growing! 🚀
          </p>
        </div>

      </div>
    </Layout>
  );
}

export default Dashboard;