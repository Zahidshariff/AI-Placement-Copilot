import React, { useState, useRef, useEffect } from "react";
import Layout from "../components/Layout";
import mammoth from "mammoth";

const pdfjsLib = window.pdfjsLib;

// Define keywords outside the component
const fullStackKeywords = [
  "react", "node", "mongodb", "express", "javascript", 
  "html", "css", "sql", "git", "api", "frontend", "backend"
];

function ResumeChecker() {
  const [resume, setResume] = useState("");
  const [fileName, setFileName] = useState("");
  const [score, setScore] = useState(0);
  const [matched, setMatched] = useState([]);
  const [feedback, setFeedback] = useState([]);
  const [loading, setLoading] = useState(false);
  
  const resultsRef = useRef(null);

  useEffect(() => {
    if (score > 0 && resultsRef.current) {
      resultsRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [score]);

  const extractTextFromPDF = async (file) => {
    try {
      const arrayBuffer = await file.arrayBuffer();
      pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.16.105/pdf.worker.min.js';
      const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;
      let fullText = "";
      for (let i = 1; i <= pdf.numPages; i++) {
        const page = await pdf.getPage(i);
        const textContent = await page.getTextContent();
        const pageText = textContent.items.map(item => item.str).join(" ");
        fullText += pageText + "\n";
      }
      return fullText;
    } catch (error) {
      console.error("PDF extraction error:", error);
      throw new Error("Failed to read PDF file. Please try pasting the text instead.");
    }
  };

  const extractTextFromFile = async (file) => {
    const fileNameLower = file.name.toLowerCase();
    if (fileNameLower.endsWith(".txt")) {
      return await file.text();
    } else if (fileNameLower.endsWith(".pdf")) {
      return await extractTextFromPDF(file);
    } else if (fileNameLower.endsWith(".docx")) {
      const arrayBuffer = await file.arrayBuffer();
      const result = await mammoth.extractRawText({ arrayBuffer });
      return result.value;
    } else {
      throw new Error("Unsupported file format. Please upload PDF, DOCX, or TXT files.");
    }
  };

  const handleFileUpload = async (event) => {
    const file = event.target.files[0];
    if (!file) return;
    if (file.size > 5 * 1024 * 1024) {
      alert("File too large! Please upload a file smaller than 5MB.");
      return;
    }
    setFileName(file.name);
    setLoading(true);
    setResume("");
    try {
      const extractedText = await extractTextFromFile(file);
      setResume(extractedText);
      setTimeout(() => {
        analyzeResume(extractedText);
      }, 100);
    } catch (error) {
      console.error("Upload error:", error);
      alert(error.message || "Error reading file. Please try pasting the text directly.");
    } finally {
      setLoading(false);
    }
  };

  const analyzeResume = (resumeText) => {
    // Simple keyword lists for matching
    const dsaKeywords = ["dsa", "data structures", "algorithms", "data structure"];
    const pythonKeywords = ["python"];
    const javaKeywords = ["java"];
    const cppKeywords = ["c++", "cpp"];

    const text = resumeText.toLowerCase();
    let found = [];
    let tips = [];
    let finalScore = 0;

    // Check DSA
    let hasDSA = false;
    for (let keyword of dsaKeywords) {
      if (text.includes(keyword)) {
        hasDSA = true;
        break;
      }
    }
    if (hasDSA) {
      found.push("DSA");
      finalScore += 15;
    } else {
      tips.push({
        icon: "📚",
        title: "Add DSA (Data Structures & Algorithms)",
        description: "Mention DSA skills in your resume",
        action: "Learn DSA from LeetCode, GeeksforGeeks, or take a DSA course"
      });
    }

    // Check for Programming Languages (Java, Python, C++)
    let hasPython = false;
    let hasJava = false;
    let hasCPP = false;
    let programmingLanguagesFound = [];
    
    for (let keyword of pythonKeywords) {
      if (text.includes(keyword)) {
        hasPython = true;
        programmingLanguagesFound.push("Python");
        break;
      }
    }
    
    for (let keyword of javaKeywords) {
      if (text.includes(keyword)) {
        hasJava = true;
        programmingLanguagesFound.push("Java");
        break;
      }
    }
    
    for (let keyword of cppKeywords) {
      if (text.includes(keyword)) {
        hasCPP = true;
        programmingLanguagesFound.push("C++");
        break;
      }
    }
    
    if (programmingLanguagesFound.length > 0) {
      found.push(...programmingLanguagesFound);
      finalScore += programmingLanguagesFound.length * 15;
    } else {
      tips.push({
        icon: "💻",
        title: "Add a Programming Language",
        description: "Learn and add at least one programming language",
        action: "Learn Python (beginner friendly), Java (for enterprise), or C++ (for DSA & gaming)"
      });
    }

    // Check Full Stack Skills
    let fullStackFound = [];
    let missingFullStack = [];
    
    for (let keyword of fullStackKeywords) {
      if (text.includes(keyword)) {
        fullStackFound.push(keyword);
        finalScore += 3;
      } else {
        missingFullStack.push(keyword);
      }
    }
    
    if (fullStackFound.length > 0) {
      found.push(...fullStackFound.slice(0, 5));
    }
    
    // Full Stack Learning Recommendations
    if (missingFullStack.length >= 8) {
      tips.push({
        icon: "🌐",
        title: "Learn Full Stack Development",
        description: "Add skills like React, Node.js, MongoDB, Express, JavaScript",
        action: "🚀 Start with: HTML → CSS → JavaScript → React → Node.js → MongoDB → Express"
      });
    } else if (missingFullStack.length > 0) {
      const missingSkills = missingFullStack.slice(0, 5).join(", ");
      tips.push({
        icon: "🌐",
        title: "Add Full Stack Skills",
        description: `Consider adding: ${missingSkills}`,
        action: "📚 Learn Full Stack: Take MERN stack course on Udemy, Coursera, or YouTube"
      });
    }

    // Check for Projects
    if (text.includes("project")) {
      finalScore += 10;
    } else {
      tips.push({
        icon: "📁",
        title: "Add Projects",
        description: "Include 2-3 projects with descriptions",
        action: "✨ Build: Portfolio website, E-commerce app, Blog platform, or Chat application"
      });
    }

    // Check for Experience
    if (text.includes("experience") || text.includes("internship")) {
      finalScore += 10;
    } else {
      tips.push({
        icon: "💼",
        title: "Add Experience",
        description: "Include internships or work experience",
        action: "🎯 Apply for internships, contribute to open source, or freelance"
      });
    }

    // Check for Education
    if (text.includes("education") || text.includes("btech") || text.includes("b.tech") || text.includes("b.e")) {
      finalScore += 10;
    } else {
      tips.push({
        icon: "🎓",
        title: "Add Education",
        description: "Include your degree and institution",
        action: "📖 List your degree, university name, graduation year, and relevant coursework"
      });
    }

    // Check resume length
    if (text.length > 300) {
      finalScore += 5;
    } else {
      tips.push({
        icon: "📝",
        title: "Add more content",
        description: "Your resume is too short",
        action: "📄 Add detailed descriptions of your skills, projects, and achievements"
      });
    }

    finalScore = Math.min(100, finalScore);
    setScore(finalScore);
    setMatched(found.slice(0, 15));
    setFeedback(tips);
  };

  const handlePasteText = (e) => {
    const text = e.target.value;
    setResume(text);
    if (text.length > 100) {
      analyzeResume(text);
    }
  };

  const getScoreColor = () => {
    if (score >= 70) return "#28a745";
    if (score >= 40) return "#ffc107";
    return "#dc3545";
  };

  const getScoreEmoji = () => {
    if (score >= 80) return "🎖️";
    if (score >= 60) return "📈";
    if (score >= 40) return "📊";
    return "📚";
  };

  const getScoreMessage = () => {
    if (score >= 80) return "Excellent! Your resume is strong! 🎉";
    if (score >= 60) return "Good! Keep improving! 👍";
    if (score >= 40) return "Needs work! Follow suggestions below! 📝";
    return "Poor score! Add recommended skills! 🚀";
  };

  const openLearningResource = (skill) => {
    const searchUrls = {
      react: "https://react.dev/learn",
      node: "https://nodejs.org/en/docs/guides/getting-started-guide/",
      mongodb: "https://www.mongodb.com/docs/manual/tutorial/getting-started/",
      express: "https://expressjs.com/en/starter/installing.html",
      javascript: "https://javascript.info/",
      python: "https://www.python.org/about/gettingstarted/",
      java: "https://dev.java/learn/",
      "c++": "https://www.learncpp.com/"
    };
    
    const searchTerm = skill.toLowerCase();
    if (searchUrls[searchTerm]) {
      window.open(searchUrls[searchTerm], "_blank");
    } else {
      window.open(`https://www.google.com/search?q=learn+${skill}+for+beginners`, "_blank");
    }
  };

  return (
    <Layout>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 20px" }}>
        
        {/* Page Title */}
        <div style={{ marginBottom: "30px" }}>
          <h1 style={{ fontSize: "clamp(28px, 6vw, 32px)", color: "#1e293b", marginBottom: "8px" }}>
            AI Resume Analyzer 🤖
          </h1>
          <p style={{ color: "#64748b", fontSize: "clamp(14px, 4vw, 16px)" }}>
            Check if your resume has DSA, Programming Languages (Python/Java/C++), and Full Stack skills
          </p>
        </div>

        {/* File Upload Section */}
        <div style={{
          border: "2px dashed #0d6efd",
          borderRadius: "20px",
          padding: "clamp(30px, 6vw, 40px)",
          textAlign: "center",
          backgroundColor: "#f8f9fa",
          marginBottom: "25px",
          transition: "all 0.3s"
        }}>
          <input
            type="file"
            accept=".pdf,.docx,.txt"
            onChange={handleFileUpload}
            style={{ display: "none" }}
            id="resume-upload"
          />
          <label htmlFor="resume-upload" style={{
            display: "inline-block",
            padding: "clamp(12px, 4vw, 14px) clamp(25px, 6vw, 35px)",
            background: "#0d6efd",
            color: "white",
            borderRadius: "12px",
            cursor: "pointer",
            fontWeight: "bold",
            fontSize: "clamp(14px, 4vw, 16px)",
            transition: "all 0.3s"
          }}>
            📄 Upload Resume (PDF/DOCX/TXT)
          </label>
          {fileName && (
            <p style={{ marginTop: "15px", color: "#28a745", fontWeight: "500" }}>
              ✅ Uploaded: {fileName}
            </p>
          )}
          <p style={{ fontSize: "12px", color: "#6c757d", marginTop: "15px" }}>
            Max file size: 5MB | Supported: PDF, DOCX, TXT
          </p>
        </div>

        {/* Textarea for manual paste */}
        <textarea
          rows={6}
          placeholder="Paste your resume text here... (Auto-analyzes when you paste)"
          value={resume}
          onChange={handlePasteText}
          style={{
            width: "100%",
            padding: "15px",
            borderRadius: "12px",
            fontSize: "14px",
            border: "2px solid #e0e0e0",
            marginBottom: "20px",
            fontFamily: "monospace",
            resize: "vertical"
          }}
        />

        {loading && (
          <div style={{ 
            textAlign: "center", 
            padding: "20px", 
            background: "linear-gradient(135deg, #e3f2fd 0%, #bbdef5 100%)",
            borderRadius: "12px", 
            marginBottom: "20px",
            fontSize: "16px",
            fontWeight: "500"
          }}>
            ⏳ Processing your file... Please wait
          </div>
        )}

        {!loading && resume && (
          <button
            onClick={() => analyzeResume(resume)}
            style={{
              marginBottom: "25px",
              padding: "12px",
              background: "#28a745",
              color: "white",
              border: "none",
              borderRadius: "12px",
              cursor: "pointer",
              fontWeight: "bold",
              width: "100%",
              fontSize: "16px",
              transition: "all 0.3s"
            }}
            onMouseEnter={(e) => e.target.style.background = "#1e7e34"}
            onMouseLeave={(e) => e.target.style.background = "#28a745"}
          >
            🔄 Re-analyze Resume
          </button>
        )}

        <div ref={resultsRef}>
          {score > 0 && (
            <>
              {/* Score Card */}
              <div style={{
                background: "linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)",
                borderRadius: "24px",
                padding: "clamp(25px, 5vw, 35px)",
                marginBottom: "25px",
                textAlign: "center",
                boxShadow: "0 8px 25px rgba(0,0,0,0.1)",
                border: "1px solid rgba(0,0,0,0.05)"
              }}>
                <h3 style={{ marginBottom: "15px", fontSize: "clamp(18px, 4vw, 20px)", color: "#1e293b" }}>
                  Resume ATS Score
                </h3>
                <div style={{ fontSize: "clamp(48px, 10vw, 64px)", fontWeight: "bold", color: getScoreColor() }}>
                  {getScoreEmoji()} {score}%
                </div>
                <div style={{
                  width: "100%",
                  backgroundColor: "#e9ecef",
                  borderRadius: "10px",
                  marginTop: "15px",
                  overflow: "hidden"
                }}>
                  <div style={{
                    width: `${score}%`,
                    backgroundColor: getScoreColor(),
                    padding: "8px",
                    borderRadius: "10px",
                    color: "white",
                    textAlign: "center",
                    transition: "width 0.5s ease"
                  }}>
                    {score}%
                  </div>
                </div>
                <p style={{ marginTop: "15px", color: "#666", fontSize: "clamp(13px, 3.5vw, 14px)" }}>
                  {getScoreMessage()}
                </p>
              </div>

              {/* Skills Found Section */}
              {matched.length > 0 && (
                <div style={{
                  background: "linear-gradient(135deg, #d4edda 0%, #c3e6cb 100%)",
                  borderRadius: "20px",
                  padding: "20px",
                  marginBottom: "25px",
                  border: "1px solid #28a74540"
                }}>
                  <h3 style={{ marginBottom: "15px", color: "#155724", display: "flex", alignItems: "center", gap: "10px" }}>
                    <span style={{ fontSize: "24px" }}>✅</span> Skills Detected in Your Resume
                    <span style={{ fontSize: "12px", background: "#28a745", color: "white", padding: "2px 8px", borderRadius: "20px" }}>
                      {matched.length}
                    </span>
                  </h3>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                    {matched.map((skill, idx) => (
                      <span key={idx} style={{
                        background: "#28a745",
                        color: "white",
                        padding: "6px 14px",
                        borderRadius: "25px",
                        fontSize: "13px",
                        fontWeight: "500",
                        boxShadow: "0 2px 4px rgba(0,0,0,0.1)"
                      }}>
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* AI Recommendations Section with Learn Links */}
              {feedback.length > 0 && (
                <div style={{
                  background: "linear-gradient(135deg, #cfe2ff 0%, #b8d4f0 100%)",
                  borderRadius: "20px",
                  padding: "25px",
                  marginBottom: "25px",
                  border: "1px solid #0d6efd40"
                }}>
                  <h3 style={{ marginBottom: "20px", color: "#084298", display: "flex", alignItems: "center", gap: "10px" }}>
                    <span style={{ fontSize: "28px" }}>🤖</span> AI Recommendations for Improvement
                  </h3>
                  <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                    {feedback.map((item, index) => (
                      <div key={index} style={{
                        background: "white",
                        padding: "18px",
                        borderRadius: "16px",
                        boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
                        transition: "transform 0.2s",
                        cursor: "pointer"
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.transform = "translateX(5px)"}
                      onMouseLeave={(e) => e.currentTarget.style.transform = "translateX(0)"}>
                        <div style={{ display: "flex", alignItems: "flex-start", gap: "12px", flexWrap: "wrap" }}>
                          <span style={{ fontSize: "28px" }}>{item.icon}</span>
                          <div style={{ flex: 1 }}>
                            <div style={{ fontWeight: "bold", fontSize: "16px", color: "#084298", marginBottom: "5px" }}>
                              {item.title}
                            </div>
                            <div style={{ fontSize: "13px", color: "#666", marginBottom: "8px" }}>
                              {item.description}
                            </div>
                            <div style={{ 
                              background: "#e3f2fd", 
                              padding: "8px 12px", 
                              borderRadius: "10px",
                              marginTop: "8px"
                            }}>
                              <span style={{ fontSize: "12px", color: "#0d6efd", fontWeight: "500" }}>
                                💡 {item.action}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Summary Section */}
              <div style={{
                background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                borderRadius: "20px",
                padding: "25px",
                boxShadow: "0 8px 25px rgba(102, 126, 234, 0.3)"
              }}>
                <h3 style={{ marginBottom: "20px", color: "white", display: "flex", alignItems: "center", gap: "10px" }}>
                  <span style={{ fontSize: "24px" }}>📋</span> Resume Summary Report
                </h3>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "15px" }}>
                  {/* DSA Status */}
                  <div style={{
                    background: matched.includes("DSA") ? "rgba(40, 167, 69, 0.2)" : "rgba(220, 53, 69, 0.2)",
                    borderRadius: "16px",
                    padding: "15px 20px",
                    flex: "1",
                    minWidth: "150px",
                    backdropFilter: "blur(10px)",
                    border: `1px solid ${matched.includes("DSA") ? "#28a745" : "#dc3545"}`
                  }}>
                    <div style={{ fontSize: "28px", marginBottom: "8px" }}>{matched.includes("DSA") ? "✅" : "❌"}</div>
                    <div style={{ fontWeight: "bold", color: "white", marginBottom: "4px" }}>DSA</div>
                    <div style={{ fontSize: "12px", color: "rgba(255,255,255,0.8)" }}>
                      {matched.includes("DSA") ? "Found in resume" : "Not found - Add it"}
                    </div>
                  </div>

                  {/* Programming Language Status */}
                  <div style={{
                    background: (matched.includes("Python") || matched.includes("Java") || matched.includes("C++")) ? "rgba(40, 167, 69, 0.2)" : "rgba(220, 53, 69, 0.2)",
                    borderRadius: "16px",
                    padding: "15px 20px",
                    flex: "1",
                    minWidth: "150px",
                    backdropFilter: "blur(10px)",
                    border: `1px solid ${(matched.includes("Python") || matched.includes("Java") || matched.includes("C++")) ? "#28a745" : "#dc3545"}`
                  }}>
                    <div style={{ fontSize: "28px", marginBottom: "8px" }}>
                      {(matched.includes("Python") || matched.includes("Java") || matched.includes("C++")) ? "✅" : "❌"}
                    </div>
                    <div style={{ fontWeight: "bold", color: "white", marginBottom: "4px" }}>Programming Language</div>
                    <div style={{ fontSize: "12px", color: "rgba(255,255,255,0.8)" }}>
                      {matched.includes("Python") || matched.includes("Java") || matched.includes("C++") 
                        ? `Found: ${matched.filter(m => m === "Python" || m === "Java" || m === "C++").join(", ")}` 
                        : "None found - Add Python/Java/C++"}
                    </div>
                  </div>

                  {/* Full Stack Status */}
                  <div style={{
                    background: matched.some(m => fullStackKeywords.includes(m.toLowerCase())) ? "rgba(40, 167, 69, 0.2)" : "rgba(220, 53, 69, 0.2)",
                    borderRadius: "16px",
                    padding: "15px 20px",
                    flex: "1",
                    minWidth: "150px",
                    backdropFilter: "blur(10px)",
                    border: `1px solid ${matched.some(m => fullStackKeywords.includes(m.toLowerCase())) ? "#28a745" : "#dc3545"}`
                  }}>
                    <div style={{ fontSize: "28px", marginBottom: "8px" }}>
                      {matched.some(m => fullStackKeywords.includes(m.toLowerCase())) ? "✅" : "❌"}
                    </div>
                    <div style={{ fontWeight: "bold", color: "white", marginBottom: "4px" }}>Full Stack Skills</div>
                    <div style={{ fontSize: "12px", color: "rgba(255,255,255,0.8)" }}>
                      {matched.some(m => fullStackKeywords.includes(m.toLowerCase())) ? "Skills detected" : "Not found - Add skills"}
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>

        {!resume && !loading && (
          <div style={{
            background: "linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)",
            borderRadius: "20px",
            padding: "clamp(40px, 8vw, 60px)",
            textAlign: "center",
            color: "#6c757d",
            boxShadow: "0 4px 15px rgba(0,0,0,0.08)"
          }}>
            <div style={{ fontSize: "64px", marginBottom: "15px" }}>📄</div>
            <h3 style={{ marginBottom: "10px" }}>Upload or paste your resume to get started</h3>
            <p style={{ marginBottom: "20px", fontSize: "14px" }}>We'll analyze your resume and provide detailed feedback</p>
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "12px" }}>
              <span style={{ background: "#e3f2fd", padding: "5px 12px", borderRadius: "20px", fontSize: "12px" }}>✅ DSA</span>
              <span style={{ background: "#e3f2fd", padding: "5px 12px", borderRadius: "20px", fontSize: "12px" }}>✅ Python / Java / C++</span>
              <span style={{ background: "#e3f2fd", padding: "5px 12px", borderRadius: "20px", fontSize: "12px" }}>✅ Full Stack</span>
              <span style={{ background: "#e3f2fd", padding: "5px 12px", borderRadius: "20px", fontSize: "12px" }}>✅ Projects</span>
            </div>
          </div>
        )}

      </div>
    </Layout>
  );
}

export default ResumeChecker;