import React from 'react';
import { ShoppingCart, Search, User } from 'lucide-react'; // Importing icons from Lucide React
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
  const { cart } = useSelector((state) => state.cart);
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/">
        <div className="text-2xl font-bold text-gray-800">
        ShoppyGlobe
        </div>
        </Link>
        
        <div className="flex items-center space-x-4">
       
          <User className="text-gray-600 w-6 h-6 hover:text-gray-900 cursor-pointer" />

          {/* Cart Icon */}
          <Link to="/cart">
          <div className="relative">
            <ShoppingCart className="text-gray-600 w-6 h-6 hover:text-gray-900 cursor-pointer" />
            {/* Cart Badge */}
          { cart.length > 0 && <span className="absolute top-0 right-0 inline-block w-4 h-4 bg-red-600 text-white text-xs font-bold rounded-full text-center">
             {cart.length}
            </span>}
          </div>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
