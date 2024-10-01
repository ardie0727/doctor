// Patients.jsx
import React, { useState } from 'react';
import PatientCard from './PatientCard'; // Import the PatientCard component
import Layout from './Layout';

const Patients = () => {
  // State for search term
  const [searchTerm, setSearchTerm] = useState('');

  // Sample patient data
  const patients = [
    { name: 'Vivek Chouhan', email: 'vivek.211215.co@mhssce.ac.in' },
    { name: 'Rehan Sayyed', email: 'rehan.211242.co@mhssce.ac.in' },
    { name: 'Nishikant Raut', email: 'nishi.211241.co@mhssce.ac.in' },
    { name: 'Rohit Deshmukh', email: 'rohit.211244.co@mhssce.ac.in' },
    { name: 'Fatima Ansari', email: 'fatima@mhssce.ac.in' },
  ];

  // Filter patients based on search term
  const filteredPatients = patients.filter(patient =>
    patient.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (<Layout>
    <div>
      {/* Search Bar */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search patients..."
          className="border rounded-lg py-2 px-4 w-full"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      {/* Patient Cards */}
      <div className="grid grid-cols-4 gap-6">
        {filteredPatients.map((patient, index) => (
          <PatientCard key={index} name={patient.name} email={patient.email} />
        ))}
      </div>
    </div>
    </Layout>
  );
};

export default Patients;
