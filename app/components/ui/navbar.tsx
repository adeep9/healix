"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, CheckSquare, Upload, Calendar, Package } from "lucide-react";

const Navbar = () => {
  // State to manage navbar open/close
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle the navbar open/close
  const toggleNavbar = () => setIsOpen(!isOpen);

  return (
    <div>
      {/* Hamburger menu button */}
      <button
        onClick={toggleNavbar}
        className="fixed top-4 left-4 z-50 p-2 bg-emerald-700 text-white rounded-md focus:outline-none"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Navbar container */}
      <div
        className={`fixed top-0 left-0 w-full bg-white shadow-lg transition-transform duration-300 z-40 ${
          isOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <nav className="p-4 pt-24 space-y-2">
          <Link
            href="/tasks"
            className="flex items-center space-x-3 text-emerald-900 hover:bg-emerald-800/40 rounded-lg px-3 py-2 transition-colors duration-200"
          >
            <CheckSquare size={20} />
            <span className="font-medium">Tasks</span>
          </Link>
          <Link
            href="/upload"
            className="flex items-center space-x-3 text-emerald-900 hover:bg-emerald-800/40 rounded-lg px-3 py-2 transition-colors duration-200"
          >
            <Upload size={20} />
            <span className="font-medium">Upload</span>
          </Link>
          <Link
            href="/planner"
            className="flex items-center space-x-3 text-emerald-900 hover:bg-emerald-800/40 rounded-lg px-3 py-2 transition-colors duration-200"
          >
            <Calendar size={20} />
            <span className="font-medium">Planner</span>
          </Link>
          <Link
            href="/capsule"
            className="flex items-center space-x-3 text-emerald-900 hover:bg-emerald-800/40 rounded-lg px-3 py-2 transition-colors duration-200"
          >
            <Package size={20} />
            <span className="font-medium">Capsule</span>
          </Link>
        </nav>
      </div>

      {/* Overlay to close the navbar when clicking outside */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 md:hidden"
          onClick={toggleNavbar}
        ></div>
      )}
    </div>
  );
};

export default Navbar;


