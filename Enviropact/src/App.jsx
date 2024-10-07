// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './screens/Homepage'; // Import your Homepage component
import Eventspage from './screens/Eventspage'; // Import your Events page component
import Aboutpage from './screens/Aboutpage'; // Import your About page component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/events" element={<Eventspage />} />
        <Route path="/about" element={<Aboutpage />} />
      </Routes>
    </Router>
  );
}

export default App;
