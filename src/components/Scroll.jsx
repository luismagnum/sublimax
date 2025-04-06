"use client";
import { useState, useEffect } from 'react';
import { FaArrowUp } from "react-icons/fa";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    isVisible && (
        <button
        onClick={scrollToTop}
        className="fixed right-8 z-50 w-12 h-12 flex items-center justify-center bg-red-500 text-black font-bold rounded-full shadow-lg hover:bg-red-400 transition-colors cursor-pointer mx-auto"
        style={{ bottom: '100px' }}
        aria-label="Volver arriba"
      >
        <FaArrowUp />
      </button>
      
    )
  );
};

export default ScrollToTop;
