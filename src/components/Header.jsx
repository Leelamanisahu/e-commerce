import React from 'react';
import { ShoppingCart, Search, User } from 'lucide-react'; // Importing icons from Lucide React
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-gray-800">
        ShoppyGlobe
        </div>
        
        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-8">
          <Link to="/" className="text-gray-600 hover:text-gray-900">Home</Link>
          <Link to="/cart" className="text-gray-600 hover:text-gray-900">Cart</Link>
        </nav>

        <div className="flex items-center space-x-4">
          {/* User Icon */}
          <User className="text-gray-600 w-6 h-6 hover:text-gray-900 cursor-pointer" />

          {/* Cart Icon */}
          <div className="relative">
            <ShoppingCart className="text-gray-600 w-6 h-6 hover:text-gray-900 cursor-pointer" />
            {/* Cart Badge */}
            <span className="absolute top-0 right-0 inline-block w-4 h-4 bg-red-600 text-white text-xs font-bold rounded-full text-center">
              3
            </span>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Toggle */}
      <div className="md:hidden flex justify-end pr-4">
        <button className="text-gray-600 hover:text-gray-900 focus:outline-none">
          {/* You can add a menu icon here for mobile view */}
          ☰
        </button>
      </div>
    </header>
  );
};

export default Header;
