import React from 'react';  

//
const GridItem = ({ name }) => {  
  return (  
   <div className="bg-white p-4 rounded shadow-md flex flex-col justify-center items-center">  
    <h2 className="text-lg font-bold">{name}</h2>  
    <div className="flex space-x-2 mt-4">  
      <button className="bg-gray-200 hover:bg-gray-300 text-gray-600 font-bold py-2 px-4 rounded">  
       <i className="fas fa-edit"></i>  
      </button>  
      <button className="bg-gray-200 hover:bg-gray-300 text-gray-600 font-bold py-2 px-4 rounded">  
       <i className="fas fa-trash"></i>  
      </button>  
      <button className="bg-gray-200 hover:bg-gray-300 text-gray-600 font-bold py-2 px-4 rounded">  
       <i className="fas fa-info-circle"></i>  
      </button>  
    </div>  
   </div>  
  );  
};  
  
export default GridItem;
