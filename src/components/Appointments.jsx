import React, { useState } from 'react';
import Layout from './Layout';

const Appointments = ({ appointments, addAppointment }) => {
  const [newAppointment, setNewAppointment] = useState({
    patientName: '',
    reason: '',
    time: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewAppointment((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newAppointment.patientName && newAppointment.reason && newAppointment.time) {
      addAppointment({ id: appointments.length + 1, ...newAppointment });
      setNewAppointment({ patientName: '', reason: '', time: '' });
    }
  };

  return (
    <Layout>
      <h1 className="text-3xl font-semibold mb-4">Appointments</h1>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Previous Appointments</h2>
        <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-lg">
          <thead>
            <tr className="bg-gray-200">
              <th className="border p-2">Patient Name</th>
              <th className="border p-2">Reason</th>
              <th className="border p-2">Time</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((appointment) => (
              <tr key={appointment.id} className="hover:bg-gray-100">
                <td className="border p-2">{appointment.patientName}</td>
                <td className="border p-2">{appointment.reason}</td>
                <td className="border p-2">{appointment.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-4">Schedule a New Appointment</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1">Patient Name:</label>
            <input
              type="text"
              name="patientName"
              value={newAppointment.patientName}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 p-2 rounded-lg"
            />
          </div>
          <div>
            <label className="block mb-1">Reason:</label>
            <input
              type="text"
              name="reason"
              value={newAppointment.reason}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 p-2 rounded-lg"
            />
          </div>
          <div>
            <label className="block mb-1">Time:</label>
            <input
              type="datetime-local"
              name="time"
              value={newAppointment.time}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 p-2 rounded-lg"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-lg"
          >
            Add Appointment
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default Appointments;
