"use client"; // Ensure this is marked as a client component 

import { useState } from 'react'; // Import useState for managing mobile menu state

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State for mobile menu toggle

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Toggle mobile menu visibility
  };

  return (
    <nav className="my-4 mx-4 bg-white shadow-lg fixed top-0 left-0 right-0 z-20 border-b border-gray-200 rounded-lg">
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
          <a href="#" className="text-gray-900 hover:bg-gradient-to-r from-purple-400 to-blue-500 text-lg font-medium transition duration-300 p-2 rounded-lg">
            Home
          </a>
          <a href="#about" className="text-gray-900 hover:bg-gradient-to-r from-purple-400 to-blue-500 text-lg font-medium transition duration-300 p-2 rounded-lg">
            About us
          </a>
          <a href="#services" className="text-gray-900 hover:bg-gradient-to-r from-purple-400 to-blue-500 text-lg font-medium transition duration-300 p-2 rounded-lg">
            Services
          </a>
          <a href="#contactUs" className="text-gray-900 hover:bg-gradient-to-r from-purple-400 to-blue-500 text-lg font-medium transition duration-300 p-2 rounded-lg">
            Contact us
          </a>
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
        <div className="md:hidden flex flex-col space-y-2 p-4 bg-white border border-gray-300 rounded-lg">
          <a href="#" className="text-gray-900 hover:bg-gradient-to-r from-purple-400 to-blue-500 transition duration-300 p-2 rounded-full">Home</a>
          <a href="#about" className="text-gray-900 hover:bg-gradient-to-r from-purple-400 to-blue-500 transition duration-300 p-2 rounded-full">About us</a>
          <a href="#services" className="text-gray-900 hover:bg-gradient-to-r from-purple-400 to-blue-500 transition duration-300 p-2 rounded-full">Services</a>
          <a href="#contactUs" className="text-gray-900 hover:bg-gradient-to-r from-purple-400 to-blue-500 transition duration-300 p-2 rounded-full">Contact us</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;




// basic grid that i created 

// export default function ContactUs() {
//     return (
      
//       <section className="bg-black text-white py-16">
//         {/* Section Title */}
//         <div className="text-center mb-12">
//           <h2 className="text-3xl font-light italic mb-4">
//             <span className="font-semibold">Interested</span> in having a deal with us?
//           </h2>
//           <a
//             href="#"
//             className="inline-block bg-gradient-to-r from-purple-400 to-blue-500 text-white px-6 py-3 rounded-full shadow-lg text-lg font-medium hover:opacity-90 transition"
//           >
//             Connect Now &rarr;
//           </a>
//         </div>
  
//         {/* Services Grid */}
//         <div className="container mx-auto px-4">
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {/* Card 1 */}
//             <ServiceCard
//               title="GRAPHICS AND DESIGN"
//               description="Web & App Design"
//               imgSrc="/graphics&design.png"
//               gradient="from-blue-500 to-blue-300"
//             />
  
//             {/* Card 2 */}
//             <ServiceCard
//               title="PROGRAMMING & TECH"
//               description="Website Development"
//               imgSrc="/programmer&tech.png"
//               gradient="from-pink-500 to-pink-300"
//             />
  
//             {/* Card 3 */}
//             <ServiceCard
//               title="DIGITAL MARKETING"
//               description="Methods & Technologies"
//               imgSrc="/digitalmarket.png" 
//               gradient="from-green-500 to-green-300"
//             />
  
//             {/* Card 4 */}
//             <ServiceCard
//               title="WRITING"
//               description="Content Writing"
//               imgSrc="/writing.png"
//               gradient="from-purple-500 to-purple-300"
//             />
  
//             {/* Card 5 */}
//             <ServiceCard
//               title="VIDEO & ANIMATIONS"
//               description="Video Editing"
//               imgSrc="/video&animation.png"
//               gradient="from-yellow-500 to-yellow-300"
//             />
//           </div>
//         </div>
//       </section>
//     );
//   }
  
//   interface ServiceCardProps {
//     title: string;
//     description: string;
//     imgSrc: string;
//     gradient: string;
//   }
  
//   const ServiceCard = ({ title, description, imgSrc, gradient }: ServiceCardProps) => {
//     return (
//       <div className="relative group p-1">
//         {/* Border Gradient Hover Effect */}
//         <div
//           className={`absolute inset-0 rounded-lg bg-gradient-to-r ${gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
//         ></div>
//         {/* Card Content */}
//         <div className="relative bg-gray-800 rounded-lg p-6 text-center overflow-hidden">
//           <img
//             src={imgSrc}
//             alt={title}
//             className="w-full h-48 object-cover rounded-lg mb-4"
//           />
//           <h3 className="text-xl font-semibold mb-2">{title}</h3>
//           <p className="text-sm text-gray-300">{description}</p>
//         </div>
//       </div>
//     );
//   };
  