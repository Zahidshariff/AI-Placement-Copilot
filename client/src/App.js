import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Progress from "./pages/Progress";
import Aptitude from "./pages/Aptitude";
import ResumeChecker from "./pages/ResumeChecker";
import JobRecommend from "./pages/JobRecommend";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        } />
        <Route path="/progress" element={
          <ProtectedRoute>
            <Progress />
          </ProtectedRoute>
        } />
        <Route path="/aptitude" element={
          <ProtectedRoute>
            <Aptitude />
          </ProtectedRoute>
        } />
        <Route path="/resume" element={
          <ProtectedRoute>
            <ResumeChecker />
          </ProtectedRoute>
        } />
        <Route path="/jobs" element={
          <ProtectedRoute>
            <JobRecommend />
          </ProtectedRoute>
        } />
      </Routes>
    </Router>
  );
}

export default App;