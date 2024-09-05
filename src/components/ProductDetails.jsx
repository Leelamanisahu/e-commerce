import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { addToCart } from '../redux/cartSlice';
import useFetch from '../customhook/useFetch';

const ProductDetails = () => {
  const { id } = useParams(); // Get the product ID from the URL parameters
  const dispatch = useDispatch();
  const [message,setMessage] = useState("");

  const cartHandler = ()=>{
      dispatch(addToCart(data))
      setMessage("Added to Cart");
  }

  const { data, loading, error } = useFetch(`https://dummyjson.com/products/${id}`);



  if (loading) {
    return <div className="text-center">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500">{error}</div>;
  }

  if (!data) {
    return null; // Render nothing if no product found
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-8">
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-4xl w-full">
        <div className="flex flex-col md:flex-row">
          <div className="flex-1 flex justify-center items-center">
            <img
              className="w-full h-64 object-contain"
              src={data?.thumbnail}
              alt={data?.title}
            />
          </div>
          <div className="flex-1 md:ml-6 mt-4 md:mt-0">
            <h2 className="text-2xl font-bold mb-2">{data?.title}</h2>
            <p className="text-gray-600 text-sm mb-4">Brand: {data?.brand}</p>
            <p className="text-gray-700 mb-4">{data?.description}</p>
            <p className="text-xl font-semibold mb-4">Price: ${data?.price}</p>
            <button
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
              onClick={() => {
                cartHandler()
              }}
            >
              Add to Cart
            </button>
          {message && <div className='w-[30%] text-center bg-slate-400 rounded-md mt-2 text-black p-1 shadow-lg'>
            {message}
          </div>}
          </div>
        </div>

        {/* Additional Images */}
        {data.images && data.images.length > 1 && (
          <div className="mt-8">
            <h3 className="text-lg font-semibold mb-2">More Images</h3>
            <div className="flex space-x-4">
              {data.images.map((image, index) => (
                <img
                  key={index}
                  className="w-24 h-24 object-cover border rounded"
                  src={image}
                  alt={`Product ${index + 1}`}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetails;
