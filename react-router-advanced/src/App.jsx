// import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Profile from "./components/Profile";
import Blog from "./components/Blog";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile/*" element={<ProtectedRoute />}>
          <Route path="" element={<Profile />} />
        </Route>
        <Route path="/blog/*" element={<Blog />} />
      </Routes>
    </Router>
  );
}

export default App;
