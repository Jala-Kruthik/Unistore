// App.jsx
import React from "react";
import "./App.css";
import BookStore from "./App2";
import HomePage from "./HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => (
  <Router>
    <div className="app">
      {/* Navigation */}
      <nav>
        <span className="logo">Unique-Store</span>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/search" element={<BookStore />} />
      </Routes>
    </div>
  </Router>
);

export default App;
