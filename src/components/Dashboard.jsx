import React, { useState, useEffect } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const Dashboard = () => {
  const [date, setDate] = useState(new Date());
  const [calendarHeight, setCalendarHeight] = useState('');
  const [modalOpen, setModalOpen] = useState(false);
  const [patientName, setPatientName] = useState('');
  const [reason, setReason] = useState('');
  const [time, setTime] = useState('');
  const [appointments, setAppointments] = useState([]);
  const [highlightedDates, setHighlightedDates] = useState(new Set());

  useEffect(() => {
    const month = date.getMonth();
    const year = date.getFullYear();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const firstDay = new Date(year, month, 1).getDay();
    const totalRows = Math.ceil((daysInMonth + firstDay) / 7);
    setCalendarHeight(`${totalRows * 50}px`);
  }, [date]);

  const handleAddAppointment = () => {
    if (patientName && reason && time) {
      const newAppointment = { patientName, reason, time };
      setAppointments([...appointments, newAppointment]);
      setHighlightedDates(new Set([...highlightedDates, date.toDateString()]));
      setModalOpen(false);
      setPatientName('');
      setReason('');
      setTime('');
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-8 bg-[#5AC8FA]">
          <div className="flex">
            <div className="flex-1 mr-4">
              <h2 className="text-2xl font-bold mb-4">Today's Overview</h2>
              <div className="flex space-x-4 mb-4">
                <div className="bg-white rounded-lg shadow-lg p-4 w-[194px] h-[100px] flex items-center justify-center">Patients</div>
                <div className="bg-white rounded-lg shadow-lg p-4 w-[194px] h-[100px] flex items-center justify-center">Appointments</div>
                <div className="bg-white rounded-lg shadow-lg p-4 w-[194px] h-[100px] flex items-center justify-center">Reviews</div>
                <div className="bg-white rounded-lg shadow-lg p-4 w-[194px] h-[100px] flex items-center justify-center">Surgery</div>
              </div>

              <h2 className="text-2xl font-bold mb-4">Schedule</h2>
              <div className="bg-white rounded-lg shadow-lg w-[863px] h-[200px] p-4 mb-4">Timeline Card</div>

              <div className="bg-white rounded-lg shadow-lg w-[863px] p-4 mb-4">
                <div className="flex justify-between items-center">
                  <h2 className="text-xl font-bold mb-2">Upcoming Appointments</h2>
                  <button 
                    className="text-blue-500" 
                    onClick={() => setModalOpen(true)}
                  >
                    +
                  </button>
                </div>
                <table className="min-w-full">
                  <thead>
                    <tr className="bg-gray-200">
                      <th className="border p-2">Patient Name</th>
                      <th className="border p-2">Reason</th>
                      <th className="border p-2">Time</th>
                    </tr>
                  </thead>
                  <tbody>
                    {appointments.map((appointment, index) => (
                      <tr key={index}>
                        <td className="border p-2">{appointment.patientName}</td>
                        <td className="border p-2">{appointment.reason}</td>
                        <td className="border p-2">{appointment.time}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="flex flex-col">
              <div className="bg-white rounded-lg shadow-lg w-[299px] mb-4" style={{ height: calendarHeight }}>
                <Calendar
                  onChange={setDate}
                  value={date}
                  className={`w-full border-none rounded-lg ${highlightedDates.has(date.toDateString()) ? 'bg-yellow-300' : ''}`}
                />
              </div>

              <div className="bg-white rounded-lg shadow-lg w-[299px] h-[200px] p-4 mt-6">
                Notifications
              </div>
            </div>
          </div>

          {modalOpen && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
              <div className="bg-white p-6 rounded shadow-lg">
                <h2 className="text-xl font-bold mb-4">Add Appointment</h2>
                <input
                  type="text"
                  placeholder="Patient Name"
                  value={patientName}
                  onChange={(e) => setPatientName(e.target.value)}
                  className="border p-2 mb-4 w-full"
                />
                <input
                  type="text"
                  placeholder="Reason"
                  value={reason}
                  onChange={(e) => setReason(e.target.value)}
                  className="border p-2 mb-4 w-full"
                />
                <input
                  type="text"
                  placeholder="Time"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  className="border p-2 mb-4 w-full"
                />
                <button
                  onClick={handleAddAppointment}
                  className="bg-blue-500 text-white py-2 px-4 rounded"
                >
                  Add Appointment
                </button>
                <button
                  onClick={() => setModalOpen(false)}
                  className="ml-2 py-2 px-4 rounded border border-gray-400"
                >
                  Cancel
                </button>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
