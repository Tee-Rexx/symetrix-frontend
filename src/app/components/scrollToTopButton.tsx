"use client"; // Required for client-side functionality

import { useEffect, useState } from "react";

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const toggleVisibility = () => {
      const scrollPosition = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight;
      const viewportHeight = window.innerHeight;
      const scrollPercent = (scrollPosition / (scrollHeight - viewportHeight)) * 100;

      setIsVisible(scrollPercent > 5);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 w-12 h-12 text-white rounded-full shadow-xl flex items-center justify-center transition-opacity duration-500 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      style={{
        background: "linear-gradient(to right, #02f0f1, #024868)",
        zIndex: 10000,
      }}
      aria-label="Scroll to Top"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 15l7-7 7 7"
        />
      </svg>
    </button>
  );
}
