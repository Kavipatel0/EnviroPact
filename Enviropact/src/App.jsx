// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './screens/Homepage'; // Import your Homepage component
import Eventspage from './screens/Eventspage'; // Import your Events page component
import About from './screens/About';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/" element={<About />} />
        <Route path="/events" element={<Eventspage />} />
      </Routes>
    </Router>
  );
}

export default App;
