import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "./pages/Login"; // Path diperbarui
import Dashboard from "./pages/Dashboard"; // Path diperbarui
import "./App.css";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* Redirect root URL ke /login */}
        <Route path="/" element={<Navigate to="/login" />} />

        {/* Halaman Login */}
        <Route path="/login" element={<Login />} />

        {/* Halaman Dashboard (setelah login berhasil) */}
        <Route path="/dashboard" element={<Dashboard />} />

        {/* 404 Not Found */}
        <Route path="*" element={<h1>404 - Page Not Found</h1>} />
      </Routes>
    </Router>
  );
};

export default App;
