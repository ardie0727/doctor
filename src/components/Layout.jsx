// Layout.jsx
import React from 'react';
import Header from './Header'; // Import Header component
import Sidebar from './Sidebar'; // Import Sidebar component

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-8 bg-[#5AC8FA]">
          {children} {/* Placeholder to render the specific page content */}
        </main>
      </div>
    </div>
  );
};

export default Layout;
