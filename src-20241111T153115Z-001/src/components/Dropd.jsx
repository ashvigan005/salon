import React, { useState } from 'react';
import Review from './Review'; // Import your Review component

const Dropd = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const services = [
    "Haircut",
    "Hair Coloring",
    "Manicure",
    "Pedicure",
    "Facial",
    "Massage",
    "Waxing",
  ];

  return (
    <div className="relative inline-block text-left w-full">
      <div>
        <button
          type="button"
          className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          id="menu-button"
          aria-expanded="true"
          aria-haspopup="true"
          onClick={toggleDropdown}
        >
          Services
          <svg
            className="-mr-1 ml-2 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M10 3a1 1 0 011 1v10a1 1 0 01-2 0V4a1 1 0 011-1z"
              clipRule="evenodd"
            />
            <path
              fillRule="evenodd"
              d="M4.293 9.707a1 1 0 011.414 0L10 14.086l4.293-4.379a1 1 0 011.414 1.414l-5 5.086a1 1 
              0 01-1.414 0l-5-5.086a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      {isOpen && (
        <div>
          <Review /> 
        </div>
      )}
    </div>
  );
};

export default Dropd;
