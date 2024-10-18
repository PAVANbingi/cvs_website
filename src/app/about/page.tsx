"use client";

import React from "react";
import Image from 'next/image';

export default function Page() {
    return (
        <section className="bg-[#030712] text-white py-20 px-4">
        <div className="container mx-auto max-w-screen-xl px-4 md:px-20">
  
          {/* Our page Section Title */}
          <h2 className="text-center text-3xl md:text-4xl font-bold mb-12">
            About Us
          </h2>
  
          {/* Wrapper for hovering  effect (border) */}
          <div className="relative group p-1 rounded-lg"> 
  
            {/* Outer Border Gradient Hover Effect */}
            <div
              className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none"
            ></div>
  
            {/* Content Wrapper inside our section */}
            <div className="relative z-10 flex flex-col md:flex-row justify-between items-center bg-gray-800 p-8 md:p-16 rounded-lg">
              
              {/* Text Content */}
              <article className="md:w-3/5 mb-8 md:mb-0 text-center md:text-left">
                <p className="text-base md:text-lg leading-relaxed text-white">
                  At Code Vibe Studio, we transform ideas into exceptional digital experiences.
                  Our dedicated team of designers and developers crafts user-centric websites and applications
                  tailored to your unique needs. We believe in collaboration and precision, working closely with clients 
                  to bring their vision to life. Let’s create something amazing together!
                </p>
              </article>
  
              {/* Image part  */}
              <div className="md:w-1/3 flex justify-center">
                <Image
                  src="/aboutus.png" // Ensure the path is correct
                  alt="Our team at Code Vibe Studio working on a project"
                  width={500} // Specify width
                  height={300} // Specify height
                  className="w-full h-auto rounded-lg object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}
