import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import Overview from "./pages/Overview"
// import Overview from "./pages/Overview";
import "./styles/main.css"; // Assuming you have a CSS file for global styles
import React, { useState } from "react";


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/overview" element={<Overview />} />
          <Route path="/" element={<Navigate to="/overview" replace />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
