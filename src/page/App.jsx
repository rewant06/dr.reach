// Main.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./homepage/Home";
import Booking from "./appointment/Booking";
import Login from "./authenticate/Login";
import Register from "./authenticate/Register";
import Form from "./appointment/Form";

function Main() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/form" element={<Form />} />
      </Routes>
    </Router>
  );
}

export default Main;
