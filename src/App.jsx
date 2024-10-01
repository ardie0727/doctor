// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './components/Dashboard';
import Appointments from './components/Appointments';
import Schedule from './components/Schedule';
import FAQ from './components/FAQ';
import Patients from './components/Patients'; // Import the Patients page

const App = () => {
  return (
    <Router>
      <Routes>
        
        <Route path="/" element={<Patients />} /> 
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/appointments" element={<Appointments />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/faq" element={<FAQ />} />
      </Routes>
    </Router>
  );
};

export default App;
