import React from "react";
import Link from "next/link";

// Array of service titles and paths
const serviceTitles = [
  { name: "Digital Marketing", path: "/services/digital-marketing" },
  { name: "Content Writing", path: "/services/content-writing" },
  { name: "Programming & Tech", path: "/services/programming-tech" },
  { name: "Online Training", path: "/services/online-training" },
  { name: "Graphics & Design", path: "/services/graphics-design" },
  { name: "Video & Animation", path: "/services/video-animation" }
];

const DigitalMarketingPage = () => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row justify-between items-center bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white p-6 md:p-16">
      {/* Left Side: Circular service selector */}
      <div className="relative w-full md:w-1/2 flex justify-center items-center mb-10 md:mb-0">
        <div className="relative w-[min(400px,80vw)] h-[min(400px,80vw)] rounded-full bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 flex justify-center items-center">
          {/* Central Services button */}
          <Link href="/services">
            <button className="absolute z-10 px-4 py-2 text-lg font-semibold text-white bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 rounded-full"
              style={{
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)', // Center the button
                zIndex: 10 // Ensure it's on top of everything
              }}>
              Services
            </button>
          </Link>

          {/* Circular static service titles */}
          {serviceTitles.map((service, index) => {
            const angle = (360 / serviceTitles.length) * index; // Calculate angle for each service
            const radius = 140; // Keep this radius for label spacing
            const x = radius * Math.cos((angle * Math.PI) / 180);
            const y = radius * Math.sin((angle * Math.PI) / 180);

            return (
              <Link key={service.name} href={service.path}>
                <div
                  className="absolute text-xs md:text-sm font-semibold text-center w-24"
                  style={{
                    transform: `translate(${x}px, ${y}px) translate(-50%, -50%)`, // Center the label
                  }}
                >
                  {service.name}
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Right Side: Content */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-start md:ml-8 px-6">
        <h1 className="text-4xl md:text-6xl font-bold">Digital Marketing</h1>
        <h3 className="mt-4 text-lg md:text-xl text-gray-400">Digital Marketing by Code Vibe Studios
        </h3>
        <p className="mt-4 text-md md:text-lg text-gray-300 leading-relaxed">
        Code Vibe Studios brings you cutting-edge digital marketing services that harness the power of the internet to grow your business. From SEO and content marketing to social media and email strategies, we help you connect with your audience and drive meaningful engagement. Our tailored solutions are designed to enhance your online presence and deliver measurable results.
           </p>
        {/* Contact button */}
        <Link href="/contactUs">
          <button className="mt-8 px-6 py-3 bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 rounded-full text-white font-semibold text-lg transition-transform hover:scale-105">
            Contact Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default DigitalMarketingPage;
