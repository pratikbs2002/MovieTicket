import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import Ticket from "./components/ticket/Ticket";
import "./App.css";

export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bookticket/:id" element={<Ticket />} />
        </Routes>
      </Router>
    </>
  );
}
