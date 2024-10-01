import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const Dashboard = ({ appointments, addAppointment }) => {
  const navigate = useNavigate();
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

  // Function to create hourly time slots for the day
  const createTimeSlots = () => {
    const slots = [];
    const startTime = 8; // Start at 8 AM
    const endTime = 18; // End at 6 PM
    for (let hour = startTime; hour < endTime; hour++) {
      slots.push(`${hour}:00`); // Add whole hours
      slots.push(`${hour}:30`); // Add half hours
    }
    return slots;
  };

  // Get time slots
  const timeSlots = createTimeSlots();

  // Function to get booked time slots for candles
  const getBookedSlots = () => {
    return appointments.map(appointment => {
      const start = appointment.time;
      const end = new Date(new Date(start).getTime() + 30 * 60000).toISOString().slice(11, 16); // Adding 30 minutes
      return { start, end };
    });
  };

  // Get booked slots
  const bookedSlots = getBookedSlots();

  // Check if a time slot is booked
  const isTimeSlotBooked = (slot) => {
    return bookedSlots.some(({ start, end }) => slot === start || slot === end);
  };

  // Get candle graph classes based on appointments
  const getCandleGraphStyle = (slot) => {
    const bookedAppointment = bookedSlots.find(({ start }) => start === slot);
    if (bookedAppointment) {
      return {
        position: 'absolute',
        bottom: 0,
        width: '20px', // width of the candle graph
        height: '30px',
        backgroundColor: 'blue',
        left: '50%',
        transform: 'translateX(-50%)', // Center the candle
      };
    }
    return {};
  };

  // Get current time and calculate index to start rendering slots
  const getCurrentTimeSlotIndex = () => {
    const now = new Date();
    const currentHour = now.getHours();
    const currentMinutes = now.getMinutes();
    const currentSlot = `${currentHour}:${currentMinutes < 30 ? '00' : '30'}`;

    return timeSlots.findIndex(slot => slot === currentSlot) === -1
      ? timeSlots.findIndex(slot => slot > currentSlot) // Find the next time slot
      : timeSlots.findIndex(slot => slot === currentSlot); // Find current slot if it exists
  };

  const currentTimeSlotIndex = getCurrentTimeSlotIndex();

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
              <div className="bg-white rounded-lg shadow-lg w-[863px] h-[200px] p-4 mb-4 relative">
                <div className="flex" style={{ whiteSpace: 'nowrap', overflow: 'hidden' }}>
                  {timeSlots.slice(currentTimeSlotIndex).map((slot, index) => (
                    <div
                      key={index}
                      className={`flex flex-col items-center justify-center border-b h-8 relative ${isTimeSlotBooked(slot) ? 'bg-green-300' : 'bg-white'}`}
                      style={{ minWidth: '80px', height: '30px', marginRight: '20px' }} // Adjust width and spacing
                    >
                      <span className="text-ellipsis overflow-hidden">{slot}</span>
                      {/* Candle Graph for booked slots */}
                      <div style={getCandleGraphStyle(slot)} />
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-lg w-[863px] p-4 mb-4">
                <h2 className="text-xl font-bold mb-2 flex justify-between items-center">
                  Upcoming Appointments
                  <button
                    onClick={() => navigate('/appointments', { state: { addAppointment } })}
                    className="text-blue-500 text-xl"
                  >
                    +
                  </button>
                </h2>
                <table className="min-w-full">
                  <thead>
                    <tr className="bg-gray-200">
                      <th className="border p-2">Patient Name</th>
                      <th className="border p-2">Reason</th>
                      <th className="border p-2">Time</th>
                    </tr>
                  </thead>
                  <tbody>
                    {appointments.length === 0 ? (
                      <tr>
                        <td colSpan="3" className="text-center p-2">No upcoming appointments</td>
                      </tr>
                    ) : (
                      appointments.map((appointment, index) => (
                        <tr key={index} className="hover:bg-gray-100">
                          <td className="border p-2">{appointment.patientName}</td>
                          <td className="border p-2">{appointment.reason}</td>
                          <td className="border p-2">{appointment.time}</td>
                        </tr>
                      ))
                    )}
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
