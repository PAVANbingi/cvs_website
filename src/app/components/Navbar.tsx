"use client"; // Ensure this is marked as a client component 

import { useState } from 'react'; // Import useState for managing mobile menu state
import Link from "next/link"; // Import Link from next

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State for mobile menu toggle

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Toggle mobile menu visibility
  };

  return (
    <nav className="my-4 mx-4 bg-white bg-opacity-30 backdrop-blur-lg fixed top-0 left-0 right-0 z-20 border-b border-gray-200 rounded-lg">
      <div className="max-w-[1240px] mx-auto flex justify-between items-center h-[64px] px-6"> {/* Container */}
        {/* Logo Section */}
        <div className="flex items-center">
          <img
            src={'/cvs_logo.png'} // Update with your logo path
            alt="Code Vibe Studios Logo"
            className="h-16" // Adjusted height for better proportion
          />
        </div>

        {/* Links Section for Desktop */}
        <div className={`hidden md:flex space-x-10`}>
          <Link href="/" className="text-gray-900 hover:bg-gradient-to-r from-purple-400 to-blue-500 text-lg font-medium transition duration-300 p-2 rounded-full">
            Home
          </Link>
          <Link href="/about" className="text-gray-900 hover:bg-gradient-to-r from-purple-400 to-blue-500 text-lg font-medium transition duration-300 p-2 rounded-full">
            About us
          </Link>
          <Link href="/services" className="text-gray-900 hover:bg-gradient-to-r from-purple-400 to-blue-500 text-lg font-medium transition duration-300 p-2 rounded-full">
            Services
          </Link>
          <Link href="/contactUs" className="text-gray-900 hover:bg-gradient-to-r from-purple-400 to-blue-500 text-lg font-medium transition duration-300 p-2 rounded-full">
            Contact us
          </Link>
        </div>

        {/* Button Section */}
        <div>
          <button className="bg-gradient-to-r from-purple-500 to-blue-600 text-gray-800 px-6 py-2 rounded-full font-medium transition duration-300 hover:bg-gradient-to-r hover:from-purple-400 hover:to-blue-500">
            Book a Call
          </button>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="bg-gradient-to-r from-purple-500 to-blue-600 text-gray-900 hover:bg-gradient-to-r hover:from-purple-400 hover:to-blue-500 focus:outline-none rounded-full p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col space-y-2 p-4 bg-white bg-opacity-30 backdrop-blur-lg border border-gray-300 rounded-lg">
          <Link href="/" className="text-gray-900 hover:bg-gradient-to-r from-purple-400 to-blue-500 transition duration-300 p-2 rounded-full">Home</Link>
          <Link href="/about" className="text-gray-900 hover:bg-gradient-to-r from-purple-400 to-blue-500 transition duration-300 p-2 rounded-full">About us</Link>
          <Link href="/services" className="text-gray-900 hover:bg-gradient-to-r from-purple-400 to-blue-500 transition duration-300 p-2 rounded-full">Services</Link>
          <Link href="/contactUs" className="text-gray-900 hover:bg-gradient-to-r from-purple-400 to-blue-500 transition duration-300 p-2 rounded-full">Contact us</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
