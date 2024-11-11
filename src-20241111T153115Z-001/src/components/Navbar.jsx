import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo22.png'; 

function Navbar() {
  const [loginClicked, setLoginClicked] = useState(false);

  const handleLoginClick = () => {
    setLoginClicked(true);
  };

  return (
    <>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Anta&family=Jaro:opsz@6..72&family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Poetsen+One&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Reddit+Mono:wght@200..900&family=Sevillana&display=swap');
        `}
      </style>
      <nav className="bg-gray-100 border-b border-gray-200 dark:border-gray-600 fixed w-full z-20 top-0 left-0">
        <div className="max-w-screen- mx-auto px-4 py-2 flex items-center justify-between">
          <div className="flex items-center">
            <div className="flex items-center space-x-2">
              <img src={logo} alt="Flowbite Logo" className="h-8" />
              <span className="text-lg font-semibold" style={{ fontFamily: 'Poppins, sans-serif' }}>New Waves Saloon</span>
            </div>
          </div>
          <div className="flex-grow flex justify-center">
            <ul className="flex space-x-6" style={{ paddingRight: '200px' }}>
              <li><Link to="/" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 font-medium">Home</Link></li>
              <li>
                <div className={loginClicked ? 'login-clicked' : ''}>
                  <Link to="/login" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 font-medium" onClick={handleLoginClick}>Login</Link>
                </div>
              </li>
            </ul>
          </div>
          <div>
            <button type="button" className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
              Get Started
            </button>
          </div>
        </div> 
      </nav>
    </>
  );
}

export default Navbar;
