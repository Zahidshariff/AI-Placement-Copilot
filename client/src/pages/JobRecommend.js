import React from "react";
import Layout from "../components/Layout";

function JobRecommend() {
  const jobPortals = [
    {
      id: 1,
      name: "LinkedIn",
      description: "Best overall for tech jobs, referrals, recruiter visibility, and direct company hiring.",
      features: ["Easy Apply", "Connect with recruiters", "Follow companies", "Job alerts", "Salary insights"],
      link: "https://www.linkedin.com/jobs/",
      color: "#0A66C2",
      icon: "🔗",
      bgLight: "#0A66C210"
    },
    {
      id: 2,
      name: "Naukri.com",
      description: "Very strong for fresher and entry-level hiring in India. Good for service companies and mid-size firms.",
      features: ["Frequently used by recruiters", "Entry-level focused", "Service companies", "Resume database", "Job recommendations"],
      link: "https://www.naukri.com/",
      color: "#B22234",
      icon: "📄",
      bgLight: "#B2223410"
    },
    {
      id: 3,
      name: "Wellfound (AngelList)",
      description: "Best for startups, product companies, remote roles, direct founder/hiring manager access.",
      features: ["Startup focus", "Remote roles", "Direct access to founders", "Tech-focused", "Quick responses"],
      link: "https://wellfound.com/",
      color: "#000000",
      icon: "🚀",
      bgLight: "#00000010"
    },
    {
      id: 4,
      name: "Internshala",
      description: "Excellent for internships + fresher developer roles + training-based hiring.",
      features: ["Internship focused", "Fresher roles", "Training programs", "Student friendly", "Skill tests"],
      link: "https://internshala.com/jobs/",
      color: "#F25A29",
      icon: "🎓",
      bgLight: "#F25A2910"
    },
    {
      id: 5,
      name: "Foundit (Monster)",
      description: "Good for IT support, software, analyst, QA, and fresher corporate roles in India.",
      features: ["IT support roles", "QA positions", "Corporate fresher roles", "Resume scoring", "Career resources"],
      link: "https://www.foundit.in/",
      color: "#4F46E5",
      icon: "🔍",
      bgLight: "#4F46E510"
    },
    {
      id: 6,
      name: "Indeed",
      description: "Global job board with millions of listings. Great for company reviews and salary comparisons.",
      features: ["Company reviews", "Salary comparisons", "Easy apply", "Job alerts", "Remote jobs"],
      link: "https://www.indeed.com/",
      color: "#2164F4",
      icon: "🎯",
      bgLight: "#2164F410"
    },
    {
      id: 7,
      name: "HackerRank Jobs",
      description: "Best for developer roles with coding tests. Many tech companies hire directly.",
      features: ["Coding challenges", "Developer focused", "Skill certification", "Company sponsored", "Remote friendly"],
      link: "https://www.hackerrank.com/jobs",
      color: "#00EA64",
      icon: "💻",
      bgLight: "#00EA6410"
    },
    {
      id: 8,
      name: "Cutshort",
      description: "Indian startup-focused platform. Great for product-based company jobs.",
      features: ["Startup focus", "Tech assessments", "Company culture fit", "Referral system", "Fast hiring"],
      link: "https://cutshort.io/",
      color: "#FF6B6B",
      icon: "✂️",
      bgLight: "#FF6B6B1010"
    }
  ];

  const recommendedJobs = [
    { 
      title: "Frontend Developer", 
      skills: ["React", "HTML", "CSS", "JavaScript", "Tailwind"],
      salary: "₹4-8 LPA",
      experience: "Fresher",
      type: "Full-time",
      openings: 120,
      level: "Entry"
    },
    { 
      title: "React Intern", 
      skills: ["React", "Redux", "JavaScript", "Git"],
      salary: "₹15-25k/month",
      experience: "Internship",
      type: "Internship",
      openings: 85,
      level: "Intern"
    },
    { 
      title: "MERN Stack Developer", 
      skills: ["MongoDB", "Express", "React", "Node.js", "Git"],
      salary: "₹5-10 LPA",
      experience: "0-1 year",
      type: "Full-time",
      openings: 95,
      level: "Entry"
    },
    { 
      title: "Software Engineer", 
      skills: ["DSA", "Java/Python", "System Design", "SQL"],
      salary: "₹6-12 LPA",
      experience: "Fresher",
      type: "Full-time",
      openings: 200,
      level: "Entry"
    },
    { 
      title: "Full Stack Developer", 
      skills: ["React", "Node.js", "SQL", "Git", "AWS"],
      salary: "₹5-11 LPA",
      experience: "0-1 year",
      type: "Full-time",
      openings: 150,
      level: "Entry"
    },
    { 
      title: "UI Developer", 
      skills: ["HTML", "CSS", "JavaScript", "Tailwind", "Figma"],
      salary: "₹4-7 LPA",
      experience: "Fresher",
      type: "Full-time",
      openings: 75,
      level: "Entry"
    }
  ];

  const jobSearchTips = [
    { tip: "Customize resume for each job application", icon: "📝", color: "#FF6B6B" },
    { tip: "Apply within 24 hours of job posting", icon: "⏰", color: "#4ECDC4" },
    { tip: "Follow up after 5-7 days of application", icon: "📧", color: "#45B7D1" },
    { tip: "Connect with recruiters on LinkedIn", icon: "🤝", color: "#96CEB4" },
    { tip: "Build a strong GitHub portfolio", icon: "💻", color: "#FFEAA7" },
    { tip: "Practice aptitude & DSA regularly", icon: "🧠", color: "#DDA0DD" }
  ];

  const handlePortalClick = (link) => {
    window.open(link, "_blank");
  };

  const handleJobClick = (jobTitle) => {
    const searchUrl = `https://www.linkedin.com/jobs/search/?keywords=${encodeURIComponent(jobTitle)}&location=India`;
    window.open(searchUrl, "_blank");
  };

  return (
    <Layout>
      <div style={{ maxWidth: "1400px", margin: "0 auto", paddingBottom: "40px" }}>
        
        {/* Hero Section - Updated without salary */}
        <div style={{
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          borderRadius: "28px",
          padding: "clamp(40px, 8vw, 60px)",
          marginBottom: "40px",
          color: "white",
          textAlign: "center"
        }}>
          <h1 style={{ 
            fontSize: "clamp(32px, 6vw, 48px)", 
            marginBottom: "15px",
            fontWeight: "bold"
          }}>
            🎯 Find Your Dream Job
          </h1>
          <p style={{ 
            fontSize: "clamp(16px, 4vw, 18px)", 
            opacity: 0.95, 
            marginBottom: "30px",
            maxWidth: "600px",
            margin: "0 auto 30px auto"
          }}>
            Connect with top recruiters, apply to thousands of jobs, and kickstart your career journey
          </p>
          
          {/* Stats Section - Removed salary, added more relevant stats */}
          <div style={{ 
            display: "flex", 
            gap: "clamp(15px, 4vw, 30px)", 
            justifyContent: "center", 
            flexWrap: "wrap",
            marginTop: "20px"
          }}>
            <div style={{ 
              background: "rgba(255,255,255,0.15)", 
              padding: "12px 24px", 
              borderRadius: "50px",
              backdropFilter: "blur(10px)"
            }}>
              📊 50,000+ Active Jobs
            </div>
            <div style={{ 
              background: "rgba(255,255,255,0.15)", 
              padding: "12px 24px", 
              borderRadius: "50px",
              backdropFilter: "blur(10px)"
            }}>
              🏢 2,000+ Hiring Companies
            </div>
            <div style={{ 
              background: "rgba(255,255,255,0.15)", 
              padding: "12px 24px", 
              borderRadius: "50px",
              backdropFilter: "blur(10px)"
            }}>
              🚀 10,000+ Daily Updates
            </div>
          </div>
        </div>

        {/* Job Portals Grid */}
        <h2 style={{ 
          fontSize: "clamp(24px, 5vw, 28px)", 
          marginBottom: "25px", 
          color: "#1e293b",
          display: "flex",
          alignItems: "center",
          gap: "10px",
          flexWrap: "wrap"
        }}>
          <span>📌</span> Top Job Portals for Freshers
          <span style={{ 
            fontSize: "14px", 
            background: "#28a745", 
            color: "white", 
            padding: "4px 12px", 
            borderRadius: "20px" 
          }}>
            Trusted Platforms
          </span>
        </h2>
        
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 320px), 1fr))",
          gap: "25px",
          marginBottom: "50px"
        }}>
          {jobPortals.map((portal) => (
            <div 
              key={portal.id} 
              style={{
                background: "white",
                borderRadius: "20px",
                padding: "25px",
                transition: "transform 0.3s, box-shadow 0.3s",
                cursor: "pointer",
                borderTop: `4px solid ${portal.color}`,
                boxShadow: "0 2px 8px rgba(0,0,0,0.08)"
              }}
              onClick={() => handlePortalClick(portal.link)}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-5px)";
                e.currentTarget.style.boxShadow = "0 8px 25px rgba(0,0,0,0.15)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,0,0,0.08)";
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "15px", marginBottom: "15px" }}>
                <div style={{
                  fontSize: "48px",
                  background: portal.bgLight,
                  width: "65px",
                  height: "65px",
                  borderRadius: "15px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center"
                }}>
                  {portal.icon}
                </div>
                <div>
                  <h3 style={{ margin: 0, color: portal.color, fontSize: "clamp(18px, 4vw, 22px)" }}>{portal.name}</h3>
                  <p style={{ margin: "5px 0 0", fontSize: "12px", color: "#666" }}>Click to visit →</p>
                </div>
              </div>
              
              <p style={{ color: "#555", lineHeight: "1.6", marginBottom: "15px", fontSize: "14px" }}>
                {portal.description}
              </p>
              
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginTop: "10px" }}>
                {portal.features.slice(0, 3).map((feature, idx) => (
                  <span key={idx} style={{
                    background: `${portal.color}15`,
                    color: portal.color,
                    padding: "4px 12px",
                    borderRadius: "20px",
                    fontSize: "11px",
                    fontWeight: "500"
                  }}>
                    ✓ {feature}
                  </span>
                ))}
                {portal.features.length > 3 && (
                  <span style={{ fontSize: "11px", color: "#999" }}>+{portal.features.length - 3} more</span>
                )}
              </div>
              
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handlePortalClick(portal.link);
                }}
                style={{
                  marginTop: "20px",
                  width: "100%",
                  padding: "12px",
                  background: portal.color,
                  color: "white",
                  border: "none",
                  borderRadius: "12px",
                  cursor: "pointer",
                  fontWeight: "600",
                  fontSize: "14px",
                  transition: "opacity 0.3s"
                }}
                onMouseEnter={(e) => e.target.style.opacity = "0.9"}
                onMouseLeave={(e) => e.target.style.opacity = "1"}
              >
                Visit {portal.name} →
              </button>
            </div>
          ))}
        </div>

        {/* Rest of your component remains the same */}
        {/* Trending Jobs Section */}
        <h2 style={{ 
          fontSize: "clamp(24px, 5vw, 28px)", 
          marginBottom: "25px", 
          color: "#1e293b",
          display: "flex",
          alignItems: "center",
          gap: "10px",
          flexWrap: "wrap"
        }}>
          🔥 Trending Jobs for Freshers
          <span style={{ 
            fontSize: "14px", 
            background: "#dc3545", 
            color: "white", 
            padding: "4px 12px", 
            borderRadius: "20px" 
          }}>
            Apply Now
          </span>
        </h2>
        
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 350px), 1fr))",
          gap: "25px",
          marginBottom: "50px"
        }}>
          {recommendedJobs.map((job, index) => (
            <div 
              key={index} 
              style={{
                background: "white",
                borderRadius: "20px",
                padding: "25px",
                transition: "transform 0.3s, box-shadow 0.3s",
                cursor: "pointer",
                boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
                border: "1px solid #e0e0e0"
              }}
              onClick={() => handleJobClick(job.title)}
              onMouseEnter={(e) => e.currentTarget.style.transform = "translateY(-5px)"}
              onMouseLeave={(e) => e.currentTarget.style.transform = "translateY(0)"}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "start", marginBottom: "15px", flexWrap: "wrap", gap: "10px" }}>
                <h3 style={{ margin: 0, fontSize: "clamp(18px, 4vw, 20px)", color: "#1e293b" }}>{job.title}</h3>
                <span style={{
                  background: job.level === "Intern" ? "#ffc107" : "#28a745",
                  color: job.level === "Intern" ? "#000" : "white",
                  padding: "4px 12px",
                  borderRadius: "20px",
                  fontSize: "11px",
                  fontWeight: "bold"
                }}>
                  {job.level}
                </span>
              </div>
              
              <div style={{ display: "flex", gap: "15px", marginBottom: "15px", flexWrap: "wrap" }}>
                <span style={{ fontSize: "13px", color: "#666" }}>💰 {job.salary}</span>
                <span style={{ fontSize: "13px", color: "#666" }}>📅 {job.experience}</span>
                <span style={{ fontSize: "13px", color: "#666" }}>⏰ {job.type}</span>
                <span style={{ fontSize: "13px", color: "#0d6efd" }}>🎯 {job.openings}+ openings</span>
              </div>
              
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "20px" }}>
                {job.skills.map((skill, idx) => (
                  <span key={idx} style={{
                    background: "#e3f2fd",
                    color: "#0d6efd",
                    padding: "5px 12px",
                    borderRadius: "20px",
                    fontSize: "12px",
                    fontWeight: "500"
                  }}>
                    {skill}
                  </span>
                ))}
              </div>
              
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleJobClick(job.title);
                }}
                style={{
                  width: "100%",
                  padding: "12px",
                  background: "#0d6efd",
                  color: "white",
                  border: "none",
                  borderRadius: "12px",
                  cursor: "pointer",
                  fontWeight: "600",
                  transition: "background 0.3s"
                }}
                onMouseEnter={(e) => e.target.style.background = "#0b5ed7"}
                onMouseLeave={(e) => e.target.style.background = "#0d6efd"}
              >
                Apply Now →
              </button>
            </div>
          ))}
        </div>

        {/* Pro Tips Section */}
        <div style={{
          background: "linear-gradient(135deg, #e3f2fd 0%, #bbdef5 100%)",
          borderRadius: "24px",
          padding: "clamp(30px, 6vw, 40px)",
          marginBottom: "30px"
        }}>
          <h2 style={{ 
            marginBottom: "25px", 
            fontSize: "clamp(22px, 5vw, 28px)", 
            display: "flex", 
            alignItems: "center", 
            gap: "10px",
            flexWrap: "wrap"
          }}>
            <span>💡</span> Pro Tips for Job Search Success
            <span style={{ 
              fontSize: "14px", 
              background: "#28a745", 
              color: "white", 
              padding: "4px 12px", 
              borderRadius: "20px" 
            }}>
              Must Follow
            </span>
          </h2>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 260px), 1fr))",
            gap: "15px"
          }}>
            {jobSearchTips.map((tip, idx) => (
              <div key={idx} style={{
                background: "white",
                padding: "15px 20px",
                borderRadius: "14px",
                display: "flex",
                alignItems: "center",
                gap: "12px",
                boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
                transition: "transform 0.2s",
                cursor: "pointer"
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = "translateX(5px)"}
              onMouseLeave={(e) => e.currentTarget.style.transform = "translateX(0)"}>
                <span style={{ fontSize: "clamp(28px, 6vw, 32px)" }}>{tip.icon}</span>
                <span style={{ fontSize: "clamp(13px, 3.5vw, 14px)", color: "#1e293b", fontWeight: "500" }}>{tip.tip}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Apply Section */}
        <div style={{
          background: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
          borderRadius: "24px",
          padding: "clamp(35px, 7vw, 50px)",
          textAlign: "center",
          color: "#1e293b"
        }}>
          <h2 style={{ 
            fontSize: "clamp(24px, 5vw, 32px)", 
            marginBottom: "15px",
            fontWeight: "bold"
          }}>
            🚀 Ready to Start Your Career?
          </h2>
          <p style={{ 
            fontSize: "clamp(14px, 3.5vw, 16px)", 
            marginBottom: "25px", 
            opacity: 0.9,
            maxWidth: "500px",
            margin: "0 auto 25px auto"
          }}>
            Create profiles on top portals, customize your resume, and start applying today!
          </p>
          <button
            onClick={() => window.open("https://www.linkedin.com/jobs/", "_blank")}
            style={{
              padding: "clamp(12px, 3.5vw, 14px) clamp(30px, 7vw, 40px)",
              background: "#1e293b",
              color: "white",
              border: "none",
              borderRadius: "50px",
              fontSize: "clamp(14px, 4vw, 16px)",
              fontWeight: "bold",
              cursor: "pointer",
              transition: "transform 0.3s"
            }}
            onMouseEnter={(e) => e.target.style.transform = "scale(1.05)"}
            onMouseLeave={(e) => e.target.style.transform = "scale(1)"}
          >
            Start Applying Now →
          </button>
        </div>

      </div>
    </Layout>
  );
}

export default JobRecommend;