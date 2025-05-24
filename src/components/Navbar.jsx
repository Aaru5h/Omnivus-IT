import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white shadow px-6 py-4 flex justify-between items-center">
      {/* Brand */}
      <Link to="/" className="flex flex-col leading-tight">
        <span className="text-2xl font-bold text-blue-600">OmniVus</span>
        <span className="text-sm text-gray-500">IT Services & Technology</span>
      </Link>

      {/* Navigation Links */}
      <div className="flex space-x-6">
        <Link
          to="/"
          className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
        >
          Home
        </Link>
        <Link
          to="/services"
          className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
        >
          Services
        </Link>
        <Link
          to="/blog"
          className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
        >
          Blog
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
