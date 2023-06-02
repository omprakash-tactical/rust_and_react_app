import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import School from "./Components/School";
import College from "./Components/College";
import Login from "./pages/Login";


function App() {
  return (
    <BrowserRouter>
      {/* App content */}
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/school" element={<School/>}/>
      <Route path="/college" element={<College/>}/>  
      <Route path="/login" element={<Login/>}/>      
      </Routes>
    </BrowserRouter>
  );
}

export default App;
