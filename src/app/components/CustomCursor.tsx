'use client'; // Mark as a client component

import { useEffect } from 'react';

const CustomCursor = () => {
  useEffect(() => {
    const cursor = document.querySelector('.cursor') as HTMLElement;

    const handleMouseMove = (e: MouseEvent) => {
      cursor.style.top = `${e.clientY}px`;
      cursor.style.left = `${e.clientX}px`;
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      className="cursor fixed top-0 left-0 w-8 h-8 bg-gradient-to-r from-blue-500 via-blue-700 to-purple-500 rounded-full pointer-events-none transform -translate-x-1/2 -translate-y-1/2 transition-all duration-75 ease-in-out z-50
      animate-blink shadow-[0_0_25px_rgba(255,255,255,0.9), 0_0_40px_rgba(255,255,255,1)]
"
    ></div>
  );
};

export default CustomCursor;
