import React, { useState } from "react";

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow z-50">
      <nav className="container mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#main" className="text-xl font-bold text-blue-600">
          Dinesh Courier
        </a>

        <button
          className="lg:hidden text-gray-700 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="text-2xl">&#9776;</span> {/* hamburger icon */}
        </button>

        <div
          className={`${
            menuOpen ? "block" : "hidden"
          } lg:flex lg:items-center space-y-2 lg:space-y-0 lg:space-x-6`}
        >
          <a href="#aboutUs" className="block text-gray-700 hover:text-blue-600">
            About Us
          </a>
          <a href="#contactUs" className="block text-gray-700 hover:text-blue-600">
            Contact Us
          </a>
          <a href="#shipNow" className="block text-gray-700 hover:text-blue-600">
            Ship Now
          </a>
          <a href="#FAQs" className="block text-gray-700 hover:text-blue-600">
            FAQ's
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
