"use client"; // Add this line to make the component run on the client-side

import React, { useEffect, useState } from "react";
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

const ContentWritingPage = () => {
  const [isClient, setIsClient] = useState(false);
  const [radius, setRadius] = useState(140); // Default radius for larger screens

  useEffect(() => {
    setIsClient(true);
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setRadius(80); // Smaller radius for mobile screens
      } else {
        setRadius(140); // Larger radius for larger screens
      }
    };
    
    handleResize(); // Set initial radius
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="min-h-screen flex flex-col md:flex-row justify-between items-center bg-black text-white mt-8 p-4 md:p-16">
      {/* Left Side: Circular service selector */}
      <div className="relative w-full md:w-1/2 flex justify-center items-center mb-10 md:mb-0">
        <div className="relative w-[min(300px,80vw)] h-[min(300px,80vw)] md:w-[min(400px,80vw)] md:h-[min(400px,80vw)] rounded-full flex justify-center items-center overflow-hidden">
          {/* Background Video */}
          {isClient && (
            <video
              className="absolute top-0 left-0 w-full h-full object-cover rounded-full"
              autoPlay
              loop
              muted
              playsInline
            >
              <source src="/service.mp4" type="video/mp4" />
              Sorry, your browser does not support the video tag.
            </video>
          )}

          {/* Central Services button */}
          <Link href="/services">
            <button
              className="absolute z-10 px-4 py-2 text-base md:text-lg font-semibold text-white bg-gradient-to-r from-purple-500 to-blue-600 rounded-full"
              style={{
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                zIndex: 10,
              }}
            >
              Services
            </button>
          </Link>

          {/* Circular static service titles */}
          {serviceTitles.map((service, index) => {
            const angle = (360 / serviceTitles.length) * index; // Calculate angle for each service
            const x = radius * Math.cos((angle * Math.PI) / 180);
            const y = radius * Math.sin((angle * Math.PI) / 180);

            return (
              <Link key={service.name} href={service.path}>
                <div
                  className="absolute text-xs md:text-sm font-semibold text-center w-16 md:w-24"
                  style={{
                    transform: `translate(${x}px, ${y}px) translate(-50%, -50%)`,
                    zIndex: 5,
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
        <h1 className="text-3xl md:text-6xl font-bold">Content Writing</h1>
        <h3 className="mt-4 text-lg md:text-xl text-gray-400">
          Content Writing by Code Vibe Studios
        </h3>
        <p className="mt-4 text-sm md:text-lg text-gray-300 leading-relaxed">
          At Code Vibe Studios, our content writing services are all about crafting
          compelling and engaging material that speaks directly to your audience.
          We blend creativity with SEO best practices to ensure your brand&ldquo;s voice
          is heard, resonating with your audience while driving conversions. Let us
          help you tell your story in a way that captivates and connects.
        </p>
        {/* Contact button */}
        <Link href="/contactUs">
          <button className="mt-8 px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-600 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-blue-700 transition hover:scale-105">
            Contact Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ContentWritingPage;
