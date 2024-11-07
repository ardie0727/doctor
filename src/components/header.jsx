import React from 'react';  
//upar wala navbar hai
//ye aur sidebar layout mai import kiye hai
//bohot ghatiya hai dono
const Header = () => {  
  return (  
    <header className="bg-gray-100 py-4 flex justify-between items-center sticky top-0 shadow z-50">  
      <h1 className="text-lg font-bold ml-4">MedWell</h1>  
      <nav className="mr-4">  
        <ul className="flex space-x-4">  
          <li>  
            <button style={{ backgroundColor: '#ED3C46', borderRadius: '20px' }} className="hover:bg-red-700 text-white font-bold py-2 px-4">  
              Home  
            </button>  
          </li>  
          <li>  
            <button style={{ backgroundColor: '#ED3C46', borderRadius: '20px' }} className="hover:bg-red-700 text-white font-bold py-2 px-4">  
              Dashboard  
            </button>  
          </li>
          <li>  
            <button style={{ backgroundColor: '#ED3C46', borderRadius: '20px' }} className="hover:bg-red-700 text-white font-bold py-2 px-4">  
              About Us  
            </button>  
          </li>
          <li>  
            <button style={{ backgroundColor: '#ED3C46', borderRadius: '20px' }} className="hover:bg-red-700 text-white font-bold py-2 px-4">  
              Pricing  
            </button>  
          </li>
        </ul>  
      </nav>  
    </header>  
  );  
};  

export default Header;
