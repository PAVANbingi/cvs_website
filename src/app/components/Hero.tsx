"use client"; // This indicates that the component is for client-side rendering

import React, { useEffect, useState } from "react";

export default function Hero() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // This will run after the component mounts on the client side
    setIsMounted(true);
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center bg-[#030712]">
      {/* Background Video */}
      <div className="absolute inset-0">
        {isMounted && ( // Render video only if component is mounted
          <video
            src="/cvs.mp4" // Ensure the path is correct
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
            style={{ filter: 'brightness(0.5)' }} // Adjust brightness for a subdued background
          />
        )}
      </div>

      {/* Hero Content */}
      <div className="text-center px-6 relative z-10">
        {/* Main Heading */}
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">
          Your Vision, <br />
          Coded to Perfection
        </h1>

        {/* Subheading */}
        <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
          &ldquo;Seamless design and development to bring your website to life effortlessly!&ldquo;
        </p>

        {/* Call to Action Button */}
        <button className="bg-gradient-to-r from-purple-500 to-blue-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-gradient-to-r hover:from-purple-600 hover:to-blue-700 transition hover:scale-105">
          Explore Now
        </button>
      </div>
    </section>
  );
}
