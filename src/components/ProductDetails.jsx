import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
  const { id } = useParams(); // Get the product ID from the URL parameters
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch product details from API
    const fetchProductDetails = async () => {
      try {
        const res = await fetch(`https://dummyjson.com/products/${id}`);

        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }

        const data = await res.json();
        setProduct(data); // Update product state
        setLoading(false);
      } catch (error) {
        console.error('Error fetching product details:', error);
        setError('Failed to fetch product details. Please try again later.');
        setLoading(false);
      }
    };

    fetchProductDetails();
  }, [id]);

  if (loading) {
    return <div className="text-center">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500">{error}</div>;
  }

  if (!product) {
    return null; // Render nothing if no product found
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-8">
      {/* Product Details Container */}
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-4xl w-full">
        {/* Product Images */}
        <div className="flex flex-col md:flex-row">
          <div className="flex-1 flex justify-center items-center">
            <img
              className="w-full h-64 object-contain"
              src={product.thumbnail}
              alt={product.title}
            />
          </div>
          <div className="flex-1 md:ml-6 mt-4 md:mt-0">
            {/* Product Title */}
            <h2 className="text-2xl font-bold mb-2">{product.title}</h2>
            {/* Product Brand */}
            <p className="text-gray-600 text-sm mb-4">Brand: {product.brand}</p>
            {/* Product Description */}
            <p className="text-gray-700 mb-4">{product.description}</p>
            {/* Product Price */}
            <p className="text-xl font-semibold mb-4">Price: ${product.price}</p>
            {/* Add to Cart Button */}
            <button
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
              onClick={() => {
                // Functionality to add to cart
                alert('Product added to cart!');
              }}
            >
              Add to Cart
            </button>
          </div>
        </div>

        {/* Additional Images */}
        {product.images && product.images.length > 1 && (
          <div className="mt-8">
            <h3 className="text-lg font-semibold mb-2">More Images</h3>
            <div className="flex space-x-4">
              {product.images.map((image, index) => (
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
