import React from 'react'
import ProductList from './ProductList'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center">
      {/* Hero Section */}
      <div className="text-center px-4 py-20">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">
          Welcome to ShoppyGlobe
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-8">
          Discover the best products from around the globe!
        </p>
        <Link
          to="/productList"
          className="inline-block bg-blue-500 text-white px-8 py-3 rounded-full text-lg shadow-md hover:bg-blue-600 transition-colors duration-300"
        >
          Shop Now
        </Link>
      </div>

      {/* Features Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10 px-4 md:px-20">
        <div className="bg-white rounded-lg shadow-md p-6 text-center">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Wide Range of Products</h3>
          <p className="text-gray-600">
            Explore a variety of categories including electronics, fashion, home appliances, and more.
          </p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 text-center">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Secure Payment</h3>
          <p className="text-gray-600">
            Shop with confidence with our secure and easy-to-use payment options.
          </p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 text-center">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Fast Delivery</h3>
          <p className="text-gray-600">
            Get your products delivered to your doorstep quickly and safely.
          </p>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="mt-16 text-center">
        <Link
          to="/productList"
          className="inline-block bg-green-500 text-white px-8 py-4 rounded-full text-lg shadow-md hover:bg-green-600 transition-colors duration-300"
        >
          Start Shopping
        </Link>
      </div>
    </div>

  )
}

export default Home
