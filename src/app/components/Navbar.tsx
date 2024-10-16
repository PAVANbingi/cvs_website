"use client"; // Ensure this is marked as a client component 

import { useState } from 'react'; 
import Link from "next/link"; 
import Image from 'next/image'; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); 

  const toggleMenu = () => {
    setIsOpen(!isOpen); 
  };

  return (
    <nav className="my-4 mx-4 bg-white bg-opacity-10 backdrop-blur-lg fixed top-0 left-0 right-0 z-20 border-b border-gray-800 rounded-lg">
      <div className="max-w-[1240px] mx-auto flex justify-between items-center h-[64px] px-6"> 
        <div className="flex items-center justify-center md:justify-start p-0 md:p-0">
          <Image
            src="/cvs_logo.png"
            alt="Code Vibe Studios Logo"
            height={80}
            width={170}
          />
        </div>

        {/* Desktop Links */}
        {/* <div className="hidden md:flex space-x-10">
          <Link href="/" className="text-white hover:bg-gradient-to-r from-purple-400 to-blue-500 text-lg font-medium transition duration-300 p-2 rounded-full">Home</Link>
          <Link href="/about" className="text-white hover:bg-gradient-to-r from-purple-400 to-blue-500 text-lg font-medium transition duration-300 p-2 rounded-full">About us</Link>
          <Link href="/services_" className="text-white hover:bg-gradient-to-r from-purple-400 to-blue-500 text-lg font-medium transition duration-300 p-2 rounded-full">Services</Link>
          <Link href="/contactUs" className="text-white hover:bg-gradient-to-r from-purple-400 to-blue-500 text-lg font-medium transition duration-300 p-2 rounded-full">Contact us</Link>
        </div> */}
        <div className="hidden md:flex space-x-10">
  <Link href="/" className="text-white hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r hover:from-purple-400 hover:to-blue-500 text-lg font-medium transition duration-300 p-2 rounded-full">Home</Link>
  <Link href="/about" className="text-white hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r hover:from-purple-400 hover:to-blue-500 text-lg font-medium transition duration-300 p-2 rounded-full">About us</Link>
  <Link href="/services_" className="text-white hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r hover:from-purple-400 hover:to-blue-500 text-lg font-medium transition duration-300 p-2 rounded-full">Services</Link>
  <Link href="/contactUs" className="text-white hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r hover:from-purple-400 hover:to-blue-500 text-lg font-medium transition duration-300 p-2 rounded-full">Contact us</Link>
</div>


        {/* Book a Call Button */}
        <div>
          <Link href="/contactUs">
            <button className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-6 py-2 rounded-full font-medium transition duration-300 hover:bg-gradient-to-r hover:from-purple-400 hover:to-blue-500">
            Feel the Vibe
            </button>
          </Link>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="bg-gradient-to-r from-purple-500 to-blue-600 text-gray-900 hover:bg-gradient-to-r hover:from-purple-400 hover:to-blue-500 focus:outline-none rounded-full p-2"
            aria-label="Toggle menu"
          >
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
          <Link href="/" className="text-white hover:bg-gradient-to-r from-purple-400 to-blue-500 transition duration-300 p-2 rounded-full">Home</Link>
          <Link href="/about" className="text-white hover:bg-gradient-to-r from-purple-400 to-blue-500 transition duration-300 p-2 rounded-full">About us</Link>
          <Link href="/services_" className="text-white hover:bg-gradient-to-r from-purple-400 to-blue-500 transition duration-300 p-2 rounded-full">Services</Link>
          <Link href="/contactUs" className="text-white hover:bg-gradient-to-r from-purple-400 to-blue-500 transition duration-300 p-2 rounded-full">Contact us</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
