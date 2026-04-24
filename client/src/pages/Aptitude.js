import React, { useState } from "react";
import Layout from "../components/Layout";

function Aptitude() {
  const [selectedCategory, setSelectedCategory] = useState("quantitative");

  const topicsByCategory = {
    quantitative: [
      { name: "Percentages", difficulty: "Easy", questions: 25 },
      { name: "Profit & Loss", difficulty: "Medium", questions: 30 },
      { name: "Ratio & Proportion", difficulty: "Medium", questions: 28 },
      { name: "Time & Work", difficulty: "Hard", questions: 35 },
      { name: "Time, Speed & Distance", difficulty: "Hard", questions: 32 },
      { name: "Number Series", difficulty: "Medium", questions: 20 },
      { name: "Averages", difficulty: "Easy", questions: 22 },
      { name: "Simple Interest", difficulty: "Easy", questions: 18 },
      { name: "Compound Interest", difficulty: "Medium", questions: 24 },
    ],
    reasoning: [
      { name: "Blood Relations", difficulty: "Medium", questions: 20 },
      { name: "Coding-Decoding", difficulty: "Easy", questions: 18 },
      { name: "Seating Arrangement", difficulty: "Hard", questions: 25 },
      { name: "Syllogism", difficulty: "Medium", questions: 22 },
      { name: "Direction Sense", difficulty: "Easy", questions: 16 },
      { name: "Number Series", difficulty: "Medium", questions: 20 },
      { name: "Analogies", difficulty: "Easy", questions: 15 },
      { name: "Classification", difficulty: "Easy", questions: 14 },
    ],
    verbal: [
      { name: "Synonyms & Antonyms", difficulty: "Medium", questions: 30 },
      { name: "Sentence Correction", difficulty: "Hard", questions: 25 },
      { name: "Reading Comprehension", difficulty: "Hard", questions: 20 },
      { name: "Fill in the Blanks", difficulty: "Easy", questions: 28 },
      { name: "Para Jumbles", difficulty: "Medium", questions: 18 },
      { name: "Idioms & Phrases", difficulty: "Medium", questions: 22 },
      { name: "Active/Passive Voice", difficulty: "Easy", questions: 20 },
      { name: "Direct/Indirect Speech", difficulty: "Medium", questions: 20 },
    ]
  };

  const getStartedTopics = [
    "Percentages", "Profit & Loss", "Ratio & Proportion", "Time & Work",
    "Time Speed Distance", "Number Series", "Blood Relations",
    "Coding-Decoding", "Seating Arrangement", "Verbal English"
  ];

  const handlePractice = () => {
    window.open("https://www.indiabix.com", "_blank");
  };

  return (
    <Layout>
      <div style={{ 
        maxWidth: "1400px", 
        margin: "0 auto",
        paddingBottom: "40px"
      }}>
        
        {/* Hero Section */}
        <div style={{
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          borderRadius: "20px",
          padding: "40px",
          marginBottom: "30px",
          color: "white",
          textAlign: "center"
        }}>
          <h2 style={{ fontSize: "32px", marginBottom: "15px" }}>🎯 Master Aptitude for Placements</h2>
          <p style={{ fontSize: "18px", opacity: 0.95, marginBottom: "25px" }}>
            Practice with IndiaBix's best resources • Quantitative • Reasoning • Verbal
          </p>
          <a 
            href="https://www.indiabix.com" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{
              display: "inline-block",
              padding: "14px 35px",
              background: "white",
              color: "#667eea",
              textDecoration: "none",
              borderRadius: "50px",
              fontWeight: "bold",
              fontSize: "16px",
              transition: "transform 0.3s, box-shadow 0.3s",
              boxShadow: "0 4px 15px rgba(0,0,0,0.2)"
            }}
          >
            🌐 Visit IndiaBix Now
          </a>
          <p style={{ fontSize: "14px", marginTop: "15px", opacity: 0.85 }}>
            Free explanations for all questions • 10,000+ practice questions
          </p>
        </div>

        {/* Daily 30-Min Plan */}
        <div style={{
          background: "linear-gradient(135deg, #fff3cd 0%, #ffeaa7 100%)",
          borderRadius: "20px",
          marginBottom: "30px",
          padding: "25px"
        }}>
          <h3 style={{ color: "#856404", marginBottom: "20px", fontSize: "24px", display: "flex", alignItems: "center", gap: "10px" }}>
            <span>📅</span> Daily 30-Min Practice Plan
            <span style={{ fontSize: "14px", background: "#f39c12", color: "white", padding: "4px 12px", borderRadius: "20px" }}>
              Recommended
            </span>
          </h3>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "20px"
          }}>
            <div style={{ textAlign: "center", padding: "15px", background: "white", borderRadius: "12px" }}>
              <div style={{ fontSize: "32px" }}>📖</div>
              <div><strong style={{ fontSize: "18px" }}>15 min</strong></div>
              <div style={{ color: "#666" }}>Concepts Review</div>
            </div>
            <div style={{ textAlign: "center", padding: "15px", background: "white", borderRadius: "12px" }}>
              <div style={{ fontSize: "32px" }}>⏱️</div>
              <div><strong style={{ fontSize: "18px" }}>10 min</strong></div>
              <div style={{ color: "#666" }}>Timed Questions</div>
            </div>
            <div style={{ textAlign: "center", padding: "15px", background: "white", borderRadius: "12px" }}>
              <div style={{ fontSize: "32px" }}>📝</div>
              <div><strong style={{ fontSize: "18px" }}>5 min</strong></div>
              <div style={{ color: "#666" }}>Mistakes Review</div>
            </div>
          </div>
        </div>

        {/* Best Topics */}
        <div style={{
          background: "white",
          borderRadius: "20px",
          marginBottom: "30px",
          padding: "25px",
          boxShadow: "0 2px 8px rgba(0,0,0,0.08)"
        }}>
          <h3 style={{ marginBottom: "20px", fontSize: "24px", display: "flex", alignItems: "center", gap: "10px" }}>
            <span>🎯</span> Best Topics to Learn First
            <span style={{ fontSize: "14px", background: "#28a745", color: "white", padding: "4px 12px", borderRadius: "20px" }}>
              For Placements
            </span>
          </h3>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
            gap: "12px"
          }}>
            {getStartedTopics.map((topic, index) => (
              <div key={index} style={{
                padding: "12px",
                background: "linear-gradient(135deg, #e3f2fd 0%, #bbdef5 100%)",
                borderRadius: "10px",
                textAlign: "center",
                fontWeight: "600",
                color: "#1565c0"
              }}>
                {topic}
              </div>
            ))}
          </div>
        </div>

        {/* Category Tabs */}
        <div style={{
          display: "flex",
          gap: "15px",
          marginBottom: "25px",
          borderBottom: "3px solid #e0e0e0",
          flexWrap: "wrap"
        }}>
          {[
            { id: "quantitative", name: "📊 Quantitative" },
            { id: "reasoning", name: "🧩 Logical Reasoning" },
            { id: "verbal", name: "📖 Verbal English" }
          ].map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              style={{
                padding: "12px 28px",
                background: selectedCategory === category.id ? "#0d6efd" : "transparent",
                color: selectedCategory === category.id ? "white" : "#555",
                border: "none",
                borderRadius: "12px 12px 0 0",
                cursor: "pointer",
                fontWeight: "600",
                fontSize: "16px",
                transition: "all 0.3s",
                borderBottom: selectedCategory === category.id ? "3px solid #0d6efd" : "3px solid transparent"
              }}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Topics Grid - FULL LIST */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
          gap: "25px",
          marginBottom: "40px"
        }}>
          {topicsByCategory[selectedCategory].map((topic, index) => (
            <div key={index} style={{
              background: "white",
              borderRadius: "16px",
              padding: "20px",
              transition: "transform 0.3s, box-shadow 0.3s",
              boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
              cursor: "pointer"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-5px)";
              e.currentTarget.style.boxShadow = "0 8px 25px rgba(0,0,0,0.15)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,0,0,0.08)";
            }}>
              <div style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "15px"
              }}>
                <h4 style={{ margin: 0, color: "#333", fontSize: "20px", fontWeight: "600" }}>{topic.name}</h4>
                <span style={{
                  padding: "5px 12px",
                  borderRadius: "20px",
                  fontSize: "12px",
                  fontWeight: "bold",
                  background: topic.difficulty === "Easy" ? "#d4edda" : 
                               topic.difficulty === "Medium" ? "#fff3cd" : "#f8d7da",
                  color: topic.difficulty === "Easy" ? "#155724" : 
                         topic.difficulty === "Medium" ? "#856404" : "#721c24"
                }}>
                  {topic.difficulty === "Easy" && "🟢 Easy"}
                  {topic.difficulty === "Medium" && "🟡 Medium"}
                  {topic.difficulty === "Hard" && "🔴 Hard"}
                </span>
              </div>
              
              <p style={{ color: "#666", fontSize: "14px", marginBottom: "20px" }}>
                📚 {topic.questions} practice questions available
              </p>
              
              <button
                onClick={handlePractice}
                style={{
                  width: "100%",
                  padding: "12px",
                  background: "linear-gradient(135deg, #0d6efd 0%, #0b5ed7 100%)",
                  color: "white",
                  border: "none",
                  borderRadius: "10px",
                  cursor: "pointer",
                  fontWeight: "600",
                  fontSize: "15px"
                }}
              >
                Start Practice → 
              </button>
            </div>
          ))}
        </div>

        {/* Resources Section */}
        <div style={{
          background: "white",
          borderRadius: "20px",
          padding: "25px",
          marginBottom: "25px",
          boxShadow: "0 2px 8px rgba(0,0,0,0.08)"
        }}>
          <h3 style={{ marginBottom: "20px", fontSize: "24px" }}>📚 Recommended Resources</h3>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "25px"
          }}>
            <div style={{ padding: "15px", background: "#f8f9fa", borderRadius: "10px" }}>
              <h4 style={{ marginBottom: "15px", color: "#667eea" }}>📖 Books</h4>
              <ul style={{ lineHeight: "2", margin: 0, paddingLeft: "20px" }}>
                <li>Quantitative Aptitude - R.S. Aggarwal</li>
                <li>Logical Reasoning - R.S. Aggarwal</li>
                <li>Verbal Ability - Wren & Martin</li>
              </ul>
            </div>
            <div style={{ padding: "15px", background: "#f8f9fa", borderRadius: "10px" }}>
              <h4 style={{ marginBottom: "15px", color: "#667eea" }}>🌐 Websites</h4>
              <ul style={{ lineHeight: "2", margin: 0, paddingLeft: "20px" }}>
                <li><a href="https://www.indiabix.com" target="_blank" rel="noopener noreferrer">IndiaBix</a></li>
                <li><a href="https://www.geeksforgeeks.org" target="_blank" rel="noopener noreferrer">GeeksforGeeks</a></li>
                <li><a href="https://www.careerride.com" target="_blank" rel="noopener noreferrer">CareerRide</a></li>
              </ul>
            </div>
            <div style={{ padding: "15px", background: "#f8f9fa", borderRadius: "10px" }}>
              <h4 style={{ marginBottom: "15px", color: "#667eea" }}>📱 Apps</h4>
              <ul style={{ lineHeight: "2", margin: 0, paddingLeft: "20px" }}>
                <li>IndiaBix App</li>
                <li>GradeUp</li>
                <li>Testbook</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Tips Section */}
        <div style={{
          background: "linear-gradient(135deg, #d1ecf1 0%, #b8e6ed 100%)",
          borderRadius: "20px",
          padding: "25px",
          marginBottom: "30px"
        }}>
          <h3 style={{ marginBottom: "20px", fontSize: "24px", display: "flex", alignItems: "center", gap: "10px" }}>
            <span>💡</span> Pro Tips for Placement Aptitude
          </h3>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "15px"
          }}>
            <ul style={{ lineHeight: "1.8", margin: 0, paddingLeft: "20px" }}>
              <li>✅ Practice mental calculation tricks</li>
              <li>✅ Focus on accuracy before speed</li>
              <li>✅ Analyze your mistakes after each test</li>
            </ul>
            <ul style={{ lineHeight: "1.8", margin: 0, paddingLeft: "20px" }}>
              <li>✅ Learn shortcut formulas</li>
              <li>✅ Take timed tests regularly</li>
              <li>✅ Revise concepts weekly</li>
            </ul>
          </div>
        </div>

      </div>
    </Layout>
  );
}

export default Aptitude;