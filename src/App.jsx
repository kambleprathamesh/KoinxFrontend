import React from "react";
import Header from "./Components/Header/Header";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Home from "./Pages/home";
const App = () => {
  return (
    <div className="mainApp">
      <Header /> {/* Header outside Routes to appear on all pages */}
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Other routes */}
        <Route path="/cryptoTax" element={<div>Crypto Tax Page</div>} />
        <Route path="/freeTools" element={<div>Free Tools Page</div>} />
        <Route
          path="/resourceCenter"
          element={<div>Resource Center Page</div>}
        />
        <Route path="/getStarted" element={<div>Get Started Page</div>} />
      </Routes>
    </div>
  );
};

export default App;
