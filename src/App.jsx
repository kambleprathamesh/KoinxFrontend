

import React from "react";
import Header from "./Components/Header/Header";
import { Routes, Route } from "react-router-dom";
import "./App.css"
const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/cryptoTax" element={<div>Crypto Tax Page</div>} />
        <Route path="/freeTools" element={<div>Free Tools Page</div>} />
        <Route path="/resourceCenter" element={<div>Resource Center Page</div>} />
        <Route path="/getStarted" element={<div>Get Started Page</div>} />
      </Routes>
    </div>
  );
};

export default App;
