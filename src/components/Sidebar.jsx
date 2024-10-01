// Sidebar.jsx
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation

const Sidebar = () => {
  return (
    <aside className="bg-gray-100 w-64 h-[calc(100vh-80px)] sticky top-16 flex flex-col justify-between">
      <div className="flex-grow flex flex-col justify-center">
        <ul className="mt-8">
          <li className="py-2 flex items-center pl-4"> {/* Added padding-left */}
            <img src="/ImageDashboard-icon.png" alt="Dashboard" className="w-8 h-8 mr-3" /> {/* Increased icon size */}
            <Link to="/dashboard" className="text-lg font-bold hover:text-red-500 focus:text-red-500"> {/* Link to dashboard */}
              Dashboard
            </Link>
          </li>
          <li className="py-2 flex items-center pl-4"> {/* Added padding-left */}
            <img src="/ImageAppointments-icon.png" alt="Appointments" className="w-8 h-8 mr-3" /> {/* Increased icon size */}
            <Link to="/Appointments" className="text-lg font-bold hover:text-red-500 focus:text-red-500"> {/* Link to appointments */}
              Appointments
            </Link>
          </li>
          <li className="py-2 flex items-center pl-4"> {/* Added padding-left */}
            <img src="/ImagePatients-icon.png" alt="Patients" className="w-8 h-8 mr-3" /> {/* Increased icon size */}
            <Link to="/" className="text-lg font-bold hover:text-red-500 focus:text-red-500"> {/* Link to patients (default route) */}
              Patients
            </Link>
          </li>
          <li className="py-2 flex items-center pl-4"> {/* Added padding-left */}
            <img src="/ImageSchedule-icon.png" alt="Schedule" className="w-8 h-8 mr-3" /> {/* Increased icon size */}
            <Link to="/schedule" className="text-lg font-bold hover:text-red-500 focus:text-red-500"> {/* Link to schedule */}
              Schedule
            </Link>
          </li>
        </ul>
      </div>

      <div>
        <ul>
          <li className="py-2 flex items-center pl-4"> {/* Added padding-left */}
            <img src="/ImageFAQ-icon.png" alt="FAQ" className="w-8 h-8 mr-3" /> {/* Increased icon size */}
            <Link to="/faq" className="text-lg font-bold hover:text-red-500 focus:text-red-500"> {/* Link to FAQ */}
              FAQ
            </Link>
          </li>
          <li className="py-4 flex items-center pl-4"> {/* Added padding-left */}
            <img src="/ImageLogout-icon.png" alt="Log out" className="w-8 h-8 mr-3" /> {/* Increased icon size */}
            <Link to="/logout" className="text-lg font-bold hover:text-red-500 focus:text-red-500"> {/* Link to logout */}
              Log out
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
