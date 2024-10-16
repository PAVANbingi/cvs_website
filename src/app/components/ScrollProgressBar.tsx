'use client'; // Mark as a client component

import { useEffect, useState } from 'react';

const ScrollProgressBar = () => {
  const [scrollWidth, setScrollWidth] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || window.pageYOffset;
      const scrollHeight = document.body.scrollHeight - window.innerHeight;
      const progress = (scrollTop / scrollHeight) * 100;
      setScrollWidth(progress);
    };

    window.addEventListener('scroll', handleScroll);

    // Initial update on mount
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className="fixed top-0 left-0 h-4 bg-gradient-to-r from-purple-500 to-blue-500 transition-width duration-300 ease-in-out z-50"
      style={{ width: `${scrollWidth}%`, transition: 'width 0.3s ease-in-out' }} // Adjust the duration and easing for smoothness
    ></div>
  );
};

export default ScrollProgressBar;
