import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-lg py-4 fixed w-full z-50">
      <div className="container mx-auto flex justify-between items-center px-4 lg:px-8">
        {/* Logo */}
        <h1 className="text-2xl font-semibold text-blue-600">
          <Link to="/">My E-Commerce Store</Link>
        </h1>

        {/* Hamburger Menu for Mobile */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6 text-blue-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}
              />
            </svg>
          </button>
        </div>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex space-x-8">
          <Link to="/" className="text-gray-800 hover:text-blue-600 font-medium">
            Home
          </Link>
          <Link to="/products" className="text-gray-800 hover:text-blue-600 font-medium">
            Products
          </Link>
          <Link to="/about-us" className="text-gray-800 hover:text-blue-600 font-medium">
            About
          </Link>
          <Link to="/contact-us" className="text-gray-800 hover:text-blue-600 font-medium">
            Contact
          </Link>
          <Link to="/login" className="text-gray-800 hover:text-blue-600 font-medium">
            Login
          </Link>
          <Link to="/settings" className="text-gray-800 hover:text-blue-600 font-medium">
            Profile
          </Link>

          {/* Cart Icon with Count */}
          <Link to="/cart" className="relative text-gray-800 hover:text-blue-600 flex items-center">
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
                strokeWidth="2"
                d="M3 3h2l.4 2h14.4l1.2 6H8.4l-.5 2H21m-2 0a2 2 0 11-4 0 2 2 0 014 0zm-11 0a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            <span className="absolute top-0 right-0 bg-red-500 text-white text-xs font-bold rounded-full px-1" style={{ transform: 'translate(50%, -50%)' }}>
              0
            </span>
          </Link>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="lg:hidden absolute top-16 left-0 w-full bg-white shadow-lg">
            <ul className="flex flex-col items-center space-y-4 py-4">
              <li>
                <Link
                  to="/"
                  className="text-gray-800 hover:text-blue-600 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  className="text-gray-800 hover:text-blue-600 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  to="/about-us"
                  className="text-gray-800 hover:text-blue-600 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/contact-us"
                  className="text-gray-800 hover:text-blue-600 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  to="/login"
                  className="text-gray-800 hover:text-blue-600 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Login
                </Link>
              </li>
              <li>
                <Link
                  to="/settings"
                  className="text-gray-800 hover:text-blue-600 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Profile
                </Link>
              </li>
              <li>
                <Link
                  to="/cart"
                  className="relative text-gray-800 hover:text-blue-600 flex items-center"
                  onClick={() => setIsMenuOpen(false)}
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
                      strokeWidth="2"
                      d="M3 3h2l.4 2h14.4l1.2 6H8.4l-.5 2H21m-2 0a2 2 0 11-4 0 2 2 0 014 0zm-11 0a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                  <span className="absolute top-0 right-0 bg-red-500 text-white text-xs font-bold rounded-full px-1" style={{ transform: 'translate(50%, -50%)' }}>
                    0
                  </span>
                </Link>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
