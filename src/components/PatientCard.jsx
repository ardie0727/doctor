import React from 'react';
//patient cards single
const PatientCard = ({ name, email }) => {
  return (
    <div className="bg-white shadow-lg rounded-2xl p-6 mb-6 h-96 flex flex-col justify-between">
      <div className="flex justify-center mb-4">
        <div className="w-24 h-24 border border-gray-300 rounded-full flex items-center justify-center overflow-hidden">
          <span className="text-gray-400">Photo</span>
        </div>
      </div>
      <h2 className="text-xl font-semibold text-center">{name}</h2>
      <p className="text-gray-600 text-center">{email}</p>
      <div className="flex justify-between mt-4">
        <button className="flex items-center justify-center space-x-1 text-white rounded-lg py-3 px-4 w-32">
          <img src="/email-icon.png" alt="Email" className="w-6 h-6" />
        </button>
        <button className="flex items-center justify-center space-x-1 text-white rounded-lg py-3 px-4 w-32">
          <img src="/phone-icon.png" alt="Phone" className="w-6 h-6" />
        </button>
        <button className="flex items-center justify-center space-x-1 text-white rounded-lg py-3 px-4 w-32">
          <img src="/details-icon.png" alt="Details" className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

export default PatientCard;
