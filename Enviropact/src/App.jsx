<<<<<<< HEAD
import { useState } from "react";
import "./App.css";
import Homepage from "./screens/Homepage";
import About from "./screens/About";
=======
// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './screens/Homepage'; // Import your Homepage component
import Eventspage from './screens/Eventspage'; // Import your Events page component
>>>>>>> origin

function App() {
  return (
<<<<<<< HEAD
    <>
      <About></About>
    </>
=======
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/events" element={<Eventspage />} />
      </Routes>
    </Router>
>>>>>>> origin
  );
}

export default App;
