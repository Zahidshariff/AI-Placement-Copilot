const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const User = require("./models/User");

const app = express();

app.use(cors({
  origin: "http://localhost:3000",
  credentials: true
}));
app.use(express.json());

// MongoDB connection
mongoose
  .connect("mongodb://127.0.0.1:27017/aicopilot")
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log("MongoDB Error:", err));

// REGISTER - Make sure username is saved
app.post("/register", async (req, res) => {
  const { username, email, password } = req.body;

  console.log("Registration attempt:", { username, email }); // Debug log

  if (!username || !email || !password) {
    return res.json({
      success: false,
      message: "Username, email and password are required"
    });
  }

  try {
    const oldUser = await User.findOne({ email });

    if (oldUser) {
      return res.json({
        success: false,
        message: "User already exists"
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      username: username,
      email: email,
      password: hashedPassword,
      dsaSolved: 0,
      aptitudeScore: 0,
      resumeScore: 0
    });

    console.log("User created:", { username: newUser.username, email: newUser.email }); // Debug log

    res.json({
      success: true,
      message: "Registered Successfully"
    });
  } catch (error) {
    console.error("Register error:", error);
    res.json({
      success: false,
      message: "Server error during registration"
    });
  }
});

// LOGIN - Make sure username is returned
app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  console.log("Login attempt for email:", email); // Debug log

  if (!email || !password) {
    return res.json({
      success: false,
      message: "Email and password are required"
    });
  }

  try {
    const user = await User.findOne({ email });

    if (!user) {
      console.log("User not found:", email); // Debug log
      return res.json({
        success: false,
        message: "User not found"
      });
    }

    console.log("User found:", { username: user.username, email: user.email }); // Debug log

    const match = await bcrypt.compare(password, user.password);

    if (!match) {
      console.log("Password mismatch for:", email); // Debug log
      return res.json({
        success: false,
        message: "Wrong password"
      });
    }

    const token = jwt.sign(
      { id: user._id, email: user.email, username: user.username },
      "zahidsecretkey",
      { expiresIn: "7d" }
    );

    // Make sure to send username back
    const responseData = {
      success: true,
      token: token,
      username: user.username, // Critical: Send username
      email: user.email,
      message: "Login Success"
    };

    console.log("Sending response:", responseData); // Debug log

    res.json(responseData);
  } catch (error) {
    console.error("Login error:", error);
    res.json({
      success: false,
      message: "Server error during login"
    });
  }
});

// USER DATA
app.get("/user/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id).select("-password");
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    res.json(user);
  } catch (error) {
    console.error("Get user error:", error);
    res.status(500).json({ error: "Server error" });
  }
});

// DASHBOARD CARD DATA
app.get("/dashboard-data", (req, res) => {
  res.json({
    dsa: 65,
    resume: 82,
    jobs: 12,
    goal: "3 Problems",
    totalProblems: 150,
    completedProblems: 85,
    aptitudeProgress: 45
  });
});

// JOBS
app.get("/jobs", (req, res) => {
  res.json([
    { title: "Frontend Developer", company: "Tech Corp", location: "Remote", salary: "₹6-10 LPA" },
    { title: "React Intern", company: "Startup Inc", location: "Bangalore", salary: "₹25k/month" },
    { title: "MERN Developer", company: "Product Based", location: "Mumbai", salary: "₹8-12 LPA" },
    { title: "Software Engineer", company: "MNC", location: "Pune", salary: "₹10-15 LPA" }
  ]);
});

// APTITUDE
app.get("/aptitude", (req, res) => {
  res.json([
    {
      question: "If a shopkeeper sells a product at 20% profit, and the cost price is ₹500, what is the selling price?",
      answer: "600"
    },
    {
      question: "What is 15% of 200?",
      answer: "30"
    },
    {
      question: "A train travels 60 km in 1.5 hours. What is its speed in km/h?",
      answer: "40"
    }
  ]);
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server Running on Port ${PORT}`);
});