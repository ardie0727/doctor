import React, { useState } from 'react';

const AppointmentForm = ({ addAppointment }) => {
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
      addAppointment({ ...newAppointment });
      setNewAppointment({ patientName: '', reason: '', time: '' });
    }
  };

  return (
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
  );
};

export default AppointmentForm;
