import React, { useState } from "react";
import Layout from "../components/Layout";

function Progress() {
  const [selectedLanguage, setSelectedLanguage] = useState("java");
  const [selectedMonth, setSelectedMonth] = useState(1);
  const [activeTab, setActiveTab] = useState("roadmap");

  const languageLearningPaths = {
    java: { name: "Java", icon: "☕", color: "#f89820", bgGradient: "linear-gradient(135deg, #f89820 0%, #e07c1f 100%)" },
    python: { name: "Python", icon: "🐍", color: "#3776AB", bgGradient: "linear-gradient(135deg, #3776AB 0%, #2c5a82 100%)" },
    cpp: { name: "C++", icon: "⚡", color: "#00599C", bgGradient: "linear-gradient(135deg, #00599C 0%, #003d6b 100%)" }
  };

  const nineMonthsRoadmap = {
    java: [
      { month: 1, title: "Java Fundamentals", icon: "☕", color: "#f89820", topics: ["Week 1: Java syntax, Variables, Data Types", "Week 2: Control Flow, Loops", "Week 3: Arrays, Strings", "Week 4: OOP Basics"], weeklyPlan: [
        { week: 1, days: ["Day 1-2: JVM setup & Hello World", "Day 3-4: Variables & Data Types", "Day 5-6: Operators", "Day 7: Practice"] },
        { week: 2, days: ["Day 1-2: if-else", "Day 3-4: switch", "Day 5-6: Loops", "Day 7: Patterns"] },
        { week: 3, days: ["Day 1-2: 1D Arrays", "Day 3-4: 2D Arrays", "Day 5-6: Strings", "Day 7: Problems"] },
        { week: 4, days: ["Day 1-2: Classes", "Day 3-4: Objects", "Day 5-6: Methods", "Day 7: Project"] }
      ]},
      { month: 2, title: "Advanced Java", icon: "📊", color: "#f89820", topics: ["Week 1: Inheritance", "Week 2: Polymorphism", "Week 3: Collections", "Week 4: Complexity"], weeklyPlan: [
        { week: 1, days: ["Day 1-2: Inheritance", "Day 3-4: super keyword", "Day 5-6: Method Overriding", "Day 7: Practice"] },
        { week: 2, days: ["Day 1-2: Abstract Classes", "Day 3-4: Interfaces", "Day 5-6: Polymorphism", "Day 7: Problems"] },
        { week: 3, days: ["Day 1-2: Exception Handling", "Day 3-4: ArrayList", "Day 5-6: HashMap", "Day 7: Practice"] },
        { week: 4, days: ["Day 1-2: Big O", "Day 3-4: Time Complexity", "Day 5-6: Space Complexity", "Day 7: Analysis"] }
      ]}
    ],
    python: [
      { month: 1, title: "Python Fundamentals", icon: "🐍", color: "#3776AB", topics: ["Week 1: Python Basics", "Week 2: Control Flow", "Week 3: Data Structures", "Week 4: Functions & OOP"], weeklyPlan: [
        { week: 1, days: ["Day 1-2: Setup & Syntax", "Day 3-4: Variables", "Day 5-6: Data Types", "Day 7: Practice"] },
        { week: 2, days: ["Day 1-2: if-elif-else", "Day 3-4: for loops", "Day 5-6: while loops", "Day 7: Patterns"] },
        { week: 3, days: ["Day 1-2: Lists", "Day 3-4: Tuples", "Day 5-6: Dictionaries", "Day 7: Problems"] },
        { week: 4, days: ["Day 1-2: Functions", "Day 3-4: Lambda", "Day 5-6: Classes", "Day 7: Project"] }
      ]},
      { month: 2, title: "Advanced Python", icon: "📊", color: "#3776AB", topics: ["Week 1: OOP", "Week 2: Decorators", "Week 3: Modules", "Week 4: Complexity"], weeklyPlan: [
        { week: 1, days: ["Day 1-2: Inheritance", "Day 3-4: super()", "Day 5-6: Method Overriding", "Day 7: Practice"] },
        { week: 2, days: ["Day 1-2: Magic Methods", "Day 3-4: Decorators", "Day 5-6: Generators", "Day 7: Problems"] },
        { week: 3, days: ["Day 1-2: Modules", "Day 3-4: File I/O", "Day 5-6: CSV/JSON", "Day 7: Project"] },
        { week: 4, days: ["Day 1-2: Big O", "Day 3-4: Time Complexity", "Day 5-6: Space Complexity", "Day 7: Analysis"] }
      ]}
    ],
    cpp: [
      { month: 1, title: "C++ Fundamentals", icon: "⚡", color: "#00599C", topics: ["Week 1: C++ Basics", "Week 2: Control Flow", "Week 3: Arrays & Pointers", "Week 4: Functions & OOP"], weeklyPlan: [
        { week: 1, days: ["Day 1-2: Setup & Syntax", "Day 3-4: Variables", "Day 5-6: I/O Operations", "Day 7: Practice"] },
        { week: 2, days: ["Day 1-2: if-else", "Day 3-4: switch", "Day 5-6: Loops", "Day 7: Patterns"] },
        { week: 3, days: ["Day 1-2: 1D Arrays", "Day 3-4: 2D Arrays", "Day 5-6: Pointers", "Day 7: Problems"] },
        { week: 4, days: ["Day 1-2: Functions", "Day 3-4: Overloading", "Day 5-6: Classes", "Day 7: Project"] }
      ]},
      { month: 2, title: "Advanced C++", icon: "📊", color: "#00599C", topics: ["Week 1: OOP", "Week 2: Virtual Functions", "Week 3: STL", "Week 4: Complexity"], weeklyPlan: [
        { week: 1, days: ["Day 1-2: Inheritance", "Day 3-4: Multiple Inheritance", "Day 5-6: Constructors", "Day 7: Practice"] },
        { week: 2, days: ["Day 1-2: Virtual Functions", "Day 3-4: Pure Virtual", "Day 5-6: Abstract Classes", "Day 7: Problems"] },
        { week: 3, days: ["Day 1-2: Vector", "Day 3-4: Map & Set", "Day 5-6: Iterators", "Day 7: STL Practice"] },
        { week: 4, days: ["Day 1-2: Big O", "Day 3-4: Time Complexity", "Day 5-6: Space Complexity", "Day 7: Analysis"] }
      ]}
    ]
  };

  const commonDSA = [
    { month: 3, title: "Core Data Structures", icon: "🏗️", color: "#45B7D1", topics: ["Arrays & Strings", "Linked Lists", "Stacks & Queues", "Hashing"], weeklyPlan: [] },
    { month: 4, title: "Recursion & Sorting", icon: "🔄", color: "#96CEB4", topics: ["Recursion", "Backtracking", "Sorting Algorthms", "Searching"], weeklyPlan: [] },
    { month: 5, title: "Trees", icon: "🌳", color: "#FFD93D", topics: ["Binary Trees", "BST", "AVL Trees", "Tree Problems"], weeklyPlan: [] },
    { month: 6, title: "Graphs & Heaps", icon: "📈", color: "#6C5CE7", topics: ["Graph Basics", "BFS/DFS", "Heap", "Trie"], weeklyPlan: [] },
    { month: 7, title: "Dynamic Programming", icon: "🎯", color: "#E84393", topics: ["DP Basics", "Memoization", "Tabulation", "Advanced DP"], weeklyPlan: [] },
    { month: 8, title: "Advanced Algorithms", icon: "🚀", color: "#00B894", topics: ["Greedy", "Graph Algorithms", "String Algorithms", "Math"], weeklyPlan: [] },
    { month: 9, title: "Interview Prep", icon: "🎓", color: "#FDCB6E", topics: ["Company-wise", "Mock Interviews", "Previous Papers", "Final Revision"], weeklyPlan: [] }
  ];

  const getFullRoadmap = () => {
    const langSpecific = nineMonthsRoadmap[selectedLanguage] || nineMonthsRoadmap.java;
    return [...langSpecific, ...commonDSA];
  };

  const fullRoadmap = getFullRoadmap();
  const currentMonth = fullRoadmap[selectedMonth - 1];

  const resources = [
    { name: "LeetCode", url: "https://leetcode.com", color: "#FFA116", icon: "⚡", desc: "3000+ problems, contests" },
    { name: "GeeksforGeeks", url: "https://www.geeksforgeeks.org", color: "#2F8D46", icon: "📚", desc: "Free tutorials & SDE sheet" },
    { name: "CodeChef", url: "https://www.codechef.com", color: "#5B2C6F", icon: "🍜", desc: "Monthly contests" },
    { name: "HackerRank", url: "https://www.hackerrank.com", color: "#00EA64", icon: "⭐", desc: "Structured learning" },
    { name: "Codeforces", url: "https://codeforces.com", color: "#1E88E5", icon: "🎯", desc: "Regular contests" },
    { name: "Coding Ninjas", url: "https://www.codingninjas.com", color: "#FF6B6B", icon: "📖", desc: "Guided path" }
  ];

  return (
    <Layout>
      <div style={{ maxWidth: "1300px", margin: "0 auto", paddingBottom: "40px" }}>
        
        {/* Hero Section */}
        <div style={{
          background: `linear-gradient(135deg, ${languageLearningPaths[selectedLanguage].color}15 0%, ${languageLearningPaths[selectedLanguage].color}05 100%)`,
          borderRadius: "28px",
          padding: "50px",
          marginBottom: "40px",
          textAlign: "center",
          border: `1px solid ${languageLearningPaths[selectedLanguage].color}20`
        }}>
          <div style={{ fontSize: "72px", marginBottom: "15px" }}>{languageLearningPaths[selectedLanguage].icon}</div>
          <h1 style={{ fontSize: "42px", marginBottom: "15px", color: languageLearningPaths[selectedLanguage].color }}>Master DSA in 9 Months</h1>
          <p style={{ fontSize: "18px", color: "#666", maxWidth: "600px", margin: "0 auto" }}>Structured roadmap to crack coding interviews at top tech companies</p>
        </div>

        {/* Language Cards */}
        <div style={{ display: "flex", gap: "20px", marginBottom: "40px", flexWrap: "wrap", justifyContent: "center" }}>
          {Object.entries(languageLearningPaths).map(([key, lang]) => (
            <div key={key} onClick={() => { setSelectedLanguage(key); setSelectedMonth(1); }}
              style={{
                flex: "1",
                minWidth: "150px",
                maxWidth: "200px",
                background: selectedLanguage === key ? lang.bgGradient : "white",
                color: selectedLanguage === key ? "white" : "#333",
                padding: "25px 20px",
                borderRadius: "20px",
                textAlign: "center",
                cursor: "pointer",
                transition: "all 0.3s",
                boxShadow: selectedLanguage === key ? `0 8px 25px ${lang.color}40` : "0 2px 10px rgba(0,0,0,0.08)",
                transform: selectedLanguage === key ? "scale(1.03)" : "scale(1)"
              }}>
              <div style={{ fontSize: "48px", marginBottom: "10px" }}>{lang.icon}</div>
              <h3 style={{ margin: "5px 0", fontSize: "20px" }}>{lang.name}</h3>
              <p style={{ fontSize: "12px", opacity: 0.8, marginTop: "8px" }}>{selectedLanguage === key ? "✓ Selected" : "Click to select"}</p>
            </div>
          ))}
        </div>

        {/* Month Selector */}
        <div style={{ marginBottom: "35px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", marginBottom: "20px" }}>
            <h2 style={{ fontSize: "24px" }}>🗓️ 9-Month Journey</h2>
            <span style={{ background: languageLearningPaths[selectedLanguage].bgGradient, color: "white", padding: "8px 20px", borderRadius: "30px", fontSize: "14px", fontWeight: "bold" }}>
              Month {selectedMonth} of 9
            </span>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(9, 1fr)", gap: "8px" }}>
            {[1,2,3,4,5,6,7,8,9].map(month => (
              <button key={month} onClick={() => setSelectedMonth(month)}
                style={{
                  padding: "12px 0",
                  background: selectedMonth === month ? currentMonth?.color || "#0d6efd" : "#f0f2f5",
                  color: selectedMonth === month ? "white" : "#555",
                  border: "none",
                  borderRadius: "14px",
                  cursor: "pointer",
                  fontWeight: "bold",
                  fontSize: "14px",
                  transition: "all 0.3s"
                }}>M{month}</button>
            ))}
          </div>
        </div>

        {/* Current Month Content */}
        {currentMonth && (
          <div style={{
            background: "white",
            borderRadius: "28px",
            padding: "35px",
            marginBottom: "45px",
            boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
            border: `1px solid ${currentMonth.color}20`
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: "20px", marginBottom: "30px", flexWrap: "wrap" }}>
              <div style={{ fontSize: "56px", background: `${currentMonth.color}15`, width: "90px", height: "90px", borderRadius: "25px", display: "flex", alignItems: "center", justifyContent: "center" }}>{currentMonth.icon}</div>
              <div>
                <h2 style={{ fontSize: "28px", margin: 0, color: currentMonth.color }}>Month {currentMonth.month}: {currentMonth.title}</h2>
                <p style={{ color: "#666", marginTop: "8px" }}>Master these topics to build strong foundations</p>
              </div>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "15px", marginBottom: "30px" }}>
              {currentMonth.topics.map((topic, idx) => (
                <div key={idx} style={{ padding: "15px", background: `${currentMonth.color}08`, borderRadius: "14px", borderLeft: `3px solid ${currentMonth.color}`, fontWeight: "500" }}>{topic}</div>
              ))}
            </div>

            {currentMonth.weeklyPlan && currentMonth.weeklyPlan.length > 0 && (
              <>
                <h3 style={{ marginBottom: "20px", fontSize: "20px" }}>📅 Weekly Plan</h3>
                <div style={{ display: "grid", gap: "15px" }}>
                  {currentMonth.weeklyPlan.map((week, idx) => (
                    <details key={idx} style={{ background: "#f8fafc", borderRadius: "14px", padding: "15px", cursor: "pointer" }}>
                      <summary style={{ fontWeight: "bold", color: currentMonth.color, fontSize: "16px", cursor: "pointer" }}>📖 Week {week.week}</summary>
                      <ul style={{ marginTop: "12px", marginBottom: 0, paddingLeft: "20px", lineHeight: "1.8" }}>
                        {week.days.map((day, dayIdx) => <li key={dayIdx} style={{ fontSize: "14px", color: "#555" }}>{day}</li>)}
                      </ul>
                    </details>
                  ))}
                </div>
              </>
            )}
          </div>
        )}

        {/* Tabs */}
        <div style={{ display: "flex", gap: "12px", marginBottom: "30px", borderBottom: "2px solid #e2e8f0", flexWrap: "wrap" }}>
          {[
            { id: "roadmap", label: "🗺️ Complete Roadmap", icon: "🗺️" },
            { id: "resources", label: "🌐 Practice Resources", icon: "🌐" },
            { id: "tips", label: "💡 Success Tips", icon: "💡" }
          ].map(tab => (
            <button key={tab.id} onClick={() => setActiveTab(tab.id)}
              style={{
                padding: "12px 28px",
                background: activeTab === tab.id ? "#0d6efd" : "transparent",
                color: activeTab === tab.id ? "white" : "#555",
                border: "none",
                borderRadius: "14px 14px 0 0",
                cursor: "pointer",
                fontWeight: "600",
                fontSize: "15px",
                transition: "all 0.3s"
              }}>{tab.label}</button>
          ))}
        </div>

        {/* Complete Roadmap Tab */}
        {activeTab === "roadmap" && (
          <div style={{ background: "white", borderRadius: "24px", padding: "30px", boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}>
            <h2 style={{ marginBottom: "25px", fontSize: "24px" }}>📖 9-Month Roadmap ({languageLearningPaths[selectedLanguage].name})</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
              {fullRoadmap.map(month => (
                <div key={month.month} style={{ padding: "18px", background: `${month.color}08`, borderRadius: "16px", borderLeft: `4px solid ${month.color}` }}>
                  <h3 style={{ color: month.color, marginBottom: "10px", fontSize: "18px" }}>{month.icon} Month {month.month}: {month.title}</h3>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                    {month.topics.map((topic, idx) => <span key={idx} style={{ background: "white", padding: "4px 12px", borderRadius: "20px", fontSize: "13px", color: "#555" }}>{topic}</span>)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Resources Tab */}
        {activeTab === "resources" && (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "20px" }}>
            {resources.map((site, idx) => (
              <div key={idx} onClick={() => window.open(site.url, "_blank")}
                style={{ background: "white", borderRadius: "20px", padding: "25px", cursor: "pointer", transition: "all 0.3s", boxShadow: "0 2px 12px rgba(0,0,0,0.06)", borderTop: `4px solid ${site.color}` }}
                onMouseEnter={e => e.currentTarget.style.transform = "translateY(-5px)"}
                onMouseLeave={e => e.currentTarget.style.transform = "translateY(0)"}>
                <div style={{ fontSize: "48px", marginBottom: "15px" }}>{site.icon}</div>
                <h3 style={{ color: site.color, marginBottom: "10px" }}>{site.name}</h3>
                <p style={{ color: "#666", marginBottom: "15px" }}>{site.desc}</p>
                <button style={{ width: "100%", padding: "10px", background: site.color, color: "white", border: "none", borderRadius: "12px", cursor: "pointer", fontWeight: "bold" }}>Visit {site.name} →</button>
              </div>
            ))}
          </div>
        )}

        {/* Tips Tab */}
        {activeTab === "tips" && (
          <div style={{ background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)", borderRadius: "24px", padding: "40px", color: "white" }}>
            <h2 style={{ textAlign: "center", marginBottom: "30px", fontSize: "28px" }}>🎯 Success Mantra</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "15px" }}>
              {["Practice 3-4 hours daily", "Solve 50+ problems/month", "Revise every Sunday", "Weekly contests", "Maintain DSA notebook", "Join study groups", "Track monthly progress", "Weekend assessments"].map((tip, i) => (
                <div key={i} style={{ padding: "14px", background: "rgba(255,255,255,0.15)", borderRadius: "14px", textAlign: "center", fontWeight: "500" }}>✅ {tip}</div>
              ))}
            </div>
          </div>
        )}

      </div>
    </Layout>
  );
}

export default Progress;