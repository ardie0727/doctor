import React, { useState, useEffect } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const Dashboard = () => {
  const [date, setDate] = useState(new Date());
  const [calendarHeight, setCalendarHeight] = useState('');

  useEffect(() => {
    const month = date.getMonth();
    const year = date.getFullYear();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const firstDay = new Date(year, month, 1).getDay();
    const totalRows = Math.ceil((daysInMonth + firstDay) / 7);
    setCalendarHeight(`${totalRows * 50}px`);
  }, [date]);

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
                <div className="bg-white rounded-lg shadow-lg p-4 w-[194px] h-[100px] flex items-center justify-center">
                  Patients
                </div>
                <div className="bg-white rounded-lg shadow-lg p-4 w-[194px] h-[100px] flex items-center justify-center">
                  Appointments
                </div>
                <div className="bg-white rounded-lg shadow-lg p-4 w-[194px] h-[100px] flex items-center justify-center">
                  Reviews
                </div>
                <div className="bg-white rounded-lg shadow-lg p-4 w-[194px] h-[100px] flex items-center justify-center">
                  Surgery
                </div>
              </div>

              <h2 className="text-2xl font-bold mb-4">Schedule</h2>
              <div className="bg-white rounded-lg shadow-lg w-[863px] h-[200px] p-4 mb-4">
                Timeline Card
              </div>

              <div className="bg-white rounded-lg shadow-lg w-[863px] p-4 mb-4">
                <h2 className="text-xl font-bold mb-2">Upcoming Appointments</h2>
                <table className="min-w-full">
                  <thead>
                    <tr className="bg-gray-200">
                      <th className="border p-2">Patient Name</th>
                      <th className="border p-2">Reason</th>
                      <th className="border p-2">Time</th>
                    </tr>
                  </thead>
                  <tbody>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="flex flex-col">
              <div className="bg-white rounded-lg shadow-lg w-[299px] mb-4" style={{ height: calendarHeight }}>
                <Calendar
                  onChange={setDate}
                  value={date}
                  className="w-full border-none rounded-lg"
                />
              </div>

              <div className="bg-white rounded-lg shadow-lg w-[299px] h-[200px] p-4 mt-6">
                Notifications
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
