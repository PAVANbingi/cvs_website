// "use client"; // Ensure this is a client-side component

// import React, { useState } from "react";
// import { Transition } from "@headlessui/react";
// import { useRouter } from "next/navigation"; // Use this for the App Router

// const serviceTitles = [
//   { name: "Digital Marketing", path: "/services/digital-marketing" },
//   { name: "Content Writing", path: "/services/content-writing" },
//   { name: "Programming & Tech", path: "/services/programming-tech" },
//   { name: "Online Training", path: "/services/online-training" },
//   { name: "Graphics & Design", path: "/services/graphics-design" },
//   { name: "Video & Animation", path: "/services/video-animation" }
// ];

// const ServicesPage = () => {
//   const [activeService, setActiveService] = useState<string | null>(null);
//   const [isTransitioning, setIsTransitioning] = useState(false);
//   const router = useRouter(); // Use next/navigation's router

//   // Handle service selection with navigation
//   const selectService = (service: { name: string; path: string }) => {
//     setIsTransitioning(true);
//     setTimeout(() => {
//       setActiveService(service.name);
//       setIsTransitioning(false);
//       router.push(service.path); // Use next/navigation's push for navigation
//     }, 700); // Delay for animation timing (matches the slide-out duration)
//   };

//   return (
//     <div className="relative w-full h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white flex items-center justify-center overflow-hidden">
 

//       {/* Central Circle Container */}
//       <div className="relative z-10 flex items-center justify-center">
//         {/* Transition Outgoing Circle */}
//         <Transition
//           show={!isTransitioning}
//           enter="transition-transform duration-700 ease-in-out"
//           enterFrom="translate-x-0 opacity-100"
//           enterTo="-translate-x-full opacity-0"
//           leave="transition-transform duration-700 ease-in-out"
//           leaveFrom="translate-x-0 opacity-100"
//           leaveTo="-translate-x-full opacity-0"
//         >
//           <div className="absolute flex items-center justify-center">
//             <div className="w-[400px] h-[400px] rounded-full flex items-center justify-center bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 shadow-lg">
//               <h2 className="text-4xl md:text-5xl font-bold">
//                 {activeService || "SERVICES"}
//               </h2>
//             </div>
//           </div>
//         </Transition>

//         {/* Transition Incoming Circle */}
//         <Transition
//           show={isTransitioning}
//           enter="transition-transform duration-700 ease-in-out"
//           enterFrom="translate-x-full opacity-0"
//           enterTo="translate-x-0 opacity-100"
//           leave="transition-transform duration-700 ease-in-out"
//           leaveFrom="translate-x-0 opacity-100"
//           leaveTo="translate-x-full opacity-0"
//         >
//           <div className="absolute flex items-center justify-center">
//             <div className="w-[400px] h-[400px] rounded-full flex items-center justify-center bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 shadow-lg">
//               <h2 className="text-4xl md:text-5xl font-bold">
//                 {activeService}
//               </h2>
//             </div>
//           </div>
//         </Transition>
//       </div>

//       {/* Circular Service Labels */}
//       <div className="absolute w-[600px] h-[600px] flex items-center justify-center">
//         {serviceTitles.map((service, index) => (
//           <div
//             key={index}
//             className="absolute flex items-center justify-center"
//             style={{
//               transform: `rotate(${index * (360 / serviceTitles.length)}deg) translate(290px) rotate(-${index * (360 / serviceTitles.length)}deg)`
//             }}
//           >
//             <div
//               onClick={() => selectService(service)}
//               className="cursor-pointer text-lg md:text-xl text-white font-semibold transition-transform transform hover:scale-110"
//               style={{ transform: "rotate(90deg)" }}
//             >
//               {service.name}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ServicesPage;



// ===========================================================
// ====================== working ON ======================
// ===========================================================
"use client";
import React from "react";
import Image from "next/image";

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#030712] text-white flex items-center justify-center">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          src="/vibe.mp4" // Path to your video file
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          style={{ filter: 'brightness(0.5)' }} // Adjust brightness for a subdued background
        />
      </div>

      {/* Main Content */}
      <div className="z-10 text-center">
        <h1 className="text-7xl font-bold">
        We are working on it! <br />
        Updates will be available shortly  
          <span className="inline-block align-middle ml-4">
            {/* Arrow icon */}
            <Image 
              src="/logo.ico" 
              alt="Logo" // Provide an appropriate alt text
              width={56} // Adjust width as needed
              height={56} // Adjust height as needed
            />
          </span>
        </h1>
      </div>
    </div>
  );
}