"use client"; // Ensure this is marked as a client component

import { useState, useEffect } from 'react';
import Link from "next/link";
import Image from 'next/image';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Close the menu after 5 seconds if it's open
  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>; // Explicitly typing the timer variable
    if (isOpen) {
      console.log("Menu opened, starting timer...");
      timer = setTimeout(() => {
        console.log("Timer finished, closing menu.");
        setIsOpen(false);
      }, 5000);
    }
    return () => {
      clearTimeout(timer); // Cleanup the timer on component unmount or when isOpen changes
      console.log("Timer cleared.");
    };
  }, [isOpen]);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 py-4 px-6 bg-white/5 backdrop-blur-lg border-b border-gray-500/20 transition-all duration-500 hover:bg-white/10 hover:border-gray-300/30 shadow-lg">
      <div className="max-w-[1240px] mx-auto flex justify-between items-center h-[64px]">
        {/* Logo Section */}
        <Link href="/">
          <div className="flex items-center cursor-pointer">
            <Image
              src="/cvs_logo.png"
              alt="Code Vibe Studios Logo"
              height={60}
              width={150}
              className="hover:opacity-80 transition-opacity duration-300"
            />
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-10">
          <Link href="/" className="text-white text-lg font-medium  hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r hover:from-purple-400 hover:to-blue-500 hover:scale-105 ">
            Home
          </Link>
          <Link href="/about" className="text-white text-lg font-medium  hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r hover:from-purple-400 hover:to-blue-500 hover:scale-105">
            About Us
          </Link>
          <Link href="/services" className="text-white text-lg font-medium  hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r hover:from-purple-400 hover:to-blue-500 hover:scale-105">
            Services
          </Link>
          <Link href="/contactUs" className="text-white text-lg font-medium  hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r hover:from-purple-400 hover:to-blue-500 hover:scale-105">
            Contact Us
          </Link>
        </div>

        {/* Call to Action Button (Desktop Only) */}
        <div className="hidden md:flex">
          <Link href="/vibeEnquiry">
            <button className="bg-gradient-to-r from-purple-500 to-blue-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-gradient-to-r hover:from-purple-600 hover:to-blue-700 transition hover:scale-105">
              
               {/* hover:bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 rounded-lg text-white font-semibold text-lg transition-transform hover:scale-105 transition duration-300 */}
               Begin Your Journey
            </button>
          </Link>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="bg-gradient-to-r from-purple-500 to-blue-600 text-white p-2 rounded-full focus:outline-none transition-transform duration-300 hover:bg-gradient-to-r hover:from-purple-400 hover:to-blue-500"
          >
            {isOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-center space-y-6 p-6 bg-gray-900 bg-opacity-90 backdrop-blur-md rounded-lg">
          <Link href="/" className="text-white hover:bg-gradient-to-r from-purple-400 to-blue-500 transition duration-300 p-2 rounded-lg">
            Home
          </Link>
          <Link href="/about" className="text-white hover:bg-gradient-to-r from-purple-400 to-blue-500 transition duration-300 p-2 rounded-lg">
            About Us
          </Link>
          <Link href="/services" className="text-white hover:bg-gradient-to-r from-purple-400 to-blue-500 transition duration-300 p-2 rounded-lg">
            Services
          </Link>
          <Link href="/contactUs" className="text-white hover:bg-gradient-to-r from-purple-400 to-blue-500 transition duration-300 p-2 rounded-lg">
            Contact Us
          </Link>

          {/* Call to Action Button (Mobile Menu) */}
          <Link href="/vibeEnquiry">
            <button className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-6 py-2 rounded-lg font-medium transition duration-300 hover:bg-gradient-to-r hover:from-purple-400 hover:to-blue-500">
            Begin Your Journey
            </button>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
