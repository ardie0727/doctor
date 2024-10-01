// App.jsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './components/Dashboard';
import Appointments from './components/Appointments';
import Schedule from './components/Schedule';
import FAQ from './components/FAQ';
import Patients from './components/Patients';

const App = () => {
  const [appointments, setAppointments] = useState([
    { id: 1, patientName: 'John Doe', reason: 'Check-up', time: '2024-09-25 10:00 AM' },
    { id: 2, patientName: 'Jane Smith', reason: 'Consultation', time: '2024-09-26 11:30 AM' },
  ]);

  // Function to add a new appointment
  const addAppointment = (newAppointment) => {
    setAppointments((prev) => [...prev, newAppointment]);
  };

  return (
    <Router>
        <Routes>
          <Route path="/" element={<Patients />} />
          <Route path="/dashboard" element={<Dashboard appointments={appointments} addAppointment={addAppointment} />} />
          <Route path="/appointments" element={<Appointments appointments={appointments} addAppointment={addAppointment} />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/faq" element={<FAQ />} />
        </Routes>
    </Router>
  );
};

export default App;
