"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Sun, Moon, Cloud } from "lucide-react"; // weather icons

function Navbar() {
  const [darkMode, setDarkMode] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.backgroundColor = darkMode ? "#0B132B" : "#EAF4FF";
  }, [darkMode]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Planning", path: "/trip plan" },
    { name: "weather ", path: "/air-quality" },
  ];

  return (
    <nav
      className={`sticky top-0 z-50 max-w-180 mx-auto rounded-xl px-3 py-3 flex justify-between items-center transition-colors duration-300 shadow-md ${
        darkMode
          ? "bg-[#0B132B]/80 text-white backdrop-blur-md"
          : " text-black  backdrop-blur-md"
      }`}
    >
      <div className="flex items-center space-x-2">
        <Cloud className="w-7 h-7 text-yellow-300" />
        <h1 className="text-xl font-bold">AstroClime</h1>
      </div>

      <ul className="hidden md:flex space-x-4 font-semibold text-lg ml-3">
        {navLinks.map((link, idx) => (
          <li key={idx}>
            <Link
              href={link.path}
              className={`transition-colors duration-200 ${
                link.name === "Dashboard"
                  ? "text-yellow-300"
                  : "hover:text-yellow-200"
              }`}
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>

      <div className="flex items-center ml-4">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="w-10 h-5 flex items-center rounded-full p-1 transition-colors duration-300 bg-gray-300"
        >
          {darkMode ? (
            <Moon className="w-4 h-4 text-white ml-auto" />
          ) : (
            <Sun className="w-4 h-4 text-yellow-500" />
          )}
        </button>

        <button
          className="md:hidden focus:outline-none ml-3"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg
            className="w-7 h-7"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={
                isMobileMenuOpen
                  ? "M6 18L18 6M6 6l12 12"
                  : "M4 6h16M4 12h16M4 18h16"
              }
            />
          </svg>
        </button>
      </div>

      {isMobileMenuOpen && (
        <ul
          className={`absolute top-20 left-0 w-full flex flex-col items-center space-y-4 py-6 font-semibold text-lg shadow-lg md:hidden transition-all duration-300 ${
            darkMode
              ? "bg-[#0B132B]/95 text-white"
              : "bg-sky-300/90 text-white"
          }`}
        >
          {navLinks.map((link, idx) => (
            <li key={idx}>
              <Link
                href={link.path}
                className={`transition-colors duration-200 ${
                  link.name === "Dashboard"
                    ? "text-yellow-300"
                    : "hover:text-yellow-200"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
