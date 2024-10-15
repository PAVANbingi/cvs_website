"use client"; // Ensure this is marked as a client component 

import { useState } from 'react'; // Import useState for managing mobile menu state
import Link from "next/link"; // Import Link from next
import Image from 'next/image'; // Import Image from next/image for optimized images

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State for mobile menu toggle

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Toggle mobile menu visibility
  };

  return (
    <nav className="my-4 mx-4 bg-white bg-opacity-20 backdrop-blur-lg fixed top-0 left-0 right-0 z-20 border-b border-gray-800 rounded-lg">
      <div className="max-w-[1240px] mx-auto flex justify-between items-center h-[64px] px-6"> {/* Container */}
        {/* Logo Section */}

          <div className="flex items-center justify-center md:justify-start p-4 md:p-0">
            <Image
              src="/cvs_logo.png" // Ensure the path to the logo is correct
              alt="Code Vibe Studios Logo"
              height={40} // Adjust height as needed (set to 64px as per Figma design)
              width={120} // Adjust width as needed (1,240px fixed width)
              
            />
          </div>

        {/* Links Section for Desktop */}
        <div className={`hidden md:flex space-x-10`}>
          <Link href="/" className="text-white hover:bg-gradient-to-r from-purple-400 to-blue-500 text-lg font-medium transition duration-300 p-2 rounded-full">
            Home
          </Link>

          <Link href="/about" className="text-white hover:bg-gradient-to-r from-purple-400 to-blue-500 text-lg font-medium transition duration-300 p-2 rounded-full">
            About us
          </Link>

          <Link href="/services_" className="text-white hover:bg-gradient-to-r from-purple-400 to-blue-500 text-lg font-medium transition duration-300 p-2 rounded-full">
            Services
          </Link>

          <Link href="/contactUs" className="text-white hover:bg-gradient-to-r from-purple-400 to-blue-500 text-lg font-medium transition duration-300 p-2 rounded-full">
            Contact us
          </Link>

        </div>

        {/* Button Section */}
        <div>
        <Link href="/contactUs">
          <button className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-6 py-2 rounded-full font-medium transition duration-300 hover:bg-gradient-to-r hover:from-purple-400 hover:to-blue-500">
            Book a Call
          </button>
          </Link>
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
          <Link href="/" className="text-white hover:bg-gradient-to-r from-purple-400 to-blue-500 transition duration-300 p-2 rounded-full">Home</Link>
          <Link href="/about" className="text-white hover:bg-gradient-to-r from-purple-400 to-blue-500 transition duration-300 p-2 rounded-full">About us</Link>
          <Link href="/services" className="text-white hover:bg-gradient-to-r from-purple-400 to-blue-500 transition duration-300 p-2 rounded-full">Services</Link>
          <Link href="/contactUs" className="text-white hover:bg-gradient-to-r from-purple-400 to-blue-500 transition duration-300 p-2 rounded-full">Contact us</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
