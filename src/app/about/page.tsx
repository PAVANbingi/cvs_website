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
        We’re on it!   <br />
        This page will be updated soon 
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
