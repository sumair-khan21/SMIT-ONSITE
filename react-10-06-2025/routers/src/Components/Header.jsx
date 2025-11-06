import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-[#050505]/90 backdrop-blur-md text-white py-4 shadow-lg">
      <div className="max-w-7xl mx-auto px-8 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src="/public/logo2.jpg" alt="logo" className="w-36 h-16" />
        </div>

        {/* Navbar Links */}
        <ul className="flex space-x-10 text-sm font-medium">
          <li>
            <Link
              to="/"
              className="text-gray-200 hover:text-[#3ef0c9] transition duration-300"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/course"
              className="text-gray-200 hover:text-[#3ef0c9] transition duration-300"
            >
              Courses
            </Link>
          </li>
          <li>
            <Link to="/about" className="text-[#f87171] transition duration-300">
              About
            </Link>
          </li>
          <li>
            <Link
              to="/contect"
              className="text-gray-200 hover:text-[#3ef0c9] transition duration-300"
            >
              Request Callback
            </Link>
          </li>
        </ul>

        {/* Button */}
        {/* <button className="bg-[#3ef0c9] text-black px-4 py-2 rounded-md font-semibold hover:bg-[#23bda3] transition duration-300">
          Sign In
        </button> */}
        <Link to="/login" className="bg-[#3ef0c9] text-black px-4 py-2 rounded-md font-semibold hover:bg-[#23bda3] transition duration-300">
        Login
        </Link>
      </div>
    </nav>
  );
};

export default Header;
